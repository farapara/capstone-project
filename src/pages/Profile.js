import "./Profile.css";

export default function Profile() {
  return (
    <section>
      <h2>you can create your profile here!</h2>
      <div className="form">
        <form className="ProfileForm">
          <input
            name=""
            id=""
            type="text"
            placeholder="enter a name"
            required
          />
          <input
            name=""
            id=""
            type="number"
            min="0"
            placeholder="enter an age"
            required
          />
          <input name="" id="" type="text" placeholder="add bio" required />
        </form>
      </div>
      <div className="FormButtons">
        <button className="submit">save</button>
        <button className="cancel">cancel</button>
      </div>
    </section>
  );
}
