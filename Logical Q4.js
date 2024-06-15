function countCapSam(a){
    let count1=0;
    let count2=0;
    let s=a;
    for (let i=0; i<a.length; i++){
        if (s[i]===s[i].toUpperCase()){
            count1+=1;
        }
        else if (s[i]===s[i].toLowerCase()){
            count2+=1;
        }
    }
    console.log("Total Capital Charactors = ",count1);
    console.log("Total Small Charactors = ",count2);
}
let str="PanDeYji";
countCapSam(str);