import React from 'react';

import App from './client/components/App.react';
import Main from './client/components/Main.react';
import Messages from './client/components/Messages.react';

export default [
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: Main,
      },
      {
        path: '/messages',
        Component: Messages,
      },
    ],
  },
];
