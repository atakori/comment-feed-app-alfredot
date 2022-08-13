import './App.css';
import PostTweetComponent from './Components/PostTweetComponent';
import PostsComponent from './Components/PostsComponent';
import { PostsProvider } from './context/postsContext';
import { ProfileProvider } from './context/profileContext';

function App() {
  return (
    <div className="app">
      <ProfileProvider>
        <PostsProvider>
          <PostTweetComponent />
          <PostsComponent/>
        </PostsProvider>
      </ProfileProvider>
    </div>
  );
}

export default App;
