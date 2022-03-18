const BASE = (() => {
  switch (process.env.REACT_APP_ENV){
    case 'local':
      return 'http://localhost:8080'
    case 'development':
      return 'https://tshackathon.herokuapp.com'
    default:
      return 'https://tshackathon.herokuapp.com'
  }
})();

let Global = {
  base: `${BASE}/`,
  login: `${BASE}/login/`,
  signup: `${BASE}/signup/`,
  changePassword: `${BASE}/users/password`,
}

export default Global;