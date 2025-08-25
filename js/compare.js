
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
             if(carArr.length >= 2){
                el.checked = false;
                alert('você só poder comprar 2 veículos por cada vez!');
                return;
             }   
            if(GetCarArrPosition(carArr, carClass) === -1){
                carArr.push(carClass);
            }

        } else {
          const index = GetCarArrPosition(carArr, carClass);
          if(index !== -1){
            carArr.splice (index ,1);
          }
        } 
    } else {
        throw "You need set a Car Class";
    }

    function botaoComparar(){
        const compareBtn = document.querySelector("button[onclick=1'showCompare'")
        if(carArr.length === 2){
            compareBtn.disabled = false;
            compareBtn.style.opacity = 1;
            compareBtn.style.cursor = "pointer";
        } else {
            
        }
    }

}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    
}