import { titleFont } from "@/utils/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-16 pt-8">
      <nav className="flex items-center justify-between">
        <div className="flex">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={100}
            className="mr-4"
          />
        </div>
        <div className="flex justify-center gap-4">
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
        <div className="flex">
          <button className="bg-black text-white rounded-full px-2 py-2 w-36">
            Order Now
          </button>
        </div>
      </nav>
      <section className="flex pt-8 pb-24 w-full">
        <div className="w-1/2">
          <div className="pt-16">
            <span className={`text-[#54331C] text-8xl ${titleFont.className}`}>
              Anupakam <br />
              Culinary
            </span>
            <p className="pt-16 text-[#54331C]">అనుపాకం కలినరీ</p>
            <div className="text-2xl pb-6 pt-4">
              Exquisite Andhra Chicken and Prawn Pickle Masterpieces
            </div>
            <button className="bg-black text-white rounded-full px-2 py-2 w-36 mt-8">
              Order Now
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="hidden lg:block">
          <span className="absolute right-96 top-20 transform -rotate-[25deg] text-[250px] font-bold text-[#54331C]">
                    &#8220;
                  </span>
            <div className="">
              
              <Image
                src="/hero.png"
                alt="hero"
                width={500}
                height={300}
                className="absolute right-0"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex py-28">
        <div className="w-1/2">
          <div className="pt-16">
            <span className="text-5xl text-[#54331C]">
              Freshly Cut Chicken Pickle,
              <br /> Dispatched Within 2 Days
            </span>
            <br />
            <br />
            <div className="text-base pb-6 pt-4 md:w-3/4 lg:w-3/4 text-[#54331C]">
              <b>Our recipes are steeped in tradition</b>, handed down through{" "}
              generations, ensuring that every jar is filled with the authentic
              flavors of Andhra cuisine. Made to order using only the finest
              ingredients, our pickles offer a taste experience like no other.
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
            <button className="bg-black text-white rounded-full px-2 py-2 w-36 mt-8">
              Order Now
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            src="/secondsection.png"
            alt="second"
            width={500}
            height={500}
            className="relative"
          />
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <h1 className="text-3xl font-bold text-[#54331C]">Shop</h1>
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 px-10 md:w-1/3">
              <div className="h-3/4 rounded-lg overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  className="lg:h-full md:h-full w-full object-cover object-center"
                  src="/pickleimage.png"
                  alt="blog"
                />
              </div>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  Premium Chicken Pickle (300 gms)
                </h1>
                <div className="mb-2 text-gray-900">
                  <span className="line-through "> Rs. 599</span>{" "}
                  <span>Rs. 499</span>
                </div>
                <button className="bg-black text-white rounded-full px-2 py-2 w-full">
                  Order Now
                </button>
              </div>
            </div>
            <div className="p-4 px-4 md:w-1/3">
              <div className="h-3/4 rounded-lg overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  className="lg:h-full md:h-full w-full object-cover object-center"
                  src="/pickleimage.png"
                  alt="blog"
                />
              </div>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  Premium Chicken Pickle (1 kg)
                </h1>
                <div className="mb-2 text-gray-900">
                  <span className="line-through"> Rs. 1800</span>{" "}
                  <span>Rs. 1499</span>
                </div>
                <button className="bg-black text-white rounded-full px-2 py-2 w-full">
                  Order Now
                </button>
              </div>
            </div>
            <div className="p-4 px-4 md:w-1/3">
              <div className="h-3/4 rounded-lg overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  className="lg:h-full md:h-full w-full object-cover object-center"
                  src="/pickleimage.png"
                  alt="blog"
                />
              </div>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                  Premium Chicken Pickle (500 gms)
                </h1>
                <div className="mb-2 text-gray-900">
                  <span className="line-through"> Rs. 949</span>{" "}
                  <span>Rs. 799</span>
                </div>
                <button className="bg-black text-white rounded-full px-2 py-2 w-full">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
