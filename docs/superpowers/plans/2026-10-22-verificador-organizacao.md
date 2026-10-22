# Verificador de organização do treino Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. A escolha do método de execução cabe ao usuário antes de iniciar; nenhum subagente foi acionado na elaboração deste plano.

**Goal:** Implementar um componente puro que confira relações explícitas do treino e explique divergências/ausências sem prescrever, aprovar sessões ou alterar arquivos operacionais.

**Architecture:** TypeScript no domínio existente, com uma entrada pública recebendo um retrato versionado e pedidos de conferência independentes. Cada família devolve resultados por relação; o agregador informa cobertura e preserva resultados independentes. Um adaptador exclusivo dos testes transforma os fragmentos documentais em pedidos, sem copiar suas respostas esperadas para o componente.

**Tech Stack:** TypeScript/Vitest já instalados; Node >=22.12.0, conforme package.json; sem dependências novas. Vite/compilação existentes serão usados para a regressão final.

**Spec:** [VER-001 v0.1](../../methodology/VER-001_Especificacao_Verificador_Organizacao_v0.1.md), acompanhado dos [24 oráculos](../../methodology/VER-001_Oraculos_v0.1.json). O plano concretiza formatos/arquivos que a especificação deixou para esta etapa; não muda suas regras de prescrição.

## Global Constraints

- “O nome do método não determina dose, quantidade de tarefas, capacidade ou segurança.”
- “Não escolhe exercícios, dose, progressão ou periodização; não diagnostica nem certifica adequação científica.”
- “Não haverá `sessionApproved: true` ou um ‘verde geral’ derivado da ausência de achados.” A mensagem é uma citação normalizada de VER §6; não criar esse campo como aprovação.
- “Mesmo nome” não é fronteira de série; `exerciseSeriesId` explícito e não conflitante delimita séries, enquanto cada ocorrência de trabalho continua separada.
- Nada de escrita externa, rede, banco, cadastros, laudos, planilhas, scripts, gatilhos, backups ou publicação de treino. Sem interface nova nesta implementação.
- Estados computacionais: CALCULADO, DIVERGENTE, NAO_CALCULAVEL, NAO_APLICAVEL. Não conceder VALIDADO, aprovação ou gravidade clínica automaticamente.
- Exemplos são sintéticos, números não são padrões; TEST-001 mantém 89 cenários e seus estados até evidência específica. Os novos oráculos têm resultado real próprio, separado.
- Antes de executar: consultar using-git-worktrees e criar/reutilizar checkout isolado adequado; preservar os três AV-003 antigos não rastreados e sources/ em somente leitura. Este plano não executa esse preparo.

## Review Focus

1. Séries compostas por mini-blocos ou lados: contar as unidades explicitadas sem duplicar séries — testes da tarefa 3.
2. Identificador `__proto__`, IDs repetidos e estruturas cíclicas: chave tratada como dado, conflito localizado, sem travamento — tarefas 1/2.
3. Etapas fora de ordem, tempos empatados e simultaneidade parcial: conservar ordem declarada e distinguir relógio de soma por tarefa — tarefas 4/5.
4. Pedido desconhecido, versão incompatível ou expansão excessiva: relatar incapacidade/cobertura, sem truncar nem mostrar sucesso geral — tarefas 1/7.
5. Incompatibilidade entre previsto e observado e semana duplicada: preservar a natureza e as parcelas independentes — tarefa 6.

## Revisão do desenho e base observada

Em 22/10/2026, o código usa `src/domain/`, testes em `tests/unit/**/*.test.ts`, TypeScript strict e Vitest configurado em `vite.config.ts`. O verificador ainda não existe. `pnpm exec vitest run` passou em 11 testes; `pnpm run build` passou. Node observado v24.19.0 e pnpm 11.25.0. Não foi rerodado teste de banco, navegador ou autenticação nesta rodada.

Como treinador, o desenho preserva intenção/avaliação e decisão profissional, mas não verifica ainda a adequação fisiológica da prescrição. Como programador, os pontos abertos eram o contrato concreto, o isolamento de falhas, os limites de processamento e a ligação dos fragmentos ao código; as decisões abaixo resolvem esses pontos para este recorte. A especificação não foi promovida a software testado por esta revisão.

## Contrato técnico decidido para a primeira implementação

Entrada pública: `verifyOrganization(input: unknown, limits?: Partial<ProcessingLimits>): VerificationReport`. Aceitar objeto JSON compatível ou string JSON; interpretar apenas `schemaVersion: 'ver-001/1'`. O retrato contém `snapshotId: string|null`, `planVersion: string|null`, `source: Source|null`, `requests: Request[]`; `Source={id:string,version:string,locator:string}`. Metadados ausentes ficam nulos com pendência; não impedem uma conta aritmética independente nem dão validação de origem. É um retrato de conferências, não um cadastro de aluno ou formulário de prescrição completo.

`Request` contém `requestId:string`, `kind:string` (operações reconhecidas na tabela; demais nomes ficam não avaliados), `purpose:string`, `basis: 'PLANNED'|'OBSERVED'`, `input:unknown`, `originalMethodLabel?:string` e `source?:Source|null`. A representação normalizada interna acrescenta `requestPath:string` a partir da posição bruta, sem exigir esse campo da origem. Source omitido herda a origem explícita do retrato; null explicita origem desconhecida e não é substituído. Cada entrada usada recebe caminho concreto `requests[n].input...`; sem inventar documento. IDs e finalidade exigem string não vazia após teste de espaços; conservar grafia/valor bruto, sem trim como alteração de identidade. Os pedidos não compartilham estado mutável. Referências de estrutura são locais ao pedido.

| kind (família computacional, não enum de métodos) | Formato de input decidido |
|---|---|
| `INTEGRITY` | `occurrences: {occurrenceId, taskId}[]`, `groups: {groupId, childGroupIds, occurrenceIds}[]`; listas podem ser vazias |
| `COUNT` | `mode: 'SERIES_COUNTS'|'OCCURRENCES'|'REPEATED_PATTERN'`, `requestedUnit:'EXERCISE_SERIES'|'WORK_OCCURRENCES'|'STATION_VISITS'`; respectivamente `counts: {taskId,value}[]`; `occurrences: {occurrenceId,taskId,role,exerciseSeriesId,groupPassageId}[]`; ou `rounds`, `items: {taskId,countPerRound,role}[]`. `declaredTotal` opcional e `groupingApplicable` explícito. SERIES_COUNTS só permite EXERCISE_SERIES; o padrão repetido declara sua unidade, sem converter visitas em séries |
| `COMPARE` | `declared`, `derived`, `unit`, `sameScope`, `tolerance` (opcional, padrão técnico zero); valores ausentes não viram zero |
| `CONVERT` | `values: {value,unit}[]`, `targetUnit`; somente s/min ou identidade de unidade; identidade não autoriza somas incompatíveis nem equivalência entre aparelhos |
| `TRAJECTORY` | `axis`, `stages: {value,unit,conditionKey}[]` na ordem declarada; `claimedDirection` opcional |
| `TIMELINE` | `intervals: {id,taskId,start,end,role,recoveryKey,concurrencyGroupId}[]`, `simultaneityGroups: string[]`, `coverageComplete`, `boundary: {start,end}|null`; nulos preservados |
| `BUDGET` | `components: {id,min,max,unit,includedIn}[]`, `coverageComplete`, `outputUnit:'s'|'min'`, `limit: {value,unit}|null`; `includedIn` é null para adição, um ID para contido ou `'UNKNOWN'` quando indefinido; componentes aditivos são sequenciais por contrato |
| `WEEK` | `unit:'EXERCISE_SERIES'|'WORK_OCCURRENCES'|'STATION_VISITS'|'s'`, `coverageComplete`, `sessionOccurrences: {id,sessionVersion,basis,counts: {taskId,value}[]|null}[]`; disponibilidade não participa da conta; s admite valor finito não negativo fracionário, contagens exigem inteiros |
| `OBSERVATION` | `target: unknown`, `observed: unknown|null`, `variable`, `unit`, `observedSource: Source|null`; nunca copiar target para observed |

Os nove kinds são operações desta versão, não uma lista de formatos de treino permitidos. Nome de método fica em metadado opcional `originalMethodLabel` de qualquer pedido e não muda operações. Quantidade e dose pertencem à estrutura declarada. Definir `RequestInput=Omit<Request,'requestPath'>` para entradas/adaptadores; requestPath pertence à normalização interna. Papel de ocorrência/item: `'WORK'|'PREPARATION'|'OTHER'`; role desconhecido gera pendência na seleção de trabalho, não entra silenciosamente no total. IDs de série são localizados por `(taskId, exerciseSeriesId)`; um groupPassageId compartilhado não substitui fronteiras de séries de exercícios. Valores nulos, e não defaults de dose, representam ausência.

Tipos de saída em `types.ts`: `JsonValue` (primitivo JSON, array ou mapa de JsonValue), `Source`, `Request`, `ProcessingLimits`, `CalculationStatus`, `InputIssue`, `RelationResult`, `VerificationReport`. `RelationResult` contém `relationId`, `requestId`, `ruleId`, `ruleVersion: '0.1'`, `purpose`, `basis`, `inputPaths: string[]`, `source:Source|null`, `derived: JsonValue|null`, `declared: JsonValue|null`, `difference:number|null` (declarado − derivado numéricos comparáveis), `unit: string|null`, `calculationStatus`, `reasonCodes: string[]`, `dependentUses: string[]`, `independentResultIds: string[]`, `suggestedQuality: 'SEM_DADO'|'CONTEXTO_INSUFICIENTE'|'INCONSISTENTE'|null`, `impactReview: null`, `messageCode`, `message`. Identidades/mensagens/códigos são strings; status é CalculationStatus; basis preserva PLANNED/OBSERVED do pedido. Pedido cuja basis é inválida não ganha basis substituta nem resultado de domínio: InputIssue local e pedido não avaliado.

`VerificationReport` contém `snapshotId: string|null`, `schemaVersion: string|null`, `engineVersion: 'ver-001/0.1'`, `inputIssues: InputIssue[]`, `results: RelationResult[]`, `coverage: {requested: number|null,evaluated: number,notEvaluated: NotEvaluatedRequest[],limitations: string[]}`. `NotEvaluatedRequest={requestId:string|null,path:string,reasonCode:string}` preserva ID nulo/duplicado sem inventar identidade. `InputIssue` contém `path`, `code`, `message`, `affectedRequestIds: string[]`. Em JSON não interpretável, requested é null; não declarar que nenhum pedido foi feito. Sem relógio, aleatoriedade ou selo de aprovação no resultado de domínio. Toda mensagem informa o alcance; `CALCULADO` não significa ausência de pendências em outros resultados do mesmo pedido.

IDs de resultado: `${requestId}:${suffix}` com sufixos abaixo; segmentos variáveis de chave são codificados com encodeURIComponent, conservando o ID bruto nas entradas rastreadas. Índice de campo é usado apenas onde a origem fornece uma lista sem identidade própria, como values de CONVERT; não substituir IDs de domínio existentes. Usar `Map`, não objeto-protótipo, para índices de IDs. Ordem de saída segue pedidos e, dentro deles, a ordem declarada das tarefas/ocorrências.

| Pedido | Sufixos e derived que os testes/projeções usarão |
|---|---|
| INTEGRITY | `integrity`: boolean ou null; `expansion`: null quando ciclo impede expansão; motivos ficam em reasonCodes |
| COUNT | `total`: número/null na requestedUnit; `task:<taskId>`: parcela nessa unidade; `occurrence-total`: quantidade de ocorrências de trabalho; `group-rounds`: voltas ou null/NAO_APLICAVEL. Unidades de fronteira não definidas não ganham um total de séries inventado |
| COMPARE | `comparison`: valor derivado fornecido, declared preservado e difference calculada quando a comparação for possível |
| CONVERT | `converted:<index>`: valor na targetUnit ou null; `total`: soma temporal na targetUnit ou null/NAO_APLICAVEL para soma não solicitável nesse escopo |
| TRAJECTORY | `trajectory`: CRESCENTE_ESTRITA/DECRESCENTE_ESTRITA/CONSTANTE/MISTA/null; `known-stage-count` e `stage-count`: números |
| TIMELINE | `elapsed`: duração da fronteira explícita; `work-clock`: união do trabalho; `work-task-sum`: soma dos tempos por tarefa; `recovery:<key>:<occurrenceId>`: intervalo fim→próximo início por chave |
| BUDGET | `range`: `[min,max]` ou null; `known-subtotal`: `[min,max]` inequívoco; ambos na outputUnit; `budget-class`: CABE_NAS_HIPOTESES/PODE_EXCEDER/TODA_FAIXA_EXCEDE/null |
| WEEK | `weekly-total` e `known-subtotal`: números/null na unit; `task:<taskId>`: parcela por tarefa; se basis divergir, resultados de subtotais por natureza usam `known-subtotal:PLANNED` e `known-subtotal:OBSERVED` |
| OBSERVATION | `observed`: valor bruto observado ou null; source da relação aponta para observedSource quando existente; sem ele, origem observada desconhecida permanece explícita |

Limites técnicos candidatos: `maxJsonBytes=1048576` para string JSON, `maxRequests=1000`, `maxExpandedOccurrences=20000`, `maxDepth=50`. Rejeitar configuração não finita/não inteira/≤0 com `INVALID_PROCESSING_LIMITS`; não corrigir limite silenciosamente. São capacidade de processamento, não máximos de treino. Objetos precisam ser dados JSON simples, sem acessores, classes ou ciclos do objeto JS; grupos com referências cíclicas por ID são dados JSON válidos, mas falham no pedido afetado. Falha global de sintaxe/versão/limite global devolve `results=[]`, cobertura não avaliada e motivo; falha local não impede pedidos independentes. Não manter resultado de expansão truncada.

## Mapa de arquivos

Criar em `src/domain/organization-verifier/`: `types.ts` (contrato), `input.ts` (leitura/limites), `report.ts` (resultados/mensagens/cobertura), `integrity.ts` (IDs/grafos), `count.ts` (unidades de contagem), `units.ts` (valores/conversão/comparação), `trajectory.ts`, `time.ts` (relógio/intervalos/orçamento), `week.ts`, `observation.ts`, `index.ts` (entrada e despacho). Não alterar o fluxo de cadastro ou arquivos de conexão existentes.

Criar testes em `tests/unit/organization-verifier/`: `helpers.ts`, `contract.test.ts`, `integrity.test.ts`, `count.test.ts`, `trajectory.test.ts`, `time.test.ts`, `week.test.ts`, `observation.test.ts`, `oracles.test.ts`, `oracle-adapter.ts`. Todos os testes de comportamento chamam a entrada pública, não um motor paralelo no teste. Helpers criam entradas; nunca calculam a resposta do componente.

## Tarefa 1 — Contrato, entrada pública e relatório sem aprovação

**Files:** criar `types.ts`, `input.ts`, `report.ts`, `index.ts`; testes `helpers.ts`, `contract.test.ts` nos diretórios acima.

**Interfaces:** `parseSnapshot(input: unknown, limits: ProcessingLimits): ParseResult`; `ParseResult = {ok:true,snapshot:SnapshotV1,issues:InputIssue[],coverage:CoverageSeed}|{ok:false,issues:InputIssue[],coverage:CoverageSeed}`. `CoverageSeed={requested:number|null,notEvaluated:NotEvaluatedRequest[]}` conta pedidos brutos antes de rejeições locais. Definir `SnapshotV1` conforme contrato, contendo requests válidos para despacho com seus caminhos originais; requests sem identidade/finalidade/basis necessárias ficam em coverage.notEvaluated. `verifyOrganization` é a única entrada de comportamento exportada publicamente; tipos podem ser exportados. `buildReport(snapshot: SnapshotV1|null, issues: InputIssue[], results: RelationResult[], coverage: CoverageSeed, completedRequestIds: string[]): VerificationReport` e `makeResult(request: Request, suffix: string, fields: ResultFields): RelationResult` ficam internos; `ResultFields=Omit<RelationResult,'relationId'|'requestId'|'purpose'|'basis'|'source'|'ruleVersion'>`. A conclusão de um handler é registrada explicitamente, não deduzida de ausência de achados.

Helpers de teste, definidos nesta tarefa: `snapshotOf(requestId:string, kind:string, input:unknown, basis:'PLANNED'|'OBSERVED'='PLANNED'):unknown` cria um retrato sintético de pedido único com schemaVersion ver-001/1, snapshotId fixture-1, planVersion v1, source synthetic/v1/test e purpose conferencia_sintetica; defaults aqui são exclusivamente montagem de teste. `resultOf(report:VerificationReport, relationId:string):RelationResult` procura o resultado e lança erro se ausente, sem calcular resposta. Testes de retrato com vários pedidos usam literais explícitos.

Teste nomeado `invalid_json_has_no_success_report`: `expect(verifyOrganization('{').inputIssues[0].code).toBe('INVALID_JSON')`; `expect(verifyOrganization('{').coverage.requested).toBeNull()`.

- [ ] Escrever testes `contract.test.ts`: JSON ilegível → `inputIssues[0].code === 'INVALID_JSON'`, `results=[]`, coverage.requested null; versão diferente → `UNSUPPORTED_SCHEMA`; retrato com requests vazio → cobertura requested/evaluated 0, sem sessionApproved; texto >maxJsonBytes → `PROCESSING_LIMIT`; objeto congelado não muda; repetir entrada produz relatório profundamente igual; pedido com kind desconhecido aparece em coverage.notEvaluated, preservando ID/caminho, e pedido válido independente continua disponível quando seu handler existir.
- [ ] Rodar `pnpm exec vitest run tests/unit/organization-verifier/contract.test.ts`; confirmar falha pelas interfaces ausentes, sem executar serviços externos.
- [ ] Implementar tipos e pipeline descritos, leitura defensiva, limites e razões estáveis. O index despacha handlers implementados; pedido conhecido ainda não implementado recebe `RULE_NOT_IMPLEMENTED` e não é tratado como avaliado. Duplicação de requestId invalida os pedidos homônimos e preserva únicos. `evaluated` significa pedido reconhecido cujo handler terminou, inclusive resultado NAO_CALCULAVEL; não significa aprovação.
- [ ] Rerodar esse teste e confirmar todas as asserções; incluir testes de ciclo JS, chave `__proto__`, configuração inválida e snapshot sem source→source nulo/MISSING_PROVENANCE, sem impedir conta independente quando o handler existir. SnapshotId ausente também fica nulo com pendência, sem identidade fictícia. Não ler arquivos, relógio, rede ou variáveis de ambiente no módulo.
- [ ] Commit somente dos arquivos da tarefa: `feat: add organization verifier contract and pure entry point`.

## Tarefa 2 — Integridade e bloqueios locais

**Files:** criar `integrity.ts`, `integrity.test.ts`; modificar index e testes de contrato quando necessário.

**Interfaces:** `verifyIntegrity(request: Request, limits: ProcessingLimits): RelationResult[]`; validar payload INTEGRITY em runtime e usar índices locais. Referências a grupos/ocorrências que não existem são conflitos explícitos, sem preenchimento.

Teste nomeado `duplicate_ids_are_not_silently_deduplicated`: enviar occurrences dup/A, dup/A, ok/C e groups=[] em snapshotOf('r1','INTEGRITY',input); `expect(resultOf(report,'r1:integrity').reasonCodes).toContain('IDENTIFICADOR_DUPLICADO')`. Manter o caso completo que verifica C independente no teste de COUNT e na projeção V-09.

- [ ] Escrever testes públicos V-09/V-10: ID `dup` repetido em A → contagem dependente A desconhecida e `IDENTIFICADOR_DUPLICADO`; ocorrência C independente preservada. Grupo X→X → `CICLO_DE_AGRUPAMENTO` sem expansão. Acrescentar X→Y→X, referência ausente, dois pedidos independentes com IDs locais iguais e requestId duplicado no mesmo retrato.
- [ ] Rodar `pnpm exec vitest run tests/unit/organization-verifier/integrity.test.ts`; confirmar falha.
- [ ] Implementar verificação de referências e detecção de ciclos com limites, sem mutação. Reutilizar uma validação interna para COUNT com ocorrências; não copiar algoritmo no teste. Resultado afetado informa caminhos, dependentes e independentes, sem gravidade clínica ou correção automática.
- [ ] Rerodar integridade e contrato; testar maxDepth e ausência de travamento/resultado parcial em expansão excessiva.
- [ ] Commit: `feat: localize organization reference and identity conflicts`.

## Tarefa 3 — Contagem, unidades e divergência aritmética

**Files:** criar `count.ts`, `units.ts`, `count.test.ts`; modificar index.

**Interfaces:** `verifyCount(request: Request, limits: ProcessingLimits): RelationResult[]`; `verifyConversion(request: Request): RelationResult[]`; `verifyComparison(request: Request): RelationResult[]`. Interno `toSeconds(value: number, unit: string): number|null`, apenas s/min; comparações usam `abs(declared-derived)>tolerance`, tolerância finita não negativa e zero quando omitida.

Teste nomeado `explicit_series_counts_sum_without_round_defaults`: input `{mode:'SERIES_COUNTS',requestedUnit:'EXERCISE_SERIES',counts:[{taskId:'A',value:3},{taskId:'B',value:2}],groupingApplicable:false}`; `expect(resultOf(verifyOrganization(snapshotOf('r1','COUNT',input)),'r1:total').derived).toBe(5)`.

- [ ] Escrever testes V-01/03/04/05/07/08/12/13/14/24: seriado A3+B2→5; duas voltas de trio→6; par em duas voltas→4 mesmo com carga crescente; declarado6/derivado4→DIVERGENTE, diferença2; -1/1.5 voltas rejeitados sem arredondar; 2min+30s→150s; kgf→kg_maquina não calculável; 90s+2séries sem soma; método desconhecido com A2+B1→3. NAO_APLICAVEL para voltas no seriado, não para dados necessários ausentes.
- [ ] Rodar `pnpm exec vitest run tests/unit/organization-verifier/count.test.ts`; confirmar falha.
- [ ] Implementar modos de contagem e conversões. COUNT/OCCURRENCES produz ocorrências por tarefa, passagens distintas e séries por taskId/exerciseSeriesId apenas onde IDs de fronteira existem e não conflitantes. Papel preparação não entra como série de trabalho. Sem exerciseSeriesId, devolver contagem de ocorrências e série desconhecida. Para resumo e lista explícita juntos, usar dois pedidos COUNT com mesma finalidade/unidade e um COMPARE explícito; o motor não os soma nem escolhe um como canônico. CONVERT devolve valores convertidos individualmente; soma somente quando targetUnit é s/min e a mesma finalidade temporal está declarada, sem somar cargas por mera igualdade de unidade.
- [ ] Acrescentar testes: três etapas com o mesmo exerciseSeriesId→3 ocorrências/1 série; duas séries por lado explicitadas não viram bilateral simultâneo; tarefa `__proto__` conta normalmente; zero explícito confirmado permanece0 e zero sem significado não é tratado como ausência de treino; 20000 ocorrências cabem no limite técnico e 20001 bloqueiam a expansão dependente inteira. Rerodar contagem/contrato/integridade.
- [ ] Commit: `feat: verify explicit work counts and dimensional comparisons`.

## Tarefa 4 — Trajetória sem interpretar nomes

**Files:** criar `trajectory.ts`, `trajectory.test.ts`; modificar index.

**Interfaces:** `verifyTrajectory(request: Request): RelationResult[]`; valores na ordem recebida, sem ordenar para fabricar direção.

Teste nomeado `trajectory_does_not_sort_or_infer_from_label`: input `{axis:'load',stages:[{value:14,unit:'kg_mostrador',conditionKey:'A'},{value:10,unit:'kg_mostrador',conditionKey:'A'}]}`; `expect(resultOf(verifyOrganization(snapshotOf('r1','TRAJECTORY',input)),'r1:trajectory').derived).toBe('DECRESCENTE_ESTRITA')`.

- [ ] Escrever testes V-15/V-16: 10,null,14→direção desconhecida e dois pontos conhecidos; aparelhos/conditionKey diferentes→direção desconhecida, duas etapas preservadas. Acrescentar 10,12,14→CRESCENTE_ESTRITA; inversa→DECRESCENTE_ESTRITA; 12,12→CONSTANTE; 10,12,12→MISTA; uma etapa→NAO_CALCULAVEL; alegação crescente com sequência inversa→divergência de descrição, sem chamar o treino de errado.
- [ ] Rodar `pnpm exec vitest run tests/unit/organization-verifier/trajectory.test.ts`; confirmar falha.
- [ ] Implementar classificação e validação de unidades/condição. Labels “crescente”/“decrescente” permanecem brutos em metadado e não substituem eixo. Contagem de etapas não depende da validade da comparação de carga.
- [ ] Rerodar trajetória e regressão dos três grupos anteriores; verificar que alterar originalMethodLabel não altera a conta/direção.
- [ ] Commit: `feat: inspect declared dose trajectories without method inference`.

## Tarefa 5 — Tempo, recuperações e orçamento

**Files:** criar `time.ts`, `time.test.ts`; modificar index.

**Interfaces:** `verifyTimeline(request: Request): RelationResult[]`; `verifyBudget(request: Request): RelationResult[]`; auxiliares internos usam segundos. Estes handlers recebem dados validados por família, sem deduzir cadência a partir de repetições.

Teste nomeado `included_reserve_is_not_added_again`: input BUDGET com components=[{id:'a',min:40,max:50,unit:'min',includedIn:null},{id:'b',min:6,max:8,unit:'min',includedIn:null},{id:'reserve',min:4,max:4,unit:'min',includedIn:'a'}], coverageComplete=true, outputUnit=min, limit={value:60,unit:min}; `expect(resultOf(report,'r1:range').derived).toEqual([46,58])`.

- [ ] Escrever testes V-02/04/17/18/19/20/21: cronologia A0–30/B45–70/A130–160/B175–200→200s, A100s/B105s até repetir; horário ausente→intervalo desconhecido, duas ocorrências mantidas; simultâneos20s→relógio20/soma40; orçamento40–50+6–8 com reserva4 já incluída→46–58; faixas52–66/61–65/52–60 com teto60→PODE_EXCEDER/TODA_FAIXA_EXCEDE/CABE_NAS_HIPOTESES; subtotal5+6 com cobertura incompleta→11, total desconhecido.
- [ ] Rodar `pnpm exec vitest run tests/unit/organization-verifier/time.test.ts`; confirmar falha.
- [ ] Implementar união temporal, cronologia/recuperação por recoveryKey e soma por cobertura. Ordenar intervalos apenas em cópia para operações de relógio; não ordenar dose da trajetória. Recuperação negativa por sobreposição recebe pendência na relação afetada, não “recuperação zero”. Falta de chave impede vínculo repetido automático, mas preserva durações calculáveis. Linha temporal e orçamento não se somam.
- [ ] Acrescentar testes: sobreposição0–20/10–30 explicitada→30s relógio/40 por tarefa; mesma sobreposição não explicada→revisão, sem classificar risco clínico; reserva com includedIn=UNKNOWN→subtotal inequívoco e total pendente; includedIn inexistente/cíclico→conflito local; faixa min>max→não calculável; fronteira observada64min e limite60 preserva64; fim de trabalho igual ao início exige duração positiva, pausa explícita0 é permitida. Rerodar grupo e anteriores.
- [ ] Commit: `feat: verify workout timelines and scoped time budgets`.

## Tarefa 6 — Semana e observação separada do plano

**Files:** criar `week.ts`, `observation.ts`, `week.test.ts`, `observation.test.ts`; modificar index.

**Interfaces:** `verifyWeek(request: Request): RelationResult[]`; `verifyObservation(request: Request): RelationResult[]`. A natureza basis do pedido precisa coincidir com as parcelas usadas; mistura de PLANNED/OBSERVED impede a agregação única, mantendo subtotais separados.

Teste nomeado `heterogeneous_week_uses_both_session_occurrences`: input WEEK com unit=EXERCISE_SERIES, coverageComplete=true e duas sessionOccurrences distintas, basis PLANNED, counts A4 e A6; `expect(resultOf(report,'r1:weekly-total').derived).toBe(10)`. Teste `target_does_not_fill_observed`: input OBSERVATION `{target:3,observed:null,variable:'RIR',unit:'RIR',observedSource:null}`; `expect(resultOf(report,'r1:observed').derived).toBeNull()`.

- [ ] Escrever testes V-11/22/23: alvoRIR3/observado ausente→observado nulo, sem aprovação de progressão; terça4+sexta6 com IDs/versões e cobertura completa→10 previstas, observadas desconhecidas; só4 conhecidas com frequência disponível2→subtotal4/total desconhecido. Acrescentar sessão repetida por mesmo ID, versões conflitantes para a mesma ocorrência e identificação de sessões distintas no mesmo dia.
- [ ] Rodar `pnpm exec vitest run tests/unit/organization-verifier/week.test.ts tests/unit/organization-verifier/observation.test.ts`; confirmar falha.
- [ ] Implementar agregação com proveniência e estados separados. ID repetido não se duplica nem é removido silenciosamente. Ausência de resposta não significa recuperação ruim/favorável. Nenhuma dessas funções toca estados de publicação/aprovação do piloto.
- [ ] Acrescentar teste com duas parcelas de naturezas distintas→total único desconhecido/subtotais separados; valor observado com source ausente continua bruto, sem promover sua validação. Rerodar esses grupos e os anteriores.
- [ ] Commit: `feat: keep weekly totals and observed evidence separate from plans`.

## Tarefa 7 — Ligação dos oráculos e verificação de conclusão

**Files:** criar `oracle-adapter.ts`, `oracles.test.ts`, e `docs/validation/VER-001_Execucao_v0.1.md` somente quando houver resultados reais; ajustar módulos/testes anteriores conforme falhas e navegação documental. Não alterar fixtures históricas nem transformar seus expected em código do domínio.

**Interfaces:** teste `adaptOracle(id: string, inputFragment: unknown): RequestInput[]` e `projectOracle(id: string, report: VerificationReport): JsonValue` em oracle-adapter.ts. O adaptador recebe somente id/entradas, nunca expected; projeção seleciona campos públicos, não recalcula as contas. Importar oráculos no teste usando leitura local `node:fs`/JSON.parse, restrita a teste; domínio não importa JSON de docs.

Teste parametrizado nomeado `documented_oracle_${id}`: `const report=verifyOrganization(snapshotFromRequests(adaptOracle(id,inputFragment))); expect(projectOracle(id,report)).toEqual(expected)`. Definir `snapshotFromRequests(requests:RequestInput[]):unknown` no adaptador com os mesmos metadados sintéticos da tarefa1; o parser deriva requestPath da posição real. Projection não modifica expected nem recalcula contas; BUDGET pede outputUnit=min quando o oráculo espera minutos.

- [ ] Escrever testes públicos parametrizados para V-01–V-24: montar snapshot explícito, chamar verifyOrganization e comparar a projeção com expected. Fragmentos que pedem várias contas viram pedidos independentes rastreados; V-08 usa duas variantes inválidas e V-20 três variantes de faixa. Manter mapa exato id→requestId/resultId no adaptador. Controles negativos extras da especificação continuam testes próprios, sem renumerar TEST-001.
- [ ] Rodar `pnpm exec vitest run tests/unit/organization-verifier/oracles.test.ts`; confirmar falhas reais antes de corrigir diferenças; não mudar expected para esconder defeito. Se houver contradição documental, registrar e revisar a fonte por versão.
- [ ] Implementar apenas o adaptador/projeções de teste, completar mensagens e cobertura e resolver diferenças. Alterar a conta ou um valor de saída propositalmente deve fazer o teste correspondente falhar; restaurar e confirmar sucesso. Testar que entrada congelada permanece idêntica, nenhum módulo depende de rede/fs/clientes externos e nomes de métodos não acionam doses padrão.
- [ ] Rodar `pnpm exec vitest run` e `pnpm run build`. Registrar resultados reais por oráculo, comandos, escopo, versões e commit verificado; contagem total de testes cresce e deve vir da saída efetiva, não de um número prometido. Sem banco/navegador nesta entrega isolada; os limites da evidência ficam explícitos.
- [ ] Revisão final de código e especificação: todas as 11 famílias cobertas; casos independentes continuam úteis; ausência de aprovação/diagnóstico/carga automática; versão de entrada muda resultados dependentes; sem truncamento/alteração de entrada; sem diferenças em src/lib, fluxos de cadastro, banco ou arquivos operacionais. Documentar que o componente experimental ainda não está ligado a uma tela; testes chamam exatamente a entrada pública destinada à futura integração, não demonstram integração de produto.
- [ ] Commit: `test: verify organization verifier against documented oracles`. Preparar resultado para revisão/integrar conforme estratégia aprovada; não publicar aplicação, modificar planilhas ou instalar automações como efeito desse commit.

## Autorrevisão deste plano

VER §§1–3 e8: limites/arquitetura e tarefa7; §4: contrato e tarefas1–3/6; §5: tarefas2–6; §5.1: tarefa4; §5.2: tarefa5; §6: report/index e tarefa7; §7: todos os grupos e adaptador final. Os cinco riscos de Review Focus têm testes atribuídos, não revisão delegada durante o planejamento. Todas as interfaces internas mencionadas são definidas na tarefa que as cria ou no contrato comum. O plano não depende de banco, autenticação ou leitura de laudos reais.

As decisões técnicas candidatas (envelope por pedidos, kinds, nomes, limites de processamento e mensagens) devem ser revisadas junto deste plano. Não são regras de dose. Este arquivo é o plano para execução futura, não um checklist já concluído ou aprovação implícita de mudanças no produto.

## Entrega para revisão

Recomendação de execução: **aqui nesta conversa**, tarefa a tarefa, pois os handlers compartilham contrato, despacho e relatório; realizar revisão independente ao final, se esse método for escolhido. Alternativa: execução com subagentes por tarefa e revisão entre etapas. Nenhuma das duas foi iniciada. A habilidade de planejamento exige revisão do plano e escolha do método antes da implementação; a decisão será registrada sem repetir aprovações já dadas ao escopo documental.
