import { createContext } from "react";
const userContext = createContext({
  user: { name: "dummy", email: "dummy@gmail" },
});
userContext.displayName = "userContext";
export default userContext;
