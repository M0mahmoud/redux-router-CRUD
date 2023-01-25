import React from "react";
import LoadingAnimation from "./LoadingAnimation";

const Loading = ({ children, loading, error }) => {
  const elementType = children?.type?.render?.displayName;

  const renderHandler = () => {
    if (elementType === "Button") {
      const cloneButton = React.cloneElement(
        children,
        { disabled: true },
        "Loading..."
      );
      return (
        <>
          {loading ? (
            cloneButton
          ) : error ? (
            <>
              {children}
              <p>
                <br />
                {error}
              </p>
            </>
          ) : (
            children
          )}
        </>
      );
    }
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
  return renderHandler();
};

export default Loading;
