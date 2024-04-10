import { addPost, deletePost, postReducer, profilePageType } from "../redux/post-reducer";
let state: profilePageType;
beforeEach(() => {
  state = {
    postsData: [
      { id: "1", message: "Hi!" },
      { id: "2", message: "My new account" },
    ],
    profile: {
      aboutMe: "",
      contacts: {
        facebook: "",
        website: "",
        vk: "",
        twitter: "",
        instagram: "",
        youtube: "",
        github: "",
        mainLink: "",
      },
      lookingForAJob: false,
      lookingForAJobDescription: "",
      fullName: "",
      userId: 0,
      photos: {
        small: "",
        large: "",
      },
    },
    followingInProgress: [],
    status: "",
  };
});

it("add new post should be added", () => {
  let action = addPost("new");
  const newPost = postReducer(state, action);

  expect(newPost.postsData[2].message).toBe("new");
});

it("after deleting length postsData should be decrement", () => {
  let action = deletePost("1");
  const newPost = postReducer(state, action);

  console.log(newPost.postsData);

  expect(newPost.postsData.length).toBe(1);
  expect(newPost.postsData[0].message).toBe("My new account");
});
