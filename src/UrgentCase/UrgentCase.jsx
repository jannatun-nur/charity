import image1 from "../../public/image/unsplash_4pc1GpZhJP0.png";
import image2 from "../../public/image/unsplash_IFKv3LESkVg.png";
import image3 from "../../public/image/unsplash_sElIb6f4_kk.png";
import frame1 from "../../public/image/Frame 31.png";
import frame2 from "../../public/image/Frame 31 (1).png";
import frame3 from "../../public/image/Frame 32.png";

const UrgentCase = () => {
  return (
    <div>
      <div className="my-14">
        <p className="text-gray-800 text-center text-2xl">Urgent Causes</p>
        <p className="text-gray-800 text-center ">
          Supporting urgent causes, changing lives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src={image1}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className=" lg:text-3xl font-semibold tracking-wide">
                Morocco strikes with earthquake
              </h2>
              <p className="dark:text-gray-800 font-thin">
                Current situation for Morocco have gone horrible due to the
                strike of Earthquake .
              </p>
            </div>
            <p className="font-bold">
              $4400 <span className="font-thin pt-3">Donated till now</span>
            </p>
            <img src={frame1} />
          </div>
        </div>

        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src={image2}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="lg:text-3xl font-semibold tracking-wide">
                Harmful Disease in Air
              </h2>
              <p className="dark:text-gray-800 font-thin">
                World have been infected with deadly life taking virus ......
              </p>
            </div>
            <p className="font-bold">
              $7888 <span className="font-thin pt-3">Donated till now</span>
            </p>
            <img src={frame2} />
          </div>
        </div>

        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src={image3}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="lg:text-3xl font-semibold tracking-wide">
                Patna suffer with heavy Flood
              </h2>
              <p className="dark:text-gray-800 font-thin">
                People in patna have suffered a very heavy flood in past few
                days .
              </p>
            </div>
            <p className="font-bold">
              $11,000 <span className="font-thin pt-3">Donated till now</span>
            </p>
            <img src={frame3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentCase;
