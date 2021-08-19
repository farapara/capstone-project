import "./FormImage.css";
import { BsUpload } from "react-icons/bs";

export default function FormImage() {
  return (
    <div className="FormImage">
      <BsUpload className="ImageIcon" />
      <p>Add a Photo</p>
    </div>
  );
}
