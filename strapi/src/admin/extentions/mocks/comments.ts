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
    },
    {
        id: "string",
        user: { name: "Junho" },
        content: "JunhoJunhoJunhoJunhoJunhoJunho",
        createdAt: "123123",
        post: undefined
    },
    {
        id: "string",
        user: { name: "Junho" },
        content: "JunhoJunhoJunhoJunhoJunhoJunho",
        createdAt: "123123",
        post: undefined
    },
    {
        id: "string",
        user: { name: "Junho" },
        content: "JunhoJunhoJunhoJunhoJunhoJunho",
        createdAt: "123123",
        post: undefined
    },
    {
        id: "string",
        user: { name: "BRENHO" },
        content: "BRENHO",
        createdAt: "2233",
        post: undefined
    },
    {
        id: "string",
        user: { name: "BRENHO" },
        content: "BRENHOBRENHOBRENHOBRENHO",
        createdAt: "2233",
        post: undefined
    },
    {
        id: "string",
        user: { name: "Junho" },
        content: "JunhoJunhoJunhoJunhoJunhoJunho",
        createdAt: "123123",
        post: undefined
    },
    {
        id: "string",
        user: { name: "GUIMA" },
        content: "GUIMAGUIMAGUIMAGUIMAGUIMAGUIMA",
        createdAt: "4234324",
        post: undefined
    },
    {
        id: "string",
        user: { name: "Junho" },
        content: "JunhoJunhoJunhoJunhoJunhoJunho",
        createdAt: "123123",
        post: undefined
    },
    {
        id: "string",
        user: { name: "GUIMA" },
        content: "GUIMAGUIMAGUIMAGUIMAGUIMAGUIMA",
        createdAt: "123123132323",
        post: undefined
    }
];

export default CommentsMOCK;