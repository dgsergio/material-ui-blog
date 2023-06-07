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
    categories: Categories[];
  };
};

type PostType = {
  id: string;
  title: string;
  body: string;
  img: string;
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
