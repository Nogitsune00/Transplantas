# Transplantas
Esse é um trabalho universitário onde vamos criar um site para exibir os produtos de uma floricultura

## Integrantes e Papéis
**Arthur Ramalho** @ARTHURR1898 – Responsável pela estruturação da página inicial, e de produtos, modularização do código, implementação de integrações externas, melhoria de interatividade, coordenar e realizar a avaliação de duplas.  
**Ana Luísa Moreira** @Nogitsune00 – Responsável pela página de contato, design das páginas, realizar revisões de questões de responsividade e acessibilidade, realizar ajustes finais no código e organizar o repositório do GitHub.  

[Protótipo detalhado no Figma](https://www.figma.com/design/MTeJ6MqGfnK5ulyaLB1oE6/Transplantas?node-id=0-1&t=prtKcw9bp3SQoPoF-1 )  
[Site hospedado no GitHub Pages](https://nogitsune00.github.io/Transplantas/ )  
Site publicado no dia 14/10 e última atualização realizada no dia 21/11.

## Tecnologias utilizadas
Para a construção do site foram usadas as principais tecnologias de desenvolvimento web, sendo elas:  
HTML5 - Linguagem de marcação de HiperTexto  
CSS3 - Folhas de Estilo em Cascata  
JS - JavaScript  
## Estrutura de pastas
Transplantas/  
├── index.html  
├── contato.html  
├── produtos.html  
├── componentes/  
│   ├── footer.html  
│   ├── header.html  
│   └── header-pesquisa.html  
├── estilo/  
│   ├── style.min.css  
│   └── style.css  
├── img/  
│   ├── arranjo_branco-removebg.png  
│   ├── astromelias.webp  
│   ├── buque_de_flores_do_campo-removebg.png  
│   ├── floresdocampo.webp  
│   ├── girasol-removebg.png  
│   ├── girassol.webp  
│   ├── instagram-logotipo_971166-164438.avif  
│   ├── logo.png  
│   ├── margarida.webp  
│   ├── mini-orquideas-ouro.webp  
│   ├── orquidea-phalaenopsis.webp  
│   ├── pinoquio-marsala.webp  
│   ├── rosasvermelhasjornal-removebg.png  
│   ├── rosasvermelhasjornal.webp  
│   └── rosasvermelhas.webp   
├── interatividade/  
│   ├── componentes.js  
│   ├── componentes.min.js  
│   ├── script.min.js  
│   └── script.js  
├── docs/  
│   ├── teste-navegadores/  
│   │   ├── Crome-contato.png    
│   │   ├── Crome-index.png    
│   │   ├── Crome-produtos.png  
│   │   ├── edge-contato.png    
│   │   ├── edge-index.png   
│   │   └── edge-produtos.png  
│   ├── teste-responsividade/  
│   │    ├── Desktop Full HD.png  
│   │    ├── Desktop HD.png  
│   │    ├── iPad pro.png  
│   │    ├── iPad.png  
│   │    ├── iPhone 12 Pro.png  
│   │    └── iPhone SE.png   
│   ├── avaliacoes-recebidas/  
│   │   └── avaliacao-dupla.md  
│   └──avaliacoes-enviadas/  
│       └── avaliacao-transplantas.md  
└── README.md 

A pasta docs contém imagens do site em diferentes testes de caso, assim como a avaliação recebida pela outra dupla e a avaliação feita para esta mesma dupla, mostrando  nos testes a responsividade do site em diferentes tamanhos de tela e o seu comportamento em diferentes navegadores. Já a pasta de estilo apresenta os arquivos de CSS, seguindo pela mesma lógica temos a pasta interatividade, que guarda os arquivos que contêm JavaScript. Passando para a próxima pasta, temos a pasta de componentes, que guarda diferentes arquivos com códigos HTML que são integrados nas páginas completas ao acessar o site. Por fim, temos a pasta img que armazena todas as imagens utilizadas no decorrer do site.
## Projeto
Esse projeto foi proposto para ser realizado ao longo do semestre, sendo dividido em três partes principais, que abordam diferentes etapas do desenvolvimento.
### Parte 1
Nessa etapa começamos a desenvolver o nosso projeto, primeiro escolhendo um pequeno negócio que poderia ter o seu site reformulado ou criado, após essa escolha fizemos o protótipo de como seria o site utilizando o Figma. Depois desse planejamento entramos na parte de de fato fazer o site, montando seu esqueleto com HTML e utilizando CSS para dar estilo a ele.
### Parte 2
Na segunda etapa analisamos o código que tínhamos, realizando melhorias de responsividade, aplicando modularização ao código para melhor manutenção futura, aplicando integrações que fossem coerentes com a nossa proposta, etc. Foi uma etapa focada em melhorar o que já tínhamos em mãos.
### Parte 3
Nessa etapa final será realizada a publicação do site no GitHub Pages, por isso essa etapa foca mais em analisar todo o código e identificar possíveis erros, fazendo uma checagem final e documentando o projeto como um todo de forma única e completa.
##Otimizações realizadas
As imagens utilizadas no projeto tiveram o seu tamanho reduzido para tornarem o carregamento do site mais rápido e por consequência tornar o site mais leve, com esse mesmo propósito os arquivos CSS e JS que estavam sendo utilizados foram minimizados, visando uma melhor otimização do site.
## Testes realizados
Foram realizados dois tipos de testes, adequação do site a diferentes navegadores e responsividade.
### Teste de navegadores
O site foi testado em dois navegadores diferentes, google chrome e edge, nos dois navegadores o site apresentou uma boa compatibilidade, não apresentando falhas e portanto, não foram necessárias alterações no código ao longo deste teste.  
[Imagens desse teste](/docs/teste-navegadores/)
### Teste de responsividade
O site foi testado em diferentes resoluções de tela para verificar o seu bom funcionamento, os tamanhos de tela testados foram: 375x667, 390x844, 768x1024, 1024x1366, 1280x720, 1920x1080.
Ao realizar esse teste não foram percebidos problemas com relação ao tamanho das fontes usadas pelo site e a usabilidade de seus elementos, no entanto foram percebidos ícones que não eram redimensionados ao diminuir a tela, sendo adicionado então novos tamanhos para eles em diferentes pontos de resolução. Além disso, ao realizar o teste em maior resolução foi observado que os produtos não eram alinhados de forma correta, exibindo somente um produto por linha ao invés de quatro, como era esperado, para resolver isso foi adicionado uma especificação de colunas para os elementos grid globais, que antes só estava presente a partir de certos padrões de resolução.  
[Imagens desse teste após resolução de problemas](/docs/teste-responsividade/)
## Reflexões individuais
### Ana Luísa:
#### Aprendizados Técnicos:
Com esse projeto eu desenvolvi mais conhecimento e experiência principalmente com a utilização do git e JavaScript, que eram tecnologias que eu não tinha muito contato. Apesar disso, não tive muitas dificuldades em aprender as tecnologias necessárias para esse projeto, mas acredito que o que eu mais recebi ajuda foi ao utilizar JS, pois por conta de suas particularidades, que eu não conhecia, não fiz o melhor uso da linguagem ao tentar usá-la, apesar disso acredito que o que eu tive um melhor aproveitamento foi na utilização do Git, pois conheci melhor o seu potencial.
#### Aprendizados de processo:
Trabalhar em dupla foi uma experiência com diversos pontos altos e baixos, por um lado fui capaz de aprender mais com a minha dupla, tendo adquirido certos conhecimentos por parte do trabalho em equipe, por outro, organizar as tarefas e funções se torna mais desafiador quando se tem outra pessoa, assim como a organização de quando realizar o trabalho. Nós frequentemente separamos o que era pedido para cada entrega em partes menores, que eram então divididas entre a gente, onde nos comunicamos sempre que fazíamos alguma alteração ou precisávamos da ajuda do outro para terminar o que estávamos fazendo. Acredito que essa separação de tarefas funcionou bem, pois permitiu um certo nível de autonomia para a gente ajustar as tarefas de acordo com a nossa rotina.
#### Desafios enfrentados:
Para mim o maior desafio do projeto foi mantê-lo organizado no repositório do GitHub, pois ao implementar novas funcionalidades elas foram feitas direto no código principal, dificultando para consertar erros. Superamos esse problema, criando uma nova branch temporária que armazenava o projeto correto, por conta do prazo de entrega curto que tínhamos, e depois normalizamos a branch principal. Se eu pudesse voltar no tempo implementaria as mudanças aos poucos no projeto principal, realizando implementações somente quando elas se tornassem 100% confiáveis, evitando o trabalho necessário para organizar o repositório em caso de erros.
### Arthur:
#### Aprendizados Técnicos:
Durante o desenvolvimento do projeto, aprendemos a aplicar conceitos essenciais de HTML e CSS de forma estruturada e profissional. Evoluímos no uso de tags semânticas, organização de seções, responsividade com media queries. Também aprofundamos nossa compreensão sobre modularização, carregando componentes com JavaScript e mantendo o código mais limpo e reutilizável. Outra habilidade importante adquirida foi o uso do Git e GitHub para controle de versão, aprendemos a clonar repositórios, fazer commits, resolver conflitos e estruturar o projeto de maneira organizada. Entre todos os conteúdos, o conceito mais desafiador foi a responsividade combinada com o menu hambúrguer, pois exigiu testes em vários tamanhos de tela e ajustes cuidadosos no CSS. Apesar disso, agora dominamos muito melhor conceitos como flexbox, grid e manipulação de DOM, que no início do projeto pareciam muito mais complexos.
#### Aprendizados de processo:
Trabalhar em dupla foi uma experiência valiosa para entender como projetos reais funcionam. No começo, o maior desafio foi dividir tarefas e garantir que ambos estivessem trabalhando na mesma versão sem sobrescrever o progresso um do outro. Para isso, combinamos de manter comunicação constante e dividir o projeto em partes menores: enquanto um cuidava da estilização, outro organizava o HTML ou revisava detalhes de acessibilidade. Essa metodologia funcionou muito bem, pois permitiu que cada pessoa contribuísse com seus pontos fortes, além de facilitar a revisão mútua. A colaboração se tornou mais fluida ao longo do tempo, revisar e testar cada componente antes de integrar ao projeto final.
#### Desafios enfrentados:
O maior desafio do projeto foi lidar com a responsividade da página de produtos e a integração correta dos componentes com JavaScript. Várias vezes o layout quebrava, principalmente em telas menores, e tivemos que refatorar o CSS para garantir que tudo se encaixasse de forma harmônica. Para superar isso, pesquisamos e testamos diferentes abordagens. Caso pudéssemos voltar no tempo, organizaríamos a estrutura do projeto desde o início com modularização, evitando retrabalho, e testaríamos mais cedo a responsividade para não acumular ajustes nas etapas finais.
## Reflexões da dupla
### Evolução do projeto
O projeto teve uma grande evolução de como seus elementos funcionam, tendo mais interação com o usuário e melhorando a experiência de se navegar em diferentes tamanhos de tela. No começo não haviam muitas interações do site, sendo ele muito estático, mas com o decorrer do projeto ele se tornou mais interessante, sendo essa uma grande mudança. Acreditamos que o projeto atende a sua proposta, pois com ele aprendemos a trabalhar melhor em equipe, passamos por diversas ferramentas para desenvolver o site a aprendemos mais com elas, além de ver o potencial que se pode alcançar em um projeto com estudo próprio e instruções de outros, o que resultou em um site funcional e interessante.
### Feedbacks recebidos
#### O que aprendemos com a avaliação dos colegas
Com base na avaliação recebida, pudemos perceber diversos pontos importantes sobre o desenvolvimento do projeto. A análise destacou que nossa modularização foi bem executada, especialmente pela separação do header, footer e header de pesquisa, o que deixou o código mais organizado e facilitou a manutenção. Também recebemos elogios pela implementação do menu hambúrguer e pelas integrações externas, como o link para WhatsApp e Instagram, que são recursos úteis para pequenos negócios. Além disso, os ajustes realizados em responsividade e acessibilidade foram reconhecidos como positivos e mostraram que conseguimos evoluir desde as primeiras entregas.
#### Feedbacks mais úteis
Entre os feedbacks mais úteis, destacam-se as observações sobre a responsividade em telas menores, especialmente o tamanho reduzido de algumas imagens e a necessidade de garantir que todos os botões possuam aria-label para melhorar a acessibilidade real do site. Também foi citado que alguns pontos do CSS poderiam ser reorganizados, o que ajuda a lembrar da importância de manter apenas o que é necessário no repositório. Essas sugestões foram essenciais porque evidenciam detalhes que impactam diretamente a experiência do usuário e a qualidade técnica do projeto.
#### Como pretendemos aplicar as sugestões
Pretendemos aplicar essas sugestões revisando novamente a responsividade dos elementos, principalmente imagens e cards de produtos, garantindo que ocupem o espaço de maneira mais confortável em celulares. Também ajustaremos os nomes acessíveis nos botões para atender às boas práticas de acessibilidade. Outro ponto importante será reorganizar o CSS e remover arquivos não utilizados, mantendo o repositório limpo e eficiente. Por fim, consideramos implementar algumas das recomendações adicionais para o negócio, como uma página “Sobre nós”, formulário funcional via Formspree e possivelmente um catálogo em PDF para facilitar a visualização dos produtos.
### Relevância para o Negócio
Acreditamos que o site agregaria valor ao negócio escolhido ao ponto de que quando começamos o projeto o negócio não tinha um site, tendo seus clientes que irem até a loja ou ligar para ela para saber se tinha o que precisavam, mas ao passo que a loja apresenta um site para o cliente ele pode, mais facilmente, ter contato com o negócio e ser incentivado a conhecê-lo, gerando uma rede maior de clientes.
## Próximos passos e melhorias futuras
### Melhorias técnicas planejadas
- Adicionar uma página de produtos dinâmica
### Conhecimentos a aprofundar
- Aprofundar conhecimentos em acessibilidade WCAG;
- Estudar frameworks como Vue.js e Angular;
- Estudar mais utilizações de CSS.
## Créditos
Projeto desenvolvido pelos integrantes Arthur Ramalho e Ana luísa Moreira, com apoio da professora e base teórica disponibilizada em aula. Parte das pesquisas e soluções foram aprimoradas com testes práticos, documentação oficial e o uso do GitHub.
