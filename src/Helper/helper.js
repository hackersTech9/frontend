export const HELPER_FUNCTIONS = {
  getToken: () => {
    const token = JSON.parse(localStorage.getItem('tokenFlow'));
    const bearer = `Bearer ${token}`;
    return bearer;
  },
}