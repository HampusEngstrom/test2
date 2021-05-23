import React, { useEffect, useState } from 'react';
import { fetchData } from './api';
import Spinner from './assets/loading_spinner.gif';
import './App.css';
import Colleagues from './Colleagues';

const LoadingSpinner = () => (
  <img src={Spinner} alt="loading spinner" />
);

const Error = () => (
  <div data-testid="error">Something went wrong!</div>
);

function App() {
  const [colleagues, setColleagues] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchColleagues() {
      try {
        const data = await fetchData();
        setColleagues(data);
        setIsFetching(false);
      } catch (error) {
        setColleagues(null);
        setIsFetching(false);
      }
    }
    fetchColleagues();
  }, []);

  return (
    <div className="App">
      {isFetching && <LoadingSpinner />}
      {!isFetching && colleagues && <Colleagues items={colleagues} />}
      {!isFetching && !colleagues && <Error />}
    </div>
  );
}

export default App;
