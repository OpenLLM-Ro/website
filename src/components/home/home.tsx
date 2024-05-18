import React from 'react';
import { Button, Heading, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import hfIcon from './hf-logo.svg';
import comunicat from './comunicat.pdf';

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

export const News = () => (
  <Stack padding={['8vh 10vw']}>
    <Text as={'kbd'} fontWeight={'bold'}>
      News:
    </Text>
    <Text
      variant={'news'}
      as={'a'}
      href={'https://huggingface.co/collections/OpenLLM-Ro/romistral-6647241bf2cbbe9fd8c2afa4'}
    >
      17.05.2024 - launched a new Romanian model fine-tuned on Mistral
    </Text>
    <Text
      variant={'news'}
      as={'a'}
      href={'https://huggingface.co/collections/OpenLLM-Ro/rollama2-664722bbf536ec14701ec81d'}
    >
      14.05.2024 - launched the first Romanian models fine-tuned on Llama2
    </Text>
    <Text variant={'news'} as={'a'} href={comunicat}>
      14.05.2024 - press release (in Romanian) regarding the launch of OpenLLM-Ro
    </Text>
  </Stack>
);

export const Home = () => {
  return (
    <Stack id={'home'} minHeight={'90vh'} justifyContent={'center'} alignItems={'center'}>
      <Title />
      <Buttons />
      <News />
    </Stack>
  );
};
