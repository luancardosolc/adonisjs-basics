**Docker Database:**
-----------------
    docker/docker-compose.yml 

</br>

**Available APIs Routes (Just import the file bellow on Postman):**
-----------------
    AdonisJS Basics.postman_collection.json
</br>

**Adonis CLI Commands**:
-----------------
</br>

Create controller:

    node ace make:controller Pet 
</br>

Configure Database Driver (Choose between Mysql, Postgresql, SqlServer, Etc):

    node ace configure @adonisjs/lucid
</br>

Create migration:

    node ace make:migration pets
</br>

Run migration:

    node ace migration:run
</br>

Create Model:

    node ace make:model Pet
</br>

**Docker Commands:**
-----------------
</br>

Docker clean up all stopped containers:

    docker system prune -a
