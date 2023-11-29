function player(name){
    this.name = name

}

function aiplayer(name){
    this.name = name
}

function gboard(){
    const map = document.querySelectorAll('.cell')
    const update = {}
    const checkwin = function(){}
    let tiles = document.querySelectorAll(".emptycell")
    tiles.forEach(function(tile){tile.textContent = ""})
    return{map, update}
}

function removetitle(){
    tpage = document.querySelector(".titlepage")
    tpage.classList.toggle("bye")
    tpage2 = document.querySelector(".game")
    tpage2.classList.toggle("hello")
}

const game = {
    p1: new player,
    p2: new player,
    p1or2: false,
    winner:0,
    choice: "",
    turncount: 0,
    p1or2: false,
    selectxo: "O",
    map: gboard(),

    start: function(v){
        console.log("booya")
        this.players()
        display = document.querySelector(".disp")
        display.textContent = this.p1.name + "'s TURN"
        map = new gboard()
        game.choose()
    },

    players: function(q){
        let p1c = document.getElementById("First").classList
        let p2c = document.getElementById("Second").classList  
        if(p1c.contains("morty")){
            this.p1 = new player("morty")
        }
        else if(p1c.contains("rick")){
            this.p1 = new player("rick")
            console.log("player choose check")
        }
        else if(p1c.contains("meeseeks")){
            this.p1 = new aiplayer("meeseeks")
        }
        if(p2c.contains("morty")){
            this.p2 = new player("morty")
        }
        else if(p2c.contains("rick")){
            this.p2 = new player("rick")
        }
        else if(p2c.contains("meeseeks")){
            this.p2 = new aiplayer("meeseeks")
        }
    },

    choose: function(f){
        console.log("Choose called")
        let tiles = document.querySelectorAll(".emptycell")
        console.log(tiles)
        tiles.forEach(function(tile){
            tile.addEventListener('click', function(e){
                sound3()
                game.press(tile)
            }, {once: true} ) 
        })
    },

    press: function(tile){
        console.log("Press initiated")
      //  tile.textContent = game.selectxo
        addi = document.createElement('img')
        if(this.selectxo == "X")
        {
            tile.classList.toggle("mortysquare")
            tile.classList.toggle("ximg")
            
        } 
        else
        {
            tile.classList.toggle("ricksquare")
            tile.classList.toggle("oimg")
        }

        tile.appendChild(addi)
        tile.classList.toggle('emptycell')
        if(this.selectxo == "X"){this.selectxo = "O"}
        else this.selectxo = "X"
        console.log(this.selectxo)
        
        if(this.turncount >=4){
            this.checkwin()
        }

        this.turncount = this.turncount + 1
        this.p1or2 = !this.p1or2

        display = document.querySelector(".disp")
        if(this.p1or2 == false){
            display.textContent = this.p1.name + "'s TURN"
        }
        else if (this.p1or2 == true){
            display.textContent = this.p2.name + "'s TURN"
        }

    },

    checkwin: function(er){
        console.log("CHecking for a winner")
        let tiles = document.querySelectorAll(".cell")
        clist = Array.from(tiles)
        let j = "mortysquare"
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
        }
        else if(clist[3].classList.contains(j) && clist[4].classList.contains(j) && clist[5].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[3].classList.toggle('winsquare')
            tiles[4].classList.toggle('winsquare')
            tiles[5].classList.toggle('winsquare')
        } 
        else if(clist[6].classList.contains(j) && clist[7].classList.contains(j) && clist[8].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[6].classList.toggle('winsquare')
            tiles[7].classList.toggle('winsquare')
            tiles[8].classList.toggle('winsquare')
        } 
        else if(clist[0].classList.contains(j) && clist[3].classList.contains(j) && clist[6].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[0].classList.toggle('winsquare')
            tiles[3].classList.toggle('winsquare')
            tiles[6].classList.toggle('winsquare')
        } 
        else if(clist[1].classList.contains(j) && clist[4].classList.contains(j) && clist[7].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[1].classList.toggle('winsquare')
            tiles[4].classList.toggle('winsquare')
            tiles[7].classList.toggle('winsquare')
        } 
        else if(clist[2].classList.contains(j) && clist[5].classList.contains(j) && clist[8].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[2].classList.toggle('winsquare')
            tiles[5].classList.toggle('winsquare')
            tiles[8].classList.toggle('winsquare')
        } 
        else if(clist[0].classList.contains(j) && clist[4].classList.contains(j) && clist[8].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[0].classList.toggle('winsquare')
            tiles[4].classList.toggle('winsquare')
            tiles[8].classList.toggle('winsquare')
        } 
        else if(clist[2].classList.contains(j) && clist[4].classList.contains(j) && clist[6].classList.contains(j)){
            console.log("winner")
            this.winner(j)
            tiles[2].classList.toggle('winsquare')
            tiles[4].classList.toggle('winsquare')
            tiles[6].classList.toggle('winsquare')
        }
        j = "ricksquare"
    }
    },

    winner: function(w){
        if(w == "ricksquare"){
            sound4()
        }
        else if(w == "mortysquare"){
            sound5()
        }

    }
}

game.start()

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
function sound4(){
    let snd = new Audio("music/lick.mp3")
    snd.play()
    snd.onended = function(){
        let wnd = new Audio("music/mfer.mp3")
        wnd.play()
    }
    
}

function sound5(){
    let snd = new Audio("music/smart.mp3")
    snd.play()
    snd.onended = function(){
        let wnd = new Audio("music/retard.wav")
        wnd.play()
    }
    
    
}