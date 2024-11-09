import Button from "./Button";
import Section from "./Section";
import TaskView from "./TaskView";

export default function ProjectView({
  onChangeContentDisplayed,
  onDelete,
  selectedProject,
  onAddTask,
  onDeleteTask,
}) {
  return (
    <Section
      title={selectedProject.title}
      buttons={
        <Button
          onClick={() => onDelete(selectedProject.title)}
          content="Delete"
          purpose="delete"
        />
      }
    >
      <p className=" text-gray-300 opacity-65">{selectedProject.dueDate}</p>
      <p className=" text-white text-left">{selectedProject.description}</p>
      <hr></hr>
      <TaskView
        tasks={selectedProject.tasks}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    </Section>
  );
}
