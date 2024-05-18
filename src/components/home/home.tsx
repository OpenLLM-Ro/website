import React from 'react';
import { Button, Heading, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import hfIcon from './hf-logo.svg';

const Title = () => {
  return (
    <Stack spacing={'8'} marginTop={'5%'} textAlign={'center'}>
      <Heading as={'h1'} size={'3xl'} textTransform={'uppercase'}>
        OpenLLM-Ro
      </Heading>
    </Stack>
  );
};

const Buttons = () => (
  <HStack wrap={'wrap'} align={'center'} justifyContent={'center'}>
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
  <Stack>
    <Text as={'kbd'} fontWeight={'bold'}>
      News:
    </Text>
    <Button
      variant={'news'}
      as={'a'}
      href={'https://huggingface.co/collections/OpenLLM-Ro/romistral-6647241bf2cbbe9fd8c2afa4'}
    >
      17.05.2024 - launched new Romanian model fine tuned on Mistral
    </Button>
    <Button
      as={'a'}
      variant={'news'}
      href={'https://drive.google.com/file/d/1sSWkS0NxpG4t8Hco8AGX8p7UaKzvG0au/view?usp=sharing'}
    >
      14.05.2024 - launched the first models
    </Button>
  </Stack>
);

export const Home = () => {
  return (
    <Stack
      id={'home'}
      height={'90vh'}
      padding={'10vw'}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={6}
    >
      <Title />
      <Buttons />
      <News />
    </Stack>
  );
};
