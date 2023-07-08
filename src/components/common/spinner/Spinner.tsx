import { useState, CSSProperties } from "react";
import { PulseLoader } from "react-spinners";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
};

export const Spinner = () => {
  return (
    <div className="sweet-loading">
      <PulseLoader
        color={"#198754"}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
