Docker Database:
  docker/docker-compose.yml 

Adonis CLI Commands:

Create controller:
  node ace make:controller Pet 

Configure Database Driver (Choose between Mysql, Postgresql, SqlServer, Etc):
  node ace configure @adonisjs/lucid

Create migration:
  node ace make:migration pets

Run migration:
  node ace migration:run


Docker Commands:

Docker clean up all stopped containers:
  docker system prune -a
