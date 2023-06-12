type Categories =
  | 'Review'
  | 'Photoshop'
  | 'Technology'
  | 'Design'
  | 'A.I.'
  | 'Code';

type PostTypeAPI = {
  [key: string]: {
    title: string;
    body: string;
    img: string;
    author: string;
    date: string;
    categories: Categories[];
  };
};

type PostType = {
  id: string;
  title: string;
  body: string;
  img: string;
  author: string;
  date: string;
  categories: Categories[];
};

type Status = {
  loading: boolean;
  error: string;
};

type PostsState = {
  posts: PostType[];
  searchedPosts: PostType[] | undefined;
  status: Status;
};

type UserType = {
  id: string;
  name: string | null;
  email: string | null;
  imgUrl: string | null;
};

type AuthState = {
  user: UserType | undefined;
  status: Status;
};

type GoogleApi = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
};
