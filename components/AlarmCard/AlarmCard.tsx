import { 
  ActionIcon, 
  Badge, 
  Group, 
  Paper, 
  PaperProps, 
  Title
} from '@mantine/core';
import { DonutChart, PieChart } from '@mantine/charts';
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

  const dummydata = [
    { name: 'USA', value: 400, color: 'indigo.6' },
    { name: 'India', value: 300, color: 'yellow.6' },
    { name: 'Japan', value: 100, color: 'teal.6' },
    { name: 'Other', value: 200, color: 'gray.6' },
  ];
  
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
        data={[
          { name: 'USA', value: 400, color: 'blue' },
          { name: 'Other', value: 200, color: 'gray.6' },
        ]}
    />
    
      <DonutChart data={dummydata} />
      <DonutChart data={chartData} />

      <PieChart data={[
          { name: 'USA', value: 400, color: 'blue' },
          { name: 'Other', value: 200, color: 'gray.6' },
        ]} />

    </Surface>

  );
};

export default AlarmCard;
