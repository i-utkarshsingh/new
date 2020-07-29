import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentser = createSelector(
  [selectUser],
  (user) => user.curentUser
);
