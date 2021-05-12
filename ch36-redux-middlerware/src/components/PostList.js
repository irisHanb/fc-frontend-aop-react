function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={posts.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
