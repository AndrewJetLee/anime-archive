import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, Container } from "./Home";
import { HeaderTitle, Header } from "./Login";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { jikanRequest } from "../requestMethods";
import List from "../components/List";
import { useLocation } from "react-router-dom";

const Genre = () => {
  const location = useLocation();
  const { type } = location.state;
  const { name, id } = useParams();
  const [media, setMedia] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGenreMedia();
  }, []);

  const getGenreMedia = async () => {
    try {
      setLoading(true);
      const res = await jikanRequest.get(`/${type}?genres=${id}`);
      console.log(res);
      setMedia(res.data.data);
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
        const res = await jikanRequest.get(`/${type}?genres=${id}&page=${page}`);
        setMedia((prevList) => [...prevList, ...res.data.data]);
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
        <HeaderTitle>{name}</HeaderTitle>
      </Header>
      <Wrapper>
        <List
          items={media}
          getNextPage={getNextPage}
          pagination={pagination}
          loading={loading}
        />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Genre;
