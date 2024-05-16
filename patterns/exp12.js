//      *
//   *     *
// *         *
//* * * * * *  * 
/* 
1,4=5
2,3=5
3,2=5
4,1=5
      
1,4=3
2,5=3
3,6=2
4,7=3


*/
for(row=1;row<=4;row++){
    str=''
    
    for(col=1;col<=7;col++){
        if(col+row===5 || col-row === 3 || row == 4) {
            str=str+'*'
        }else{
            str=str+' ' 
        }
   
    }   
    console.log(str);
    
}