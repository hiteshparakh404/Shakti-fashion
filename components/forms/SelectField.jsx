export default function SelectField({ label, name, value, onChange, error, options, required = false }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#0d2f57]">
        {label} {required && <span className="text-[#d62828]">*</span>}
      </span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-2 min-h-11 w-full rounded-2xl border bg-white px-4 py-3 text-slate-700 shadow-sm outline-none transition focus:border-[#1f78b8] focus:ring-4 focus:ring-blue-100 ${error ? "border-[#d62828]" : "border-blue-100"}`}
      >
        <option value="">Select collection</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <span id={`${name}-error`} className="mt-2 block text-sm font-semibold text-[#d62828]">
          {error}
        </span>
      )}
    </label>
  );
}

