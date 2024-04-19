import { titleFont } from "@/utils/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-8 lg:px-16 pt-8">
      <nav className="flex flex-col-reverse items-center justify-center lg:flex-row lg:items-center lg:justify-between w-full">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex items-center justify-center lg:justify-start">
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={80}
              className="mx-auto lg:mr-4"
            />
          </div>
          <div className="hidden lg:flex items-center justify-center gap-4">
            <a href="/" className="px-4">
              Home
            </a>
            <a href="/pickles" className="px-4">
              Pickles
            </a>
            <a href="/contactus" className="px-4">
              Contact Us
            </a>
          </div>
        </div>
        <div className="hidden lg:flex">
        <a href="https://wa.me/918667473511?text=Hello%2C%20I%20want%20to%20order%20from%20Anupakam">

          <button className="bg-black text-white rounded-full px-2 py-2 w-36">
            Order Now
          </button>
          </a>
        </div>
      </nav>
      <section className="flex flex-col pt-8 pb-10 lg:pb-24 w-full">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <div className="pt-4 lg:pt-16">
              <div
                className={`text-center lg:text-left text-[#54331C] text-5xl md:text-8xl lg:text-8xl ${titleFont.className}`}
              >
                Anupakam <br />
                Culinary
              </div>
              <p className="text-base pt-4 lg:pt-16 text-[#54331C] text-center lg:text-left">
                అనుపాకం కలినరీ
              </p>
              <div className="text-base lg:text-2xl pb-6 pt-4 text-center lg:text-left">
                Exquisite Andhra Chicken and Prawn Pickle Masterpieces
              </div>
              <button className="bg-black text-white rounded-full px-2 py-2 w-36 mt-8 lg:block hidden">
                Order Now
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:flex justify-end">
            <div className="items-center">
              <Image
                src="/pickleimage2.png"
                alt="hero"
                width={500}
                height={300}
                className="relative"
              />
            </div>
            <div className="lg:hidden">
              <a href="https://wa.me/918667473511?text=Hello%2C%20I%20want%20to%20order%20from%20Anupakam">
                <button className="bg-black text-white rounded-full px-2 py-2 w-full mt-8 flex flex-row justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0,0,256,256"
                    className="pr-2"
                  >
                    <g
                      fill="#ffffff"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M12.01172,2c-5.506,0 -9.98823,4.47838 -9.99023,9.98438c-0.001,1.76 0.45998,3.47819 1.33398,4.99219l-1.35547,5.02344l5.23242,-1.23633c1.459,0.796 3.10144,1.21384 4.77344,1.21484h0.00391c5.505,0 9.98528,-4.47937 9.98828,-9.98437c0.002,-2.669 -1.03588,-5.17841 -2.92187,-7.06641c-1.886,-1.887 -4.39245,-2.92673 -7.06445,-2.92773zM12.00977,4c2.136,0.001 4.14334,0.8338 5.65234,2.3418c1.509,1.51 2.33794,3.51639 2.33594,5.65039c-0.002,4.404 -3.58423,7.98633 -7.99023,7.98633c-1.333,-0.001 -2.65341,-0.3357 -3.81641,-0.9707l-0.67383,-0.36719l-0.74414,0.17578l-1.96875,0.46484l0.48047,-1.78516l0.2168,-0.80078l-0.41406,-0.71875c-0.698,-1.208 -1.06741,-2.58919 -1.06641,-3.99219c0.002,-4.402 3.58528,-7.98437 7.98828,-7.98437zM8.47656,7.375c-0.167,0 -0.43702,0.0625 -0.66602,0.3125c-0.229,0.249 -0.875,0.85208 -0.875,2.08008c0,1.228 0.89453,2.41503 1.01953,2.58203c0.124,0.166 1.72667,2.76563 4.26367,3.76563c2.108,0.831 2.53614,0.667 2.99414,0.625c0.458,-0.041 1.47755,-0.60255 1.68555,-1.18555c0.208,-0.583 0.20848,-1.0845 0.14648,-1.1875c-0.062,-0.104 -0.22852,-0.16602 -0.47852,-0.29102c-0.249,-0.125 -1.47608,-0.72755 -1.70508,-0.81055c-0.229,-0.083 -0.3965,-0.125 -0.5625,0.125c-0.166,0.25 -0.64306,0.81056 -0.78906,0.97656c-0.146,0.167 -0.29102,0.18945 -0.54102,0.06445c-0.25,-0.126 -1.05381,-0.39024 -2.00781,-1.24024c-0.742,-0.661 -1.24267,-1.47656 -1.38867,-1.72656c-0.145,-0.249 -0.01367,-0.38577 0.11133,-0.50977c0.112,-0.112 0.24805,-0.2915 0.37305,-0.4375c0.124,-0.146 0.167,-0.25002 0.25,-0.41602c0.083,-0.166 0.04051,-0.3125 -0.02149,-0.4375c-0.062,-0.125 -0.54753,-1.35756 -0.76953,-1.85156c-0.187,-0.415 -0.3845,-0.42464 -0.5625,-0.43164c-0.145,-0.006 -0.31056,-0.00586 -0.47656,-0.00586z"></path>
                      </g>
                    </g>
                  </svg>
                  Order Now on Whatsapp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <h1 className="text-3xl font-bold text-[#54331C] lg:text-left text-center">
          Shop
        </h1>
        <h5 className="lg:hidden text-base text-[#54331C] lg:text-left text-center">
          Just more meat to make it pickle worthy!
        </h5>
        <div className="container px-5 py-6 lg:py-14 mx-auto">
          <div className="flex flex-col lg:flex-row flex-wrap -m-4">
            {[
              {
                name: "Premium Chicken Pickle (300 gms)",
                price: "Rs. 499",
                discount: "Rs. 599",
                image: "/pickleimage.png",
              },
              {
                name: "Premium Chicken Pickle (1 kg)",
                price: "Rs. 1499",
                discount: "Rs. 1800",
                image: "/pickleimage.png",
              },
              {
                name: "Premium Chicken Pickle (500 gms)",
                price: "Rs. 799",
                discount: "Rs. 949",
                image: "/pickleimage.png",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 lg:px-10 md:w-1/3">
                <div className="h-3/4 rounded-lg overflow-hidden">
                  <Image
                    width={200}
                    height={200}
                    className="lg:h-full md:h-full w-full object-cover object-center"
                    src={item.image}
                    alt="blog"
                  />
                </div>
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                    {item.name}
                  </h1>
                  <div className="mb-2 text-gray-900">
                    <span className="line-through">{item.discount}</span>{" "}
                    <span>{item.price}</span>
                  </div>
                  <a href="https://wa.me/918667473511?text=Hello%2C%20I%20want%20to%20order%20from%20Anupakam">
                  <button className="bg-black text-white rounded-full px-2 py-2 w-full">
                    Order Now
                  </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col py-4 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <div className="pt-4 lg:pt-16">
              <div className="text-center lg:text-left text-lg font-bold lg:text-5xl text-[#54331C]">
                Freshly Cut Chicken Pickle,
                <br /> Dispatched Within 2 Days
              </div>
              <br />
              <br />
              <div className="text-base pb-6 pt-4 md:w-3/4 lg:w-3/4 text-[#54331C]">
                <b>Our recipes are steeped in tradition</b>, handed down through{" "}
                generations, ensuring that every jar is filled with the
                authentic flavors of Andhra cuisine. Made to order using only
                the finest ingredients, our pickles offer a taste experience
                like no other.
              </div>
              <div className="text-base pb-6 pt-4 md:w-3/4 lg:w-3/4 text-[#54331C]">
                <b>
                  From the rich and spicy notes of our chicken pickle to the
                  tantalizing tang of our prawn pickle
                </b>
                , each bite is a symphony of flavors that will transport you to
                the heart of Andhra Pradesh. Discover the unmatched taste of
                Anupakam and elevate your culinary journey today
              </div>
              <a href="https://wa.me/918667473511?text=Hello%2C%20I%20want%20to%20order%20from%20Anupakam">

              <button className="hidden lg:block bg-black text-white rounded-full px-2 py-2 w-36 mt-8">
                Order Now
              </button>
              </a>
            </div>
          </div>
          <div className="my-20 lg:mt-0 lg:w-1/2 lg:flex justify-end">
            <div className="">
              <Image
                src="/secondsection.png"
                alt="second"
                width={500}
                height={500}
                className="relative"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
