import Button from "./Button";

export default function ProjectSidebar() {
  return (
    <aside className=" bg-black flex-initial p-10 w-80 rounded-r-lg">
      <h1 className="uppercase py-2 text-white font-bold">Your projects</h1>
      <Button content="+ Add project" />
    </aside>
  );
}
