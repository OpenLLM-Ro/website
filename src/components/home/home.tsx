import React from 'react';
import { Button, Heading, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { NewsBulletin } from './news';
import hfIcon from './hf-logo.svg';

const Buttons = () => (
  <HStack padding={['3vh 10vw', '0 10vw']} wrap={'wrap'} align={'center'} justifyContent={'center'}>
    <Button
      leftIcon={<Icon as={Image} src={hfIcon} />}
      as={'a'}
      href={'https://huggingface.co/OpenLLM-Ro'}
    >
      HuggingFace
    </Button>
    <Button leftIcon={<FaGithub />} as={'a'} href={'https://github.com/openllm-ro'}>
      GitHub
    </Button>
  </HStack>
);

export const Home = () => {
  return (
    <Stack id={'home'} minHeight={'90vh'} justifyContent={'center'} alignItems={'center'}>
      <Heading paddingTop={['25vh']} as={'h1'} size={['2xl', '4xl']}>
        OpenLLM-Ro
      </Heading>
      <Text padding={'3vh 5vw 2vh'} textAlign={'center'}>
        Join our community building open LLMs for Romanian
      </Text>
      <Buttons />
      <NewsBulletin />
    </Stack>
  );
};
