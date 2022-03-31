import { useState, useEffect } from "react";
import { Container, Wrapper } from "./Home";
import Nav from "../components/Nav";
import { Header, HeaderTitle } from "./Login";
import Footer from "../components/Footer";
import List from "../components/List";
import styled from "styled-components";
import { jikanRequest } from "../requestMethods";

const Seasonal = () => {
  const seasons = ["Winter", "Spring", "Summer", "Fall"];

  const getSeason = (date) => {
    return Math.floor((date.getMonth() / 12) * 4) % 4;
  };

  const [activeSeason, setActiveSeason] = useState(
    seasons[getSeason(new Date())]
  );
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [allAnime, setAllAnime] = useState([]);
  const [sort, setSort] = useState("");
  const [dropdownSeason, setDropdownSeason] = useState("Winter");
  const [yearInput, setYearInput] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAnime();
  }, [activeSeason, currentYear]);

  useEffect(() => {
    if (sort === "members") {
      let sorted = [...allAnime].sort((a, b) => b.members - a.members);
      setAllAnime(sorted);
    } else if (sort === "score") {
      let sorted = [...allAnime].sort((a, b) => b.score - a.score);
      setAllAnime(sorted);
    }
  }, [sort]);

  const getAnime = async () => {
    try {
      setLoading(true);
      const res = await jikanRequest.get(
        `/seasons/${currentYear}/${activeSeason}`
      );
      setAllAnime(res.data.data);
      setLoading(false);
      setPagination(res.data.pagination);
    } catch (err) {
      console.log(err);
    }
  };

  const getNextPage = async () => {
    try {
      if (pagination.has_next_page) {
        let page = currentPage + 1;
        const res = await jikanRequest.get(
          `/seasons/${currentYear}/${activeSeason}?page=${page}`
        );
        setAllAnime((prevAllAnime) => [...prevAllAnime, ...res.data.data]);
        setPagination(res.data.pagination);
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Nav />
      <Header>
        <HeaderTitle>Seasonal Anime</HeaderTitle>
      </Header>
      <Wrapper>
        <SeasonTabs>
          <Previous
            onClick={() => {
              setCurrentYear(currentYear - 1);
              setSort("");
              document
                .querySelector(".default")
                .setAttribute("selected", "selected");
            }}
          >
            ...
          </Previous>
          {seasons.map((season, i) => (
            <SeasonTab
              season={season}
              year={currentYear}
              onClick={() => {
                setActiveSeason(season);
                setCurrentYear(currentYear);
              }}
              key={i}
              active={activeSeason === season ? true : false}
            >{`${season} ${currentYear}`}</SeasonTab>
          ))}
          <Next
            onClick={() => {
              setCurrentYear(currentYear + 1);
              setSort("");
              document
                .querySelector(".default")
                .setAttribute("selected", "selected");
            }}
            currentYear={currentYear}
          >
            ...
          </Next>
          <SortWrapper>
            <SortLabel>Sort By: </SortLabel>
            <Sort onChange={(e) => setSort(e.target.value)}>
              <option className="default" value="">
                Select
              </option>
              <option value="score">Score</option>
              <option value="members">Members</option>
            </Sort>
          </SortWrapper>
          <SelectSeasonWrapper>
            <SelectSeasonLabel>Jump to: </SelectSeasonLabel>
            <SelectSeason onChange={(e) => setDropdownSeason(e.target.value)}>
              {seasons.map((season, i) => (
                <option value={season} key={i}>
                  {season}
                </option>
              ))}
            </SelectSeason>
            <SelectYear
              placeholder="Year"
              onChange={(e) => setYearInput(e.target.value)}
            />
            <SelectSeasonButton
              onClick={() => {
                setCurrentYear(yearInput);
                setActiveSeason(dropdownSeason);
              }}
            >
              Go
            </SelectSeasonButton>
          </SelectSeasonWrapper>
        </SeasonTabs>

        <Content>
          <List
            items={allAnime}
            getNextPage={getNextPage}
            pagination={pagination}
            loading={loading}
          ></List>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Seasonal;

const SeasonTabs = styled.ul`
  display: flex;
  color: ${(props) => props.theme.main};
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px ${(props) => props.theme.main};
  select {
    border-color: lightgray;
  }
`;
const Previous = styled.span`
  cursor: pointer;
`;

const Next = styled(Previous)`
  display: ${(props) =>
    props.currentYear < new Date().getFullYear() ? "inline" : "none"};
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Sort = styled.select`
  height: 30px;
  margin: 0 5px;
`;

const SortLabel = styled.label`
  color: black;
`;

const SeasonTab = styled.li`
  padding: 8px 18px;
  cursor: pointer;
  background-color: ${(props) => props.active && props.theme.main};
  color: ${(props) => props.active && "white"};
  :hover {
    color: white;
    background-color: ${(props) => props.theme.main};
  }
`;

const SelectSeasonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectSeasonLabel = styled(SortLabel)``;

const SelectSeason = styled(Sort)``;

const SelectYear = styled.input`
  width: 50px;
  height: 30px;
  border: 1px solid lightgray;
  margin: 0 5px;
`;

const SelectSeasonButton = styled.button`
  background-color: ${(props) => props.theme.tertiary};
  color: white;
  height: 30px;
`;

const Content = styled.main``;
