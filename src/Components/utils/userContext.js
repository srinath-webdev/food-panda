import { createContext } from "react";
//useContext for props drilling solution . it can be used in every in our code.
const UserContext = createContext({
    ABOUT : "ABOUT"
})
export default UserContext;