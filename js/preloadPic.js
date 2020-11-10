function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
    './image/dpp_taiwan_ColSum_ig.png',
    './image/dpptw_ColSum_fb.png',
    './image/tpp.251_ColSum.png',
    './image/TPPfanpage_ColSum.png',
    './image/statebuilding.tw_ColSum_fb.png',
    './image/statebuilding.tw_ColSum_ig.png',
    './image/newpowerparty_ColSum_ig.png',
    './image/newpowerparty_ColSum_fb.png',
    './image/PFPTW_ColSum.png',
    './image/kmt_china_ColSum_ig.png',
    './image/mykmt_ColSum_fb.png',
    './image/pfp.com.tw_ColSum.png'
]);