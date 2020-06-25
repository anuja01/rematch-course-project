# Starter project for "State management with Rematch" course

You can find complete video course on [Youtube](https://www.youtube.com/playlist?list=PLNG2YBDrzK-w1VSeDpMxdGwkb4L6hDy8Z)

# Advantages of Rematch   
1. Removes unwanted redux boilerplate codes (no need of action types, action creators, reducers with switch)   
2. Out of the box support for side effects (not necessary to use saga, thunk)   
   
Good read: https://diophant.com/blog/making-redux-more-accessible-with-rematch-framework/   

# Starter project for "State management with Rematch" course

You can find complete video course on [Youtube](https://www.youtube.com/playlist?list=PLNG2YBDrzK-w1VSeDpMxdGwkb4L6hDy8Z)

# Advantages of Rematch   
1. Removes unwanted redux boilerplate codes (no need of action types, action creators, reducers with switch)   
2. Out of the box support for side effects (not necessary to use saga, thunk)   
   
Good read: https://diophant.com/blog/making-redux-more-accessible-with-rematch-framework/   

## Store.  
Store is a Javascript object which holds applications global state.   
In Rematch each state is controlled by a Model. Models will be places inside the store.   

# Configuring the store.  
```
import { initl, RematchRootState, RematchDispatch} from "@rematch/core";
/**
These are inbuild types for state and dispatch
RematchRootState
RematchDispatch
*/
const models = {};

// init method accepts a configuration object
const store = init({
  models
});

// then configure the store with <Provider store={store}> from 'react-redux' 
export default store;
```

# Models   
Model is a Rematch abstraction that hides smaller details of `redux` (Action types, Action creators, Reducers with switch statement)    
Instead of matching with string based names (Action types), rematch uses <b>named reducer function</b> for every action    
It's good practice to have separate files for models as they can become quiet big   

example:   
```
// this model goes to Rematch init({})
const model = {
  state: [] as State, // initial state
  reducers: { // named reducer functions, call them by name instead of by Action type which redux does
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
  }
};
```

Then connect this model to a component and use model values (connected components)

### Check how types are defined for state and dispatch. !!!Important