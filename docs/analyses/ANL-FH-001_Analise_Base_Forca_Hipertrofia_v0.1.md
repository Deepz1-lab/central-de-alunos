---
id: ANL-FH-001
titulo: "Análise da base de força e hipertrofia da Central de Aluno"
versao: "0.1"
data: "2026-10-20"
estado: "ANALISE_DOCUMENTAL_COM_REAPROVEITAMENTO_RECOMENDADO"
origem: "PROPOSTA_CENTRAL"
implementacao: "Somente leitura da planilha; novo parecer metodológico"
---

# ANL-FH-001 — O que aproveitar da planilha para o núcleo de força e hipertrofia

## 1. Veredito

**A estrutura da Central de Aluno faz sentido com a proposta e deve ser aproveitada.** Ela já materializa boa parte da logística desejada: carteira → planejamento individual → ciclos → capacidade → método → dose → montagem → execução → resposta.

A distância principal é a conexão explícita e verificável entre resultado válido de avaliação, objetivo acordado, escolha de prioridade e parâmetro da prescrição. O trecho do motor examinado usa sobretudo perfil previamente preenchido, semana/paridade, fase e modelos de sessão. Isso é uma estrutura útil de apoio, mas ainda não demonstra a cadeia avaliação→decisão auditável do NUC-001/AV-003.

Recomendação: preservar a organização e extrair regras candidatas, com revisão de fontes, precedências e parâmetros; não importar todas as fórmulas como regras universais nem reconstruir tudo do zero.

## 2. Fonte, escopo e limites

Fonte operacional consultada em leitura: [Central de Aluno](https://docs.google.com/spreadsheets/d/119Qe_4e_9n0X6tAkaJasB2-QJphlVmAEnm76WFoUxUg/edit), ID confirmado por busca e metadados. Metadados enumeraram 61 abas, incluindo abas ocultas e backups. Foram examinadas partes de 12 abas de trabalho/referência; não houve auditoria integral das 61 abas.

| Aba | Intervalos de valores consultados |
|---|---|
| Planejamento Individual | A1:O35 |
| Base Ciclos | A1:CS12 |
| Motor de Periodização | A1:AF16 |
| Catálogo de Presets | A1:M22 e A200:M240 |
| Estruturas | A1:N24 |
| Prescrição e Montagem | A1:AD20 |
| Banco de Sessões | A1:N20 e A21:N45 |
| Automação de Micros | A1:V20 |
| Avaliações | A1:X18 |
| Biblioteca Técnica | A1:J25 |
| Tabela_Exercicios | A1:N18 |
| Integração Planilhas Individuais | A1:O12 |

Conferidas também fórmulas/entradas em: Motor de Periodização D1:Q4; Automação de Micros F5:Q9; Prescrição e Montagem A1:P7, H6:L6, H11:L11 e âncora A5:A6; Estruturas E7:M8 e âncora A5; Base Ciclos A5; Avaliações A7:X10; Biblioteca Técnica I1:J8. Células de saída de matrizes podem não conter fórmula própria: a lógica foi conferida nas âncoras disponíveis.

Amostras nominais foram usadas somente para leitura contextual e não reproduzidas neste MD. Não foram abertos, nesta análise, todos os arquivos individuais, avaliações originais, prescrições completas ou scripts implantados. Não se conclui segurança/eficácia de um treino individual por este parecer. Fórmulas existentes não foram executadas ou alteradas por nós; a inspeção estática não prova qual caminho do Apps Script está ativo.

Comparação metodológica com CENTRAL-001 v0.5, NUC-001 v0.2, AV-003 v0.1, VAL-001 v0.3, DIC-001 v0.3 e TEST-001 v0.5. Leitura acadêmica pontual descrita na seção 6; não houve nova conferência integral dos vídeos.

## 3. O que já existe e merece ser preservado

| Elemento observado | Valor para a proposta | Condição de reaproveitamento |
|---|---|---|
| Planejamento macro→meso→micro ligado às fichas individuais | Mantém continuidade e visão de carteira | Identificar ocasião, revisão da fonte e versão do plano |
| Motor com objetivo, cuidado, capacidade/subcapacidade, progressão/regressão, KPIs e critério de sucesso | Já contempla raciocínio profissional e contexto, além de exercícios | Distinguir informação confirmada, hipótese, decisão do treinador e fonte datada |
| Prescrição e Montagem com ordem meso→capacidade→fase→método→dose→exercícios | Oferece fluxo prático para preparar atendimento | Acrescentar avaliação validada→prioridade e validação final da proposta |
| Banco de Sessões com ordem, bloco, padrão/grupo, dose, pausa e observação | Esqueletos reutilizáveis de sessão | Transformar números em parâmetros condicionais, sujeitos à regra e ao contexto |
| Catálogo de Presets com ID e assinatura estrutural | Base útil para selecionar modelos e evitar equivalências apenas visuais | Não tratar assinatura estrutural como validação científica ou identidade do aluno |
| Separação de previstas/criadas/iniciadas/concluídas, exercícios e qualidade de registro | Ajuda a distinguir plano de execução | Ausência de registro não prova ausência de treino; preservar estado desconhecido |
| Biblioteca com regressões, progressões e exemplos de evidência | Material já aproveitável para catálogo técnico | Referência, população, alcance e versão por regra; não promover todos os itens pelo título |
| Arquitetura comum para atendimento em dupla, com orientações de dose individual | Compatível com logística real do treinador | Preservar decisões individuais de carga, esforço, pausa e progressão |

Há, por exemplo, alertas textuais para não transformar todo treino em circuito, não subestimar capacidade pela idade e considerar recuperação e outras atividades. São orientações existentes a rastrear/revisar, não novas condutas clínicas aprovadas neste parecer.

## 4. Achados sob a perspectiva do treinador

### FH-01 — A avaliação aparece, mas ainda falta o vínculo explícito com cada decisão

Evidência: Avaliações A7:W10 registra procedimento, necessidade, prioridade, conclusão, critério e evidência auditada; em G8, o checkbox de conclusão define “CONCLUÍDO”, enquanto M8 pode indicar “NOVA AV — REAUDITAR”. Isso não é necessariamente erro: realização e qualidade são fatos diferentes. O risco surge se uma conclusão operacional for usada como aprovação da medida.

Nas fórmulas consultadas de Estruturas, Automação de Micros e Prescrição e Montagem, a escolha de capacidade/método/dose consulta bases de ciclo, perfil e modelos; não foi encontrada, nesse caminho específico, uma ligação identificada ao resultado_id, protocolo, fórmula e finalidade validada. Pode haver informação em outras áreas não examinadas.

**Proposta:** manter conclusão do procedimento separada de validade do resultado para uso; cada prioridade deve apontar a avaliação/resultado pertinente, objetivo acordado, contexto e regra aprovada. Não exigir todos os testes de todas as pessoas.

### FH-02 — Paridade da semana é uma organização possível, não a justificativa fisiológica inteira

Evidência: Estruturas A5 e Prescrição e Montagem A5 usam MOD(semana;2) para escolher capacidade A ou B; Automação de Micros F/H repete a lógica. Estruturas A17:H18 associa o modelo de força/hipertrofia a alternância entre força e RML/volume.

**Proposta:** preservar alternância como estratégia configurável e justificada. O objetivo e a avaliação definem capacidades prioritárias; a periodização distribui suas exposições, dose e recuperação. “Semana par” não deve, sozinha, decidir que a pessoa agora precisa de RML ou retirar o estímulo prioritário. Não concluir que a alternância existente é errada para todos.

### FH-03 — Redução de volume na semana 4 precisa ser uma política aprovada

Evidência: Automação de Micros G6:G9 determina semana 4 = DELOAD/REG; K6:K9 acrescenta redução de 30–50% das séries nessa semana. Estruturas usa a fase importada; Prescrição e Montagem também usa a fase importada para dose. Na amostra, Automação G8 exibe DESENVOLVIMENTO e os painéis exibem SOBRECARGA/CHO para o mesmo ciclo.

**Proposta:** definir qual fase é canônica e registrar se uma é previsão e outra vigente. A semana planejada de redução pode existir, mas precisa de justificativa, possibilidade de ajuste e autoria; o percentual não é universal nem deve prevalecer silenciosamente sobre um plano individual diferente.

### FH-04 — Objetivo global, objetivo do meso e capacidade semanal precisam conversar

Evidência: na amostra há um perfil com objetivo geral de hipertrofia, título de meso relacionado a força máxima/potência e capacidade semanal hipertrófica; outros perfis também combinam capacidades.

Isso pode ser coerente em um planejamento com etapas. **A lacuna não é a diferença de rótulos em si, mas a justificativa da relação.** Registrar: por que esse bloco contribui para o objetivo global, qual avaliação sustenta a escolha, o que será mantido e como aferir resposta.

### FH-05 — A boa biblioteca ainda exige rastreabilidade por item

Biblioteca Técnica A2:J19 contém orientações por exercício sem preenchimento das colunas I/J na amostra. Já A20:J25 contém registros de métodos com referências ou ressalvas explícitas — inclusive limitação de evidência. Portanto, a biblioteca não é toda sem fonte nem toda validada.

**Proposta:** distinguir instrução prática do treinador, alegação ensinada na aula, complemento acadêmico e regra nossa. Condutas com limiares de dor, restrições ou progressão não devem virar regra universal por constarem em um perfil. Este parecer não homologa esses limiares.

## 5. Achados sob a perspectiva do programador

### FH-06 — Há mais de um caminho para produzir método e dose

Prescrição e Montagem A5 contém sua própria seleção por expressões de texto e faixas de dose; Automação de Micros I/J/K seleciona modelo e busca a segunda linha do Banco de Sessões; Estruturas aplica regras de fase próprias.

Exemplo observado: para força máxima, o painel apresenta 2–5 séries de 3–6 repetições; o outro caminho aponta o modelo cuja linha principal usa 3–5 séries de 4–8. Nenhuma faixa é declarada errada por este parecer. O problema de engenharia é não estar explícito qual contrato é canônico e por que as propostas diferem.

**Proposta:** uma regra versionada de decisão/dose, consumida por painéis, gerador e validação de ajustes manuais; diferenças intencionais recebem contexto e justificativa.

### FH-07 — A logística domiciliar precede capacidade e fase em um seletor

Automação de Micros I6:I9 testa “Domiciliar” antes de DELOAD, força máxima e demais capacidades. Assim, nessa fórmula, o local pode selecionar o modelo domiciliar independentemente desses outros critérios. Banco de Sessões A33:H34 apresenta blocos de força domiciliar com 10–12 repetições e descanso descrito como tempo do parceiro.

Isso não prova que o script implantado prescreva igual para todos ou ignore ajustes posteriores. **A precedência é observada; a consequência completa na geração não foi auditada.**

**Proposta:** capacidade e parâmetros individuais definem o estímulo; local, dupla e equipamento adaptam a organização. Em dupla, distinguir descanso entre exercícios, entre voltas e entre exposições do mesmo exercício. Tempo do parceiro não garante sozinho a recuperação pretendida.

### FH-08 — Reparar montagem e liberar treino são permissões diferentes

Automação de Micros P8, na fórmula consultada, testa conexão/integridade e estados do bloco; o ramo de micro parcial sem execução retorna REPARO DO MICRO VIGENTE antes de checar resposta do dia, alertas, aderência e qualidade do registro. Q8 converte REPARO em REPARAR AUTOMATICAMENTE.

**Conclusão estática:** esse caminho permite chegar ao rótulo de reparo sem passar pelas verificações posteriores. Não é prova de execução de gatilho, escrita efetiva ou dano.

**Proposta:** permitir, se desejado, reparo estrutural de rascunho; aprovação/liberação e qualquer progressão dependem de checagem técnica e auditoria. Sinais do dia não devem desaparecer porque a tarefa é chamada “reparo”.

### FH-09 — Chaves por nome/texto e valores padrão merecem contrato

Há XLOOKUP por nome e seleção por REGEXMATCH em rótulos; alguns caminhos usam defaults como “Geral simples”, “Seriado”, zero ou texto vazio.

**Proposta:** pessoa_id, regra_id, capacidade_id, protocolo_id e versão; nomes e cores como apresentação. Informação ausente/erro não deve assumir silenciosamente uma prescrição padrão. Zero legítimo deve ser preservado, conforme VAL/TC-57.

### FH-10 — A decisão de prioridade precisa permanecer visível

Os alertas operacionais de conexão, montagem e registro são úteis, mas não equivalem à validação técnica de objetivo × exercício × esforço × volume × intervalo × frequência × recuperação.

**Proposta:** exibir separadamente prontidão operacional, qualidade dos dados e coerência técnica da proposta. RED FLAG deve apontar regra, evidência, contexto, consequência e possibilidade de revisão; intervalo curto não muda automaticamente todo estímulo para “resistência”.

## 6. ACESSO, literatura e propostas: atribuição

**Metodologia dos vídeos:** o rótulo “Estrutura ACESSO” da planilha e as fichas preliminares não comprovam, por si, que cada fórmula, alternância ou faixa foi ensinada exatamente pelo professor. Sem trecho/minutagem conferidos nesta etapa, não promover uma regra a AULA_VERIFICADA.

**Complementação acadêmica pontual:** o resumo de [Moesgaard et al., 2022, PMID 35044672](https://pubmed.ncbi.nlm.nih.gov/35044672/) foi consultado. Na síntese com volume equiparado, periodização favoreceu força de 1RM em relação a não periodização, sem diferença demonstrada para hipertrofia. Isso não estabelece o nosso calendário ímpar/par como obrigatório, nem torna periodização inútil para organizar o trabalho.

Foi conferida a [publicação oficial da ACSM sobre o posicionamento de 2026](https://acsm.org/science-spotlight-acsm-releases-new-position-stand-on-resistance-training/), que distingue desfechos como força, hipertrofia, potência e resistência e se refere a adultos saudáveis. O texto completo não foi recuperado com sucesso nesta consulta. Não foram adotados novos números de dose a partir dessa divulgação, nem extrapolados resultados automaticamente a situações clínicas.

As referências já escritas nas células da Biblioteca Técnica foram observadas, mas seus artigos não foram todos relidos. A presença do PMID é rastreabilidade inicial, não aprovação da conduta.

**Propostas nossas:** unificação de regras, entidades/IDs, precedências, estados, validação contextual, casos de teste e plano de reaproveitamento deste parecer são PROPOSTA_CENTRAL. Nenhuma fonte é declarada validada só porque aparece no MD.

## 7. Próxima entrega concreta: extrair a planilha para regras revisáveis

1. Extrair candidatos das estruturas de força técnica, força hipertrófica e atendimento em dupla, mantendo sua origem/localizador.
2. Completar uma ficha por decisão: objetivo/capacidade, resultados de avaliação necessários, qualidade admitida, contexto, entradas, alternativas, dose condicional, progressão/regressão e fonte.
3. Unificar fase e parâmetros; explicar a alternância A/B quando usada e as regras de transição/redução.
4. Relacionar exercícios/equipamentos disponíveis e tempo real de sessão.
5. Criar fixtures e saídas esperadas revisadas pelo treinador antes do motor experimental.

O primeiro pacote pode conter força/hipertrofia em pessoa sem limitação específica, capacidade semelhante com mudança de contexto e atendimento em dupla com doses distintas. São classes sintéticas; não fixar os três alunos antigos como universo de possibilidades.

## 8. Casos candidatos — não executados

| Caso | Entrada sintética | Expectativa proposta |
|---|---|---|
| FH-T01 | Mesmo objetivo/avaliação, muda apenas paridade | Explicar distribuição e manter coerência da exposição prioritária; não mudar necessidade fisiológica só pelo número |
| FH-T02 | Semana 4, plano individual sem redução aprovada | Sinalizar conflito e pedir decisão; não aplicar percentual universal silencioso |
| FH-T03 | Dupla, força máxima em um e hipertrofia no outro | Organização compartilhada com dose e recuperação individuais |
| FH-T04 | Micro parcial, sem execução, resposta do dia exige revisão | Reparo estrutural não libera nem progride treino automaticamente |
| FH-T05 | Procedimento concluído, nova AV precisa reauditoria | Manter conclusão operacional; suspender somente usos não validados |
| FH-T06 | Objetivo global diferente do título de meso | Exigir justificativa de encadeamento, sem declarar erro automaticamente |
| FH-T07 | Falha de fonte/dado ausente | Explicitar lacuna; não trocar por “Geral simples” como se houvesse decisão validada |
| FH-T08 | Métodos/doses distintos entre dois caminhos | Uma origem canônica ou diferença contextual explicitamente justificada |
| FH-T09 | Descanso curto com método/objetivo incompletos | Alerta contextual e pergunta dirigida; não classificação automática absoluta |

Estes casos são especificações documentais para revisão. Não foram adicionados automaticamente ao TEST-001 nem executados no sistema operacional.

## 9. Encerramento

Parecer favorável ao reaproveitamento da planilha como estrutura operacional e fonte de candidatos. A maturação necessária é conectar avaliação validada→prioridade→dose, centralizar regras e explicar exceções. Nenhuma alteração em planilhas, prescrições, avaliações, scripts, gatilhos, automações, cadastros ou backups foi feita nesta análise.
