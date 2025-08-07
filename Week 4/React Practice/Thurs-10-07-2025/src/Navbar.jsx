import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between">
      <h1 className="text-2xl text-red-600 font-bold">The Dojo Blog</h1>

      <div className="links flex items-center gap-x-9">
        <Link to="/">Home</Link>
        <Link to="/create" className="bg-red-500 p-2 rounded-lg">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
