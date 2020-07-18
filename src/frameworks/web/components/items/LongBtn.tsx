import * as React from "react";
import styled from 'styled-components';

const SLongBtn = styled.button`
  display: inline-block;
  height: 60px;
  width: 100%;
  font-size: 18px;
  border: 1px solid #26b49e;
  background: #33c1ab;
  color: #fff;
  cursor: pointer;
  text-shadow: 0px 0px 1px #1d9b88;
`;

interface IProps {
  type: "button" | "submit" | "reset";
  value: string;
  onClick(): void;
}

const LongButton: React.FC<IProps> = (props) => {
  const { type, value, onClick } = props;

  return (
    <SLongBtn className={"button"} type={type} onClick={onClick}>{value}</SLongBtn>
  );
};

export default LongButton;