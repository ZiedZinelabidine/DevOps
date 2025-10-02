import { createSlice } from "@reduxjs/toolkit";
import {
  getProxyFromLocalStorage,
  getProxyTypeFromLocalStorage,
  saveProxyToLocalStorage,
  saveProxyTypeToLocalStorage,
} from "../../../core/helpers/storage";

export const proxySlice = createSlice({
  name: "proxySlice",
  initialState: {
    proxy: getProxyFromLocalStorage() || false,
    typeProxy: getProxyTypeFromLocalStorage() || "",
  },
  reducers: {
    addProxy: (state, action) => {
      const { proxy, typeProxy } = action.payload;
      state.proxy = proxy;
      state.typeProxy = typeProxy;
      saveProxyToLocalStorage(proxy);
      saveProxyTypeToLocalStorage(typeProxy);
    },
  },
});
export default proxySlice.reducer;
export const { addProxy } = proxySlice.actions;
