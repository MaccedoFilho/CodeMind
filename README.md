# Meu Site React TypeScript

Um projeto de site criado com React e TypeScript.

## Estrutura de Pastas

```
site-curso/
│
├── public/                  # Arquivos estáticos
│   ├── index.html           # HTML principal
│   └── manifest.json        # Manifesto da aplicação
│
├── src/                     # Código fonte
│   ├── components/          # Componentes reutilizáveis
│   │   ├── NavBar.tsx       # Barra de navegação
│   │   └── Footer.tsx       # Rodapé
│   │
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home.tsx         # Página inicial
│   │   └── About.tsx        # Página Sobre
│   │
│   ├── styles/              # Arquivos CSS
│   │   ├── global.css       # Estilos globais
│   │   ├── App.css          # Estilos para o App
│   │   ├── Home.css         # Estilos para a Home
│   │   ├── About.css        # Estilos para About
│   │   ├── NavBar.css       # Estilos para o NavBar
│   │   └── Footer.css       # Estilos para o Footer
│   │
│   ├── App.tsx              # Componente principal
│   ├── index.tsx            # Ponto de entrada
│   └── reportWebVitals.ts   # Relatório de métricas web
│
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração do TypeScript
└── README.md                # Documentação do projeto
```

## Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

4. Acesse http://localhost:3000 no seu navegador

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm build`: Compila o aplicativo para produção
- `npm test`: Executa os testes
- `npm eject`: Ejeta as configurações do Create React App

## Tecnologias Utilizadas

- React 18
- TypeScript
- React Router DOM
- CSS puro (sem frameworks adicionais)

## Personalização

Este projeto foi estruturado para ser fácil de entender e personalizar. Você pode:

1. Modificar os componentes existentes
2. Adicionar novas páginas na pasta `pages`
3. Criar novos componentes na pasta `components`
4. Personalizar os estilos nos arquivos CSS correspondentes

## Contato

Se tiver dúvidas sobre este template de projeto, entre em contato:

- Email: ricardomacedodev@gmail.com
