function alphabets(str){
    let upper_case=0;
    let lower_case=0;
    for (let i=0; i<str.length; i++){
        if (str[i] === str[i].toUpperCase() && str[i] !== ' '){
            upper_case+=1;
        }
        else if (str[i] === str[i].toLowerCase()){
            lower_case+=1;
        }
    }
    console.log("Upper Case = ",upper_case);
    console.log("Lower Case = ",lower_case);
}
alphabets("The quick Brow Fox");