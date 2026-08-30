import { ThemeProvider } from '../context/ThemeContext';

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}