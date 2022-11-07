import { useLoaderData } from "react-router-dom";
import Logo from "../components/Logo";
import PreviousBlogs from "../components/PreviousBlogs";

const Blog = () => {
  const blogs = useLoaderData();
  const latest = blogs.slice(-1);
  const oldBlogs = blogs.slice(0, -1);
  const cloneBlogs = [...oldBlogs].reverse();

  return (
    <div>
      <Logo />
      <h3 className="font-bold uppercase m-5 text-lg">{latest[0].titulo}</h3>
      <div className="flex flex-col justify-center items-center">
        <img
          className="m-5 border-solid border-4 border-green-600 rounded-xl"
          width="672px"
          src={latest[0].image}
          alt="imagen"
        ></img>
      </div>
      <div className="flex flex-col justify-center items-center self-center text-center">
        <p className="max-w-2xl text-justify">{latest[0].resumen}</p>
        <p className="max-w-2xl text-right self-right items-end">
          {latest[0].date}
        </p>
      </div>
      <div className="grid justify-center items-center md:grid-cols-1 xl:grid-cols-2 m-5">
          {cloneBlogs.map((blog) => (
            <PreviousBlogs blog={blog} key={blog.id} />
          ))}
        </div>
    </div>
  );
};

export default Blog;
