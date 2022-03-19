import React from "react";
import styled from "styled-components";
import Tag from "../../atoms/Tag/Tag";

const Header = styled.div`
  position: relative;
`;

const Footer = styled.div`
  position: relative;
`;

const options = [
  { key: 1, value: "FULL TIME", color: "bg-teal-700" },
  { key: 2, value: "PART TIME", color: "bg-cyan-700" },
  { key: 3, value: "REMOTE", color: "bg-fuchsia-700" },
];

const JobFeature = () => {
  return (
    <div className="border border-gray-300 rounded-md flex flex-col md:flex-row justify-around md:justify-between p-4 md:p-6">
      <Header className="flex flex-row justify-between items-center md:w-1/2">
        <div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] md:w-[3.3rem] md:h-[3.3rem] p-2 mr-2 md:mr-3 rounded-full bg-gray-200">
          <img
            className="w-[1.5rem] md:w-[1.6rem]"
            src="https://cdn.filestackcontent.com/uRGQ5QfTT8mforGeyUS5"
            alt="company"
          />
        </div>
        <div className="flex flex-col mr-auto">
          <span className="text-lg">UI/UX Engineer</span>
          <span className="text-gray-500">Google</span>
        </div>

        <Tag options={options} value={1} />
      </Header>
      <Footer className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mt-14 md:mt-0 md:w-1/2">
        <div className="flex flex-row justify-start gap-3 md:pl-44">
          <Tag options={options} size="small" value={1} />
          <Tag options={options} size="small" value={2} />
          <Tag options={options} size="small" value={3} />
        </div>
        <span className="text-gray-500">Posted 3 years ago</span>
      </Footer>
    </div>
  );
};
export default JobFeature;
