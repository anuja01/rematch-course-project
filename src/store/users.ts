import { RematchDispatch } from "@rematch/core";
import { User } from "../common/types";
import { loadUsers } from "../common/api";

type State = ReadonlyArray<User>;

const model = {
  state: [] as State, // initial state
  reducers: {
    // named reducer functions, call them by name instead of by Action type which redux does
    loaded: (state: State, payload: ReadonlyArray<User>) => payload,
    followToggled: (state: State, payload: User) =>
      state.map(user => {
        if (user.id === payload.id) {
          return {
            ...user,
            isFollowing: !user.isFollowing
          };
        }
        return user;
      })
  },
  effects: (dispatch: RematchDispatch) => ({
    async load() {
      const users = await loadUsers();
      dispatch.users.loaded(users);
    }
  })
};

export default model;
