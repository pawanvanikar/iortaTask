# iortaTask
Nodemon package has been used in this file so to run the file start with npm start.

To register the user- http://localhost:5500/api/admin/register

here only admin can register the user and create his credentials.

To register give following input-
{
    "firstName":"Ramesh",
    "lastName":"Suresh",
    "email": "ramesh@g.com",
    "password": 1234
}

In response or output we get- 
{
    "firstName": "Ramesh",
    "lastName": "Suresh",
    "email": "ramesh@g.com",
    "password": "1234",
    "role": "Customer",
    "isActive": true,
    "_id": "63fc40bd1fbc563cb31c203d",
    "createdAt": "2023-02-27T05:33:49.956Z",
    "updatedAt": "2023-02-27T05:33:49.956Z",
    "__v": 0
}

To login the user- http://localhost:5500/api/admin/login
To login give following input- 
{
    "email": "ramesh@g.com",
    "password": "1234"
}

In response or output we get-
{
    "message": "user logged in successfully",
    "users": {
        "_id": "63fc40bd1fbc563cb31c203d",
        "firstName": "Ramesh",
        "lastName": "Suresh",
        "email": "ramesh@g.com",
        "password": "1234",
        "role": "Customer",
        "isActive": true,
        "createdAt": "2023-02-27T05:33:49.956Z",
        "updatedAt": "2023-02-27T05:46:13.427Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmM0MGJkMWZiYzU2M2NiMzFjMjAzZCIsImlhdCI6MTY3NzQ3Njc5MCwiZXhwIjoxNjc3NTYzMTkwfQ.028QHqGtKeWTJNoiLIpELzOoaQh61FhPZpspU3PDJaU"
}

To get user detail- http://localhost:5500/api/admin/users

here the user details are retrieved based on the role of user login.

To get user details give following input-
Just add the api with get request and hit the api we'll get the output for it.

In response or output we get-
{
    "_id": "63fc40bd1fbc563cb31c203d",
    "firstName": "Ramesh",
    "lastName": "Suresh",
    "email": "ramesh@g.com",
    "password": "1234",
    "role": "Customer",
    "isActive": true,
    "createdAt": "2023-02-27T05:33:49.956Z",
    "updatedAt": "2023-02-27T05:47:45.086Z",
    "__v": 0
}

To update the user details- http://localhost:5500/api/admin/update

here the user details are updated based on the role of user login.

To update give following input-
{
    "email":"ramesh@g.com",
    "lastName":"gaytonde"
    
}

In response or output we get-
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}

To delete the user- http://localhost:5500/api/admin/delete

here the user account is deleted based on the role of user login.

To delete give following input-
{
    "email":"pawan@g.com"
}

In response we get-
{
    "message": "customer deleted successfully",
    "email": "pawan@g.com"
}

To logout the user- http://localhost:5500/api/admin/logout

here the loggedin user gets logout.

To logout the give following input-
Just add the api with post request and hit the api we'll get the output for it.

In response we get-
{
    "messaage": "Log out successfull"
}


