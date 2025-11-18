# Transplantas - Projeto integrador - Parte 2

## Integrantes e Papéis
**Arthur Ramalho** @ARTHURR1898 – Responsável pela modularização, implementação de integrações externas e melhoria de interatividade.  
**Ana Luísa Moreira** @Nogitsune00 – Responsável por realizar revisões de questões de responsividade e acessibilidade, realizando melhorias qaundo preciso.  

## Estrutura de arquivos

## Revisão e diagnóstico do projeto atual
- O que já está funcionando bem?
  - A estrutura geral da página responde bem a mudanças de tamanhos de tela, mas acaba tendo elementos muito pequenos em telas menores, dificultando a visualização. O menu de navegação também não se adequa bem a tela, tendo seus elementos muito próximos e pequenos, dificultando a utilização do touch.  
- Quais elementos HTML se repetem em várias páginas?
  - Os elementos que mais se repetem foram o header junto com a barra de navegação, e o elemento de rodapé do site.  
- Onde o layout "quebra" ou fica estranho?
   - Os elementos de produtos, presentes na página inicial e de produtos, não redimensiona muito bem, ficando muito pequeno em telas menores, sem aproveitar o espaço disponível da menor maneira.
- Quais melhorias fariam diferença real para o usuário do pequeno negócio?
  - Mostrar a localização do seu negócio direto em seu site ajudaria os seus clientes a identificarem onde ir, atraindo mais pessoas e facilitando a chamada de novos clientes. 

## Ajustes realizados

### Componentes modularizados
Separamos na pasta componentes o header, header com a pesquisa e o footer.
### Ajustes de acessibilidade
Ao analisar o projeto como estava com a ferramenta do google, Lighthouse, foi apontado que o tamanho das fontes usadas em dispositivos móveis estava muito pequena, sendo menor que a recomendada em diversas partes do site, o que foi ajustado aumentando o tamanho da fonte padrão que estava sendo utilizada a partir de certos tamanhos de tela, melhorando a nota do site no quesito acessibilidade pelo Lighthouse.
### Ajustes de responsividade
Foram realizados ajustes de tamanho na barra de pesquisa presente na página de produtos, para que ela pudesse se adequar melhor a diferentes tamanhos de tela. Além disso, foram corrigidos os tamanhos dos produtos em diferentes páginas, para melhor visualização em páginas menores.
### Aprimoramento de interatividade
Adicionamos o menu hamburguer para mobile para quem for ultilizar em dispositivos menores ter uma interface mais limpa.
### Integrações externas adicionadas
Criamos um link para nossos  contatos para o whatsapp e o instagram. agora quando o usuario clicar em ambos os links serao direcionados para o aplicativo.