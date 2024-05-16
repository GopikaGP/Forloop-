//   w a p to check the given number is prime number or not
// prime have two factors one and the number its self
// 
num=33
prime=true  /* 1 */

for(i=2; i<num; i++){  /* i = 2, 2<6  */

    if(num%i==0){   /* 6%6 , 6%1 */
        prime=false /* 0 */
        break
    }
}
prime?console.log('PRIME'):console.log('not a prime');
