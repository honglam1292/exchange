import theme from "@/styles/theme";
import styled from "styled-components";

export const InputCustomStyle = styled.div`
  margin-bottom: 8px;

  input {
    width: 100%;
    height: 44px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    font-size: 14px;
    background-color: ${theme.bg.white};
    border-radius: 8px;
    color: #000000;
    outline: none;
    box-shadow: none;
    font-weight: 500;
  }
`;
