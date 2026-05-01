export function Input({ id, type, placeholder, value, onChange, required }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
    />
  );
}