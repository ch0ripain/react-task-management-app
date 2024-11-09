import { useRef } from "react";
import Button from "./Button";
import { CustomInput } from "./Input";
import Section from "./Section";
import Task from "./Task";

export default function TaskView({ tasks, onAddTask, onDeleteTask }) {
  const taskRef = useRef();

  return (
    <Section title="Tasks">
      <div className="flex justify-between">
        <CustomInput ref={taskRef} name="task" type="text" required />
        <Button
          content="Add"
          onClick={() => onAddTask(taskRef.current.value)}
          purpose="add"
        />
      </div>
      {tasks.length > 0 && (
        <div className="flex flex-col py-2 space-y-2">
          {tasks.map((task, taskIndex) => (
            <Task key={taskIndex} task={task} onDeleteTask={onDeleteTask} />
          ))}
        </div>
      )}
    </Section>
  );
}
