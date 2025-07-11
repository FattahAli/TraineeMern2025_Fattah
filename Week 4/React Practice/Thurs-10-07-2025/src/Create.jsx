const Create = () => {
  return (
    <div className="create flex flex-col items-center justify-center gap-y-10">
      <h2 className="text-red-600 font-bold text-2xl">Add a new Blog</h2>
      <form className="flex flex-col gap-y-3">
        <label>Blog Title:</label>
        <input type="text" className="border-gray-500 border" required />
        <label>Blog Body:</label>
        <textarea required  className="border-gray-500 border"></textarea>
        <select className="border-gray-500 border">
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button className="bg-red-500 rounded-lg p-2">Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
