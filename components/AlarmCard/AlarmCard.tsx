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

type ChartDataItem = {
  name: string;
  value: number;
  color: string;
};

type AlarmCardProps = {
  data: { title: string; chartData: ChartDataItem[]; };
} & PaperProps;


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

      <DonutChart
        style={{
          // chart needs a set height for it to render
          height: '300px',
        }}
        data={chartData}
      />
    </Surface>
  );
};

export default AlarmCard;
