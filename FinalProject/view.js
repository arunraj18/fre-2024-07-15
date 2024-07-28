const view = {
    init: function() {
        this.gameBoardElement = document.getElementById('game-board');
        this.scoreElement = document.getElementById('score-value');
        this.timeLeftElement = document.getElementById('time-left');
        this.startButton = document.getElementById('start-button');

        this.startButton.addEventListener('click', () => controller.startGame());

        this.renderGameBoard();
    },

    renderGameBoard: function() {
        this.gameBoardElement.innerHTML = '';
        model.gameBoard.forEach(block => {
            const blockElement = document.createElement('div');
            blockElement.className = 'block';
            blockElement.id = `block-${block.id}`;
            blockElement.addEventListener('click', () => controller.handleBlockClick(block.id));
            this.gameBoardElement.appendChild(blockElement);
        });
    },

    updateBlock: function(id, status) {
        const blockElement = document.getElementById(`block-${id}`);
        if (status === 'mole') {
            blockElement.innerHTML = '<img src="mole.jpg" alt="Mole" style="width: 100%; height: 100%;">';
        } 
        else if (status === 'snake') {

            blockElement.innerHTML = '<img src="snake.jpg" alt="Snake" style="width: 100%; height: 100%;">';

        }
        else {
            blockElement.innerHTML = '';
        }
    },

    updateScore: function(score) {
        this.scoreElement.textContent = score;
    },

    updateTimeLeft: function(timeLeft) {
        this.timeLeftElement.textContent = timeLeft;
    },
    showAllSnakes: function() {

        model.gameBoard.forEach(block => {

            this.updateBlock(block.id, 'snake');

        });

    }
};
