# mongoose-tut
To understand how mongoose send data and object to MongoDb
resource link : https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/

This project has 3 main files
    models
    routes
    server

server :
        This file requires express node module, mongoose schema model and routes.
        mongoose is connected to the atlas using uri
        mongoose collection is stores in a variable db
        if there is no error then show connected to mongodb successfully otherwise show error
        now use the router to make api working
        now since the app is running show server is running on port 3000

models : 
         This is to chech the and maintain a schema is a schema less database mongodb
         make a variable user in which store the schema of the user

routes :
         Import express modules and make api call like get and post 
         now how to make post api?
