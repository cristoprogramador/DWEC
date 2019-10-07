/**********************************************************/	
/*  CODIGO INICIAL A ANYADIR PARA USAR READLINE Y PRINT   */
/**********************************************************/

const print = console.log;
const readline = utf8readline;
function utf8readline() {
    var r = '', b=new Buffer.alloc(10), bi=0, bl=0;
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
var texto = readline();
print(esPalindromo(texto));


function esPalindromo(texto)
{        
    var text = new String(texto);
    var longitud = texto.length-1;
    var mitad;
    var substring1;
    var substring2;

    if (longitud % 2 == 0)
    {
        mitad = longitud/2;
        substring1 = text.substring(0 , mitad).toUpperCase();
        substring2 = text.substring(mitad, longitud).toUpperCase();     
    }
    else
    {
        mitad = (longitud-1)/2;
        substring1 = text.substring(0 , mitad).toUpperCase();
        substring2 = text.substring(mitad+1, longitud).toUpperCase();
    }

    for(var i = 0; i < mitad; i++)
    {
        var letra1 = substring1.substring((mitad - 1) - i, mitad - i);
        var letra2 = substring2.substring(0 + i, i + 1);
        if (letra1 != letra2)
        {return false}
    }
    return true;
}