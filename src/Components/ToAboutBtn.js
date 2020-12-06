import { useHistory } from "react-router-dom";

function AboutBtn(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/about");
  }

  return (
    <button className={props.className} type="button" onClick={handleClick}>
      {props.value}
    </button>
  );
}

export default AboutBtn;