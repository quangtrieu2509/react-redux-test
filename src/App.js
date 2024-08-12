import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAPIPosts, getPosts } from './redux/postSlice';
import { useEffect } from 'react';
import PostForm from './components/PostForm';

function App() {
  const posts = useSelector(getPosts);
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(getAPIPosts())
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <div className='post-wrapper'>
          <PostForm/>
          {
            posts.map(e => (
              <div key={e.id} className='post'>
                <div className='user'>
                  @{e.userId}
                </div>
                <div className='title'>
                  {e.title}
                </div>
                <div className='body'>
                  {e.body}
                </div>
              </div>
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
