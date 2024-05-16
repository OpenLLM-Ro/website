import React from 'react';
import { Button, Heading, HStack, Icon, Image, Stack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import hfIcon from './hf-logo.svg';

const Title = () => {
  return (
    <Stack spacing={'8'} marginTop={'5%'} textAlign={'center'}>
      <Heading as={'h1'} size={'3xl'} textTransform={'uppercase'}>
        Romanian OpenLLM
      </Heading>
    </Stack>
  );
};

export const Home = () => {
  return (
    <Stack height={'90vh'} justifyContent={'center'} alignItems={'center'} spacing={6} id={'home'}>
      <Title />
      <HStack>
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
    </Stack>
  );
};
