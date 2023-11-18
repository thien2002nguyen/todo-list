import Home from "../components/Pages/Home";
import Manager from "../components/Pages/Manager";
import About from "../components/Pages/About";
import Login from "../components/Login";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login }
];

const privateRoutes = [
    { path: '/manager', component: Manager }
]

export { publicRoutes, privateRoutes };