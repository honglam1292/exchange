import theme from "@/styles/theme";
import styled from "styled-components";

export const ModalLoginStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 520px;
  outline: none;
  background-color: ${theme.bg.white};
  border-radius: 20px;
`;

export const Header = styled.div`
  display: flex;
  background-color: ${theme.bg.black};
  height: 75px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 26px;

  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    flex-grow: 1;
    color: ${theme.color.white};
    margin-left: 46px;
  }

  svg {
    width: 24px;
    height: 24px;
    border: 0px;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-right: 22px;
    z-index: 9999;
    cursor: pointer;
    fill: ${theme.color.white};
  }
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 12px;
  position: relative;

  span {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #636369;
    margin-top: 8px;
  }
`;

export const FormCustom = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-right: 32px;
`;

export const BtnLogin = styled.div`
  height: 44px;
  border-radius: 8px;
  border: 0px;
  margin-top: 24px;
  color: ${theme.color.white};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  cursor: inherit;
  background-color: ${theme.bg.black};
  color: ${theme.color.white};
  cursor: pointer;

  span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Foooter = styled.div`
  margin-top: 12px;
`;
