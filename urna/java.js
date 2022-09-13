let nulo = 0
let votos = 0
let Ciro  = 0
let Jair = 0
let Lula = 0
let Vera = 0
let Soraya = 0  
let Eymael = 0
let Leonardo = 0
let Simone = 0 
let Sofia = 0 
let Luiz = 0
function urna(f){

    if(f == 1){
        nulo++
        votos++
        alert("Seu voto foi computado")
    }
    else if (f == 2){
        let presi = pres.value
        let govern = gov.value
        if(presi == 12){
            Ciro++
            votos++
        }
        else if (presi == 13){
            Lula++
            votos++
        }
        else if(presi == 15){
            Simone++
            votos++
        }
        else if(presi == 16){
            Vera++
            votos++
        }
        else if(presi == 21){
            Sofia++
            votos++
        }
        else if(presi == 22){
            Jair++
            votos++
        }
        else if(presi == 27){
            Eymael++
            votos++
        }
        else if(presi == 30){
            Luiz++
            votos++
        }
        else if(presi == 44){
            Soraya++
            votos++
        }
        else if(presi == 80){
            Leonardo++
            votos++
        }
        alert("seu voto foi computado")

    }
    else if(f == 3){
        alert(`
        Jair Bolsonaro recebeu ${Jair} voto(s)
        Ciro Gomes recebeu ${Ciro} voto(s)
        Lula recebeu ${Lula} voto(s)
        Simone Tebet recebeu ${Simone} voto(s)
        Soraya Thronicke recebeu ${Soraya} voto(s)
        Eymael recebeu ${Eymael} voto(s)
        Sofia Manzano recebeu ${Sofia} voto(s)
        Vera Lúcia recebeu ${Vera} voto(s)
        Luiz Felipe recebeu ${Luiz} voto(s)
        Leonardo Péricles recebeu ${Leonardo} voto(s)
        Tiveram ${nulo} voto(s) nulos
        Foram ${votos} voto(s) computados
        `)
    }

}