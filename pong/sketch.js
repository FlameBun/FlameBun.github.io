let xPosCirc, yPosCirc
let diameter
let xVeloCirc, yVeloCirc
let xLeftPad, yLeftPad, xRightPad, yRightPad
let padHeight, padWidth
let leftScore, rightScore

function setup()
{
    createCanvas(960, 640)
    frameRate(60)
    xPosCirc = 480
    yPosCirc = 320
    diameter = 20
    xVeloCirc = Math.random() < 0.5 ? -5 : 5
    yVeloCirc = Math.random() < 0.5 ? -5 : 5
    xLeftPad = 10
    yLeftPad = 255
    xRightPad = 935
    yRightPad = 255
    padHeight = 130
    padWidth = 15
    leftScore = 0
    rightScore = 0
}

function draw()
{
    background(0)
    dashedLine(25)
    score()
    rect(xLeftPad, yLeftPad, padWidth, padHeight)
    rect(xRightPad, yRightPad, padWidth, padHeight)
    padControls()
    circle(xPosCirc, yPosCirc, diameter)
    circleMotion()
    wallCheck()
    padCheck()
    reset()
}

function dashedLine(pixels)
{
    if (leftScore < 10 && rightScore < 10)
    {
        stroke(255)
        strokeWeight(2)
        let center = width / 2
        for (let i = 0; i < height / pixels; i++)
        {
            line(center, i * pixels + 5, center, i * pixels + 15)
        }
    }
    else
    {
        textAlign(CENTER)
        textSize(50)
        text("Game Over", width / 2, 320)
    }
}

function score()
{
    fill(255)
    noStroke()
    textAlign(CENTER)
    textSize(32)
    text(leftScore, width / 4, 50)
    text(rightScore, 3 * width / 4, 50)
}

function padControls()
{
    if (leftScore < 10 && rightScore < 10)
    {
        if (keyIsDown(87) && yLeftPad > 0)
        {
            yLeftPad -= 5
        }
        if (keyIsDown(83) && yLeftPad < 510)
        {
            yLeftPad += 5
        }
        if (keyIsDown(UP_ARROW) && yRightPad > 0)
        {
            yRightPad -= 5
        }
        if (keyIsDown(DOWN_ARROW) && yRightPad < 510)
        {
            yRightPad += 5
        }
    }
}

function circleMotion()
{
    xPosCirc += xVeloCirc
    yPosCirc -= yVeloCirc
}

function wallCheck()
{
    if (yPosCirc <= 10 || yPosCirc >= 630)
    {
        yVeloCirc = -yVeloCirc
    }
}

function padCheck()
{
    let circleLeft = xPosCirc - 10
    let circleRight = xPosCirc + 10

    if ((circleLeft === 25) && (yPosCirc >= yLeftPad) && (yPosCirc <= yLeftPad + 130))
    {
        xVeloCirc = -xVeloCirc
    }
    if ((circleRight === 935) && (yPosCirc >= yRightPad) && (yPosCirc <= yRightPad + 130))
    {
        xVeloCirc = -xVeloCirc
    }
}

function reset()
{
    if (leftScore < 10 && rightScore < 10)
    {
        if (xPosCirc <= -10)
        {
            rightScore += 1
            if (leftScore < 10 && rightScore < 10)
            {
                xPosCirc = 480
                yPosCirc = 320
                xVeloCirc = Math.random() < 0.5 ? -5 : 5
                yVeloCirc = Math.random() < 0.5 ? -5 : 5
            }
        }
        if (xPosCirc >= 970)
        {
            leftScore += 1
            if (leftScore < 10 && rightScore < 10)
            {
                xPosCirc = 480
                yPosCirc = 320
                xVeloCirc = Math.random() < 0.5 ? -5 : 5
                yVeloCirc = Math.random() < 0.5 ? -5 : 5
            }
        }
    }
}
