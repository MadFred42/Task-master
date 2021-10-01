import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);

    return {
        persistor,
        store
    }
}

export default configureStore;