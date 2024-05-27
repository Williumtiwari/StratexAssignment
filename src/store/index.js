import { configureStore } from "@reduxjs/toolkit";

import listSlice from "./list";

const store = configureStore({
  reducer: { favlist: listSlice.reducer },
});

export default store;
