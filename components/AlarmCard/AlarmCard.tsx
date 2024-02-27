import { 
  ActionIcon, 
  Group, 
  Paper, 
  PaperProps, 
  Title
} from '@mantine/core';
import classes from './AlarmCard.module.css';
import { IconDotsVertical } from '@tabler/icons-react';
import { Surface } from '@/components';
import { donutdata } from './AlarmCardData';

import dynamic from 'next/dynamic';

// Import DonutChart with SSR disabled
const DonutChartNoSSR = dynamic(() => import('@mantine/charts').then((mod) => mod.DonutChart), {
  ssr: false,
});

type ChartDataItem = {
  name: string;
  value: number;
  color: string;
};

type AlarmCardProps = {
  data: { title: string; };
} & PaperProps;



const AlarmCard = ({ data, ...others }: AlarmCardProps) => {
  const { title } = data;

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


      <DonutChartNoSSR data={donutdata} />

    </Surface>

  );
};

export default AlarmCard;
