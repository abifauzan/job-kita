import React, { useMemo } from "react";

const TagSize = {
  large: "text-lg",
  regular: "text-sm",
  small: "text-xs",
};

const Tag = (props) => {
  const { options, value, size = "regular", className = "" } = props;
  const selected = options.find((dt) => dt.value === value || dt.key === value);
  const TagClass = useMemo(() => {
    return `${TagSize[size]} ${selected.color} text-white font-semibold rounded px-2.5 py-0.5`;
  }, [size, selected]);

  return <span className={`${className} ${TagClass}`}>{selected.value}</span>;
};

export default Tag;
