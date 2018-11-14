This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# React/GraphQL Code Challenge

This is a basic application created with `create-react-app` and connected to the GraphQL API at http://api.orphe.us/graphiql.


Parse the API response from the query at `./src/graphql/itemsQuery` and render the data retrieved as in the screenshot.

![Result](http://gitlab.archimedes.digital/archimedes/code-challenge-react/raw/master/Screenshot.png "Result")


Example response from API can be viewed with the following query: http://api.orphe.us/graphiql?query=%7B%0A%20%20project(hostname:%22example.orphe.us%22)%20%7B%0A%20%20%20%20_id%0A%20%20%20%20items%20%7B%0A%20%20%20%20%20%20_id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20files%20%7B%0A%20%20%20%20%20%20%20%20_id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20path%0A%20%20%20%20%20%20%20%20thumbPath%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D
