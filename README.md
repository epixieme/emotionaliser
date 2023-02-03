# Emotionalise


![home](https://user-images.githubusercontent.com/39728053/216629303-2630aaeb-348a-40b9-8b40-36c3165498eb.mp4)
![dashboard](https://user-images.githubusercontent.com/39728053/216635916-0c2c1443-9b7a-4792-bc35-7196c9fd5b82.gif)


This is a full-stack Wellbeing CRUD application designed with Vanilla Javascript, EJS, a touch of Apline, Tailwind, Node.js, MongoDB and Mongoose.
https://ill-pear-walrus-tutu.cyclic.app/
## Features

- Dashboard showing weekly mood stats.
- Wellbeing tools - Thought Diary and Motivational Quotes CRUD feature.
- Positivity Hub allowing users to view bookmarks that help with instilling postive emotions.
- Community pages for posting thoughts and quotes to share and discuss.
- Profile settings editor - upload a profile picture and edit personal details.

## Installation
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
