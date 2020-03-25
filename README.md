### Project stories

TODO stuff I've to implement inside my App. For every point I'll discuss more in detail next.

- [x] Retro Engineering for understand BE side and Swagger endpoint
- [x] Init Client App with Create React App
- [ ] Add Redux, Redux saga -> create reducer and INIT fn
- [ ] Add preprocessor css (SCSS) for the style
- [ ] Add React Router for html5 (history) navigation
- [ ] Study business logic
- [ ] More ...


This demo App require to use a defined Git Flow so except for the first two point all the other implementation
will be done using branches and making PR eg: feature/redux -> for creating redux store and saga middleware.

## Retro Engineering


When starting the development of a client side application the first thing to do is understand the BE side.

This example provide me a express server running with node, without any README. So I've downloaded the server App 
on my pc. The App at the endpoint localhost:8080 has Swagger API, so I've jump right away to 
[web.js](https://github.com/bemindinteractive/chat-server-challenge/blob/master/web.js) and 
[index.js](https://github.com/bemindinteractive/chat-server-challenge/blob/master/lib/index.js).

After playing a while with HTTPie I've successfully logged in Tizio user and retrieved his contacts and historical messages.

Eg:
```shell script
http POST localhost:8080 username=tizio password=tizio.secret
```

If the response is 200 I'll get the sessionId that I need to use in the HTTP Header for all the future call.


## Init Client CRA


This is a demo client for show my understanding of react and some architectural decision. For this purpose
I needed to jump right away into the development without caring to much about init configuration.
This is why I've decided to use Create React App.


 