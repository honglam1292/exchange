import { Global } from "@emotion/react";
import { cssCustom } from "./custom";
import { cssReset } from "./reset";

const GlobalStyles = () => {
  return (
    <>
      <Global styles={[cssReset, cssCustom]} />
    </>
  );
};

export default GlobalStyles;
