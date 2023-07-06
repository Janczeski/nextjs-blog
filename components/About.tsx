import { Stack, Heading, Flex, Text, Image, IconButton, useColorModeValue } from "@chakra-ui/react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function About(){

    return(
        <Stack minH={'85vh'} direction={{ base: 'column-reverse', md: 'row' }} id='Sobre' bg={useColorModeValue('gray.100', 'gray.700')}>
            <Flex p={5} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={9} w={'full'} maxW={'70vh'} marginLeft={'10vw'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}>
                        <Text as={'span'} position={'relative'}>
                            Vinicius Zanquini
                        </Text>
                        <br />
                        <Text color={'blue.400'} as={'span'}>
                            Desenvolvedor Web
                        </Text>
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: '3xl' }} color={useColorModeValue('gray.700', 'gray.100')}>
                        Desenvolvedor Full Stack, tecnólogo em Informática para Internet pelo Instito Federal (IFMS), 
                        cursando Sistema de Informação na Universidade da Grande Dourados (UFGD).
                    </Text>
                    <Stack direction={{ base: 'row', md: 'row' }} spacing={4}>
                        <div onClick={() => window.open('https://www.linkedin.com/in/vinicius-zanquini-janczeski-3171b5141')}>
                            <IconButton
                                boxSize='30px'
                                aria-label={""}
                                border={'None'}
                                variant={"outline"}
                                fontSize='40px'
                                icon={<FaLinkedin/>}/>
                        </div>
                        <div onClick={() => window.open('https://github.com/Janczeski')}>
                            <IconButton
                                boxSize='30px'
                                aria-label={""}
                                border={'None'}
                                variant={"outline"}
                                fontSize='40px'
                                icon={<FaGithub/>}/>
                        </div>
                    </Stack>
                </Stack>
            </Flex>          
            <Flex flex={1} align={'center'} justify={'center'} >
                <Stack spacing={5} w={'full'} maxW={'60vh'}>
                    <Image
                        alignSelf={'center'}
                        maxH={['30vh', '30vh', '40vh', '50vh']}
                        maxW={['30vh', '30vh', '40vh', '50vh']}
                        shadow={'dark-lg'}
                        borderRadius={'50%'}
                        src="/images/perfilphoto2.jpg"
                        alt="Perfil"
                    />
                </Stack>
            </Flex>
        </Stack>
    )
}