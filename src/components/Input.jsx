import { forwardRef } from "react";

function Label({ label, ...props }) {
  return (
    <label
      {...props}
      className="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
  );
}

export const CustomInput = forwardRef(function CustomInput(
  { textarea, ...props },
  ref
) {
  return (
    <>
      {textarea ? (
        <textarea
          ref={ref}
          {...props}
          className="block w-100 h-20 p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      ) : (
        <input
          ref={ref}
          {...props}
          className="block w-full h-10 p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      )}
    </>
  );
});

const Input = forwardRef(function Input({ label, labelFor, ...props }, ref) {
  return (
    <>
      <Label htmlFor={labelFor} label={label} />
      <CustomInput id={labelFor} ref={ref} {...props} />
    </>
  );
});

export default Input;
