export const HELPER_FUNCTIONS = {
  getToken: () => {
    const token = JSON.parse(localStorage.getItem('tokenFlow'));
    const bearer = `Bearer ${token}`;
    return bearer;
  },
  getUserPreference: (section) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { preference } = userInfo;
    return preference[section];
  }
}