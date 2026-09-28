// crie um programa para calcular o valor do salário líquido

/*salario família:
Limite de Renda: Valor da Cota: Você recebe R$ 67,54 por cada filho que se encaixe nas regras.
Somente tem direito o trabalhador cuja remuneração mensal total seja de até R$ 1.980,38.
filhos/enteados até 14 anos
*/

/*inss calculo progressivo 2026
0.00    ~ 1621.00 = 0.075
1621.01 ~ 2902.84 = 0.09
2902.85 ~ 4354.27 = 0.12
4354.28 ~ 8475.55 = 0.14
 */

/*IRRS 2026 
base de calculo = salario bruto - inss - filhos - pensão alimenticia - previdencia privada (até12%)
se abaixo de 5k ISENTO
 Lei 15.270/2025 Redutor de IR isento até 5000
0,00        ~  2428.80      = isento
2428.81     ~  2826.65      = 0.075 (deduzir R$ 182,16).
2826.66     ~  3751.05      = 0.15 (deduzir R$ 384,16).
3751.06     ~  4.664.68     = 0.225 (deduzir R$ 675,49).
4664.68     ~  +            = 0.275 (deduzir R$ 908,73). 

**ISENÇÃO 2026**
tabela redutoria ascima 5k
5000,00    ~    7350,00     = calc: 978,62 - (0,133145xrenda)
>= 7350,00 = zero (não tem redutor extra)

calculo para 5k+:
salario_descontado_inss = salario_base - inss 
ir_base = salario_descontado_inss * (0.275) - dedutor_tabela
redutor extra:
ir_ded_extra = 978,62 - (0,133145 * salario_base)
ir_final = ir_base - ir_ded_extra

calculo ascima 7350,00
salario_descontado_inss = salario_base - inss(teto 980)
ir = (salario_descontado_inss * 27,5%) - 908,73

*/

/*vale-transporte
até 6% do salário base
(se o custo real das passagens for menor que 6% do salário é descontado só o valor das passagens) */

/*Vale refeição/ Alimentação
Desconto: Pode ser descontado até 20% do valor do benefício entregue
*/

//criando função para salário -inss e ir com ou sem VT

const salarioLiquido = function(salario = 0, vt = 0, diasMes = 0, filhos = 0){
    //validando parametros:
    if(typeof salario != 'number' || salario <= 0 || typeof vt != 'number' || typeof filhos != 'number' ){
        console.log(`Ou ${salario} ou ${vt} estão incorretos`);
        return null;
    }

    console.log(`Quanto é o salário líquido de quem recebe R$ ${salario}?`)
     
    // ~~~~~~~~~~~~~~ calculo para inss ~~~~~~~~~~~~~~
    let inss = 0
    switch(true){
        case salario <= 1621.00:
            inss = Number((salario * 0.075).toFixed(2));
            break;
        case salario >= 1621.01 && salario <= 2902.84:
            inss = Number((121.575 + (salario - 1621.00) * 0.09).toFixed(2));            
            break;
        case salario >= 2902.85 && salario <= 4354.27:
            inss = Number((121.575 + 115.3647 + (salario - 2902.85) * 0.12).toFixed(2));
            break;
        case salario >= 4354.28 && salario <= 8475.55:
            inss = Number((121.575 + 115.3647 + 174.1704 + (salario-4354.28) * 0.14).toFixed(2));
            break
        default:
            inss = 988.09                    
    }
    console.log(`O inss ficará: ~~~~~~~~~~~~~~ R$ ${inss}`)


    // ~~~~~~~~~~~~~~ calculo para o IRRF 2026 ~~~~~~~~~~~~~~
            // 1. Preparação da Base de Cálculo
            // A base do IR é: Salário - INSS - Dependentes
    let descontoFilhos = filhos * 189.59;
    let irBase = salario - inss - descontoFilhos;
    let ir = 0
            // 2. Cálculo do Imposto de Renda (IRRF)
    switch(true){
        case salario <= 5000: // Isenção garantida pelo Redutor Extra para quem ganha até 5k bruto
            ir = 0;
        break; 

        case salario > 5000 && salario <= 7350:

            let irPadrao = (irBase * 0.275) - 908.73;// Cálculo Padrão (27,5%)         
            let redutorExtra = 978.62 - (0.133145 * salario); // Novo Redutor Extra 2026 (calculado sobre o BRUTO)
            ir = irPadrao - redutorExtra;            
            if(ir < 0){ ir = 0 }// Caso ir for negativo
            break;
        case salario > 7350: // Acima de 7350 não existe Redutor Extra, apenas a tabela progressiva            
            ir = (irBase * 0.275) - 908.73;           
            break;
    }
    ir = Number(ir.toFixed(2));
    console.log(`O IRRF ficará: ~~~~~~~~~~~~~~ R$ ${ir}`)



    // ~~~~~~~~~~~~~~ calculo para o vt (para porto alegre) ~~~~~~~~~~~~~~
    if(vt === 0){
        console.log(`Não terá abatimento de VT`)
        var transporte = 0
    }else{
        let custoPassagens = (vt*5.30)*diasMes;
        let tetoSalVT = salario*0.06;

        // A regra: desconta o que for MENOR entre o custo real e os 6%
        if(custoPassagens < tetoSalVT) {
            transporte = Number(custoPassagens.toFixed(2));
            console.log(`O VT é descontado é pelo custo das passagens sendo: R$ ${transporte}`)
        }else{
            transporte = Number(tetoSalVT.toFixed(2))
            console.log(`O VT é descontado é pela base salarial sendo: R$ ${transporte}`)
        }
    }
    console.log(`Logo seu salário liquido é de ${(salario-inss-ir-transporte).toFixed(2)}`)
}
salarioLiquido(1900,2,30, 0)
salarioLiquido(6500,2,30, 0)



