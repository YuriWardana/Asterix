function diamond(angka) {
    let temp = []
    let result = ''
    
    for (let i = 1; i <= (angka*2)-1; i++) { 
        if (i <= angka) {
            temp.push(i)
    
        }else{
            temp.push((angka-(i-angka)));   
        }
    }
    
     for (let i = 0; i < temp.length; i++) {
        
         for (let k = 1; k <= angka-temp[i]; k++) {
            result += ' '
             
         }
        for (let j = 1; j <= temp[i]; j++) {
            if (j == 1 || j == temp[i]) {
                result += "$ " 
            }else{
                result += '  '
            }
        }
         console.log(result);
         result = '' 
    
    }

}

console.log(diamond(5));