export default function InputField({ label, name, value, onChange, error, required = false, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-[#0d2f57]">
        {label} {required && <span className="text-[#d62828]">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        inputMode={name === "phone" ? "numeric" : undefined}
        pattern={name === "phone" ? "[0-9]*" : undefined}
        maxLength={name === "phone" ? 10 : name === "company" ? 100 : name === "firstName" || name === "lastName" ? 50 : undefined}
        onKeyDown={name === "phone" ? (event) => event.key.length === 1 && !/\d/.test(event.key) && !event.ctrlKey && !event.metaKey && event.preventDefault() : undefined}
        onPaste={name === "phone" ? (event) => !/^\d+$/.test(event.clipboardData.getData("text")) && event.preventDefault() : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`mt-2 min-h-11 w-full rounded-2xl border bg-white px-4 py-3 text-slate-700 shadow-sm outline-none transition focus:border-[#1f78b8] focus:ring-4 focus:ring-blue-100 ${error ? "border-[#d62828]" : "border-blue-100"}`}
      />
      {error && (
        <span id={`${name}-error`} className="mt-2 block text-sm font-semibold text-[#d62828]">
          {error}
        </span>
      )}
    </label>
  );
}

