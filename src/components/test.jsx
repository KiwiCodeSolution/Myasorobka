import { observer } from "mobx-react-lite";
import appState from "../mobX/appState";
import counter from "../mobX/counter";
import LangForm from "./langForm";

const Test = observer(() => {
  const { count, inc } = counter;
  const { toggleTheme } = appState;

  const themeStyle = appState.theme === "light" ? "bg-orange-200" : "bg-orange-600"

  return (
    <div className={`flex flex-col gap-y-4 ${themeStyle} w-full h-[360px]`}>
      <p className="text-center text-xl p-4">This is a TEST component</p>
      <h2 className="text-center text-2xl">Count: {count} ---- language: {appState.lang}</h2>
      <button className="m-auto w-fit p-4 border border-black rounded-md" type="button" onClick={() => inc()}>increment</button>
      <button className="m-auto w-fit p-4 border border-black rounded-md" type="button" onClick={() => toggleTheme()}>Toggle theme</button>
      {appState.showModal && <LangForm />}
      <button className="m-auto w-fit p-4 border border-black rounded-md" type="button" onClick={() => appState.setShowModal(true)}>Change Language</button>
    </div>
  )
})

export default Test;
