# node-api ![alt text](https://travis-ci.org/ItsNoHax/node-api.svg?branch=master "Travis CI build status")
A RESTful node API implementation


### NPM Commands

Start the development environment with Nodemon and Babel-Node.
- Server restarts 3 seconds after last file change
- Set to ignore /tests and /docs folders.
```javascript
npm run start
```
Prepare production build code using babel-cli
- Transpiles our new generation JS into currently supported JS.
- Output directory for production build: /dist/
```javascript
npm run build
```

Start the production build with Node.
```javascript
npm run serve
```
Run all the Mocha unit tests
```javascript
npm run test
```

### Notes

- babel
- node
- mocha
- nodemon
- eslint

