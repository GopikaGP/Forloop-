// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

for(i=1;i<=9;i++){
    str=''
    for(j=1;j<=i;j++){
        str=str+' '
    }
    for(k=i;k<=9;k++){
        if(i%2!==0){
            str=str+'* '
        }
    }
    console.log(str);
}
for(i=3;i<=9;i++){
    str=''
    for(j=i;j<=9;j++){
        str=str+ ' '
    }
    for(k=1;k<=i;k++){
        if(i%2!==0){
            str=str+'* '
        }
    }
    console.log(str);
}