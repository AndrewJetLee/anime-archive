import styled from "styled-components";
import SearchItem from "./SearchItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const List = ({ type, items, getNextPage, pagination, loading }) => {
  const containsItems = items.length > 0;

  return (
    <>
      {type === "search" ? (
        <Container containsItems={containsItems}>
          {containsItems ? (
            items?.map((item, i) => <SearchItem item={item} key={i} />)
          ) : (
            <NoneFound>
              Sorry, your search term did not return any results
            </NoneFound>
          )}
        </Container>
      ) : (
        <>
          {loading ? (
            <Loading count={10}/>
          ) :  <InfiniteScroll
          dataLength={items.length}
          next={getNextPage}
          hasMore={pagination.has_next_page}
          loader={
            <Loading count={5}/>
          }
        >
          <Container containsItems={containsItems}>
            {containsItems ? (
              items?.map((item, i) => <SearchItem item={item} key={i} />)
            ) : (
              <NoneFound>
                Sorry, your search term did not return any results
              </NoneFound>
            )}
          </Container>
        </InfiniteScroll>}
         
        </>
      )}
    </>
  );
};

export default List;

const Container = styled.div`
  display: ${(props) => (props.containsItems ? "grid" : "flex")};
  grid-template-columns: repeat(auto-fit, minmax(200px, 260px));
  grid-auto-flow: row;
  grid-gap: 5px;
  justify-content: center;
  overflow: hidden;
`;

const NoneFound = styled.div`
  background-color: ${(props) => props.theme.main};
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  padding: 20px;
  font-size: 1.8rem;
  color: white;
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
