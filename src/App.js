// import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/common/user/Layout";
import AppRoutes from "./AppRoutes";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
     
      <Layout>
        <AppRoutes></AppRoutes>
        <ToastContainer />
      </Layout>
    </div>
  );
}

export default App;
