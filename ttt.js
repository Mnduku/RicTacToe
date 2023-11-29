
function test(tile){
    return function(){
    tile.removeEventListener('click', test(tile) ,{once: true} ) 
    console.log("did we do it")
    if(game.winnur == true){
        return
    }
    sound3()
    game.press(tile)
}
}

function player(name){
    this.name = name

}

function sound1(){
    console.log("start pressed")
    let snd = new Audio("music/start.wav")
    snd.play()
}

function sound2(){
    document.getElementById('my_youtube').src = 'https://www.youtube.com/embed/aV03uhP6WM0?autoplay=1'
}

function sound3(){
    console.log("buttonmusic pressed")
    let snd = new Audio("music/boxclick.mp3")
    snd.play()
}

function removetitle(){
    tpage = document.querySelector(".titlepage")
    tpage.classList.toggle("bye")
    tpage2 = document.querySelector(".game")
    tpage2.classList.toggle("hello")
    game.start()
}

const game = {
    plist: [
    rick = { 
    wsound: new Audio("music/lick.mp3"), 
    Lsound: new Audio("music/retard.mp3")},
    morty = {
    wsound: new Audio("music/smart.mp3"),
    Lsound: new Audio("music/mfer.mp3")},
    jerry = { 
    wsound: new Audio("music/yes.mp3"),
    Lsound: new Audio("music/working.mp3")},
    summer = {
    wsound: new Audio("music/bye.mp3"),
    Lsound: new Audio("music/alright.mp3")}],
    plist2: ["rick", "morty", "jerry", "summer"],
    p1: new player,
    p2: new player,
    p1or2: false,
    winnur: false,
    turncount: 0,
    ranbefore: false,
    playerotation1: 0,
    playerotation2:1,

    start: function(v){
        console.log("booya")
        if(this.ranbefore == false)this.players()
        display = document.querySelector(".disp")
        display.textContent = this.p1.name + "'s TURN"
        game.choose()
    },

    players: function(q){
        console.log("sijofdufe")
        let p1c = document.getElementById("First")
        let p2c = document.getElementById("Second")
        this.p1 = new player(p1c.className)
        this.p2 = new player(p2c.className)
        console.log(p1c.className + "Sdjnuhd")
    },

    choose: function(f){
        console.log("Choose called")
        let tiles = document.querySelectorAll(".emptycell")
        console.log(tiles)
        tiles.forEach(function(tile){
            console.log("dida we do it")
            tile.addEventListener('click', test(tile) ,{once: true} ) 
        })
    },

    press: function(tile){
        console.log("Press initiated")
        if(this.p1or2 == true)
        {
            console.log(this.p2.name + "has been added")
            tile.classList.toggle(this.p2.name)
            tile.classList.toggle("ximg")
        } 
        else
        {
            console.log(this.p1.name + "has been added")
            tile.classList.toggle(this.p1.name)
            tile.classList.toggle("oimg")     
        }

        tile.classList.toggle('emptycell')
        this.turncount = this.turncount + 1
        this.p1or2 = !this.p1or2
        console.log(this.p1or2 + "TURN CHEKCER")
        display = document.querySelector(".disp")
        if(this.p1or2 == false){
            display.textContent = this.p1.name + "'s TURN"
        }
        else if (this.p1or2 == true){
            display.textContent = this.p2.name + "'s TURN"
        }
        if(this.turncount >=4){
            this.checkwin()
        }
    },

    checkwin: function(er){
        console.log("CHecking for a winner")
        let tiles = document.querySelectorAll(".cell")
        clist = Array.from(tiles)

        let j = this.p1.name
        for(let i = 0; i < 2; i++){
        if(clist[0].classList.contains("mortysdddquare")){
            console.log(clist[0])
        }
        else if(clist[0].classList.contains(j) && clist[1].classList.contains(j) && clist[2].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[0].classList.toggle('winsquare')
            tiles[1].classList.toggle('winsquare')
            tiles[2].classList.toggle('winsquare')
            return
        }
        else if(clist[3].classList.contains(j) && clist[4].classList.contains(j) && clist[5].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[3].classList.toggle('winsquare')
            tiles[4].classList.toggle('winsquare')
            tiles[5].classList.toggle('winsquare')
            return
        } 
        else if(clist[6].classList.contains(j) && clist[7].classList.contains(j) && clist[8].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[6].classList.toggle('winsquare')
            tiles[7].classList.toggle('winsquare')
            tiles[8].classList.toggle('winsquare')
            return
        } 
        else if(clist[0].classList.contains(j) && clist[3].classList.contains(j) && clist[6].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[0].classList.toggle('winsquare')
            tiles[3].classList.toggle('winsquare')
            tiles[6].classList.toggle('winsquare')
            return
        } 
        else if(clist[1].classList.contains(j) && clist[4].classList.contains(j) && clist[7].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[1].classList.toggle('winsquare')
            tiles[4].classList.toggle('winsquare')
            tiles[7].classList.toggle('winsquare')
            return
        } 
        else if(clist[2].classList.contains(j) && clist[5].classList.contains(j) && clist[8].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[2].classList.toggle('winsquare')
            tiles[5].classList.toggle('winsquare')
            tiles[8].classList.toggle('winsquare')
            return
        } 
        else if(clist[0].classList.contains(j) && clist[4].classList.contains(j) && clist[8].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[0].classList.toggle('winsquare')
            tiles[4].classList.toggle('winsquare')
            tiles[8].classList.toggle('winsquare')
            return
        } 
        else if(clist[2].classList.contains(j) && clist[4].classList.contains(j) && clist[6].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[2].classList.toggle('winsquare')
            tiles[4].classList.toggle('winsquare')
            tiles[6].classList.toggle('winsquare')
            return
        }
        else j = this.p2.name 
    }},

    winner: function(w){
        console.log(w)
        this.winnur = true
        console.log("BOZO" + game.plist[0].wsound)
        let restart = document.querySelector(".replay")

        ione = game.plist2.indexOf(w)
        game.plist[ione].wsound.onended = function(){

        if(w != game.p2.name){
            console.log("reached here!")
            itwo = game.plist2.indexOf(game.p2.name)
            game.plist[itwo].Lsound.play()
            restart.classList.toggle('endgame')
        }
        else{
            console.log("reached here! 2")
            itwo = game.plist2.indexOf(game.p1.name)
            game.plist[itwo].Lsound.play()
            restart.classList.toggle('endgame')
        }
        }
        game.plist[ione].wsound.play()

        display = document.querySelector(".disp")
        display.textContent = w +" WINS"

    },

    restart: function(r){
        console.log("restarting")
        let tiles = document.querySelectorAll('.cell')

        tiles.forEach(x => {
            x.className = "cell"
            x.classList.toggle("emptycell") 
        });

        game.ranbefore = true
        game.winnur = false
        game.p1or2 = false
        game.turncount = 0
        let restart = document.querySelector(".replay")
        restart.classList.toggle('endgame')
        game.start()

    }

}

document.querySelector("#First").addEventListener('click', function(e){
    let temp = game.playerotation1
    
    game.playerotation1 = game.playerotation1 + 1
    while(game.playerotation2 == game.playerotation1 || game.playerotation1 > 3){
        if(game.playerotation1 >= 3) game.playerotation1 = -1
        game.playerotation1 = game.playerotation1 + 1
        console.log(game.playerotation1)
        console.log(game.playerotation2)
    } 

    let target = e.target
    target.classList.toggle(game.plist2[temp])
    target.classList.toggle(game.plist2[game.playerotation1])
})

document.querySelector("#Second").addEventListener('click', function(z){
    let temp = game.playerotation2
    game.playerotation2 = game.playerotation2 + 1

    while(game.playerotation2 == game.playerotation1 || game.playerotation2 > 3){
        if(game.playerotation2 >=3) game.playerotation2 = -1
        game.playerotation2 = game.playerotation2 + 1
        console.log(game.playerotation2)
        console.log(game.playerotation1)
    } 

    let target = z.target
    target.classList.toggle(game.plist2[temp])
    target.classList.toggle(game.plist2[game.playerotation2])
})
