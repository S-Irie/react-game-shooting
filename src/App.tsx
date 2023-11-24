import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pases/Home/Home';
import Header from './constants/Header/Header';
import Play from './pases/Play/Play';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
