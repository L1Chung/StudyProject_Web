function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
    
}
var Flag=0;
function change(img2){
    if(Flag==0){
        Flag=1;
        document.getElementById('image').style.opacity = 0;
        document.getElementById('image').src = img2;
        $('#image').fadeTo(1500,1, function(){
            document.getElementById("imgReload").style = "background-image: url('"+img2+"'); background-size: cover;";
            Flag=0;
        });
    }
    
    
}

// Usage:

preload([
    './image/all_puzzle.jpg',
    './image/puzzle_dpp.jpg',
    './image/puzzle_kmt.jpg',
    './image/puzzle_newp.jpg',
    './image/puzzle_none.jpg',
    './image/puzzle_stat.jpg',
    './image/puzzle_tpp.jpg'
]);
        