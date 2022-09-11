import { css, Global } from "@emotion/react";

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        body,
        html {
          height: 100vh;
          margin: 0;
          padding: 0;
          width: 100vw;
        }
      `}
    />
  );
};
