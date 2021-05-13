import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, goHome } from '../modules/posts';
import Post from '../components/Post';

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector(
    (state) => state.posts.post[postId] || {}
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!!!</div>;
  if (!data) return null;

  return (
    <>
      <div>
        <button onClick={() => dispatch(goHome())}>go Home</button>
      </div>
      <Post post={data} />
    </>
  );
}

export default PostContainer;
