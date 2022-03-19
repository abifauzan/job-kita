import React from "react";
import styled from "styled-components";
import Tag from "../../atoms/Tag/Tag";

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const options = [
  { key: 1, value: "FULL TIME", color: "bg-teal-700" },
  { key: 2, value: "PART TIME", color: "bg-cyan-700" },
  { key: 3, value: "REMOTE", color: "bg-fuchsia-700" },
];

const JobFeature = () => {
  return (
    <div className="border border-gray-300 rounded-md flex flex-col md:flex-row justify-around p-4 md:p-5">
      <Header className="flex flex-row justify-between items-center">
        <div className="flex justify-center items-center w-[3rem] mr-1 rounded-full bg-gray-300">
          <img
            className="w-[1rem]"
            src="https://cdn.filestackcontent.com/uRGQ5QfTT8mforGeyUS5"
            alt="company"
          />
        </div>
        <div className="flex flex-col gap-2 mr-auto">
          <span className="text-lg">UI/UX Engineer</span>
          <span className="text-gray-500">Google</span>
        </div>

        <Tag options={options} value={1} />
      </Header>
      <Footer className="flex flex-col gap-2 mt-4 md:mt-0">
        <div className="flex flex-row gap-3">
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
