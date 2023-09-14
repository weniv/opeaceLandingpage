import { ResizeProvider } from './context/ResizeContext';
import Main from './pages/Main';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  return (
    <>
      <ResizeProvider>
        <GlobalStyle />
        <Main />
      </ResizeProvider>
    </>
  );
}

export default App;
