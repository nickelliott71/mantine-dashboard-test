'use client';

import {
  Anchor,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  PaperProps,
  Stack,
  Text,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import {
  MobileDesktopChart,
  PageHeader,
  PerformanceGrid,
  AlarmsGrid,
  ProjectsTable,
  RevenueChart,
  SalesChart,
} from '@/components';
import Link from 'next/link';
import { PATH_TASKS } from '@/routes';
import { useFetchData } from '@/hooks';

const PAPER_PROPS: PaperProps = {
  p: 'md',
  shadow: 'md',
  radius: 'md',
  style: { height: '100%' },
};

const breadcrumbItems = [
  { title: 'Organisations', href: '#' },
  { title: 'ACME UK', href: '#' },
  { title: 'Site overview', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} fz="sm" key={index}>
    {item.title}
  </Anchor>
));

function Page() {
  const {
    data: projectsData,
    error: projectsError,
    loading: projectsLoading,
  } = useFetchData('/mocks/Projects.json');
  const {
    data: alarmData,
    error: alarmError,
    loading: alarmLoading,
  } = useFetchData('/mocks/AlarmsGrid.json');
  const {
    data: performanceData,
    error: performanceError,
    loading: performanceLoading,
  } = useFetchData('/mocks/PerformanceGrid.json');

  return (
    <>
      <>
        <title>Default Dashboard</title>
        <meta
          name="description"
          content="Explore our versatile dashboard website template featuring a stunning array of themes and meticulously crafted components. Elevate your web project with seamless integration, customizable themes, and a rich variety of components for a dynamic user experience. Effortlessly bring your data to life with our intuitive dashboard template, designed to streamline development and captivate users. Discover endless possibilities in design and functionality today!"
        />
      </>
      <Container fluid>
        <Stack gap="lg">
          <Breadcrumbs children={breadcrumbItems}></Breadcrumbs>
          <PageHeader title="Welcome back, Raj!" withActions={true} />
          <PerformanceGrid
            data={performanceData.data}
            loading={performanceLoading}
            error={performanceError}
            paperProps={PAPER_PROPS}
          />
          <AlarmsGrid
            data={alarmData.data}
            loading={alarmLoading}
            error={alarmError}
            paperProps={PAPER_PROPS}
          />
        </Stack>
      </Container>
    </>
  );
}

export default Page;
