# step-game-skeleton
The repo contains a skeleton for a step based game. There are three panels in the UI: a player stats panel, a message panel, and an actions panel. On each step the player chooses an action from the action panel which advances the step and changes their stats. The players stats will evolve over time based on their actions which will cause milestones to occur and more actions to be unlocked.

The repo is configured to use react hot-loading and single store data flow which is very convenient and makes development lightning fast. While this is supposed to be a unopinionated seed for a game there are oportunities for further development. I hope to gradually develop a better UI frame. While every game would have its own theme and visual feel, it would be nice to provide a little bit more out of the box than just a few simple panels.

##Development

Clone the repo or fork and then clone and then run npm install to install all dependencies.
```shell
$ npm install
```
Run the node server to start the webpack hot loading
```shell
$ node server
```
Navigate to http://localhost:3000/dist/index.html in your browser to view the skeleton
