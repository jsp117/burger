# Burger

## Description
For this project, the goal was to create an application that allows a user to input a burger name, click a button that moves that burger to the "eaten" section, then click a button to throw it in the trash. All burgers had to be stored in a MySQL database and their name and "devoured" status saved in the table. The add burger button inserts user input into the mySQL database along with a unique id and a default devoured status of false. When the user clicks one of the eat burger buttons, the status of that burger is changed to devoured. When the trash button is clicked, the burger is deleted from the database. In order to accomplish this, I created an ORM to set up a template for my SQL statements. Utilizing the ORM, I set up a model to fill the ORM with user input, pulled from the front end Javascript through AJAX calls. I then display that data on the site utilizing handlebars syntax. After completing the backend, I used Bootstrap to design the page, setting up cards for each section and holding everything in a container. I then uploaded the project to Heroku, using JawsDB to set up the SQL database.

## Table of Contents
* [Usage](#usage)
* [Code Snippets](#code_snippets)
* [Built With](#built_with)
* [Deployed Link](#deployed_link)
* [Author](#author)
* [Images](#images)
* [License](#license)
* [Acknowledgments](#Acknowledgments)

## Usage
Type in the name of a burger and click "add burger". Click "eat burger" to move that burger over to the eaten burgers area. Click "trash" to throw away an eaten burger.

![gif of usage](/public/assets/images/burgerGif.gif)

## Code Snippets

This code snippet displays the model burger.js, which builds out the SQL generated in the ORM with columns and values specific to the database being used. It is used to generate SQL statements based on user input.

![model](/public/assets/images/model.png)

This code snippet displays controller.js, which calls the model with the user input taken from the front end JavaScript.

![controller](/public/assets/images/controller.png)

## Built_With
* JavaScript
* HTML
* CSS
* [mySQL](https://www.mysql.com/)
* [Express](https://expressjs.com/)
* [Handlebars](https://handlebarsjs.com/)
* [JawsDB](https://www.jawsdb.com/)
* [Heroku](https://heroku.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Github](https://github.com/)

## Deployed_Link
[Burgers](https://jons-burger-joint.herokuapp.com/)

## Author
Jonathan SanPedro - Bachelors of Information Technology at Rutgers New Brunswick - Student at Berkeley Coding Bootcamp

* [Github](https://github.com/jsp117)
* [LinkedIn](https://www.linkedin.com/in/jonathan-s-6ab32283/)

## Images
![Burgers!](/public/assets/images/burger.png)

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)

MIT License

Copyright (c) [2020] [Jonathan J. SanPedro]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgments
Icon made by Freepik from [Flaticon](https://www.flaticon.com)

Background image by Ilya Mashkov from [Unsplash](https://www.unsplash.com) 

