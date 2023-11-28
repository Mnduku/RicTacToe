
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
    winner:0,
    choice: "",
    turncount: 0,
    p1or2: false,
    selectxo: "O",
    map: gboard(),

    start: function(v){
        console.log("booya")
        map = new gboard()
        game.choose()
    },

    choose: function(f){
        console.log("Choose called")
        let tiles = document.querySelectorAll(".emptycell")
        console.log(tiles)
        tiles.forEach(function(tile){
            tile.addEventListener('click', function(e){
                game.press(tile)
            }, {once: true} )
            
        })

    },

    press: function(tile){
        console.log("Press initiated")
      //  tile.textContent = game.selectxo
        addi = document.createElement('img')
        if(this.selectxo == "X") addi.classList.toggle("ximg")
        else addi.classList.toggle("oimg")
        tile.appendChild(addi)
        

        tile.classList.toggle('emptycell')
        if(this.selectxo == "X"){this.selectxo = "O"}
        else this.selectxo = "X"
        console.log(this.selectxo)
        this.turncount = this.turncount + 1
        if(this.turncount >=5){
            this.checkwin()
        }
    },

    checkwin: function(er){
        console.log("CHecking for a winner")
        let tiles = document.querySelectorAll(".cell")
        clist = Array.from(tiles)
        if(clist[0].classlist = "Dsddsds"){
            
        }
        else if(clist[0].classList == clist[1].classList && clist[1].classList == clist[2].classList){
            console.log("winner")
        }
        else if(clist[3].classList == clist[4].classList && clist[4].classList == clist[5].classList){
            console.log("winner")
        } 
        else if(clist[6].classList == clist[7].classList && clist[7].classList == clist[8].classList){
            console.log("winner")
        } 
        else if(clist[0].classList == clist[3].classList && clist[3].classList == clist[6].classList){
            console.log("winner")
        } 
        else if(clist[1].classList == clist[4].classList && clist[4].classList == clist[7].classList){
            console.log("winner")
        } 
        else if(clist[2].classList == clist[5].classList && clist[5].classList == clist[8].classList){
            console.log("winner")
        } 
        else if(clist[0].classList == clist[4].classList && clist[4].classList == clist[7].classList){
            console.log("winner")
        } 
        else if(clist[2].classList == clist[4].classList && clist[4].classList == clist[6].classList){
            console.log("winner")
        }
    }



}

game.start()
