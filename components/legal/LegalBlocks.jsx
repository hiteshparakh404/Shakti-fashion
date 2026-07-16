export function LegalHeading({ children }) {
  return <h2 className="mt-10 break-words text-2xl font-black text-[#0d2f57]">{children}</h2>;
}

export function LegalParagraph({ children }) {
  return <p className="mt-4 break-words leading-[1.8] text-slate-700">{children}</p>;
}

export function LegalList({ items }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 leading-[1.8] text-slate-700">
      {items.map((item) => (
        <li key={item} className="break-words">{item}</li>
      ))}
    </ul>
  );
}

export function LegalTable({ rows }) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-blue-100">
      <table className="w-full table-fixed border-collapse text-left text-sm text-slate-700">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-blue-100 last:border-b-0">
              <th className="w-28 bg-blue-50 px-3 py-3 align-top font-black text-[#0d2f57] sm:w-36 sm:px-4">{label}</th>
              <td className="break-words px-3 py-3 leading-7 sm:px-4">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
