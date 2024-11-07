import ProjectSidebar from "./components/ProjectSidebar";
import ProjectInputPreview from "./components/ProjectInputPreview";
import ProjectInput from "./components/ProjectInput";
import ProjectView from "./components/ProjectView";

function App() {
  return (
    <main className="py-10 bg-gray-300 flex min-h-svh">
      <ProjectSidebar />
      {/* <ProjectInputPreview /> */}
      {/* <ProjectInput /> */}
      <ProjectView />
    </main>
  );
}

export default App;
