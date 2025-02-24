type Comment = {
    id: string;
    content: string;
    user: { name: string};
    post?: any;
    createdAt: string;
  }

const CommentsMOCK: Comment[] = [
    {
      id: "string",
      user: { name: "Junho" },
      content: "JunhoJunhoJunhoJunhoJunhoJunho",
      createdAt: "123123",
      post: undefined
    }
];

export default CommentsMOCK;