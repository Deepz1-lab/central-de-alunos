# VER-001 — Especificação do verificador de organização do treino

**v0.1 · 22/10/2026 · PROPOSTA_CENTRAL · Especificação para revisão · Sem implementação ou prescrição liberada.**

## 1. Problema e resultado esperado

A Central deve representar organizações variadas, conferir relações explicitadas e explicar divergências sem transformar os exemplos do treinador em receitas. Seriado, pares, trios, superséries, circuitos, intervalados, pirâmides e combinações são possibilidades de um repertório aberto. O nome do método não determina dose, quantidade de tarefas, capacidade ou segurança.

Esta primeira versão verifica estrutura, contagem, unidades, trajetórias e tempo. Produz achados por relação e finalidade, com entradas, conta, resultado, incerteza e alcance. **Não escolhe exercícios, dose, progressão ou periodização; não diagnostica nem certifica adequação científica.** Essas funções dependem de regras por contexto, evidências e auditoria profissional, em etapas posteriores.

O percurso maior permanece avaliação/contexto → prioridades/objetivos → Plano de Ação → ciclos/sessões → conferências → auditoria do treinador → execução/resposta → revisão. O verificador é uma parte desse percurso, não substitui o coração do projeto.

## 2. Base e alcance desta entrega

- [MET-004 v0.1](../analyses/MET-004_Repertorio_Metodos_Organizacao_v0.1.md): origem operacional e repertório aberto.
- [MET-005 v0.1](MET-005_Fichas_Metodos_Organizacao_v0.1.md) e [dez exemplos](MET-005_Exemplos_Representacao_v0.1.json): variantes, unidades de contagem e limites das fontes.
- [DIC-001 v0.5 §15](DIC-001_Indicadores_Protocolos_v0.5.md): capacidade/dose, agregação, tempo e proveniência.
- [AV-003 v0.6 §14](AV-003_Contrato_Avaliacao_Prescricao_v0.6.md): cobertura antes de alertar, distinção de conceitos, orçamento e execução/resposta.
- [VAL-001 v0.3 §4](../corrections/2026-10-20/VAL-001_Auditoria_de_Laudos_v0.3.md): estados de qualidade, G0–G3 e bloqueios por dependência.
- [TEST-001 v0.7](../validation/TEST-001_Casos_de_Validacao_v0.7.md): rastreio de testes; especialmente TC-70–80. Seus 89 cenários e estados não são alterados aqui.

[Oráculos VER-001](VER-001_Oraculos_v0.1.json), também [disponíveis no Drive](https://drive.google.com/file/d/12iaNpiYxgkIwgDacxtBrB6He4VZL1XSJ/view), são expectativas documentais para a futura implementação, não novos TC já executados. As fórmulas desta especificação são relações de registro/aritmética, não normas de prescrição. Não houve nova conferência acadêmica ou dos vídeos nesta rodada; as fontes e limitações de MET-005 são preservadas. Nenhum limiar fisiológico novo é proposto.

## 3. Limite do componente futuro

Recomenda-se um componente de cálculo local, determinístico e sem efeitos externos. Mesmas entradas, versão do contrato e parâmetros explícitos devem produzir os mesmos resultados de domínio; data de processamento é metadado separado. Ele recebe um retrato dos dados e devolve um relatório. Não grava no Drive, Sheets, cadastro, prontuário ou banco; não aciona Apps Script, gatilhos, backups ou publicação de treinos.

A escolha de linguagem, arquivos, integração e sequência de implementação pertence ao plano técnico posterior. Não instalar dependências nem criar integração como consequência deste MD. As estruturas abaixo são um contrato proposto, ainda não formato suportado pelo aplicativo.

## 4. Entradas e semântica propostas

| Objeto | Informação necessária ao uso |
|---|---|
| Retrato | `snapshotId`, `schemaVersion`, versão da proposta, janela/ocasião quando pertinente, origem e indicação de exemplo sintético |
| Valor | Valor bruto, unidade quando dimensional, fonte/localização/versão, condição de previsto ou observado; ausência explícita |
| Sessão | Identificador e versão próprios, natureza `PLANNED` ou `OBSERVED`, escopo/limite temporal e cobertura declarada |
| Tarefa | Identificador estável naquele retrato, variante/aparelho/ajustes/lado pertinentes; rótulo original preservado |
| Ocorrência de trabalho | `occurrenceId`, `taskId`, papel (trabalho, preparação ou outro explicitado), dose e relação com grupo/etapa; sequência explícita |
| Agrupamento | `groupId`, passagens identificadas e ocorrências pertencentes a cada passagem; o método é metadado, não gerador de ocorrências |
| Fronteira de série | `exerciseSeriesId` quando a fonte define o que conta como uma série daquela tarefa. Etapas internas podem compartilhar esse ID; se indefinido, não inventá-lo |
| Tempo | Linha temporal em segundos ou orçamento mínimo/máximo; trabalho, recuperação, transição, preparo, registro e reserva identificados sem duplicação |
| Recuperação | Chave explícita de repetição da mesma tarefa/condição, por exemplo `recoveryKey`, e tempos de início/fim; não inferir recuperação de um músculo apenas por essa chave |
| Trajetória | Eixo declarado (carga, repetições ou outro), tarefa/condição/unidade comparáveis, ordem e valores por etapa |
| Semana/janela | Ocorrências de sessão identificadas com versões e cobertura; frequência real não derivada só da disponibilidade ou do título “micro” |
| Comparação | Total/alvo declarado opcional, sua unidade, escopo e tolerância numérica explícita quando necessária |

Os campos são exigidos **por finalidade**, não como formulário universal. É possível contar ocorrências sem conhecer carga, objetivo ou nome do método. Uma prescrição adequada exige outras informações, mas isso não transforma uma soma explícita em impossível. Campos desconhecidos não serão preenchidos por padrões numéricos do CAS-002.

Uma ocorrência de trabalho, uma série de exercício, uma etapa interna e uma volta são unidades diferentes. Repetir a tarefa em três mini-blocos não demonstra três séries se a convenção define uma única série com pausas internas. Contar IDs de série só é permitido quando suas fronteiras e tarefas estão explícitas e não conflitantes.

Estruturas resumidas como “duas voltas de A+B, uma série por tarefa em cada volta” podem ser expandidas num adaptador declarado, preservando origem e versão. Resumo e ocorrências expandidas são representações alternativas da mesma coisa: nunca somar ambos. Se divergirem, guardar ambos e apontar a inconsistência. Método desconhecido com estrutura clara continua calculável; método conhecido com estrutura ausente pode não ser.

### 4.1 Valores, zeros e unidades

Contagens discretas exigem inteiros finitos não negativos; valores negativos ou fracionários não representam número de voltas/séries. Zero explícito pode indicar ausência planejada de ocorrências naquele escopo; não prova execução, desistência ou capacidade nula. Zero com origem desconhecida ou usado como marcador legado requer revisão para o uso, conforme VAL-001.

Trabalho temporal incluído exige duração positiva; transição/recuperação podem ser zero quando explicitamente descritas. Não substituir vazio por zero. Valores não finitos e unidades incompatíveis impedem apenas as relações dependentes. Neste primeiro escopo, autorizar conversão de minutos/segundos com fator explícito 60; outras conversões dependem de mapa próprio, sem equiparar kgf a kg de máquina.

Não misturar séries de tarefas, séries por lado, passagens, visitas a estações e segundos numa soma sem unidade. Não dobrar bilateral por padrão. Relação entre lados e contagem é declarada pela fonte; simultaneidade e alternância alteram tempo e unidade de exposição de modos distintos.

## 5. Regras propostas e saídas por relação

| ID | Relação / condição | Saída e limite |
|---|---|---|
| V-R01 — retrato e proveniência | Versão suportada, IDs e fontes necessários ao uso | Preservar o bruto e a origem. JSON ilegível ou versão não suportada: incapacidade explícita de interpretar o retrato, sem inventar achados nos campos não lidos |
| V-R02 — integridade | Referências inexistentes, IDs duplicados, autorreferência/ciclo de agrupamento | Apontar caminho e componente afetado; não expandir recursão inválida. Não corrigir, deduplicar ou descartar silenciosamente |
| V-R03 — contagem | Ocorrências, passagens, fronteiras de série e papel conhecidos | Contar por tarefa e unidade; somar apenas elementos pertinentes. Fórmula resumida voltas × tarefas só vale quando a estrutura realmente declara uma ocorrência por tarefa/volta |
| V-R04 — declarado versus derivado | Mesma unidade, escopo e dados suficientes | Preservar ambos e diferença; coincidência não aprova estímulo. Sem total declarado, a conta ainda pode existir, sem inventar concordância com uma declaração ausente |
| V-R05 — dimensões | Contagens, unidades, lados e condições | Converter apenas mapas permitidos; incompatibilidade suspende uso dependente. Coeficientes de contribuição muscular e equivalência entre protocolos não são criados |
| V-R06 — trajetória | Eixo, sequência, tarefa/condição e unidade comparáveis | Classificar crescente estrita, decrescente estrita, constante ou mista; faltas/incomparabilidade impedem a classificação. Não renomear o método da fonte |
| V-R07 — cronologia e recuperação | Inícios/fins conhecidos, chave de repetição equivalente | Duração = fim − início; intervalo para repetir = próximo início − fim anterior da mesma chave. Intervalo inclui outras tarefas; não significa repouso passivo ou recuperação fisiológica comprovada |
| V-R08 — orçamento/cobertura | Componentes únicos, faixas válidas, reserva incluída ou adicional | Somar mínimos/máximos separadamente, sem somar duas vezes componente já incluído. Cobertura incompleta gera subtotal conhecido e total desconhecido, não sessão completa aprovada |
| V-R09 — janela semanal | Sessões/ocorrências/versões e cobertura explícitas | Somar por tarefa/unidade; duas sessões podem ter doses diferentes. Repetição indevida do mesmo ID gera conflito em vez de duplicar/deduplicar silenciosamente |
| V-R10 — previsto versus observado | Proveniência e natureza dos valores | Não copiar plano como execução, RIR-alvo como RIR observado ou pausa prevista como medida; relatórios separados por natureza |
| V-R11 — finalidade e alcance | Relações necessárias ao uso pedidas e suas dependências | Informar o que foi calculado, divergente, não calculável ou não aplicável; preservar saídas independentes e listar verificações não cobertas |

### 5.1 Trajetória piramidal

Crescente estrita: todos os valores consecutivos do eixo comparável aumentam; decrescente estrita: todos diminuem; constante: todos iguais; demais sequências completas: mista. São necessárias pelo menos duas etapas comparáveis para classificar direção. A sequência 10→12→12 é mista para essa definição estrita, e pode receber descrição “não decrescente com patamar” sem virar erro de prescrição. Direção diferente da alegada gera divergência de descrição, não diagnóstico técnico do estímulo.

Se faltou uma etapa, não declarar a direção da trajetória completa apenas pelos pontos disponíveis. Mudança de aparelho/condição ou de unidade sem correspondência impede comparação de carga, mas não apaga a contagem das etapas. Aquecimento e séries de trabalho ficam separados por papel.

### 5.2 Tempo, sobreposição e orçamento

Há duas bases alternativas: `TIMELINE` e `BUDGET_RANGES`. Havendo ambas, indicar qual é a base para cada resultado e compará-las quando pertinente; não somá-las. A linha temporal usa união dos intervalos para tempo de relógio quando há simultaneidade explícita. Duas tarefas de 20 s realizadas simultaneamente ocupam 20 s de relógio; a soma de tempos por tarefa pode ser 40 s e tem outra unidade de análise. Sobreposição sem explicação pede revisão da cronologia afetada, sem concluir impossibilidade clínica.

Na linha temporal, intervalos faltantes não se tornam recuperação zero. Se só há início/fim do bloco, pode existir duração decorrida, mas distribuição trabalho/pausa fica desconhecida. Total completo da sessão requer fronteiras/cobertura suficientes; duração de um bloco não é sua duração total. Recuperação por tarefa é resultado cronológico, não o alvo inferido do nome bi-set, RML ou força máxima.

No orçamento, reserva ou transição incluída no bloco deve ter identificação explícita para não ser adicionada de novo. Quando não se sabe se está incluída, devolver o subtotal inequívoco e a pendência; não escolher a interpretação mais conveniente. Despesas simultâneas não são somadas como se fossem sequenciais. Reservas/margens sem relação definida entre si também não podem ser deduplicadas por suposição.

Com cobertura completa e limite L: máximo ≤ L significa que a faixa estimada cabe nas hipóteses; mínimo > L significa que toda a faixa excede; mínimo ≤ L < máximo indica risco de exceder no orçamento, sem dizer que houve excesso real. Sem limite, apenas duração/faixa. Tempo observado acima de limite declarado é fato a preservar, não motivo para reescrever o realizado. Nenhum desses resultados autoriza encurtar descanso, retirar exercícios ou aprovar uma sessão automaticamente.

## 6. Contrato proposto de saída e taxonomias

Cada relação terá: `relationId`, `ruleId` e versão; finalidade; IDs/caminhos de entradas; valores/unidades brutos e normalizados; operação/fórmula; resultado derivado; valor declarado/alvo quando houver; diferença; motivo; usos afetados e independentes; natureza prevista/observada; origem; pendências e decisão profissional separada.

Propõe-se um campo **computacional**, distinto dos estados de VAL e do resultado de teste: `calculationStatus` com `CALCULADO`, `DIVERGENTE`, `NAO_CALCULAVEL` ou `NAO_APLICAVEL`. É vocabulário proposto deste componente, ainda sujeito à revisão. `CALCULADO` significa somente que a relação foi obtida no escopo declarado; não significa VALIDADO, aprovado, adequado ou executado. `NAO_APLICAVEL` não será usado para esconder dado ausente numa relação pedida.

Qualidade de campo/uso, quando pertinente, aponta aos oito estados de VAL-001. Ausência gera SEM_DADO na entrada e pode gerar CONTEXTO_INSUFICIENTE no derivado; conflito aritmético pode sugerir INCONSISTENTE. O software não concede VALIDADO automaticamente: esse estado exige revisor, data, versão, evidência e finalidade. Não diagnosticar PENDENTE_REVISAO_CLINICA apenas por uma divergência de contas.

Gravidade G0–G3 depende do impacto no uso conforme VAL-001, não apenas do tamanho do número ou do nome do método. Nesta primeira versão, o componente explica impacto e dependências e pode deixar `impactReview` pendente; não gera grau clínico, cor de liberação ou equivalência com severidade de defeito. Casos que exigirem escala/critério precisam de configuração/documentação aprovada no escopo, sem cortes inventados.

Bloqueio computacional especifica **entrada/ambiguidade → relação não utilizável → decisão dependente que precisa de revisão**. Não é ordem para suspender todo o treino. Um total declarado incoerente não impede exibir a conta derivada se suas entradas forem independentes e suficientes; impede tratá-los como total reconciliado. Dados independentes mantêm seus próprios estados. Correção gera nova versão de entrada/relatório e preserva a anterior.

Não haverá `sessionApproved: true` ou um “verde geral” derivado da ausência de achados. A síntese informa cobertura, relações pedidas/calculadas/não avaliadas e limites. Campos de aprovação/execução do domínio permanecem intocados.

### 6.1 Exemplos de mensagens ao treinador

| Situação | Mensagem proposta |
|---|---|
| Duas voltas com A e B, uma série por tarefa/volta, total declarado seis | “A estrutura descreve duas voltas e duas séries por exercício: quatro séries de exercício somadas. O total informado é seis. Revise o total ou a estrutura; ambos foram preservados.” |
| Circuito temporal completo, sem repetições | “Foram calculados oito tempos de trabalho nas estações. As repetições e a equivalência em séries musculares não estão informadas; não foram estimadas.” |
| Só consta HIIRT 20:20 | “Faltam tarefas, passagens e significado dos tempos para calcular este bloco. O rótulo foi preservado.” |
| Intervalo cronológico diferente por tarefa do par | “O tempo até repetir A é 100 s e B é 105 s nesta cronologia. A pausa de 60 s entre voltas não representa sozinha nenhum desses intervalos.” |
| Faixa completa 52–66 min e limite 60 min | “A estimativa pode exceder o limite em seu cenário superior. Isso indica revisão de viabilidade; não é registro de uma sessão realizada.” |

As mensagens explicam uma relação. Não afirmam que o estímulo mudou de força máxima para resistência somente por um intervalo, nem que uma pirâmide é errada pelo rótulo. Futuras verificações técnico-científicas precisarão de intenção, parâmetros interdependentes, fontes e alcance próprios.

## 7. Rastreio dos oráculos e critérios de aceitação

Os oráculos V-01–V-24 são fragmentos sintéticos destinados a relações específicas, não 24 entradas completas prontas para um aplicativo. `expected` descreve o resultado pretendido; `executionStatus=NAO_EXECUTADO` registra que não houve execução contra o componente futuro. Implementação deverá converter/validar esses fragmentos de forma rastreável, não copiar `expected` para a saída.

| Grupo | Cobertura planejada | Ligação com a base |
|---|---|---|
| V-01–V-05 | Seriado, pares, trios, temporal e combinação piramidal | MET-005 REP-01–04/07; DIC §15; TC-74–78 como referências de escopo |
| V-06–V-10 | Rótulo insuficiente, total divergente, dados inválidos, duplicação e ciclo | MET-005 REP-09/10; VAL §4; preservação de independentes |
| V-11–V-15 | Sem inferência de execução, zeros, unidades e trajetória incompleta | MET-005 REP-05/06/08; TC-70–75/80 como referências |
| V-16–V-21 | Condição não comparável, recuperação ausente, simultaneidade e orçamento | DIC §15; AV R-OP-03; TC-76–79 como referências |
| V-22–V-24 | Semana heterogênea, cobertura semanal incompleta, método novo descrito | MET-004/005; agregação por finalidade e repertório aberto |

Critérios da futura implementação:

- Contrato e limites revisados, relatório por relação e ausência explícita; sem catálogo fechado de nomes ou dose padrão.
- Oráculos comparados com saída real do código usado pelo aplicativo, com versão/commit e resultado por caso; conferência de MD não conta como teste passado do motor.
- Entradas preservadas e sem mutação, sem escrita externa; resultado de domínio determinístico e mudança de entrada reabre descendentes pertinentes.
- Positivos, divergências, ausências e não aplicáveis distintos; bloqueio local e resultados independentes demonstrados.
- Nenhum resultado copia alvos para observado, aprova sessão, sugere dose automaticamente, converte força em carga de máquina ou infere intensidade pela palavra HIIRT.
- Valores de exemplos variáveis: substituir voltas, tarefas ou sessões deve alterar a conta correspondente, sem números especiais copiados do CAS-002.
- Limites práticos de tamanho/expansão definidos no plano técnico e tratados como capacidade do processamento, sem truncamento silencioso ou restrição do método de treino.

Esta entrega conferiu estrutura/oráculos documentalmente. O catálogo TEST-001 permanece com 89 cenários e seus estados anteriores; não instalar nem promover testes automaticamente.

## 8. Revisão e próxima etapa

O desenho está pronto para revisão do treinador/programador: utilidade das mensagens, alcance dos bloqueios, representação das variantes e limites da primeira versão. Os estados de aprovação das doses/métodos não são alterados por aceitar um cálculo.

Depois da revisão desta especificação, preparar o plano técnico de implementação e testes do componente sem efeitos externos. Desenvolvimento, integração e validação do código são etapas posteriores, com evidência própria. Não foi implementado motor, editor de treino, integração com planilhas ou ampliação do dashboard nesta entrega.
