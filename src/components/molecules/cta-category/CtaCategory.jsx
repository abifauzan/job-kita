import React from "react";
import { Link } from "react-router-dom";

const CtaCategory = ({ item = {} }) => {
  const { title = "Development very long text", path = "/" } = item;

  return (
    <Link
      to={path}
      className="flex flex-col justify-center items-center rounded-xl bg-slate-200 px-4 py-12 md:py-10 gap-4 group hover:bg-teal-500 hover:shadow-sm"
    >
      <span className="group-hover:text-white text-center">{title}</span>
    </Link>
  );
};

export default CtaCategory;
