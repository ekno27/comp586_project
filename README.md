# comp586_project
Project for COMP586: Object Oriented Design

#Xpire
Xpire is a web application for tracking the shelflife of refrigerated goods.
Create an account and keep track of expiration dates on perishable foods by logging them in.

## SPA
Angular is used to fill the view portion of the MVC. 

## MVC
ASP .net is utilized to create an MVC Application following standard MVC folder structure.

## Authentication/ Authorization / Single Sign On
the Okta Identity Provided is used to authenticate users and to only allow authenticated users to use API.


## ORM 
Entity Framework is used to deal with ORM, and viewModel was created to pass data to the Angular Application from different models, 
found in viewModel folder and implemented in GroceryItemsController. 


## Dependency Injections
Dependency Injections come as a default for Angular and ASP .net, found all throughout the application

### How to use
1. Sign in / Register using okta by pressing the "login with okta" button. 
2. add items to the grocery list, if the item is not in the database the application will ask to enter a shelf life (in how many days
the product will expire)
3. Keep adding and deleting items

