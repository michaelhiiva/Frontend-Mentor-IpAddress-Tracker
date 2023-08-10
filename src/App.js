
import './App.css';
import AppSearchBar from './AppSearchBar.js';
import AppSearchResultsSummary from './AppSearchResultSummary.js';
import AppMapSearchResult from './AppMapSearchResult.js';

import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState();
  const [ipaddress, setIpAddress] = useState('1.1.1.1')

  useEffect(() => {
    fetch(`https://ip-api.com/json/${ipaddress}`)
      .then((response) => response.json())
      .then((response_data) => setData(response_data))
      .catch(error => console.log(error));
  }, [data, ipaddress]);

  return (
    <div>
      <header>
        <h1>IP Address Tracker</h1>
        <AppSearchBar setIpAddress={setIpAddress}/>
      </header>
      <main className="main_container">
        <AppSearchResultsSummary data={data} />
        <AppMapSearchResult data={data} />
      </main>
    </div>
  );
}

