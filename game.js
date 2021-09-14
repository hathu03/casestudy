let snake, food;


function setup() {
    score = createDiv('Score = 0');
    score.position(20, 20);
    score.id = 'score';
    score.style('color', 'black');

    createCanvas(WIDTH, HEIGHT);
    newGame();
}

function draw() {
    background(0);
    if (!snake.isDead) {
        drawSnake();
    } else {
        newGame()
        window.location.reload();
    }

}

function drawSnake() {
    if (frameCount % SNAKE_SPEED == 0) {
        snake.update();
    }
    if (snake.head.x == food.x && snake.head.y == food.y) {
        eatFood();
    }
    food.show();
    snake.show();
}

function newGame() {
    snake = new Snake();
    food = new Food();
}

function checkScore() {
    const prevScore = parseInt(score.html().substring(8));
    score.html('Score = ' + (prevScore + 1));
}

function eatFood() {
    snake.length++;
    food.newFood();
    checkScore();
}

function keyPressed() {
    if (keyCode == UP_ARROW && snake.vel.y != 1) {
        snake.vel.y = -1;
        snake.vel.x = 0;
    } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
        snake.vel.y = 1;
        snake.vel.x = 0;
    } else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
        snake.vel.y = 0;
        snake.vel.x = -1;
    } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
        snake.vel.y = 0;
        snake.vel.x = 1;
    }
}


