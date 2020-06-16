const initialState = {
  posts: [
    {
      title: "title",
      description: "description",
      postedBy: "Ilnkin",
      category: {
        categoryName: "coding",
      },
    },
    {
      title: "title2",
      description: "description2",
      postedBy: "Ilkin",
      category: {
        categoryName: " coding",
      },
    },
    {
      title: "title3",
      description: "description3",
      postedBy: "jeric",
      category: {
        categoryName: " coding",
      },
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
