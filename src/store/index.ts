import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import DUMMMY from '../mocks/posts.json';

const transformData = (data: PostTypeAPI[]): PostType[] => {
  let newData: PostType[] = [];
  for (const item of data) {
    newData.push({
      id: 'p' + item.id,
      title: item.title,
      body: item.body,
      categories: [...item.tags],
      img: 'img/no-image.jpg',
    });
  }
  return newData;
};

const initialState: PostsState = {
  posts: transformData(DUMMMY.posts),
};

const postsSlice = createSlice({
  name: 'postsState',
  initialState,
  reducers: {
    populate(state, action: PayloadAction<PostType[]>) {
      state.posts = action.payload;
    },
    addPost(state, action: PayloadAction<PostType>) {
      state.posts.push(action.payload);
    },
  },
});

export const { populate, addPost } = postsSlice.actions;

export const store = configureStore({
  reducer: postsSlice.reducer,
});
