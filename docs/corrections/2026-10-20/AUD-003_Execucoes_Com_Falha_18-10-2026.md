# AUD-003 — Execuções com falha identificadas

> **Nota de contexto adicionada em 20/10/2026.** Registro histórico da inspeção de 18/10/2026, limitado ao projeto/conta/acionadores visíveis naquela evidência. AUD-002 documenta quatro acionadores visíveis e AUD-004 documenta sua pausa posterior (zero visível) naquele escopo; isso não comprova estado atual, inexistência de outros acionadores ou reativação. Nenhuma nova inspeção ou ação operacional foi realizada em 20/10/2026.



**Data do registro:** 18/10/2026  
**Fonte:** captura da aba **Execuções** do Apps Script "Central de Aluno", filtrada por `Status: "Falha"`, fornecida pelo responsável.  
**Escopo:** documentação de auditoria; nenhuma alteração em código, gatilhos, planilhas, agendas, dados ou backups.  
**Documentos antecedentes:** `AUD-001_Auditoria_Preliminar_Automacoes_Leitura.md` e `AUD-002_Acionadores_Ativos_18-10-2026.md`.


## Evidências observadas na captura


A interface mostra "3 execuções nos últimos sete dias" após aplicar o filtro de **Status = Falha**.


| Função | Início (como exibido) | Duração exibida | Status |
|---|---|---|---|
| `monitorarSistemaCentral` | 18/10/2026 12:19:12 | 44,158 s | Falha |
| `monitorarSistemaCentral` | 18/10/2026 00:29:12 | 180,731 s | Falha |
| `monitorarSistemaCentral` | 12/10/2026 11:29:12 | 479,912 s | Falha |


- A captura **não mostra a mensagem de erro, stack trace nem a linha do código**; a causa ainda não foi diagnosticada.
- A captura anterior da lista de acionadores exibia taxa de erros de 0,46% para `monitorarSistemaCentral` e de 100% para `atualizarAgendaAgendada`. Nesta visualização filtrada não aparece nenhuma falha de `atualizarAgendaAgendada`; isso **não é evidência de normalização da agenda**, pois períodos/métricas das telas podem ser distintos ou registros podem estar indisponíveis.
- A existência de diversas execuções concluídas e algumas com falha não comprova que os dados sincronizados estejam íntegros ou atualizados.
- O registro dos quatro gatilhos instalados e do código que prevê as respectivas rotinas permanece em `AUD-002`.


## Plano operacional


1. Opcional: abrir o detalhe de uma execução com falha do `monitorarSistemaCentral` para obter mensagem/linha, caso disponível sem executar ações.
2. Para o objetivo de pausar o sistema legado, o **inventário de quatro gatilhos é suficiente**. Não é necessário resolver os erros antes da pausa.
3. Antes de remover gatilhos, confirmar com o responsável a interrupção de sincronizações, de atualizações de agenda, de bibliotecas e de processamento automático de edições; manter uma forma manual provisória de controle.
4. Com autorização específica para a pausa, remover os gatilhos pela interface Apps Script. **Isso exclui a configuração do acionador, não o código nem as planilhas; será necessário recriar conscientemente os gatilhos em eventual retomada.**
5. Após a remoção, obter captura da aba Acionadores mostrando zero acionadores e registrar em `AUD-004`.
6. Não executar `instalarSistemaCentral()` como tentativa de pausar ou de reativar automaticamente o projeto.


**Situação na data do registro:** investigação somente de leitura; gatilhos ainda não pausados/removidos.

## Registro de contexto — 20/10/2026

Adicionada delimitação temporal e de escopo em resposta ao AUD-005 A11. Corpo e data da inspeção histórica preservados; nenhum resultado histórico foi promovido a confirmação atual.
