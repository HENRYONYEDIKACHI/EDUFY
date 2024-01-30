import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App';

import Home, { postsLoader, postsAction } from './pages/Home'
import Explore from './pages/Explore'
import Notifications from './pages/Notifications'
import Notivity from './pages/Notivity'
import Bookmarks from './pages/Bookmarks'
import Profile from './pages/Profile'
import User from './pages/User'
import UserInfo from './pages/UserInfo'
import Settings from './pages/Settings';
import Chats, { chatsLoader } from './pages/Chats';
import Chat from './pages/Chat';
import Post, { postLoader, postAction } from './pages/Post';
import Channels, { channelLoader } from './pages/Channels';
import UserChannel from './pages/UserChannel';
import Market, { martLoader } from './pages/Market';
import Gig, { gigLoader } from './pages/Gig';
import Faculties, { facLoader } from './components/Faculties';
import Faculty, { facultyLoader } from './pages/Faculty';
import FaHome, { faHomeLoader } from './pages/FaHome';
import FaInfo, { faInfoLoader } from './pages/FaInfo';
import Departments, { dptsLoader } from './pages/Departments';
import Department, { dptLoader } from './pages/Department';
import Academics, { acadLoader } from './pages/Academics';
import Books from './pages/Books';
import Search, { searchLoader } from './pages/Search';
import Result, { resLoader } from './pages/Result';
// import Signin from './pages/Signin';
import Signup from './pages/Signup';
import StatusPage from './pages/StatusPage';
import Reset from './pages/Reset';

import Menu from './components/Menu';
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
                path: "academics",
                element: <Academics />,
                loader: acadLoader,
                children: [
                    {
                        path: "books",
                        element: <Books />
                    },
                    {
                        path: "faculties",
                        element: <Faculties />,
                        loader: facLoader,
                    },
                    {
                        path: "faculty/:faculty",
                        element: <Faculty />,
                        loader: facultyLoader,
                        children: [
                            {
                                index: true,
                                loader: ({params})=>redirect(`/academics/faculty/${params.faculty}/activity`)
                            },
                            {
                                path: "activity",
                                element: <FaHome />
                            },
                            {
                                path: "info",
                                element: <FaInfo />,
                                loader: faInfoLoader
                            },
                            {
                                path: "dpts",
                                element: <Departments />,
                                loader: dptsLoader
                            },
                            {
                                path: "dpt/:dpt",
                                element: <Department />,
                                loader: dptLoader
                            }
                        ]
                    }
                ]
            },
            {
                path: "/explore",
                element: <Explore />,
                // loader: teamLoader,
                children: [
                    {
                        path: 's',
                        element: <Search />,
                        loader: searchLoader,
                        children: [
                            {
                                index: true,
                            //     loader: ()=>redirect('/explore/s/history')
                            // },
                            // {
                            //     path: "history",
                                element: <>Search History Page</>
                            },
                            {
                                path: "trending",
                                element: <>Trends Page</>
                            }
                        ]
                    },
                    {
                        path: 's/:search',
                        element: <Result />,
                        // loader: ()=>{}
                    },
                ]
            },
            
            {
                path: "/notifications",
                element: <Notifications />,
                // loader: teamLoader,
                children: [
                    {
                        index: true,
                        loader: ()=> redirect('/notifications/activity')
                    },{
                        path: 'activity',
                        element: <Notivity />
                    },
                    {
                        path: 'bookmarks',
                        element: <Bookmarks />
                    }]
            },
            {
                path: "/user/:username",
                element: <Profile />,
                // loader: teamLoader,
                children: [
                    {
                        index: true,
                        loader: ({params})=> redirect(`/user/${params.username}/about`)
                    },
                    {
                        path: "about",
                        element: <UserInfo />
                    },
                    {
                        path: "gigs",
                        element: <User />
                    },
                    {
                        path: "channels",
                        element: <UserChannel />
                    },
                    {
                        path: "reviews",
                        element: <User />
                    }
                ]
            },
            {
                path: "market",
                element: <Market />,
                loader: martLoader,
                children: [
                    {
                        index: true,
                        loader: ()=>redirect('/market/all')
                    },
                    {
                        path: "all",
                        element: <>All Services</>
                    },
                    {
                        path: "graphics",
                        element: <>Graphics Services</>
                    },
                    {
                        path: "tech",
                        element: <>Graphics Services</>
                    },
                    {
                        path: "writing",
                        element: <>Writing/Typing Services</>
                    },
                    {
                        path: "fashion",
                        element: <>Fashion Services</>
                    },
                    {
                        path: "pd/:pd",
                        element: <>Product Page</>,
                        loader: ()=>{'holla'},
                    }
                ]
            },
            {
                path: 'jobs',
                element: <>Jobs Page</>,
                children: [
                    {
                        path: ":job/:jobid",
                        element: <Gig />,
                        loader: gigLoader
                    },
                ]
            },
            {
                path: 'channels',
                element: <Channels />
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
            // {
            //     path: "/signin",
            //     element: <Signin />,
            //     // loader: teamLoader,
            // },
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
