function check_intem(){
    let favorite=["Chai","Candyflos","Dairymilk","Sting"];
    let i=0;
    while (i<favorite.length){
        let fav=favorite[i];
        let j=0;
        while (j<fav.length){
            process.stdout.write(fav[j]);
            j+=1;
        }
        console.log();
        i+=1;
    }
}
check_intem();