import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';

const App = () => {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(`https://www.breakingbadapi.com/api/characters`);

      setItems(results.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
