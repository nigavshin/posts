import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

function PostItem(props) {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong className="post__strong">{props.post.title}</strong>
        <p className="post__description">{props.post.body}</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
