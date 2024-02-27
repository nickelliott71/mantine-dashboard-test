import { 
  Button, 
  Group, 
  GroupProps,
  Menu,
  Stack,
  Text 
} from '@mantine/core';

import { Sparkline } from '@mantine/charts';

import classes from './PerformanceCard.module.css';
import { IconInfoCircle, IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react';

type PerformanceCardProps = {
  data: { title: string; value: string; diff: number; measure?: string };
};

const PerformanceCard = ({ data, ...others }: PerformanceCardProps) => {
  const { title, value, measure, diff } = data;
  const DiffIcon = diff > 0 ? IconCaretUpFilled : IconCaretDownFilled;

  return (
    <div>
      <Menu shadow="lg" width={200}>
        <Menu.Target>
          <Button className={classes.titlebutton} leftSection={<IconInfoCircle size={14} />} rightSection={<IconCaretDownFilled size={14} />} variant="transparent">
            {title}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label tt="uppercase" fw={600}>
            Performance widgets
          </Menu.Label>
          <Menu.Item>
            Widget 1
          </Menu.Item>
          <Menu.Item>
            Widget 2
          </Menu.Item>
          <Menu.Item>
            Widget 3
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Group className={classes.chartgroup} align="flex-start" justify='flex-start' wrap="nowrap" gap="xs">
        <Stack className={classes.charttext}>
          <Group gap="xs" align="baseline">
            <Text span className={classes.value}>{value}</Text>
            <Text span className={classes.measure}>{measure}</Text>
          </Group>
          <Group gap={0}>
            <Text span
                c={diff > 0 ? 'lime' : 'red'}
                fz="sm"
                fw={500}
                className={classes.diff}
              >
              <DiffIcon size="1rem" stroke={1.5} />
            </Text>
            <Text span fz="xs" c="dimmed" mt={7}>
              {diff}% prev year
            </Text>
          </Group>
        </Stack>


        <div className={classes.chartspark}>
          <Sparkline
            w="100%"
            h={75}
            data={[10, 20, 40, 20, 40, 10, 50]}
            curveType="natural"
            color={diff > 0 ? 'lime' : 'red'}
            fillOpacity={0.6}
            strokeWidth={2}
          />
        </div>
      </Group>

      
    </div>
  );
};

export default PerformanceCard;
