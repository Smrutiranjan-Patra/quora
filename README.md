This is the clone of [Quora](https://www.https://www.quora.com) build using MERN Stack. We started this project as a five member team during the fifth unit construct week organised at Masai School, Bengaluru, Karnataka. 


The website resembles a real clone and you can login using google authentication or can create new account. You can ask question here.


## How to run the app

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

* MONGO_URI: this is the connection string of your MongoDB Atlas database.
* JWT_ACCESS_KEY: This is a key which is used to authencticate user. You can put any strings here.
* GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET: These credentials can be created using Google cloud platform. This helps to authenticate a user using Google OAuth.4

After you've set these environmental variables in the .env file at the root of the project, you need to fill your empty MongoDB Atlas database by creating new products in the Products collection.

Now you can run "npm start" in the terminal and the application should work.


## Basic inference about the company

Quora is an American social question-and-answer website based in Mountain View, California, United States. It was founded on June 25, 2009, and made available to the public on June 21, 2010. Users can collaborate by editing questions and commenting on answers that have been submitted by other users. As of 2020, the website was visited by 300 million users a month.

## Technology
### The application is built with:

* MongoDB
* React js
* Redux
* Express js
* Chakra UI

## Added Functionalities

### The application displays a virtual bags store that contains virtual products and contact information. User can do the following:

* Create an account, login or logout
* Create new post


## Added features
* Search feature with searching suggestions for any available post
* Sign-in / Sign up authentication
* Pagination


## Contributors



* [Nilesh Kumar D](https://github.com/)
* [Madhurima Banerjee](https://github.com/)
* [Smrutiranjan Patra](https://github.com/)
* [Vishnu Dutta](https://github.com/)
* [Abhishek Soni](https://github.com/)


## Glimpse of our work


![Landing Page](https://miro.medium.com/max/700/1*4JEETLvQrn4Wch3dQydiiA.png?raw=true)


![Sign Up](https://miro.medium.com/max/700/1*KtkhFJ13Gqy3Pi-rllecBQ.png?raw=true)


![New Post](https://miro.medium.com/max/700/1*wLRV84YOmp_T_BO0gjfEKg.png?raw=true)




