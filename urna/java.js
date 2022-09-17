let nulo = 0
let votos = 0
let votosg = 0
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
let Cláudio = 0
let Cyro = 0
let Eduardo = 0
let Juliete = 0
let Luis = 0
let Marcelo = 0
let Paulo = 0
let Rodrigo = 0
let Wilson = 0
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
        if(govern == 12){
            Rodrigo++
            votosg++
        }
        else if (govern == 16){
            Cyro++
            votosg++
        }
        else if (govern == 21){
            Eduardo++
            votosg++
        }
        else if (govern == 22){
            Cláudio++
            votosg++
        }
        else if (govern == 29){
            Luis++
            votosg++
        }
        else if (govern == 30){
            Paulo++
            votosg++
        }
        else if (govern == 35){
            Wilson++
            votosg++
        }
        else if (govern == 40){
            Marcelo++
            votosg++
        }
        else if (govern == 80){
            Juliete++
            votosg++
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
    else if (f == 4){
        alert(`
        Cláudio Castro recebeu ${Cláudio} voto(s)
        Cyro Garcia recebeu ${Cyro} voto(s)
        Eduardo Serra recebeu ${Eduardo} voto(s)
        Juliete Panjota recebeu ${Juliete} voto(s)
        Luis Eugenio recebeu ${Luis} voto(s)
        Marcelo Freixo recebeu ${Marcelo} voto(s)
        Paulo Ganime recebeu ${Paulo} voto(s)
        Rodrigo Neves recebeu ${Rodrigo} voto(s)
        Wilson Witzel recebeu ${Wilson} voto(s)
        Tiveram ${nulo} voto(s) nulos
        Foram ${votosg} voto(s) computados
        `)
    }

}