import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Minecraftia';
        src: url('./assets/fonts/minecraftia.ttf');
    }
`;

export const Container = styled.div`
  display: inline-block;
  background-color: rgba(39, 37, 5, 0.73);
  padding: 5px;
  border: 3px solid #848484;
  position: relative;
  margin-left: 3px;
  word-spacing: 3px;

  & .amount {
    position: absolute;
    bottom: -14px;
    right: 0px;
    color: #fbfbfb;
    font-family: "Minecraftia";
    font-size: 17px;
    cursor: default;
  }

  &:first-child {
    margin-left: 0;
  }
`;

export const Icon = styled.div`
  img {
    width: 30px;
    height: 30px;
    display: block;
  }
`;

export const Info = styled.div`
  display: none;
  z-index: 1;
  position: fixed;
  border: 3px solid #23005a;
  padding: 7px 10px 0 5px;
  background-color: rgba(15, 0, 15, 0.8);
  color: #fbfbfb;
  font-family: "Minecraftia";
  font-size: 14px;
  width: max-content;
  color: #aaaaaa;
  text-shadow: 2px 2px #2a2a2a;
  border-radius: 3px;

  ${Container}:hover & {
    display: block;
  }
`;

export const Meta = styled.div`
  margin-top: 2px;
  line-height: 15px;

  &.name {
    line-height: 16px;
    color: #55ffff;
    text-shadow: 2px 2px #3f3f3f;
    font-size: 15px;
  }

  &.amount {
    position: absolute;
    bottom: -4px;
    right: 1px;
    color: #fbfbfb;
    font-family: "Minecraftia";
    font-size: 14px;
    cursor: default;
  }
`;
