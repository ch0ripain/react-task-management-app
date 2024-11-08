import Button from "./Button";

export default function ProjectSidebar({ onChangeContentDisplayed }) {
  return (
    <aside className=" bg-black flex-initial p-10 w-80 rounded-r-lg">
      <h1 className="uppercase py-2 text-white font-bold">Your projects</h1>
      <Button
        onClick={() => onChangeContentDisplayed("project-input")}
        content="+ Add project"
      />
      <p
        onClick={() => onChangeContentDisplayed("project-view")}
        className="text-white font-bold"
      >
        Learning React
      </p>
    </aside>
  );
}
