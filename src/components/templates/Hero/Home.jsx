import React from "react";
import Button from "../../atoms/Button";
import SearchInput from "../../molecules/search-input";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SectionWrapper = styled.section`
  width: 100%;
  background-image: url("/assets/images/undraw_hello_re_3evm.svg");
  background-size: auto;
  background-repeat: no-repeat;
  background-position: left;
`;

const HeroHome = () => {
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
    <section className="flex flex-col bg-gradient-to-l from-teal-100 to-gray-50">
      <div className="container px-4 md:px-0 pt-9 md:pt-32 mx-auto">
        <h2 className="font-semibold text-4xl md:text-[2.8rem] text-black mb-2 md:mb-6">
          Find <span className="text-teal-500 font-bold">Remote</span>
        </h2>
        <h2 className="font-semibold text-4xl md:text-[2.8rem] text-black">
          Job in <span className="text-teal-500 font-bold">Worldwide</span>
        </h2>
        <p className="py-4 md:py-8 text-gray-700 md:text-xl tracking-normal md:tracking-widest">
          Work remotely to companies in worldwide
        </p>

        <div className="flex flex-row items-center gap-3 md:gap-5 mb-20">
          <span>Example: </span>
          <Button type="secondary_outline" size="small" to="/search?by=role&q=Front-End">
            Front-End
          </Button>
          <Button type="secondary_outline" size="small" to="/search?by=role&q=Back-End">
            Back-End
          </Button>
          <Button type="secondary_outline" size="small" to="/search?by=role&q=IOS">
            IOS Developer
          </Button>
        </div>

        {/* <SearchInput className="mb-8" handleSubmit={handleSearchJob} /> */}

        <SearchInput handleSubmit={handleSearchJob} className="-mb-16 w-auto md:w-1/3 relative" />
      </div>
    </section>
  );
};

export default HeroHome;
