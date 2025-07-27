import { HomeView, AboutView, NotFoundView, Modal } from '@/views';

import { Menu } from './components';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="/" element={<HomeView />}>
              <Route path="details/:id" element={<Modal />} />
            </Route>
            <Route path="about" element={<AboutView />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
