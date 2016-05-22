# Step-based Game Skeleton
This is a skeleton for a step based browser game. There is a player stats panel, a message panel, and an actions panel. On each step the player chooses an action which advances the step and changes their stats. The players stats will evolve over time based on their actions which will cause milestones to occur and more actions to be unlocked.

You might wonder why I wrote my own store instead of using Redux. I love redux but I also love writing data flow code and this project is for my on enjoyment so I built that part from scratch. The store class is passed down through the app. It contains the game state and will force update on the top-level react component when its update method is called. You can create arbitrary methods on the store to modify game state but it will not cause a re-render unless the update method is called.

The repo is configured to use react hot-loading which makes development lightning fast. While this is supposed to be a unopinionated seed for a game there are oportunities for further development. I hope to gradually develop a better UI frame. While every game would have its own theme and visual feel, it would be nice to provide a little bit more out of the box than just a few simple panels.

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

There are two core files that that you can start from to understand how this game framework works. The app is loaded from ./src/main.js and you will see that it loads the root UI component called Home. All the core UI components are loaded by Home. The store contains most of the game state data and the logic for evolving the game state from step to step. You can learn the application easily starting from these two points.
