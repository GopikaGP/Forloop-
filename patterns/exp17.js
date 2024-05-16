/* 
           11
        12  13  14
      15 16  17  18 19
  20  21 22  23  24 25  26  
27 28 29  30  31  32 33  35  





*/
num=11
for(row=1;row<=9;row++){
    str=''
for(space=9;space>=row;space--){
    str=str+ '  '
}
for(col=1;col<=row;col++){
   if(row%2!==0){
    str=str+" "+num++ +" "
   }
}
console.log(str);
}
console.log('____________________________________');

num=11
for(row=1;row<=5;row++){
    str=''
    for(space=1;space<=5-row;space++){
        str=str+'###'
    }
    for(col=1;col<=2*row-1;col++){
        str=str+num++ + ' '
    }
    console.log(str);
}