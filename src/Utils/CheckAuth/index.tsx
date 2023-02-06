import {
  LocalStorageMethodEnum,
  localStorageService,
} from 'Utils/local-storage.service';

const checkAuth = (): boolean => {
  const token = localStorageService(LocalStorageMethodEnum.GET, {
    key: 'auth',
  });

  return !!token;
};

export default checkAuth;
