
import imageSrc from '../../public/image/unsplash_AEaTUnvneik.png'; 

const Banner = () => {
  return (
    <div className=" column-1 lg:flex items-center lg:justify-between p-10 bg-[#fdf6ec] rounded-lg ">
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-[#333] mb-4">Empower Hope, Transform Lives</h1>
        <p className="text-lg text-[#555]">
          The essence of charity by conveying the idea of uplifting individuals and communities 
          through the power of hope and positive change.
        </p>
      </div>

      {/* Image Section */}
      <div className="">
        <img src={imageSrc} alt="Children smiling" className="rounded-lg object-cover mt-10 lg:mt-0 w-full lg:w-8/12  h-auto" />
      </div>

    </div>
  );
};

export default Banner;
