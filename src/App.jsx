import { useState } from "react";
import ProjectInput from "./components/ProjectInput";
import ProjectInputPreview from "./components/ProjectInputPreview";
import ProjectSidebar from "./components/ProjectSidebar";
import ProjectView from "./components/ProjectView";

function App() {
  const [activeView, setActiveView] = useState("project-preview");
  let activeContentDisplayed = <ProjectInputPreview />;
  function handleChangeContentDisplayed(displayTitle) {
    setActiveView(displayTitle);
  }

  if (activeView && activeView === "project-input") {
    activeContentDisplayed = (
      <ProjectInput onChangeContentDisplayed={handleChangeContentDisplayed} />
    );
  } else if (activeView === "project-view") {
    activeContentDisplayed = (
      <ProjectView onChangeContentDisplayed={handleChangeContentDisplayed} />
    );
  } else {
    activeContentDisplayed = (
      <ProjectInputPreview
        onChangeContentDisplayed={handleChangeContentDisplayed}
      />
    );
  }

  return (
    <main
      className={`${
        activeView == "project-preview"
          ? "bg-gray-300"
          : "bg-gradient-to-r from-slate-800 to-violet-900"
      } py-10 flex min-h-svh`}
    >
      <ProjectSidebar onChangeContentDisplayed={handleChangeContentDisplayed} />
      {activeContentDisplayed}
      <div></div>
    </main>
  );
}

export default App;
