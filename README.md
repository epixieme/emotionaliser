# Emotionalise

https://user-images.githubusercontent.com/39728053/216772553-a36a867e-fd19-463b-92cc-43a63b12390a.mp4


This is a full-stack Wellbeing CRUD application designed with Vanilla Javascript, EJS, a touch of Apline.js, Tailwind, Node.js, MongoDB and Mongoose.
https://ill-pear-walrus-tutu.cyclic.app/
## Features

- Dashboard showing weekly mood stats and randomily displayed quote with logic to display based on like or dislike.
- Wellbeing tools - Thought Diary and Motivational Quotes CRUD features.
- Positivity Hub allowing users to view bookmarks that help with instilling postive emotions.
- Community pages for posting thoughts and quotes to share and discuss.
- Profile settings editor - upload a profile picture and edit personal details.

## Images

<table width="100%">
  <tr>
  <td width="50%" align="top">
   <img src ="https://user-images.githubusercontent.com/39728053/216773241-3871b9d0-25cd-4d1a-952e-431c52a2a2b9.png" style="height:300px;width:100%"></td>

  </td>
  <td width="50%" align="top">
   <img src = "https://user-images.githubusercontent.com/39728053/216773119-17519509-557e-44ae-a41c-e37a9e2b8be6.png" style="height:300px;width:100%"></td>

  </tr>
</table>

<table width="100%">
  <tr>
  <td width="50%" >
   <img src ="https://user-images.githubusercontent.com/39728053/216771795-129d4b30-c388-41f9-913b-732c79ad88fd.png" align="top" style="height:300px;width:100%"></td>

  </td>
  <td width="50%" >
   <img src = "https://user-images.githubusercontent.com/39728053/216772644-61eb7933-908d-4bb3-82aa-a7bc78fdff6b.png" align="top" style="height:300px;width:100%"></td>

  </tr>
</table>

## Challenges
A learning curve was to install and implement Alpine.js. I chose this lightweight framework because I wanted to add a library that complimented and fitted the profile of Tailwind.
I also wanted something that didnt have a huge learning curve so that it didn't delay the delivery of the project.

## A Installation
To run this project you must install node and express.

Fork and clone the repo and then run the following from a terminal if on Mac or command prompt on windows:

```
npm i

```
This will install the required package.json file

Create your .env files and set up cloudinary and mongoDb then add the settings to your .env like so.

```
PORT = any port number
DB_STRING = your mongodb connection
CLOUD_NAME =''
API_KEY =''
API_SECRET =''
```
Create your .gitignore file so you aren't giving away any secrets and add your .env and node_modules.

