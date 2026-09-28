# Calculadora de folha de pagamento (salário líquido)

🇧🇷 Português · 🇺🇸 [English](README.md)

## Em que momento eu fiz isto

Escrevi isto em **março de 2026**, enquanto terminava o curso de JavaScript da Udemy ([javascript-udemy-estudos](https://github.com/felipebherve/javascript-udemy-estudos)). Trabalhei anos com folha de pagamento e conciliação bancária, então foi a chance de transformar em código regras que eu já conhecia do trabalho.

Ele nasceu como o miniprojeto desse curso. Este repositório é onde pretendo transformá-lo em um pequeno site.

## O que ele faz

[`Salarioi_Liquido.js`](Salarioi_Liquido.js) recebe o salário bruto mensal e calcula o líquido como uma folha de pagamento brasileira:

- **INSS** com as faixas progressivas, respeitando o teto de contribuição.
- **IRRF** (imposto de renda), seguindo as regras de 2026 descritas nos comentários do código: isenção para salários até R$ 5.000 pelo redutor extra, a tabela progressiva e a dedução por filho dependente.
- **Vale-transporte:** desconta o menor valor entre 6% do salário e o custo real das passagens (a tarifa usada é a de Porto Alegre).

Está escrito como uma função, `salarioLiquido(salario, vt, diasMes, filhos)`, com validação dos parâmetros, e imprime cada etapa do cálculo.

```bash
node Salarioi_Liquido.js
```

O final do arquivo chama a função com dois salários de exemplo.

> É um projeto de aprendizado. As tabelas de impostos mudam todo ano, então confira os valores oficiais antes de usar para algo real.

## O que aprendi

`switch (true)` para faixas, cálculos progressivos, `toFixed` e arredondamento de dinheiro em JavaScript, validação de parâmetros e como transformar um documento de regras (nos comentários no topo do arquivo) em código.

## Próximos passos

Uma página web com formulário (salário, dependentes, vale-transporte) que mostra o resultado e cada desconto, além de testes com salários conhecidos.
