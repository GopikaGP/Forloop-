/* 
         *
        * *
       * * *
      * * * *
     * * * * *
      * * * *
       * * *
        * *
         *   
*/

for(i=1;i<=5;i++){
    str=''
    for(space=5;space>i;space--){
        str=str+ ' '
    }
    for(j=1;j<=i;j++){
        str=str + ' *'
    }
    console.log(str);
}
for(i=4;i>=1;i--){
    str=''
    for(space=5;space>i;space--){
        str=str+' '
    }
    for(j=1;j<=i;j++){
        str= str + ' *'
    }
    console.log(str);
}
