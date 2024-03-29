/**********************************************************/	
/*  CODIGO INICIAL A ANYADIR PARA USAR READLINE Y PRINT   */
/**********************************************************/

const print = console.log;
const readline = utf8readline;
function utf8readline() {
    var r = '', b=new Buffer(10), bi=0, bl=0;
    b.fill(0);
    while (1) {
        var br = require('fs').readSync(0, b, bi, 1,null);
        if (!br) {
            readline.eof = true;
            r += b.toString('utf-8', 0, bi);
            return r;
        }
        var byte = b[bi];
        bi += br;
        
        if (bl) {
            bl--;
            if ((byte & 0xC0) !== 0x80) {
                console.error('readline: invalid utf-8 code point');
            }
        }
        else {
            if ((byte & 0xC0) == 0x80) {
                console.error('readline: invalid utf-8 code point');
            }
            if ((byte & 0xE0) == 0xC0) {
                bl = 1;
            }
            if ((byte & 0xF0) == 0xE0) {
                bl = 2;
            }
            if ((byte & 0xF8) == 0xF0) {
                bl = 3;
            }
        }

        var eoln = byte == 0x0A;
        if (eoln) {
            bl = 0;
            bi--;
        }

        if (!bl) {
            r += b.toString('utf-8', 0, bi);
            bi=0;
        }

        if (eoln || readline.eof) {
            return r;
        }
    }
}

/**********************************************************/	
/* FIN CODIGO INICIAL A ANYADIR PARA USAR READLINE Y PRINT */
/**********************************************************/



// AQUI EMPIEZA LA RESPUESTA DEL ALUMNO

var cantidadDinero = parseInt(readline());
var numeroBilletes = 0;

if (cantidadDinero == 500 || cantidadDinero == 200|| cantidadDinero == 100|| 
    cantidadDinero == 50|| cantidadDinero == 20|| cantidadDinero == 10|| cantidadDinero == 5)
{
    numeroBilletes = 1;
}
else
{        
    while (cantidadDinero >= 500)
    {
        cantidadDinero -= 500;
        numeroBilletes ++;           
    }
    while (cantidadDinero >= 200)
    {
        cantidadDinero -= 200;
        numeroBilletes ++;   
    }
    while (cantidadDinero >= 100)
    {
        cantidadDinero -= 100;
        numeroBilletes ++;   
    }
    while (cantidadDinero >= 50)
    {
        cantidadDinero -= 50;
        numeroBilletes ++;   
    }
    while (cantidadDinero >= 20)
    {
        cantidadDinero -= 20;
        numeroBilletes ++;   
    }
    while (cantidadDinero >= 10)
    {
        cantidadDinero -= 10;
        numeroBilletes ++;   
    }
    while (cantidadDinero >= 5)
    {
        cantidadDinero -= 5;
        numeroBilletes ++;   
    }
}

print(numeroBilletes);