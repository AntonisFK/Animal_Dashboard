This app  utilize all 4 CRUD methods with Mongoose. In this exercise, you'll build an app which manages a pack of some kind of animal (think otter, rabbit, or owl). You are able to add a new animal, update it, and delete it. It  uses the following routes:

GET '/' Displays all of the mongooses.
GET '/mongooses/:id' Displays information about one mongoose.
GET '/mongooses/new' Displays a form for making a new mongoose.
POST '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
GET '/mongooses/:id/edit' Should show a form to edit an existing mongoose.
POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/:id/edit').
POST '/mongooses/:id/destroy' Should delete the mongoose from the database by ID.
Remember these routes are just examples, avoid using mongooses for your dashboard if you can!
