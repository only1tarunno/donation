import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Donation = ({ post }) => {
  const {
    id,
    tumbnail,
    title,
    category,
    price,
    card_bg,
    category_bg,
    text_color,
  } = post;
  return (
    <div>
      <div
        style={{ backgroundColor: `${card_bg}` }}
        className="card flex-col p-5 md:p-0 text-center md:text-start md:flex-row md:items-center gap-8"
      >
        <img src={tumbnail} className="w-full md:w-56" alt={title} />

        <div className="flex-1">
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
            className="card-title block text-center md:text-start my-2 font-semibold text-xl"
            style={{ color: `${text_color}` }}
          >
            {title}
          </h2>
          <h3 className="font-semibold text-2xl">${price}</h3>
          <div className="mt-2">
            <Link to={`/post/${id}`}>
              <button
                className="btn border-none capitalize rounded-lg text-white font-semibold text-xl"
                style={{ background: `${text_color}` }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Donation.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Donation;
