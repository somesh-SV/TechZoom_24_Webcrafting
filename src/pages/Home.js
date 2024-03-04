import React from "react";
import home from "../img/hero2.jpeg";

const Home = () => {
  return (
    <div className="text-gray-50">
      <section class="text-gray-50 ">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50">
              We provide the best health care services
            </h1>
            <p class="mb-8">
              We offer the best health care for you and your family with the
              help of new technology chat bot
            </p>
            <div class="flex justify-center">
              <button class="text-white rounded-xl bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg ">
                Join
              </button>
            </div>
          </div>
          <div class="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={home}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
