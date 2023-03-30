import About from "../pages/About";
import Posts from "../pages/Posts";
import Users from "../pages/Users";
import CounterPage from "../pages/CounterPage";
import UserPosts from "../pages/UserPosts";

export const routes = [
    {path: "/about", element: About, exact: true},
    {path: "/posts", element: Posts, exact: true},
    {path: "/users", element: Users, exact: true},
    {path: "/counter", element: CounterPage, exact: true},
    {path: "/user-posts/:id", element: UserPosts, exact: true},
    
]