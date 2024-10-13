interface ListProps {
  items: string[];
}

export function List({ items }: ListProps) {
  return (
    <div className="text-lg mb-4 ml-6">
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}
