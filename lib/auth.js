
export function isLogin() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userDetails = {
    isLoggedIn: isLoggedIn,
    name: isLoggedIn ? localStorage.getItem('name') : null,
    phone: isLoggedIn ? localStorage.getItem('phone') : null,
    image: isLoggedIn ? localStorage.getItem('image') : null
  };
  return userDetails;
}
