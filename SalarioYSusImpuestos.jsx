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
var HorasTrabajadas = parseFloat(readline());
var PrecioHora = parseFloat(readline());
var SalarioBruto = 0.0;
var SalarioNeto = 0.0;

if (HorasTrabajadas > 35)
{
    SalarioBruto = 35 * PrecioHora + ((HorasTrabajadas - 35) * (PrecioHora * 1.5));
} else 
{
    SalarioBruto = HorasTrabajadas * PrecioHora;
}

if(SalarioBruto > 500)
{
    if (SalarioBruto <= 900)
    {
        var salarioConImpuestos = SalarioBruto - 500;
        SalarioNeto = 500 + (salarioConImpuestos - ((salarioConImpuestos/100) * 25));
    }
    else
    {
        var salarioConImpuestos = SalarioBruto - 900;
        SalarioNeto = 500 + 300 + (salarioConImpuestos - ((salarioConImpuestos/100) * 45));
    }
}
else
{
    SalarioNeto = SalarioBruto;
}

print (SalarioNeto);