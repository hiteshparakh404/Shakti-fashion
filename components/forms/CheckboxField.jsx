export default function CheckboxField({ checked, onChange, error, children }) {
  return (
    <div>
      <label className={`flex items-start gap-3 rounded-2xl border bg-blue-50/50 p-4 text-sm leading-6 text-slate-600 ${error ? "border-[#d62828]" : "border-blue-100"}`}>
        <input
          type="checkbox"
          name="consent"
          checked={checked}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-blue-200 accent-[#d62828]"
        />
        <span className="min-w-0 break-words">{children}</span>
      </label>
      {error && <span className="mt-2 block text-sm font-semibold text-[#d62828]">{error}</span>}
    </div>
  );
}

