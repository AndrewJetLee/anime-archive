import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = ({ count }) => {
  return (
    <Container>
      {new Array(count).fill(" ").map((item, i) => (
        <SkeletonItem key={i}>
          <Skeleton width="100%" height="400px" />
        </SkeletonItem>
      ))}
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: ${(props) => (props.containsItems ? "grid" : "flex")};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 260px));
  grid-auto-flow: row;
  grid-gap: 5px;
  justify-content: center;
  overflow: hidden;
`;
const SkeletonItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition-property: opacity;
  transition-duration: 0.16s;
  cursor: pointer;
  height: 400px;
  :hover {
    opacity: 0.5;
  }
`;
