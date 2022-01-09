import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomQuote() {
  const [quote, setQuote] = useState({
    content: '',
    author: ''
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getQuote = async () => {
      const results = await axios(`https://www.breakingbadapi.com/api/quote/random`);

      console.log(results.data[0].quote);
      setQuote({
        content: results.data[0].quote,
        author: results.data[0].author
      });
      setIsLoading(false);
    };

    getQuote();
  }, []);

  console.log(quote.content);

  return (
    <div className="container">
      <Header />
      <section className="">
        <h1>Quote</h1>
        <br />
        <p>{quote.content}</p>
        <br />

        <p>
          {' '}
          <strong>{quote.author}</strong>
        </p>
      </section>
    </div>
  );
}

export default RandomQuote;
