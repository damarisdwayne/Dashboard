import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface PropfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData }: PropfileProps) {
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box>
                    <Text>Dâmaris Dwayne</Text>
                    <Text color='gray.300' fontSize='small'>
                        damarisdwayne@outlook.com</Text>
                </Box>
            )}

            <Avatar
                size='md'
                name="Dâmaris Dwayne"
                src="https://github.com/damarisdwayne.png" />
        </Flex>
    )
}