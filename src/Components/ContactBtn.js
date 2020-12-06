import { useHistory } from "react-router-dom";

function ContactBtn(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/contact");
  }

  return (
    <button className={props.className} type="button" onClick={handleClick}>
      {props.value}
    </button>
  );
}

export default ContactBtn;