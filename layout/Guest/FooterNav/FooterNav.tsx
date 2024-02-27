import {
  Container,
  Text,
} from '@mantine/core';
import classes from './FooterNav.module.css';


const FooterNav = () => {

  return (
    <footer className={classes.footer}>
      <Container fluid mb="xl">
          <Text ta="center">
            A work in progress
          </Text>
      </Container>
    </footer>
  );
};

export default FooterNav;
