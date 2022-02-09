song = "";

song1_status = "";
song1_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() 
{
    song = loadSound("music2.mp3");
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide(); 

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.leftWrist.x;
        scoreLeftWrist = results[0].pose.leftWrist.y;
        console.log("scoreRightWrist = " + scoreRightWrist +" scoreLeftWrist"+ scoreLeftWrist );

       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
       console.log("leftWristX = " + leftWristX +" leftWristY"+ leftWristY);

       rightWristX = results[0].pose.rightWrist.x;
       righttWristY = results[0].pose.rightWrist.y;
       console.log("rightWristX = " + rightWristX +" rightWristY"+ rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();

    Fill("#FF0000");
    stroke("FF0000");
}

if(scoreRightWrist > 0.2)
{
    circle(rightWristX,rightWristX,20);

    song2.stop();

    if(song1_status == false)
    {
    song1.play();
    document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song";
}
}

if(scoreLeftWrist > 0.2)
{
    circle(lefttWristX,lefttWristX,20);

    song1.stop();

    if(song2_status == false)
    {
    song2.play();
    document.getElementById("song").innerHTML = "Playing - Peter Pan Song";
}
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1)
}

