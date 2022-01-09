import { useState, useEffect } from 'react';

import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Search';

const App = () => {
  const [items, setItems] = useState(null);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      setItems(results.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query, isLoading]);

  const getSearchQuery = (queryData) => {
    setQuery(queryData);
  };

  const handleGetSearchQuery = (queryData) => {
    getSearchQuery(queryData);
  };

  const childToParentFunction = () => {
    setQuery('');
    setIsLoading(true);
    setItems(items);
  };

  return (
    <div className="container">
      <Header />
      <Search getSearchContent={handleGetSearchQuery} childToParentProp={childToParentFunction} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
