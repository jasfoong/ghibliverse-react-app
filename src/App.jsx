import './App.scss';
import HomePage from './pages/HomePage'
import CharacterPage from './pages/CharacterPage/CharacterPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        {/* <Route path="/:id" element={<CharacterPage />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
