import Button from "./Button";
import Input from "./Input";
import Section from "./Section";
import dateFormatter from "../utils/dateFormatter";

import { useRef, useState } from "react";

let currentDate = new Date();
currentDate = currentDate.toLocaleDateString();
export default function ProjectInput({
  onChangeContentDisplayed,
  onAddProject,
}) {
  const [title, setTitle] = useState("");
  const description = useRef("");
  const dueDate = useRef("");

  function handleTitleChange(t) {
    setTitle(t);
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
                id: 0,
                title: title,
                description: description.current.value
                  ? description.current.value
                  : "Project without description :(",
                dueDate: dueDate.current.value
                  ? dateFormatter(dueDate.current.value)
                  : currentDate,
                tasks: [],
              });
            }}
            content="Save"
            purpose="save"
            disabled={title === ""}
          />
        </>
      }
    >
      <Input
        value={title}
        onChange={(e) => handleTitleChange(e.target.value)}
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
