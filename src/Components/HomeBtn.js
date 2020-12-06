import { useHistory } from "react-router-dom";

function Home(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button className={props.className} type="button" onClick={handleClick}>
      {props.value}
    </button>
  );
}

export default Home;