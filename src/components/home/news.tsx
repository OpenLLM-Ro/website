import React, { ReactNode } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import comunicat from './comunicat.pdf';

const News: React.FC<{ link: string; children: ReactNode }> = ({ link, children }) => (
  <Text variant={'news'} as={'a'} target={'_blank'} rel={'noreferrer'} href={link}>
    {children}
  </Text>
);

export const NewsBulletin = () => (
  <Stack padding={['8vh 10vw']}>
    <Text as={'kbd'} fontWeight={'bold'}>
      News:
    </Text>
    <News link={'https://huggingface.co/collections/OpenLLM-Ro/romistral-6647241bf2cbbe9fd8c2afa4'}>
      17.05.2024 - launched a new Romanian model fine-tuned on Mistral
    </News>
    <News link={'https://huggingface.co/collections/OpenLLM-Ro/rollama2-664722bbf536ec14701ec81d'}>
      14.05.2024 - launched the first Romanian models fine-tuned on Llama2
    </News>
    <News link={comunicat}>
      14.05.2024 - press release (in Romanian) regarding the launch of OpenLLM-Ro
    </News>
  </Stack>
);
