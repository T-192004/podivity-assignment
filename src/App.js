import BlogPostList from './components/BlogPostList';
import {AppContainer, NavBar, NavHeading, HomeBtn} from './styles/GlobalStyle';
import AddEditPost from './components/AddEditPost';
import { Routes, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BlogPost from './components/BlogPost';

const App = () => (
    <AppContainer>
      <NavBar>
        <NavHeading>Blogging PlatForm</NavHeading>
      </NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/add-edit-post" element={<AddEditPost />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </AppContainer>
);


export default App;