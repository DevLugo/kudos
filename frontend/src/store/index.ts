import { Action, combineReducers, configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import authSlice from "./authSlice";
import asignedKudosListSlice from "./asignedKudosListSlice";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { useDispatch } from 'react-redux';
import { resetToken } from '../utils';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['authSlice', 'borrowerSlice', 'borrowerListSlice'],
    stateReconciler: autoMergeLevel2,
};

const appReducer = combineReducers({
    authSlice,
    asignedKudosListSlice,
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'RESET_ALL') {
      // for all keys defined in the persistConfig(s)
      resetToken();
      storage.removeItem('persist:root');

      state = undefined;
    }
    return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
export let persistor = persistStore(store);
export type RootState = ReturnType<typeof appReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export default store;