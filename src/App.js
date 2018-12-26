import React from 'react';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

let LoadablePanel = Loadable({
    loader: () => import(/* webpackChunkName: "ExtensionPanel1" */ './extensions/ExtensionPanel'),
    LoadingComponent: Loading
});

export default function App() {
  return (
    <div>
        <h1>This is the application.</h1>
        <LoadablePanel/>
    </div>
  );
}
