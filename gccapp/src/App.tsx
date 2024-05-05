import ExampleComponent from "./components/exampleComponent";
import BackgroundHomepage from "./components/background-homepage";

function App() {
  const backendName: string = "John Doe"; // mock name implemenatation, will be changed later on

  return (
    <div>
      <ExampleComponent text="Hello, World!" />
      <BackgroundHomepage name={backendName} />
    </div>
  );
}

export default App;
