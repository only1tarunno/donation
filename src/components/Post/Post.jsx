import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, tumbnail, title, category, card_bg, category_bg, text_color } =
    post;
  return (
    <div>
      <Link to={`/post/${id}`}>
        <div style={{ backgroundColor: `${card_bg}` }} className="card">
          <figure>
            <img src={tumbnail} className="w-full" alt={title} />
          </figure>
          <div className="px-5  py-8 space-y-2">
            <h4
              style={{
                color: `${text_color}`,
                backgroundColor: `${category_bg}`,
              }}
              className="inline-block w-fit py-2 px-4 rounded-md font-medium text-sm"
            >
              {category}
            </h4>
            <h2
              className="card-title font-semibold text-xl grid-flow-row"
              style={{ color: `${text_color}` }}
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;
