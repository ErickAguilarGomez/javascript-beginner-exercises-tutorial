function sing(){
    let music=""
    for(let i=0;i<12;i++){
        if(i<4){
            music+="let it be,"
        }else if(i<5){
            music+="there will be an answer"
        }else if(i<10){
            music+="let it be,"
        }else if(i<11){
            music+="whisper words of wisdom"
        }else if(i<12){
            music+="let it be"
        }
        
    }
    return music
}

//Your code above ^^^

console.log(sing());