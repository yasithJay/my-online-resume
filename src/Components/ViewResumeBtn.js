import { useHistory } from "react-router-dom";

function ViewResume(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/resume");
  }

  return (
    <button className={props.className} type="button" onClick={handleClick}>
      {props.value}
    </button>
  );
}

export default ViewResume;