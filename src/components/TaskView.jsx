import Button from "./Button";
import { CustomInput } from "./Input";
import Section from "./Section";
import Task from "./Task";

export default function TaskView() {
  return (
    <Section title="Tasks">
      <div className="flex justify-between">
        <CustomInput type="text" required />
        <Button content="Add" purpose="add" />
      </div>
      <div className="flex flex-col bg-white rounded p-2 space-y-2">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </Section>
  );
}
