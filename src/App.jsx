import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,createBrowserRouter,RouterProvider } from 'react-router-dom'
import {router} from './router';
import { Provider } from 'react-redux';
import initializeStore from './state/store/store';
const route = createBrowserRouter(router)
const App = () => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const getStore = async () => {
      try {
        const data = await initializeStore();
        setStore(data);
      } catch (error) {
        console.error('Error initializing store:', error);
      }
    };

    getStore();
  }, []);


  return (
    <>
      {store ? (
        <Provider store={store}>
          <RouterProvider router={route} />
        </Provider>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default App
