// Onclick on an image 

// Passive enhancements 

// Click enhancements

// Look good in mobile 

// 4 Upgrades 

// Show how many resources you have 

// At least one click upgrad and 1 auto upgrade

let cheese = 0
let startcheese = 0
let counter = document.getElementById("quanity")
let mod = 0 
let count = 0
let items = document.getElementById("items-display")
let pickAxe =document.getElementById("pickaxe")
let miceWorker=document.getElementById("miceworkers")
let moonCart=document.getElementById("cart")
let moonRover=document.getElementById("rover")
let moonDrill=document.getElementById("novadrill")
let autoClick = document.getElementById("start-timer")



let clickUpgrades ={
    pickaxes: {
        cost: 50,
        quantity: 0,
        multiplayer: 1
    },

     miceworkers:{
        cost: 200,
        quantity: 0,
        multiplayer: 10
    },
    cart:{
        cost: 400,
        quantity: 0,
        multiplayer: 25
    },
    rover:{
        cost: 800,
        quantity: 0,
        multiplayer:50
    }

};


let automaticUpgrades = {
    novadrill:{
        cost: 800,
        quantity: 0,
        multiplayer:1
    }
}


function mine(){
    cheese++
    cheese+=mod 
    draw()
}

function draw(){
    document.getElementById("Counter").innerText = cheese.toString()
}

function buyPickaxe(){
    if(cheese >= clickUpgrades.pickaxes.cost){
        clickUpgrades.pickaxes.quantity++
        cheese -= clickUpgrades.pickaxes.cost
        mod += clickUpgrades.pickaxes.multiplayer 
        pickAxe.innerText += ` Pick axe +1 cheese.`
        draw()       
}
}
function buyMiceWorkers(){
    if(cheese >= clickUpgrades.miceworkers.cost){
        clickUpgrades.miceworkers.quantity++
        cheese -= clickUpgrades.miceworkers.cost
        mod += clickUpgrades.miceworkers.multiplayer
        miceWorker.innerText +=` Mice Worker +10 cheese ` 
    } 
    console.log("purchased")
        draw()

}

function buyCart(){
    if(cheese >= clickUpgrades.cart.cost){
        clickUpgrades.cart.quantity++
        cheese -= clickUpgrades.cart.cost
        mod += clickUpgrades.cart.multiplayer 
        moonCart.innerText +=` Cart +25 Cheese `
    } 
    console.log("purchased")
        draw()

}

function buyRover(){
    if(cheese >= clickUpgrades.rover.cost){
    clickUpgrades.rover.quantity++
        cheese -= clickUpgrades.rover.cost
        mod += clickUpgrades.rover.multiplayer 
        moonRover.innerText +=` Rover +50 cheese `
    } 
        draw()
        
}

function buyNovaDrill(){
    if(cheese >= automaticUpgrades.novadrill.cost){
    automaticUpgrades.novadrill.quantity++
        cheese -= automaticUpgrades.novadrill.cost
        mod += automaticUpgrades.novadrill.multiplayer 
        moonDrill.innerText += ` Nova Drill 1 cheese per second`
    } 
    
        draw()
}

function collectAutoUpgrades(){
     automaticUpgrades.novadrill.quantity * automaticUpgrades.novadrill.multiplayer
            mine()
    
        }


        function startInterval(){
        //     if(automaticUpgrades.novadrill.quantity < automaticUpgrades.novadrill.multiplayer){
        //         setTimeout(collectAutoUpgrades, 3000)
        //     } else{
        //         setInterval(collectAutoUpgrades, 3000)
        // }
        let autoInterval=setInterval(collectAutoUpgrades, 3000)
    }
    
      startInterval()  
    draw()


