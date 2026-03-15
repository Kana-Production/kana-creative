import Link from "next/link"

export default function Button({
  children,
  link,
  className = ""
}: {
  children: React.ReactNode
  link: string
  className?: string
}) {
  return (
    <Link
      href={link}
      className={`px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-80 transition ${className}`}
    >
      {children}
    </Link>
  )
}