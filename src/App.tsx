import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

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
      <div className="head">
        <h1>Trees</h1>
      </div>
      <div>
        <h2>Trees</h2>
        {plant}
      </div>
    </ChakraProvider>
  );
}

export default App;
