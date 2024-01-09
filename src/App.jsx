import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./components/Layout/Layout";

import { Profile } from "./components/Profile/Profile";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

// import "./App.css";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Profile user={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
}

export default App;
