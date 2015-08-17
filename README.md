# 2015-07-Final-Assessment

## Introduction

You've spent the past 5 weeks learning about JavaScript, Node.js, various frameworks, databases and web protocols. Time to put it all together. The goal of this final assessment is to build an application from scratch using the tools and technologies you've been using during the course. You'll build a simple web application that will allow users to login and register, search the imgur API and save photos they're interested in. In the assessment, the technology stack is left open for you to decide - want to roll your own server instead of using express?, backbone.js vs angular.js?, and there is no starter project to get you going. I've left a set of instructions that will walk you through creating a repo and package.json, but after that you're on your own. This sprint is open book, open note and if you really get stuck - I'm available for a little help. That being said, please don't copy and paste work you've done previously or from extensive boilerplate on the internet. Have fun!

## Prompt

"We want an application that lets users search for, collect and store their favorite photos from Imgur. We want users to be able to login to our app with an Imgur acount, be able to search for photos on imgur, and be able to view all of their saved images. We want to utilize the Imgur API, though consider how you might build it to eventually support other photo APIs as well."

## Getting Started

**On Github.com:**
  
  From your Github page on the repositories panel, create a new repo named 2015-07-Final-Assessment.
  copy the remote address (git@github.com:your_username/2015-07-Final-Assessment.git)

**From the command line:**

  Create a new project directory and cd into it
  ```
  mkdir [name_of_directory]
  cd [name_of_directory]
  ```
  
  Initialize your project as a Git repo and set Github as a remote
  ```
  git init
  git remote add origin {git_url from above}
  ```
  
  Initialize your project as a Node project (follow the prompts)
  ```
  npm init
  ```
  
Congrats, you've made a project from scratch! Dependencies can be installed using ```npm install --save [package_name]```. If you want to use bower, you can set it up using ```bower init```. Time to build an app!

## Basic Requirements

  - [ ] Register an application with the imgur API
  - [ ] Create a sign in page using a JavaScript framework of your choice
  - [ ] Allow users to sign in using imgur's OAuth authentication
  - [ ] Allow users to search for a gallery by tag and display the first page of that gallery
  - [ ] Allow users to have a session using cookies
  - [ ] Allow users to save selected images to a database
  - [ ] Should display images and image data on the /shared route
