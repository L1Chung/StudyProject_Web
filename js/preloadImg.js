function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
    './image/all_puzzle.jpg',
    './image/puzzle_dpp.jpg',
    './image/puzzle_kmt.jpg',
    './image/puzzle_newp.jpg',
    './image/puzzle_none.jpg',
    './image/puzzle_tpp.jpg'
]);
        