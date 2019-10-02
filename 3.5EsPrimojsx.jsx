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

var numero = parseInt(readline());
var esPrimo = "NO";

var primosConocidos = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 
    61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 
    151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 
    337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 
    433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 
    541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 
    641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 
    743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 
    857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 
    971, 977, 983, 991, 997, 1009, 10007, 100003, 1000003,]

if (numero == 2)
{
    esPrimo ="SI";
}


if (numero % 2 != 0 && (esPrimo == "NO" && numero != 1))
{ 
    for (var i = 0; i < primosConocidos.length; i++)
    {
        if (primosConocidos[i] == numero)
        {
            esPrimo = "SI";
        }
    }

    if (esPrimo == "NO")
    {
        esPrimo = "SI"
        for ( var i = numero-1; i > 2; i -= 1)
        {
            if (numero % i == 0)
            {
                esPrimo = "NO";
            }
        }
    }
}
print(esPrimo);