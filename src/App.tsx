import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PatchNotesPage from './pages/PatchNotesPage';
import LoginPage from './pages/LoginPage';
import EditorPage from './pages/EditorPage';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatchNotesPage />} />
        <Route path="/patches/:id" element={<PatchNotesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
