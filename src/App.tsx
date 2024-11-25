import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Sub from './views/sub';
import Main from './views/main';

import '@/assets/styles/index.scss';
import { useEffect } from 'react';
const App = () => {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/anchor/*" element={<Sub />}></Route>
        <Route path="/manager/*" element={<Sub />}></Route>
      </Routes>
    </div>
  );
};

export default App;
