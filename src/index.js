import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App';
import Home, { postsLoader, postsAction } from './pages/Home'
import Explore from './pages/Explore'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import Settings from './pages/Settings';
import Chats, { chatsLoader } from './pages/Chats';
import Chat from './pages/Chat';
import Post, { postLoader, postAction } from './pages/Post';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
// import CreatePost from './pages/CreatePost';
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
                loader: postsLoader(queryClient),
                shouldRevalidate (args){
                    console.log(args)
                    return false
                },
            },
            {
                path: "/explore",
                element: <Explore />,
                // loader: teamLoader,
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
            },
            {
                path: "/user/:username/chats",
                element: <Chats />,
                loader: chatsLoader(queryClient),
            },
            {
                path: "/user/:username/chat/:chatid/:chatname",
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
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} position="top-left" />
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
