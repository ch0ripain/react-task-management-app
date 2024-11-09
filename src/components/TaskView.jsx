import { useRef, useState } from "react";
import Button from "./Button";
import { CustomInput } from "./Input";
import Section from "./Section";
import Task from "./Task";

const TASK = {
  id: 0,
  text: "",
};

export default function TaskView({ tasks, onAddTask, onDeleteTask }) {
  const [task, setTask] = useState(TASK);

  function handleChangeTask(t) {
    setTask(t);
  }

  let taskIdRef = useRef({
    id: -1,
  });
  return (
    <Section title="Tasks">
      <div className="flex justify-between">
        <CustomInput
          value={task.text}
          onChange={(e) =>
            handleChangeTask({
              id: taskIdRef.current.id + 1,
              text: e.target.value,
            })
          }
          name="task"
          type="text"
          required
        />
        <Button
          content="Add"
          onClick={() => {
            taskIdRef.current.id = taskIdRef.current.id + 1;
            setTask(TASK);
            onAddTask(task);
          }}
          purpose="add"
          disabled={task.text === ""}
        />
      </div>
      {tasks.length > 0 && (
        <div className="flex flex-col py-2 space-y-2">
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
          ))}
        </div>
      )}
    </Section>
  );
}
