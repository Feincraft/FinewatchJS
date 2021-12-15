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


input.onGesture(Gesture.TiltLeft, function () {
    TaskManager.TiltLeft();
})

input.onGesture(Gesture.TiltRight, function () {
    
})

input.onGesture(Gesture.ScreenUp, function () {

})

input.onGesture(Gesture.ScreenDown, function () {

})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {

})

input.onLogoEvent(TouchButtonEvent.LongPressed, function () {

})


basic.forever(function () {
    TaskManager.RunTasks();
})

TaskManager.Init();
TaskManager.HomeScreen();
