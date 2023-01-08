interface IContentProps {
  title: string
  children: React.ReactNode
}
export function Content({ title, children }: IContentProps) {
  return (
    <div>
    <h2 className="font-bold text-lg">{title}</h2>
    {children}
    </div>
  )
}
