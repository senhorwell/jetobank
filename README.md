## Descrição das alterações
### Video testando

### Video Alterações


## Validação

-   [x] Declaro que testei e validei o funcionamento dos **critérios de aceite** da tarefa, conforme descritos em backlog.

## Revisão de Códigos

Para cada código de revisão, há um nível de severidade que se inicia em 🟩 **aceitável**, 🟨 **deliberável** e 🟥 **inaceitável**, sendo a **não ocorrência** de problemas pendentes, um critério para a mescla de branches ser aceita.

<details>
<summary>Ver lista de <b>Códigos de revisão</b> 👈</summary>

| Código  | Severidade | Descrição                                                                                                                                                                                                                                                                                       |
| ------- | :--------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DCN** |     🟨     | **Documentação necessária:** quando há necessidade direta de se explicar um código, de forma técnica e que não incida em obrigação de revisão contínua – para prevenir obsolescência.                                                                                                           |
| **DDX** |     🟥     | **Documentação desconexa:** por exemplo, quando a documentação em nível de classe descreve os parâmetros do construtor, ou de implementações que acontecem posteriormente, ou ainda de maneira a não fazer sentido.                                                                             |
| **DIP** |     🟨     | **Documentação necessária incompleta:** quando faltam informações de descrição, ou definições precisas em nível de parâmetros.                                                                                                                                                                  |
| **DDO** |    🟩🟨    | **Documentação desatualizada ou obsoleta:** quando a documentação foi feita de maneira a não prevenir que fosse necessária atualização constante, e não houve uma continuidade a tornando desatualizada.                                                                                        |
| **TTE** |     🟨     | **Falta de técnica de tratamento de excepcionais:** quando não há uma forma de prevenir/tratar erros ou condições excepcionais que podem acontecer em determinado código.                                                                                                                       |
| **TTF** |     🟥     | **Falta de informações/instruções técnicas de tratamento de excepcionais:** quando a mensagem de erro não inclui informações específicas sobre o que deu errado e qual a operação que estava sendo executada, e não a reporta a um log.                                                         |
| **VCV** |     🟥     | **Variáveis/Constantes com nomes não descritivos:** quando o nome da variável/constante é tão sintético que não transmite informação para formar sentido ao ser lida por um desenvolvedor.                                                                                                      |
| **VCE** |     🟥     | **Variáveis/Constantes com nomes sem padrões estabelecidos:** quando o nome da variável/constante foi escrito fora do padrão pré-estabelecido no projeto (**camelCase** 🐫 para variáveis, **UPPERCASE**+**snake_case** 🐍 para constantes em PHP, e **camelCase** 🐫 para constantes em Ecma). |
| **CRD** |     🟥     | **Código repetido ou que retorna resposta já mapeada:** quando o código é muito semelhante ou duplicado, e é repetido no mesmo arquivo, ou que precisaria ser componentizado.                                                                                                                   |
| **LDS** |     🟥     | **Classes dispensáveis:** quando uma classe não fornece muita funcionalidade ou não expressa quantidade significativamente relevante de informações.                                                                                                                                            |
| **LPE** |     🟥     | **Classes com nomes sem padrões estabelecidos:** quando o nome da classe foi escrito fora do padrão pré-estabelecido no projeto (**PascalCase** 🐇).                                                                                                                                            |
| **LDV** |     🟥     | **Classes com nomes não descritivos:** quando o nome da classe não transmite informação para formar sentido ao ser lida por um desenvolvedor.                                                                                                                                                   |
| **FDS** |     🟥     | **Funções/Métodos dispensáveis:** quando uma função/método é utilizada apenas uma vez, e pode ser incluída como parte do código que a utiliza.                                                                                                                                                  |
| **FPE** |     🟥     | **Funções/Métodos com nomes sem padrões estabelecido:** quando o nome da função/método foi escrito fora do padrão pré-estabelecido no projeto (**camelCase** 🐫).                                                                                                                               |
| **FDV** |     🟥     | **Funções/Métodos com nomes não descritivos:** quando o nome da função/método não transmite informação para formar sentido ao ser lida por um desenvolvedor.                                                                                                                                    |
| **FDX** |     🟥     | **Funções/Métodos desconexas:** quando uma função/método não se comporta de maneira esperada. Um exemplo, uma função chamada toArray retornar XML.                                                                                                                                              |
| **IDX** |     🟥     | **Indentação desconexa:** quando um código é indentado de maneira a gerar erro de interpretação humana, ou fora do padrão pré-estabelecido no projeto.                                                                                                                                          |

</details>

Checklist de regularidade (**Revisor**):

-   [x] 🟨 Não há ocorrências de **DCN**;
-   [x] 🟥 Não há ocorrências de **DDX**;
-   [x] 🟨 Não há ocorrências de **DIP**;
-   [x] 🟩🟨 Não há ocorrências de **DDO**;
-   [x] 🟥 Não há ocorrências de **TTE**;
-   [x] 🟥 Não há ocorrências de **TTF**;
-   [x] 🟥 Não há ocorrências de **VCV**;
-   [x] 🟥 Não há ocorrências de **VCE**;
-   [x] 🟥 Não há ocorrências de **CRD**;
-   [x] 🟥 Não há ocorrências de **LDS**;
-   [x] 🟥 Não há ocorrências de **LPE**;
-   [x] 🟥 Não há ocorrências de **LDV**;
-   [x] 🟥 Não há ocorrências de **FDS**;
-   [x] 🟥 Não há ocorrências de **FPE**;
-   [x] 🟥 Não há ocorrências de **FDV**;
-   [x] 🟥 Não há ocorrências de **FDX**;
-   [x] 🟥 Não há ocorrências de **IDX**;
