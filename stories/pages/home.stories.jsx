import Home from "../../pages";

export default {
  title: "Pages/Home",
  components: Home,
};

export const HomePage = (args) => <Home {...args}/>;
HomePage.args = { title: "Home Page" }
