import { Outlet, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
        <Route path="/search" element={<CandidateSearch />} />
      </main>
    </>
  );
}

export default App;
