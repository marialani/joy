# joy efficacy tool

[![Build Status](https://travis-ci.com/fac18/joy.svg?branch=master)](https://travis-ci.com/fac18/joy)

### About

Joy is a health tech company on a mission to add ten years to life expectancy through better social health.

https://team-joy.herokuapp.com/

### Problem statement

Social referrers need to demonstrate the impact on client wellbeing of key services.

### The solution

We built a tool which allows you to track which clients you have referred to which services, and query the database to create a dashboard of key metrics on these services and their impact on wellbeing.

### Tech stack

- Express server, PostgreSQL, React Hooks, Material UI styling, hosted on Heroku.

### The app
<img src="https://i.imgur.com/sRovB7h.png" width="400">
<img src="https://i.imgur.com/2yYUixu.png" width="400">

- The app makes it easy to view where the most popular services are and the wellbeing of the individuals you are referring.

You can

1. Register a client
<img src="https://i.imgur.com/XJgJzvK.png" width="400">

2. Search for an existing client by first name, last name and date of birth
<img src="https://i.imgur.com/7c5fcd3.png" width="400">

3. View an existing client's profile
<img src="https://i.imgur.com/tGgqyxh.png" width="400">

4. Make a service referral to them from a selection of services
<img src="https://i.imgur.com/730RZSa.png" width="400">

5. Carry out a wellbeing assessment
<img src="https://i.imgur.com/16QKI9o.pngg" width="400">

6. See how these metrics affect wellbeing on the dashboard
<img src="https://i.imgur.com/WDPcDS4.png" width="400">

### Database

[This](https://docs.google.com/spreadsheets/d/1R7-1iC3SsjIhLPAS4LHF4eo1Wo0rNX3UNx6eiO_hw6s/edit?usp=sharing) is how the database is structured.

## User testing

We were lucky enough to be able to interview social referrers and the CEO of Age UK Berkshire for our user testing. 

These were a few of our key takeaways: 

1. A lot of clients in Public sector may have tech issues so good to bear in mind
2. Data: mostly liked top two graphs which we showed (overall wellbeing of clients, breakdown of service)
3. Didn’t need to see data by month
4. Didn’t like scatter graphs. 
5. People don’t always do the referring immediately after the welfare assessment so we should split these up
6. The buttons on the welfare assessment were not intuitive

Quotes: 

“Simple is better”
“Breaking down results by month could be easily swayed by weather so wouldn’t produce accurate data”


### Setup

How to install and run in a development environment:

git clone https://github.com/fac18/joy.git

In the server directory, create an .env file with DATABASE_URL=postgres://url_to_whatever_database_you_have_access

To build the database from the root: npm run /server/model/database/db_build.js

npm i && cd client && npm i && cd .. && npm run start:dev

## How to run tests

npm test

Deployment instructions

- Environment variables (but do not publish them here): to publish to the database wich is hosted on heroku, you will need the link to the Heroku database url.
- Maintenance:

### To do

- For the app to go into formal production, we need help from a security expert to ensure that the data of the individuals on the app is completely protected.
- We would like to add additional functionality, including: 
* The ability to add a new service
- We would also like to focus on what other interesting data can be pulled from the information, namely
* How services affect wellbeing over a long period of time.

### Contributing

- If you would like to contribute, please make a pull request!

### License

- Remember to include a `LICENSE` file containing the license copy in your root - see how [here](https://help.github.com/en/articles/adding-a-license-to-a-repository). We recommend [MIT](https://choosealicense.com/licenses/mit/).
