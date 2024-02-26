import { PaperProps, SimpleGrid, Skeleton } from '@mantine/core';
import AlarmCard from '@/components/AlarmCard/AlarmCard';
import classes from './AlarmsGrid.module.css';
import { ReactNode } from 'react';
import { ErrorAlert } from '@/components';

type ChartDataItem = {
  name: string;
  value: number;
  color: string;
};

type StatsGridProps = {
  data?: { title: string, chartData: ChartDataItem[]; }[];
  paperProps?: PaperProps;
  error?: ReactNode;
  loading?: boolean;
};

export default function AlarmsGrid({
  data,
  loading,
  error,
  paperProps,
}: StatsGridProps) {
  const stats = data?.map((stat) => (
    <AlarmCard key={stat.title} data={stat} {...paperProps} />
  ));

  return (
    <div className={classes.root}>
      {error ? (
        <ErrorAlert title="Error loading stats" message={error.toString()} />
      ) : (
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
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
            : stats}
        </SimpleGrid>
      )}
    </div>
  );
}
