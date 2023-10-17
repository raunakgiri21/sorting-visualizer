import Navbar from "./Components/Navbar/Navbar";
import Visualizer from "./Components/Visualizer/Visualizer";

function App() {
  return (
    <div className="grid grid-rows-6 bg-gray-100 w-screen h-screen">
      <Navbar />
      <Visualizer/>
    </div>
  );
}

export default App;
