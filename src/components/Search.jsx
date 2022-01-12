import { useState } from 'react';
import Button from './Button';

const Search = ({ getSearchContent, clearQuery }) => {
  const [text, setText] = useState('');

  const onChange = (searchContent) => {
    setText(searchContent);
    getSearchContent(searchContent);
  };

  const clear = clearQuery;
  const onClear = () => {
    clear();
    setText('');
  };

  const switchButton = () => {
    if (text.length === 0) {
      return (
        <Button onClick={onClear} disabled>
          Clear search
        </Button>
      );
    } else {
      return <Button onClick={onClear}>Clear sreach</Button>;
    }
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          value={text}
          className="form-control"
          placeholder="Search characters"
          autoFocus
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
      {switchButton()}
    </section>
  );
};

export default Search;
