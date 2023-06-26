import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content:space-around ;

  padding: 0 80px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      text-align: end;
    }

    strong {
      font-size: 13px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Brand  = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 224x;
    color: ${({ theme}) => theme.COLORS.PINK};
  }
`;

export const Search  = styled.div`
  /* padding: 120px 0; */
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;