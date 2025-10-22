// hooks/useAuth.js
import { useSelector, useDispatch } from 'react-redux';
import { checkAuthRequest, logoutRequest, setLoginUser } from '@/store/authSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const { user, isLoggedIn, isLoading, error } = useSelector(state => state.auth);

  const checkAuth = () => {
    dispatch(checkAuthRequest());
  };

  const logout = () => {
    dispatch(logoutRequest());
  };

  const login = (userData) => {
    dispatch(setLoginUser(userData));
  };

  return {
    user,
    isLoggedIn,
    isLoading,
    error,
    checkAuth,
    logout,
    login,
  };
}
