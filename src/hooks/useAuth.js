// hooks/useAuth.js
import { useSelector, useDispatch } from 'react-redux';
import { checkAuthRequest, logoutRequest, setLoginUser } from '@/store/authSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const { user, isLoggedIn, isLoading, error } = useSelector(state => state.auth);

  // 인증 상태 확인 - Redux 규칙에 따른 네이밍
  const checkAuth = () => {
    dispatch(checkAuthRequest());
  };

  // 로그아웃 - Redux 규칙에 따른 네이밍
  const logout = () => {
    dispatch(logoutRequest());
  };

  // 로그인 - Redux 규칙에 따른 네이밍
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
