import React from "react";
import { HashLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <HashLoader color={"#0ca6e9"} />
    </div>
  );
}
