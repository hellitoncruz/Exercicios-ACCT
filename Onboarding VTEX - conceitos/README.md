<h1>VTEX</h1>
<p>
VTEX é uma plataforma de e-commerce SaaS (Software as a Service). Na prática, isso significa que a VTEX é responsável por toda estrutura necessária para que os lojistas possam cadastrar seus produtos, integrar meios de pagamento, calcular frete, etc.
</p>
<h2>
Catálogo
</h2>
<p>
Catálogo é um dos módulos de administração da sua loja. Esta área possibilita configurar as funcionalidades referentes ao sortimento de produtos do seu e-commerce.
</p>
<p>
Funcionalidades básicas do catálogo:
<ul>
  <li>Produtos e SKU</li>
    Nesta aba, é possível adicionar novos produtos e SKUs(os itens que existem efetivamente no seu estoque) à sua loja. É a área onde você insere informações do que é disponibilizado em sua loja, como nome do produto, descrição e imagens.
  <li>Categorias</li>
    Esta parte possibilita criar seções que facilitem a busca pelos produtos oferecidos em sua loja. Para isso, é importante definir a árvore de categorias do seu e-commerce no início do projeto. Você poderá organizar seus itens criando categorias que simplifiquem a identificação dos produtos por setor. Nesta seção, você vai organizar as categorias dos produtos de acordo com a taxonomia da sua loja.
  <li>Marcas</li>
    Aqui você vai cadastrar as marcas dos produtos que existem em sua loja, agrupando os itens. Desta maneira, seus clientes também podem encontrar o que buscam de forma mais específica.
  <li>Importação e Exportação</li>
    Aqui é possível importar ou exportar produtos por planilha. Ao invés de adicionar produtos/SKUs um por um, você pode criar ou editar uma grande quantidade de uma só vez. Também é possível importar/exportar especificações do produto/SKU e imagens.
</ul>
</p>
<p>
  Conceitos da arquitetura do catálogo da VTEX:
</p>
<p>
  <strong>Categoria</strong> é uma forma de organizar os produtos, divisões genéricas. Dentro das categorias os produtos são categorizados em 3 níveis: Departamento, Categoria e Subcategoria.
  <strong>Produto</strong> Para que ele seja disponibilizado em sua loja, precisa estar atrelado a uma categoria e ter no mínimo um SKU vinculado.
  <strong>SKU</strong> O SKU é a variação de um produto, ou seja a unidade física de um produto em estoque
  <strong>Especificações</strong> São as propriedades cadastradas de uma categoria para atribuir características específicas aos produtos e SKUs, exemplo, a cor ou tamanho de um SKU.
</p>

<h2>Preços</h2>
<p>O módulo de Preços, é o sistema responsável pela criação, edição e armazenamento dos dados de preços dos seus SKUs</p>
<p>Ele possui várias funcionalidades, que auxiliam na estratégia de precificação no seu negócio, são elas:</p>
<ul>
  <li>Lista de preços</li>
    Seção que são cadastrados os preços dos produtos, onde é possível consultar e inserir os preços dos SKUs para cada tabela de preço existente na loja.
  <li>Regras de preço</li>
    Seção onde pode se criar regras para as tabelas de preço da loja, essas regras são como funções que modificam os preços bases cadastrados na Lista de preços.
  <li>Arredondamento de Preços</li>
    Onde é possível criar regras de arredondamento para os preços de SKUs. Tem o objetivo de criar regras para exibir os seus preços de maneira mais chamativas para os clientes.
  <li>Configurações</li>
    Onde é possível cadastrar travas para aumentar a segurança das mudanças de preço na sua loja, além de outras configurações de preço para o contexto de sellers, marketplaces e contas franquia.
</ul>

<h2>Promoções e taxas</h2>
<p>
Uma promoção é um desconto concedido ao cliente, na Vtex, o lojista pode criar uma série de regras que determinarão se e como o desconto será aplicado. Os parãmetros considerados por essas regras podem ser, listas de produtos, listas de clientes, intervalos de CEP, valor mínimo de carrinho, etc. 
</p>
<p>
Os descontos podem ser <i>nominais</i> (concede um valor bruto, como R$20), ou <i>percentuais</i> (concede um valor percentual, como 10% do valor total do carrinho.
</p>
<p>
Dentre as promoções há seis tipos:
<ul>
  <li>Promoção regular</li>
  <li>Compre junto</li>
  <li>Leve Mais Por Menos</li>
  <li>Desconto Progressivo</li>
  <li>Compre e Ganhe</li>
  <li>Promoção de Campanha</li>
</ul>
</p>
<p>Uma taxa é um valor adicional expresso em porcentagem que é inserido no preço do produto, com o objetivo de aumentar o valor cobrado do cliente. Funciona, portanto, como o inverso de uma promoção.<p>

<h2>Configurações da conta</h2>
<p> A conta de acesso da VTEX dá acesso ao painel administrativo onde é possível gerenciar seu e-commerce</p>
<p>Na seção <strong>Gerenciamento da Conta</strong>, há 3 partes importantes: <i>Usuários da loja</i>, <i>Perfis de acesso</i> e <i>Dados Gerais da conta</i></p>
<p>O <strong>usuário titular</strong> é  o usuário da loja com maior poder para tomar ações, inclusive ações críticas</p>

<h2>Pedidos</h2>
<p>Ele é gerado quando um cliente aperta o botão Finalizar Compra, a partir desse momento é possível rastrear o fluxo do pedido.</p>
<p>Os pedidos possuem um fluxo, e ele pode ser alterado quando ocorre algo, mudando o status do pedido</p>
<p>Marketplace:  é o ambiente onde é realizado o fechamento do pedido, ou seja, onde o cliente realiza o processo de checkout.</p>
<p>Seller: é o dono do SKU. É, portanto, o responsável pelo fulfilment - ou seja, por fazer a entrega do produto ao cliente</p>
<p>Conceito de reserva: Depois que um pedido é finalizado, precisamos garantir que os itens do carrinho desse pedido não estarão mais disponíveis para compra em sua loja. A reserva conecta o módulo de logística ao módulo de pedidos. Ela impede que um mesmo item seja comprado mais de uma vez.</p>
<p>Há algumas formas de filtrar pedidos, são elas: <i>Período, Status e Situação, e outros como B2B, Instore... </i></p>

<h2>Pagamentos</h2>
<p>O módulo de Pagamentos é o sistema responsável na VTEX por gerenciar todas as ações referentes ao fluxo financeiro da sua loja.</p>
<p>Na arquitetura do Módulo de Pagamentos há alguns conceitos:</p>
<p><strong>Gateway</strong> é um sistema que efetua a transmissão dos dados das compras realizadas na sua loja no momento do checkout</p>
<p><strong>Adquirente</strong>é uma empresa especializada em processar pagamentos, isto é, fazer a liquidação financeira das transações de uma loja por meio de cartões de crédito e débito</p>
<p><strong>Subadquirente</strong> é uma empresa que processa pagamentos e transmite suas informações para os outros players envolvidos no fluxo de pagamento.</p>
<p><strong>Bandeira de Cartão</strong>são empresas responsáveis por definir as regras de negócio para compras realizadas com cartão de crédito, como a quantidade de parcelas em que você pode dividir o pagamento e o número de estabelecimentos em que ele é aceito, nacional e internacionalmente</p>
<p><strong>Banco Emissor</strong>é a instituição financeira responsável pelos meios de pagamento, sejam eles boletos bancários, cartões de débito ou de crédito</p>
<p><strong>Antifraude</strong>é um sistema especializado em analisar as compras realizadas nos sites, com o intuito de identificar operações fraudulenta</p>
<p><strong>Certificação PCI SSC</strong>é um fórum global aberto para o contínuo desenvolvimento, aprimoramento, armazenamento, disseminação e implementação de padrões de segurança para a proteção de dados</p>
<p>O fluxo de transações possui diversos status: Authorizing, Authorized, Analyzing Risk, Risk Approved, Approved, Settlement of $, Settling, Settled, Finished</p>

<h2>Marketplace</h2>
<p>O marketplace é definido como a loja onde uma compra é realizada, e o cliente paga pelo pedido</p>
<p>A VTEX promove a colaboração digital em diferentes cenários. Por exemplo, além de vender seus produtos em outros marketplaces, você também pode atuar como marketplace e vender produtos de outros vendedores em seu site.</p>
<p>No marketplace há o conceito de Seller(a loja responsável por entregar o produto ao cliente), que pela VTEX pode ser cadastrado como Loja VTEX, Parceiro VTEX, Loja física, ou outro.</p>

<h2>Configurações da Loja</h2>
<p>No módulo de configurações da loja, são configurados vários pontos:</p>
<p>Políticas comerciais: Na VTEX, políticas comerciais agrupam as configurações de catálogo, preços, promoções, logística, segmentação de clientes e pagamentos para diferentes estratégias de venda. É necessário criar uma nova política comercial quando uma dessas configurações for diferente entre os canais de venda em que sua loja atua</p>
<p>CMS: é uma ferramenta que ajuda os usuários a criar, editar e publicar conteúdo da Web sem precisar usar código para executar essas tarefas</p>
<p>Checkout: Todas as lojas VTEX possuem uma UI de Checkout nativa pronta para ser utilizada desde o início de suas operações na plataforma. Porém, se o lojista quiser alterar, a VTEX também oferece a opção de personalização do Checkout.</p>
<p>Busca: é um algoritmo inteligente que identifica qual resultado melhor mostrar ao usuário com base no termo de busca</p>

<h2>Cliente</h2>
<p>O Message Center é o módulo responsável por configurar e enviar emails transacionais. São e-mails enviados automaticamente pela loja ao cliente sempre que eventos importantes do fluxo do cliente na loja são concluídos, como cadastro da loja, confirmação de pagamento e envio de produtos.</p>
<p>Este módulo está dividido em duas seções:
<p>Modelos : Aqui você pode editar o conteúdo dos e-mails.</p>
<p>Remetentes : Aqui você pode alterar as informações sobre os remetentes desses e-mails.</p>
</p>