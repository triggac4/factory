# Locator

that displays location from your input
written with react 

## how to set up 
1. first things first you need to clone the repo
2. first steps successful all you need is npm install or npm i 
3. get a `Google map api key`
4. you need to navigate to `src/major-sections/map_section.jsx`
5. locate line 39 ` <LoadScript googleMapsApiKey={process.env.API_KEY}>`
6. replace `process.env.API_KEY` with your api key (put it in quotation marks example 'api key' of "api key" ) 
7. save and npm run start or npm start

for those who just want to see the api calls navigate to `src/utils/DispatchHandler.js`
that's where all the api's are consumed still a few bugs but i'll find them.

also if both textfield's are not filled the submit button will do nothing
and if already processing another submission it is temporarily disabled

### note you are running on local host 3000 but that can be changed if you need to
