
For this assessment, I'll be working on Flatdango. Flatiron Movie Theater is open for business! I will be building out an application, Flatdango, that allows a user to purchase movie tickets from the theater and fetch data from a local server running JSON DB server.


This README consists of the deliverables, author, licences and few explanations
## Core Deliverables

As a user, I can:

1. See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`. You will need to make a GET
   request to the following endpoint to retrieve the film data:


2. See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads. (_optional_: you can style each film in the list
   by adding the classes `film item` to each `li` element.) There is a
   placeholder `li` in the `ul#films` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list. You
   will need to make a GET request to the following endpoint to retrieve the
   film data:


3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available). **No persistence is needed for this feature**.

### Bonus Deliverables

These bonus deliverables are here if you want an extra challenge and won't
affect your score. **Make sure to commit your work to save your progress before
attempting the bonus deliverables!**

1. Click on a movie in the menu to replace the currently displayed movie's
   details with the new movie's details. Note that you may have to make an
   additional GET request to access the movie's details.

2. When a movie is sold out (when there are no available tickets remaining),
   indicate that the movie is sold out by changing the button text to "Sold
   Out". 


 ### EXPLANATION 

 The step by step process has been commented in the index.js file. 

The Javascript fetches the data from a local server and displays it on the DOM. When each movie in the list is clicked, the details; poster, runtime, available tickets are all displayed in the page. 

When the HTML loads it first displays the details of the first movie with the Id of 1, the list of movies will also be displayed on the left side.

By clicking the Buy Ticket button the number of available tickets left will decrement and if there are no tickets left; the number of tickets are zero; the button text changes to "Sold OUt"

We fetch our data from this local server  'http://localhost:3000/films/' , by running this command 'json-server --watch db.json' the details in the api are displayed in the browser window, in JSON Object format, in form of the following details:
.. Title of the movie
.. Description of the movie
.. Runtime of the movie
.. Poster image
.. Time at which the movie will be showing
.. Number of tickets available
.. Number of tickets remaining

The Buy-Ticket feature doesn't actually purchase tickets, it's functonality may be worked on at later stages of the project






   
Author Derrick Momanyi

Github: @derrickmomani

License Copyright © 2022 Derrick Momanyi This project is MORINGA SCHOOL licensed.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.