import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import List from './components/list';

interface TrInfo {
  plant: {
    name: string;
    url: string;
    height?: number;
    location: string;
    info: string;
  }[];
}

function App() {
  const [plant, setPlant] = useState<TrInfo['plant']>([]);

  return (
    <ChakraProvider>
      <div className="App">
        <h1>All The Trees Ever Existed</h1>
        <List plant={plant} />
      </div>
    </ChakraProvider>
  );
}

export default App;
