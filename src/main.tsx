import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';
import TempoProvier from './contexts/TempoProvider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TempoProvier>
      <App />
    </TempoProvier>
  </StrictMode>
);
