# Step-based Game Skeleton
This is a skeleton for a step based browser game. It has the following basic features: 
- A player stats panel, a message panel, and an actions panel. 
- The player chooses an action which advances the step and updates the game state. 
- Player stats change over time based on actions and cause milestones to occur and more actions to be unlocked.
- You can develop any kind of action, event, or step based changes you want.
- There is a bare-bones save/load functionality that uses local storage
- Simple architecture and hot-reloading means you can easily extend the game skeleton with your own features

You might wonder why I wrote my own store instead of using Redux. I love redux but I also love writing data flow code and this project is for my own enjoyment so I built that part from scratch. The store instance is passed down through the app. It contains the game state and will force update on the top-level react component when its update method is called. You can create arbitrary methods on the store to modify game state but it will not cause a re-render unless the update method is also called.

There are many oportunities for further development so feel free to open issues to propose changes. If I approve of a change you can make a full request. Currently the UI is very bare-bones. While every game should have its own theme and visual feel, it would be nice to provide a little bit more out of the box than just a few simple panels.

##Development

Clone the repo or fork and then clone and then run npm install to install all dependencies.
```shell
$ npm install
```
Run the node server to start the webpack hot loading.
```shell
$ node server
```
Navigate to http://localhost:3000/dist/index.html in your browser to view the skeleton.

##Source Code

There are two core files that that you can start from to understand how this game framework works: 
```shell
./src/main.js
./src/data/Store.js
```
The app is loaded from main.js and you will see that it loads the root UI component called Home. All the core UI components are loaded by Home. The file Store.js contains most of the game state data and the logic for evolving the game state from step to step. You can learn the application easily starting from these two points.
