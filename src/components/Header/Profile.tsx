import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align='center'>
            <Box>
                <Text>Dâmaris Dwayne</Text>
                <Text color='gray.300' fontSize='small'>
                    damarisdwayne@outlook.com</Text>
            </Box>

            <Avatar
                size='md'
                name="Dâmaris Dwayne"
                src="https://github.com/damarisdwayne.png" />
        </Flex>
    )
}