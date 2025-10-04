## Sorteador de Amigo Secreto

O desafio deste projeto, proposto pela Alura como parte da trilha de Lógica de Programação, foi construir do zero toda a interatividade de um sorteador de Amigo Secreto. Com uma base de HTML e CSS já fornecida, o foco foi totalmente na implementação da lógica com JavaScript para gerenciar listas, realizar sorteios e validar as entradas do usuário.

### As principais funcionalidades implementadas foram:
Adição e Listagem de Amigos: Permitir que o usuário insira nomes de participantes e os visualize dinamicamente em uma lista na tela.

* Validação de Entradas: Impedir a adição de nomes vazios ou duplicados (ignorando diferenças de maiúsculas/minúsculas) para garantir a integridade dos dados antes do sorteio.

* Lógica de Sorteio: Implementar um algoritmo de embaralhamento (Fisher-Yates) para garantir a aleatoriedade do sorteio e, em seguida, exibir os pares de forma cíclica (o último participante sorteia o primeiro).

* Validação de Condição Mínima: Assegurar que o sorteio só possa ser realizado com um número mínimo de participantes.

* Reinicialização Completa: Oferecer uma funcionalidade para limpar todos os dados da aplicação (lista de amigos, resultado do sorteio), preparando-a para um novo uso.

### Principais Aprendizados
Este projeto foi fundamental para solidificar meu conhecimento em:

* Manipulação de Arrays: Utilizar arrays para armazenar listas de dados e métodos como .push(), .map() e .includes() para adicionar, transformar e verificar itens.

* Algoritmos e Lógica de Loops: Implementar um algoritmo de embaralhamento com um loop for reverso e percorrer arrays para processar e exibir dados.

* Validação Robusta de Dados: Criar múltiplas "barreiras" (guard clauses) para verificar entradas de usuário, tratando casos como valores vazios, duplicados e com case-insensitivity.

* Manipulação Avançada do DOM: Atualizar dinamicamente o conteúdo da página (.innerHTML e .value) para fornecer feedback em tempo real ao usuário.

* Escopo e Estrutura de Funções: Organizar o código em funções com responsabilidades claras (adicionar, sortear, reiniciar) e entender como as variáveis interagem entre elas.

### Tecnologias Utilizadas
* HTML5

* CSS3

* JavaScript

