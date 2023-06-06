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
      img: '/img/no-image.jpg',
    });
  }
  return newData;
};

const initialState: PostsState = {
  posts: transformData(DUMMMY.posts as PostTypeAPI[]),
  searchedPosts: undefined,
};

const postsSlice = createSlice({
  name: 'postsState',
  initialState,
  reducers: {
    populate(state, action: PayloadAction<PostType[]>) {
      state.posts = action.payload;
    },
    addPost(state, action: PayloadAction<PostType>) {
      const postExist = state.posts.find(
        (post) => post.id === action.payload.id
      );
      if (postExist)
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
      else state.posts.push(action.payload);
    },
    delPost(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    searchPosts(state, action: PayloadAction<string>) {
      if (action.payload === '') {
        state.searchedPosts = undefined;
      } else {
        state.searchedPosts = state.posts.filter((post) =>
          post.title.toLowerCase().includes(action.payload)
        );
      }
    },
    resetSearch(state) {
      state.searchedPosts = undefined;
    },
  },
});

export const { populate, addPost, delPost, searchPosts, resetSearch } =
  postsSlice.actions;

export const store = configureStore({
  reducer: postsSlice.reducer,
});
