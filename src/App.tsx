import './App.css';
import PostTweetComponent from './Components/PostTweetComponent';
import ProfileFeedComponent from './Components/ProfileFeedComponent';
import { PostsProvider } from './context/postsContext';
import { ProfileProvider } from './context/profileContext';

function App() {
  return (
    <div className="app">
      <ProfileProvider>
        <PostsProvider>
          <PostTweetComponent />
          <ProfileFeedComponent/>
        </PostsProvider>
      </ProfileProvider>
    </div>
  );
}

export default App;
