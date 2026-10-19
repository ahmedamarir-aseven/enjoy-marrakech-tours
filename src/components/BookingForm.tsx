import { useState, type FormEvent } from 'react'
import { CalendarDays, CheckCircle2, MessageCircle, Send } from 'lucide-react'
import { CATEGORIES } from '@/data/site'
import { useTranslation } from '@/i18n/LanguageContext'
import { trackBookingSubmission } from '@/lib/analytics'

type BookingFormProps = {
  initialService?: string
  readOnlyService?: boolean
}

const inputCls =
  'w-full min-h-[48px] rounded-lg border border-sand-line bg-white px-4 py-3 text-[14.5px] font-light text-ink outline-none transition placeholder:text-ink-soft/50 focus:border-gold focus:ring-1 focus:ring-gold/20 appearance-none'

const selectCls =
  `${inputCls} bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23C6A15B%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[right_16px_center] bg-[length:18px_18px] bg-no-repeat pr-10`

// ─── Web3Forms access key ────────────────────────────────────────────────────
// Get your FREE key at https://web3forms.com (enter ahmamarir1@gmail.com)
const WEB3FORMS_KEY = 'b4f79ccb-bf1a-4f17-8ac2-904423ec2dcf'
// ─────────────────────────────────────────────────────────────────────────────

export default function BookingForm({ initialService = '', readOnlyService = false }: BookingFormProps) {
  const { t } = useTranslation()
  const f = t.form

  const [service, setService] = useState(initialService)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const fd = new FormData(e.currentTarget)
    const activeService = readOnlyService ? initialService : service

    const body = [
      `Service: ${activeService || 'Not specified'}`,
      `Date: ${fd.get('date') || 'Flexible'}`,
      `Travellers: ${fd.get('travelers')}`,
      `Name: ${fd.get('name')}`,
      `Email: ${fd.get('email')}`,
      fd.get('phone') ? `Phone: ${fd.get('phone')}` : '',
      fd.get('notes') ? `\nNotes:\n${fd.get('notes')}` : '',
    ].filter(Boolean).join('\n')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Booking Request — ${activeService || 'General Inquiry'}`,
          from_name: fd.get('name'),
          email: fd.get('email'),
          message: body,
          botcheck: '',
        }),
      })

      const data = await res.json()
      if (data.success) {
        setSent(true)
        trackBookingSubmission({
          service: activeService || 'General Inquiry',
          travelers: String(fd.get('travelers') || ''),
          date: String(fd.get('date') || ''),
        })
      } else {
        setError(f.errorGeneral)
      }
    } catch {
      setError(f.errorNetwork)
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-sand/10 border border-sand-line/45 rounded-2xl animate-in fade-in duration-300">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-palm/10 text-palm mb-6">
          <CheckCircle2 className="h-8 w-8 text-gold-deep" strokeWidth={1.5} />
        </span>
        <h3 className="font-display text-2xl font-semibold text-palm-deep">{f.successTitle}</h3>
        <p className="mt-4 text-[14px] font-light leading-relaxed text-ink-soft">
          {f.successDesc}
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 rounded-full border border-palm px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-palm hover:bg-palm hover:text-sand transition-all duration-300"
        >
          {f.submitAnother}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="mb-2 block text-[9.5px] font-bold uppercase tracking-[0.2em] text-palm/80">
          {f.selectedService}
        </label>
        {readOnlyService ? (
          <input
            type="text"
            value={initialService}
            readOnly
            className="w-full min-h-[48px] rounded-lg border border-sand-line/45 bg-sand/30 px-4 py-3 text-[14px] text-ink-soft outline-none cursor-not-allowed appearance-none"
          />
        ) : (
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={selectCls}
            required
          >
            <option value="" disabled>{f.selectPlaceholder}</option>
            {CATEGORIES.map((c) => (
              <optgroup key={c.id} label={c.label}>
                {c.services.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </optgroup>
            ))}
            <optgroup label={f.somethingElse}>
              <option value="Custom itinerary">{f.customItinerary}</option>
            </optgroup>
          </select>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-[9.5px] font-bold uppercase tracking-[0.2em] text-palm/80">
            {f.preferredDate}
          </label>
          <div className="relative">
            <input name="date" type="date" required className={inputCls} />
            <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gold-deep" />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-[9.5px] font-bold uppercase tracking-[0.2em] text-palm/80">
            {f.travellers}
          </label>
          <select name="travelers" className={selectCls} defaultValue="2">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? f.person : f.people}
              </option>
            ))}
            <option value="7+">{f.group}</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-[9.5px] font-bold uppercase tracking-[0.2em] text-palm/80">
            {f.fullName}
          </label>
          <input name="name" required placeholder={f.namePlaceholder} className={inputCls} />
        </div>
        <div>
          <label className="mb-2 block text-[9.5px] font-bold uppercase tracking-[0.2em] text-palm/80">
            {f.email}
          </label>
          <input name="email" type="email" required placeholder="you@email.com" className={inputCls} />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-[9.5px] font-bold uppercase tracking-[0.2em] text-palm/80">
          {f.phone} <span className="font-normal normal-case text-ink-soft/75">{f.optional}</span>
        </label>
        <input name="phone" placeholder="+44 ..." className={inputCls} />
      </div>

      <div>
        <label className="mb-2 block text-[9.5px] font-bold uppercase tracking-[0.2em] text-palm/80">
          {f.notes}
        </label>
        <textarea
          name="notes"
          rows={3}
          placeholder={f.notesPlaceholder}
          className={`${inputCls} resize-none min-h-[96px]`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-palm border border-palm py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-sand transition-all duration-300 hover:bg-gold hover:border-gold hover:text-palm-deep hover:-translate-y-0.5 hover:shadow-lux disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-palm disabled:hover:border-palm disabled:hover:text-sand"
      >
        {loading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            {f.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {f.send}
          </>
        )}
      </button>

      {error && (
        <p className="mt-3 text-center text-[13px] font-light text-red-500">{error}</p>
      )}

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-[12.5px] font-light text-ink-soft">
        <MessageCircle className="h-3.5 w-3.5 text-gold-deep" />
        {f.replyTime}
      </p>
    </form>
  )
}
