import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ArticleView } from './components/ArticleView';
import { BlogView } from './components/BlogView';
import { ArchivesView } from './components/ArchivesView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              path="/article/:id"
              element={<ArticleView />}
            />
            <Route
              path="/blog"
              element={<BlogView></BlogView>}
            />
            <Route
              path="/archives"
              element={<ArchivesView />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
