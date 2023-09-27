let bowling = {
    "giocatori": [
        {"name": "Fabrizio", "tiri": [], "punteggioFinale":0 },
        {"name": "Margherita", "tiri": [] , "punteggioFinale":0},

    ],
    "playRound": function(){
        if(this.giocatori[0].tiri.length < 10){
        this.giocatori.forEach((giocatore, i )=>{
                giocatore.tiri.push(Math.floor(Math.random() * (10 - 0 + 1) + 0))
                giocatore.punteggioFinale = giocatore.tiri.reduce((acc, tiro)=> acc + tiro, 0)
         } )
        }
    },
    "createPlayers": function(){
        tbody.innerHTML = "";


      this.giocatori.forEach((giocatore,i)=>{
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <th scope="row">${i+1}</th>
        <td>${giocatore.nome}</td>
        <td>${giocatore.tiri[0] ? giocatore.tiri[0] : 0}</td>
        <td>${giocatore.tiri[1] ? giocatore.tiri[1] : 0}</td>
        <td>${giocatore.tiri[2] ? giocatore.tiri[2] : 0}</td>
        <td>${giocatore.tiri[3] ? giocatore.tiri[3] : 0}</td>
        <td>${giocatore.tiri[4] ? giocatore.tiri[4] : 0}</td>
        <td>${giocatore.tiri[5] ? giocatore.tiri[5] : 0}</td>
        <td>${giocatore.tiri[6] ? giocatore.tiri[6] : 0}</td>
        <td>${giocatore.tiri[7] ? giocatore.tiri[7] : 0}</td>
        <td>${giocatore.tiri[8] ? giocatore.tiri[8] : 0}</td>
        <td>${giocatore.tiri[9] ? giocatore.tiri[9] : 0}</td>
        <td class="bg-warning">${giocatore.punteggioFinale}</td>
        `

        tbody.appendChild(tr)
      })
    },
    "setWinner2": function(){
        this.giocatori.sort( (a, b)=> b.punteggioFinale - a.punteggioFinale )
        if(this.giocatori[0] == this.giocatori[1]){
            console.log(`i giocatori ${this.giocatori[0].name} e ${this.giocatori[1].name} sono arrivati primi a parimerito`)
        }else{
            console.log(`Il vincitore di questa partita è ${this.giocatori[0].name} con un puntggio di ${this.giocatori[0].punteggioFinale}`);
        }
    },
    "aggiungiGiocatore": function(nome){
        this.giocatori.push( {"name": nome, "tiri": [],
        "punteggioFinale": 0})
    }

}




let play= document.querySelector("#play");
let tbody= document.querySelector("#tbody");
let newPlayer= document.querySelector("#newPlayer");
let inputName= document.querySelector("#inputName");



bowling.createPlayers();





play.addEventListener("click", ()=>{
    bowling.playRound();
    bowling.createPlayers();
    console.log(bowling.giocatori)
})


newPlayer.addEventListener("click", ()=>{
    bowling.aggiungiGiocatore(inputName.value)
    bowling.createPlayers();
})










