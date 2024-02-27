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
      <Group gap="xs">
        <Text span fw={500}>Acme admin</Text>
      </Group>
  );
};

export default Logo;
