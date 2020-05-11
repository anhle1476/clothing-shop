import styled from "styled-components";

export const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    position: absolute;
    top: 255px;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s ease-out;
  }

  &:hover {
    button {
      opacity: 0.85;
      pointer-events: all;
    }
    & div:first-of-type {
      opacity: 0.8;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.div`
  width: 10%;
`;
