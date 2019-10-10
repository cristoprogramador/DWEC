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
var miArrayBi= [[4, 1, 3, 8, 2, 5, 6, 7, 9],[5, 6, 7, 1, 4, 9, 8, 3, 2],[2, 8, 9, 7, 3, 6, 1, 4, 5],[1, 9, 5, 4, 6, 2, 7, 8, 3],
[7, 2, 6, 9, 8, 3, 5, 1, 4],[3, 4, 8, 5, 1, 7, 2, 9, 6],[8, 5, 1, 6, 9, 4, 3, 2, 7],[9, 7, 2, 3, 5, 8, 4, 6, 1],[6, 3, 4, 2, 7, 1, 9, 5, 8]]
print(esSudokuCorrecto(miArrayBi));

function esSudokuCorrecto(miArrayBi)
{
    if(miArrayBi.length < 9)
    {
        return false;
    }
    for(var i = 0; i < 9; i++)
    {  
        if(miArrayBi[i].length < 9)
        {
            return false;
        }
        var num = new Array(); 
        var num2 = new Array();    
        for(var j = 0; j < 9; j++)
        { 
            if (num.includes(miArrayBi[i][j]))
            {
                return false;
            }
            else
            {
                num[j] = miArrayBi[i][j]
            }

            if (num2.includes(miArrayBi[j][i]))
            {
                return false;
            }
            else
            {
                num2[i] = miArrayBi[j][i]
            }
        }        
    }

    for(var i = 0; i < 9; i += 3)
    {   
        var num = new Array();    
        for(var j = 0+i; j < 3+i; j++)
        { 
            for(var k = 0+i; k < 3+i; k++)
            { 
                if (num.includes(miArrayBi[j][k]))
                {
                    return false;
                }
                else
                {
                    num[j] = miArrayBi[j][k]
                }               
            }  
        }     
    }

    return true;
}