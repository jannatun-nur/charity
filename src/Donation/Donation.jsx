import money from "../../public/image/Donate (1).png";
import cloth from "../../public/image/Clothes.png";
import food from "../../public/image/Fried Chicken.png";

const Donation = () => {
  return (
    <div>
        <p className="lg:text-4xl text-xl text-gray-800 text-center lg:my-6 lg:w-4/12 mx-auto my-10">Making a difference for those 
        who face hardship</p>



      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className=" border-gray-400 border-2 text-center p-10 hover:border-green-800 rounded-2xl">
          <img src={money} className="ml-14 lg:ml-28 pb-6"/>
          <p className="pb-4">Donate Money</p>
          <p className="text-gray-500 pb-6">
            Your small help can change someone else life and can make someone
            happy and u will have a good deed added in your cart
          </p>

          <button className="bg-gray-200 shadow-slate-500 shadow-sm px-5 py-3 rounded-3xl hover:bg-amber-400">Donate Now</button>
        </section>


        <section className=" border-gray-400 border-2 text-center lg:p-10 p-4 hover:border-green-800 rounded-2xl" >
          <img src={cloth}  className="ml-20 lg:ml-24 pb-6" />
          <p className="pb-4">Donate Clothes</p>
          <p className="text-gray-500 pb-6">
            Your small help can change someone else life and can make someone
            happy and u will have a good deed added in your cart
          </p>

          <button className="bg-gray-200 shadow-slate-500 shadow-sm px-5 py-3 rounded-3xl hover:bg-amber-400">Donate Now</button>
        </section>

        <section className=" border-gray-400 border-2 text-center p-10 hover:border-green-800 rounded-2xl">
          <img src={food}  className="ml-14 lg:ml-24 pb-6" />
          <p className="pb-4">Donate Food</p>
          <p className="text-gray-500 pb-6">
            Your small help can change someone else life and can make someone
            happy and u will have a good deed added in your cart
          </p>

          <button className="bg-gray-200 shadow-slate-500 shadow-sm px-5 py-3 rounded-3xl hover:bg-amber-400">Donate Now</button>
        </section>
      </div>
    </div>
  );
};

export default Donation;
