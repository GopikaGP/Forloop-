// another method
// *
// * *
// * * * 
// * *
// *

n=10;
for(i=1; i<=n;i++){
    str=''
    for(j=1;j<=i;j++){
        if(i<=n/2){
            str=str+' *'
        }else{
            for(j=i+1;j<=n;j++)
            str=str+' *'
        }
    }
    console.log(str);
}