<script>
  import Chatting from "./pages/Chatting.svelte";
  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";
  import MenuBarLocation from "./pages/Menu-bar_location.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Signup from "./pages/Signup.svelte";
  import Write from "./pages/Write.svelte";
  import Router from "svelte-spa-router";
  import "./css/style.css";

  const routes = {
    //해당경로에 들어갔을때 어떤파일이 있는지
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/menu-bar_location": MenuBarLocation,
    "/write": Write,
    "/chatting": Chatting,
    "*": NotFound,
  };
</script>

<Router {routes} />
