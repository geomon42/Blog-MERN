import React from "react";
import Comment from "../components/Comment";
import PostDesc from "../components/PostDesc";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Single = () => {
  return (
    <>
      <Header />
      <div className="single-post no-sidebar">
        <PostDesc />
        <Comment />
      </div>
      <Footer />
    </>
  );
};

export default Single;
