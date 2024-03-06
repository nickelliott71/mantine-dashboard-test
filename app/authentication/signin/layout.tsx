'use client';

import { Center, Stack, Group } from '@mantine/core';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { Logo, ThemeSwitchButton } from '@/components';
import classes from './page.module.css';

type AuthProps = {
  children: ReactNode;
};

function SignInLayout({ children }: AuthProps) {
  return (
    <Center
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Stack>
        <Center>
          <Group gap="sm">
            <Logo className={classes.logo} />
            <ThemeSwitchButton />
          </Group>
        </Center>
        {children}
      </Stack>
    </Center>
  );
}

export default SignInLayout;
