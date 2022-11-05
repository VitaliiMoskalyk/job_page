import Container from "../../components/Container/Container";
import CardList from "../../components/CardList/CardList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import dataGenerator from "../../utils/dataGenerator";

const JobList = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    dataGenerator().then((data) => setData(data));
    navigate("/job_page");
  }, []);

  return (
    <Container>
      <div>{data && <CardList data={data} />}</div>
    </Container>
  );
};

export default JobList;
