import { useState } from "react";
function App() {
  const [color, setColor] = useState("green");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center gap-3 bottom-10 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2
        bg-white px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-3xl "
            style={{ backgroundColor: "red" }}
            
          >
            red
          </button>
        </div>
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2
        bg-white px-3 py-2 rounded-3xl"
        >
          <button
          onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2 rounded-3xl "
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
        </div>
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2
        bg-white px-3 py-2 rounded-3xl"
        >
          <button
          onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-3xl "
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
