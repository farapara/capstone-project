import "./CreateProfile.css";
import AddProfileForm from "../components/AddProfileForm";

export default function CreateProfile() {
  return (
    <section>
      <h2 className="Heading">create your profile here!</h2>
      <h4>
        “almost every person I spoke to knew someone who had taken a toy
        travelling.”
      </h4>
      <AddProfileForm />
    </section>
  );
}
