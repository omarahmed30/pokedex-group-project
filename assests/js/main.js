let interval = setInterval(areYouReadyKids,1500);

function areYouReadyKids(){
    console.log("checking");
    if (kevinKetchum.all.length === 3  && omar.pokemonList.length===3){
        console.log("shit is working.")
        runEverythingElse();
    }
}


function runEverythingElse(){
    clearInterval(interval);
    console.log("shit is working, put your code here");
}
