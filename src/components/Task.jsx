import Button from "./Button";

export default function Task() {
  return (
    <div className=" flex bg-gray-300 rounded">
      <div className="flex-1">
        <p className="p-2">task</p>
      </div>
      <Button content="Clear" purpose="save" />
    </div>
  );
}
