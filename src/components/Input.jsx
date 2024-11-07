function Label({ label }) {
  return (
    <label className="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
  );
}

export function CustomInput({ textarea, ...props }) {
  return (
    <>
      {textarea ? (
        <textarea
          {...props}
          className="block w-100 h-20 p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      ) : (
        <input
          {...props}
          className="block w-full h-10 p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      )}
    </>
  );
}

export default function Input({ label, ...props }) {
  return (
    <div className="relative flex flex-col">
      <Label label={label} />
      <CustomInput {...props} />
    </div>
  );
}
