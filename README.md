# Genoa Technologies Code Challenge

## Overview
This is a simple exercise to assess your ability to use ReactJs to build web applications. The
goal is to see how well you understand various concepts related to reactive front-end
development. This exercise should not take you more than 4-8 hours. If it does, please let me
know so I can reduce the scope of what is asked. The goal is not to​:
1. Produce a fully working application
2. Get everything pixel-perfect

## Requirements
Build a dashboard for a patient portal using React JS, Redux and html. The dashboard should
have the following aspects:
1. A profile picture and welcome message for the user
2. A list of upcoming patient appointments, including
a. Date
b. Time
c. Doctor Name
d. Anything else you might want to add
3. A details view, when someone clicks the appointment that shows the appointment
details. You can make this up, but it can include fields like:
a. Last Appointment Date
b. Patient Symptoms
4. Some menu buttons leading to other options, that don’t have to actually work. The menu
items can be fake
5. The ability to display a Physician profile tile when you hover over the Doctor’s name that
shows the physicians bio, including
a. Name
b. Specialty
c. A profile picture
d. Education

*You can make the following assumptions:*
1. The user is logged in
2. You can use the following appointment json data if helpful, or create your own:
```json
[
  {
  "created_at" : "2015-04-21T10:44:51-06:00",
  "end" : "2015-04-24T07:30:00-06:00",
  "id" : 695,
  "patient_id" : 16,
  "physician_id" : 14,
  "start" : "2015-04-24T07:00:00-06:00",
  "updated_at" : "2015-04-21T10:44:51-06:00",
  "patient_name" :"Mike Ross",
  "physician_name" : "Gregory House"
  }
]
```

## Deliverables
You must submit a link to a github/bitbucket/other repository. Your repository must contain a
simple html/javascript/reactjs application.
You will be evaluated on:
1. Use of React JS
2. How well you break down the application into React components
3. Code quality / cleanliness
4. Comments

## Solution
This React app displays a fictional logged-in user with a few seeded appointments. To run it locally, clone down the Git repository and run `npm install` and then `npm start` from the command line. Your browser should automatically open the app on the default port, but if it doesn't, make note of the port and open the page manually by entering its local address in the browser nagivation bar. A different port may be specified by modifying the value for `"scripts"` in the `package.json` file, e.g. `"scripts": "PORT=3001 react-scripts start"`.
