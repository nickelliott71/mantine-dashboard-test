import { 
    Title,
    Paper, 
    PaperProps, 
    SimpleGrid, 
    Skeleton } 
from '@mantine/core';
import PerformanceCard from '@/components/PerformanceCard/PerformanceCard';
import classes from './PerformanceGrid.module.css';
import { ReactNode } from 'react';
import { ErrorAlert, Surface } from '@/components';

type PerformanceGridProps = {
  data?: { title: string; value: string; diff: number; period?: string }[];
  paperProps?: PaperProps;
  error?: ReactNode;
  loading?: boolean;
};

export default function PerformanceGrid({
  data,
  loading,
  error,
  paperProps,
}: PerformanceGridProps) {
  const performance = data?.map((performance) => (
    <PerformanceCard key={performance.title} data={performance} {...paperProps} />
  ));

  return (
    <div className={classes.root}>
      {error ? (
        <ErrorAlert title="Error loading stats" message={error.toString()} />
      ) : (
        <Surface component={Paper} {...paperProps}>
            <Title order={2} mb="md">Performance</Title>
            <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
            >
            {loading
                ? Array.from({ length: 4 }).map((o, i) => (
                    <Skeleton
                    key={`stats-loading-${i}`}
                    visible={true}
                    height={200}
                    />
                ))
                : performance}
            </SimpleGrid>
        </Surface>
      )}
    </div>
  );
}
