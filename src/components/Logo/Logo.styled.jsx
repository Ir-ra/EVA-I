import styled from "styled-components";

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 16px;

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const LogoWrapp = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoName = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.16;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const LogoBox = styled.div`
  padding: 0;
`;
