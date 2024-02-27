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
        <title>Spirax Mantine Dashboard Example</title>
        <meta
          name="description"
          content="Testing, testing!"
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
