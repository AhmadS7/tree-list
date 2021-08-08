import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface TrInfo {
  plant: {
    name: string;
    url: string;
    more?: string;
    height: number;
    location?: string;
    info: string;
  }[];
}

function App() {
  const [plant, setPlant] = useState<TrInfo['plant']>([
    {
      name: 'Dawn redwood',
      url: 'https://www.treenames.net/ti/metasequoia/Dawn_Redwood_Tree_Metasequoia_glyptostroboides768.jpg',
      more: 'https://www.treenames.net/ti/metasequoia/Dawn_Redwood_Tree_Metasequoia_glyptostroboides.html',
      height: 82,
      location: 'TAmerican Mid-West',
      info: 'The Dawn redwood Tree, Metasequoia glyptostroboides Species, is the only extant (not extinct) species left in the genus Metasequoia. This tree is a deciduous coniferous species, and is classed as a softwood.',
    },
  ]);

  return (
    <div className="App">
      <h1>All The Trees Ever Existed</h1>
      <List plant={plant} />
      <AddToList plant={plant} setPlant={setPlant} />
    </div>
  );
}

export default App;
