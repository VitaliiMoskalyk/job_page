import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import dataGenerator from "../../utils/dataGenerator";
import PaginatedItems from "../../utils/pagination";

const JobList = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    dataGenerator().then((data) => setData(data));
    navigate("/");
  }, []);

  return (
    <Container bcgColor="#e6e9f2">
      {data && <PaginatedItems itemsPerPage={10} items={data} />}
    </Container>
  );
};

export default JobList;
