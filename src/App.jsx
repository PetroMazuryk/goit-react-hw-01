import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./components/Layout/Layout";

import { Profile } from "./components/Profile/Profile";
import userData from "./data/userData.json";
// import "./App.css";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Profile user={userData} />
    </Layout>
  );
}

export default App;
