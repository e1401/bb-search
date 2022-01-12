import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Button';

function RandomQuote() {
  const [quote, setQuote] = useState({
    content: '',
    author: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [another, setAnother] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      const results = await axios(`https://www.breakingbadapi.com/api/quote/random`);

      setQuote({
        content: results.data[0].quote,
        author: results.data[0].author
      });
      setIsLoading(false);
    };

    getQuote();
  }, [another]);

  const displayContent = isLoading ? (
    <Spinner />
  ) : (
    <section>
      <h1>Quote</h1>
      <br />
      <p>{quote.content}</p>
      <br />

      <p>
        {' '}
        <strong>{quote.author}</strong>
      </p>
    </section>
  );

  const handleClick = () => {
    setAnother(!another);
  };

  return (
    <div className="container">
      <Header />
      {displayContent}

      <div style={{ marginTop: '3vh' }}>
        <Button onClick={handleClick}>Another</Button>
      </div>
    </div>
  );
}

export default RandomQuote;
