import Button from "./Button";
import Section from "./Section";

export default function ProjectInputPreview() {
  return (
    <Section>
      <img className=" max-w-20 max-h-20" src="/logo.png" alt="note-read" />
      <h1 className=" font-bold uppercase">No project selected</h1>
      <p>Please select a project or get started with a new one</p>
      <Button content="Create new project" type="delete" />
    </Section>
  );
}
