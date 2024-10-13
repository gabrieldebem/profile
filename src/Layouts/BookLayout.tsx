interface BookLayoutProps {
  children: React.ReactNode;
}

export function BookLayout({ children }: BookLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row">
      {children}
    </div>
  );
}
