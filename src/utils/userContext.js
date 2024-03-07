import { createContext } from "react";

const userContext = createContext({
  user: {
    username: "dummy",
    email: "dummyt@gmail.com",
  },
});

export default userContext;
