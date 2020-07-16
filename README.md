# Image Filtering Service

Image Filtering Service is a Node-Express application which runs a simple script to process images developed alongside the Udacity Cloud Engineering Nanodegree.

The code base of the original project is split into three parts in Udacity nano-degree:

1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
   A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/Amr-Omar-Ahmed/Image-Filter-Nodejs_Service), the final project for the course. It is a Node-Express application which runs a simple script to process images.

### Setup Node Dev Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Deploying your system

1. build the project to www folder: `npm run build`
2. init configuration of .elasticbeanstalk: `eb init`
3. create new aws application: `eb create`
4. use `eb deploy` to push changes.
5. configure aws application to add environment variables if exist

### Consuming Service

Just make a GET request to {{HOST}}/filteredimage?image_url={{image_url}} and provide image_url as a query parameter.

You will get Response with the filtered image with status code 200

Example:
Make a GET Req for: http://udacity-image-filter-service-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://fakeimg.pl/1000/

you will have a response with a filtered image
