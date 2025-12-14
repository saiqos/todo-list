import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import CompletedTasks from './pages/CompletedTasks.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/completed" element={<CompletedTasks />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
