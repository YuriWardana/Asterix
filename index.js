
let num = 3
let temp =''

for(i = 1; i <= num ; i++){
    for(k = i; k <= num-1; k++){
        temp +=" "
    }    
    for(j=1 ; j <=(2*i)-1 ; j++ ){
        if(j %2 === 0){
            temp+= 'o'
        }else{
            temp+= 'x'
        }  
    }
    console.log(temp);
    temp=''
}