var golds = 99999;
var dateA= new Date();
var dateFile = dateA.getMonth()+"/"+dateA.getDate() +"/"+dateA.getFullYear();
console.log(dateFile);

var spiders =
    {
        nameSingle : "spider",
        nameSinglePrettify : "Spider",
        namePrettify : "Spiders",
        name : "spiders",
        number : 0,
        profit : 1,
        efficiency : 1,
        efficiencyMax : 25,
        nextCost : 0,
        nextTileCost : 15,
        nextEffCost : 50,
        unlock: true,
        unlockCost:10,
        tile:1,
        tileMax:5,
        timer:2,
        tileActive : [ false , false , false , false , false , false],
        shortcut : "S"
    };

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
    shortcut : "K"
};

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
    shortcut : "G"
};

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
    shortcut : "Z"
};

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
    shortcut : "L"
};

var monsterTab = [ spiders , skeletons , goblins , zombies , liches ];



var prestige = 0;
var FPS=60;

function Save()
{
    var dateB = new Date();
    dateB = dateB.getMonth()+"/"+dateB.getDate() +"/"+dateB.getFullYear();
    console.log(dateB);
    var save = {

        golds: golds,
        dateSaved: dateB,
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
            shortcut: spiders.shortcut,
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
                shortcut: skeletons.shortcut,
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
            shortcut: goblins.shortcut,
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
            shortcut: zombies.shortcut,
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
            shortcut: liches.shortcut,
        },


        prestige: prestige,
    }
    console.log("save.dateSaved = "+save.dateSaved);
    localStorage.setItem("save",JSON.stringify(save));
}

function Delete()
{
    localStorage.removeItem("save")
}
/*##########################################################Load######*/

function load()
{
    var saved = JSON.parse(localStorage.getItem("save"));

    if(saved)
    {

            var date1 = new Date(saved.dateSaved);
            var date2 = new Date(dateFile);
            if(compareDate(date1 , date2) > 0)
            {
                console.log("New Day");
                $('#ModalDay').modal('show')
            }




        monsterTab.forEach(function(element) {

            if(saved[element.name]) {
                if (typeof saved[element.name].number !== "undefined") element.number = saved[element.name].number;
               // if (typeof saved[element.name].nextCost !== "undefined") element.nextCost = saved[element.name].nextCost;
                if (typeof saved[element.name].efficiency !== "undefined") element.efficiency = saved[element.name].efficiency;
                if (typeof saved[element.name].nextEffCost !== "undefined") element.nextEffCost = saved[element.name].nextEffCost;
                if (typeof saved[element.name].unlock !== "undefined") element.unlock = saved[element.name].unlock;
                if (typeof saved[element.name].tile !== "undefined") element.tile = saved[element.name].tile;
                if (typeof saved[element.name].nextTileCost !== "undefined") element.nextTileCost = saved[element.name].nextTileCost;
                if (typeof saved[element.name].shortcut !== "undefined") element.shortcut = saved[element.name].shortcut;
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

                var btn1 = '<button id="btnBuy'+element.namePrettify+'" class="btn btn-primary btn-lg extra-lg col-lg-12" onclick="buyMonster('+element.name+')"> Hire '+element.nameSinglePrettify+'       <span id="Shortcut'+element.name+'">( '+element.shortcut+' )</span> </button>';
                var btn2 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible col-lg-12" id='+element.name+'Unlock onclick=unlock('+element.name+')> Unlock '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20"> <span id="'+element.name+'unlockCost"> '+element.unlockCost+'</span></button>';
                var btn3 = '<button class="btn btn-info btn-lg extra-lg espacebottom col-lg-12 " id='+element.name+'EffUp onclick=upEff('+element.name+')> Upgrade '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'EffCost"> '+element.nextEffCost+'</span></button>';
                var btn4 = '<button class="btn btn-info btn-lg extra-lg espacebottom col-lg-12" id="buyTile'+element.name+'" onclick=buyTile('+element.name+')> Buy Tile for '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20"><span id="'+element.name+'TileCost"> '+element.nextTileCost+'</span></button>';
                var test = '<br /><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span>';

                /*#####################################*/
               /*##########SHORTCUT##################*/
               /*#####################################*/
               if(element.unlock)
                var shortcutrow =  '<div class="row" id= "'+element.name+'DivShortcut"></div>';
                var div1shortcut = '<div class="col-lg-6" id= "'+element.name+'DivShortcut1"> Hire '+element.namePrettify+' : </div>';
                var div2shortcut = '<div class="col-lg-3" id= "'+element.name+'DivShortcut2"></div>';
                var div3shortcut = '<div class="col-lg-3" id= "'+element.name+'DivShortcut3"></div>';
                var btnShortcut = '<input type="text" class="form-control" value="'+element.shortcut+'" maxlength="1" id="shortcut'+element.name+'">';

                $('#modalbody').append(shortcutrow);
                $('#'+element.name+'DivShortcut').append(div1shortcut , div2shortcut , div3shortcut );
                $('#'+element.name+'DivShortcut3').append(btnShortcut);

                /*#####################################*/
                /*##########SHORTCUT##################*/
                /*#####################################*/




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
                var test = '<br /><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span> ';
                $('#btnBuy'+element.namePrettify+'').append(test);
                for(var i=1 ; i < element.tileMax+1 ; i++)
                {
                    if(element.tile < i)
                    {
                        var elemTile1 = '<div class="tile invisible" onclick="buyMonster('+element.name+')" id="'+element.nameSingle+'TileDiv'+i+'"></div>';
                        $('#'+element.nameSingle+'Div3').append(elemTile1);
                    }
                    else {
                        var elemTile2 = '<div class="tile" onclick="buyMonster(' + element.name + ')" id="' + element.nameSingle + 'TileDiv' + i + '"></div>';
                        $('#' + element.nameSingle + 'Div3').append(elemTile2);
                    }
                }
            // <div id=' + element.nameSingle + 'TileBar' + i + '  class="myBar"><div id =' + element.nameSingle + 'Tiletext' + i + ' class="labely padding_label">' + element.timer + ' </div> </div>
            }
            else
            {
                var divrow = '<div class="row" id= "'+element.nameSingle+'Div">';
                var div1 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div1">';
                var div2 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div2">';
                var div3 = '<div class="col-lg-4" id= "'+element.nameSingle+'Div3">';
                var div4 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div4">';
                var div5 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div5">';

                var btn1 = '<button id="btnBuy'+element.namePrettify+'" class="btn btn-primary btn-lg extra-lg col-lg-12" onclick="buyMonster('+element.name+')">Hire '+element.nameSinglePrettify+'        <span id="Shortcut'+element.name+'">( '+element.shortcut+' )</span></button>';
                var btn2 = '<button class="btn btn-info btn-lg extra-lg espacebottom col-lg-12 " id='+element.name+'Unlock onclick=unlock('+element.name+')> Unlock '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20"> <span id="'+element.name+'unlockCost"> '+element.unlockCost+'</span></button>';
                var btn3 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible col-lg-12 " id='+element.name+'EffUp onclick=upEff('+element.name+')> Upgrade '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'EffCost"> '+element.nextEffCost+'</span></button>';
                var btn4 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible col-lg-12 " id="buyTile'+element.name+'" onclick=buyTile('+element.name+')> Buy Tile for '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20"><span id="'+element.name+'TileCost"> '+element.nextTileCost+'</span></button>';
                var test = '<br /><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span>';
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
                var test = '<br /><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span> ';
                $('#btnBuy'+element.namePrettify+'').append(test);
                for(var i=1 ; i < element.tileMax+1 ; i++)
                {


                        var elemTile1 = '<div class="tile invisible" onclick="buyMonster('+element.name+')" id="'+element.nameSingle+'TileDiv'+i+'"></div>';
                        $('#'+element.nameSingle+'Div3').append(elemTile1);


                }
                /*#####################################*/
                /*##########SHORTCUT##################*/
                /*#####################################*/

                var shortcutrow =  '<div class="row invisible" id= "'+element.name+'DivShortcut"></div>';
                var div1shortcut = '<div class="col-lg-6" id= "'+element.name+'DivShortcut1"> Hire '+element.namePrettify+' : </div>';
                var div2shortcut = '<div class="col-lg-3" id= "'+element.name+'DivShortcut2"></div>';
                var div3shortcut = '<div class="col-lg-3" id= "'+element.name+'DivShortcut3"></div>';
                var btnShortcut = '<input type="text" class="form-control" value="'+element.shortcut+'" id="shortcut'+element.name+'">';

                $('#modalbody').append(shortcutrow);
                $('#'+element.name+'DivShortcut').append(div1shortcut , div2shortcut , div3shortcut );
                $('#'+element.name+'DivShortcut3').append(btnShortcut);

                /*#####################################*/
                /*##########SHORTCUT##################*/
                /*#####################################*/

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

                var btn1 = '<button id="btnBuy'+element.namePrettify+'" class="btn btn-primary btn-lg extra-lg col-lg-12" onclick="buyMonster('+element.name+')">Hire '+element.nameSinglePrettify+'        <span id="Shortcut'+element.name+'">( '+element.shortcut+' )</span></button>';
                var btn2 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible col-lg-12" id='+element.name+'Unlock onclick=unlock('+element.name+')> Unlock '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20"> <span id="'+element.name+'unlockCost"> '+element.unlockCost+'</span></button>';
                var btn3 = '<button class="btn btn-info btn-lg extra-lg espacebottom col-lg-12" id='+element.name+'EffUp onclick=upEff('+element.name+')> Upgrade '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20"> <span id="'+element.name+'EffCost"> '+element.nextEffCost+'</span></button>';
                var btn4 = '<button class="btn btn-info btn-lg extra-lg espacebottom col-lg-12" id="buyTile'+element.name+'" onclick=buyTile('+element.name+')> Buy Tile for '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20"> <span id="'+element.name+'TileCost"> '+element.nextTileCost+'</span></button>';
                var test = '<br /><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span>';
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
                var test = '<br /><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span> ';
                $('#btnBuy'+element.namePrettify+'').append(test);
                for(var i=1 ; i < element.tileMax+1 ; i++)
                {
                    if(element.tile < i)
                    {
                        var elemTile1 = '<div class="tile invisible" onclick="buyMonster('+element.name+')" id="'+element.nameSingle+'TileDiv'+i+'"></div>';
                        $('#'+element.nameSingle+'Div3').append(elemTile1);
                    }
                    else {
                        var elemTile2 = '<div class="tile" onclick="buyMonster(' + element.name + ')" id="' + element.nameSingle + 'TileDiv' + i + '"></div>';
                        $('#' + element.nameSingle + 'Div3').append(elemTile2);
                    }
                }
                /*#####################################*/
                /*##########SHORTCUT##################*/
                /*#####################################*/

                var shortcutrow =  '<div class="row" id= "'+element.name+'DivShortcut"></div>';
                var div1shortcut = '<div class="col-lg-6" id= "'+element.name+'DivShortcut1"> Hire '+element.namePrettify+' : </div>';
                var div2shortcut = '<div class="col-lg-3" id= "'+element.name+'DivShortcut2"></div>';
                var div3shortcut = '<div class="col-lg-3" id= "'+element.name+'DivShortcut3"></div>';
                var btnShortcut = '<input type="text" class="form-control" value="'+element.shortcut+'" id="shortcut'+element.name+'">';

                $('#modalbody').append(shortcutrow);
                $('#'+element.name+'DivShortcut').append(div1shortcut , div2shortcut , div3shortcut );
                $('#'+element.name+'DivShortcut3').append(btnShortcut);

                /*#####################################*/
                /*##########SHORTCUT##################*/
                /*#####################################*/


            }
            else
            {
                var divrow = '<div class="row" id= "'+element.nameSingle+'Div">';
                var div1 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div1">';
                var div2 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div2">';
                var div3 = '<div class="col-lg-4" id= "'+element.nameSingle+'Div3">';
                var div4 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div4">';
                var div5 = '<div class="col-lg-2" id= "'+element.nameSingle+'Div5">';

                var btn1 = '<button id="btnBuy'+element.namePrettify+'" class="btn btn-primary btn-lg extra-lg  col-lg-12" onclick="buyMonster('+element.name+')">Hire '+element.nameSinglePrettify+'        <span id="Shortcut'+element.name+'">( '+element.shortcut+' )</span></button>';
                var btn2 = '<button class="btn btn-info btn-lg extra-lg espacebottom col-lg-12" id='+element.name+'Unlock onclick=unlock('+element.name+')> Unlock '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20"> <span id="'+element.name+'unlockCost"> '+element.unlockCost+'</span></button>';
                var btn3 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible col-lg-12" id='+element.name+'EffUp onclick=upEff('+element.name+')> Upgrade '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'EffCost"> '+element.nextEffCost+'</span></button>';
                var btn4 = '<button class="btn btn-info btn-lg extra-lg espacebottom invisible col-lg-12" id="buyTile'+element.name+'" onclick=buyTile('+element.name+')> Buy Tile for '+element.namePrettify+' <br/><img src="Image/piece.png" alt="golds" height="20" width="20"><span id="'+element.name+'TileCost"> '+element.nextTileCost+'</span></button>';
                var test = '<br /><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span>';
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
                var test = '<br /><img src="Image/piece.png" alt="golds" height="20" width="20">  <span id="'+element.name+'Cost">'+element.nextCost+'</span> ';
                $('#btnBuy'+element.namePrettify+'').append(test);
                for(var i=1 ; i < element.tileMax+1 ; i++)
                {

                        var elemTile1 = '<div class="tile invisible" onclick="buyMonster('+element.name+')" id="'+element.nameSingle+'TileDiv'+i+'"></div>';
                        $('#'+element.nameSingle+'Div3').append(elemTile1);



                }
                /*#####################################*/
                /*##########SHORTCUT##################*/
                /*#####################################*/

                var shortcutrow =  '<div class="row invisible" id= "'+element.name+'DivShortcut"></div>';
                var div1shortcut = '<div class="col-lg-6" id= "'+element.name+'DivShortcut1"> Hire '+element.namePrettify+' : </div>';
                var div2shortcut = '<div class="col-lg-3" id= "'+element.name+'DivShortcut2"></div>';
                var div3shortcut = '<div class="col-lg-3" id= "'+element.name+'DivShortcut3"></div>';
                var btnShortcut = '<input type="text" class="form-control" value="'+element.shortcut+'" id="shortcut'+element.name+'">';

                $('#modalbody').append(shortcutrow);
                $('#'+element.name+'DivShortcut').append(div1shortcut , div2shortcut , div3shortcut );
                $('#'+element.name+'DivShortcut3').append(btnShortcut);

                /*#####################################*/
                /*##########SHORTCUT##################*/
                /*#####################################*/
            }

        });
    }

    shortcut.add( spiders.shortcut ,function() {
        buyMonster(spiders);
    });

    shortcut.add(skeletons.shortcut,function() {
        buyMonster(skeletons);
    });
    shortcut.add(goblins.shortcut,function() {
        buyMonster(goblins);
    });
    shortcut.add(zombies.shortcut,function() {
        buyMonster(zombies);
    });
    shortcut.add(liches.shortcut ,function() {
        buyMonster(liches);
    });
}

/*##################################################################################*/
/*#######################################LOADED###################################*/
/*##################################################################################*/





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
            document.getElementById(monster.name+"EffCost").innerHTML = ""+prettify(monster.nextEffCost)+"";
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
        document.getElementById(monster.name+"EffUp").innerHTML = "Upgrade "+monster.namePrettify+" <br />"+ prettify(monster.nextEffCost);
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
        $('#'+monster.nameSingle+'TileDiv1').removeClass("invisible");
        $('#'+monster.name+'DivShortcut').removeClass("invisible");
        document.getElementById('golds').innerHTML = prettify(golds);
        $('#' + monster.nameSingle + 'Div4').addClass("col-lg-2");
        $('#' + monster.nameSingle + 'Div3').removeClass("col-lg-6");
        $('#' + monster.nameSingle + 'Div3').addClass("col-lg-4");

    }
}
function monsterClick(number){
    golds = golds + number;
    document.getElementById("golds").innerHTML = prettify(golds)

};



function goldWin(monster , tempCost , temp)
{
    if(monster.tileMax == temp)
        golds = golds + (tempCost + (monster.profit*2) * monster.efficiency );
    else
        golds = golds + (tempCost + monster.profit * monster.efficiency );
    document.getElementById("golds").innerHTML = prettify(golds);

    downPrice(monster);

}

function buyMonster(monster)
{
    var tempCost=monster.nextCost;
    if(monster.unlock) {
        if (golds >= monster.nextCost) {

            var temp = checkFirstTileActive(monster);

            if (temp >= 0) {

                monster.tileActive[temp] = true;
                animation("" + monster.nameSingle + 'TileDiv' + temp, monster.timer, monster, temp ,tempCost);
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
        if(golds >= monster.nextTileCost)
        {
            golds = golds - monster.nextTileCost;
            document.getElementById("golds").innerHTML = prettify(golds)
            var temp = monster.tile+1;
            console.log(temp);
            $('#'+monster.nameSingle+'TileDiv'+temp+'').removeClass("invisible");
            monster.tile++;

            console.log("You Unlocked Tile N°"+temp+" Of"+monster.name);
            if(monster.tile == monster.tileMax)
            {
                $('#buyTile'+monster.name+'').addClass("invisible");
            }
        }
    }

}


function animation(elem , timerMonster , monster , temp , tempCost)
{
    var tile =  document.getElementById(elem);
    var bar = new ProgressBar.Circle(tile, {
        strokeWidth: 50,
        easing: 'linear',
        duration: timerMonster*1000,
        color: '#4CAF50',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null,
    });

    bar.animate(1.0 , null , function (){
        bar.destroy();
        goldWin(monster , tempCost , temp);
        monster.tileActive[temp]=false;

    });  // Number from 0.0 to 1.0


}

/*###################AFFICHAGE##################*/
/*###################AFFICHAGE##################*/
/*###################AFFICHAGE##################*/


function engine()
{


    monsterTab.forEach(function(element) {

        var isVisible = $('#buyTile' + element.name + '').is(':visible');

        if (isVisible) {
            $('#' + element.nameSingle + 'Div4').addClass("col-lg-2");
            $('#' + element.nameSingle + 'Div3').removeClass("col-lg-6");
            $('#' + element.nameSingle + 'Div3').addClass("col-lg-4");


        }
        else {
            $('#' + element.nameSingle + 'Div4').removeClass("col-lg-2");
            $('#' + element.nameSingle + 'Div3').removeClass("col-lg-4");
            $('#' + element.nameSingle + 'Div3').addClass("col-lg-6");

        }


        if( golds < element.nextCost) {
            $('#btnBuy' + element.namePrettify + '').addClass("disabled grey");
        }
        else {
            $('#btnBuy' + element.namePrettify + '').removeClass("disabled grey");
        }

        if( golds < element.nextEffCost) {
            $('#' + element.name + 'EffUp').addClass("disabled grey");
        }
        else {
            $('#' + element.name + 'Effup').removeClass("disabled grey");
        }

        if( golds < element.nextTileCost) {
            $('#buyTiles' + element.name + '').addClass("disabled grey");
        }
        else {
            $('#buyTiles' + element.name + '').removeClass("disabled grey");
        }

        if( golds < element.unlockCost) {
            $('#' + element.name + 'Unlock').addClass("disabled grey");
        }
        else {
            $('#' + element.name + 'Unlock').removeClass("disabled grey");
        }

        if( !element.unlock )
        {
            $('#btnBuy' + element.namePrettify + '').addClass("invisible");
        }
        else
        {
            $('#btnBuy' + element.namePrettify + '').removeClass("invisible");
        }



            if ( element.tile == element.tileMax) {
                $('#buyTile' + element.name + '').addClass("invisible");
            }
            else {
                if(element.unlock) {
                    $('#buyTile' + element.name + '').removeClass("invisible");
                }
            }



    });




    setTimeout(engine,10);
}
    engine();
var date = new Date();
createCookie('Test1' ,'Je save mes données'+date+'' , 7);
var x = readCookie('Test1');
console.log(x);

/*###################AFFICHAGE##################*/
/*###################AFFICHAGE##################*/
/*###################AFFICHAGE##################*/





/*############MODAL##############*/
/*############MODAL##############*//*############MODAL##############*/
/*############MODAL##############*/

function modifyShortcut( valueSpider , valueZombie, valueLiche , valueGoblin , valueSkeleton)
{
var tab = [ valueSpider , valueSkeleton , valueZombie , valueLiche , valueGoblin];

    if(hasDuplicates(tab))
    {
       alert("You have a Shortcut duplicate")
    }
    else {
        if (valueSpider) {
            if (valueSpider != spiders.shortcut);
            {
                shortcut.remove(spiders.shortcut);
                spiders.shortcut = valueSpider;
                console.log(spiders.shortcut + " = " + valueSpider);

                shortcut.add(spiders.shortcut, function () {
                    buyMonster(spiders);
                });
                document.getElementById("Shortcut" + spiders.name).innerHTML = "( " + spiders.shortcut + " )";  //updates the spider cost for the user
            }
        }

        if (valueSkeleton) {
            if (valueSkeleton != skeletons.shortcut);
            {
                shortcut.remove(skeletons.shortcut);
                skeletons.shortcut = valueSkeleton;
                console.log(skeletons.shortcut + " = " + valueSkeleton);

                shortcut.add(skeletons.shortcut, function () {
                    buyMonster(skeletons);
                });
                document.getElementById("Shortcut" + skeletons.name).innerHTML = "( " + skeletons.shortcut + " )";  //updates the spider cost for the user
            }
        }

        if (valueGoblin) {
            if (valueGoblin != goblins.shortcut);
            {
                shortcut.remove(goblins.shortcut);
                goblins.shortcut = valueGoblin;
                console.log(goblins.shortcut + " = " + valueGoblin);

                shortcut.add(goblins.shortcut, function () {
                    buyMonster(goblins);
                });
                document.getElementById("Shortcut" + goblins.name).innerHTML = "( " + goblins.shortcut + " )";  //updates the spider cost for the user
            }
        }

        if (valueZombie) {
            if (valueZombie != zombies.shortcut);
            {
                shortcut.remove(zombies.shortcut);
                zombies.shortcut = valueZombie;
                console.log(zombies.shortcut + " = " + valueZombie);

                shortcut.add(zombies.shortcut, function () {
                    buyMonster(zombies);
                });
                document.getElementById("Shortcut" + zombies.name).innerHTML = "( " + zombies.shortcut + " )";  //updates the spider cost for the user
            }
        }

        if (valueLiche) {
            if (valueLiche != liches.shortcut);
            {
                shortcut.remove(liches.shortcut);
                liches.shortcut = valueLiche;
                console.log(liches.shortcut + " = " + valueLiche);

                shortcut.add(liches.shortcut, function () {
                    buyMonster(liches);
                });
                document.getElementById("Shortcut" + liches.name).innerHTML = "( " + liches.shortcut + " )";  //updates the spider cost for the user
            }
        }
    }


}

function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}

$('#myModal').on('show.bs.modal', disableShortcuts);


$('#myModal').on('hidden.bs.modal', enableShortcuts() );

function disableShortcuts()
{
    shortcut.remove(spiders.shortcut);
    shortcut.remove(goblins.shortcut);
    shortcut.remove(skeletons.shortcut);
    shortcut.remove(zombies.shortcut);
    shortcut.remove(liches.shortcut);
}

function enableShortcuts ()
{
    shortcut.add(spiders.shortcut, function () {
        buyMonster(spiders);
    });
    shortcut.add(goblins.shortcut, function () {
        buyMonster(goblins);
    });
    shortcut.add(skeletons.shortcut, function () {
        buyMonster(skeletons);
    });
    shortcut.add(zombies.shortcut, function () {
        buyMonster(zombies);
    });
    shortcut.add(liches.shortcut, function () {
        buyMonster(liches);
    });
}
/*############MODAL##############*/
/*############MODAL##############*/
/*############MODAL##############*/

/*#COOKIE#*/
/*#COOKIE#*/
/*#COOKIE#*/





function createCookie(name,value,days) {

    if (days) {

        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();

    }

    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";


}

function readCookie(name) {

    var nameEQ = name + "=";


    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


function compareDate(date1 , date2)
{
    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}


/*#COOKIE#*/
/*#COOKIE#*/
/*#COOKIE#*/
/* ############################## Old Code #####################*/



/*
 function progress(elem , text , timerMonster , monster , temp , tempCost)
 {


 var timer = 0,
 perc = 0,
 timeTotal = timerMonster*15,
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
 timer = setTimeout(animateUpdate, timeCount/15);
 }
 else
 {
 $('#'+elem+'').css("width", 0 + "%");
 $('#'+text+'').text(monster.timer);
 goldWin(monster , tempCost);
 $('#'+text+'').addClass("padding_label");
 monster.tileActive[temp]=false;
 }
 }
 }*/



/* var test = '<div class="tile" onclick="test('+spiders.name+' , '+spiders.nextCost+')" id="spiderTileDiv0"> </div>';
 $('#'+spiders.nameSingle+'Div3').append(test);*/