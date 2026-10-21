---
id: CENTRAL-001
titulo: "Central de Alunos — Visão do Produto e Arquitetura Funcional"
versao: "0.4.0"
data: "2026-10-19"
estado: "PROPOSTA_EM_VALIDACAO_PELO_RESPONSAVEL_TECNICO"
tipo: "documento-base de produto, método, governança e visão técnica"
privacidade: "Sem dados individuais ou pessoais identificáveis de alunos"
implementacao: "Documental; não altera sistemas operacionais"
---


# CENTRAL-001 — Visão do Produto e Arquitetura Funcional


> **Propósito permanente:** construir uma plataforma de gestão, acompanhamento e inteligência profissional que preserve a individualidade do aluno e a autonomia do treinador, integre a metodologia das aulas ACESSO à literatura científica e permita reduzir trabalho repetitivo por meio de dados confiáveis, avaliações contextualizadas e decisões rastreáveis.


**Esta é uma VISÃO e uma proposta para aprovação pelo treinador; não é uma especificação aprovada de automação, cronograma contratado, prescrição nem autorização para modificar arquivos individuais.**


## 1. A essência que não podemos perder


A Central não nasce como um website, um dashboard ou um gerador de treinos. Ela nasce como um **sistema de trabalho do profissional de Educação Física**: conhecer a pessoa, compreender suas necessidades, avaliar com critérios técnicos, escolher prioridades, planejar, acompanhar o que foi feito e reavaliar resultados.


A qualidade das decisões deve orientar a arquitetura, e não o contrário.


**Formulação operacional do propósito:**


> Conhecer melhor o aluno → avaliar melhor → interpretar os achados com precisão → justificar o Plano de Ação → prescrever e executar com qualidade → acompanhar respostas reais → demonstrar resultados → decidir a próxima etapa.


O tempo economizado deverá converter-se em melhor atenção aos alunos, disponibilidade profissional e sustentabilidade econômica. Ganho de produtividade só será declarado depois de medido.


### 1.0. Coração da Central — diretriz confirmada pelo treinador em 19/10/2026

**A avaliação física é a base concreta da interpretação, da prescrição e da periodização da Central.** A metodologia ACESSO organiza o raciocínio didático/profissional; a literatura acadêmica fundamenta, questiona e delimita sua aplicação. Objetivos, contexto, experiência, disponibilidade e resposta real do aluno definem a relevância e a viabilidade das decisões.

**Cascata de trabalho:** conhecer a pessoa → qualificar a avaliação → interpretar achados → justificar prioridades e Plano de Ação → propor macro, meso e microciclos → montar sessões → verificar coerência técnica → auditoria/aprovação do treinador → execução e acompanhamento → reavaliação e nova decisão.

A direção desejada é um algoritmo que proponha a periodização e a montagem e apresente fundamentos, limitações, alternativas e alertas técnicos para auditoria do treinador. O site/app será a interface desse núcleo. A confirmação dessa direção não promove todos os MDs a regras executáveis nem valida fichas de aula, equações ou prescrições.

Cada decisão deverá mostrar de quais resultados de avaliação e critérios ela depende. Quando faltar avaliação pertinente, qualidade suficiente ou contexto, explicitar **qual decisão permanece sem fundamento**, sem inventar testes, doses ou uma periodização completa. Não tornar toda a bateria obrigatória para toda pessoa; selecionar procedimentos conforme a pergunta e preservar usos independentes.

A próxima prioridade é consolidar o núcleo metodológico e seus testes antes de ampliar a interface. [NUC-001 — Núcleo de Avaliação e Prescrição v0.1](https://drive.google.com/file/d/19yjfajdTdlteedRnZWDaccNp6_hrth8_/view) conecta os inventários AV, o DIC, VAL, as matrizes MAP-AV, os estudos e a cascata de planejamento. É especificação documental para revisão, não motor instalado. Gerador, verificador e aprovação terão responsabilidades distintas; ausência de alerta não significará prescrição universalmente correta.


### 1.1. Princípios estruturais inegociáveis


1. **Metodologia ACESSO como referência didática:** seguir a sequência e os conceitos das aulas, respeitando o que efetivamente foi ensinado e o estado de revisão de cada vídeo.
2. **Literatura como crítica fundamentada:** confrontar conceitos, métodos e regras com estudos aplicáveis. PubMed é índice bibliográfico, não selo automático de validade.
3. **Individualização real:** a avaliação não vale isoladamente; objetivos, história, sintomas, contexto, preferências, adesão, segurança e observações do treinador importam.
4. **Separação entre fonte e interpretação:** dado medido, indicador derivado, relato, observação, hipótese e decisão são tipos diferentes de informação.
5. **Rastreabilidade das decisões:** cada proposta deve apontar para dados, datas, protocolos, aula, referência científica, versão da regra e responsável técnico.
6. **Fidelidade ao treinamento executado:** planejado, aprovado e realizado são estados diferentes; adaptações da prática são informação valiosa.
7. **Sem falsa precisão:** um número com duas casas decimais não é automaticamente uma medida confiável. Considerar erros, critérios, unidades e comparabilidade.
8. **Sem decisões clínicas automáticas:** diagnóstico, liberação para esforço, interpretação etiológica de sinais relevantes e mudanças sensíveis de treinamento exigem julgamento adequado.
9. **Privacidade desde a concepção:** laudos, história de saúde e dados pessoais pertencem à área restrita de alunos, não à biblioteca pública de metodologias ou repositórios.
10. **Evolução incremental e reversível:** modificar somente o necessário, validar em ambiente de teste, manter versão/backup/log e obter autorização antes da produção.
11. **Arquitetura compreensível:** preferir poucos componentes com atribuições claras a multiplicação de abas, ferramentas e rotinas.
12. **Nenhuma confiança cega:** almejar 100% de rastreabilidade e controle de qualidade, não declarar 100% de acerto da interpretação automática.


## 2. Jornada completa do aluno: visão futura


Os módulos abaixo são **propostos**, não funcionalidades já existentes em produção. A ordem comercial e os pontos de coleta deverão ser confirmados conforme a operação real.


| Etapa | Pergunta operacional | Entrada principal | Saída verificável |
|---|---|---|---|
| 1. Primeiro contato / prospecção | Quem procurou atendimento e com qual necessidade? | Consentimento/contato comercial, disponibilidade e interesse | Oportunidade com status e próximo contato |
| 2. Reunião de apresentação/vendas | Quais serviços fazem sentido para a pessoa? | Objetivos, expectativa, modalidade e condições comerciais | Proposta, condições e status de contratação |
| 3. Cadastro e anamnese | Quem é o aluno e que informações pertinentes precisamos conhecer? | Cadastro autorizado, histórico, sintomas relevantes, objetivos e preferências | Ficha contextual datada, pendências e encaminhamentos quando apropriados |
| 4. Avaliação física | Quais capacidades foram avaliadas e com qual método? | Protocolos, medições, testes e observações | Registro bruto, metadados e laudo |
| 5. Auditoria da avaliação | Os dados permitem interpretação e comparação? | Valores, unidades, datas, equipamentos, fórmulas e contexto | Estado de qualidade por indicador e inconsistências |
| 6. Interpretação e priorização | O que importa para segurança, função e objetivos? | Metodologia ACESSO + evidência externa + julgamento contextual | Hipóteses, prioridades e lacunas explicitadas |
| 7. Plano de Ação | Que capacidades perseguir e como verificar resultado? | Objetivos acordados, prioridades, disponibilidade e experiência | Estratégia e indicadores sujeitos à aprovação |
| 8. Periodização e prescrição | Como organizar estímulos e progressões? | Plano aprovado, recuperação, frequência e recursos | Ciclos e sessões planejados/aprovados |
| 9. Atendimento e execução | O que o aluno realmente fez e como respondeu? | Cargas, reps, tempo, RPE/RIR, adaptações e relato | Registro de execução, eventuais alertas, motivos |
| 10. Monitoramento e reavaliação | Houve melhora relevante e mensurável? | Medidas comparáveis, tarefas, adesão e resposta | Tendências com limites de certeza, revisão do Plano |
| 11. Comunicação e continuidade | O aluno compreende o progresso? O que vem depois? | Resumo do ciclo, resultados e próximos objetivos | Devolutiva profissional, novo ciclo e continuidade |


**Regra de desenho:** nenhuma etapa deve depender de duplicação manual da mesma informação em múltiplos lugares. Um registro deve ter fonte canônica e consumidores claramente definidos.


## 3. Arquitetura de informação — quatro camadas distintas


### 3.1. Camada A — Pessoas e dados operacionais (restrita)
- Identificador estável de aluno e de atendimento.
- Cadastro, anamnese, objetivo expresso pelo aluno e objetivo confirmado pelo treinador.
- Avaliações com metadados dos protocolos, laudos, registros de sessões e reavaliações.
- Planejamento, prescrição aprovada e execução real, cada qual com autoria/data/versão.
- Integrações com Google Drive/Sheets e agenda, quando auditadas e autorizadas.


**Regra:** não copiar informações sensíveis identificáveis para a biblioteca das aulas ou para GitHub público.


### 3.2. Camada B — Biblioteca didática e científica (não identificável)
- `Central_de_Alunos_Caderno_Tecnico_Cientifico_v0.1.md`: visão do estudo e índice da playlist.
- Fichas por aula: `ACESSO-028` a `ACESSO-033`, todas preliminares em 19/10/2026.
- `ACESSO-INDEX`: índice documental de gatilhos — localiza conteúdo, NÃO prescreve.
- `EVID-INDEX`: referências da literatura e limitações.
- `MAP-AV-001` e `MAP-AV-002`: matrizes de interpretação e aplicação.
- Documentos de auditoria disponíveis: `VAL-001 v0.2` (proposta pendente de aprovação), `DIC-001 v0.2` (proposta pendente de revisão técnica), `TEST-001 v0.4` (56 casos, com execução técnica seletiva registrada na seção 13) e `FLX-001 v0.3` (proposta de fluxo pendente de validação). A existência dos arquivos não significa aprovação nem prontidão para automação.


**Maturidade atual:** 33 vídeos identificados na playlist; 11 avaliados inicialmente por transcrição; profundidade e fidelidade de todas as fichas ainda a aprimorar. **Fichas não aprovadas ≠ regras executáveis.**


### 3.3. Camada C — Serviço de análise (futuro)
1. Recebe dados autorizados de fonte canônica.
2. Audita integridade, qualidade e contexto.
3. Detecta indicadores e aciona documentação metodológica relevante.
4. Recupera fontes didáticas e científicas com versão e grau de revisão.
5. Gera hipóteses alternativas, perguntas, prioridades possíveis e sinais de atenção.
6. Apresenta raciocínio e incertezas em uma proposta **não aprovada**.
7. Solicita revisão e aprovação profissional; apenas componentes de baixo risco e calculáveis poderão vir a ser automatizados após validação específica.
8. Registra decisão, execução e desfecho para aprendizado do processo, sem alegar que associação observada demonstra causalidade.


### 3.4. Camada D — Interface web (futura)
Painéis de atendimento, alunos, avaliação, Planos de Ação, ciclos, histórico de sessões, relatórios e auditorias; visualizações por papel (treinador, eventualmente outros perfis autorizados). Repositório GitHub para código e conhecimento não identificável; HTML/CSS/JavaScript para interface; backend seguro e banco de dados para registros privados. **GitHub/HTML estáticos, isolados, não constituem armazenamento seguro de laudos de saúde.**


## 4. Fontes de verdade e gestão de conflitos


| Domínio | Origem atual / pretendida | Validação antes da integração |
|---|---|---|
| Cadastro e vínculo com arquivo individual | Fluxo oficial `processarCadastroRapido()` | Preservar comportamento; confirmar implementação real |
| Medidas, laudos e histórico de avaliações | Arquivo individual do aluno e instrumentos originais | Data, identidade, instrumento, protocolo, unidade, revisão |
| Plano e prescrição | Arquivo individual efetivamente aprovado pelo treinador | Identificar versão vigente, autoria e data |
| Execução | Registro de sessão validado pelo treinador | Não inferir realização somente a partir de agenda |
| Agenda | Google Calendar após reconciliação com operação real | Faltas, remarcações, conflitos e responsável |
| Biblioteca metodológica | MDs versionados e vídeo original referenciado | Diferenciar resumo, trecho verificado, evidência e aprovação |
| Dashboards | Derivados, nunca a única fonte de edição | Fórmula, escopo de linhas, unidade, data e atualização |
| Central legada | **Não confiável como fonte operacional até auditoria** | Jamais sobrescrever dados vigentes por leitura de índices antigos |


Uma mesma informação pode divergir entre laudo, exportação, anamnese e relato. **Guardar fontes e divergência, registrar correção aprovada, jamais sobrescrever silenciosamente o histórico.**


## 5. Camada zero do algoritmo: auditoria antes de analisar


### 5.1. Verificações obrigatórias por campo
- ID do aluno e compatibilidade de identidade entre documentos.
- Data da coleta, estágio de avaliação e data da edição.
- Valor, unidade, escala, fórmula de derivação e arredondamento.
- Protocolo, equipamento, operador, condição de teste e limitações registradas.
- Mudança de condição relevante (ex.: gestação/pós-parto, cirurgia/recuperação, sintomas, dispositivo auxiliar, interrupção do teste).
- Compatibilidade de comparações longitudinais; tipo de dado (medido / estimado / calculado).
- Dados ausentes e zero de fórmula não podem ser assumidos como resultados fisiológicos reais.
- Para métricas normalizadas por massa corporal, confirmar se o peso registrado corresponde à pessoa e à data, antes de calcular.
- Para recomendações de nutrição/gasto energético, auditar equações e consistência; não emitir orientação clínica ou alimentar individual sem competência e autorização adequada.


### 5.2. Estados de qualidade sugeridos
| Estado | Significado | Ação |
|---|---|---|
| `VALIDADO` | Campo e método suficientes para a interpretação definida | Disponibilizar para análise |
| `INCONSISTENTE` | Divergência ou dado incompatível com outra fonte | Preservar; solicitar conferência |
| `NAO_COMPARAVEL` | Valores existem, mas protocolos ou condições diferem | Evitar inferir evolução direta |
| `CONTEXTO_INSUFICIENTE` | Falta objetivo, condição do teste, origem ou explicação | Fazer pergunta dirigida |
| `NAO_APLICAVEL` | Indicador não pertinente ao contexto | Não sugerir intervenção baseada nele |
| `PENDENTE_REVISAO_CLINICA` | Sinal/contexto exige avaliação apropriada | Não propor progressão que aumente risco |


**Estados podem variar por variável e aplicação:** peso incorreto em um relatório pode comprometer índices normalizados e cálculos derivados sem necessariamente invalidar toda medida absoluta de força feita no dispositivo.


## 6. Qualidade das regras metodológicas


Uma regra candidata deve documentar:


`regra_id`; `versao`; `aula_id`; `video_url`; `tempo_verificado` (quando disponível); `origem_fonte` (fala do professor, nossa operacionalização, revisão externa); `premissas`; `indicadores_entrada`; `protocolo`; `restricoes`; `fontes_pubmed`; `hipoteses`; `resultado_permitido`; `acao_bloqueada`; `aprovador`; `data_aprovacao`; `estado`.


Estados de maturidade: `FICHA_PRELIMINAR` → `REVISADA_AULA` → `REVISADA_CIENTIFICAMENTE` → `TESTADA_EM_CASOS` → `APROVADA_PELO_TREINADOR`. Aprovação para orientar análise não equivale a autorização de implantação técnica.


**Regra crítica:** se uma afirmação relevante não está comprovada no vídeo, não atribuí-la ao professor. Se artigo não foi examinado, não chamar a conduta de comprovada. Se dados não são comparáveis, não inventar melhora/piora.


## 7. Modelo de decisão explicável


Toda proposta deve permitir responder:
1. **O que foi observado?** Fontes originais, protocolo, data e qualidade do dado.
2. **Por que importa?** Segurança, objetivo, tarefa ou saúde sob contexto conhecido.
3. **O que sabemos? O que supomos?** Hipóteses concorrentes e lacunas explícitas.
4. **Qual conteúdo orienta?** Aula ACESSO, trecho verificado, literatura aplicável e diferenças entre eles.
5. **Qual decisão é proposta?** Prioridade, capacidade-alvo, intervenção candidata e limite de segurança.
6. **Como saber se funcionou?** Indicador comparável, resposta real e data de revisão.
7. **Quem aprovou ou rejeitou?** Autor, versão, motivo e data.


Uma resposta legítima do sistema é `AINDA_NAO_HA_DADOS_SUFICIENTES`. Nem todo achado exige intervenção e nem todo aluno tem de perseguir redução de gordura, correção de postura ou assimetria.


## 8. Estados operacionais essenciais


- Atendimento comercial: `CONTATO` / `REUNIAO` / `PROPOSTA` / `CONTRATADO` / `NAO_CONTRATADO` (proposta, não sistema existente).
- Avaliação: `COLETADA` → `EM_AUDITORIA` → `VALIDADA_OU_COM_PENDENCIAS` → `ANALISADA`.
- Plano e treino: `RASCUNHO` → `EM_REVISAO` → `APROVADO` → `DISPONIVEL`; sessão `REALIZADA` / `ADAPTADA` / `NAO_REALIZADA` / `EXECUCAO_INFORMADA_NAO_RECONCILIADA`.
- Histórico: somente acréscimos/versionamento controlado; jamais substituição silenciosa de registro antigo.


Cada mudança de estado exige data, responsável e justificativa quando pertinente.


## 9. Implantação gradual, com portas de qualidade


### Marco A — Conhecimento (em andamento)
**Entregas:** Caderno, fichas MD de aulas, índice, evidências.
**Para avançar:** aprofundar conteúdo didático e confrontar pontos de alto impacto com protocolos e bibliografia. Não chamar 11 resumos de 33 aulas estudadas integralmente.


### Marco B — Auditoria de laudos
**Documentação criada:** VAL-001 v0.2 e casos documentais de auditoria no TEST-001 v0.4 (TC-01–50 ainda não executados).  
**Estado:** propostas pendentes de aprovação do treinador; casos ainda não executados.  
**Porta de qualidade:** confirmar proveniência, bloqueios localizados, comparabilidade e preservação de medidas independentes antes de avançar.

### Marco C — Dicionário de indicadores
**Documento criado:** DIC-001 v0.2.  
**Estado:** proposta pendente de revisão técnica; protocolos, equipamentos, equações e dependências reais permanecem pendentes de confirmação.

### Marco D — Prova do raciocínio profissional
**Documento criado:** TEST-001 v0.4 com 56 casos sintéticos, incluindo acesso cruzado, vínculo encerrado, correção versionada, aprovação/publicação e fluxo inicial treinador-aluno, alinhados ao ACESSO-001 v0.2.  
**Estado atual:** execução seletiva em protótipo local registrada em IMP-001 e TEST-001 §13. TC-52/53/55/56 passaram no recorte; TC-51/54 têm cobertura parcial e estão bloqueados para aprovação integral; TC-01–50 não executados. Expectativas continuam propostas da Central, sem promoção automática a regras metodológicas.

### Marco E — Primeiro fluxo treinador-aluno e modo sombra posterior
**Plano documental:** IMP-001 v0.1 propõe um primeiro fluxo local com dados sintéticos: cadastro mínimo, objetivo relatado, revisão/decisão do treinador, publicação explícita do resumo e solicitação de correção.
**Estado atual (19/10/2026):** primeiro protótipo local implementado e validado tecnicamente com Vite/TypeScript e Supabase local no Windows, somente com dados sintéticos. Há código, autenticação e autorização no banco; 11 testes unitários, 39 assertivas de banco e 3 testes integrados passaram. Revisão independente gerou correções verificadas; não houve segunda revisão independente. Commit local a8dbcc332e3f9d4e2426183f72ef6f706e3bb89a. Não há serviço remoto, integração ou publicação.
**Porta de qualidade atual:** homologar o fluxo com o treinador em contas fictícias, resolver as lacunas dos casos parcialmente cobertos e autorizar separadamente qualquer ampliação para uso real. A auditoria de avaliações, análises e relatórios em modo sombra é uma etapa posterior.


### Marco F — Plataforma e automações assistidas
**Entregas:** interface web, login, controle de permissões, armazenamento seguro, integração de agenda/arquivos, filas e propostas, logs, backups.
**Para avançar:** aprovação de cada mudança de produção, política de dados pessoais, revisão de segurança, testes e capacidade de reversão.


### Marco G — Escala e aprendizado
**Entregas:** onboarding, indicadores e manutenção para toda a carteira; revisão periódica de regras científicas e tecnológicas.
**Para avançar:** evidenciar utilidade, confiabilidade, tempo economizado e qualidade percebida pelo profissional e pelo aluno.


**Não há cronograma rígido aprovado; cada marco é concluído por evidência, não pela passagem do tempo.**


## 10. Métricas de sucesso e economia


Antes de automatizar, medir uma amostra real do tempo gasto em: cadastro/anamnese; interpretação de avaliação; elaboração do Plano de Ação; montagem e ajuste de prescrição; registro pós-aula; devolutiva e reavaliação.


Após protótipo:
- Tempo mediano por tarefa **incluindo correções e conferências**.
- Taxa de campos inconsistentes detectados, falsos alertas e falhas não identificadas.
- % de propostas aceitas, modificadas ou rejeitadas; principais motivos.
- % de sessões executadas com registro reconciliado.
- Tempo e qualidade da devolutiva ao aluno.
- Incidentes de privacidade, alterações indevidas e falhas de restauração (meta: zero).
- Horas de manutenção e custo mensal total, pois software também consome tempo.


Economia líquida deve considerar manutenção, revisão humana e retrabalho; não se deve declarar ganho financeiro antecipadamente.


## 11. Decisões preservadas do projeto


- O treinamento individual existente e suas fontes não devem ser alterados nesta fase.
- O fluxo oficial de cadastro `processarCadastroRapido()` deve ser preservado.
- Gatilhos/automação previamente pausados **continuam pausados**; jamais reativar sem autorização explícita.
- A Central atual não é fonte confiável de agenda, prescrições ou estado de aluno até auditoria.
- Uma planilha por aluno é o formato operacional atual; uma futura migração para banco deve ocorrer apenas após prova de arquitetura, necessidade, segurança e reconciliação.
- Repositório no GitHub pode receber código, documentação não sensível e testes anonimizados; **nunca dados individuais identificáveis ou segredos**.
- Decisões técnicas devem ser documentadas e revisáveis, sem sacrificar a lógica profissional por conveniência de desenvolvimento.


## 12. Backlog imediato, em ordem

| Ordem | Trabalho | Critério de saída |
|---|---|---|
| 1 | Revisar IMP-001 v0.1 e confirmar o primeiro recorte | Treinador revisa o fluxo mínimo e a proposta técnica; nenhuma implementação começa antes da revisão do plano e da escolha do método de execução |
| 2 | Reconciliar os documentos-base | Registrar estados de ACESSO-001 v0.2, TEST-001 v0.4, VAL-001 v0.2, DIC-001 v0.2 e FLX-001 v0.3; manter não aprovados/não executados como tais |
| 3 | Preparar o ambiente isolado do primeiro fluxo | Repositório novo e serviços locais; somente contas/fixtures sintéticas; nenhum vínculo com Drive operacional ou projeto hospedado |
| 4 | Implementar e testar a primeira entrega | Cadastro mínimo, objetivo relatado, confirmação do treinador, publicação explícita do resumo e pedido de correção versionado; negar acesso cruzado no banco |
| 5 | Executar TC-51–56 no ambiente local | Registrar entrada, saída observada, versão, responsável e resultado; executar apenas casos efetivamente cobertos |
| 6 | Avançar para auditoria de avaliação | Revisar VAL/DIC, protocolos/equações reais e casos pertinentes; manter bloqueios específicos e medidas independentes conforme regras aprovadas |
| 7 | Planejar modo sombra e uso com alunos | Somente após revisão técnica, portas de qualidade, requisitos de dados e autorização específica; medir ganho líquido incluindo conferência e manutenção |

A proposta não altera permissões atuais do Drive. O controle por treinador/aluno descrito no ACESSO-001 é requisito da futura aplicação e será provado primeiro com dados sintéticos.

## 13. Arquivos de referência já existentes


- [Caderno Técnico-Científico](https://drive.google.com/file/d/1Gy1mj99k37Ook7gXiDjb48cUbT_uUW0E/view)
- [ACESSO-001 — Especificação Funcional da Central v0.2](https://drive.google.com/file/d/1SmA-UkuDtqr3vfGO0PqZDHDKpkpD5ZQn/view)
- [TEST-001 — Casos de Validação v0.4](https://drive.google.com/file/d/1zUzIXK5lm4X09z6tNNCZvHo6AFfKMgLL/view)
- [IMP-001 — Plano Técnico do Fluxo Inicial v0.1](https://drive.google.com/file/d/16cJe8Inzyxzq9Hr6mzrS4Qe8j7rH3AfK/view)
- [Índice de Gatilhos Metodológicos](https://drive.google.com/file/d/1WbAhRFbk5RtgVrkhzvX5s60gXnfKP9Z9/view)
- [Matriz de Raciocínio Profissional MAP-AV-001](https://drive.google.com/file/d/15JGlRYYpwlgfUbosju0fZpgqyONf5Xwc/view)
- [Matriz de Aplicação MAP-AV-002](https://drive.google.com/file/d/1eG-YKIHCIyBroA2kvan-YVjBksbmxLpK/view)
- [Guia Biblioteca ACESSO](https://drive.google.com/file/d/1gu-cQ3dlRQrexIXEHS5JFcIvgQSg_2Ic/view)
- [Evidências PubMed das aulas 28–33](https://drive.google.com/file/d/1uiJyfdk4EWgcBfOl1V6dp0W-U-SAnik7/view)


## 14. Registro de decisões e versões


| ID | Data | Decisão | Estado |
|---|---|---|---|
| VIS-001 | 19/10/2026 | Foco do produto é qualidade da decisão e redução do trabalho repetitivo | Visão proposta |
| VIS-002 | 19/10/2026 | Aulas ACESSO são eixo metodológico; literatura como confronto científico | Diretriz reafirmada pelo projeto |
| VIS-003 | 19/10/2026 | Auditoria antecede interpretação e qualquer proposta de plano | Proposta para aprovação |
| VIS-004 | 19/10/2026 | Dados privados de alunos separados do conhecimento geral | Regra de segurança |
| VIS-005 | 19/10/2026 | Não criar código nem reativar automação antes de teste e autorização | Preservação |
| VIS-006 | 19/10/2026 | GitHub + interface web + armazenamento seguro são arquitetura futura candidata, não uma escolha tecnológica definitiva | Hipótese de implementação |
| VIS-007 | 19/10/2026 | O primeiro fluxo será validado em ambiente local com dados sintéticos antes de qualquer uso real | Diretriz de evolução incremental |
| VIS-008 | 19/10/2026 | Aprovação profissional e liberação para o aluno são eventos separados | Requisito funcional do ACESSO-001 v0.2 |


**Versão 0.1.0 (19/10/2026):** versão-base da visão e dos critérios, sem execução de scripts nem alterações operacionais.

**Versão 0.2.0 (19/10/2026):** atualiza o estado documental de VAL/DIC/TEST/FLX e o backlog; distingue documentos criados de conteúdos aprovados ou testados. Não autoriza implementação.

**Versão 0.3.0 (19/10/2026):** registra ACESSO-001 v0.2 e TEST-001 v0.4, prioriza o primeiro fluxo treinador-aluno local com dados sintéticos e substitui o backlog imediato de restrição de Drive por revisão do plano e evolução controlada. Não altera compartilhamentos nem inicia implementação.


## Registro de direção — v0.4.0, 19/10/2026

Registrada a confirmação direta do treinador: avaliação física, metodologia ACESSO e fundamentação acadêmica constituem o coração do projeto, contextualizados pelos objetivos e pela realidade do aluno. A automação desejada propõe periodização/montagem, verifica incoerências e submete a decisão ao treinador. Criado NUC-001 v0.1 como especificação documental da ligação avaliação→prescrição e das pendências para regras/testes. A prioridade passa a ser amadurecer esse núcleo antes da ampliação do site/app. Não houve prescrição individual nem alteração de dados ou sistemas operacionais nesta etapa. Demais propostas deste documento mantêm seus estados de revisão; a diretriz confirmada não aprova automaticamente todos os requisitos ou regras.

