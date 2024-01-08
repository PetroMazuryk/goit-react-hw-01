import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./components/Layout/Layout";

import { Profile } from "./components/Profile/Profile";
import { RecipeList } from "./components/RecipeList/RecipeList";

import userData from "./data/userData.json";
import friends from "./data/friends.json";

// import "./App.css";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Profile user={userData} />
      <RecipeList items={friends} />
    </Layout>
  );
}

export default App;
