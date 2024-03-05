import {
  ActionIcon,
  Box,
  Divider,
  Flex,
  Group,
  ScrollArea,
  Text,
  useMantineTheme,
} from '@mantine/core';
import {
  IconDashboard,
  IconFileInvoice,
  IconHelp,
  IconHexagons,
  IconInfoCircle,
  IconSettings,
  IconShoppingCart,
  IconX,
} from '@tabler/icons-react';
import { 
  Logo, 
  UserProfileCard 
} from '@/components';
import {
  PATH_APPS,
  PATH_AUTH,
  PATH_DASHBOARD,
} from '@/routes';
import UserProfileData from '@/public/mocks/UserProfile.json';
import { useMediaQuery } from '@mantine/hooks';
import classes from './SideStrip.module.css';
import { LinksGroup } from '@/components/Navigation/Links/Links';

const mockdata = [
  {
    title: 'View',
    links: [
      { label: 'Site overview', icon: IconDashboard, link: PATH_DASHBOARD.default },
      { label: 'All assets', icon: IconHexagons, link: PATH_DASHBOARD.analytics },
      { label: 'Orders', icon: IconShoppingCart, link: PATH_DASHBOARD.saas },
      { label: 'Invoices', icon: IconFileInvoice, link: PATH_DASHBOARD.saas },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Report issue', icon: IconInfoCircle, link: PATH_APPS.profile },
      { label: 'Help', icon: IconHelp, link: PATH_APPS.settings },
    ],
  },
  {
    title: 'Manage',
    links: [
      { label: 'Preferences', icon: IconSettings, link: PATH_AUTH.signin },
    ],
  },
];

type SideStripProps = {
  onClose: () => void;
};

const SideStrip = ({ onClose, ...others }: SideStripProps) => {
  const theme = useMantineTheme();
  const tablet_match = useMediaQuery('(max-width: 768px)');

  const links = mockdata.map((m) => (
    <Box pl={0} mb="md" key={m.title}>
      <Text
        tt="uppercase"
        size="xs"
        pl="md"
        fw={500}
        mb="sm"
        className={classes.linkHeader}
      >
        {m.title}
      </Text>
      {m.links.map((item) => (
        <LinksGroup {...item} key={item.label} />
      ))}
    </Box>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Flex justify="space-between" align="center" gap="sm">
            <Logo className={classes.logo} />
          {tablet_match && (
            <ActionIcon onClick={onClose} variant="transparent">
              <IconX color="white" />
            </ActionIcon>
          )}
        </Flex>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <Divider mb="sm" />
      <Text tt="uppercase"
      size="xs"
      fw={500}
      mb="sm"
      className={classes.linkHeader}>Contact</Text>
      <UserProfileCard data={{
        avatar: UserProfileData.avatar,
        name: UserProfileData.name,
        email: UserProfileData.email,
        job: UserProfileData.job
      }}/>
    </nav>
  );
};

export default SideStrip;
