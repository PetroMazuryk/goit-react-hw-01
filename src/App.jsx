import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./components/Layout/Layout";

import { Profile } from "./components/Profile/Profile";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import { Section } from "./components/Section/Section";

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

// import "./App.css";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Section title="Profile">
        <Profile user={userData} />
      </Section>

      <Section title="Friends List">
        <FriendList friends={friends} />
      </Section>

      <Section title="Transaction History">
        <TransactionHistory items={transactions} />
      </Section>
    </Layout>
  );
}

export default App;
