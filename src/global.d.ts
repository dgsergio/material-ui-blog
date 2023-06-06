type Categories =
  | 'Review'
  | 'Photoshop'
  | 'Technology'
  | 'Design'
  | 'A.I.'
  | 'Code';

type PostTypeAPI = {
  id: number;
  title: string;
  body: string;
  tags: Categories[];
};

type PostType = {
  id: string;
  title: string;
  body: string;
  img: string;
  categories: Categories[];
};

type PostsState = {
  posts: PostType[];
  searchedPosts: PostType[] | undefined;
};
