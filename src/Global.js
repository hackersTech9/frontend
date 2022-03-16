const BASE = (() => {
  switch (process.env.REACT_APP_ENV){
    case 'local':
      return 'http://localhost:8000'
    case 'development':
      return 'https://tshackathon.herokuapp.com'
    default:
      return 'https://tshackathon.herokuapp.com'
  }
})();

let Global = {
  login: `${BASE}/login/`,
  signup: `${BASE}/signup/`,
}

export default Global;