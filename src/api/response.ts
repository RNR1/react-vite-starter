// Declare your server responses here
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Add all responses here to make the axios client aware of them
type Responses = Post[] | void | unknown;

export type { Responses, Post };
export default null;
