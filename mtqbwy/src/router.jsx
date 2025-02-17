import {createRootRoute, createRoute, createRouter} from "@tanstack/react-router";
import App from "./App";
import Home from "./pages/home";
import About from "./pages/about";
import SignIn from "./pages/sign_in";
import {useNavigate} from "@tanstack/react-router";
import {useEffect} from "react";
import Favorites from "./pages/favorites";


// Redirect to Sign-In Page
const RedirectToSignIn = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate({to: "/signin", replace: true}); //Doing this to redirect to
        // signin page on app launch
    }, [navigate]);
    return null;
};

// Define Routes
const rootRoute = createRootRoute({
    component: () => <App/>,
});

// default
const defaultRoute = createRoute({
    path: "/",
    getParentRoute: () => rootRoute,
    component: RedirectToSignIn,
});

//Placeholder signin page
const signInRoute = createRoute({
    path: "/signin", // Corrected path
    getParentRoute: () => rootRoute,
    component: SignIn,
});

//Apps main page
const homeRoute = createRoute({
    path: "/home",
    getParentRoute: () => rootRoute,
    component: Home,
});

//README file and notes about app
const aboutRoute = createRoute({
    path: "/about",
    getParentRoute: () => rootRoute,
    component: About,
});

//WIP
const favoritesRoute = createRoute({
    path: "/favorites",
    getParentRoute: () => rootRoute,
    component: Favorites,
});

// Create Routers
const routeTree = rootRoute.addChildren([
    defaultRoute,
    signInRoute,
    homeRoute,
    aboutRoute,
    favoritesRoute,
]);

//call route tree as define above
const router = createRouter({
    routeTree,
});

export {router};