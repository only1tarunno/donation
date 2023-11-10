import { useLoaderData, useParams } from "react-router-dom";
import "./postdetails.css";
import { savePost } from "../../Utility/utility";
const PostDetails = () => {
  const { id } = useParams();
  const posts = useLoaderData();
  const post = posts.find((post) => post.id === id);
  const { cover, title, description, text_color, price } = post;
  const handleDonate = () => {
    savePost(id);
  };
  return (
    <div className="container mx-auto px-5 lg:px-0 py-10">
      <div className="relative img-container">
        <img
          src={cover}
          className="w-full h-[700px] object-cover img-details rounded-lg"
          alt={title}
        />
        <button
          onClick={handleDonate}
          className="btn border-none capitalize rounded-lg text-white font-semibold text-xl absolute bottom-10 left-10 z-10"
          style={{ background: `${text_color}` }}
        >
          Donate ${price}
        </button>
      </div>

      <h2 className="text-[#0B0B0B] text-4xl font-bold my-7">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PostDetails;
