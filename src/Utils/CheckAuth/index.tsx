const checkAuth = () => {
  const authValue = localStorage.getItem('token');
  return authValue == 'qwe222';
};

export default checkAuth;
