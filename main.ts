input.onButtonPressed(Button.B, function () {
     TaskManager.InputB();
});

input.onButtonPressed(Button.A, function () {
     TaskManager.InputA();
});

input.onButtonPressed(Button.AB, function () {
     TaskManager.InputAB();
});


input.onGesture(Gesture.Shake, function () {
     TaskManager.Shake();
})


basic.forever(function () {
    for (let x = 0; x <  TaskManager.AppTasks.length; x++) {
         TaskManager.AppTasks[x]();
    } 
    for (let x = 0; x <  TaskManager.SystemTasks.length; x++) {
         TaskManager.SystemTasks[x]();
    }
})

 TaskManager.Init();
 TaskManager.HomeScreen();



