import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Router from './router/Router';

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        containerStyle={{
          top: 80,
          zIndex: 100000,
        }}
      />

      <Navbar />
      <Router />
    </>
  );
}

export default App;
