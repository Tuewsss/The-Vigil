# 🕯️ A Vigília

> Um projeto de RPG feito em **Next.js**. Frontend simples, criado pra estudar e evoluir na prática.

Aqui você encontra o sistema do RPG, as fichas de personagens e as famílias — as casas principais que movem a história de **A Vigília**.

---

## ⚔️ O que tem no projeto

- **Sistema** — as regras e a base de como o RPG funciona.
- **Personagens** — os personagens do mundo de A Vigília.
- **Famílias** — as casas principais do RPG.

## 🧩 Tecnologias

- **Next.js** (React) com **App Router**
- **TypeScript**

## ✅ Antes de começar

Você só vai precisar de:

- Node.js 18+ e npm
- Git

## 📥 Clonando o projeto

```bash
git clone https://github.com/seu-usuario/a-vigilia.git
```

## 🚀 Rodando o projeto

1. Instala as dependências:

```bash
npm install
```

2. Sobe o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abre no navegador: `http://localhost:3000`

Pronto, é só navegar entre as páginas de **Sistema**, **Personagens** e **Famílias**.

## 📦 Gerando a versão de produção

Quando quiser gerar os arquivos finais (build):

```bash
npm run build
```

E pra rodar a versão de produção localmente:

```bash
npm run start
```

## 📁 Estrutura

O projeto é só uma pasta, bem direto:

```
a-vigilia/
├── public/
│   └── agents/          # imagens dos personagens (ex: dabi.png)
├── src/
│   ├── app/             # páginas (App Router): sistema, personagens, famílias
│   ├── components/      # componentes reutilizáveis
│   └── data/            # dados do RPG (personagens, famílias, etc.)
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

Feito com 🕯️ pra estudar e me divertir no caminho.
