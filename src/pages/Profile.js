import "./Profile.css";
import AddProfileForm from "../components/AddProfileForm";

export default function Profile() {
  return (
    <section>
      <h2 className="Heading">you can create your profile here!</h2>
      <AddProfileForm />
    </section>
  );
}
