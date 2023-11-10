import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Post from "../Post/Post";
const Posts = ({ name }) => {
  const [posts, setPosts] = useState([]);
  const [filterPost, setFilterpost] = useState([]);
  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setFilterpost(data));
  }, []);

  useEffect(() => {
    const namelower = name.toLowerCase();
    if (namelower == "health") {
      const result = filterPost.filter(
        (post) => post.category.toLowerCase() === namelower
      );
      setPosts(result);
    } else if (namelower == "education") {
      const result = filterPost.filter(
        (post) => post.category.toLowerCase() === namelower
      );
      setPosts(result);
    } else if (namelower == "clothing") {
      const result = filterPost.filter(
        (post) => post.category.toLowerCase() === namelower
      );
      setPosts(result);
    } else if (namelower == "food") {
      const result = filterPost.filter(
        (post) => post.category.toLowerCase() === namelower
      );
      setPosts(result);
    } else if (namelower === "") {
      setPosts(filterPost);
    } else setPosts([]);
  }, [filterPost, name]);

  return (
    <div>
      {posts.length > 0 ? (
        <div className="container mx-auto px-5 lg:px-0 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map((post) => (
            <Post key={post.id} post={post}></Post>
          ))}
        </div>
      ) : (
        <div className="text-center text-4xl font-bold capitalize pt-10">
          no data
        </div>
      )}
    </div>
  );
};
Posts.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Posts;
