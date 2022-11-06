import { Section, Box } from "./Container.styled";

const Container = ({ children, bcgColor }) => {
  return (
    <Section bcgColor={bcgColor}>
      <Box>{children}</Box>
    </Section>
  );
};

export default Container;
