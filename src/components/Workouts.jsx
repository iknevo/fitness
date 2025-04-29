import { IoIosCheckmark } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { instaPay, masterCard, visa } from "../assets";
export default function Workouts() {
  return (
    <div className="h-full p-8 flex flex-col gap-12">
      <h1 className="text-2xl font-semibold">I Trainer Pro</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-8">What Is Inclueded</h2>
          <ul className="flex flex-col gap-6 pl-4">
            <li className="flex items-start gap-4 font-semibold">
              <span className="bg-green-450  w-5 h-5 flex  rounded-full items-center justify-center">
                <IoIosCheckmark className="text-gray-100 text-3xl font-bold" />
              </span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </li>
            <li className="flex items-start gap-4 font-semibold">
              <span className="bg-green-450  w-5 h-5 flex  rounded-full items-center justify-center">
                <IoIosCheckmark className="text-gray-100 text-3xl font-bold" />
              </span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </li>
            <li className="flex items-start gap-4 font-semibold">
              <span className="bg-green-450  w-5 h-5 flex  rounded-full items-center justify-center">
                <IoIosCheckmark className="text-gray-100 text-3xl font-bold" />
              </span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </li>
            <li className="flex items-start gap-4 font-semibold">
              <span className="bg-green-450  w-5 h-5 flex  rounded-full items-center justify-center">
                <IoIosCheckmark className="text-gray-100 text-3xl font-bold" />
              </span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </li>
            <li className="flex items-start gap-4 font-semibold">
              <span className="bg-green-450  w-5 h-5 flex  rounded-full items-center justify-center">
                <IoIosCheckmark className="text-gray-100 text-3xl font-bold" />
              </span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className=" flex flex-col gap-4">
            <div className="bg-linear-to-b relative from-green-450 space-y-6 to-green-550 text-gray-950 p-6 rounded-lg">
              <span className="p-2 absolute bg-gray-950 text-gray-100 rounded-b-lg block top-0 right-0">
                Save 77% off
              </span>
              <h3 className="text-2xl font-bold flex items-center gap-4">
                <span>Offer 3 Months Package</span>
                <span>
                  <MdErrorOutline />
                </span>
              </h3>
              <div className="flex items-center gap-8">
                <p className="text-2xl font-semibold">350 EGP</p>
                <p className="line-through text-xl font-light ">390 EGP</p>
                <p className="text-xl">save 116 Per month</p>
              </div>
            </div>

            <div className="relative space-y-6 bg-gray-800 text-gray-100 p-6 rounded-lg">
              <span className="p-2 absolute bg-green-450  text-gray-800 rounded-b-lg block top-0 right-0">
                Save 77% off
              </span>
              <h3 className="text-2xl font-bold flex items-center gap-4">
                <span>Offer 3 Months Package</span>
                <span>
                  <MdErrorOutline />
                </span>
              </h3>
              <div className="flex items-center gap-8">
                <p className="text-2xl text-green-450 font-semibold">350 EGP</p>
                <p className="line-through text-xl font-light ">390 EGP</p>
                <p className="text-xl">save 116 Per month</p>
              </div>
            </div>
          </div>
          <button className="cursor-pointer bg-[#1434CB] rounded-4xl py-4 flex items-center justify-center gap-6">
            <img src={visa} alt="visa logo" />
            <p className="text-lg font-semibold">Pay with visa</p>
          </button>

          <button className="cursor-pointer bg-[#4C096E] rounded-4xl py-4 flex items-center justify-center gap-6">
            <img src={instaPay} alt="instaPay logo" />
            <p className="text-lg font-semibold">Pay with Instapay</p>
          </button>
          <button className="cursor-pointer bg-gray-100  rounded-4xl py-3 flex items-center justify-center gap-6">
            <img src={masterCard} alt="masterCard logo" />
            <p className="text-lg text-[#E9B040] font-semibold">
              Pay with MasterCard
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
