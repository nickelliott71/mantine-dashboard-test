'use client';

import {
  Box,
  ContainerProps,
  Grid,
  Group,
  Image,
  rem,
  Stack,
  Text,
  Title,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import { PATH_APPS, PATH_DASHBOARD, PATH_DOCS, PATH_GITHUB } from '@/routes';
import {
  IconAdjustmentsHorizontal,
  IconApps,
  IconArrowRight,
  IconBook,
  IconBrandGithub,
  IconBrandMantine,
  IconBrandTabler,
  IconColorSwatch,
  IconComponents,
  IconDevices,
  IconFileCode,
  IconFileCode2,
  IconFileInfo,
  IconFolderCode,
  IconLayoutBoard,
  IconLayoutGrid,
  IconPaint,
  IconPlayerPlay,
  IconScaleOutline,
  IconSettingsCog,
} from '@tabler/icons-react';
import CountUp from 'react-countup';
import { useMediaQuery } from '@mantine/hooks';
import GuestLayout from '@/layout/Guest';
import classes from './page.module.css';
import { createElement } from 'react';

const EXAMPLES = [
  { title: 'Dashboard', href: PATH_DASHBOARD.default },
  { title: 'Dashboard 2', href: PATH_DASHBOARD.analytics },
  { title: 'Dashboard 3', href: PATH_DASHBOARD.saas },
];

export default function Home() {
  const tablet_match = useMediaQuery('(max-width: 768px)');
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const BOX_PROPS: ContainerProps = {
    pt: rem(120),
    pb: rem(80),
    px: tablet_match ? rem(36) : rem(40 * 3),
    className: classes.section,
  };

  return (
    <>
      <>
        <title>Spirax Mantine | Example App</title>
        <meta
          name="description"
          content="Testing!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </>
      <GuestLayout>
        <Box className={classes.hero}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
              <Stack>
                <Title className={classes.title}>
                  The simplest and fastest way to build your next{' '}
                  <Text component="span" inherit className={classes.highlight}>
                    Mantine UI{' '}
                  </Text>
                  &{' '}
                  <Text component="span" inherit className={classes.highlight}>
                    Nextjs{' '}
                  </Text>
                  dashboard or app.
                </Title>
              
                <Stack>
                  <Text fw={700}>Examples:</Text>
                  <Group pb="sm">
                    {EXAMPLES.map((t, index) => (
                      <UnstyledButton
                        key={`home-item--${index}`}
                        className={classes.stackControl}
                        component="a"
                        href={t.href}
                      >
                        {t.title}
                      </UnstyledButton>
                    ))}
                  </Group>
                </Stack>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
              <Image
                src={
                  colorScheme === 'dark'
                    ? '/thumbnail-img.jpg'
                    : '/thumbnail-img-b.jpg'
                }
                alt="/"
                radius="md"
              />
            </Grid.Col>
          </Grid>
        </Box>
      </GuestLayout>
    </>
  );
}
