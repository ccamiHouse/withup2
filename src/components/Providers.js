"use client";

import { Provider } from 'react-redux';
import { store } from '@/store';
import { AuthInitializer } from './AuthInitializer';

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <AuthInitializer />
      {children}
    </Provider>
  );
}
