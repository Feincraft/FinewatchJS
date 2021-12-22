# Deploying Finewatch
## Edit this project ![Build status badge](https://github.com/feincraft/finewatchjs/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/feincraft/finewatchjs** and click import

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/feincraft/finewatchjs** and import

## Add apps and services to your project

Once added as an extension, you will have 2 new categories of blocks in the editor:
* **Finewatch Apps** A selection of apps and games you can add to your project with a task manager included
* **Finewatch Services** Background processes that run regardless of the active app, these can send serial or radio communications
Both apps and services should be added to the OnStart event in the blocks editor.
You can add the same app mutiple times.

**IMPORTANT:** Adding too many apps and services will result in a compilation error due to the program size limitation.

# Using Finewatch
## :house: Home screen

All added applications are shown as icons on the LED screen, in the order they were added.

Use the following controls to manage apps:
- **A Button:** Switch app
- **B Button:** Start app
- **AB Buttons:** Close running app

When an app is started started, the A and B buttons will perform different functions, as defined by the app or game running.<br/>
Other inputs may also be used, such as shake, rotate screen, light level, sound level and others.<br/>
To close an app, press A and B together.

## :watch: Watch App

Controls:
- **A Button:** Adjust hours
- **B Button:** Adjust minutes

## :scissors:	RPS Game

Randomly shows rock, paper or scissors when watch is shaken.

## :brain: Memory Game

Shows a random set of dots which fade after 10 seconds. <br/>
Player needs to guess where they were.<br/>
Controls:
- **A Button:** Move selector dot
- **B Button:** Select a dot. 
 
If selected correctly, the dot will blink, otherwise the game ends.<br/>
Press A to restart game.

If player found all dots, the score is shown.<br/>
Press A to restart game.

## :cloud_with_rain: Acid Rain Game

Player must avoid falling drops from the top of the screen.<br/>
Controls:
- **A Button:** Move left or restart game
- **B Button:** Move right 


/* TODO: Add documentation for the rest of the apps */
