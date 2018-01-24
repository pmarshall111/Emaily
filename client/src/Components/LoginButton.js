import React from "react";

const LoginButton = props => {
  const { company } = props;
  const capitalized = company[0].toUpperCase() + company.slice(1);
  return <a href={`/auth/${company}`}>{`Sign in with ${capitalized}!`}</a>;
};

export default LoginButton;
