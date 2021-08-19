import FormInput from "./FormInput";
import "./AddForm.css";

export default function AddForm() {
  return (
    <div className="AddForm">
      <form className="FormTextfields">
        <FormInput name="where" />
        <FormInput name="when" />
        <FormInput name="rating" />
        <FormInput name="notes" />
        <div className="FormButton">
          <button className="AddButton">add new pin!</button>
        </div>
      </form>
    </div>
  );
}
