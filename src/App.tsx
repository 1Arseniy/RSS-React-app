import { HomeView, AboutView, NotFoundView } from '@/views';

import { Menu } from './components';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<HomeView />}></Route>
            <Route path="about" element={<AboutView />}></Route>
          </Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
