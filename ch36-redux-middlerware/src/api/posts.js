const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: '리액트는 안드로메다로',
    body: '열심히 해보자. 해야 는당',
  },
  {
    id: 2,
    title: 'redux-thunk',
    body: 'redux thunk 를 배워서 남주고 redux-saga 를 사용하자',
  },
  {
    id: 3,
    title: 'redux-saga',
    body: 'redux-saga 는 배워서 redux-toolkit과 같이 사용하자.',
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
