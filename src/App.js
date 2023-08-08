
import './App.css';
import AppSearchBar from './AppSearchBar.js';
import AppSearchResultsSummary from './AppSearchResultSummary.js';
import AppMapSearchResult from './AppMapSearchResult.js';

export default function App() {
  return (
    <div>
      <header>
        <h2>IP Address Tracker</h2>
        <AppSearchBar />
      </header>
      <main>
        <AppSearchResultsSummary />
        <AppMapSearchResult />
      </main>
    </div>
  );
}

