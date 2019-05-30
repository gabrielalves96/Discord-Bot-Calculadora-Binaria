module.exports = {

    binToDec : function(x){
        
        var y = []
        var result = 0;

        for(var i = 0 ; i<x.length; i++){
            if(x.charAt(i) != '0' && x.charAt(i) != '1'){
                return 'você não digitou um número binário ou deu espaços demais depois de "!bin"';
            }
           
        }

        for(var i = 1; i <= x.length; i++){

            y[i-1] = ( Math.pow(2, (x.length - i)) * parseInt(x.charAt((i-1))));
            
            result = result + y[i-1];
        }
        
        return result.toString();
    },

    decToBin: function(z){
        if(isNaN(z)) {
            return 'Não é número.';
        }
        var numero = parseInt(z, 10);
        var x = false;
        var i = 0;
        var y = [];
        while(x == false){
            y[i] = (numero)%2;
            
            if((numero)/2 < 2){
                y[i+1] = Math.floor( (numero)/2 );
                x = true;
            }
            numero = Math.floor( (numero/2) );
            i++;
        }
        y.reverse();
        
        return (y.join(''));
    }
}