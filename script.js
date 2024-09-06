const boxes=document.querySelectorAll('.box');
const gameInfo=document.querySelector('.game-info');
const newGameBtn=document.querySelector('.btn');

let currentPlayer;
let gameGrid;
const winningPosition=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
function initGame(){
    currentPlayer="X"
    gameGrid=['','','','','','','','',''];
    newGameBtn.classList.remove('active');
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
    boxes.forEach((item,index)=>{
        item.innerText="";
        boxes[index].style.pointerEvents="all";
      
    })
    
    boxes.forEach((box)=>{
        box.classList.remove('win')
    
       })

}
initGame();
boxes.forEach(function(item,index){
    item.addEventListener('click',()=>{
        handleclick(index);
    })
})
function checkGameOver(){
    
    let winner="";
    winningPosition.forEach((position)=>{
        if((gameGrid[position[0]]!=='' || gameGrid[position[1]]!=='' || gameGrid[position[2]]!=='') && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){
            if(gameGrid[position[0] ]=== "X")
                winner="X";

            
            else{
                winner="O";
            }
                boxes.forEach((box)=>{
                box.style.pointerEvents="none"
                })
                 boxes[position[0]].classList.add('win')
                 boxes[position[1]].classList.add('win')
                 boxes[position[2]].classList.add('win')
            }
        
    });
    if(winner !== ""){
        gameInfo.innerText=`Winner Player-${winner}`
    newGameBtn.classList.add('active');
    return;
 
    }
    let fillCount=0;
    gameGrid.forEach((item)=>{
if(item!==""){
    fillCount++;
}
    });
    if(fillCount===9){
        gameInfo.innerText=`Game Tied !`
        newGameBtn.classList.add('active');
    }
}
function handleclick(index){
    if(gameGrid[index]===''){
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none";
        swapTurn();
        checkGameOver();
}


}
function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }
    gameInfo.innerText=`Current Player- ${currentPlayer}`
    
};
newGameBtn.addEventListener('click',initGame);
