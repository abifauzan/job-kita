import React from "react";
import Button from "../../atoms/Button";
import SearchInput from "../../molecules/search-input";

const HeroHome = () => {
  const foo = "bar";

  const mobileClass = "mx-2";
  const desktopClass = "md:mx-5";

  return (
    <section className="flex flex-col bg-slate-200">
      <div className="container px-4 md:px-0 py-9 md:py-32 mx-auto">
        <h2 className="font-semibold text-4xl md:text-[2.8rem] text-black mb-2 md:mb-6">
          Find <span className="text-teal-500 font-bold">Remote</span>
        </h2>
        <h2 className="font-semibold text-4xl md:text-[2.8rem] text-black">
          Job in <span className="text-teal-500 font-bold">Worldwide</span>
        </h2>
        <p className="py-4 md:py-8 text-gray-700 md:text-xl tracking-normal md:tracking-widest">
          Work remotely to companies in worldwide
        </p>

        <SearchInput className="mb-8" />

        <div className="flex flex-row items-center gap-3 md:gap-5">
          <span>Example: </span>
          <Button type="secondary_outline" size="small">
            Front-End
          </Button>
          <Button type="secondary_outline" size="small">
            Back-End
          </Button>
          <Button type="secondary_outline" size="small">
            IOS Developer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
