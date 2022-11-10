import React, { cloneElement } from "react";
import LoadingAnimation from "./LoadingAnimation";

const Loading = ({ children, loading, error }) => {
  return (
    <>
      {loading ? (
        <div>
          <LoadingAnimation />
        </div>
      ) : error ? (
        <h3 colSpan={3}>{error}</h3>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
