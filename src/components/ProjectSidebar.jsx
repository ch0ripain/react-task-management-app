import Button from "./Button";

export default function ProjectSidebar({
  onChangeContentDisplayed,
  projects,
  selectedProjectIndex,
}) {
  return (
    <aside className=" bg-black flex-initial p-10 w-80 rounded-r-lg">
      <h1 className="uppercase py-2 text-white font-bold">Your projects</h1>
      <Button
        onClick={() => onChangeContentDisplayed("project-input")}
        content="+ Add project"
      />
      <div className="p-1 space-y-2">
        {projects.length > 0 &&
          projects.map((project, projectIndex) => {
            return (
              <p
                onClick={() =>
                  onChangeContentDisplayed("project-view", projectIndex)
                }
                className={`${
                  projectIndex === selectedProjectIndex
                    ? "animate-pulse text-white bg-gradient-to-br from-pink-500 to-orange-400"
                    : "text-black bg-gray-200"
                } pl-3 py-1 rounded-r-lg cursor-pointer font-bold`}
                key={project.title}
              >
                {project.title}
              </p>
            );
          })}
      </div>
    </aside>
  );
}
