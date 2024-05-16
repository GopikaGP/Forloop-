// w a p display all amstrong numbers btn 8 - 500

for(num=8;num<=500;num++){
    power=(num+'').length
    sum=0
    temp=num
    if(power!=1){
        while(temp>0){
            reminder=temp%10
            sum=sum+reminder**power
            temp=Math.floor(temp/10)
        }
    }
    else{
        sum=0
    }
    if(sum==num){
        console.log(num);
    }

}
