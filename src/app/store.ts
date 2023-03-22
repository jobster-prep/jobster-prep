import {configureStore} from '@reduxjs/toolkit';

// these are the default exports from these files, so we can name them whatever we want
import counterReducer from '../features/counter/counterSlice';
import cardContainerReducer from '../features/cardContainer/cardContainerSlice';
import filterSliceReducer from '../features/filters/filterSlice';
import addQuestionReducer from '../features/addQuestion/addQuestionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cardContainer: cardContainerReducer,
    filter: filterSliceReducer,
    addQuestion: addQuestionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
