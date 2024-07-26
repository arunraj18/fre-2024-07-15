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
                alert('Time is Over!');
            }
        }, 1000);

        model.moleInterval = setInterval(() => {
            this.showRandomMole();
        }, 1000);
    },

    handleBlockClick: function(id) {
        const block = model.gameBoard.find(block => block.id === id);
        if (block.status) {
            model.score++;
            block.status = false;
            view.updateBlock(id, false);
            view.updateScore(model.score);
        }
    },

    showRandomMole: function() {
        const activeMoles = model.gameBoard.filter(block => block.status).length;
        if (activeMoles >= 3) return;

        const emptyBlocks = model.gameBoard.filter(block => !block.status);
        if (emptyBlocks.length === 0) return;

        const randomIndex = Math.floor(Math.random() * emptyBlocks.length);
        const block = emptyBlocks[randomIndex];
        block.status = true;
        view.updateBlock(block.id, true);
    }
};

// Initialize the game
controller.init();
