import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from './transactions/transactions-reducer';

 const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
})

export {store}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch