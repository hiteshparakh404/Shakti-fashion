export default function SubmitButton({ loading }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="flex w-full items-center justify-center rounded-full bg-[#d62828] px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-700/20 transition hover:-translate-y-0.5 hover:bg-[#b91c1c] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <span className="flex items-center gap-3">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          Submitting...
        </span>
      ) : (
        "Submit Enquiry"
      )}
    </button>
  );
}
