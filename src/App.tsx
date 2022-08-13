import './App.css';
import PostTweetComponent from './Components/PostTweetComponent';
import PostsComponent from './Components/PostsComponent';
import { PostsProvider } from './context/postsContext'

function App() {
  return (
    <div className="app">
      <PostsProvider>
        <PostTweetComponent />
        <PostsComponent/>
      </PostsProvider>
    </div>
  );
}

export default App;
