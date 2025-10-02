import { createSlice } from "@reduxjs/toolkit";
import {
  getAccessToken,
  getIsloggedFromLocalStorage,
  getTypeFromLocalStorage,
  getUserFromLocalStorage,
  saveLoggedIn,
  saveTokenToLocalStorage,
  saveTypeToLocalStorage,
  saveUserToLocalStorage,
} from "../../../core/helpers/storage";

import { jwtDecode } from "jwt-decode";
import { authApi } from "../../api/auth/authApi";

const INITIAL_STATE = {
  user: null,
  token: null,
  isLoggedIn: false,
  type: null,
};

const initialState = {
  user: getUserFromLocalStorage(),
  token: await getAccessToken(),
  type: getTypeFromLocalStorage(),
  isLoggedIn: getIsloggedFromLocalStorage(),
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      const decodeToken = token ? jwtDecode(token) : null;
      let isloggedin = false;
      if (decodeToken.exp && decodeToken.exp * 1000 > Date.now()) {
        isloggedin = true;
      }
      state.user = user;
      state.token = token;
      state.isLoggedIn = isloggedin;
      state.type = decodeToken.role;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        const decodeToken = token ? jwtDecode(token) : null;
        let isloggedin = false;
        if (decodeToken.exp && decodeToken.exp * 1000 > Date.now()) {
          isloggedin = true;
        }
        state.user = user;
        state.token = token;
        state.isLoggedIn = isloggedin;
        state.type = decodeToken.role;
        saveUserToLocalStorage(user);
        saveTokenToLocalStorage(token);
        saveTypeToLocalStorage(token);
        saveLoggedIn(isloggedin);
      }
    );
    builder.addMatcher(
      authApi.endpoints.loginAccounting.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        const decodeToken = token ? jwtDecode(token) : null;
        let isloggedin = false;
        if (decodeToken.exp && decodeToken.exp * 1000 > Date.now()) {
          isloggedin = true;
        }
        state.user = user;
        state.token = token;
        state.isLoggedIn = isloggedin;
        state.type = decodeToken.role;
        saveUserToLocalStorage(user);
        saveTokenToLocalStorage(token);
        saveTypeToLocalStorage(token);
        saveLoggedIn(isloggedin);
      }
    );
    builder.addMatcher(
      authApi.endpoints.signupEntreprise.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        const decodeToken = token ? jwtDecode(token) : null;
        let isloggedin = false;
        if (decodeToken.exp && decodeToken.exp * 1000 > Date.now()) {
          isloggedin = true;
        }
        state.user = user;
        state.token = token;
        state.isLoggedIn = isloggedin;
        state.type = decodeToken.role;
        saveUserToLocalStorage(user);
        saveTokenToLocalStorage(token);
        saveTypeToLocalStorage(token);
        saveLoggedIn(isloggedin);
      }
    );
    builder.addMatcher(
      authApi.endpoints.signupCandidat.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        const decodeToken = token ? jwtDecode(token) : null;
        let isloggedin = false;
        if (decodeToken.exp && decodeToken.exp * 1000 > Date.now()) {
          isloggedin = true;
        }
        state.user = user;
        state.token = token;
        state.isLoggedIn = isloggedin;
        state.type = decodeToken.role;
        saveUserToLocalStorage(user);
        saveTokenToLocalStorage(token);
        saveTypeToLocalStorage(token);
        saveLoggedIn(isloggedin);
      }
    );
    builder.addMatcher(
      authApi.endpoints.signupRecruiter.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        const decodeToken = token ? jwtDecode(token) : null;
        let isloggedin = false;
        if (decodeToken.exp && decodeToken.exp * 1000 > Date.now()) {
          isloggedin = true;
        }
        state.user = user;
        state.token = token;
        state.isLoggedIn = isloggedin;
        state.type = decodeToken.role;
        saveUserToLocalStorage(user);
        saveTokenToLocalStorage(token);
        saveTypeToLocalStorage(token);
        saveLoggedIn(isloggedin);
      }
    );
    builder.addMatcher(
      authApi.endpoints.signupAccounting.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        const decodeToken = token ? jwtDecode(token) : null;
        let isloggedin = false;
        if (decodeToken.exp && decodeToken.exp * 1000 > Date.now()) {
          isloggedin = true;
        }
        state.user = user;
        state.token = token;
        state.isLoggedIn = isloggedin;
        state.type = decodeToken.role;
        saveUserToLocalStorage(user);
        saveTokenToLocalStorage(token);
        saveTypeToLocalStorage(token);
        saveLoggedIn(isloggedin);
      }
    );
    builder.addMatcher(authApi.endpoints.login.matchPending, () => {
      // removeTokenFromLocalStorage();
      // removeUserFromLocalStorage();
      // removeResourcesFromLocalStorage();
      // removeStreamTokenFromLocalStorage();
      // removeStreamIsloggedInFromLocalStorage();
      return INITIAL_STATE;
    });
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
