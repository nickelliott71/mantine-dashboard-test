import {Avatar, Flex, Indicator, Stack, Text, UnstyledButton, UnstyledButtonProps} from "@mantine/core";
import useStyles from "./ChatsList.styles";

type ChatsListProps = {
    avatar: string
    firstName: string
    lastName: string
    lastMessage: string
} & UnstyledButtonProps

const ChatsList = ({avatar, lastName, lastMessage, firstName}: ChatsListProps) => {
    const {classes} = useStyles();

    return (
        <UnstyledButton className={classes.item}>
            <Flex align="center" gap="xs">
                <Indicator position="bottom-end" color="green" offset={5} size={9}>
                    <Avatar
                        size="md"
                        radius="50%"
                        src={avatar}
                    />
                </Indicator>
                <Stack spacing={1}>
                    <Text size="sm" fw={600} lineClamp={1}>{firstName} {lastName}</Text>
                    <Text lineClamp={1} size="sm" color="dimmed">{lastMessage}</Text>
                </Stack>
            </Flex>
        </UnstyledButton>
    );
};

export default ChatsList;
