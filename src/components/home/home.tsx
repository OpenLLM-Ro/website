import React from 'react';
import { Button, Heading, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import hfIcon from './hf-logo.svg';
import comunicat from './comunicat.pdf';

const Title = () => {
  return (
    <Stack spacing={'8'} marginTop={'5%'} padding={'0 2vw'} textAlign={'center'}>
      <Heading as={'h1'} size={['2xl', '3xl']} textTransform={'uppercase'}>
        OpenLLM-Ro
      </Heading>
    </Stack>
  );
};

const Buttons = () => (
  <HStack wrap={'wrap'} align={'center'} justifyContent={'center'} padding={'0 10vw'}>
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

export const News = () => (
  <Stack padding={'0 10vw'}>
    <Text as={'kbd'} fontWeight={'bold'}>
      News:
    </Text>
    <Text
      variant={'news'}
      as={'a'}
      href={'https://huggingface.co/collections/OpenLLM-Ro/romistral-6647241bf2cbbe9fd8c2afa4'}
    >
      17.05.2024 - launched new Romanian model fine tuned on Mistral
    </Text>
    <Text variant={'news'} as={'a'} href={comunicat}>
      14.05.2024 - launched the first models
    </Text>
  </Stack>
);

export const Home = () => {
  return (
    <Stack id={'home'} height={'90vh'} justifyContent={'center'} alignItems={'center'} spacing={6}>
      <Title />
      <Buttons />
      <News />
    </Stack>
  );
};
