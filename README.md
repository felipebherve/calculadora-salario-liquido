# Payroll calculator (net salary)

🇺🇸 English · 🇧🇷 [Português](README.pt-BR.md)

## Where I was when I made this

I wrote this in **March 2026**, while finishing the Udemy JavaScript course ([javascript-udemy-estudos](https://github.com/felipebherve/javascript-udemy-estudos)). I worked for years with payroll and bank reconciliation, so this was a chance to turn rules I already knew from work into code.

It started as the mini project of that course. This repository is where I plan to grow it into a small website.

## What it does

[`Salarioi_Liquido.js`](Salarioi_Liquido.js) receives the gross monthly salary and calculates the net salary the way a Brazilian payroll does:

- **INSS** (social security) using the progressive brackets, with the contribution ceiling.
- **IRRF** (income tax), following the 2026 rules described in the code comments: exemption for salaries up to R$ 5,000 through the extra reducer, the progressive table, and a deduction per dependent child.
- **Transport voucher (vale-transporte):** discounts the lower of 6% of the salary or the real cost of the fares (the fare used is the Porto Alegre one).

It's written as a function, `salarioLiquido(salario, vt, diasMes, filhos)`, with validation of the parameters, and prints each step of the calculation.

```bash
node Salarioi_Liquido.js
```

The end of the file calls it with two example salaries.

> This is a learning project. Tax tables change every year, so check the official values before using it for anything real.

## What I learned

`switch (true)` for ranges, progressive calculations, `toFixed` and rounding money in JavaScript, validating parameters, and how to turn a rules document (in the comments at the top of the file) into code.

## Next steps

A web page with a form (salary, dependants, transport voucher) that shows the result and each discount, plus tests with known salaries.
