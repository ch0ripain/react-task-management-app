import Section from "./Section";
import Button from "./Button";
import TaskView from "./TaskView";

export default function ProjectView({ onChangeContentDisplayed }) {
  return (
    <Section
      title="Learning React"
      buttons={
        <Button
          onClick={() => onChangeContentDisplayed("project-preview")}
          content="Delete"
          purpose="delete"
        />
      }
    >
      <p className=" text-gray-300 opacity-65">Nov 7, 2024</p>
      <p className=" text-white text-left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, velit
        consequatur voluptates exercitationem ipsa aperiam debitis, voluptatem
        repellat nostrum et nulla deleniti sit hic eaque nesciunt provident quae
        ipsum quis.
      </p>
      <hr></hr>
      <TaskView />
    </Section>
  );
}
