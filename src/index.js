import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App';

import Home, { postsLoader, postsAction } from './pages/Home'
import Explore from './pages/Explore'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import User from './pages/User'
import UserInfo from './pages/UserDesc'
import Settings from './pages/Settings';
import Chats, { chatsLoader } from './pages/Chats';
import Chat from './pages/Chat';
import Post, { postLoader, postAction } from './pages/Post';
import Services, { jobLoader } from './pages/Services';
import Gig, { gigLoader } from './pages/Gig';
import Faculties, { facLoader } from './components/Faculties';
import Faculty, { facultyLoader } from './pages/Faculty';
import FaHome from './pages/FaHome';
import Departments from './pages/Departments';
import Department from './pages/Department';
import Academics, { acadLoader } from './pages/Academics';
import Search, { searchLoader } from './pages/Search';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import StatusPage from './pages/StatusPage';
import Menu from './pages/Menu';
import Reset from './pages/Reset';

import Req404 from './components/404';
import ErrorBoundary from './components/Error';

import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient({})
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // loader: rootLoader,
        errorElement: <ErrorBoundary />,
        children: [
            {
                // path: "/",
                index: true,
                element: <Home />,
                loader: postsLoader,
                shouldRevalidate (args){
                    console.log(args)
                    return false
                }
            },
            {
                path: "services",
                element: <Services />,
                loader: jobLoader
            },
            {
                path: "academics",
                element: <Academics />,
                loader: acadLoader,
                children: [
                    {
                        path: "faculties",
                        element: <Faculties />,
                        loader: facLoader,
                    },
                    {
                        path: "academics/faculty/:faculty",
                        element: <Faculty />,
                        loader: facultyLoader,
                        children: [
                            {
                                index: true,
                                element: <FaHome />
                            },
                            {
                                path: "dpts",
                                element: <Departments />
                            },
                        ]
                    }
                ]
            },
            {
                path: "academics/faculty/:facultydpt/:dpt",
                element: <Department />
            },
            {
                path: "/explore",
                element: <Explore />,
                // loader: teamLoader,
                children: [
                    {
                        path: "job/:jobid",
                        element: <Gig />,
                        loader: gigLoader
                    },
                    {
                        path: "s",
                        element: <Search />,
                        loader: searchLoader,
                    },
                ]
            },
            
            {
                path: "/notifications",
                element: <Notifications />,
                // loader: teamLoader,
            },
            {
                path: "/user/:username",
                element: <Profile />,
                // loader: teamLoader,
                children: [
                    {
                        index: true,
                        element: <User />
                    },
                    {
                        path: "info",
                        element: <UserInfo />
                    }
                ]
            },
            {
                path: "/user/:username/chats",
                element: <Chats />,
                loader: chatsLoader(queryClient),
            },
            {
                path: "/chat/:chatid",
                element: <Chat />,
                // loader: teamLoader,
            },
            {
                path: "/:user/post/:postid",
                element: <Post />,
                loader: postLoader(queryClient),
                errorElement: <ErrorBoundary />,
            },
            /*{
                path: "/createpost",
                element: <CreatePost />,
                // loader: teamLoader,
            },*/
            {
                path: "/settings",
                element: <Settings />,
                // loader: teamLoader,
            },
            {
                path: "/signin",
                element: <Signin />,
                // loader: teamLoader,
            },
            {
                path: "/signup",
                element: <Signup />,
                // loader: teamLoader,
            },
            {
                path: "/reset",
                element: <Reset />,
                // loader: teamLoader,
            },
            {
                path: "/menu",
                element: <Menu />,
                // loader: teamLoader,
            },
            {
                path: "/status",
                element: <StatusPage />,
                // loader: teamLoader,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
