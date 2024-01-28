// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

// Escolha uma das opções para interagir com o sistema:

// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática

// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000

// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.

// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo

// 6 - Sair do sistema

// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// ano, cor, preco

// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.


let carros = [];

function menu() {
    while (true) {
        const opcaoEscolha = prompt(
            `Bem-vindo ao sistema de CRUD de veículos:\n\n` +
            `No momento, o sistema tem ${carros.length} carros cadastrados\n\n` +
            `Escolha uma das opções para interagir com o sistema:\n\n` +
            `1 - Cadastrar veículo\n` +
            `2 - Listar todos os veículos\n` +
            `3 - Filtrar veículos por marca\n` +
            `4 - Atualizar veículo\n` +
            `5 - Remover veículo\n` +
            `6 - Sair do sistema`
        );

        switch (opcaoEscolha) {
            case '1':
                cadastrarVeiculo();
                break;
            case '2':
                listarVeiculos();
                break;
            case '3':
                filtrarVeiculos();
                break;
            case '4':
                atualizarVeiculo();
                break;
            case '5':
                removerVeiculo();
                break;
            case '6':
                alert('Saindo.');
                return;
            default:
                alert('Opção inválida.');
        }
    }
}

function cadastrarVeiculo() {
    let modelo = prompt("Digite o modelo do veículo:");
    let marca = prompt("Digite a marca do veículo:");
    let ano = prompt("Digite o ano do veículo:");
    let cor = prompt("Digite a cor do veículo:");
    let preco = prompt("Digite o preço do veículo:");

    let veiculo = {
        id: carros.length + 1,
        modelo,
        marca,
        ano,
        cor,
        preco
    };

    carros.push(veiculo);
    alert("Novo veículo cadastrado!")
}

function listarVeiculos() {
    if (carros.length === 0) {
        alert ("Não existem veículos cadastrados.");
    } else {
        carros.sort((a, b) => a.preco - b.preco);

        carros.forEach(veiculo => {
            alert(`ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | Ano: ${veiculo.ano} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}`)
        })
    }
}

function filtrarVeiculos() {
    let filtrarMarca = prompt("Digite a marca que deseja filtrar:");
    let veiculosFiltrados = carros.filter(veiculo => veiculo.marca.toLowerCase() === filtrarMarca.toLowerCase());

    if (veiculosFiltrados.length === 0) {
        alert("Nenhum veículo encontrado!");
    } else {
        veiculosFiltrados.sort((a, b) => a.preco - b.preco);

        veiculosFiltrados.forEach(veiculo => {
            alert(`ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}`);

        })
    }
}

function atualizarVeiculo() {
    let idAtualizar = parseInt(prompt('Digite o IDENTIFICADOR do veículo que deseja atualizar:'));
    let veiculo = carros.find ((carro) => carro.id === idAtualizar);

    if (!veiculo) {
        alert ( "Veículo não encontrado. Retornando ao menu inicial.")
    } else {
        let novaCor = prompt("Digite a nova cor do veículo:");
        let novoPreco = prompt("Digite o novo preço do veículo:");

        veiculo.cor = novaCor;
        veiculo.preco = novoPreco;

        alert ("Veículo atualizado com sucesso!");
    }
}

function removerVeiculo() {
    let idRemover = parseInt(prompt("Digite o IDENTIFICADOR do veículo a ser removido:"));
    let indice = carros.findIndex((carro) => carro.id === idRemover);

    if (indice === -1) {
        alert("Veículo não encontrado. Retornando ao menu inicial!");
    } else {
        carros.splice(indice, 1);
        alert("Veículo removido com sucesso!");
    }
}


menu();