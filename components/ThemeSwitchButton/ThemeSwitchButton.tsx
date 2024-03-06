'use client';

import {
  ActionIcon,
  Menu,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconCircleHalf2,
  IconMoonStars,
  IconSunHigh,
} from '@tabler/icons-react';
import { useTheme } from '@/theme/themeContext';

const ICON_SIZE = 20;

type ThemeSwitchButtonProps = {
};

const ThemeSwitchButton = (props: ThemeSwitchButtonProps) => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const { switchTheme } = useTheme();

  return (
    <Menu shadow="lg" width={200}>
        <Menu.Target>
        <Tooltip label="Switch color modes">
            <ActionIcon variant="light">
            {colorScheme === 'auto' ? (
                <IconCircleHalf2 size={ICON_SIZE} />
            ) : colorScheme === 'dark' ? (
                <IconMoonStars size={ICON_SIZE} />
            ) : (
                <IconSunHigh size={ICON_SIZE} />
            )}
            </ActionIcon>
        </Tooltip>
        </Menu.Target>
        <Menu.Dropdown>
        <Menu.Label tt="uppercase" ta="center" fw={600}>
            Select color modes
        </Menu.Label>
        <Menu.Item
            leftSection={<IconSunHigh size={16} />}
            onClick={() => {
            switchTheme('ThemeA'); 
            }}
        >
            Spirax Group Light
        </Menu.Item>
        <Menu.Item
            leftSection={<IconMoonStars size={16} />}
            onClick={() => {
            switchTheme('ThemeA'); 
            }}
        >
            Spirax Group Dark
        </Menu.Item>
        <Menu.Item
            leftSection={<IconSunHigh size={16} />}
            onClick={() => {
            setColorScheme('light');
            switchTheme('ThemeB'); 
            }}
        >
            Spirax Sarco Light
        </Menu.Item>
        <Menu.Item
            leftSection={<IconMoonStars size={16} />}
            onClick={() => {
            setColorScheme('dark');
            switchTheme('ThemeB'); 
            }}
        >
            Spirax Sarco Steam Dark
        </Menu.Item>
        <Menu.Item
            leftSection={<IconSunHigh size={16} />}
            onClick={() => {
            setColorScheme('light');
            switchTheme('ThemeC'); 
            }}
        >
            Watson Marlow Light
        </Menu.Item>
        <Menu.Item
            leftSection={<IconMoonStars size={16} />}
            onClick={() => {
            setColorScheme('dark');
            switchTheme('ThemeC'); 
            }}
        >
            Watson Marlow Dark
        </Menu.Item>              
        <Menu.Item
            leftSection={<IconSunHigh size={16} />}
            onClick={() => {
            setColorScheme('light');
            switchTheme('ThemeD');
            }}
        >
            Chromalox Light
        </Menu.Item>
        <Menu.Item
            leftSection={<IconMoonStars size={16} />}
            onClick={() => {
            setColorScheme('dark');
            switchTheme('ThemeD'); 
            }}
        >
            Chromalox Dark
        </Menu.Item>                        
        <Menu.Item
            leftSection={<IconCircleHalf2 size={16} />}
            onClick={() => setColorScheme('auto')}
        >
            Use System Colors
        </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  );
};

export default ThemeSwitchButton;
