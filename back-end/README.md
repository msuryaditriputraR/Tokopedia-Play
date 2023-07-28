# MID TERM GENERASI GIGIH 3.0

**MUH SURYADI TRIPUTRA RAHMAN** (GG3FSGP0401) <br>
*FULL STACK ENGINEER 6 CLASS*

## DATABASE STRUCTURE

## FOLDER STRUCTURE

## API STRUCTURE
There are 3 routes in this project
* /videos
* /products
* /comments

## REQUEST & RESPONSE

### GET /videos

Return all videos 

* Code : 200
* Content:

```
[
  {
    "_id": String,
    "videoId": String,
    "urlThumbnail": String,
    "titleVideo": String,
    "linkVideo": String,
    "__v": Number
  }
]

```

### POST /videos 

Create a new video and returns the id

* Code : 201
* Headers: 
```
  Content-Type: application/json
```
* Payload :

```
{
  "urlThumbnail": String,
  "titleVideo": String,
  "linkVideo": String
}

```

### GET /products

Return all products with videoId

* Code : 200
* Headers: 
```
  Content-Type: application/json
```
* Payload :
```
{
  "videoId" : String
}
```
* Content:

```
[
  {
    "_id": String,
    "productId": String,
    "linkProduct": String,
    "titleProduct": String,
    "priceProduct": Number,
    "videoId" : String,
    "__v": Number
  }
]

```

### POST /products 

Create a new product and returns the id

* Code : 201
* Headers: 
```
  Content-Type: application/json
```
* Payload :

```
{
  "linkProduct": String,
  "titleProduct": String,
  "priceProduct": Number,
  "videoId" : String,
}

```

### GET /comments

Return all comments with videoId 

* Code : 200
* Headers: 
```
  Content-Type: application/json
```
* Payload :
```
{
  "videoId" : String
}
```
* Content:

```
[
  {
    "_id": String,
    "commentId": String,
    "username": String,
    "comment": String,
    "videoId" : String,
    "timestamp" : Date,
    "__v": Number
  }
]

```

### POST /comments 

Create a new comment and returns the id

* Code : 201
* Headers: 
```
  Content-Type: application/json
```
* Payload :

```
{
  "username": String,
  "comment": String,
  "videoId" : String,
}

```

## HOW TO RUN

1. Install all depedencies
```
npm i
```
2. Install Recommendation Extension for VS Code (REST CLIENT) <br> 
   REST CLIENT is vscode extension to send request easyly

3. Create new db tokopedia-play on mongoshell (Terminal)
```
use tokopedia-play
```   

4. Import sample collections on folder [collections](./collections/) to tokopedia-play db
   
5. rename .env.example  to .env and fill the variables with your own

6. Run the Server
```
npm start
```

7. Open file on folder [rest](./rest/) and start send request

2. Happy Coding