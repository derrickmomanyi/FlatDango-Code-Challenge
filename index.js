//this code fetches data from the server and displays it to the DOM once each movie on the list is clicked

let url = 'http://localhost:3000/films/'
document.addEventListener('DOMContentLoad' , fetchfirstMovie())   // loads the rest of the html before loading the javascript code


let poster = document.getElementById('poster')   //gets the poster with the specific id and assigned it to a variable 
let film = document.getElementById('films')     //gets the film with the specific id and assigned it to a variable
let title = document.getElementById('title')    //gets the title with the specific id and assigned it to a variable
let runtime = document.getElementById('runtime')    //gets the runtime with the specific id and assigned it to a variable
let filmInfo = document.getElementById('film-info') //gets the film info with the specific id and assigned it to a variable
let showtime = document.getElementById('showtime')    //gets the showtime with the specific id and assigned it to a variable
let filmItem = document.querySelector('.film-item')    //gets the film item with the specific class using querySelector and assigned it to a variable
let button = document.getElementById('buy-ticket')    //gets the button with the specific id and assigned it to a variable
let buttonDiv = document.querySelector('.extra-content')   //gets the button div with the specific class using querySelector and assigned it to a variable
let tickets = document.getElementById('ticket-num')  //gets the tickets with the specific id and assigned it to a variable


function fetchfirstMovie(){     // a function to fetch the first movie
   fetch(url + 1)
     .then(res => res.json())
     .then(data =>  displayMovies(data))
     fetchMovies()
     }


function fetchMovies() {                  //function to fetch the movie data from the server
    fetch(url)
    .then((res) => res.json())             //converts the data to JSON 
    .then((data) => renderMovies(data))    //assigns our data fetched to a new function which will render the data
}
function renderMovies(movie) {   
    
     movie.forEach((movie) => {              //for each movie data fetched from the server ...............
      
      const li = document.createElement('li')            //creates a new element 'list'
       film.appendChild(li)                             //appends the list to unordered list with the id of film
      li.className = "film-item"                        //gives the list created above a className of film-item
       li.innerHTML = movie.title                      //assigns our list a movie title
       filmItem.innerText = ""                          //removes the previous inner Text of "Movies will go here" which will be replaced with our data above
       film.style.cursor = 'pointer'                   //as you hover through the list the cursor changes to [pointer]
       li.addEventListener('click', () => {             //adds an event listener click for each displayed movie to access all the details
        button.innerText = "Buy Ticket";                //for each click the button text should be "Buy Ticket"
        button.className = "ui purple button";          //for each click the button color should be purple
            displayMovies(movie)                        //as you click a particular movie in the list we display all the ovie details 
            deleteMovies()
          })
      
    })


}
function displayMovies(movie) {
   
        poster.src = movie.poster              //displays the poster image
        title.innerHTML = movie.title           //displays the movie title
        runtime.innerHTML = movie.runtime         //displays the movie runtime
        filmInfo.innerHTML = movie.description    //displays the movie description
        showtime.innerHTML = movie.showtime         //displays the movie showtime
        tickets.innerText = movie.capacity - movie.tickets_sold     //displays the movie tickets left for purchase

     
        
    
}


       button.addEventListener("click", (e) => {               //add a click event listener to the button
      
        e.preventDefault();                                      //prevent the browser default refresh event
        let ticketsLeft = document.getElementById('ticket-num').innerText    //gets the number of tickets left after purchase     
            
        
        if(parseInt(ticketsLeft, 10) === 0){          //if the number of tickets left is equal to zero then....
          button.innerText = "Sold Out";            //change the button text to "Sold Out"
          button.className = 'sold-out'             //add a class name to the button of 'sold-out'
             
        }
        else{
          (ticketsLeft > 0) ? document.getElementById('ticket-num').innerText -= 1 : 0   //this tertiary operator ensures the decrement of the number of tickets left 
        }
      }

       )
      

      





    

  

 
    


    
