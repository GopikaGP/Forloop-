// w a p display all prime number from 2 to 50

max=50
min=2

for(i=2;i<=50; i++){
     let flag=0
     for(j=2; j<i; j++ ) 
     if(i%j==0){
        flag=1
        break
     }
     if(i>0 && flag==0){
        console.log(i);
     }
}
