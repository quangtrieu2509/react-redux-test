import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: []
  },
  reducers: {
    addNewPost: (state, action) => {
      const newPost = {
        ...action.payload,
        id: state.posts.length + 1
      }
      state.posts = [newPost, ...state.posts]
    },
    setPosts: (state, action) => {
      state.posts = action.payload
    }
  },
})

export const { addNewPost, setPosts } = postSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getAPIPosts = () => async (dispatch) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // console.log(json)
    dispatch(setPosts(json))
  } catch (error) {
    console.error(error.message);
  }
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getPosts = (state) => state.post.posts

export default postSlice.reducer
