import appState from "../mobX/appState";

const LangForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    appState.setLang(e.currentTarget.elements.language.value);
    appState.setShowModal(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="language" placeholder="type language" />
    </form>
  )
}

export default LangForm;
