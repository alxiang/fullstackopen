import React from 'react';

const Filter = ({search, setSearch}) => {

  const handleSearch = (event) => {
    // console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <form>
      <div>
        filter shown with <input value={search} onChange={handleSearch}/>
      </div>
    </form>
  );
};

export default Filter;