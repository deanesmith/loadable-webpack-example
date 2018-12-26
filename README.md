# React Loadable Example

Uses react-loadable for importing and to gain control over chunking webpacked bundles. 

##### Install

Clone, fork, or download this project.

In your local project directory, run the following command:

`yarn install`


##### Build

For non-minified bundles:

`yarn build --mode development`

or, for minified bundles:

`yarn build --mode production`

Notice in your ./public/build directory there are two bundles, one for main and one for the ExtensionPanel component.


##### Run 

`yarn prod`

Create and build your own ExtensionPanel and overwrite the ExtensionPanel.js file in the build directory.
