### Project stories

TODO stuff I've to implement inside my App. For every point I'll discuss more in detail next.

- [x] Retro Engineering for understand BE side and Swagger endpoint
- [x] Init Client App with Create React App
- [x] Add Redux, Redux saga -> create reducer and INIT fn
- [x] Add preprocessor css (SCSS) for the style
- [x] Add React Router for html5 (history) navigation
- [x] Study business logic
- [x] Login Page
- [x] Contacts Page
- [ ] Profile Page
- [x] Chat Page
- [ ] More...


This demo App require to use a defined Git Flow so except for the first two point all the other implementation
will be done using branches and making PR eg: feature/redux -> for creating redux store and saga middleware.

## Retro Engineering


When starting the development of a client side application the first thing to do is understand the BE side.

This example provide me an express server running with node, without any README. So I've downloaded the server App 
on my pc. The App at the endpoint localhost:8080 has Swagger API, so I've jump straight away to 
[web.js](https://github.com/bemindinteractive/chat-server-challenge/blob/master/web.js) and 
[index.js](https://github.com/bemindinteractive/chat-server-challenge/blob/master/lib/index.js) for understand how it 
work and how I can use the API provided.

After playing a while with HTTPie I've successfully logged in Tizio user and retrieved his contacts and historical messages.

Eg:
```shell script
http POST localhost:8080 username=tizio password=tizio.secret
```

If the response is 200 I'll get the sessionId that I need to use in the HTTP Header for all the future call.


## Init Client CRA


This is a demo client for show my understanding of react and some architectural decision. For this purpose
I needed to jump straight away into the development without caring to much about init configuration.
This is why I've decided to use Create React App.


## Add Redux and Redux Saga


For the purpose of this Demo App I've decided to use Redux as state manager.

#### Why saga? 

I'll use saga for handle all the async call to the express server
 - login
 - get contacts
 - get historical messages
 - logout
 
I also want to add some persistent logic: after a closer look to the node App I've realized that
the sessionId is the driver for handle the communication. This means that if the sessionId is stored 
inside the cookie storage on the initSaga I want to call the /profile endpoint. 
If the Response is ok(v) -> I'll render the dashboard, if the response is Err(v) I'll bring the user back to
the Login page.

## Preprocessor Scss

Even if nowadays I'm more into [css-next](https://cssnext.github.io/) for this DEMO I'll use
[scss](https://sass-lang.com/) preprocessor following [BEM](https://en.bem.info/methodology/quick-start/) methodology.
The folder structure for the style will be:

```
.
├── styles
|   ├── components
|   |   └── all components styles
|   └── common
|       ├── mixins
|       |   ├── breakpoints
|       |   ├── other
|       └── colours
```

Following this folder structure I can loosely couple my components and share common styles.


#### Breakpoints

This Application will have just two breakpoints, when the app is above 
650px is considered mobile otherwise desktop.


## React router

React router will help my development, App component will be the wrapper of all pages and based on the path the page
will be rendered with all his child component, following this structure:

```
.
├── App
|   ├── Login
|   ├── Profile
|   └── Contact
|   |__ Chat
```

All the pages will have their child component called in the Render.


## Study business Logic

With a deeper look to the images provided in the README I've noticed that I need to refactor the logic of Redux-Router
cause on the Dashboard page I'll have to implement another Switch -> Nested Route cause I need to display the contacts
and the profile page.
This refactor will be done when the user can successfully login. So I'll jump into the design of the login page.


## Login Page

I've created the branch [feature/login-user](https://github.com/erik18xk/chat-client-challenge/commit/62e017003807c2ee3da16f8af16f667d774e32ed)
I'll use the provided /profile endpoint for check if the user has been authenticated before. This means that until the 
sessionId is valid the user is authenticated.

## Contact page

The [dashboard](https://github.com/bemindinteractive/chat-client-challenge/blob/master/docs/images/profile.png) require
a nested route whenever I want to display the contact page or my profile page. So in this branch [chat-profile]() I've set up the logic
for handle such feature.
First thing first I have to retrieve all the missing data from the api -> contacts of my current user.
I'll make this fetch call after the login/check, saving the response the the contacts data. I've added some style followind
the screenshot provided to me.


## Chat page
For the chat page I want to use a walkaround that I think will perfectly fit with my need. Instead of using
redux as source of truth I'll use the api endpoint, this means that I'll save in redux just the 
messages I need for that user.

All the styles and logic are build in this branch [chat-page](https://github.com/erik18xk/chat-client-challenge/commit/e5cc9211deddc2512a53ce2f1aed1b4408595bb1).


## Header Style
[style-header]()