import React, { useMemo } from "react";
import ButtonWrapper from "./Button.style";
import { useNavigate } from "react-router-dom";

const ButtonProperties = {
  primary: "bg-teal-500 hover:bg-teal-700 text-white",
  primary_outline:
    "bg-transparent hover:bg-teal-500 text-teal-700 hover:text-white border border-teal-500 hover:border-transparent rounded",
  secondary_outline:
    "bg-transparent hover:bg-slate-500 text-slate-700 hover:text-white border border-slate-500 hover:border-transparent rounded",
};

const ButtonSize = {
  large: "h-12 px-6 m-2 text-lg",
  regular: "h-10 px-5 m-2",
  small: "h-8 px-2 text-sm md:h-10 md:px-3",
};

const Button = (props) => {
  const navigate = useNavigate();

  const {
    type = "primary",
    size = "regular",
    className = "",
    as = "button",
    mode = "button",
    iconLeft,
    iconRight,
    children,
    onClick = () => {},
    to,
    ...restProps
  } = props;

  const buttonClassname = useMemo(
    () =>
      `transition-colors duration-150 rounded-lg focus:shadow-outline ${ButtonProperties[type]} ${ButtonSize[size]} ${className}`,
    [type, className, size]
  );

  const handleOnClick = () => {
    if (to !== undefined) {
      navigate(to);
      return;
    }

    onClick();
    return;
  };

  return (
    <ButtonWrapper
      className={buttonClassname}
      as={as}
      mode={mode}
      onClick={handleOnClick}
      {...restProps}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </ButtonWrapper>
  );
};

export default Button;
