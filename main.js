nose_x = 0;
nose_y = 0;

function preload()
{

    mustache = loadImage('https://i.postimg.cc/GmxCgn4R/mustache.png');

    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}

function gotPoses(results)
{

    if (results.length > 0)
    {

        console.log(results);

        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

    }

}

function modelLoaded()
{

 console.log("PoseNet is Initialized");

}



function draw()
{

    image(video,0,0,350,350);
    image(mustache, nose_x, nose_y, 30, 30);

}

function take_snapshot()
{

    save('myFilterImage.png');

}

