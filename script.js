document.getElementById('playButton').addEventListener('click', function () {
    const random1 = Math.floor(Math.random() * 3) + 1;
    const random2 = Math.floor(Math.random() * 3) + 1;

    document.getElementById('player1').setAttribute('src', `img/${getImageName(random1)}.jpeg`);
    document.getElementById('player2').setAttribute('src', `img/${getImageName(random2)}.jpeg`);

    document.getElementById('result').innerText = getResult(random1, random2);
});

function getImageName(number) {
    switch (number) {
        case 1:
            return 'rock';
        case 2:
            return 'scissor';
        case 3:
            return 'paper';
        default:
            return '';
    }
}

function getResult(player1, player2) {
    if (player1 === player2) {
        return 'It\'s a tie!';
    } else if ((player1 === 1 && player2 === 3) || (player1 === 2 && player2 === 1) || (player1 === 3 && player2 === 2)) {
        return 'Player 1 wins!';
    } else {
        return 'Player 2 wins!';
    }
}
