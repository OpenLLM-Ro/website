import React, { ReactNode } from 'react';
import { Stack, Text } from '@chakra-ui/react';

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

    <News link={'https://huggingface.co/OpenLLM-Ro'}>
      09.10.2024 - released new instruct and human aligned models
    </News>
    
    <News link={'https://ilds.ro/workshop-llms-for-romanian'}>
      28.09.2024 - workshop LLMs for Romanian
    </News>
    
    <News link={'https://github.com/OpenLLM-Ro/FastChat'}>
      26.08.2024 - released the code & data (RoMTBench and RoCulturaBench) for evaluating Romanian LLMs using LLM-as-a-Judge
    </News>

    <News link={'https://github.com/OpenLLM-Ro/LLaMA-Factory'}>
      14.08.2024 - released the code & data for training Romanian LLMs
    </News>

    <News link={'https://github.com/OpenLLM-Ro/lm-evaluation-harness'}>
      09.08.2024 - released the code & data for evaluating Romanian LLMs on academic benchmarks and downstream tasks
    </News>
    
    <News link={'https://huggingface.co/collections/OpenLLM-Ro/rollama3-667d25e2db6a8e980f0b1551'}>
      28.06.2024 - launched a new Romanian model fine-tuned on Llama3
    </News>
    
    <News link={'https://huggingface.co/collections/OpenLLM-Ro/rogemma-667d261f6b607a23173c1e73'}>
      28.06.2024 - launched a new Romanian model fine-tuned on Gemma
    </News>
    
    <News link={'https://arxiv.org/abs/2406.18266'}>
      27.06.2024 - new preprint adding more models and evaluations
    </News>
    
    <News link={'https://huggingface.co/collections/OpenLLM-Ro/romistral-6647241bf2cbbe9fd8c2afa4'}>
      17.05.2024 - launched a new Romanian model fine-tuned on Mistral
    </News>
    
    <News link={'https://huggingface.co/collections/OpenLLM-Ro/rollama2-664722bbf536ec14701ec81d'}>
      14.05.2024 - launched the first Romanian models fine-tuned on Llama2
    </News>
    
    <News link={'/comunicat.pdf'}>
      14.05.2024 - press release (in Romanian) regarding the launch of OpenLLM-Ro
    </News>
    
  </Stack>
);
