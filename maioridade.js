let idadeTexto = prompt ("qual sua idade")

if (!idadeTexto|| idadeText.trim() === ""){
    alert("ERROR! Digite sua idade");
} else{
    idadeTexto = idadeTexto.trim();

    if(!/^\d+$/.test(idadeTexto)){
        alert("ERRER!Digite apenas numeros. eX.: 15");
    } else{
        let idade = parseInt(idadeTexto)
    }
    if(idade < 0 || idade > 120){
        alert("idade invalida")
    }else{
        if(idade>=18){
        }
    } 
    else {
        alert("Voce e menor de idade!")
    }

}
