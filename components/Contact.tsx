import { Flex, Stack, Image } from "@chakra-ui/react";

export default function Contact(){
    return(
        <Stack minH={'90vh'} id="Contato">
            <Flex flex={1} align={'center'} justify={'center'} fontSize={'10vh'}>
                <h1>The Page Contact is in Maintenance</h1>
            </Flex>
            <Flex flex={1} align={'center'} justify={'center'}>
                <Image
                    width={'50vw'}
                    src="data:image/jpeg;base64,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"
                    alt="Perfil"
                />
            </Flex>
        </Stack>
    )
}