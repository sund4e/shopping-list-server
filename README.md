#Services
app - web api
postgresql - database
client - react app

##Build service
`docker-compose up --build -d <service-name>`

##Run service in shell
`docker-compose run <service> bash`

##Run database migrations
`yarn migrate` for development database
`yarn migrate:test` for test database
