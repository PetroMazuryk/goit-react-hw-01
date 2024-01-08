import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./components/Layout/Layout";

import { Profile } from "./components/Profile/Profile";
import { FriendList } from "./components/FriendList/FriendList";

import userData from "./data/userData.json";
import friends from "./data/friends.json";

// import "./App.css";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Profile user={userData} />
      <FriendList items={friends} />
    </Layout>
  );
}

export default App;
