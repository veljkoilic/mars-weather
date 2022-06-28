
## Mars Weather
Is a **React.js WebApp** that uses NASA's Weather on Mars API. The latest available weather data from Mars is displayed.

<img src="https://i.ibb.co/1vvhScD/marsw.png" alt="marsw">

## Main functionalities
Fetches the data from the api and then populates the slider component with Slide components containing the weather data.


## What I learned from doing this app / Problems I ran into

 - This is the first proper mini app I made with React.
 - The only tricky part was to update the slider setting in order to change the number of cards displayed depending on screen with. Had to come up with a way to update state with limitations on the "onResize" event so that it doesn't cause too many re-renders.

#
In the project directory, you can run
### `npm start`
This runs the app in the development mode on http://localhost:3000/
