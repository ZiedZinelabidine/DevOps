import AfterSignup from "components/AfterSignup/AfterSignup";
import {
  getIsloggedFromLocalStorage,
  getTokenFromLocalStorage,
  getTypeFromLocalStorage,
} from "../../core/helpers/storage";
import NotFound from "../../pages/404/notFound";
import { jwtDecode } from "jwt-decode";

function ControllerAccounting() {
  const type = getTypeFromLocalStorage();
  const isLoggedIn = getIsloggedFromLocalStorage();
  const token = getTokenFromLocalStorage();
  const entrepriseToken = token ? jwtDecode(token) : null;
  const status = entrepriseToken ? entrepriseToken.status : null;

    if ((isLoggedIn && type !== "ACCOUNTING") || !isLoggedIn) {
      return <NotFound />;
    }
    if (status && status !== "ACTIVE") return <AfterSignup />;

}
export default ControllerAccounting;
