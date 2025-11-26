# Avaliação do Projeto Transplantas – Parte 3

## 1. Qualidade Geral do Projeto
O projeto demonstra boa organização, modularização consistente e evolução clara em relação à primeira parte. A separação de componentes (header, footer e header de pesquisa) foi bem implementada e facilita manutenção.

A responsividade e acessibilidade receberam atenção, mas ainda há melhorias necessárias para garantir uma experiência fluida em telas menores e para usuários com necessidades assistivas.

---

## 2. Pontos Fortes Identificados

### ✔ Modularização
- Separação correta dos componentes em arquivos HTML independentes.
- Uso adequado de JavaScript para importar header/footer dinamicamente.

### ✔ Interatividade
- Implementação do menu hambúrguer funcional para mobile.
- Scripts organizados dentro da pasta `interatividade`.

### ✔ Acessibilidade
- Ajuste de tamanhos de fonte que melhoraram as notas do Lighthouse.
- Melhor aproveitamento visual no mobile após as correções.

### ✔ Responsividade
- Melhorias no grid de produtos.
- Barra de pesquisa mais estável e com tamanho adequado em diferentes telas.

### ✔ Integrações externas
- Links funcionais para WhatsApp e Instagram.
- Boa solução para pequenos negócios.

---

## 3. Pontos a Melhorar

### ❗ Responsividade
1. Algumas imagens continuam muito grandes ou distorcidas em telas pequenas.
2. Cards de produtos poderiam usar `min-width` e `max-width` mais equilibrados.
3. O menu hambúrguer às vezes cobre conteúdo — adicionar overlay ajudaria.

### ❗ Acessibilidade
1. Alguns botões ainda não possuem `aria-label`.
2. O foco de navegação no teclado ainda está fraco. Sugestão:
   ```css
   :focus {
       outline: 2px solid #6200ea;
       outline-offset: 3px;
   }
   ```
3. Imagens decorativas deveriam usar `alt=""` para não poluir leitores de tela.

### ❗ Organização de Código
1. O CSS possui várias regras repetidas.
2. Recomenda-se criar variáveis de cor no `:root` para padronização.
3. A pasta `img` contém imagens não utilizadas.

---

## 4. Melhorias Recomendadas para o Negócio
- Criar uma página “Sobre nós”.
- Incluir um formulário funcional usando Formspree.
- Adicionar breadcrumbs na página de produtos.
- Criar catálogo em PDF.
- Adicionar avaliações de clientes.

---


---

## 6. Comentário Final
O grupo aplicou corretamente modularização, responsividade, acessibilidade e interatividade. Pequenos ajustes finais podem elevar ainda mais o nível profissional do site.
