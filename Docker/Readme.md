# Docker
This is the poc for docker, basic terms, usage and most common commands:

## Terminology

- **Daemon**: This tracks everything related to Docker, including containers, images, volumes, service definition. The Docker daemon constantly listens for Docker API requests and processes them.
- **Host**: It the name that receives the pc where the daemon is running. 
- **Image**: Docker images are a lightweight, standalone, executable package of software that includes everything needed to run an application
- **Container**: A container is a runtime instance of a docker image
- **Volume**: A folder where the docker persist data.
- **Docker Tag**: An image tag is the name of the image. By using this tag, we can pull or run this specific version of the Docker image.
- **Registry**: A Docker registry is a system for versioning, storing and distributing Docker images. Example, Dockerhub
- **Docker Compose**: Is a tool you can use to define and share multi-container applications. This means you can run a project with multiple containers using a single source.



# General management

* Start the docker daemon: this is the very first command you should execute to start working with docker
   ```bash
   docker -d 
   ```

* Check docker is installed, daemon is running and check the version:
   ```bash
   docker version
   ```

# Create Dockerfile:
To create a docker image, you need to create a file called, Dockerfile, always a docker file should be based from a OS or another image.
A Dockerfile is a text document in which you define the build steps for your application. 

Example: 
```docker 
FROM golang:1.21-alpine                   # -> The FROM instruction uses another image as base, in this case the golang image
WORKDIR /src                              # -> Creates the /src working directory inside the container.
COPY . .                                  # -> Copies the files in the build context to the working directory in the container.
RUN go mod download                       # -> The RUN command is to execute any bash/linux command
RUN go build -o /bin/client ./cmd/client
RUN go build -o /bin/server ./cmd/server
ENTRYPOINT [ "/bin/server" ]              # -> This is the last 
```


<details>

<summary>Most common instructions to create Dockerfiles</summary>

```docker
FROM IMAGE_NAME:VERSION AS TEMP_NAME      # To reuse an existing image, you can use the `AS` to name the layer and reuse it later in the process.
EXPOSE PORT                               # To expose any port from the container to the host
WORKDIR PATH_TO_CREATE                    # To create any specific location for the application
COPY SOURCE_PATH DESTINATION PATH         # To copy information from the host to the container, You can also use the flag `--from=` to specify astage name
ENV ENVIRONMENT_VARIABLE = VALUE          # To create environment variables
RUN COMMAND                               # To Run any linux command
ENTRYPOINT ["ANY COMMAND","I MIGHT NEED"]  # To run the application at the end

```

</details>

## Create docker image
Once you created the dockerfile, you should build it to create the docker image.
```bash
   docker images build .
   ```
- -t: Name and optionally a tag in the `name:tag` format
- -name: 
- -f: Name of the Dockerfile 

example: 
```bash
docker image build -t DOCKER_USERNAME/DOCKER_IMAGE_NAME
```



### Manage images: 
Once you have your image create you can use the following commands to manage them:
* List local images
   ```bash
   docker images
   ```

* To publish you image to the cloud, to make it possible to share or reuse the image created from anywhere else. 
```bash
docker push [docker-username]/alpine-git:latest
```


<details>

<summary>Other commands</summary>

```bash
docker rmi <image_name> # Remove an specific image
docker image prune  # Remove all unused images
```
</details>

# Create container:


```bash
docker run -it alpine bin/sh           # To run a new docker
```

use the following parameters to configure you docker container 
* -it: To bind your command window to the one inside the container. Example:  `docker run ubuntu -it bash`
* -detached: To not block you command window and let the container running in the background. Example:  `docker run ubuntu -detached`
* -p: to map a port from the container to the host. Example:    `docker run ubuntu -p 80:8080`
* -e: To configure the environment variables
* -d: detached mode

## Manage containers


```bash
docker ps                              # Show a list of running containers`, use `-a` to show all the containers
docker stop CONTAINER                  # To stop a container
docker start CONTAINER                 # To start a container
docker attach CONTAINER                # When you have a running container in detached mode, use this to attach your console to the container
docker logs CONTAINER                  # Show the logs from a container
docker exec -it CONTAINER bash         # To run a command in a container

docker top CONTAINER                   # To show running processes on the container
docker cp CONTAINER:SOURCE TARGET      # To copy a file from the container to the host
docker cp TARGET CONTAINER:SOURCE      # To copy a file from the host to the container
docker port CONTAINER                  # Check port mappings in the container
docker rename OLD_NAME NEW_NAME        # To rename a container
docker commit CONTAINER                # To create an image from a running container
docker rm CONTAINER                    # remove a container, user `-f` when the container is running 
docker container prune                 # Remove all unused images
```
*  ``

* Stop a running container
   ```bash
   docker stop buildme
   ```







