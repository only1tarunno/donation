import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredPost } from "../../Utility/utility";
import Donation from "./Donation";

const Donations = () => {
  const allPosts = useLoaderData();
  const [posts, setPosts] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [datalength, setdatalength] = useState(4);
  useEffect(() => {
    const storeId = getStoredPost();
    if (allPosts) {
      const post = allPosts.filter((post) => storeId.includes(post.id));
      if (post.length > 4) {
        setShowAll(false);
      }
      setPosts(post);
    }
  }, [allPosts]);
  const hanldeShowAll = () => {
    setdatalength(posts.length);
    setShowAll(true);
  };
  return (
    <div className="py-16">
      {posts.length > 0 ? (
        <div className="container mx-auto px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-7">
          {posts.slice(0, datalength).map((post) => (
            <Donation key={post.id} post={post}></Donation>
          ))}
        </div>
      ) : (
        <div className="text-center text-3xl font-bold lg:text-5xl">
          No Donation Yet. Please Donate
        </div>
      )}

      <div className={`text-center py-8 ${showAll && "hidden"}`}>
        <button
          onClick={hanldeShowAll}
          className="btn text-white capitalize font-semibold px-7 py-4 bg-[#009444] hover:bg-[#286947]"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donations;
