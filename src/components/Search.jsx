import { useState } from 'react';

const Search = ({ getSearchContent }) => {
  const [text, setText] = useState('');
  console.log(text);
  const onChange = (searchContent) => {
    setText(searchContent);
    getSearchContent(searchContent);
  };
  return (
    <section className="search">
      <form
        action="
      ">
        <input
          type="text"
          value={text}
          className="form-control"
          placeholder="Search characters"
          autoFocus
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
