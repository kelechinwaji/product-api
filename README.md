# product-api
An inventory management application built to enable business owners keep track of products.

## API Functionality
Product-api follows an Express based Restful API design, which is used to access MongoDB Database for data storage and retrival. The API's are authenticated using Jasonweb tokens to ensure privacy when retreving and storing data in persistent storage.

The Product-api provides the following Endpoints:

1. Create user
2. Login for users
3. Get all users
4. Delete user
5. Create Product
5. Get users Product
5. Update users Product
5. Delete users Product.

## USEAGE

- To create a user, an email, password and name is entered. This image shows the interface.
![po1](https://user-images.githubusercontent.com/78841792/220401323-3549a68c-3c76-4140-8835-a3e95e888173.jpeg)

- To Login to your account, pass in your email and password. 
![po2](https://user-images.githubusercontent.com/78841792/220402615-f51d4cb2-3e35-4aed-9bbe-4912fb9852a0.jpeg)

- To create a product, pass in the required data.
![po3](https://user-images.githubusercontent.com/78841792/220405222-0af98b30-20f5-4007-8ff8-bc567761b8a7.jpeg)

- To delete product
![po4](https://user-images.githubusercontent.com/78841792/220406204-d0973b47-2a8f-4add-899d-fcdffbb24475.jpeg)

## What I learnt on this project
- How to implement Jasonwebtoken for authentication
- How to work with mongoDB Database
- How to use typescript interface
- How to Omit data from a payload

