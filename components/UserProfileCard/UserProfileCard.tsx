import { 
  ActionIcon,
  Avatar, 
  Button, 
  Group,
  Paper, 
  PaperProps, 
  Stack, 
  Text 
} from '@mantine/core';
import { Surface } from '@/components';
import classes from './UserProfileCard.module.css';
import { 
  IconDeviceMobile, 
  IconMail, 
  IconMessage 
} from '@tabler/icons-react';

type UserInfoActionProps = {
  data: {
    avatar: string;
    name: string;
    email: string;
    job: string;
  };
} & PaperProps;

const UserProfileCard = ({
  data: { avatar, name, email, job },
  ...others
}: UserInfoActionProps) => {
  return (
    <Surface className={classes.profile} my="xs" p="md" component={Paper} {...others}>
      <Group pb="xs">
        <Avatar src={avatar} radius="xl" size="lg" />
        <div>
          <Text size="md" fw={500}>
            {name}
          </Text>
          <Text size="sm">{job}</Text>
        </div>
        </Group>
        <Group mx="xl" justify="space-between">
          <ActionIcon variant="outline" size="lg" radius="xl" aria-label="Mobile">
            <IconDeviceMobile style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="outline" size="lg" radius="xl" aria-label="Mail">
            <IconMail style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="outline" size="lg" radius="xl" aria-label="Message">
            <IconMessage style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>                    
        </Group>



    </Surface>
  );
};

export default UserProfileCard;
