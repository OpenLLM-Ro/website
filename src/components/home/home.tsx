import React from 'react';
import { Button, Heading, HStack, Icon, Stack, Text, type PropsOf } from '@chakra-ui/react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { NewsBulletin } from './news';
import hfIcon from './hf-logo.svg';

export const Buttons = () => {
  const buttons: (PropsOf<typeof Button> & { label: string })[] = [
    {
      href: 'https://huggingface.co/OpenLLM-Ro',
      label: 'HuggingFace',
      leftIcon: <Icon as={Image} src={hfIcon} alt={'HuggingFace Logo'} />,
      variant: 'ghost',
      as: 'a',
    },
    {
      href: 'https://github.com/openllm-ro',
      label: 'GitHub',
      leftIcon: <FaGithub />,
      variant: 'ghost',
      as: 'a',
    },
  ];
  return (
    <HStack
      padding={['3vh 10vw', '0 10vw']}
      wrap={'wrap'}
      align={'center'}
      justifyContent={'center'}
    >
      {buttons.map(({ label, ...props }) => (
        <Button key={label} {...props}>
          {label}
        </Button>
      ))}
    </HStack>
  );
};

export const Home = () => {
  return (
    <Stack id={'home'} minHeight={'90vh'} justifyContent={'center'} alignItems={'center'}>
      <Heading paddingTop={['25vh']} as={'h1'} size={['2xl', '4xl']}>
        OpenLLM-Ro
      </Heading>
      <Text padding={'3vh 5vw 2vh'} textAlign={'center'}>
        Join our community focused on building open LLMs for the Romanian language.
      </Text>
      <Buttons />
      <NewsBulletin />
    </Stack>
  );
};
