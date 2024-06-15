function CapitalFirstLetter(){
    let array=["my","name","is","dular","pandey"];
    let arr=[];
    for (let i=0; i<array.length; i++){
        let word=array[i];
        let capitalizedWord=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
        arr.push(capitalizedWord);
    }
    console.log(arr);
}
CapitalFirstLetter();