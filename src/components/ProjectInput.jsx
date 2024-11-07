import Button from "./Button";
import Input from "./Input";
import Section from "./Section";

export default function ProjectInput() {
  return (
    <Section
      title="Add a new project!"
      buttons={
        <>
          <Button content="Cancel" purpose="cancel" />
          <Button content="Save" purpose="save" />
        </>
      }
    >
      <Input label="title" type="text" required />
      <Input label="description" textarea type="text" required />
      <Input label="due date" type="date" required />
    </Section>
  );
}
