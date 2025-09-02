const cls = document.querySelectorAll('.cl');
let currentPlayer = 'X';
let gameOver = false;


const rest = document.getElementById('clear');
rest.addEventListener('click', () => {
    cls.forEach(cl => {
        cl.textContent = '';
    })
})


const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cls.forEach(cl => {
    cl.addEventListener('click', () => {
        if (cl.textContent !== '' || gameOver) return;

        cl.textContent = currentPlayer;

        if (checkWin(currentPlayer)) {
            gameOver = true;
            update_players_counter(currentPlayer);

            setTimeout(function () {
                cls.forEach(cl => {
                    cl.textContent = '';
                });
                gameOver = false;
            }, 2000);

            console.log(currentPlayer + ' wins!'); l
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
});

function checkWin(player) {
    return winningPositions.some(combo => {
        return combo.every(index => {
            return cls[index].textContent === player;
        });
    });
}

let total_matches = 0;
let xPlayerwins = 0;
let oPlayerwins = 0;

function update_players_counter(currentPlayer) {
    if (currentPlayer === 'X') {
        xPlayerwins++;
        document.getElementById('plyer-score-' + currentPlayer).textContent = xPlayerwins;
    }
    else if (currentPlayer === 'O') {
        oPlayerwins++;
        document.getElementById('plyer-score-' + currentPlayer).textContent = oPlayerwins;
    }

    total_matches++;
    document.getElementById('match-counter').textContent = total_matches;

}


