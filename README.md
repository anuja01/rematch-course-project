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
import { init } from "@rematch/core";

const models = {};

// init method accepts a configuration object
const store = init({
  models
});

// then configure the store with <Provider store={store}> from 'react-redux' 
export default store;
```

