function setup(){
    video=createCcapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded)
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
    poseNet.on('pose', gotPoses);
}

function gotPoses() {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX-rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "diffrence" + diffrence);
    }
}