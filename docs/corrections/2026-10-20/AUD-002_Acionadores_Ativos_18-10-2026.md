# AUD-002 — Verificação visual dos acionadores instalados

> **Nota de contexto adicionada em 20/10/2026.** Registro histórico da inspeção de 18/10/2026, limitado ao projeto/conta/acionadores visíveis naquela evidência. AUD-002 documenta quatro acionadores visíveis e AUD-004 documenta sua pausa posterior (zero visível) naquele escopo; isso não comprova estado atual, inexistência de outros acionadores ou reativação. Nenhuma nova inspeção ou ação operacional foi realizada em 20/10/2026.



**Data da captura:** 18/10/2026, aproximadamente 22h32 (horário local informado).
**Origem:** captura de tela do editor Apps Script «Central de Aluno» > Acionadores, fornecida pelo usuário.
**Status:** SOMENTE LEITURA. Nenhum gatilho foi excluído, editado ou pausado.
**Documento anterior:** AUD-001_Auditoria_Preliminar_Automacoes_Leitura.md.


## Constatação confirmada pela captura


O editor mostra **4 acionadores**, todos com titularidade «Eu», implantação «Teste».


| Função instalada | Evento mostrado | Última execução mostrada | Taxa de erros mostrada |
|---|---|---|---|
| `atualizarAgendaAgendada` | De acordo com o horário | 18/10/2026 04:24:14 | **100%** |
| `sincronizarBibliotecasAgendado` | De acordo com o horário | 18/10/2026 03:55:59 | 0% |
| `automacaoMicrosEditHandler` | Da planilha — Ao editar | — | — |
| `monitorarSistemaCentral` | De acordo com o horário | 18/10/2026 22:29:12 | 0,46% |


### Conciliação com o código armazenado na Central


A lista de funções **coincide** com os quatro gatilhos que o código armazenado na aba `Apps Script Automação` prevê em `instalarSistemaCentral()`. Pelo código lido na AUD-001, o monitor está configurado para rodar a cada cinco minutos; as duas rotinas diárias são agendadas aproximadamente para as 03h e 04h. **A captura não mostra a configuração interna de cada gatilho**, portanto horários/cadências são baseados no código e não na tela.


## Observações operacionais


1. **`atualizarAgendaAgendada` com 100% de erros:** alta prioridade para investigar em «Execuções»; a porcentagem exibida não revela a causa nem o número de execuções.
2. **`monitorarSistemaCentral` executado às 22:29:12:** confirma execução recente; o código previsto inclui monitoramento de micros e sincronização de fichas alteradas.
3. **`automacaoMicrosEditHandler` sem execução exibida:** ausência de dado na captura não significa que esteja desativado.
4. **`sincronizarBibliotecasAgendado` com 0% de erros:** o indicador não comprova qualidade ou atualização da base; apenas não mostra falhas na métrica apresentada.


## Pausa segura proposta — ainda não executada


**Objetivo do usuário:** suspender as automações antigas da Central até a reconstrução técnico-científica, sem perder dados.


- Pausar/desativar os quatro gatilhos instaláveis listados acima, **somente após confirmação explícita da ação**.
- No editor do Apps Script a remoção de gatilhos é uma **exclusão da configuração de execução**, não uma pausa com botão de reversão imediata.
- Antes da exclusão, preservar o inventário desta nota e, preferencialmente, o registro da causa das últimas falhas em «Execuções».
- A exclusão de gatilhos não exclui por si só código, abas, fórmulas, históricos, registros de avaliação, planilhas individuais ou backups; **porém interrompe** as conciliações, verificações e sincronizações por eles disparadas. Não usar a Central como referência operacional atualizada durante a pausa.
- A operação não impede a execução manual de funções nem eventuais gatilhos simples ou automações de outros projetos independentes.
- **Não executar `instalarSistemaCentral()` para 'voltar atrás' sem auditoria:** o instalador apaga e recria gatilhos, faz provisionamento e escreve estados na Central.
- Retomada: definir novos gatilhos e testes de ponta a ponta em cópia de validação, com controle de versão e autorização do usuário.


## Próxima ação recomendada


Solicitar ao usuário uma captura de «Execuções» filtrada por `atualizarAgendaAgendada`, idealmente mostrando uma falha recente e a mensagem de erro. Após documentar, decidir com o usuário como remover os quatro gatilhos. Se o usuário preferir pausa imediata, há inventário suficiente para orientar a remoção manual via interface e examinar o erro posteriormente.


**Nada foi alterado no Apps Script ou nas planilhas nesta etapa.**

## Registro de contexto — 20/10/2026

Adicionada delimitação temporal e de escopo em resposta ao AUD-005 A11. Corpo e data da inspeção histórica preservados; nenhum resultado histórico foi promovido a confirmação atual.
