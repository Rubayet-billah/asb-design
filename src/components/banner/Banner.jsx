import { ImgLink } from "../../utils/constants";

const Banner = () => {
  return (
    <div className="xl:px-24">
      <section className="flex flex-col-reverse md:flex-row md:justify-between gap-7">
        <div className="max-w-xl md:py-12">
          <h1 className="text-4xl font-extrabold lg:text-7xl md:leading-[6.25rem] lg:leading-[6.25rem]">
            Focus. Learn. <br /> Excel.
          </h1>
          <h3 className="text-xl md:text-3xl my-7">
            Unlock your potential in photography and design!
          </h3>

          <button className="bg-blue-600 text-white font-extrabold px-8 py-1 rounded md:px-14 md:py-3 md:mt-5 hover:bg-purple-900 duration-150">
            Sign Up For Free
          </button>

          <div className="mt-5 md:mt-10">
            <small className="text-sm font-bold">Or download the app:</small>
            <div className="flex gap-5 mt-2">
              <img src={ImgLink.appleStore} alt="apple" />
              <img src={ImgLink.androidStore} alt="android" />
            </div>
          </div>
        </div>
        <div className=" md:py-14">
          <img
            src="https://asbdesign.in/static/media/hero.a1e5fd7b561c923c866a.jpg"
            alt="hero image"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
