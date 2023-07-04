import { observer } from "mobx-react-lite";
import appState from "../mobX/appState";
import counter from "../mobX/counter";

console.log("app state theme:", appState.theme);
// const { count, inc } = counter;

const Test = observer(() => {
  const themeStyle = appState.theme === "light" ? "bg-orange-200" : "bg-orange-600"

  return (
    <div className={`flex flex-col gap-y-4 ${themeStyle} w-full h-[300px]`}>
      <p className="text-center text-xl p-4">This is a TEST component</p>
      <h2 className="text-center text-2xl">Count: {counter.count}</h2>
      <button className="m-auto w-fit p-4 border border-black rounded-md" type="button" onClick={() => counter.inc()}>increment</button>
      <button className="m-auto w-fit p-4 border border-black rounded-md" type="button" onClick={() => appState.toggleTheme()}>Toggle theme</button>
    </div>
  )
})

export default Test;
