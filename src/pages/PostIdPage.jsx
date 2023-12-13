import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostDyId, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchСomments, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostDyId(params.id);
    fetchСomments(params.id);
  }, []);

  return (
    <div>
      <h1>Страница поста = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <p>
          {post.id}. {post.title}
        </p>
      )}
      <h1>Комментарии</h1>

      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h5>{comm.email}</h5>
              <p>{comm.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostIdPage;
