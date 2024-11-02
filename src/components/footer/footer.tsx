import React from 'react';
import { Text } from '@chakra-ui/react';

export const Footer: React.FC = () => (
  <Text minHeight={'10vh'} padding={'0 5vw'} align={'center'} alignContent={'center'}>
    Copyright @ OpenLLM-Ro {new Date().getFullYear()}
  </Text>
);
