import React from 'react';

import App from './client/components/App.react';
import Main from './client/components/Main.react';
import Message from './client/components/Message.react';

export default [
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/messages',
                Component: Main,
                children: [
                    {
                        path: '/messages/:messageId',
                        Component: Message,
                    },
                ],
            },
        ],
    },
];
