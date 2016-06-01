### Setup
# npm install
# in one command prompt run
# node DOMServer.js
# other command prompt run
# node AppServer.js
# Access the app server on browser like 


http://localhost:5555/mk/products/shoes 


##Functional Details : 
- Client communicates to App Server to get the page for shoes 
- App Server make a http request to DOM Server by passing the fake Shoe JSON to get the HTML
- DOM Server makes use of  React Component "ProductListView" and the json it gets from the AppServer to create the HTML String and returns the markup to AppServer
- AppServer then returns the complete page to client

##TODO
# Facet fitlering using react component on frontend.

