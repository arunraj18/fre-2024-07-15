const controller = {
    init: function() {
        model.initialize();
        view.init();
    },

    startGame: function() {
        model.reset();
        view.updateScore(model.score);
        view.updateTimeLeft(model.timeLeft);
        view.renderGameBoard();

        model.timer = setInterval(() => {
            if (model.timeLeft > 0) {
                model.timeLeft--;
                view.updateTimeLeft(model.timeLeft);
            } else {
                clearInterval(model.timer);
                clearInterval(model.moleInterval);
                clearInterval(model.snakeInterval);
                alert('Time is Over!');
            }
        }, 1000);

        model.moleInterval = setInterval(() => {
            this.showRandomMole();
        }, 1000);
        model.snakeInterval = setInterval(() => {

            this.showRandomSnake();

        }, 2000);
    },


    handleBlockClick: function(id) {
        const block = model.gameBoard.find(block => block.id === id);
        if (block.status  === 'mole') {
            model.score++;
            block.status = 'empty';
            view.updateBlock(id, 'empty');
            view.updateScore(model.score);
        }
        else if (block.status === 'snake') {

            view.showAllSnakes();

            clearInterval(model.moleInterval);

            clearInterval(model.snakeInterval);

            alert('Game Over! You clicked the snake.');

        }
    },

    showRandomMole: function() {
        const activeMoles = model.gameBoard.filter(block => block.status === 'mole').length;
        if (activeMoles >= 3) return;

        const emptyBlocks = model.gameBoard.filter(block => !block.status);
        if (emptyBlocks.length === 0) return;

        const randomIndex = Math.floor(Math.random() * emptyBlocks.length);
        const block = emptyBlocks[randomIndex];
        block.status = 'mole';
        view.updateBlock(block.id, 'mole');
        setTimeout(() => {

            if (block.status === 'mole') {

                block.status = 'empty';

                view.updateBlock(block.id, 'empty');

            }

        }, 2000);

    },
    showRandomSnake: function() {

        const blockId = model.gameBoard[Math.floor(Math.random() * model.gameBoard.length)].id;

        model.gameBoard.forEach(block => {

            if (block.status === 'snake') {

                block.status = 'empty';

                view.updateBlock(block.id, 'empty');

            }

        });



        const block = model.gameBoard.find(block => block.id === blockId);

        block.status = 'snake';

        view.updateBlock(block.id, 'snake');
    }
};

// Initialize the game
controller.init();
