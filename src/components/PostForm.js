import { useDispatch } from "react-redux";
import "./postForm.css"
import { addNewPost } from "../redux/postSlice";

export default function PostForm() {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      userId: event.target.userId.value,
      title: event.target.title.value,
      body: event.target.body.value,
    }
    dispatch(addNewPost(post))
    
    event.target.reset();
  }
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input name="userId" type="text" placeholder="Enter your id" required/>
      <input name="title" type="text" placeholder="Enter title" required/>
      <textarea name="body" placeholder="Write your post" required/>
      <button type="submit">
        Post
      </button>
    </form>
  )
}