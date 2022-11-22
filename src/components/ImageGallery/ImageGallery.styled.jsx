import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 95px 20px 20px;
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const InitialPhrase = styled.h1`
  font-weight: 700;
  font-size: 18px;
  color: rgb(29, 107, 125);
`;
export const BtnChildren = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: rgb(29, 107, 125);
  :hover {
    color: rgb(179, 237, 250);
  }
`;
