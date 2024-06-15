function phone_number(){
    let arrayNumber=[8102849704];
    let str=String(arrayNumber[0]);
    let i=0;
    while (i<str.length){
        let c=str[i]+str[i+1]+str[i+2];
        let d=str[i+3]+str[i+4]+str[i+5];
        let e=str[i+6]+str[i+7]+str[i+8]+str[i+9];
        if (parseInt(c)>=100 && parseInt(c)<=999){
            if (parseInt(d)>=100 && parseInt(d)<=999){
                console.log("("+c+")" +d+"-"+e);
            }
            break;
        }
        i+=1;
    }
}
phone_number();