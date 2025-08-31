export function Card({ children }) {
  return <div className="rounded-xl border bg-white p-4 shadow">{children}</div>
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>
}
