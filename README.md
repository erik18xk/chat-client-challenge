### Project stories

TODO stuff I've to implement inside my App. For every point I'll discuss more in detail next.

- [x] Retro Engineering for understand BE side and Swagger endpoint
- [x] Init Client App with Create React App
- [x] Add Redux, Redux saga -> create reducer and INIT fn
- [x] Add preprocessor css (SCSS) for the style
- [ ] Add React Router for html5 (history) navigation
- [ ] Study business logic
- [ ] More ...


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
the sessionId is the driver for handle the communication. This means If the user already logged in I don't want to
ask him again for username and secret, instead I'll redirect the user straight to the Dashboard, providing him all
the information. I'll save the sessionId token in local/session Storage -> don't know yet.


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





 