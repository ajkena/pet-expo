import './App.css';
import Gallery from './pages/Gallery';
import Home from './pages/Home';

function App() {
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <>
      <header>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/gallery/dogs'>Dogs</a>
          </li>
          <li>
            <a href='/gallery/cats'>Cats</a>
          </li>
          <li>
            <a href='/gallery/birds'>Birds</a>
          </li>
        </ul>
      </header>
      {pathname === '/' ? <Home /> : <></>}
      {pathname.includes('gallery') ? <Gallery /> : <></>}
    </>
  );
}

export default App;
