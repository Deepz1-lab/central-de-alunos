# FLX-VER-001 — Percurso do CAS-002 pela Central

**v0.1 · 22/10/2026 · Caso inteiramente sintético · Revisão documental e sondagem do componente existente · Sem nova aprovação de prescrição.**

## Veredito

A logística faz sentido: o CAS-002 permite acompanhar pessoa/avaliação → interpretação e prioridades candidatas → Plano de Ação e ciclos → sessões propostas → conferências → auditoria → acompanhamento e revisão. A conferência de organização já executa código real e preserva ausências e conflitos. **A cascata inteira ainda não é um algoritmo implementado:** não houve geração automática de plano, integração de tela/banco ou demonstração de eficácia fisiológica.

O resultado prático desta rodada é uma passagem rastreável do caso documental ao VER-001, com evidência por cenário. Não é necessário inventar outra pessoa, outra dose ou outra metodologia para demonstrá-la. Os achados de avaliação continuam sendo o norte da decisão, acompanhados dos objetivos e do contexto; as contas não escolhem a prioridade.

## Fontes e alcance

- [CAS-002 v0.6](CAS-002_Readaptacao_Contextualizada_v0.6.md), especialmente §§2–7; [fixture v0.6](fixtures/CAS-002_v0.6.json), chave canônica `integratedProposal`.
- [AV-003 v0.6](../methodology/AV-003_Contrato_Avaliacao_Prescricao_v0.6.md): cascata, dependências, intenção, tempo e observação.
- [DIC-001 v0.5](../methodology/DIC-001_Indicadores_Protocolos_v0.5.md): indicadores, unidades, protocolos e limites de agregação.
- [VER-001](../methodology/VER-001_Especificacao_Verificador_Organizacao_v0.1.md) e [execução/revisão](VER-001_Execucao_v0.1.md).
- Código executado: `fc4e97978cf5856bfff6d65f1b9a7099ae81467e`, já integrado ao GitHub pela proposta #1.

As fontes de avaliação deste exercício são narrativas sintéticas, não medições de alunos reais. Os hashes de bytes lidos, hashes normalizados para LF e IDs dos objetos Git estão na [evidência JSON](FLX-VER-001_CAS-002_v0.1.json). A fixture e o MD anteriores foram preservados.

Não houve nova conferência direta de livros, artigos ou vídeos nesta rodada. A metodologia ACESSO continua com os estados de revisão das fichas; a complementação acadêmica conserva as fontes e limites descritos no CAS-002 §7/REF-BASE; a organização C e a tradução para pedidos de conferência são PROPOSTA_CENTRAL. Não atribuir os números da montagem ao professor nem apresentá-los como dose acadêmica universal. Nenhum critério fisiológico novo foi criado.

## 1. Revisão como gestor e treinador

| Etapa | O que existe neste caso | Pendência ou limite | Consequência operacional |
|---|---|---|---|
| Pessoa e contexto | Experiência anterior, interrupção, trabalho/rotina, disponibilidade terça/sexta e preferência por supervisão | Consistência/dose anteriores e motivo específico do retorno desconhecidos | Preservar como desconhecidos; não classificar nível apenas pelos meses de prática |
| Avaliação pertinente | Força, calibração mecânica/esforço, cardiorrespiratório de familiarização, flexibilidade/tarefa, equilíbrio, postura e medida muscular regional | Protocolos sintéticos e limites de cada uso; não representam todos os protocolos reais da ACESSO | Não converter kgf em carga de máquina, criar limiar com a última FC ou generalizar uma medida regional |
| Prioridades | Não há dor atual relatada; existem direção de hipertrofia, disposição/regularidade e conforto ao calçar-se | Hierarquia dos objetivos ainda não acordada; relevância de achados não é diagnóstico automático | Levar a prioridade candidata à auditoria; o exemplo de escada com dor de outra conversa não preenche este caso |
| Plano de Ação | Exposição resistida, observação mecânica e complementos com papéis descritos | A finalidade de cada componente e seu custo de oportunidade ainda precisam de decisão profissional | Não exigir igual prioridade a todas as capacidades nem eliminar função para perseguir hipertrofia |
| Macro/meso/micro | Direção ampla; seis semanas como horizonte demonstrativo; terça/sexta com estrutura inicial semelhante | Duração global do macro desconhecida; sem progressão ou fase leve obrigatória | Calendário organiza registros; não autoriza aumento de dose ou renovação automática da planilha |
| Sessões candidatas | Dois pares alternados, duas tarefas tradicionais e complementos | Cargas, intervalos, complementos, tempo e tolerância do conjunto permanecem pendentes | A decisão anterior do treinador manteve somente a distribuição 3/3/3/3/2/2 no caso fictício |
| Conferência | Código real confere organização, contagem, tempo, semana, origem e ausência de observação | Não verifica cientificamente a adequação da prescrição | Apresentar contas e dependências ao treinador, sem selo geral de aprovação |
| Auditoria | Campos de escopo, decisão, responsável, justificativa e versão previstos no CAS-002 | Somente a distribuição tem decisão registrada; demais escopos permanecem pendentes | Não simular nova concordância do treinador nem ampliar a aprovação anterior |
| Execução/resposta | Campos definidos; valores observados e resposta posterior ausentes | Não há execução da proposta C demonstrada | Não copiar as respostas favoráveis históricas de outro cenário nem justificar progressão por silêncio |
| Revisão | Critérios candidatos descritos no caso | Decisão depende do que for efetivamente observado e documentado | Uma mudança gera novo retrato; preserva fonte/versão e reabre as conferências dependentes |

Essa tabela é uma revisão humana documental. O programa não inferiu exercícios, prioridades ou ciclos a partir da avaliação.

## 2. Passagem ao programa: resultado real da base

A entrada pública `verifyOrganization` recebeu 13 pedidos explícitos e devolveu 63 relações. Os 13 pedidos foram avaliados; isso significa apenas que os handlers desses pedidos foram executados. A ausência de um pedido de adequação fisiológica não prova que tal adequação foi conferida.

| Conferência | Resultado obtido | Leitura correta |
|---|---|---|
| Séries por exercício/sessão | E01/E02/E03/E04: 3; E05/E06: 2; total 16 | Distribuição já mantida no caso; não é regra para outros alunos |
| Cada par | 3 voltas; 3 séries de cada tarefa; 6 séries de exercício somadas | Três bi-sets não são seis voltas do par |
| Semana prevista | 32 séries, a partir de duas ocorrências identificadas com versão e dose explícita | Soma das duas sessões candidatas; não multiplicação baseada somente em disponibilidade |
| Cronologia de cada par | 420 s por par; oito intervalos até repetir tarefa, todos de 120 s nos dois pares | Hipótese de cronologia da fonte; não comprova recuperação fisiológica ou tolerância |
| Resistido | 1720–1960 s: 28min40s–32min40s | Dois pares, dois blocos tradicionais, transições, preparação específica e margem interna somados uma vez |
| Sessão completa prevista | 3160–3580 s: 52min40s–59min40s | `CABE_NAS_HIPOTESES` frente ao limite de 3600 s; não é duração realizada ou autorização para executar |
| Flexibilidade | Orçamento de 240 s | Inclui as exposições, relaxamentos e a reserva integral de até 60 s para preparo; não soma um novo bloco fora da sessão |
| Cíclico semanal previsto | 12–14 min | Componente da proposta, sem atestar alcance de meta aeróbica ou zona individual |
| Séries/RIR/resposta observados | Desconhecidos | Alvos preservados separadamente; nenhuma aprovação de progressão foi criada |

O cenário máximo deixa 20 s até o teto, além das margens já incluídas na conta. É uma folga aritmética pequena da hipótese, não uma medida de segurança ou certeza de duração. Se instrução, disponibilidade ou resposta mudarem a montagem, é necessário recalcular; este exercício não escolhe o ajuste do treinador.

## 3. Controles de conflito, ausência e cobertura

Os controles abaixo são novas variantes sintéticas de teste, não alterações do CAS-002 nem novas prescrições. Cada entrada tem identidade/hash próprios; fontes modificadas nos controles apontam explicitamente à variante sintética.

| Cenário | Resultado observado | Parcela preservada |
|---|---|---|
| BASE_CAS002_V06 | Contagens, cronologias e orçamentos acima conferem | Fonte e limites da proposta permanecem registrados |
| CONTROLE_TOTAL_DIVERGENTE | Declarar 17 com estrutura de 16 gera DIVERGENTE e diferença 1 | Derivado 16 e orçamento da sessão continuam disponíveis; sem correção automática |
| CONTROLE_SEMANA_INCOMPLETA | Dose da sexta ausente: total semanal e total completo por tarefa desconhecidos; subtotal conhecido 16 | A terça conhecida; a sexta não vira zero nem cópia da terça |
| CONTROLE_CICLICO_TETO8 | Máximo do cíclico de 8 min: faixa da sessão 3160–3640 s; PODE_EXCEDER | Volume e demais parcelas da hipótese; nenhuma dose é encurtada automaticamente |
| CONTROLE_ORIGEM_AUSENTE | Conta 16 continua calculável, mas origem nula gera MISSING_PROVENANCE | Aritmética independente, sem promover validação de fonte |
| CONTROLE_ROTULO_NOVO | Trocar o rótulo por “Organização pessoal X” não altera nenhuma das relações nem a cobertura | Estrutura explícita; o nome não determina dose |
| CONTROLE_COBERTURA_FISIOLOGICA | Um pedido deliberadamente não suportado devolve UNKNOWN_REQUEST_KIND; 14 pedidos, 13 avaliados e 1 não avaliado | Contagem 16 permanece; não há falso sinal de que o programa revisou fisiologia |

**Os sete cenários passaram nas asserções da sondagem.** Isso é evidência adicional, distinta dos 128 testes unitários da suíte e dos 89 cenários históricos de TEST-001. Não foram adicionados ou promovidos TCs históricos.

## 4. Proveniência, adaptação e reprodução

O arquivo JSON guarda a entrada integral de cada cenário, a origem por pedido, hashes e resultado de cobertura. Guarda o relatório integral da base. Nos seis controles, guarda projeções expressamente identificadas, o número de relações do relatório completo e seu hash; uma relação ausente da projeção não foi declarada inexistente no relatório original.

As ocorrências de sessão, fronteiras de série e IDs de grupo foram explicitados localmente na adaptação para a sondagem, com base na montagem descrita. Não são IDs importados de cadastros. As duas sessões usam a mesma estrutura porque a proposta v0.6 o declara, não porque todo aluno deve repetir a terça na sexta. O orçamento de flexibilidade reserva o preparo máximo declarado; nenhum tempo observado ausente foi preenchido com zero.

As entradas foram traduzidas fora do domínio; em seguida, o módulo real do projeto foi carregado localmente e chamado pela sua entrada pública. Repetir cada entrada produziu relatório profundamente igual; a entrada e as fontes permaneceram inalteradas. O script temporário de sondagem não é novo código de produto ou integração mantida.

Para reproduzir: usar o commit de motor indicado no JSON, carregar `src/domain/organization-verifier/index.ts` no ambiente TypeScript do projeto e executar `verifyOrganization(caso.input)` para cada cenário. A base deve coincidir com `caso.report`; nos controles, comparar as relações selecionadas de `caso.reportProjection`, a cobertura e o hash do relatório completo, calculado sobre `JSON.stringify(report)` em UTF-8. Nenhum parâmetro especial de limites foi passado. Os hashes normalizados para LF permitem conferir as fontes em sistemas com finais de linha diferentes; os hashes brutos identificam os bytes efetivamente lidos nesta rodada.

Não houve chamada a banco, cadastro, laudo, planilha, Apps Script, gatilho, automação, backup ou material operacional do professor. Não foi testado percurso por telas/API, autenticação ou integração de produto.

## 5. Passagem concreta para a auditoria do treinador

| Escopo do CAS-002 | Estado preservado | Decisão que ainda falta registrar |
|---|---|---|
| Distribuição de séries | MANTER, APROVADA_NO_ESCOPO apenas no caso fictício | Reabrir somente se o treinador quiser mudar o escopo/versão |
| Demandas e intenção | PENDENTE | Acordar hierarquia dos objetivos e finalidade dos componentes da proposta |
| Cargas, intervalos, complementos e tempo | PENDENTE | Manter, ajustar ou rejeitar os parâmetros candidatos, com justificativa; caber no teto não decide isso |
| Observação e revisão | PENDENTE | Definir o registro/retorno necessário e critérios pertinentes; não aprovar progresso sem evidência |
| Execução em pessoa real | Não autorizada por este caso | Exige processo próprio e dados reais pertinentes, fora desta sondagem |

Como gestor, a sequência já evita versões históricas tratadas como vigentes e deixa um ponto claro de retomada. Como treinador, ainda faltam decisões profissionais do caso; o algoritmo não deve resolvê-las silenciosamente. Como programador, a próxima peça útil é o vínculo rastreável entre evidência/decisão e proposta de sessão, antes de automatizar a geração do planejamento.

**Próximo passo recomendado:** consolidar o registro de decisão por escopo para esta passagem — entradas consideradas, intenção, alternativa escolhida, justificativa, versão e dependências — mantendo as pendências abertas. Depois, especificar a primeira regra de proposta assistida com fontes e critérios próprios. A tela e o dashboard devem consumir essa base, sem substituir essa definição.

## 6. Evidência de fechamento desta rodada

Em 22/10/2026: os sete cenários foram reexecutados a partir do JSON salvo, com igualdade dos relatórios completos por hash e das relações selecionadas; hashes das fontes e links locais foram conferidos. A suíte existente passou em 128/128 testes unitários, onze arquivos, e `pnpm run build` passou. Nenhum teste permanente ou código de produto foi adicionado nesta rodada; sondagem e suíte são evidências distintas. A navegação recebeu governança v0.23 no repositório, explicitando que não houve sincronização automática com o Drive.


Complemento solicitado pelo treinador: [DEC-IND-001](../decisions/DEC-IND-001_Casos_Contrastantes_e_Justificativa_Individual_v0.1.md) desenvolve seis situações em três contrastes de individualização. São análises humanas documentais com fontes e pendências, sem reutilizar o CAS-002 como ficha universal ou declarar novos testes executáveis.
