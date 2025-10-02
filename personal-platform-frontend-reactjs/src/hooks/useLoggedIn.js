import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAccessToken, parseJwt } from "../core/helpers/storage";
import { useLogoutMutation } from "../redux/api/auth/authApi";
import { useAppSelector } from "../redux/hooks";
import useDebounce from "./useDebounce";

export default function useLoggedIn() {
  const [logout] = useLogoutMutation();
  const location = useLocation();
  const debouncedLocation = useDebounce(location, 1000);
  useEffect(() => {
    const token = getAccessToken();
    if ((!token || !token.length) && isLoggedIn) {
      // TODO restore this line once the logout api is implemented
      // logout(null);
    } else if (token && token.length) {
      const decodedJwt = parseJwt(token);
      if (decodedJwt.exp && decodedJwt.exp * 1000 < Date.now()) {
        console.log("logout because token expired");
        // TODO restore this line once the logout api is implemented
        //logout(null);
      }
    } else {
      console.log("no token found");
      return;
    }
  }, [debouncedLocation]);

  const isLoggedIn = useAppSelector((state) => {
    return state.user.isLoggedIn;
  });
  return isLoggedIn;
}
