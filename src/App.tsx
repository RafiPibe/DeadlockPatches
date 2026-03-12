import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PatchNotesPage from './pages/PatchNotesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatchNotesPage />} />
        <Route path="/patches/:date" element={<PatchNotesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
