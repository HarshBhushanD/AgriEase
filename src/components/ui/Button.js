export function Button({ type, children }) {
    return (
      <button
        type={type}
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {children}
      </button>
    );
  }
  