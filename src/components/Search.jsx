import { useState } from 'react';

const Search = ({ getSearchContent, childToParentProp }) => {
  const [text, setText] = useState('');
  console.log(text);
  const onChange = (searchContent) => {
    setText(searchContent);
    getSearchContent(searchContent);
  };

  const clearSearch = () => {
    setText('');
    // clearSearchContent();
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
      <button className="btn" onClick={childToParentProp}>
        Clear search
      </button>
    </section>
  );
};

export default Search;
