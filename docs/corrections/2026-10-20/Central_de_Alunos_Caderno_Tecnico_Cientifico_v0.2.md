---
titulo: "Central de Alunos — Caderno técnico-científico"
versao: "0.2"
atualizado_em: "2026-10-20"
status: "Documento de referência inicial — em construção"
responsavel_tecnico: "Treinador responsável pela Central de Alunos"
fontes_principais:
  - "Playlist ACESSO — Aulas"
  - "PubMed/MEDLINE — literatura científica"
  - "Planilhas individuais do Google Sheets — dados operacionais a validar"
---

# Central de Alunos — Caderno técnico-científico

> **Posição após AUD-005 — 20/10/2026.** Este Caderno permanece referência introdutória e registro histórico do estudo inicial. A arquitetura vigente é CENTRAL-001/NUC-001, articulada pelo [AV-003](https://drive.google.com/file/d/1U_ylnB-oOOoK89lCw5p3aSkYnaWWDbMJ/view?usp=drivesdk); o LEIA-ME registra a sequência de trabalho atual. Recomendações antigas de reorganizar a biblioteca ou preparar novamente o primeiro ambiente foram superadas pela organização já existente e pelo piloto local entregue. Fontes e sínteses não foram revalidadas nesta edição. O algoritmo deverá propor interpretação, prioridades justificadas, Plano de Ação, macro/meso/micro e sessões dentro de regras aprovadas e dados suficientes; o treinador audita, ajusta e aprova/libera. Ajustes manuais passam pelas mesmas verificações. Gerar não equivale a aprovar ou executar. Exemplos anteriores não se tornam verdades universais.


> **Objetivo:** estabelecer uma fonte organizada, rastreável e evolutiva dos princípios científicos, decisões metodológicas e requisitos funcionais que orientarão a reorganização e a futura automação da Central de Alunos.
>
> **Estado atual:** documento de projeto, **não** protocolo clínico universal e **não** especificação aprovada para execução automática. Não introduzir alterações em prescrições, fórmulas, scripts ou calendário com base apenas neste material.

## 0. Como utilizar este documento

- **Uma afirmação ensinada em aula não equivale automaticamente a uma recomendação científica validada.** A playlist será uma fonte didática e metodológica, avaliada criticamente à luz da pesquisa indexada no PubMed.
- O **PubMed é um índice de literatura biomédica**; a inclusão de um artigo não garante sua qualidade. Avaliar desenho, participantes, comparador, desfechos, risco de viés, aplicabilidade e atualidade.
- Separar **observações da aula**, **interpretação científica**, **decisão metodológica** e **requisito de software**. Nenhuma dessas categorias substitui as outras.
- O documento será versionado. Cada conclusão que fundamentar uma automação deverá apontar para a aula, artigo(s), versão da regra e responsável pela aprovação.
- As planilhas individuais seguem como fontes operacionais das prescrições; **a Central atual está desatualizada e não deve ser usada como fonte confiável de estados atuais de alunos, agenda ou prescrições** até sua auditoria e validação.
- **Não transcrever dados pessoais ou de saúde identificáveis de alunos neste documento-mestre.** Exemplos serão fictícios ou anonimizados. Dados reais de saúde devem permanecer em arquivos com controle de acesso apropriado.

### Legenda de maturidade

| Sinalização | Significado |
|---|---|
| `OBSERVADO NA AULA` | Conteúdo efetivamente identificado na transcrição, sem validação automática. |
| `EVIDÊNCIA REVISADA` | Existe análise preliminar de fonte científica verificável. Não implica certeza alta. |
| `HIPÓTESE` | Interpretação ou possibilidade de arquitetura a testar. |
| `A VALIDAR` | Requer consulta mais profunda, auditoria de fórmula ou avaliação profissional. |
| `APROVADO` | Requisito explicitamente validado pelo responsável técnico. |
| `NÃO AUTOMATIZAR` | Informação que não autoriza uma intervenção automática. |

---

## 1. Visão do projeto

### 1.1. Problema a resolver

A Central acumulou funcionalidades de cadastro, avaliação, agenda, ciclos, prescrições, integrações, dashboards e automações. Esse crescimento tornou difícil identificar a responsabilidade de cada aba, a origem dos dados e as dependências entre componentes. O problema central não é escassez de recursos: é **falta de governança explícita das informações e das decisões**.

### 1.2. Objetivos

1. Recuperar uma arquitetura compreensível, documentada, auditável e escalável.
2. Manter **um arquivo de Google Sheets por aluno**, preservando histórico e individualização.
3. Reduzir o tempo de trabalho repetitivo em mais de 20 sessões/prescrições revisadas por semana, sem prometer economia de tempo antes de medi-la.
4. Usar as aulas ACESSO como base de formação e o PubMed como base para revisão crítica.
5. Automatizar organização, cálculos validados, detecção de pendências e preparação de propostas; **submeter decisões de prescrição e alterações sensíveis à aprovação profissional**.
6. Não exigir trabalho noturno como estratégia normal de manutenção do sistema.

### 1.3. Princípios inegociáveis

- **Individualidade e contexto:** objetivos, histórico, experiência, sintomas, recuperação, disponibilidade e resposta prévia.
- **Rastreabilidade:** distinguir dado medido, indicador derivado, interpretação e decisão.
- **Planejado ≠ prescrito/aprovado ≠ executado:** estados diferentes e históricos preservados.
- **Alterações reversíveis:** logs, cópia de segurança, controle de versões, teste antes de produção.
- **Dados mínimos necessários:** proteger informações pessoais e de saúde conforme LGPD e controles de acesso.
- **Sem regras fisiológicas universais extraídas de exemplos de aula.**

---

## 2. Índice da playlist e trilha de estudo

Playlist: <https://www.youtube.com/playlist?list=PLpqIqJSUgy-1w56jJPB-bepm3p7tRgDQS>

**Situação em 18/10/2026:** 33 vídeos identificados na playlist; **11 aulas avaliadas por transcrição** nesta conversa. A **21ª aula** também recebeu análise visual assistida. As outras dez não foram auditadas quadro a quadro. O resumo abaixo **não substitui** fichas analíticas individuais e completas.

| Aula | Data da aula | Link | Eixo temático | Estado |
|---|---|---|---|---|
| 21ª | 19/06/2026 | [Controle Cíclico](https://www.youtube.com/watch?v=1i-0cJpOs0Q) | Planejamento da corrida, monitoramento, alertas e ciclos | Transcrição + leitura visual inicial |
| 22ª | 26/06/2026 | [Base do Treinamento](https://www.youtube.com/watch?v=Bzmn8vJ4zpg) | Propriocepção e mecanismos reflexos | Transcrição |
| 23ª | 10/07/2026 | [Base do Treinamento](https://www.youtube.com/watch?v=e_5uCzaztps) | Sobrecarga, PSE, RIR e especificidade | Transcrição |
| 24ª | 17/07/2026 | [Base do Treinamento](https://www.youtube.com/watch?v=A7EFbqzGsqE) | Monotonia, strain, ACWR e especificidade | Transcrição |
| 26ª | 14/08/2026 | [Princípios do Treinamento](https://www.youtube.com/watch?v=i5V4f5b2wJw) | Individualização, variação, reversibilidade e conscientização | Transcrição |
| 28ª | 04/09/2026 | [Laudo — Parte 1](https://www.youtube.com/watch?v=U61TNqeUuHo) | Antropometria e composição corporal | Transcrição |
| 29ª | 18/09/2026 | [Laudo — Parte 2](https://www.youtube.com/watch?v=PcmwT2OVRSM) | Flexibilidade e avaliação cardiorrespiratória | Transcrição |
| 30ª | 25/09/2026 | [Laudo — Parte 3](https://www.youtube.com/watch?v=6F5T_qEHLoI) | Testes cardiorrespiratórios e análise postural | Transcrição |
| 31ª | 02/10/2026 | [Laudo — Parte 4](https://www.youtube.com/watch?v=RZlroPUDA6k) | Postura, testes de força e assimetrias | Transcrição |
| 32ª | 09/10/2026 | [Laudo — Parte 5](https://www.youtube.com/watch?v=CAlcQmvwQkw) | Baropodometria, centro de pressão e equilíbrio | Transcrição |
| 33ª | 16/10/2026 | [Planejamento/Periodização — Parte 1](https://www.youtube.com/watch?v=_AmEut4pqCU) | Priorização e planejamento de capacidades | Transcrição |

**Pendente:** indexar as outras 22 aulas, registrar referências bibliográficas indicadas nos vídeos, analisar slides/laudos quando necessário, e obter detalhes específicos da implementação das planilhas.

### 2.1. Fichas-resumo por vídeo — principais decisões e ressalvas

#### AULA-021 — Controle Cíclico

- `OBSERVADO NA AULA`: estudo de caso de maratona, histórico do Strava, zonas/ritmos, volume por sessão e por semana, sessões de intensidade variada, regeneração e realimentação por PSE e dor.
- `OBSERVADO NA AULA`: formatos 3:1 ou 4:1 são discutidos como **estratégias ajustáveis**, não obrigação; possibilidade de trabalhar com microciclos de 10–15 dias.
- `A VALIDAR`: regras de aumento máximo de 10%, participação de 30–35% do longão e duração de três horas **não constituem leis fisiológicas universais**.
- `HIPÓTESE DE SOFTWARE`: motor de ciclos com duração parametrizável, comparações entre prescrito/realizado e alertas explicáveis.
- `PENDENTE`: auditoria direta do arquivo original e fórmulas efetivamente existentes; o vídeo não permite comprovar todo o código.

#### AULA-022 — Bases neuromusculares

- `OBSERVADO NA AULA`: propriocepção, fuso neuromuscular, órgão tendinoso de Golgi, reflexos, flexibilidade e FNP.
- `A VALIDAR`: explicações clássicas de inibição reflexa não descrevem integralmente os mecanismos de adaptação à flexibilidade.
- `HIPÓTESE DE SOFTWARE`: classificar intervenções por **capacidade-alvo e tarefa avaliada**, não apenas pela etiqueta genérica "propriocepção".

#### AULA-023 — Sobrecarga e intensidade

- `OBSERVADO NA AULA`: carga externa versus resposta interna; PSE da sessão, RIR, sono, estresse e dor muscular.
- `EVIDÊNCIA REVISADA`: medidas internas e externas são complementares; PSE da sessão **não é** RIR da série [REF-003; REF-006].
- `HIPÓTESE DE SOFTWARE`: dados de treino planejado e realizado separados; armazenamento da escala e do momento em que o indicador foi obtido.

#### AULA-024 — Monitoramento

- `OBSERVADO NA AULA`: cálculos de monotonia e *training strain*; relação entre cargas aguda/crônica; discussão de especificidade.
- `A VALIDAR`: monotonia reflete a **dispersão da carga diária reportada**, não mede diretamente o desgaste de um músculo isolado.
- `NÃO AUTOMATIZAR`: a razão aguda/crônica (ACWR) **não** autoriza previsão individual de lesão ou progressões obrigatórias; há críticas metodológicas substanciais [REF-005].
- `A VALIDAR`: comparar sessão com média de semanas não equivale automaticamente ao ACWR semanal convencional; conferir unidades, janelas e denominadores.

#### AULA-026 — Princípios

- `OBSERVADO NA AULA`: individualidade contextual, especificidade, sobrecarga, variabilidade, reversibilidade, adaptação e conscientização.
- `EVIDÊNCIA REVISADA`: variação sistemática pode ser útil, mas a substituição excessiva e aleatória de exercícios pode atrapalhar a progressão [REF-007].
- `HIPÓTESE DE SOFTWARE`: motivos de alteração, condição diária do aluno, histórico dos exercícios e explicação de objetivos.

#### AULA-028 — Laudo 1

- `OBSERVADO NA AULA`: interpretar antropometria, circunferência da cintura, percentual e massa absoluta de gordura, bioimpedância e diferentes métodos de composição corporal.
- `EVIDÊNCIA REVISADA`: cintura fornece informação cardiometabólica adicional ao IMC [REF-008].
- `A VALIDAR`: efeitos metabólicos do tecido adiposo visceral não se resumem a compressão mecânica; resultados de bioimpedância exigem condições de medição consistentes.
- `HIPÓTESE DE SOFTWARE`: guardar valor, unidade, técnica, protocolo, equipamento, referência e data.

#### AULA-029 — Laudo 2

- `OBSERVADO NA AULA`: flexibilidade, VO₂, frequência cardíaca, pressão arterial e evolução entre testes.
- `A VALIDAR`: VO₂ estimado versus medido, equações de FCmáx, critérios de esforço máximo, referências por idade/sexo e segurança de testes.
- `HIPÓTESE DE SOFTWARE`: metadados do protocolo + resultados absolutos e relativos + critérios de segurança definidos pelo responsável.

#### AULA-030 — Laudo 3

- `OBSERVADO NA AULA`: duração e recuperação de testes, frequência cardíaca de recuperação, avaliação postural e possíveis intervenções.
- `A VALIDAR`: um achado postural isolado não diagnostica a causa da dor; evitar conclusões causais automáticas.
- `HIPÓTESE DE SOFTWARE`: achados descritivos e hipóteses profissionais em campos distintos.

#### AULA-031 — Laudo 4

- `OBSERVADO NA AULA`: observação postural, força de ombro, diferenças bilaterais, seleção de exercícios e progressões individualizadas.
- `A VALIDAR`: diferenças de força exigem protocolo consistente, confiabilidade e interpretação funcional antes de declarar risco ou patologia.
- `HIPÓTESE DE SOFTWARE`: armazenar resultados por lado e cálculo de assimetria apenas como **indicador**, sem prescrição automática.

#### AULA-032 — Laudo 5

- `OBSERVADO NA AULA`: baropodometria, distribuição de pressão, centro de pressão e equilíbrio.
- `A VALIDAR`: não aplicar pontos de corte informais como diagnósticos de risco de queda; diferenciar centro de pressão de centro de massa corporal.
- `HIPÓTESE DE SOFTWARE`: metadados do equipamento, unidade, condição do teste e comparação longitudinal quando apropriado.

#### AULA-033 — Planejamento/Periodização

- `OBSERVADO NA AULA`: definição de prioridades a partir da avaliação; trabalho simultâneo de força, flexibilidade e condicionamento em ênfases distintas; revisões intermediárias.
- `EVIDÊNCIA REVISADA`: periodização pode favorecer força máxima, mas não mostrou vantagem consistente para hipertrofia em comparações com volume equiparado [REF-002].
- `HIPÓTESE DE SOFTWARE`: objetivos principais/secundários, critérios de progressão, prioridades revisáveis e registro da justificativa.

---

## 3. Biblioteca de princípios do treinamento — versão inicial

| ID | Princípio | Significado operacional | Limite interpretativo |
|---|---|---|---|
| PRI-01 | Individualidade | Ajustar objetivos, dose, exercícios e frequência às respostas e restrições individuais | Evitar agrupamento somente por idade ou diagnóstico |
| PRI-02 | Sobrecarga progressiva | Manipular adequadamente a dose ao longo do tempo | Não exigir aumento em cada sessão ou semana |
| PRI-03 | Especificidade | Relacionar intervenção ao resultado ou tarefa pretendidos | Transferência entre tarefas pode ser parcial |
| PRI-04 | Recuperação | Considerar resposta ao treinamento e condições extratreino | Não diagnosticar sobrecarga apenas com uma escala |
| PRI-05 | Variabilidade planejada | Alterar componentes quando houver finalidade clara | Variar por novidade não é requisito fisiológico |
| PRI-06 | Reversibilidade | Considerar interrupções, destreinamento e retorno | Taxas de perda e readaptação não são fixas |
| PRI-07 | Periodização flexível | Planejar horizonte, ênfases, marcos e revisões | Modelos 3:1/4:1 são opções, não algoritmos universais |
| PRI-08 | Autorregulação | Ajustar proposta à execução e à resposta observadas | Informações subjetivas precisam de contexto |
| PRI-09 | Educação do aluno | Explicar a finalidade das intervenções e demonstrar progresso | Não afirmar causalidade onde ela não é demonstrável |
| PRI-10 | Monitoramento | Acompanhar tendências com medidas confiáveis | Indicadores não equivalem a diagnósticos |

### 3.1. Glossário mínimo padronizado

| Termo | Definição operacional inicial |
|---|---|
| Macrociclo | Horizonte mais amplo do planejamento; duração definida conforme contexto |
| Mesociclo | Bloco intermediário que organiza objetivos e ênfases |
| Microciclo | Unidade curta de organização, com duração **parametrizável** |
| Sessão planejada | Treino pretendido dentro de um período e objetivo |
| Sessão aprovada | Prescrição validada pelo treinador |
| Sessão executada | Trabalho efetivamente realizado, inclusive ajustes e interrupções |
| Carga externa | Trabalho observável: kg, séries, repetições, distância, velocidade, tempo etc. |
| Carga interna | Resposta ao trabalho, como PSE da sessão e respostas fisiológicas |
| PSE da sessão | Percepção global da dificuldade, com escala e protocolo explícitos |
| RIR | Estimativa de repetições ainda possíveis no encerramento de uma série |
| Sinal de alerta | Condição que exige análise; **não equivale** a diagnóstico |

---

## 4. Matriz de evidências — PubMed/MEDLINE

### 4.1. Método obrigatório de revisão

Para cada questão de prescrição, construir uma pergunta **PICO/PECO** apropriada (população, intervenção/exposição, comparação e desfecho), buscar literatura recente, avaliar risco de viés e contexto de aplicação; registrar discordâncias e fontes mais antigas relevantes. Priorizar revisões sistemáticas de qualidade e ensaios comparativos quando pertinentes, sem ignorar inconsistência e heterogeneidade.

**Campos por evidência:** ID, pergunta, PMID, tipo de estudo, amostra/população, comparador, desfecho, resultado, limitação, aplicabilidade aos alunos da ACESSO, data de revisão, status técnico.

Abaixo está um **registro inicial verificado**, não uma revisão sistemática própria nem uma metanálise quantitativa original.

| ID | Fonte científica verificada | PMID | Implicação principal / cautela |
|---|---|---|---|
| REF-001 | ACSM. *Resistance Training Prescription for Muscle Function, Hypertrophy, and Physical Performance in Healthy Adults: An Overview of Reviews* (2026) | [41843416](https://pubmed.ncbi.nlm.nih.gov/41843416/) | 137 revisões sistemáticas e >30 mil participantes; efeito de treino e variáveis depende do desfecho e população |
| REF-002 | Moesgaard et al. *Effects of Periodization on Strength and Muscle Hypertrophy in Volume-Equated Resistance Training Programs* (2022) | [35044672](https://pubmed.ncbi.nlm.nih.gov/35044672/) | Vantagem global em força máxima; não demonstrada para hipertrofia em programas equiparados por volume |
| REF-003 | Bourdon et al. *Monitoring Athlete Training Loads: Consensus Statement* (2017) | [28463642](https://pubmed.ncbi.nlm.nih.gov/28463642/) | Medidas internas e externas + contexto; o monitoramento precisa de interpretação |
| REF-004 | Schoenfeld, Ogborn & Krieger. *Dose-response relationship between weekly resistance training volume and increases in muscle mass* (2017) | [27433992](https://pubmed.ncbi.nlm.nih.gov/27433992/) | Relação média dose-resposta; não estabelece a dose ótima universal |
| REF-005 | Impellizzeri et al. *Acute:Chronic Workload Ratio: Conceptual Issues and Fundamental Pitfalls* (2020) | [32502973](https://pubmed.ncbi.nlm.nih.gov/32502973/) | ACWR possui limitações conceituais e causais; não usar para prevenir lesões automaticamente |
| REF-006 | Robinson et al. *Exploring the Dose-Response Relationship Between Estimated Resistance Training Proximity to Failure...* (2024) | [38970765](https://pubmed.ncbi.nlm.nih.gov/38970765/) | Proximidade da falha pode influenciar hipertrofia; RIR estimado e dados heterogêneos limitam generalização |
| REF-007 | Kassiano et al. *Does Varying Resistance Exercises Promote Superior Muscle Hypertrophy and Strength Gains?* (2022) | [35438660](https://pubmed.ncbi.nlm.nih.gov/35438660/) | Variação sistemática pode ajudar; troca excessiva e aleatória pode prejudicar |
| REF-008 | Ross et al. *Waist circumference as a vital sign in clinical practice* (2020) | [32020062](https://pubmed.ncbi.nlm.nih.gov/32020062/) | Circunferência da cintura agrega informação cardiometabólica ao IMC |
| REF-009 | *What influence does resistance exercise order have on muscular strength gains and muscle hypertrophy?* (2020) | [32077380](https://pubmed.ncbi.nlm.nih.gov/32077380/) | Ordem dos exercícios influencia força do movimento priorizado; não houve diferença significativa para hipertrofia |
| REF-010 | *The Resistance Training Dose Response: Meta-Regressions Exploring...* (2026) | [41343037](https://pubmed.ncbi.nlm.nih.gov/41343037/) | Relações dose-resposta com retornos decrescentes; efeitos de volume/frequência distintos para força e hipertrofia |

### 4.2. Divergências e riscos de automatização

| Tema / aula | Alegação ou heurística | Estado neste documento | Decisão provisória |
|---|---|---|---|
| 21ª | Progressão máxima de 10% no volume | Não é teto universal cientificamente demonstrado | **Alerta contextual**, jamais bloqueio absoluto |
| 21ª | Longão ≤30–35% do volume; ≤3 h | Heurísticas específicas de corrida com aplicabilidade variável | Referência configurável, sujeito a validação por modalidade |
| 23ª | Faixa de 2–3 RIR como padrão de hipertrofia | Opção plausível, não universal | Zona configurável por exercício e aluno |
| 24ª | ACWR 0,8–1,3 como zona segura | Contestada; causalidade não demonstrada | **NÃO AUTOMATIZAR** diagnóstico/prevenção de lesão |
| 24ª | Monotonia alta = músculos sobrecarregados | Inferência excessiva: indicador mede dispersão de carga | Expor cálculo, janela e limitações |
| 28ª | Predições sobre gordura visceral apenas pelo laudo | Dependem de método e contexto; evitar mecanismo simplista | Comparação longitudinal com ressalvas |
| 29ª/30ª | Teste cardíaco e FCmáx por fórmula simples | Exige protocolo de segurança e incerteza individual | **NÃO AUTOMATIZAR** liberação/contraindicação clínica |
| 31ª | Diferença bilateral leva automaticamente a volume extra | Relação não determinística | Sinalizar para investigação e decisão |
| 32ª | Ponto de corte informal de baropodometria = risco de queda | Referência insuficiente/possivelmente específica de equipamento | Não adotar como classificação diagnóstica |
| 33ª | Semanas e ênfases fixas para todos | Método de ensino é flexível; evidência depende de desfecho | Planejamento ajustável com checkpoints |

---

## 5. Arquitetura-alvo da Central — hipótese a validar

```text
Google Calendar ──────────────────> Agenda / atendimentos / disponibilidade
                                        |
                                        v
Planilhas individuais ────────────> Indexação de alunos e prescrições
(dados autorizados e vigentes)          |
                                        v
                              Central de Alunos
                         [Painel | Alunos | Prescrições |
                          Acompanhamento | Pendências]
                                        |
                    ┌───────────────────┴─────────────────┐
                    v                                     v
         Cálculos e alertas                      Propostas de ajuste
                    |                                     |
                    v                                     v
            Revisão técnica                    Aprovação do treinador
                    └───────────────────┬─────────────────┘
                                        v
                         Escrita controlada + histórico
                                        |
                                        v
                          Planilha individual do aluno

PubMed + playlist ACESSO -> Biblioteca metodológica -> Regras versionadas
```

### 5.1. Fontes oficiais propostas

| Informação | Fonte oficial pretendida | Observações |
|---|---|---|
| Atendimentos e disponibilidade | Google Calendar confirmado | Não copiar horários antigos da Central como verdade operacional |
| Cadastro e vínculo com arquivo | Fluxo oficial `processarCadastroRapido()` / cadastro validado | Preservar onboarding existente; auditar implementação e IDs |
| Avaliações e resultados | Arquivo do aluno / fonte validada de avaliação | Não inferir diagnósticos por fórmula |
| Planejamento individual vigente | Arquivo individual aprovado | Central somente indexa e exibe |
| Sessões executadas e ajustes | Registros individuais | Data, autor, motivos e versões |
| Indicadores e dashboards | Cálculo derivado das fontes oficiais | Não permitir dupla edição manual do mesmo dado |
| Regras científicas | Biblioteca versionada deste caderno + artigos | Pesquisa não substitui revisão profissional |

### 5.2. Camadas funcionais

1. **Interface operacional:** visão geral, alunos, prioridades, prescrições e acompanhamento.
2. **Dados normalizados:** registros de alunos, avaliação, metas, sessões, execuções, medidas e relações.
3. **Motores de cálculo:** funções pequenas, testadas e documentadas, sem efeito colateral durante a leitura.
4. **Integrações:** Calendar, Google Sheets/Drive e eventuais fontes externas, com tratamento de falha.
5. **Auditoria:** registros de execução, versões, autenticação, exceções e mecanismos de restauração.

**Não criar uma aba por indicador.** Modelar as entidades e oferecer visualizações filtradas.

---

## 6. Modelo mínimo dos dados dos alunos (sem informações reais)

> Esquema inicial para planejamento; os nomes de colunas serão revisados contra os arquivos reais e decisões de LGPD.

### 6.1. Entidades e identificadores

| Entidade | Chave estável | Campos necessários |
|---|---|---|
| Aluno | `aluno_id` | vínculo de arquivo, estado cadastral, treinador responsável |
| Avaliação | `avaliacao_id` | `aluno_id`, data, instrumento, protocolo, versão, observações |
| Resultado | `resultado_id` | `avaliacao_id`, variável, valor, unidade, referência, incerteza |
| Objetivo | `objetivo_id` | `aluno_id`, prioridade, capacidade-alvo, indicador, prazo de revisão |
| Plano | `plano_id` | `aluno_id`, início/fim, horizonte, objetivo dominante, versão |
| Bloco/ciclo | `ciclo_id` | `plano_id`, tipo, período, ênfase, status |
| Sessão planejada | `sessao_id` | `ciclo_id`, data prevista, conteúdo e carga-alvo |
| Prescrição aprovada | `prescricao_id` | `sessao_id`, versão, autor, data de aprovação |
| Execução | `execucao_id` | `prescricao_id`, data, trabalho realizado, PSE, sintomas, notas |
| Decisão | `decisao_id` | origem do alerta, dados consultados, motivo, responsável e data |
| Evidência | `ref_id` | PMID, pergunta, desenho, síntese, limitações, revisão |

### 6.2. Estados mínimos de uma sessão

```text
RASCUNHO -> PROPOSTA -> EM REVISÃO -> APROVADA -> DISPONÍVEL
                                                  |
                                                  v
                              REALIZADA / ADAPTADA / NÃO REALIZADA
                                                  |
                                                  v
                                           HISTÓRICO IMUTÁVEL
```

- Edição depois de `APROVADA`: criar nova versão, mantendo a anterior.
- Adaptação durante o atendimento: registrar **o que foi mudado**, **por quê**, **quem decidiu**.
- Alerta não altera estado por si só; pedido de aprovação deve ser explícito.

### 6.3. Dados básicos de prescrição

- **Contexto:** objetivo principal, objetivos secundários, frequência disponível, limitações relatadas, experiência, equipamentos e outras práticas.
- **Organização temporal:** data, ciclo, tipo de sessão, duração pretendida, prioridade do estímulo.
- **Força:** exercício/padrão, grupo-alvo, séries, repetições, carga, intervalo, RIR/RPE da série, técnica e progressão.
- **Cardiorrespiratório:** modalidade, duração, distância, velocidade/pace, FC, zona/limiar quando validado, PSE e estrutura intervalada.
- **Flexibilidade/controle motor:** tarefa ou movimento, protocolo, amplitude, dose, percepção/sintomas quando pertinentes.
- **Execução:** o que ocorreu, faltas, adaptações, carga real, percepção global e feedback.
- **Revisão:** resultado, interpretação, prioridade e justificativa; manter campo de incerteza.

### 6.4. Segurança e governança de dados

- Dados de saúde e avaliações são **dados pessoais sensíveis** pela LGPD. Aplicar necessidade, finalidade, restrição de acesso e segurança.
- Não centralizar arquivos clínicos, laudos completos ou nomes identificáveis em documentação pública.
- Criar acesso por função, logs de edição, backups periódicos e estratégia de exclusão/retenção conforme orientação jurídica e contratual.
- Não publicar arquivos individuais ou transcrições integrais de vídeos em repositórios abertos.

---

## 7. Automação — o que fazer, o que não fazer

### Automatizável após auditoria

- Identificar alunos com próxima sessão e prazo de revisão.
- Reconciliar a agenda com as sessões planejadas e apontar divergências.
- Calcular volume, frequência, duração, tendências e resultados segundo protocolos explícitos.
- Preparar fila semanal de prescrições classificadas por prazo e complexidade.
- Gerar rascunhos de sessão **não aprovados**, preservando o programa anterior.
- Comparar planejado x realizado; destacar ausências de dados e mudanças de PSE/carga.
- Registrar quem aprovou ajustes, versões e justificativas.
- Apresentar resumo de progresso compreensível ao aluno a partir de medidas validadas.

### Não automatizar sem revisão e aprovação

- Diagnosticar risco de lesão, doença, sarcopenia ou causas de dor a partir de um valor isolado.
- Determinar liberação ou contraindicação para teste de esforço por uma regra única de FC/PA.
- Excluir exercícios, suspender treinos ou prescrever intervenções por alertas de ACWR, assimetrias ou baropodometria.
- Substituir a avaliação profissional em casos de sintomas novos, desconforto relevante, mudanças clínicas ou decisões de alta complexidade.
- Reescrever histórico, fórmulas ou fontes de dados em lote sem cópia, teste e confirmação.

### Princípios de engenharia

- Idempotência de rotinas; uso de IDs estáveis e carimbos de atualização.
- Separação entre leitura, cálculo, sugestão e escrita.
- Controle de concorrência e falhas parciais nas integrações.
- Testes de regressão em cópia; trilha de auditoria; rollback.
- Limites de escala dinâmicos: não depender de intervalos fixos de linhas (por exemplo, até a linha 10).
- Manter o fluxo oficial **`processarCadastroRapido()`**, salvo revisão explicitamente autorizada e compatível.
- Não supor que versões documentadas do Apps Script correspondam ao código implantado sem auditoria.

---

## 8. Prioridades de implantação

| Fase | Entrega verificável | Critério de conclusão |
|---|---|---|
| 0 — Preservação | Inventário de arquivos, abas, scripts, gatilhos e backups | Nenhum dado alterado; origem e riscos catalogados |
| 1 — Fontes de verdade | Matriz de origem/destino de cada dado | Responsável por edição e sincronização definido |
| 2 — Modelo mínimo | Esquema de aluno, avaliação, ciclo, sessão e execução | Campos essenciais, versões e estados aprovados |
| 3 — Fluxo piloto | Um aluno, leitura e registro sem escrita destrutiva | Prescrição e histórico preservados; divergências detectadas |
| 4 — Validação científica | Matriz aula → afirmação → estudo → regra proposta | Alegações críticas revisadas, limitações documentadas |
| 5 — Automação assistida | Fila de tarefas, cálculos, propostas e revisão humana | Ganho de tempo medido e taxa de falhas monitorada |
| 6 — Escala | Expansão gradual para os demais alunos | Sem fórmulas quebradas, retrabalho ou perda de histórico |

### Indicadores de sucesso do projeto

- Minutos gastos por ajuste simples, ajuste intermediário e reformulação completa.
- Quantidade semanal de prescrições processadas durante o expediente.
- Percentual de prescrições revisadas antes do atendimento.
- Ocorrências de trabalho de prescrição à noite (meta: reduzir, sem mascarar a carga).
- Erros de integração, divergências de agenda e pendências não identificadas.
- Proporção de sugestões aceitas, modificadas ou descartadas pelo treinador.
- Tempo necessário para explicar a lógica de uma prescrição a partir dos registros.

---

## 9. Ficha-padrão para cada novo vídeo

Copiar o bloco abaixo em um arquivo futuro `aulas/ACESSO-###-slug.md` (ou anexar ao mestre enquanto o projeto estiver pequeno):

```md
# ACESSO — Aula ###: [título]

- Vídeo: https://www.youtube.com/watch?v=...
- Data da aula:
- Duração:
- Fonte analisada: transcrição / vídeo / slides / planilha
- Status de revisão: inicial / criticada / validada

## 1. Resumo fiel da aula
## 2. Definições e variáveis apresentadas
## 3. Exemplos práticos (anonimizados)
## 4. Afirmações verificáveis
| ID | Afirmação | Trecho/tempo | PMID(s) | Qualidade/limitações | Decisão |
## 5. Divergências com as evidências
## 6. Requisitos candidatos para a Central
## 7. Regras que NÃO podem ser automatizadas
## 8. Dúvidas e tarefas pendentes
## 9. Histórico de revisão
```

## 10. Ficha-padrão de evidência PubMed

```md
# REF-### — [título do artigo]
PMID:
DOI:
URL:
Ano / desenho:
Pergunta PICO/PECO:
População / contexto:
Intervenção ou exposição:
Comparação:
Desfechos primários:
Resultado quantitativo (quando disponível):
Risco de viés / limitações:
Aplicabilidade aos alunos da ACESSO:
Afirmações das aulas relacionadas:
Regra proposta e restrições:
Estado: EM REVISÃO / ACEITA COM RESSALVAS / NÃO ADOTAR
Revisado por / data:
```

---

## 11. Decisões já tomadas e questões em aberto

### Registradas até aqui

- `DEC-001` **Não utilizar a Central desatualizada como fonte operacional.**
- `DEC-002` **Preservar os arquivos individuais por aluno** enquanto a arquitetura é auditada.
- `DEC-003` **Manter a decisão final de prescrição com o profissional.**
- `DEC-004` **Não executar mudanças em fórmulas, Apps Script ou histórico** durante a análise científica.
- `DEC-005` **Usar a playlist integralmente como trilha de estudo**, examinando cada vídeo de forma crítica.
- `DEC-006` **Atribuir identificador PubMed/PMID às evidências que sustentem regras**, com revisão de qualidade e aplicabilidade.

### A validar

- `PEND-001` Determinar quais abas, scripts e triggers estão efetivamente em uso na Central.
- `PEND-002` Auditar o script implantado e preservar `processarCadastroRapido()` sem regressão.
- `PEND-003` Consolidar um inventário de formatos e versões das planilhas individuais.
- `PEND-004` Definir campos mínimos de cada sessão e protocolo de atualização de cargas.
- `PEND-005` Decidir a granularidade do registro de PSE/RIR e sua viabilidade durante o atendimento.
- `PEND-006` Obter arquivos ou capturas dos slides/planilha demonstrada na 21ª aula, quando necessário.
- `PEND-007` Completar as fichas das 22 aulas restantes e revisar bibliografia sugerida no curso.
- `PEND-008` Definir um processo formal de aprovação e atualização de regras científicas.
- `PEND-009` Definir quais dados sensíveis são estritamente necessários na visão geral da Central.
- `PEND-010` Testar tempo de prescrição na prática para dimensionar blocos profissionais realistas.

---

## 12. Registro de versões

| Versão | Data | Alterações |
|---|---|---|
| `0.1.0` | 18/10/2026 | Documento-mestre inicial; índice de 11 aulas, princípios, matriz PubMed verificada, modelo de dados, arquitetura proposta, salvaguardas e roteiro de implementação |

**Situação desta recomendação em 20/10/2026:** a biblioteca já possui LEIA-ME, fichas de aulas, índice de evidências e arquitetura/decisões. Não repetir a criação dessa estrutura. Usar o LEIA-ME e AV-003 para a próxima entrega; este Caderno mantém as sínteses e decisões originais como base histórica.


## Revisão de coerência — 20/10/2026

Revisão documental v0.2 em resposta ao AUD-005. Referências a versões anteriores nas fontes e no histórico descrevem a elaboração anterior; o LEIA-ME aponta a posição atual pelos mesmos IDs do Drive. Esta edição não executa testes nem aprova regras científicas ou prescrições.
