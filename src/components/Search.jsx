import { useState } from 'react';

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
      <button className="btn" onClick={onClear}>
        Clear search
      </button>
    </section>
  );
};

export default Search;
