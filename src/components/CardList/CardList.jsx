import CardItem from "../CardItem/CardItem";

const CardList = ({ data }) => {
  return data.map((d) => <CardItem dataItem={d} key={d.id} />);
};

export default CardList;
