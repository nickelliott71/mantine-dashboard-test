import classes from './Logo.module.css';
import {
  Group,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  href?: string;
} & UnstyledButtonProps;

const Logo = ({ href, ...others }: LogoProps) => {
  return (
    <UnstyledButton
      className={classes.logo}
      component={Link}
      href={href || '/'}
      {...others}
    >
      <Group gap="xs">
        <Text fw={500}>Acme admin</Text>
      </Group>
    </UnstyledButton>
  );
};

export default Logo;
