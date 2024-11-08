import Button from "./Button";
import Input from "./Input";
import Section from "./Section";

export default function ProjectInput({ onChangeContentDisplayed }) {
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
            onClick={() => onChangeContentDisplayed("project-preview")}
            content="Save"
            purpose="save"
          />
        </>
      }
    >
      <Input label="title" type="text" required />
      <Input label="description" textarea type="text" required />
      <Input label="due date" type="date" required />
    </Section>
  );
}
