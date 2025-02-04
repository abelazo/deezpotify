import Dashboard from "./dashboard/Dashboard.tsx";
import Login from "./login/Login.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";


const isLoggedIn = true;

function App() {
  return (
    <>
      <Header />
        {isLoggedIn ? (
            <Dashboard/>
        ) : (
            <Login/>
        )}
      <Footer />
    </>
  )
}

export default App
