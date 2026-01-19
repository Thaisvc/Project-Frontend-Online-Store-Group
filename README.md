
# Frontend Online Store 🛍️💻

Projeto de estudo desenvolvido durante a formação em **Desenvolvimento Web da Trybe**.  
Uma **loja online** front-end que consome dados de produtos de uma API, exibe a lista de itens, permite adicionar ao carrinho, calcular total e manter os itens no armazenamento local.

---

## 💡 Sobre

O *Frontend Online Store* simula uma experiência de e-commerce onde o usuário pode:

✔️ Buscar produtos por nome ou categoria  
✔️ Ver lista de produtos com imagem, título e preço  
✔️ Adicionar produtos ao carrinho  
✔️ Ver o total acumulado  
✔️ Remover itens do carrinho  
✔️ Persistir itens no `localStorage`  
✔️ Navegar entre telas com interface intuitiva

O objetivo principal é reforçar prática em:

- Manipulação do DOM  
- Fetch API  
- Eventos e lógica de carrinho  
- Armazenamento no navegador  
- Layout e responsividade

---

## 🛠 Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Fetch API**
- **localStorage**
- (opcional) bibliotecas leve de UI

---

## 🚀 Como rodar

### 1. Clone o repositório

```bash
git clone https://github.com/Thaisvc/Project-Frontend-Online-Store-Group.git
cd Project-Frontend-Online-Store-Group
````

### 2. Abra no navegador

Basta abrir o arquivo:

```
index.html
```

ou rodar com um servidor local (opcional):

```bash
npx serve .
```

ou

```bash
http-server
```

---

## 🛍 Funcionalidades

### 🔎 Buscar produtos

O usuário pode procurar itens digitando palavras-chave na barra de busca.

---

### 🛒 Adicionar ao carrinho

Cada produto tem botão para adicionar ao carrinho, atualizando o total automaticamente.

---

### 🧮 Total do carrinho

O total de valores soma corretamente com cada adição e remoção de itens.

---

### ❌ Remover itens

No carrinho, cada item pode ser removido com um clique — o valor total atualiza.

---

## 📁 Estrutura do projeto

```
Project-Frontend-Online-Store-Group/
├── css/
│   └── style.css
├── js/
│   ├── index.js
│   ├── cart.js
│   └── fetchProducts.js
├── images/
├── index.html
├── README.md
└── outros assets
```

---

## 🧪 Comportamento esperado

✔️ Os produtos aparecem corretamente ao carregar <br>
✔️ A barra de busca filtra resultados <br>
✔️ Itens adicionados persistem ao recarregar <br>
✔️ Remover item atualiza o total e o carrinho <br>

---

## 📚 Aprendizado

Com esse projeto consolidou:

✔️ Manipular o DOM com JavaScript <br>
✔️ Usar `fetch` para consumir API <br>
✔️ Atualizar interface dinamicamente <br>
✔️ Armazenar dados no navegador <br>
✔️ Criação de layout responsivo <br>


---

