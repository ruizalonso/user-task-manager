
# User Task Manager

A small app about task information. 



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

See the `.env.example` file for all microservices and client app


## Run Locally

Clone the project. You must be using linux or wls2 and have docker installed. 

```bash
  git clone https://github.com/ruizalonso/user-task-manager.git
```
```bash
  cd app && npm i
```
```bash
  cd app/users && npm i
```
```bash
  cd app/tasks && npm i
```

Start a Monogdb docker container 

```bash
  cd app
```
Volume file `/app`
```bash
  mkdir data
```
Run the containers `/app`
```bash
  docker-compose up -d mongo
```
```bash
  docker-compose up -d mongo-express
```
Task microservice
```bash
  cd app/tasks && npm run start
```
User microservice
```bash
  cd app/users && npm run start
```
App client
```bash
  cd task_app && npm i  
```
`/task_app`
```bash
  npm run start
```

## Authors

- [@ruizalonso](https://github.com/ruizalonso)


## License

[MIT](https://choosealicense.com/licenses/mit/)
