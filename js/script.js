var window_height;
var window_width;
var paper;
var tilesholder;

var colours = new Array("#072932","#093541","#0b4150","#497285","#0D4E5F","#0f5a6e","#11667d","#178baa","#4479D4","#6A92D4","#4B89AC","#9DE5FF","#4495c3","#2E94B9","#2B4450","#2A769A","#72DFD0","#3b8dbb");
function doTiles() {
        var rect_height = 30;
        var rect_width = 30;
        var clr = 0;
        var idx = 0;
        var tile_cnt = 0;
        for(var i=0;i<window.window_width;i+=32){
            for (var j=0;j<window.window_height;j+=32) {
                clr = Math.floor((Math.random()*17)+1);
                var tile = paper.rect(i,j,rect_width, rect_height);
                tile.attr("fill", colours[clr]);
                tile.attr("stroke-width",'0');
                tilesholder.push(tile);
                tile_cnt++;
            }
        }
    
};

function updateWindowSize() {
    window.window_height = $(window).height();
    window.window_width = $(window).width();

    window.paper = Raphael(0,0,window_width, window_height);
    window.tilesholder = paper.set(); 
}

$(window).ready(function(){
    updateWindowSize();            
    doTiles();            
});

$(window).resize(function(){
    updateWindowSize();
    doTiles();
    });

Raphael.el.update_tiles = function(){
    var new_colr = Math.floor((Math.random()*17)+1);
    this.stop().animate({fill: colours[new_colr] }, 100);
};

function updateColor() {
    var numoftiles = tilesholder.length;
    var rand_tile = Math.floor((Math.random()*(numoftiles-1)));
    tilesholder[rand_tile].update_tiles();
};

setInterval(function(){updateColor()},10);