import { useSelector, useDispatch } from 'react-redux';
import { logout as logoutAction } from '@/store/authSlice';
import { logout } from '@/utils/kakaoAuth';

export function useAuth() {
  const dispatch = useDispatch();
  const { user, isLoggedIn, isLoading, error } = useSelector(state => state.auth);

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(logoutAction());
    } catch (error) {
      console.error('로그아웃 실패:', error);
      dispatch(logoutAction());
    }
  };

  return {
    user,
    isLoggedIn,
    isLoading,
    error,
    logout: handleLogout,
  };
}
