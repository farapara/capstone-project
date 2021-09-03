import { BiMapPin } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Button() {
  return (
    <div>
      <h2>get started</h2>
      <Link to="/map">
        <BiMapPin
          style={{
            fontSize: "1.8rem",
            color: "rgb(248, 99, 137)",
            cursor: "pointer",
          }}
        />
      </Link>
    </div>
  );
}
