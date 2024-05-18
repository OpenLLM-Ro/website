import React from 'react';
import { Button, Heading, HStack, Icon, Image, Stack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { NewsBulletin } from './news';
import hfIcon from './hf-logo.svg';

const Buttons = () => (
  <HStack
    padding={['3vh 10vw', '5vh 10vw 0']}
    wrap={'wrap'}
    align={'center'}
    justifyContent={'center'}
  >
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
      <Heading padding={'0 5vw'} as={'h2'} size={['l', 'xl']} textAlign={'center'}>
        Join the community building open LLMs for Romanian:
      </Heading>
      <Buttons />
      <NewsBulletin />
    </Stack>
  );
};
