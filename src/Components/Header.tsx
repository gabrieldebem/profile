interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return <h2 className="text-4xl font-semibold my-2 heading uppercase">&lt;{children}&gt;</h2>;
}
