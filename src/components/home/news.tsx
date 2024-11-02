import React, { ReactNode } from 'react';
import { Stack, Text } from '@chakra-ui/react';

const NewsEntry: React.FC<{ link: string; children: ReactNode }> = ({ link, children }) => (
  <Text variant={'news'} as={'a'} target={'_blank'} rel={'noreferrer'} href={link}>
    {children}
  </Text>
);

export const NewsBulletin = () => {
  const entries: { link: string; text: string; type: string; date: string }[] = [
    {
      link: 'https://huggingface.co/OpenLLM-Ro',
      date: '2024-10-09',
      type: 'Release',
      text: 'New instruct and human-aligned models',
    },
    {
      link: 'https://ilds.ro/workshop-llms-for-romanian',
      date: '2024-09-28',
      type: 'Event',
      text: 'Workshop about Romanian LLMs',
    },
    {
      link: 'https://github.com/OpenLLM-Ro/FastChat',
      date: '2024-08-26',
      type: 'Code',
      text: 'Open sourced the code and data used for evaluating Romanian LLMs using LLM-as-a-Judge',
    },
    {
      link: 'https://github.com/OpenLLM-Ro/LLaMA-Factory',
      date: '2024-08-14',
      type: 'Code',
      text: 'Open sourced the code and data used to train Romanian LLMs.',
    },
    {
      link: 'https://github.com/OpenLLM-Ro/lm-evaluation-harness',
      date: '2024-08-09',
      type: 'Code',
      text: 'Open sourced the code and data for evaluating Romanian LLMs on academic benchmarks and downstream tasks.',
    },
    {
      link: 'https://huggingface.co/collections/OpenLLM-Ro/rollama3-667d25e2db6a8e980f0b1551',
      date: '2024-06-28',
      type: 'Fine-Tune Release',
      text: 'New fine-tuned model based on Llama-3: OpenLLM-Ro/rollama3',
    },
    {
      link: 'https://huggingface.co/collections/OpenLLM-Ro/rogemma-667d261f6b607a23173c1e73',
      date: '2024-06-28',
      type: 'Fine-Tune Release',
      text: 'New fine-tuned model based on Gemma: OpenLLM-Ro/rogemma',
    },
    {
      link: 'https://arxiv.org/abs/2406.18266',
      date: '2024-06-27',
      type: 'Paper',
      text: 'New pre-print containing more models and evaluations.',
    },
    {
      link: 'https://huggingface.co/collections/OpenLLM-Ro/romistral-6647241bf2cbbe9fd8c2afa4',
      date: '2024-05-17',
      type: 'Fine-Tune Release',
      text: 'New fine-tuned based on Mistral: OpenLLM-Ro/romistral',
    },
    {
      link: 'htps://huggingface.co/collections/OpenLLM-Ro/rollama2-664722bbf536ec14701ec81d',
      date: '2024-05-14',
      type: 'Fine-Tune Release',
      text: 'New fine-tuned based on Llama2: OpenLLM-Ro/rollama2',
    },
    {
      link: '/comunicat.pdf',
      date: '2024-05-14',
      type: 'Press',
      text: 'Press release statement regarding the launch of OpenLLM-Ro.',
    },
  ];

  const typeEmojis: Record<(typeof entries)[number]['type'], string> = {
    Paper: '📝',
    Release: '🎉',
    'Fine-Tune Release': '🤖',
    Press: '📰',
    Code: '💻',
    Event: '🗓',
  };

  return (
    <Stack padding={['8vh 10vw']} gap={[10]}>
      {Object.entries(
        entries
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .reduce<Record<string, typeof entries>>((acc, entry) => {
            const date = new Date(entry.date);
            const year = date.getFullYear();
            const month = date.toLocaleString('default', { month: 'long' });
            const key = `${year}-${month}`;

            return {
              ...acc,
              [key]: [...((acc[key] as typeof entries) || []), entry],
            };
          }, {})
      ).map(([monthWithYear, news]) => {
        const [year, month] = monthWithYear.split('-');
        return (
          <Stack key={monthWithYear} gap={2}>
            <Text as={'kbd'} fontWeight={'bold'}>
              {month} {year}
            </Text>
            <Stack>
              {news.map(({ link, text, date, type }) => (
                <NewsEntry key={link} link={link}>
                  <Text fontWeight={'bold'} as={'span'}>
                    {typeEmojis[type]} {type}
                  </Text>
                  : {text} ({new Date(date).toLocaleDateString('ro')})
                </NewsEntry>
              ))}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
