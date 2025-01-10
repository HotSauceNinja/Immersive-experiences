const CreateExperience = () => {
  return (
    <div>
      <h1>Create Experience</h1>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="description"
            id="description"
            name="description"
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="location" id="location" name="location" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div>
          <label htmlFor="imageUrl">Image</label>
          <input type="imageUrl" id="imageUrl" name="imageUrl" />
        </div>
        <button type="submit">Create Experience</button>
      </form>
    </div>
  );
};
export default CreateExperience;
