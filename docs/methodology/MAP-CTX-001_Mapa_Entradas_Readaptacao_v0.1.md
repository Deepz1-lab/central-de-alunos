---
id: MAP-CTX-001
versao: "0.1"
data: "2026-10-21"
estado: "MAPA_DOCUMENTAL_PARCIAL_SEM_INTEGRACAO"
origem: "Fontes existentes + prática relatada + PROPOSTA_CENTRAL"
---

# Dados de entrada e retorno antes de propor a readaptação

## Resultado

A base já contém contexto e campos de avaliação, plano e acompanhamento; não é necessário começar por outro formulário. O piloto implementa apenas objetivo relatado, disponibilidade em texto e objetivo confirmado, dentro do fluxo inicial. Os demais dados não foram implementados por este mapa.

Foram organizados **34 itens em quatro blocos**, com fonte, evidência, cobertura física, presença no piloto, lacuna e decisão dependente. O mapa não contém respostas, medições, nomes ou IDs de arquivos individuais. As fontes operacionais foram lidas sem alterações.

## Escopo e evidência

- **REF-AV-02:** exemplar de avaliação já utilizado no estudo. Nesta rodada foram conferidos metadados, Anotações Gerais!A1:C33, Avaliação!A1:C45 e A43:A159, e Plano de Ação!A1:D12. Publicam-se rótulos/coordenadas, sem transcrever respostas.
- **REF-TC-01:** exemplar de Treinamento Combinado do professor, título v3.13.11. Conferidos metadados e cabeçalhos de Montagem!A1:V14, Aluno!A1:AF10 e Controle Cíclico!A1:AL4 e AM1:BT2. Não é a cópia individual modificada em outra etapa; não foram acionados botões.
- **MET-002/003:** leituras anteriores sustentam coordenadas complementares, explicitamente marcadas como anteriores. Não houve nova auditoria integral de fórmulas.
- **AV-001, AV-003, DIC-001 e FLX-001:** descrevem anamnese, contexto, origem/qualidade e separação entre plano e execução. Previsão documental não comprova campo físico localizado.
- **Piloto:** leitura de tipos, interface e migrações locais. Não foi feita consulta ao banco ou alteração de esquema, aplicativo ou permissões.
- **Anamnese em conversa/áudio:** processo descrito em AV-001 §2; nenhum áudio foi localizado/transcrito nesta rodada. Relato existente deve ser revisado antes de recolher a mesma informação.
- Uma busca ampla por anamnese encontrou fontes de outros contextos e versões, que não foram promovidas a formulário vigente nem incorporadas por semelhança de nome.

Os aliases ligam-se a IDs apenas no registro privado de procedência. Uma cópia não representa toda a carteira ou todas as versões.

### Divergência de versão encontrada

O título de REF-AV-02 informa **4.10.13**, enquanto Avaliação!A2 exibe **Versão 4.9.12**. Preservar ambos, com data e localizador. A versão efetiva do modelo precisa de reconciliação antes de qualquer importação por endereço. Não foi alterado o cabeçalho, nem foi concluído que toda a planilha corresponde a uma dessas versões.

### Como ler a cobertura

**OBSERVADO** significa estrutura/rótulo conferido nesta rodada; **MD/RELATO** significa descrição documental ou do treinador; **LEITURA_ANTERIOR** mantém o limite temporal. Cabeçalho localizado não prova preenchimento, protocolo válido, fórmula conferida ou atualização da informação.

**PARCIAL/NAO_LOCALIZADO** não significam que o dado inexiste: ele pode estar em notas, conversa, outro arquivo ou outra versão. Não foram criados novos estados de qualidade VAL. O uso futuro continua sujeito a objeto + finalidade + estado canônico.

As coordenadas do rótulo não são automaticamente coordenadas do valor. O campo “versão” do modelo deve acompanhar qualquer tentativa futura de localizar a coluna da ocasião.

## Contexto

| ID/dado | Onde já aparece e evidência | O que falta antes de usar | Decisão que pode depender |
|---|---|---|---|
| CTX-01 — Objetivo relatado | REF-AV-02 Anotações Gerais!B5:C5; piloto intake_submissions.objective_reported. Cobertura: PARCIAL; evidência: OBSERVADO. | Reutilizar relato com autoria/data; o objetivo da nota não é confirmação atual automática | Prioridade e desfecho pretendido |
| CTX-02 — Objetivo confirmado pelo treinador | Piloto coach_summaries.objective_confirmed; FLX-001 §4; DIC-23. Cobertura: EXATO_NO_CODIGO; evidência: CODIGO_E_MD. | Preservar base do relato revisada, versão, decisão e liberação distintas | Acordo do objetivo; não libera treino por si só |
| CTX-03 — Disponibilidade real | Piloto intake_submissions.availability_reported; FLX-001 §4. Cobertura: EXATO_NO_CODIGO; evidência: CODIGO_E_MD. | Texto livre; dias/horários/duração não são campos estruturados. Confirmar contexto sem copiar frequência para prescrição | Distribuição viável das sessões |
| CTX-04 — Ocupação e tarefas do trabalho | AV-001 §2 prevê rotina_trabalho; conversa do treinador. Cobertura: NAO_LOCALIZADO; evidência: DESCRITO_MD. | Localizar relato existente antes de perguntar. Profissão sozinha não determina exigência física | Tarefas prioritárias, fadiga percebida e organização |
| CTX-05 — Rotina diária e deslocamentos | AV-001 §2 e FLX-001 §4. Cobertura: NAO_LOCALIZADO; evidência: DESCRITO_MD. | Conferir conversa/notas pertinentes; não concluir inexistência por não localizar campo específico | Disponibilidade e recuperação contextual |
| CTX-06 — Sono e recuperação habitual | AV-001 §2 prevê rotina_sono. Cobertura: NAO_LOCALIZADO; evidência: DESCRITO_MD. | Definição/coleta a revisar; nenhum corte de horas ou escore automático criado | Interpretação da resposta e pertinência da dose |
| CTX-07 — Experiência e interrupções do treino | REF-AV-02 Anotações Gerais!A11:C13 contém área de histórico; AV-001 §2. Cobertura: PARCIAL; evidência: OBSERVADO_E_MD. | Área genérica não separa experiência, interrupção e resposta prévia; aproveitar texto com revisão | Familiarização e ponto de partida da readaptação |
| CTX-08 — Outras atividades e fisioterapia | AV-001 §2 atividades_externas; FLX-001 §4. Cobertura: NAO_LOCALIZADO; evidência: DESCRITO_MD. | Perguntar somente se faltar na fonte pertinente; dias/solicitações de outro profissional não são presumidos | Distribuição das exposições e integração |
| CTX-09 — Preferências e adesão possível | AV-001 §2 preferencias; anamnese relatada. Cobertura: NAO_LOCALIZADO; evidência: DESCRITO_MD. | Relatos podem estar em texto livre; não inferir preferência pelo exercício já escrito | Escolha de meios e continuidade |
| CTX-10 — Ambiente e exceções de equipamentos | REF-TC-01 Montagem!F13; DEC-CAP-001; regra confirmada ACESSO padrão. Cobertura: PARCIAL; evidência: OBSERVADO_E_TREINADOR. | F13 é rótulo observado; valor/ID do ambiente a localizar. Detalhar recursos fora da ACESSO ou em indisponibilidade real | Viabilidade da variante e alternativa |

## Avaliação

| ID/dado | Onde já aparece e evidência | O que falta antes de usar | Decisão que pode depender |
|---|---|---|---|
| CTX-11 — Dor/queixa e impacto atual | REF-AV-02 Anotações Gerais!B7:C8; AV-001 §2; AV-003 §11. Cobertura: PARCIAL; evidência: OBSERVADO_E_MD. | Observações livres existem; localização, comportamento, irradiação, tarefa e momento não são protocolo estruturado confirmado | Revisão profissional das tarefas e prioridades afetadas |
| CTX-12 — Histórico, restrições e orientações pertinentes | REF-AV-02 Anotações Gerais!A11:C13 e A18:C24; FLX-001 §5. Cobertura: PARCIAL; evidência: OBSERVADO_E_MD. | Ler finalidade e atualidade; nota ou condição isolada não vira contraindicação universal | Prontidão profissional e adaptação pertinente |
| CTX-13 — Medicamentos/contexto relevante | REF-AV-02 Anotações Gerais!A15:C17; DIC-19. Cobertura: PARCIAL; evidência: OBSERVADO_E_MD. | Localizado bloco de notas, não ficha clínica completa; usar somente o pertinente e manter relato separado de interpretação | Interpretação dos testes e esforço quando houver dependência |
| CTX-14 — Ocasião, avaliador e data de coleta | REF-AV-02 Avaliação!A3/A5/A6/A8 são rótulos; AV-003 §2–3. Cobertura: PARCIAL; evidência: OBSERVADO_E_MD. | Colunas dos valores por ocasião não auditadas nesta rodada. C é coluna de variação no recorte lido, não a data. Coleta não é exportação | Atualidade, comparação e procedência |
| CTX-15 — Antropometria e composição corporal | REF-AV-02 Avaliação!A9:A42 e A102:A117; DIC-01–07. Cobertura: ROTULOS_OBSERVADOS; evidência: OBSERVADO_E_MD. | Identificar valor por ocasião, unidade, método e equação antes de comparar ou derivar | Desfecho corporal pertinente, sem usar massa total como hipertrofia |
| CTX-16 — Ultrassom regional | REF-AV-02 Avaliação!A43:A101; AV-002; DIC-08. Cobertura: ROTULOS_OBSERVADOS; evidência: OBSERVADO_E_MD. | Mapa de rótulos; aquisição, regiões, valores e repetibilidade por pergunta ainda exigem conferência | Acompanhamento regional quando pertinente |
| CTX-17 — Dinamometria e comparação D/E/flexão-extensão | AV-003 §12.1; DIC-09–12; relatórios externos já descritos. Cobertura: RELATORIO_POR_MAPEAR; evidência: MD_E_RELATO_TREINADOR. | Localizador do bruto por teste/laudo ainda pendente; registrar lado, gesto, fixação, ângulo, seleção e dor no teste | Hipótese de assimetria e decisão de tarefa; sem corte H/Q universal |
| CTX-18 — Carga/reps de teste e resultados rotulados 1RM | REF-AV-02 Avaliação!A126:A135; DIC-13. Cobertura: ROTULOS_OBSERVADOS; evidência: OBSERVADO_E_MD. | Separar cargas/reps, estimativa e teste direto; localizar fórmula e aparelho. Dinamometria não fornece kg da máquina | Referência específica de força quando aplicável |
| CTX-19 — RML e execução em tarefa | REF-AV-02 Avaliação!A119/A121 e A123; DIC-14. Cobertura: ROTULOS_OBSERVADOS; evidência: OBSERVADO_E_MD. | A123 é observação; descrever protocolo/cadência/término. Não supor que represente resistência global | Tarefa e capacidade pertinente |
| CTX-20 — Flexibilidade/Wells e medida específica | REF-AV-02 Avaliação!A120/A122/A123; AV-003 §12; DIC-24. Cobertura: ROTULOS_OBSERVADOS; evidência: OBSERVADO_E_MD. | Conferir procedimento e medida específica quando a pergunta exigir; Wells não localiza toda limitação | Indicação e acompanhamento de amplitude/função |
| CTX-21 — Cardiorrespiratório: estágios, FC, PSE e recuperação | REF-AV-02 Avaliação!A139:A148; Metabólica!A16:H38 em MET-003. Cobertura: PARCIAL_COM_MET003; evidência: OBSERVADO_E_LEITURA_ANTERIOR. | Rótulos reconferidos; bloco metabólico usa leitura anterior, não nova auditoria completa. Fonte/modalidade/data por variável | Proposta cíclica; não usar 85% como limiar validado |
| CTX-22 — Postura e pergunta de movimento | REF-AV-02 aba Imagens confirmada por metadados; AV-003 §12; DIC-22. Cobertura: PARCIAL; evidência: METADADOS_E_MD. | Rubricas, escores e localizadores completos pendentes; relacionar observação à pergunta pertinente | Hipótese e acompanhamento; sem correção automática |
| CTX-23 — Equilíbrio/baropodometria e tarefa funcional | AV-001; DIC-21; AV-003 §11. Cobertura: RELATORIO_POR_MAPEAR; evidência: DESCRITO_MD. | Registrar tarefa/apoio/instrumento e protocolo da fonte. TUG permanece candidato seletivo | Tarefa de equilíbrio/função quando indicada |

## Prioridades

| ID/dado | Onde já aparece e evidência | O que falta antes de usar | Decisão que pode depender |
|---|---|---|---|
| CTX-24 — Interpretação e prioridades acordadas | REF-AV-02 Plano de Ação!A1:D12; MAP-AV-001/002; DIC-23. Cobertura: PARCIAL; evidência: OBSERVADO_E_MD. | Cabeçalhos Etapa/Planos/Outros itens localizados; separar texto do plano de uma prioridade justificada e aprovada | Plano de Ação e sequência de trabalho |
| CTX-25 — Readaptação indicada e pergunta de observação | CAS-001 v0.4; REV-CAS-001 v0.3; orientação direta do treinador. Cobertura: NAO_APLICAVEL_A_PLANILHA_AINDA; evidência: CONFIRMADO_TREINADOR_E_PROPOSTA. | Direção para o caso, sem prazo/dose automáticos; objetivo continua presente desde o começo | Proposta inicial individual e critério de revisão |
| CTX-26 — Dose planejada e unidade de séries/grupamento | REF-TC-01 Montagem!I:P em MET-002; Macrociclo linhas 31/33 em MET-002. Cobertura: PARCIAL_COM_MET002; evidência: LEITURA_ANTERIOR_E_ROTULOS. | N1/O1/P1 reconferidos: exercício/RR/carga. Mapear lado, unidade e participação muscular; SGM não é total de séries | Viabilidade, contagem de volume e comparação do plano |
| CTX-27 — Referências cíclicas de base | REF-AV-02 Dados de Base!C5:J22; REF-TC-01 Dados de Base/Importar; MET-003. Cobertura: PARCIAL_COM_MET003; evidência: LEITURA_ANTERIOR_MET003. | Origem/ocasião por campo; importação manual não prova referência recente ou sincronização | Escolha de referência para prescrição cíclica |

## Resposta

| ID/dado | Onde já aparece e evidência | O que falta antes de usar | Decisão que pode depender |
|---|---|---|---|
| CTX-28 — Série/reps/carga/RR planejados versus realizados | REF-TC-01 Montagem!I:P e Aluno!F13:P13 em MET-002. Cobertura: PARCIAL_COM_MET002; evidência: LEITURA_ANTERIOR_MET002. | Plano e carga relatada/registro são distintos; localizador por tentativa ainda necessário. RR não vira RIR observado automaticamente | Ajuste de tarefa e proposta de progressão |
| CTX-29 — Tempo e distância realmente executados | REF-TC-01 Controle Cíclico!AR1:AS1; AV2:BA2. Cobertura: CABECALHOS_EXATOS; evidência: OBSERVADO. | AR/AS: data executada/prevista; AV/AW: tempo executado/previsto; AY/AZ: distância executada/prevista. Cabeçalho não comprova preenchimento | Viabilidade, aderência descritiva e ajuste do cíclico |
| CTX-30 — Esforço relatado versus previsto | REF-TC-01 Controle Cíclico!AE2 e BB1:BD1; AV-003 §14. Cobertura: CABECALHOS_EXATOS; evidência: OBSERVADO_E_MD. | AE2 PSE Real; BB/BC relatado/previsto. Conferir escala, janela e unidade; não misturar Borg por estágio, PSE global, RIR e PSR | Interpretação da exposição e revisão de dose |
| CTX-31 — Sintomas, controle, apoio e observações da execução | REF-TC-01 Controle Cíclico!AN1/BE1; Montagem!U:V em MET-002; AV-003 §14. Cobertura: PARCIAL; evidência: OBSERVADO_E_MD. | Observação existe; separar quando proposta e quando realmente observada, autoria e tarefa. Ausência não prova tolerância | Adaptar/manter/propor progressão por tarefa |
| CTX-32 — Recuperação e impacto após a sessão | AV-003 §14; DIC-001 §15; anamnese/conversa existente. Cobertura: NAO_LOCALIZADO_NESTA_LEITURA; evidência: DESCRITO_MD. | Canal, período e registro a conferir antes de novo campo; não inferir baixa recuperação de dados ausentes | Decisão de dose/retorno no contexto |
| CTX-33 — Decisão do treinador e motivo | REF-TC-01 Controle Cíclico!BP1:BT1. Cobertura: CABECALHOS_EXATOS; evidência: OBSERVADO. | BP interpretação; BQ decisão; BR justificativa; BS momento; BT data de impacto. Não confundir opções disponíveis com decisão preenchida | Manter/adaptar/progredir e momento de revisão |
| CTX-34 — Comparação/reavaliação e mudança de contexto | Avaliação!A8 é rótulo de reavaliação; AV-003 §2/5; VAL-001. Cobertura: PARCIAL; evidência: OBSERVADO_E_MD. | Data prevista não prova coleta; comparar variável/protocolo/contexto; retomar somente dependências afetadas | Revisão de sessão, micro, meso ou macro |

## O que reaproveitar e o que localizar primeiro

1. Reutilizar objetivo/observações/histórico da anamnese e confirmar o que continua atual; preservar origem e sentido do relato. “Objetivo” na nota não é automaticamente o objetivo atualmente confirmado pelo treinador.
2. Para trabalho, sono, rotina, atividades e preferências, procurar as conversas/notas pertinentes antes de acrescentar campos. Ausência de localização específica neste recorte não prova ausência de coleta.
3. Completar somente lacunas que mudem a decisão em análise. Por exemplo, atividade ocupacional relevante pede tarefas e contexto; um nome de profissão não escolhe a dose.
4. Reutilizar os campos de retorno da planilha com sua semântica: previsto/executado, esforço relatado, observação, decisão e justificativa. Conferir valores e janela antes de consumir, sem assumir resposta favorável.
5. Confirmar, numa revisão direcionada, onde e como já se registra recuperação após a sessão. Um campo para PSE não substitui esse relato, e falta de PSR não comprova baixa recuperação.
6. Detalhar equipamentos apenas nas exceções à ACESSO padrão ou em indisponibilidade real.

## Dependências para o raciocínio

As listas são referências candidatas para revisão de pertinência, **não conjuntos de preenchimento obrigatório para todo aluno**. O treinador define o que a decisão exige naquele contexto.

| Decisão | Itens relacionados | Se faltar informação pertinente |
|---|---|---|
| DEC-CTX-01 — Conhecer o objetivo e o tempo disponível | CTX-01, CTX-02, CTX-03, CTX-14 | Objetivo acordado e distribuição propostos ficam pendentes no escopo sem confirmação; não fabricar frequência prescrita. |
| DEC-CTX-02 — Escolher tarefas pertinentes para a readaptação | CTX-07, CTX-10, CTX-11, CTX-12, CTX-17, CTX-24, CTX-25 | Revisar tarefa/entrada dependente e obter contexto pertinente; não escolher exercícios por diagnóstico ou assimetria isolada. |
| DEC-CTX-03 — Organizar dose compatível com rotina e experiência | CTX-03, CTX-04, CTX-05, CTX-06, CTX-07, CTX-08, CTX-26 | Não aplicar dose ótima padrão ou deduzir esforço ocupacional do nome da profissão. Julgar a pertinência de cada lacuna. |
| DEC-CTX-04 — Selecionar referência para trabalho cíclico | CTX-14, CTX-21, CTX-27 | Referência de zona dependente fica em revisão; preservar observações e decisões realmente independentes. |
| DEC-CTX-05 — Decidir sobre flexibilidade/equilíbrio | CTX-11, CTX-20, CTX-22, CTX-23, CTX-24 | Teste específico só é pedido se pertinente; Wells/fotografia não escolhem automaticamente uma intervenção. |
| DEC-CTX-06 — Propor manutenção, ajuste ou progressão | CTX-11, CTX-14, CTX-26, CTX-28, CTX-29, CTX-30, CTX-31, CTX-32, CTX-33, CTX-34 | Sem resposta pertinente observada, não declarar adaptação ou progressão aprovada; reabrir o que depende da informação faltante. |

Manter fatos medidos/relatados, hipóteses, prioridades, proposta e aprovação em registros distintos. Divergência de um dado reabre apenas os usos dependentes; prontidão profissional pertinente antecede o esforço proposto, sem o software produzir liberação automática.

## Aplicação ao CAS-001 v0.4

Objetivo e disponibilidade estão definidos na fixture; a avaliação numérica é sintética e histórica. Trabalho, rotina e resposta à readaptação continuam desconhecidos. D-01 já registra a orientação do treinador para ajustar o ponto de partida; o mapa não inventa essas respostas nem escolhe séries por grupamento.

A próxima entrega útil é um **resumo de contexto revisável ligado à avaliação**, preenchido a partir das fontes que existirem. Só depois do contexto pertinente, propor tarefas/dose e estabelecer como observar a resposta. Nesta etapa não foi criado formulário, nova coleta, tabela no banco, prescrição ou motor.

## Verificações documentais e limites

O JSON acompanhante mantém os 34 itens, a cobertura do piloto e seis conjuntos de referências de decisão. A conferência verifica IDs, referências internas, limites de implementação, distinção previsto/realizado e ausência de valores individuais; não executa regras de prescrição.

Três controles ilustrativos para futura implementação, sem ampliar o catálogo TEST-001 nesta rodada:
- disponibilidade de três dias não preenche automaticamente frequência prescrita;
- dor não localizada/descrita não vira “sem dor”, e um rótulo de PSE real não comprova observação;
- uma divergência de versão impede assumir um endereço uniforme entre cópias, preservando a leitura manual contextual e os dados independentes.

O catálogo continua com 89 cenários e os estados já registrados. A cobertura é parcial por versão e finalidade. Nenhum mapeamento foi promovido a integração aprovada.

## Atribuição e referências

A direção de conhecer contexto e observar readaptação veio do treinador. A definição deste mapa, agrupamentos, IDs CTX e dependências é PROPOSTA_CENTRAL. Não foram adicionadas doses, limites clínicos ou afirmações atribuídas a vídeos verificados; as fontes didáticas/acadêmicas mantêm a maturidade registrada nos MDs.

[AV-001 v0.2](../corrections/2026-10-20/AV-001_Modelo_de_Avaliacao_Integrada_e_TUG_v0.2.md), [AV-003 v0.6](AV-003_Contrato_Avaliacao_Prescricao_v0.6.md), [DIC-001 v0.5](DIC-001_Indicadores_Protocolos_v0.5.md), [FLX-001 v0.4](../corrections/2026-10-20/FLX-001_Jornada_Fluxo_Operacional_v0.4.md), [MET-002](../analyses/MET-002_Logistica_Treinamento_Combinado_v0.1.md), [MET-003](../analyses/MET-003_Avaliacao_Dados_Base_Treino_Ciclico_v0.1.md), [CAS-001 v0.4](../validation/CAS-001_Cascata_Sintetica_Integrada_v0.4.md) e [mapa estruturado](MAP-CTX-001_Mapa_Entradas_Readaptacao_v0.1.json).
