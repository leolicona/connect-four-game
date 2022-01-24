document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    const message = document.querySelector('#message');
    currentPlayer = 1;

    for (let i = 0; i < squares.length; i++) {
        console.log('Squares Lenght', squares.length);
        squares[i].onclick = () => {
            if (squares[i + 7].classList.contains('taken')){
                console.log('Click on square: ', [i] )
                console.log('Select Square [i + 7]: ', [i + 7] )
                console.log('Squares [i + 7]: ', squares[i + 7]);
                if(currentPlayer == 1){
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-one');
                    currentPlayer = 2;
                    displayCurrentPlayer.textContent = currentPlayer;
                } else if(currentPlayer == 2){
                    squares[i].classList.add('taken');
                    squares[i].classList.add('player-two');
                    currentPlayer = 1;
                    displayCurrentPlayer.textContent = currentPlayer;
                } 
            }
            else {
                alert('Hey')
                //message.textContent = timeMessge;
            } 
                       
       
        }
    }

})