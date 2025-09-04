import { useState } from "react";
import reactLogo from "./assets/react.svg";
import gsapLogo from "./assets/gsap.svg";
import tailwindcssLogo from "./assets/tailwindcss.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-neutral-800 text-center">
      <div className="mx-auto flex w-fit items-center gap-5">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" className="h-10" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" className="h-10" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindcssLogo} alt="TailwindCSS logo" className="h-10" />
        </a>
        <a href="https://gsap.com" target="_blank">
          <img src={gsapLogo} alt="GSAP logo" className="h-10" />
        </a>
      </div>
      <h1 className="mt-24 text-xl font-medium text-neutral-200">
        <span className="text-shadow-[#b939fe] text-shadow-[0px_1px_5px_#0ae448]">
          Vite
        </span>{" "}
        +{" "}
        <span className="text-shadow-[#00d8ff] text-shadow-[0px_1px_5px_#0ae448]">
          React
        </span>{" "}
        +{" "}
        <span className="text-shadow-[#38bdf8] text-shadow-[0px_1px_5px_#0ae448]">
          TailwindCSS
        </span>{" "}
        +{" "}
        <span className="text-shadow-[#0ae448] text-shadow-[0px_1px_5px_#0ae448]">
          GSAP
        </span>
      </h1>
      <div className="mt-10 flex flex-col items-center gap-5">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#0ae448] px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0px_0px_10px_#0ae448] transition-all duration-300 hover:bg-[#08ff36] hover:shadow-[0px_0px_15px_#0ae448] focus-visible:outline-hidden"
        >
          Count is <span className="text-lg font-medium">{count}</span>
        </button>
        <p className="text-sm text-neutral-300">
          Edit&nbsp;
          <code className="cursor-pointer rounded-lg bg-neutral-700 p-0.5 text-xs font-medium text-neutral-100 hover:bg-neutral-600">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
        <p className="text-xs font-medium text-neutral-50">
          Click on the logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
