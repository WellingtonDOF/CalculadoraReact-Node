This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

##Calculadora de Buteco

Esse é um projeto que permite realizar o calculo de gorjeta, total a pagar e total a pagar por pessoas.

-----

O botão calcular quando clicado é responsável por realizar a conta com os dados inseridos nos campos "Conta, Pessoa e Gorjeta".

Após aplicar a lógica nos dados para fornecer um resultado é chamado o componente Calculadora que faz a renderização dos dados cálculados na tela.

O botão zerar é responsável por retirar a renderização do componente Calculadora da tela (caso ele esteja) e reiniciar os valores dos campos.

-----

##Tecnologias utilizadas

- React

- Next.js

##Instalação

Para instalar as dependências, use:

bash
  npm install (caso não tenha a pasta .next e node_modules)
  npx run dev (para rodar a aplicação)

Abra a aplicação pelo google no endereço [http://localhost:3000] para ver o resultado.


[necessário ter o Node.js instalado no computador para que funcione!]


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
