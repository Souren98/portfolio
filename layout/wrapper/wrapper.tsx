import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

interface Props {
  children: ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  console.log(children);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
