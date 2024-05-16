//    *
//   *  *
//  *  *  *
// *  *   *  *



for(i=1;i<=4;i++){
  
    str=' '
    
    for(space=4;space>i;space--){ /* */
        str=str+' '
    }
    for(j=1;j<=i;j++){
        str=str + ' *'
    }
    console.log(str);
}