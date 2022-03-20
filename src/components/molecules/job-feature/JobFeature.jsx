import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Tag from "../../atoms/Tag/Tag";
import { commitmentList } from "../../../utils/constant";

const Header = styled.div`
  position: relative;
`;

const Footer = styled.div`
  position: relative;
`;

const JobFeature = ({ data = [] }) => {
  const { company, postedAt, slug, tags, title, commitment } = data;

  return (
    <Link
      to={`/${company.slug}/${slug}`}
      className="border border-gray-300 rounded-md flex flex-col md:flex-row justify-around md:justify-between p-4 md:p-6 shadow hover:shadow-lg"
    >
      <Header className="flex flex-row justify-between items-center md:w-1/2">
        <div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] md:w-[3.3rem] md:h-[3.3rem] p-2 mr-2 md:mr-3 rounded-full bg-gray-200">
          <img className="w-[1.5rem] md:w-[1.6rem]" src={company.logoUrl} alt={title} />
        </div>
        <div className="flex flex-col mr-auto">
          <span className="text-lg">{title}</span>
          <span className="text-gray-500">{company.name}</span>
        </div>

        <Tag options={commitmentList} value={commitment} />
      </Header>
      <Footer className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mt-14 md:mt-0 md:w-1/2">
        <div className="flex flex-row flex-wrap justify-start gap-3 md:pl-44">
          {tags.map((el, index) => (
            <Tag key={index} options={tags} size="small" value={el.value} />
          ))}
        </div>
        <span className="text-gray-500 text-sm">
          Posted on <span className="font-semibold">{postedAt}</span>
        </span>
      </Footer>
    </Link>
  );
};
export default JobFeature;
