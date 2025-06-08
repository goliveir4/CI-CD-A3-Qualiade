# CI-CD-A3-Qualiade

Pipeline criado para a avaliação A3 da matéria de Gestão e Qualidade de Software

Este repositório é um projeto de demonstração prático para a implementação de um pipeline de Integração Contínua (CI) utilizando um ambiente Node.js, com testes automatizados escritos na framework Jest, e orquestrado pela ferramenta GitHub Actions.

O objetivo é automatizar a verificação da qualidade do código a cada nova alteração, garantindo que a lógica principal da aplicação permaneça funcional e livre de regressões.


✨ Funcionalidades Demonstradas

✔️ Automação de Testes: Utilização do Jest para escrever e executar testes unitários.

✔️ Integração Contínua (CI): Pipeline configurado para rodar automaticamente a cada push ou pull request.

✔️ Ambiente Node.js: Configuração de um ambiente de desenvolvimento e teste com Node.js e gerenciamento de dependências com NPM.

✔️ Orquestração com GitHub Actions: Uso de um workflow para automatizar todo o processo de validação do código.


🛠️ Tecnologias Utilizadas

Linguagem: JavaScript

Ambiente: Node.js (v20.x)

Gerenciador de Pacotes: NPM

Framework de Testes: Jest

Ferramenta de CI/CD: GitHub Actions


⚙️ Pipeline de CI/CD Explicado

O coração deste projeto é o pipeline de automação definido no arquivo .github/workflows/nodejs_ci.yml.

Gatilhos (Triggers)

O pipeline é acionado automaticamente em duas situações:

push: Sempre que um novo código é enviado (push) para qualquer branch do repositório.
pull_request: Sempre que uma nova "solicitação de integração" (Pull Request) é aberta ou atualizada.


Etapas do Pipeline

O pipeline executa uma série de passos em uma máquina virtual limpa (ubuntu-latest) para garantir um ambiente de teste consistente:

Checkout do Código (actions/checkout@v4)

O que faz: Baixa a versão mais recente do código do repositório para a máquina virtual. 
                                                                                  
Configuração do Ambiente Node.js (actions/setup-node@v4)

O que faz: Instala a versão especificada do Node.js (20.x), preparando o ambiente para executar comandos JavaScript e NPM. 

A opção cache: 'npm' acelera o processo em execuções futuras, reutilizando as dependências já baixadas.

Instalação das Dependências (npm install)

O que faz: Executa o comando npm install para baixar e instalar todas as dependências de desenvolvimento listadas no arquivo package.json (neste caso, o Jest).

Execução dos Testes (npm test)

O que faz: Roda o comando npm test, que por sua vez executa o Jest. O Jest automaticamente encontra e executa todos os arquivos de teste (com final .test.js) no projeto. Se qualquer teste falhar, esta etapa falhará, e todo o pipeline será interrompido e marcado como "falho". Se todos passarem, o pipeline é concluído com sucesso.


📁 Estrutura do Projeto

- .github/workflows/
- nodejs_ci.yml           - Arquivo de definição do pipeline do GitHub Actions
- node_modules/           - Pasta gerada pelo `npm install` (não enviada ao Git)
- calculadora.js           - O código da aplicação com a lógica principal
- calculadora.test.js      - O código de teste para a calculadora
- package.json            - Define o projeto, scripts e dependências
- package-lock.json       - "Trava" as versões exatas das dependências

