import { useSelector } from 'react-redux';
import { selectAuthToken } from './redux/AuthSlice';

export function getAuthToken() {
  const authToken = useSelector(selectAuthToken);
  return authToken;
}