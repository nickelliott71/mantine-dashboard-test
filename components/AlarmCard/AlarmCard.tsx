import { 
  ActionIcon, 
  Group, 
  Paper, 
  PaperProps, 
  Title
} from '@mantine/core';
import { DonutChart } from '@mantine/charts';
import classes from './AlarmCard.module.css';
import { IconDotsVertical } from '@tabler/icons-react';
import { Surface } from '@/components';
import dynamic from 'next/dynamic';

type ChartDataItem = {
  name: string;
  value: number;
  color: string;
};

type AlarmCardProps = {
  data: { title: string; chartData: ChartDataItem[]; };
} & PaperProps;

const DonutChartNoSSR = dynamic(() => import('@mantine/charts').then((mod) => mod.DonutChart), {
  ssr: false,
});


const AlarmCard = ({ data, ...others }: AlarmCardProps) => {
  const { title, chartData } = data;
  
  return (
    <Surface component={Paper} {...others}>
      <Group justify="space-between" mb="md">
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <ActionIcon variant="subtle">
          <IconDotsVertical size={16} />
      </ActionIcon>
      </Group>

      <DonutChartNoSSR
        style={{
          // chart needs a set height for it to render
          height: '200px',
        }}
        size={200} thickness={30}
        data={chartData}
      />
    </Surface>
  );
};

export default AlarmCard;
