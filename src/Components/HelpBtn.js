import { useHistory } from "react-router-dom";

function HelpBtn() {
  let history = useHistory();

  function handleClick() {
    history.push("/contact");
  }

  return (
    <button className="helpBtn" type="button" onClick={handleClick}>
      I'm here to Help!
    </button>
  );
}

export default HelpBtn;