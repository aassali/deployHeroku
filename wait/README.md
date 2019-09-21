# What we learned

## Monday
- [x] Gitignore file to avoid unnecessary files on our git repository
- [x] Editor config to manage our main guidelines on our editor
- [x] PM2 and `ecosystem` config file
- [x] NPX to quickly access node_module bin folder
- [x] NPM with package.json config file
- [x] Express JS, creation of simple routes

## Tuesday
- [x] Code modularization
- [x] Write and launch unit test
- [x] Write a swagger documentation

## Wednesday
- [x] Launch and manage a Mongo DB server
- [x] Nested params on routes
- [x] Paginate a list
- [x] Search in a collection

# Requirements
## NPX
Npx is a command line tool who provide a shortcut to `./node_module/.bin`
```shell
npm install -g npx
```

## Mongo DB
A running mongodb server, available on `localhost:27017`

# How to start
## Install dependencies
```shell
npm install
```

## Run migration
```shell
npm run migrate
```

# How to use
## Run server in production mode
```shell
npm start
```

## Run server in development mode
```shell
npm run start-dev
# or
npx pm2 start
```

## Run test
```shell
npm test
```

## Show logs
```shell
npm run logs
# or
npx pm2 logs
```
