import React, { useMemo } from "react";

const TagSize = {
  large: "text-lg",
  regular: "text-sm",
  small: "text-xs",
};

const Tag = (props) => {
  const { options, value, size = "regular", className = "" } = props;
  const selected = options.find((dt) => dt.value === value || dt.key === value);

  const selectedColor = selected?.color || "bg-gray-400";
  const TagClass = useMemo(() => {
    return `${TagSize[size]} ${selectedColor} flex justify-center items-center text-center text-white font-semibold rounded px-2.5 py-1`;
  }, [size, selectedColor]);

  return <span className={`${className} ${TagClass}`}>{selected.value}</span>;
};

export default Tag;
