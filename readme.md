**Docker Database:**
-----------------
    docker/docker-compose.yml 

</br>

**Available APIs Routes (Just import the file bellow inside Postman):**
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

**AdonisJs Validator (Validate fields):**
-----------------
    https://docs.adonisjs.com/guides/validator/introduction
</br>

**Docker Commands:**
-----------------
</br>

Docker create/run the containers (Run inside /docker folder):

    docker-compose up
</br>

Docker clean up all stopped containers:

    docker system prune -a
