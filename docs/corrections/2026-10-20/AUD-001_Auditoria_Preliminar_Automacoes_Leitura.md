# AUD-001 — Auditoria preliminar de automações

> **Nota de contexto adicionada em 20/10/2026.** Registro histórico da inspeção de 18/10/2026, limitado ao projeto/conta/acionadores visíveis naquela evidência. AUD-002 documenta quatro acionadores visíveis e AUD-004 documenta sua pausa posterior (zero visível) naquele escopo; isso não comprova estado atual, inexistência de outros acionadores ou reativação. Nenhuma nova inspeção ou ação operacional foi realizada em 20/10/2026.



**Data:** 2026-10-18
**Escopo autorizado:** inspeção somente de leitura; preparar plano de pausa sem executar mudanças.
**Fonte:** planilha principal `Central de Aluno`, abas `Mapa de Conexões`, `Config Agenda`, `Apps Script Automação`, `Apps Script Agenda`, `Administração`, `Central Operacional` e `Log Automação`.
**Planilha principal:** https://docs.google.com/spreadsheets/d/119Qe_4e_9n0X6tAkaJasB2-QJphlVmAEnm76WFoUxUg/edit


## Constatações comprovadas por leitura


### 1. Triggers previstos no código armazenado na planilha


A função `instalarSistemaCentral()` aparece no código consolidado armazenado na aba `Apps Script Automação`, por volta das linhas 5466–5497. Esse código prevê quatro gatilhos:


| Função | Evento/frequência prevista | Impacto potencial |
|---|---|---|
| `automacaoMicrosEditHandler` | onEdit instalável na Central | Processar alterações operacionais/automação de microciclos |
| `monitorarSistemaCentral` | A cada 5 minutos | Chama `verificarAutomacaoMicros` e sincroniza fontes individuais alteradas |
| `sincronizarBibliotecasAgendado` | Diariamente, por volta de 03h | Sincronizar bibliotecas |
| `atualizarAgendaAgendada` | Diariamente, por volta de 04h | Sincronizar histórico, registros de aulas e agenda |


O monitor contém lógica para verificar alterações em fichas, registrar check-ins/execuções e limpar determinados campos de check-in após conciliação. Portanto, a pausa pode afetar fluxos de histórico e acompanhamento: é indispensável documentar os efeitos.


A mesma função de instalação exclui gatilhos de handlers nomeados e cria novamente os quatro gatilhos; também escreve estados na Central. **Não executar `instalarSistemaCentral()` para auditar ou pausar.**


### 2. Código legado coexistente


A aba `Apps Script Agenda` contém outra função `instalarAutomacaoAgenda()`, prevendo gatilho de edição da agenda e um diário às 04h. Estar armazenado em uma aba **não prova** que esse código esteja no projeto Apps Script em execução.


A aba `Mapa de Conexões` descreve quatro gatilhos como ativos e contém referência a versões anteriores; o cabeçalho do código consolidado referencia versões mais novas.


### 3. Divergências de documentação


- `Mapa de Conexões`: menciona pacote `CA-1.1.1` / `AG-3.3`, e estado homologado de 01/08/2026.
- `Config Agenda`: traz instrução para instalar `CA-1.1.2`.
- `Apps Script Automação`: menciona `CA-1.1.5` / `AG-3.4`, embora o cabeçalho da aba cite também `CA-1.1.4`.
- A `Central Operacional` apresenta 9 alunos, enquanto há capacidade estrutural prevista de 29. Os cadastros e alertas **não representam necessariamente a carteira ativa atual**.


Essas são divergências de texto/estado encontradas no arquivo, **não comprovação da versão realmente implantada**.


## O que NÃO foi confirmado


- Quantos gatilhos estão efetivamente instalados hoje;
- Quais funções estão ativas no editor Apps Script;
- Quais contas criaram os gatilhos e respectivas permissões;
- A data da última execução e erros recentes;
- Outros projetos Apps Script independentes ou gatilhos de planilhas individuais.


O conector Google Drive permite ler planilhas, mas nesta auditoria não há acesso à lista de gatilhos efetivamente instalados no Google Apps Script. **Não afirmar que quatro estão ativos sem essa verificação.**


## Procedimento recomendado para a próxima etapa


1. Abrir a Central original → **Extensões → Apps Script** → ícone de relógio **Acionadores / Triggers**.
2. Registrar, por captura de tela ou lista, os nomes de funções, origem do evento, periodicidade, conta proprietária e erros disponíveis.
3. Abrir **Execuções** e verificar o comportamento recente; não usar funções de instalação para consultar estado.
4. Identificar outras automações independentes e quaisquer rotinas de alunos que dependam desses gatilhos.
5. Preparar uma lista de gatilhos a desativar com justificativa, impacto esperado e forma de reativação.
6. Solicitar confirmação explícita antes de pausar/desativar. Preservar logs, fórmulas, backups e histórico.


**Status em 18/10/2026: SOMENTE LEITURA. Nenhuma automação pausada. Nenhum código, dado de aluno, gatilho, calendário ou planilha foi modificado.**

## Registro de contexto — 20/10/2026

Adicionada delimitação temporal e de escopo em resposta ao AUD-005 A11. Corpo e data da inspeção histórica preservados; nenhum resultado histórico foi promovido a confirmação atual.
