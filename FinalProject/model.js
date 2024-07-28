const model = {
    gameBoard: [],
    score: 0,
    timeLeft: 30,
    timer: null,
    moleInterval: null,

    initialize: function() {
        this.gameBoard = [];
        for (let i = 1; i <= 12; i++) {
            this.gameBoard.push({ id: i, status: false });
        }
        this.score = 0;
        this.timeLeft = 30;
        this.timeLeft = 30;
    },

    reset: function() {
        this.initialize();
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        if (this.moleInterval) {
            clearInterval(this.moleInterval);
            this.moleInterval = null;
        }
        if (this.snakeInterval) {
            clearInterval(this.snakeInterval);
            this.snakeInterval = null;
        }
    }
};
