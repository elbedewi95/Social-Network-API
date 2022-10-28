# Social-Network-API

 ## Table of Contents:  
[1. Description](#Description)  
[2. Walkthrough Video](#Walkthrough-Video)  
[3. Installation](#Installation)  
[4. Tests](#Tests)  
[5. License Details](#License-Details)   
[6. Questions](#Questions)  

## Description:
This is a set of API for a social network that uses a MongoDB database so that the website can handle large amounts of unstructured data, Express.js for routing, Mongoose ODM, and the moment package to format time stamps.


## Walkthrough Video
server down

## Installation:
```
    - npm init -y
    - npm install
```
4. Start the server
```
    $ node index.js
```
5. Open Insomnia Core to test API routes

## Tests:  

Testing restful API calls with Insomnia Core  

---
**`/api/users`**
* `GET` all users
* `POST` a new user:

---
**`/api/users/:userid`**
* `GET` a single user by its `_id` 
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`
---
**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list
---
**`/api/thoughts`** 
* `GET` to get all thoughts
* `POST` to create a new thought
---
**`/api/thoughts/:thoughtId`**
* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`
---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction 
  
---
**`/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` remove a reaction by the `reactionId` 

## License Details: 
 MIT.  


## Questions:
 Here is a link to my github: <br> 
https://github.com/elbedewi95<br>
 Email me at:  
<a href="mailto:vickybedewi-95@hotmail.com">vickybedewi-95@hotmail.com</a>


