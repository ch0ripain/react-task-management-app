import Button from "./Button";
import Input from "./Input";
import Section from "./Section";

import { useRef, useState } from "react";

export default function ProjectInput({
  onChangeContentDisplayed,
  onAddProject,
}) {
  const title = useRef("hola");
  const description = useRef("");
  const dueDate = useRef("");

  const [isDisabled, setIsDisabled] = useState(false);

  if (
    title.current.value === "" ||
    description.current.value === "" ||
    dueDate.current.value === ""
  ) {
    setIsDisabled(true);
  }

  return (
    <Section
      title="Add a new project!"
      buttons={
        <>
          <Button
            onClick={() => onChangeContentDisplayed("project-preview")}
            content="Cancel"
            purpose="cancel"
          />
          <Button
            onClick={() => {
              onAddProject({
                title: title.current.value,
                description: description.current.value,
                dueDate: dueDate.current.value,
                tasks: [],
              });
            }}
            content="Save"
            purpose="save"
            disabled={isDisabled}
          />
        </>
      }
    >
      <Input
        ref={title}
        value={title.current.value}
        name="title"
        labelFor="project"
        label="title"
        type="text"
        required
      />
      <Input
        ref={description}
        name="description"
        labelFor="project"
        label="description"
        textarea
        type="text"
        required
      />
      <Input
        ref={dueDate}
        name="dueDate"
        labelFor="project"
        label="due date"
        type="date"
        required
      />
    </Section>
  );
}
