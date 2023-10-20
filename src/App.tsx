import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main';
import { getArticlesQuery } from './hooks/getArticlesQuery';
import { useArticleIdInUrl } from './hooks/useArticleIdInUrl';
import { Menubar } from './components/Menubar';
import { Header } from './components/Header';
import { Footer } from './components/footer/Footer';

function App() {
  const navigate = useNavigate();
  const { data } = useQuery('articles', getArticlesQuery);
  const urlId = useArticleIdInUrl();

  useEffect(() => {
    if (data?.length && urlId === undefined) {
      navigate(`/${data[0].id}`);
    }
  }, [data, navigate, urlId]);

  return (
    <div className="App">
      <div className="CenterContainer">
        <Header></Header>
        <Menubar></Menubar>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
