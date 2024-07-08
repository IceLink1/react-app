import About from "../pages/About"
import Home from "../pages/Home"
import Contacts from "../pages/Contacts"


export const privateRoutes = [
    { path: '/about', component: About, exact: true },
    { path: '/posts', component: Home, exact: true },
    { path: '/contacts', component: Contacts, exact: true },
]

