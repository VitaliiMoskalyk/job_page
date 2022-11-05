import { Section, Box } from "./Container.styled";

const Container = ({ children }) => {
  return (
    <Section>
      <Box>{children}</Box>
    </Section>
  );
};

export default Container;
