import React from "react";
import homeBanner from "../../assets/images/homebanner.png";



const Home = () => {
  return (
    <div className="mt-23 px-4 md:p-0 hero min-h-screen lg:py-10 lg:px-34">
  <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center">
    
    <div className="w-full md:w-1/2 space-y-5 md:space-y-15">
      <p className="text-orange-500 mt-7 md-mt-0">Sale up to 70% off</p>
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">New Collection For Fall</h1>
        <p>Discover all the new arrivals of ready-to-wear collection.</p>
      </div>
      <button className="btn btn-primary bg-orange-500 border-orange-500">Get Started</button>
    </div>

    <img
      src={homeBanner}
      className="w-[100%] md:w-1/2  m-4 rounded-lg shadow-2xl homebanner"
      alt="Home Banner"
    />
  </div>
</div>

  );
};

export default Home;
