export default function Section({ title, children, buttons }) {
  return (
    <section
      className={`flex flex-1 flex-col ${
        title
          ? `${
              title.includes("Task")
                ? "pt-0"
                : "pt-20 pb-10 pl-20 pr-80 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-l-lg"
            } `
          : "py-40 px-20 items-center"
      } space-y-4`}
    >
      {buttons && (
        <div className="flex justify-between">
          <h1 className="uppercase py-2 font-bold text-white">{title}</h1>
          <div>{buttons}</div>
        </div>
      )}
      {!buttons && (
        <h1 className="uppercase py-2 font-bold text-white">{title}</h1>
      )}
      {children}
    </section>
  );
}
