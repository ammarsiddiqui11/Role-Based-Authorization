ROLE-BASED-AUTHORIZATION also known as RBAC
This is a basic node.js project for beginners to understand how role based access control system works in node.js.

Getting started:-
install the following dependencies 
express,bcrypt,jwtwebtoken,mongoose,mongodb and dotenv

Installation:-
git clone "repo link"
cd role-based-authorization
npm init
npm run dev

Usage:-
1-Create a mongoDB cluster and copy its URL
2-Create a .env file and fill the values of JWT_SECRET,PORT and MONGO_URI
3-Use any client service and hit the register api with body containing 
{
"username" : "username",
"password" : "password",
"role": "admin/user/manager"
}
4-Hit the Login with body containing just the username and password, you will get the jwt token in response, copy that 
5-Now test it with the admin api make the request as GET and headers as Authorizaion and value = Bearer "jwt token value"
6-If you had loged in with the role admin and try to access any api it will be accessible. try same thing with manager login and user login too


contact :-
ammarsiddiqui940@gmail.com
