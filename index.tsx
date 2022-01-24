import React, { useState, ChangeEvent } from 'react';
import { render } from 'react-dom';
import useDebounce from './hooks/useDebounce';

export function App() {
  console.clear();

  const [search, setSearch] = useState<string>('');

  function handleSearch(e: ChangeEvent<HTMLInputElement>): void {
    const v = e?.target.value;
    setSearch(v);

    // API call
    console.log(v);
  }

  const handleDebounceSearch = useDebounce(handleSearch, 2500);

  return (
    <div>
      <input type={'text'} value={search} onChange={handleDebounceSearch} />
    </div>
  );
}

render(<App />, document.getElementById('root'));
