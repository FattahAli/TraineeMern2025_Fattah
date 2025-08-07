import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div
          className="blog-preview flex
      flex-col py-5 px-3 hover:shadow-xl"
          key={blog.id}
        >
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="text-red-700 font-medium">{blog.title}</h2>
            <p className="font-light">written by: {blog.author}</p>
          </Link>
          {/* <button onClick={()=>handleDelete(blog.id)}>Delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
