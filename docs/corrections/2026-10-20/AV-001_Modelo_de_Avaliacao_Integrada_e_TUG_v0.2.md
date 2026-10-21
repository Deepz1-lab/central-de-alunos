# AV-001 — Modelo de Avaliação Integrada da Central de Alunos

> **Revisão de coerência — 20/10/2026.** A dúvida anterior sobre finalidade da ultrassonografia está esclarecida por AV-002: composição corporal regional (espessura muscular e gordura), sem equivalência automática com diagnóstico de lesão ou massa muscular total. Esta nota substitui aquela dúvida, preservada abaixo como histórico. TUG continua proposta, sem implantação ou entrada completa no DIC; não é bateria obrigatória universal. A ligação entre procedimentos, indicadores e campos será registrada em [AV-003](https://drive.google.com/file/d/1U_ylnB-oOOoK89lCw5p3aSkYnaWWDbMJ/view?usp=drivesdk).



**Versão:** 0.2 — proposta de arquitetura de dados e interpretação; NÃO implantada  
**Data:** 20/10/2026  
**Fonte operacional:** descrição dos procedimentos usados na ACESSO pelo professor responsável.  
**Fontes científicas para o módulo TUG:** CDC STEADI; World Falls Guidelines 2022 (PMID 36178003); Barry et al., BMC Geriatrics 2014 (PMID 24484314).  
**Estado da Central:** acionadores antigos pausados, não reativar.  
**Proteção:** este documento apresenta o protocolo geral. Valores e relatos pessoais dos alunos devem permanecer exclusivamente nas pastas individuais, com acesso apropriado.


## 1. Objetivo


Transformar os procedimentos de avaliação existentes em processo rastreável:
**anamnese → coleta → interpretação → objetivos e prioridades → plano/periodização → execução → reavaliação**.


Não duplicar as planilhas já existentes sem uma auditoria de dependências. Manter as fichas individuais como fonte atual dos dados coletados, mesmo quando a última avaliação for anterior; identificar data, método e possíveis limitações de atualização.


## 2. Anamnese — processo atual relatado pelo professor


O procedimento atual inclui:
- **Objetivo principal** definido com a pessoa;
- **Queixas** e limitações relatadas;
- **Rotina** e contexto de treinamento;
- **Relatos gravados em áudio**, frequentemente usados para estudar e compreender as falas.


### Proposta de dados estruturados, sem perder a gravação como fonte


Campos da anamnese: `aluno_id`, `data`, `objetivo_texto`, `objetivo_mensuravel`, `queixas_relato`, `rotina_sono`, `rotina_trabalho`, `atividades_externas`, `historico_treino`, `preferencias`, `restricoes_relevantes`, `origem_relato`, `resumo_validado_pelo_professor`, `pendencias_verificacao`.


**Governança dos áudios:** informar e obter base adequada para a gravação e o tratamento dos dados, limitar acesso, armazenar em local autorizado e não copiar áudio ou transcrição integral para o repositório científico comum. As transcrições geradas por IA exigem revisão do responsável e correção de possíveis ambiguidades.


## 3. Procedimentos de avaliação já realizados — 11 itens


| Nº | Procedimento informado pelo responsável | Domínio principal para indexação (proposta; não definição do conteúdo real de cada laudo) |
|---|---|---|
| 1 | Bioimpedância | Composição corporal estimada |
| 2 | Ultrassonografia | A definir conforme finalidade e protocolo utilizados; não presumir automaticamente que seja ultrassom de composição corporal |
| 3 | Baropodometria | Distribuição plantar e variáveis posturais medidas pelo equipamento |
| 4 | Avaliação postural | Observações de posicionamento e alinhamento; não confundir achado com causa de dor |
| 5 | Dinamometria MMSS | Desempenho de força dos membros superiores conforme equipamento/protocolo |
| 6 | Dinamometria MMII | Desempenho de força dos membros inferiores conforme equipamento/protocolo |
| 7 | Banco de Wells | Desempenho no teste sentar-e-alcançar; não equivale a medida isolada de cada articulação |
| 8 | RML | Resistência muscular localizada; especificar exercício, tempo, cadência e critério de término |
| 9 | Força Máx — Supino | Desempenho de força máxima ou estimada no teste específico; registrar se é 1RM direto, submáximo ou outro protocolo |
| 10 | Força Máx — Leg Press | Desempenho de força máxima ou estimada no equipamento específico; especificar máquina, amplitude e protocolo |
| 11 | Adipometria | Estimativa de composição corporal via dobras cutâneas com equação/protocolo explicitados |


**Importante:** a lista é o inventário informado pelo professor, não confirmação de que os onze testes são aplicados em cada atendimento, nem indicação de que todos devam ser feitos em todas as pessoas.


## 4. Inclusão proposta — TUG (12º procedimento disponível)


**Caso motivador (anonimizado):** situação de um aluno mais velho cujo objetivo funcional priorizado pelo treinador é preservar autonomia. O exemplo ilustra como objetivos funcionais orientam a seleção de avaliações; não documenta resultado de teste, diagnóstico ou risco de queda. Identificadores e detalhes individuais permanecem exclusivamente na pasta restrita do aluno.


**TUG — Timed Up and Go:** mobilidade funcional em transição sentado-em-pé, marcha, giro e retorno à cadeira.


**Procedimento de referência, CDC STEADI:**
1. Cadeira estável com braços; marcar 3 metros (10 pés) no chão.
2. Utilizar calçados habituais e registrar dispositivo auxiliar, se houver.
3. Instruir a levantar-se, caminhar em ritmo habitual até a marca, virar, retornar e sentar.
4. Iniciar o cronômetro no comando "vá" e terminar ao sentar.
5. Registrar tempo em segundos e observações de estabilidade, passos, giro, apoio, ritmo e intercorrências.
6. Garantir segurança e não continuar o teste se houver instabilidade ou condição que o torne inseguro.


**Registro mínimo:** `aluno_id`, `avaliacao_id`, `data`, `teste=TUG`, `distancia_m=3`, `tempo_s`, `cadeira_padrao`, `calcado`, `dispositivo_auxiliar`, `intervencao_necessaria`, `observacoes_giro`, `observacoes_marcha`, `observacoes_equilibrio`, `protocolo`, `avaliador`, `decisao_clinico_funcional`.


**Evidência:** World Falls Guidelines 2022 prioriza velocidade de marcha para estratificação e permite o TUG como alternativa (PMID 36178003); Barry et al. 2014 encontrou sensibilidade limitada no limiar >=13,5 segundos e recomenda não usar TUG isoladamente para predizer quedas (PMID 24484314). Os valores de corte publicados dependem de população e propósito; **não definir automaticamente "aprovado/reprovado" ou diagnóstico por tempo único**.


**Testes complementares possíveis, se a pergunta funcional justificar:** velocidade habitual de marcha, 30-second Chair Stand e 4-Stage Balance do CDC STEADI. Não torná-los obrigatórios de imediato; considerar viabilidade, segurança e necessidade individual. A avaliação de risco de quedas também requer história de quedas, sintomas e contexto clínico-funcional, quando pertinente.


**Aplicação ao planejamento:** usar mudanças ao longo do tempo, observações qualitativas e objetivos funcionais para informar exercícios de força, capacidade de levantar/sentar, equilíbrio e marcha, com decisão do professor. Não inferir incapacidade funcional só pela idade.


## 5. Quatro camadas de informação — regra de arquitetura


| Camada | Conteúdo | Responsabilidade |
|---|---|---|
| **Dado bruto** | Instrumento, resultado, unidade, protocolo, data, condições | Preservação fiel da medida |
| **Indicador processado** | Classificação de referência e mudança entre coletas comparáveis | Cálculo auditável com fonte e limites |
| **Interpretação** | Hipótese funcional, significado para o objetivo, incertezas | Discussão contextual do profissional |
| **Decisão aprovada** | Capacidade prioritária, intervenção, prazo de revisão | Aprovação do treinador, rastreada |


Toda ação automática futura precisa preservar essas quatro camadas separadas. Indicador isolado não deve gerar prescrição, diagnóstico ou progressão compulsória.


## 6. Campos mínimos para a futura Central


**Avaliação:** `avaliacao_id`, `aluno_id`, `data_avaliacao`, `versao_ficha`, `origem_drive_id`, `estado` (realizada/pendente/não aplicável), `protocolo`, `avaliador`, `observacoes_gerais`.


**Resultado de teste (uma linha por teste/coleta):** `resultado_id`, `avaliacao_id`, `teste_codigo`, `valor`, `unidade`, `lado` se aplicável, `condicoes`, `protocolo`, `fonte`, `interpretacao_aprovada`.


**Objetivos e prioridades:** `objetivo_id`, `aluno_id`, `objetivo_declarado`, `desfecho_mensuravel`, `valor_inicial`, `alvo`, `horizonte`, `prioridade`, `racional`, `status`, `data_revisao`.


**Ciclo de acompanhamento:** vínculo do objetivo à prescrição e aos registros de execução, permitindo reavaliação e auditoria das decisões.


**Reavaliação:** comparar protocolos equivalentes; apresentar variação absoluta e relativa quando pertinente, sem substituir a medição original.


## 7. Critérios de aplicação segura


- A avaliação física existente é a fonte estruturada inicial de cada aluno, **não a presunção de que seu estado atual permaneceu inalterado**.
- Avaliações defasadas devem apresentar data visível, e podem motivar reavaliação; a necessidade é individual, não corte universal de prazo.
- Testes máximos (ex.: 1RM direto), procedimentos de esforço e testes de marcha/equilíbrio exigem triagem, adaptação do protocolo ou substituição quando houver razões de segurança.
- Bioimpedância, adipometria e ultrassonografia não devem ter suas estimativas confundidas ou somadas sem verificar método, algoritmo e comparabilidade.
- Dados de saúde, gravações e laudos de alunos não devem ser copiados para a biblioteca geral de evidências.
- As automações da Central continuam pausadas; **não alterar planilhas individuais, testes, formulários ou gatilhos** nesta fase.


## 8. Referências verificadas


1. Montero-Odasso M et al. (2022). World guidelines for falls prevention and management for older adults: a global initiative. *Age Ageing*. DOI 10.1093/ageing/afac205. PMID **36178003**. https://pubmed.ncbi.nlm.nih.gov/36178003/
2. Barry E et al. (2014). Is the Timed Up and Go test a useful predictor of risk of falls in community dwelling older adults: a systematic review and meta-analysis. *BMC Geriatrics*. PMID **24484314**. https://pubmed.ncbi.nlm.nih.gov/24484314/
3. CDC. STEADI — Timed Up & Go (TUG) Assessment. https://beta.cdc.gov/steadi/media/pdfs/STEADI-Assessment-TUG-508.pdf
4. CDC. STEADI — Functional Assessment Resources. https://www.cdc.gov/steadi/hcp/clinical-resources/


## 9. Estado de aprovação


- **Procedimentos informados:** registrados como prática atual descrita pelo treinador.
- **Inclusão TUG:** proposta aprovada em princípio pelo responsável ("Eu acrescentaria o TUG"); inclusão em fichas reais e integração computacional **ainda não executadas**.
- **Estrutura futura:** proposta técnica para revisão, não alteração de código nem prescrição.
- **Dúvidas posteriores (não bloqueiam esta versão):** finalidade exata da ultrassonografia usada; protocolos da dinamometria e RML; testes de 1RM direto ou estimado; quais instrumentos recebem reavaliações mais frequentes.

## Revisão de coerência — 20/10/2026

Revisão documental v0.2 em resposta ao AUD-005. IDs, organização e compartilhamentos do Drive preservados. Referências a versões anteriores no corpo e nos registros de elaboração são históricas; consultar o LEIA-ME para a posição atual. Nenhuma aprovação científica, profissional ou execução de teste é produzida por esta edição.
