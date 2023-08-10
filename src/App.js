
import './App.css';
import API_KEY from './Config.js'
import AppSearchBar from './AppSearchBar.js';
import AppSearchResultsSummary from './AppSearchResultSummary.js';
import AppMapSearchResult from './AppMapSearchResult.js';

import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState(false);
  const [ipaddress, setIpAddress] = useState('1.1.1.1')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ipaddress}`)
      const response_data = await response.json();
      setData(response_data);
    };
    fetchData();
  }, [ipaddress]);

  return (
    <div>
      <header>
        <h1>IP Address Tracker</h1>
        <AppSearchBar setIpAddress={setIpAddress} />
      </header>
      <main className="main_container">
      {data && (
        <>
          <AppSearchResultsSummary data_query={data} />

          <AppMapSearchResult data_query_result={data} />
         </>
         )}
      </main>
    </div>
  );
}

