import classes from './Logo.module.css';
import {
  Center,
  Group,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  href?: string;
  hideText?: boolean; 
} & UnstyledButtonProps;

const Logo = ({ href, hideText, ...others }: LogoProps) => {
  return (

    <UnstyledButton
      className={classes.logo}
      component={Link}
      href={href || '/'}
      {...others}
    >

      <Group justify="center" gap="xs">
        <Image
          src="/logo-no-background.png"
          height={24}
          width={24}
          alt="dummy logo"
        />
        {!hideText && <Text span fw={500}>Acme admin</Text>}
      </Group>
    </UnstyledButton>
  );
};

export default Logo;
