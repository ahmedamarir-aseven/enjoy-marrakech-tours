import { Link } from 'react-router'

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <img
        src="/images/logo.png"
        alt="Enjoy Marrakech Tours"
        className={`h-11 w-auto object-contain transition-all duration-300 scale-[1.2] origin-left ${
          light ? 'brightness-0 invert' : ''
        }`}
      />
    </Link>
  )
}
