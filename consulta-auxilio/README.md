# consulta-auxilio
Projeto realizado utilizando VueJS, Vuex, Axios, Bootstrap e dependências do Node.js para melhora do projeto. O projeto faz consultas de auxílio emergencial com base no CEP e datas informadas. É feito uma requisição na API do viacep com o CEP informado para se adquirir o número de IBGE da cidade, e com essa informação é feita uma nova requisição na API do Portal da Transparência passando um header com uma chave, e enquanto esse processo é feito é mostrado uma tela de carregamento. Junto com essa requisição é feito a requisição em outra API que mostra o total de beneficiados, assim fazendo a paginação correta. Ao fim é mostrado o resultado com as pessoas utilizando uma paginação de acordo com os resultados.

## Instalar dependências
```
npm install
```

### Compilar e executar para desenvolvimento
```
npm run serve
```

### Compilar e minificar para produção
```
npm run build
```

### Correção de erros
```
npm run lint
```

