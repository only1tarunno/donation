import Header from "../Header/Header";

const Error = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen flex flex-col space-y-5 justify-center items-center">
        <h2 className="text-4xl lg:text-7xl text-center font-bold text-[#ff444a]">
          Sorry,404 Error
        </h2>
        <h3 className="text-3xl lg:text-5xl font-bold text-center">
          Page Not Found
        </h3>
      </div>
    </div>
  );
};

export default Error;
