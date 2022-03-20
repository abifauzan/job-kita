import React from "react";
import styled from "styled-components";
import { commitmentList } from "../../../utils/constant";
import Button from "../../atoms/Button";
import Tag from "../../atoms/Tag/Tag";
import ReactMarkdown from "react-markdown";
import { parseDate } from "../../../utils/helper";

const Header = styled.div`
  position: relative;
`;

const Footer = styled.div`
  position: relative;
`;

const JobDetailCard = ({ data }) => {
  const { cities, commitment, company, description, postedAt, slug, tags, title } = data;

  return (
    <div>
      <div className="bg-white border-md shadow-md flex flex-col md:flex-row md:justify-between p-5 md:p-6 mt-3 mb-5">
        <Header className="flex flex-row justify-start items-start md:w-1/2">
          <div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] md:w-[3.3rem] md:h-[3.3rem] p-2 mr-2 md:mr-3 rounded-full bg-gray-200">
            <img className="w-[1.5rem] md:w-[1.6rem]" src={company.logoUrl} alt={title} />
          </div>
          <div className="flex flex-col mr-auto">
            <span className="text-lg">{title}</span>
            <span className="text-gray-500">{company.name}</span>

            <div className="pt-2 flex items-center gap-2">
              <span>Format: </span>
              <Tag options={commitmentList} size="small" value={commitment} />
            </div>
          </div>
        </Header>
        <Footer className="mt-10 md:mt-0 flex md:flex-col justify-between items-center">
          <span className="md:order-last text-sm">Posted on {parseDate(postedAt)}</span>
          <Button>Apply Job</Button>
        </Footer>
      </div>
      <div className="mt-10">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  );
};

export default JobDetailCard;
