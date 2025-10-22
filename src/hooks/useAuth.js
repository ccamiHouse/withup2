// hooks/useAuth.js
import { useSelector, useDispatch } from 'react-redux';
import { logoutAsync, setLoginUser } from '@/store/authSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const { user, isLoggedIn, isLoading, error } = useSelector(state => state.auth);

  // 로그아웃 - 비동기 API 호출
  const logout = () => {
    dispatch(logoutAsync());
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
    logout,
    login,
  };
}
