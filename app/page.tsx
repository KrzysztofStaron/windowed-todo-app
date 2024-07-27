"use client";

import { useState } from "react";
import TaskWindow, { createTask, Task } from "./TaskWindow";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const openTaskWindow = (containerId: number) => {
    console.log("open: " + containerId);
  };

  return (
    <div
      className="w-screen h-screen"
      onMouseMove={(e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }}
    >
      <TaskWindow
        mousePosition={mousePosition}
        containerId={0}
        startingName={"Color Tests"}
        openTaskWindow={openTaskWindow}
        defTasks={[
          createTask("I'm Yellow", "yellow"),
          createTask("I'm Blue", "blue"),
          createTask("I'm Red", "red"),
        ]}
      />

      <TaskWindow
        mousePosition={mousePosition}
        containerId={1}
        startingName={"Todo"}
        openTaskWindow={openTaskWindow}
        defTasks={[
          createTask("Integrate", "blue"),
          createTask("Debug", "blue"),
          createTask("Make cup", "blue"),
          createTask("Kill water", "blue"),
        ]}
      />
      <div className="absolute bottom-0 h-10  bg-zinc-800"></div>
    </div>
  );
};

export default Home;
