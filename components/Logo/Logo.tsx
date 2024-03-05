import classes from './Logo.module.css';
import {
  Group,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/theme/themeContext';

type LogoProps = {
  href?: string;
} & UnstyledButtonProps;

const Logo = ({ href, ...others }: LogoProps) => {
  const { theme } = useTheme();
  return (

    <UnstyledButton
      className={classes.logo}
      component={Link}
      href={href || '/'}
      {...others}
    >

      <Group justify="center" gap="xs">
        <Image
          src={theme.brandAssets.logo}
          alt={theme.brandAssets.name}
          width={theme.brandAssets.logoWidth}
          height={theme.brandAssets.logoHeight}
        />
      </Group>
    </UnstyledButton>
  );
};

export default Logo;
