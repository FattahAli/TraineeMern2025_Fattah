import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(title, body, author);
    fetch("http://localhost:8000/blogs",
      {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then (()=>{
        console.log('new blog added')
      })
  };

  return (
    <div className="create flex flex-col items-center justify-center gap-y-10">
      <h2 className="text-red-600 font-bold text-2xl">Add a new Blog</h2>
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          className="border-gray-500 border"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          className="border-gray-500 border"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <select
          className="border-gray-500 border"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button className="bg-red-500 rounded-lg p-2">Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
