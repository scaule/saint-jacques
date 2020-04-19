import Home from "../pages/Home";
import Login from "../pages/Login";
import Spots from "../pages/Spots";

export default {
  home: {
    path: "/",
    label: "Accueil",
    component: Home,
    guard: false,
  },
  spots: {
    path: "/spots",
    label: "Spots",
    component: Spots,
    guard: true,
  },
  login: {
    path: "/login",
    label: "Se connecter",
    component: Login,
    guard: false,
  },
};
