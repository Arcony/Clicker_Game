var golds = 900000;
var spiders =
    {
        nameSingle : "spider",
        nameSinglePrettify : "Spider",
        namePrettify : "Spiders",
        name : "spiders",
        number : 0,
        profit : 0.1,
        efficiency : 1,
        efficiencyMax : 25,
        nextCost : 15,
        nextTileCost : 15,
        nextEffCost : 50,
        unlock: true,
        unlockCost:10,
        tile:1,
        tileMax:5,
        timer:2,
        tileActive : [ false , false , false , false , false , false],
    }

var skeletons = {
    nameSinglePrettify : "Skeleton",
    nameSingle : "skeleton",
    namePrettify : "Skeletons",
    name : "skeletons",
    number : 0,
    profit : 1,
    efficiency : 1,
    efficiencyMax : 25,
    nextCost : 100,
    nextTileCost : 15,
    nextEffCost : 500,
    unlock : false,
    unlockCost:200,
    tile:1,
    tileMax:3,
    timer:5,
    tileActive : [ false , false , false , false],
}

var goblins = {
    nameSinglePrettify : "Goblin",
    nameSingle : "goblin",
    namePrettify : "Goblins",
    name : "goblins",
    number : 0,
    profit : 8,
    efficiency : 1,
    efficiencyMax : 25,
    nextCost : 1000,
    nextTileCost : 15,
    nextEffCost : 5000,
    unlock : false,
    unlockCost:2000,
    tile:1,
    tileMax:5,
    timer:8,
    tileActive : [ false , false , false , false , false , false],
}

var zombies = {
    nameSinglePrettify : "Zombie",
    nameSingle : "zombie",
    namePrettify : "Zombies",
    name : "zombies",
    number : 0,
    profit : 16,
    efficiency : 1,
    efficiencyMax : 25,
    nextCost : 15000,
    nextTileCost : 15,
    nextEffCost : 50000,
    unlock : false,
    unlockCost:20000,
    tile:1,
    tileMax:5,
    timer:12,
    tileActive : [ false , false , false , false , false , false],
}

var liches = {
    nameSinglePrettify : "Liche",
    nameSingle : "liche",
    namePrettify : "Liches",
    name : "liches",
    number : 0,
    profit : 32,
    efficiency : 1,
    efficiencyMax : 25,
    nextCost : 150000,
    nextTileCost : 15,
    nextEffCost : 500000,
    unlock : false,
    unlockCost:200000,
    tile:1,
    tileMax:5,
    timer:25,
    tileActive : [ false , false , false , false , false , false],
}

var monsterTab = [ spiders , skeletons , goblins , zombies , liches ];



var prestige = 0;
var FPS=60;
function Save()
{
    var save = {

        golds: golds,
        spiders : {
            number : spiders.number,
            profit : spiders.profit,
            efficiency : spiders.efficiency,
            efficiencyMax : spiders.efficiencyMax,
            nextCost : spiders.nextCost,
            nextEffCost : spiders.nextEffCost,
            unlock : spiders.unlock,
            tile : spiders.tile,
            nextTileCost : spiders.nextTileCost,
        },
        skeletons : {
            number : skeletons.number,
            profit : skeletons.profit,
            efficiency : skeletons.efficiency,
            efficiencyMax : skeletons.efficiencyMax,
            nextCost : skeletons.nextCost,
            nextEffCost : skeletons.nextEffCost,
            unlock : skeletons.unlock,
            tile : skeletons.tile,
            nextTileCost : skeletons.nextTileCost,
        },
        goblins : {
            number : goblins.number,
            profit : goblins.profit,
            efficiency : goblins.efficiency,
            efficiencyMax : goblins.efficiencyMax,
            nextCost : goblins.nextCost,
            nextEffCost : goblins.nextEffCost,
            unlock : goblins.unlock,
            tile : goblins.tile,
            nextTileCost : goblins.nextTileCost,
        },
        zombies : {
            number : zombies.number,
            profit : zombies.profit,
            efficiency : zombies.efficiency,
            efficiencyMax : zombies.efficiencyMax,
            nextCost : zombies.nextCost,
            nextEffCost : zombies.nextEffCost,
            unlock : zombies.unlock,
            tile : zombies.tile,
            nextTileCost : zombies.nextTileCost,
        },
        liches : {
            number : liches.number,
            profit : liches.profit,
            efficiency : liches.efficiency,
            efficiencyMax : liches.efficiencyMax,
            nextCost : liches.nextCost,
            nextEffCost : liches.nextEffCost,
            unlock : liches.unlock,
            tile : liches.tile,
            nextTileCost : liches.nextTileCost,
        },


        prestige: prestige,
    }
    localStorage.setItem("save",JSON.stringify(save));
}

function Delete()
{
    localStorage.removeItem("save")
}

function load()
{
    var saved = JSON.parse(localStorage.getItem("save"));

    if(saved)
    {
        monsterTab.forEach(function(element) {

            if(saved[element.name]) {
                if (typeof saved[element.name].number !== "undefined") element.number = saved[element.name].number;
               // if (typeof saved[element.name].nextCost !== "undefined") element.nextCost = saved[element.name].nextCost;
                if (typeof saved[element.name].efficiency !== "undefined") element.efficiency = saved[element.name].efficiency;
                if (typeof saved[element.name].nextEffCost !== "undefined") element.nextEffCost = saved[element.name].nextEffCost;
                if (typeof saved[element.name].unlock !== "undefined") element.unlock = saved[element.name].unlock;
                if (typeof saved[element.name].tile !== "undefined") element.tile = saved[element.name].tile;
                if (typeof saved[element.name].nextTileCost !== "undefined") element.nextTileCost = saved[element.name].nextTileCost;
            }
            else
            {
                console.log("new contenu");
            }
        });

        if (typeof saved.golds !== "undefined") golds = saved.golds;
        document.getElementById('golds').innerHTML = prettify(golds);
        monsterTab.forEach(function(element) {

            if( element.unlock )
            {
                var divrow = '<div class="row" id= "'+element.nameSingle+'Div">';
                var div1 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div1">';
                var div2 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div2">';
                var div3 = '<div class="col-lg-4" id= "'+element.nameSingle+'Div3">';
                var div4 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div4">';
                var div5 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div5">';

                var btn1 = '<button id="btnBuy'+element.namePrettify+'" class="btn btn-primary btn-lg extra-lg" onclick="buyMonster('+element.name+')">Buy '+element.nameSinglePrettify+' </button>';
                var btn2 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible" id='+element.name+'Unlock onclick=unlock('+element.name+')> Unlock '+element.namePrettify+' <br/>'+element.unlockCost+' golds  </button>';
                var btn3 = '<button class="btn btn-info btn-lg extra-lg espacebottom " id='+element.name+'EffUp onclick=upEff('+element.name+')> Upgrade '+element.namePrettify+' <br/>'+element.nextEffCost+' golds</button> ';
                var btn4 = '<button class="btn btn-info btn-lg extra-lg espacebottom " id="buyTile'+element.name+'" onclick=buyTile('+element.name+')> Buy Tile for '+element.namePrettify+' <br/>'+element.nextTileCost+' golds</button> ';
                var test = '<br /><img src="piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span>';
                $('#btnBuy'+element.namePrettify+'').append(test);
                $('#container').append(divrow);
                $('#'+element.nameSingle+'Div').append(div1);
                $('#'+element.nameSingle+'Div1').append(btn1);
                $('#'+element.nameSingle+'Div').append(div2);
                $('#'+element.nameSingle+'Div').append(div3);
                $('#'+element.nameSingle+'Div').append(div4);
                $('#'+element.nameSingle+'Div').append(div5);
                $('#'+element.nameSingle+'Div5').append(btn3);
                $('#'+element.nameSingle+'Div4').append(btn4);
                $('#'+element.nameSingle+'Div5').append(btn2);
                var test = '<br /><img src="piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span> ';
                $('#btnBuy'+element.namePrettify+'').append(test);
                for(var i=1 ; i < element.tileMax+1 ; i++)
                {
                    if(element.tile < i)
                    {
                        var elemTile1 = '<div class="tile invisible" onclick="buyMonster('+element.name+')" id="'+element.nameSingle+'Tile'+i+'"><div id='+element.nameSingle+'TileBar'+i+'  class="myBar"><div id ='+element.nameSingle+'Tiletext'+i+' class="labely padding_label">'+element.timer+' </div> </div></div>';
                        $('#'+element.nameSingle+'Div3').append(elemTile1);
                    }
                    else {
                        var elemTile2 = '<div class="tile" onclick="buyMonster(' + element.name + ')" id="' + element.nameSingle + 'Tile' + i + '"><div id=' + element.nameSingle + 'TileBar' + i + '  class="myBar"><div id =' + element.nameSingle + 'Tiletext' + i + ' class="labely padding_label">' + element.timer + ' </div> </div></div>';
                        $('#' + element.nameSingle + 'Div3').append(elemTile2);
                    }
                }
            }
            else
            {
                var divrow = '<div class="row" id= "'+element.nameSingle+'Div">';
                var div1 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div1">';
                var div2 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div2">';
                var div3 = '<div class="col-lg-4" id= "'+element.nameSingle+'Div3">';
                var div4 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div4">';
                var div5 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div5">';

                var btn1 = '<button id="btnBuy'+element.namePrettify+'" class="btn btn-primary btn-lg extra-lg" onclick="buyMonster('+element.name+')">Buy '+element.nameSinglePrettify+' </button>';
                var btn2 = '<button class="btn btn-info btn-lg extra-lg espacebottom " id='+element.name+'Unlock onclick=unlock('+element.name+')> Unlock '+element.namePrettify+' <br/>'+element.unlockCost+' golds  </button>';
                var btn3 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible" id='+element.name+'EffUp onclick=upEff('+element.name+')> Upgrade '+element.namePrettify+' <br/>'+element.nextEffCost+' golds</button> ';
                var btn4 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible" id="buyTile'+element.name+'" onclick=buyTile('+element.name+')> Buy Tile for '+element.namePrettify+' <br/>'+element.nextTileCost+' golds</button> ';
                var test = '<br /><img src="piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span>';
                $('#btnBuy'+element.namePrettify+'').append(test);
                $('#container').append(divrow);
                $('#'+element.nameSingle+'Div').append(div1);
                $('#'+element.nameSingle+'Div1').append(btn1);
                $('#'+element.nameSingle+'Div').append(div2);
                $('#'+element.nameSingle+'Div').append(div3);
                $('#'+element.nameSingle+'Div').append(div4);
                $('#'+element.nameSingle+'Div').append(div5);
                $('#'+element.nameSingle+'Div5').append(btn3);
                $('#'+element.nameSingle+'Div4').append(btn4);
                $('#'+element.nameSingle+'Div5').append(btn2);
                var test = '<br /><img src="piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span> ';
                $('#btnBuy'+element.namePrettify+'').append(test);
                for(var i=1 ; i < element.tileMax+1 ; i++)
                {


                        var elemTile1 = '<div class="tile invisible" onclick="buyMonster('+element.name+')" id="'+element.nameSingle+'Tile'+i+'"><div id='+element.nameSingle+'TileBar'+i+'  class="myBar"><div id ='+element.nameSingle+'Tiletext'+i+' class="labely padding_label">'+element.timer+' </div> </div></div>';
                        $('#'+element.nameSingle+'Div3').append(elemTile1);


                }
            }

        });
    }
    else
    {
        document.getElementById('golds').innerHTML = prettify(golds);
        monsterTab.forEach(function(element) {

            if( element.unlock )
            {
                var divrow = '<div class="row" id= "'+element.nameSingle+'Div">';
                var div1 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div1">';
                var div2 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div2">';
                var div3 = '<div class="col-lg-4" id= "'+element.nameSingle+'Div3">';
                var div4 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div4">';
                var div5 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div5">';

                var btn1 = '<button id="btnBuy'+element.namePrettify+'" class="btn btn-primary btn-lg extra-lg" onclick="buyMonster('+element.name+')">Buy '+element.nameSinglePrettify+' </button>';
                var btn2 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible" id='+element.name+'Unlock onclick=unlock('+element.name+')> Unlock '+element.namePrettify+' <br/>'+element.unlockCost+' golds  </button>';
                var btn3 = '<button class="btn btn-info btn-lg extra-lg espacebottom " id='+element.name+'EffUp onclick=upEff('+element.name+')> Upgrade '+element.namePrettify+' <br/>'+element.nextEffCost+' golds</button> ';
                var btn4 = '<button class="btn btn-info btn-lg extra-lg espacebottom " id="buyTile'+element.name+'" onclick=buyTile('+element.name+')> Buy Tile for '+element.namePrettify+' <br/>'+element.nextTileCost+' golds</button> ';
                var test = '<br /><img src="piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span>';
                $('#btnBuy'+element.namePrettify+'').append(test);
                $('#container').append(divrow);
                $('#'+element.nameSingle+'Div').append(div1);
                $('#'+element.nameSingle+'Div1').append(btn1);
                $('#'+element.nameSingle+'Div').append(div2);
                $('#'+element.nameSingle+'Div').append(div3);
                $('#'+element.nameSingle+'Div').append(div4);
                $('#'+element.nameSingle+'Div').append(div5);
                $('#'+element.nameSingle+'Div5').append(btn3);
                $('#'+element.nameSingle+'Div4').append(btn4);
                $('#'+element.nameSingle+'Div5').append(btn2);
                var test = '<br /><img src="piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span> ';
                $('#btnBuy'+element.namePrettify+'').append(test);
                for(var i=1 ; i < element.tileMax+1 ; i++)
                {
                    if(element.tile < i)
                    {
                        var elemTile1 = '<div class="tile invisible" onclick="buyMonster('+element.name+')" id="'+element.nameSingle+'Tile'+i+'"><div id='+element.nameSingle+'TileBar'+i+'  class="myBar"><div id ='+element.nameSingle+'Tiletext'+i+' class="labely padding_label">'+element.timer+' </div> </div></div>';
                        $('#'+element.nameSingle+'Div3').append(elemTile1);
                    }
                    else {
                        var elemTile2 = '<div class="tile" onclick="buyMonster(' + element.name + ')" id="' + element.nameSingle + 'Tile' + i + '"><div id=' + element.nameSingle + 'TileBar' + i + '  class="myBar"><div id =' + element.nameSingle + 'Tiletext' + i + ' class="labely padding_label">' + element.timer + ' </div> </div></div>';
                        $('#' + element.nameSingle + 'Div3').append(elemTile2);
                    }
                }

            }
            else
            {
                var divrow = '<div class="row" id= "'+element.nameSingle+'Div">';
                var div1 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div1">';
                var div2 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div2">';
                var div3 = '<div class="col-lg-4" id= "'+element.nameSingle+'Div3">';
                var div4 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div4">';
                var div5 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div5">';

                var btn1 = '<button id="btnBuy'+element.namePrettify+'" class="btn btn-primary btn-lg extra-lg" onclick="buyMonster('+element.name+')">Buy '+element.nameSinglePrettify+' </button>';
                var btn2 = '<button class="btn btn-info btn-lg extra-lg espacebottom " id='+element.name+'Unlock onclick=unlock('+element.name+')> Unlock '+element.namePrettify+' <br/>'+element.unlockCost+' golds  </button>';
                var btn3 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible" id='+element.name+'EffUp onclick=upEff('+element.name+')> Upgrade '+element.namePrettify+' <br/>'+element.nextEffCost+' golds</button> ';
                var btn4 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible" id="buyTile'+element.name+'" onclick=buyTile('+element.name+')> Buy Tile for '+element.namePrettify+' <br/>'+element.nextTileCost+' golds</button> ';
                var test = '<br /><img src="piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span>';
                $('#btnBuy'+element.namePrettify+'').append(test);
                $('#container').append(divrow);
                $('#'+element.nameSingle+'Div').append(div1);
                $('#'+element.nameSingle+'Div1').append(btn1);
                $('#'+element.nameSingle+'Div').append(div2);
                $('#'+element.nameSingle+'Div').append(div3);
                $('#'+element.nameSingle+'Div').append(div4);
                $('#'+element.nameSingle+'Div').append(div5);
                $('#'+element.nameSingle+'Div5').append(btn3);
                $('#'+element.nameSingle+'Div4').append(btn4);
                $('#'+element.nameSingle+'Div5').append(btn2);
                var test = '<br /><img src="piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span> ';
                $('#btnBuy'+element.namePrettify+'').append(test);
                for(var i=1 ; i < element.tileMax+1 ; i++)
                {

                        var elemTile1 = '<div class="tile invisible" onclick="buyMonster('+element.name+')" id="'+element.nameSingle+'Tile'+i+'"><div id='+element.nameSingle+'TileBar'+i+'  class="myBar"><div id ='+element.nameSingle+'Tiletext'+i+' class="labely padding_label">'+element.timer+' </div> </div></div>';
                        $('#'+element.nameSingle+'Div3').append(elemTile1);


                }
            }

        });
    }


}

function prettify(input){

    var output = Math.round(input);

    return output;
}


function downPrice(monster)
{

    var nextCost =  monster.nextCost / 1.2;       //works out the cost of the next spider

    document.getElementById(monster.name+'Cost').innerHTML = prettify(nextCost);  //updates the spider cost for the user
    monster.nextCost = nextCost;
}


function upEff(monster)
{
    if(golds > monster.nextEffCost)
    {
        if(monster.efficiency<monster.efficiencyMax)
        {
            golds = golds - monster.nextEffCost;
            monster.efficiency=monster.efficiency+0.5;
            monster.nextEffCost=monster.nextEffCost*2;
            document.getElementById(monster.name+"EffUp").innerHTML = "Upgrade "+monster.namePrettify+" <br />"+ prettify(monster.nextEffCost)+" golds";
            document.getElementById("golds").innerHTML = prettify(golds)
        }

    }
}

function downEff(monster)
{

    if(monster.efficiency>1)
    {
        monster.efficiency=monster.efficiency-0.5;
        monster.nextEffCost=monster.nextEffCost/2;
        document.getElementById(monster.name+"EffUp").innerHTML = "Upgrade "+monster.namePrettify+" <br />"+ prettify(monster.nextEffCost)+" golds";
    }


}



function killMonster(monster , Nb)
{
    if(monster.number > 0)
    {

        for( var i=0 ; i<Nb ; i++)
        {
            monster.number--;
            downPrice(monster);
        }
        if(monster.number < 0)
        {
            monster.number = 0;
        }
        document.getElementById(monster.name).innerHTML = monster.number;
    }
}


function unlock(monster){
    if(golds >= monster.unlockCost)
    {
        monster.unlock = true;
        golds = golds - monster.unlockCost;

        $('#'+monster.name+'Unlock').addClass("invisible");
        $('#'+monster.name+'EffUp').removeClass("invisible");
        $('#btnBuy'+monster.namePrettify+'').removeClass("invisible");
        $('#buyTile'+monster.name+'').removeClass("invisible");
        $('#'+monster.nameSingle+'Tile1').removeClass("invisible");
        document.getElementById('golds').innerHTML = prettify(golds);

    }
}
function monsterClick(number){
    golds = golds + number;
    document.getElementById("golds").innerHTML = prettify(golds)

};


function progress(elem , text , timerMonster , monster , temp)
{


    var timer = 0,
        perc = 0,
        timeTotal = timerMonster,
        timeCount = 1000;
        animateUpdate();
    $('#'+text+'').removeClass("padding_label");

function updateProgress(percentage)
{
    var x = (percentage/timeTotal)*100,
        y = x.toFixed(0);
    $('#'+elem+'').css("width", x + "%");
    $('#'+text+'').text(y + "%");


}

function animateUpdate() {

    if(perc < timeTotal) {


        perc++;
        updateProgress(perc);
        timer = setTimeout(animateUpdate, timeCount);
    }
    else
    {
            $('#'+elem+'').css("width", 0 + "%");
            $('#'+text+'').text(monster.timer);
        goldWin(monster);
        $('#'+text+'').addClass("padding_label");
        monster.tileActive[temp]=false;
    }
}
}

function goldWin(monster)
{
    golds = golds + (monster.profit*monster.efficiency);
    document.getElementById("golds").innerHTML = prettify(golds);

    downPrice(monster);

}

function buyMonster(monster)
{

    if(monster.unlock) {
        if (golds >= monster.nextCost) {

            var temp = checkFirstTileActive(monster);

            if (temp >= 0) {

                monster.tileActive[temp] = true;
                progress("" + monster.nameSingle + 'TileBar' + temp, "" + monster.nameSingle + "Tiletext" + temp + "", monster.timer, monster, temp);
                golds = golds - monster.nextCost;
                document.getElementById("golds").innerHTML = prettify(golds);
                var nextCost = monster.nextCost * 1.2;       //works out the cost of the next spider
                document.getElementById(monster.name + 'Cost').innerHTML = prettify(nextCost);  //updates the spider cost for the user
                monster.nextCost = nextCost;
            }
        }
    }
}

function checkFirstTileActive(monster)
{
    for( var i=1 ; i <= monster.tile ; i++ )
    {
        console.log(i);
        console.log(monster.tileActive[i]);
        if( monster.tileActive[i] == false )
        {
            console.log("Tile Active false = "+i);
            return i;
        }
    }
}

function buyTile(monster)
{
    if( monster.tile < monster.tileMax)
    {
        if(golds >= monster.nextCost)
        {
            golds = golds - monster.nextCost;
            document.getElementById("golds").innerHTML = prettify(golds)
            var temp = monster.tile+1;

            $('#'+monster.nameSingle+'Tile'+temp+'').removeClass("invisible");
            monster.tile++;

            console.log("You Unlocked Tile N°"+temp+" Of"+monster.name);

        }
    }
}
