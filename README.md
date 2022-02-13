# Locator

that displays location from your input
written with react 

## how to set up 
1. first things first you need to clone the repo.
2. first steps successful all you need is npm install or npm i.
3. next get a `Google map api key` (this step is not compulsory you should see the map with a developer cover over it).
4. if you got the key follow the next 3 steps.
5. you need to navigate to `src/major-sections/map_section.jsx`
6. locate line 39 ` <LoadScript googleMapsApiKey={process.env.API_KEY}>`
7. replace `process.env.API_KEY` with your api key (put it in quotation marks example 'api key' or "api key" ) 
8. save and npm run start or npm start

for those who just want to see the api calls navigate to `src/utils/DispatchHandler.js`
that's where all the api's are consumed.

also if both textfield's are not filled or if already processing another submission 
the submit button will do nothing

### note you are running on local host 3000 but that can be changed if you need to
