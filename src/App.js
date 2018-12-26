import React from 'react';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
import path from 'path';

let LoadableExample1 = Loadable({
    loader: () => import(/* webpackChunkName: "ExtensionPanel1" */ './extensions/ExtensionPanel1'),
    LoadingComponent: Loading,
    serverSideRequirePath: path.resolve(__dirname, './extensions/ExtensionPanel1')
});

let LoadableExample2 = Loadable({
    loader: () => import(/* webpackChunkName: "ExtensionPanel2" */ './extensions/ExtensionPanel2'),
    modules: ['./ExtensionPanel2'],
    LoadingComponent: Loading,
    serverSideRequirePath: path.resolve(__dirname, './extensions/ExtensionPanel2')
});

export default function App() {
  return (
    <div>
        <h1>This is the application</h1>
        <LoadableExample1/>
        <LoadableExample2/>
    </div>
  );
}
