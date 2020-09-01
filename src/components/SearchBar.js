import React, { useState } from 'react';
// AIzaSyC9QVBcLijogVwREev3DL5CXjZU16odAes
const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form action='' className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label htmlFor=''>Video Search</label>
          <input value={term} onChange={onChange} type='text' />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
