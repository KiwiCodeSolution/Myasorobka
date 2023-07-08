import { observer } from "mobx-react-lite";
import appState from "../mobX/appState";

const LangForm = observer(() => {
  const { setLang, setShowModal } = appState;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLang(e.currentTarget.elements.language.value);
    setShowModal(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="language" placeholder="type language"/>
    </form>
  )
})

export default LangForm;