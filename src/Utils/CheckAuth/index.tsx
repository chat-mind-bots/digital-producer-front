const CheckAuth = () => {
  const authValue = localStorage.getItem('token');
  return authValue == 'qwe222';
};

export default CheckAuth;
