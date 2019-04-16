# This project is based on Create React App + TypeScript

## `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## `docker build`

docker configuration is also included and you can do the following:</br>
`yarn docker-build` or `npm run docker-build` for building the container.</br>
`yarn docker-run` or `npm run docker-run` to boot up your container.

docker included nginx with our custom configuration, so after `docker-run` finished you only need to route to [http://localhost:8000](http://localhost:8000)
