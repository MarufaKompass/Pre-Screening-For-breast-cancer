// import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/common/user/Layout";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div>
     
      <Layout>
        <AppRoutes></AppRoutes>
      </Layout>
    </div>
  );
}

export default App;
