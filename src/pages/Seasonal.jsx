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
  const [allAnime, setAllAnime] = useState([]);
  const [sort, setSort] = useState("");
  const [dropdownSeason, setDropdownSeason] = useState("");
  const [yearInput, setYearInput] = useState(null);

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
    const res = await jikanRequest.get(
      `/seasons/${currentYear}/${activeSeason}`
    );
    console.log(res);
    setAllAnime(res.data.data);
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
              <option value="members">Members</option>
              <option value="score">Score</option>
            </Sort>
          </SortWrapper>
          <SelectSeasonWrapper>
              <SelectSeason onChange={(e) => setDropdownSeason(e.target.value)}>
                {seasons.map((season, i) => <option value={season} key={i}>{season}</option>)}
              </SelectSeason>
              <SelectYear placeholder="Year" onChange={(e) => setYearInput(e.target.value)}/>
              <SelectSeasonButton onClick={() => {
                  setCurrentYear(yearInput);
                  setActiveSeason(dropdownSeason);
              }}>Go</SelectSeasonButton>
          </SelectSeasonWrapper>
        </SeasonTabs>

        <Content>
          <List items={allAnime}></List>
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
`;
const Previous = styled.span`
  cursor: pointer;
`;

const Next = styled(Previous)`
  display: ${(props) =>
    props.currentYear < new Date().getFullYear() ? "inline" : "none"};
`;

const SortWrapper = styled.div``;

const Sort = styled.select``;

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

const SelectSeasonWrapper = styled.div``

const SelectSeason = styled.select``

const SelectYear = styled.input``

const SelectSeasonButton = styled.button``

const Content = styled.main``;
