import LoginContextProvider from "Context/LoginContext";
import AppRouter from "Routers/AppRouter";

function App() {
  return (
    <LoginContextProvider>
      <AppRouter />
    </LoginContextProvider>
  );
}

export default App;
