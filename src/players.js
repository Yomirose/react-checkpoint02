import PropTypes from 'prop-types';

const Players = [
    {
        name: "Lionel Messi",
        team: "Barcelona",
        nationality: "Argentina",
        jerseyNumber: 10,
        age: "37 years old",
        imageUrl: "https://img.a.transfermarkt.technology/portrait/big/28003-1710080339.jpg?lm=1" 
    },
    {
        name: "Andres Iniesta",
        team: "Barcelona",
        nationality: "Spain",
        jerseyNumber: 8,
        age: "40 years old",
        imageUrl: "https://img.a.transfermarkt.technology/portrait/big/7600-1685447666.jpg?lm=1" 
    },
    {
        name: "Luis Suarez",
        team: "Liverpool",
        nationality: "Uruguay",
        jerseyNumber: 7,
        age: "37 years old",
        imageUrl: "https://img.a.transfermarkt.technology/portrait/big/44352-1710080919.jpg?lm=1" 
    },
    {
        name: "Yaya Toure",
        team: "Manchester City",
        nationality: "Ivory Coast",
        jerseyNumber: 42,
        age: "41 years old",
        imageUrl: "https://img.a.transfermarkt.technology/portrait/big/13091-1719518647.jpg?lm=1" 
    }
]

Players.propTypes = {
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    jerseyNumber: PropTypes.number.isRequired,
    age: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };  

export default Players;