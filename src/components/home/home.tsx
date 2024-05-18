import React from 'react';
import { Button, Heading, HStack, Icon, Image, Stack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { NewsBulletin } from './news';
import hfIcon from './hf-logo.svg';

const Title = () => {
  return (
    <Heading paddingTop={['25vh']} as={'h1'} size={['2xl', '4xl']}>
      OpenLLM-Ro
    </Heading>
  );
};

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
      <Title />
      <Buttons />
      <NewsBulletin />
    </Stack>
  );
};
