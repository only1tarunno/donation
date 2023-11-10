import "./banner.css";
import PropTypes from "prop-types";
const Banner = ({ handleSubmit }) => {
  return (
    <div className="mt-[-150px]">
      <div className="hero">
        <div className="hero-overlay bg-[#fcfbf9] bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <h1 className="mb-5 lg:mb-8 text-3xl lg:text-5xl font-bold text-[#0B0B0B]">
              I Grow By Helping People In Need
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="join">
                <div>
                  <div>
                    <input
                      name="name"
                      className="input focus:outline-none text-[#000] input-bordered join-item"
                      placeholder="Search here...."
                    />
                  </div>
                </div>

                <div className="indicator">
                  <button className="btn bg-[#FF444A] text-white hover:bg-[#e7383d] join-item">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default Banner;
