import { 
  ActionIcon, 
  Box,
  Flex, 
  Group, 
  Paper, 
  PaperProps, 
  Stack,
  Text,
  Title
} from '@mantine/core';
import classes from './AlarmCard.module.css';
import { IconDotsVertical } from '@tabler/icons-react';
import { Surface } from '@/components';
import { DonutChart } from '@mantine/charts';
import { Key } from 'react';

type ChartDataItem = {
  name: string;
  value: number;
  color: string;
  headline?: string;
};

type AlarmCardProps = {
  data: {
    [x: string]: any; title: string; chartData: ChartDataItem[]; 
};
} & PaperProps;

const AlarmCard = ({ data, ...others }: AlarmCardProps) => {
  const { title, headline, chartData } = data;
  
  return (
    <Surface component={Paper} {...others}>
      <Group justify="space-between" mb="md" gap="lg">
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <ActionIcon variant="subtle">
          <IconDotsVertical size={16} />
      </ActionIcon>
      </Group>

      <Flex
        gap="lg"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <DonutChart
          size={150} thickness={20}
          data={chartData}
          chartLabel={headline}
        />
        <Box>
          {chartData.map((item: ChartDataItem) => (
            <Group key={item.name} gap="xs" mb="xs">
              <Stack gap={0}>
                <Group gap="xs">
                  <Paper bg={item.color} w={15} h={15} radius={4} />
                  <Text span size="sm">{`${item.name}`}</Text>
                </Group>
                <Text  className={classes.value} span>{`${item.value}`}</Text>
              </Stack>
            </Group>
          ))}
        </Box>
      </Flex>

    </Surface>
  );
};

export default AlarmCard;
