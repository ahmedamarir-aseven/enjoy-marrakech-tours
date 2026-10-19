import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { optimizeImage } from '@/data/site'

const IMAGES = [
  {
    src: 'https://images.pexels.com/photos/35891424/pexels-photo-35891424.jpeg',
    title: 'Marrakech Medina',
    location: 'Rooftops of the ancient red city',
    className: 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto',
  },
  {
    src: 'https://images.pexels.com/photos/5614643/pexels-photo-5614643.jpeg',
    title: 'Sahara Desert',
    location: 'Erg Chebbi sand dunes, Merzouga',
    className: 'aspect-square',
  },
  {
    src: 'https://images.pexels.com/photos/36956708/pexels-photo-36956708.jpeg',
    title: 'Essaouira Ramparts',
    location: 'Atlantic coast fortifications',
    className: 'aspect-square',
  },
  {
    src: 'https://images.pexels.com/photos/37538532/pexels-photo-37538532.jpeg',
    title: 'High Atlas Mountains',
    location: 'Summit peaks and local valley trails',
    className: 'md:col-span-2 aspect-[2/1] md:aspect-auto',
  },
  {
    src: 'https://images.pexels.com/photos/35548676/pexels-photo-35548676.jpeg',
    title: 'Ait Ben Haddou',
    location: 'UNESCO clay kasbah film sets',
    className: 'aspect-square md:row-span-2 md:aspect-auto',
  },
  {
    src: 'https://images.pexels.com/photos/13568746/pexels-photo-13568746.jpeg',
    title: 'Hot Air Balloon',
    location: 'Foothills sunrise flight over Marrakech',
    className: 'aspect-square',
  },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="hidden sm:block relative scroll-mt-24 py-24 lg:py-32 overflow-hidden bg-sand">
      {/* Decorative ambient lighting */}
      <div className="absolute -left-64 top-1/4 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-64 bottom-1/4 h-[500px] w-[500px] rounded-full bg-palm/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <SectionHeading
          eyebrow="Visual Journal"
          title="Moments from the road"
          lead="Snapshots of the imperial cities, desert caravans, and towering peaks that our guests experience every day."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:grid-flow-row-dense">
          {IMAGES.map((img, idx) => {
            // Pick a layout dimension optimization (larger width for double span, normal for standard)
            const isWide = img.className.includes('md:col-span-2')
            const imgWidth = isWide ? 1000 : 600
            const imgHeight = isWide ? 600 : 600

            return (
              <Reveal key={img.title} delay={idx * 80} className={img.className}>
                <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-palm border border-sand-line/50 shadow-sm transition-all duration-500 hover:shadow-lux">
                  <img
                    src={optimizeImage(img.src, imgWidth, imgHeight)}
                    alt={img.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  
                  {/* Clean dark gradient slide-up overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-palm-deep/90 via-palm-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Info Text (Slides up on Hover) */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                      {img.title}
                    </span>
                    <h4 className="mt-1 font-display text-[20px] font-medium text-sand">
                      {img.location}
                    </h4>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
