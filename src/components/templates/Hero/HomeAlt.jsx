import React from "react";
import Button from "../../atoms/Button";
import SearchInput from "../../molecules/search-input";
import { useNavigate } from "react-router-dom";

const HeroHomeAlt = () => {
  const foo = "bar";

  const navigate = useNavigate();

  const handleSearchJob = (input, type) => {
    if (input !== "") {
      navigate({
        pathname: "/search",
        search: `by=${type}&q=${input}`,
      });
    }
  };

  return (
    <section className="flex flex-col bg-gradient-to-l from-teal-100 to-gray-50 relative">
      <div className="container px-4 md:px-0 pt-9 md:pt-32 mx-auto">
        <h2 className="font-semibold text-4xl md:text-[2.8rem] text-black mb-2 md:mb-6">
          Discover The
        </h2>
        <h2 className="font-bold text-4xl md:text-[2.8rem] text-teal-500">Best Remote Jobs</h2>
        <p className="py-4 md:py-8 text-gray-700 md:text-xl tracking-normal md:tracking-widest">
          Work remotely to companies in worldwide
        </p>

        <SearchInput handleSubmit={handleSearchJob} className="-mb-16 w-auto md:w-1/3 relative" />
      </div>
    </section>
  );
};

export default HeroHomeAlt;
