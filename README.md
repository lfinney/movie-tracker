# Movie Tracker

This project is working off the The Movie DB API (https://www.themoviedb.org/documentation/api/). The idea of the project is to be able to sign in as a user and save favorite movies.

## Setup Postgresql

#### Installation:
* Install Homebrew. Homebrew is a package manager for MacOS.
	*  */usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)*
	
* Install Postgresql  
	*  *brew install postgresql*	
	
#### Running Postgres
* Start Postgres  
  * `psql -f ./database/users.sql` will drop and recreate your database. 
	* *postgres -D /usr/local/var/postgres* (You could create an alias for this)
	
One Paragraph of project description goes here

## Getting Started

Clone this repository to your local machine and obtain API key from The Movie DB API.

### Prerequisites

Make sure postgres is installed on your machine. See section above. 

### Installing

To install the application, make sure depedencies are installed using the command 
```
npm install
```
To start the application on localhost:3000, run the following command from your CLI
```
npm start
```

## Running the tests

Testing using Enzyme and Jest covers Redux actions and reducers as well as unit testing javascript functionality. 

## Built With

* [React](https://reactjs.org/) - The javascript framework used
* [Redux](https://redux.js.org/) - State management for React
* [Router](https://github.com/reactjs/react-router-redux) - URL Routing for React
* [Thunk](https://github.com/gaearon/redux-thunk) - Redux Middleware management
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Authors

* **Nick Teets** [Github](https://github.com/nicktu12)
* **Luke Finney** [Github](https://github.com/lfinney)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Extensions

* Clean up UI
