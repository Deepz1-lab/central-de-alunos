---
id: AV-003
titulo: "Contrato entre avaliação, decisão e prescrição"
versao: "0.5"
data: "2026-10-20"
estado: "POSICAO_CONSOLIDADA_COM_CASO_DOCUMENTAL_PARA_AUDITORIA"
origem: "PROPOSTA_CENTRAL"
implementacao: "Nenhuma integração, coleta ou prescrição executada"
---

# AV-003 — Contrato entre avaliação, decisão e prescrição

## 1. Finalidade e limite

Consolidar a ligação que faltava entre AV-001/AV-002 (procedimentos), DIC-001 (indicadores), VAL-001 (qualidade), MAP-AV-001/002 (raciocínio), NUC-001 (cascata) e TEST-001 (verificação). Este contrato organiza trabalho futuro; não afirma que campos, protocolos, equações, doses ou exercícios já estejam mapeados/aprovados.

**Cascata:** pessoa + objetivo/contexto + avaliação pertinente e confiável → interpretação → prioridades → Plano de Ação → macro/meso/micro → sessões propostas → verificação → auditoria/aprovação do treinador → execução real → acompanhamento/reavaliação.

O algoritmo deverá propor o planejamento completo dentro das regras aprovadas e do escopo declarado. O treinador decide, ajusta e aprova. O ajuste manual também passa pelas verificações. O sistema deve poder devolver proposta parcial ou insuficiência de dados, especificando o que falta e o que permanece utilizável. Nenhuma publicação é consequência automática de gerar ou validar um rascunho.

Não existe bateria universal obrigatória: a seleção é feita pela pergunta, objetivo, contexto e protocolo pertinente. A inexistência de um teste sem relevância para a decisão não bloqueia todo o atendimento. Uma decisão que depende de avaliação ausente permanece suspensa. A triagem profissional pertinente antecede testes/esforço.

## 2. Entidades e vínculos mínimos

| Entidade | Chave e conteúdo obrigatório | Distinção preservada |
|---|---|---|
| Ocasião de avaliação | avaliacao_id; pessoa_id restrito; data/hora de coleta; contexto; responsável | Coleta ≠ emissão/exportação ≠ consulta ≠ reavaliação prevista |
| Procedimento realizado | procedimento_id; ocasião; tipo; protocolo_id/versão; equipamento/operador; condições; interrupção | Agendado/proposto ≠ realizado; tentativa inválida fica preservada |
| Resultado bruto | resultado_id; procedimento/tentativa/lado/região; valor original; unidade; seleção do resultado | Medido ≠ estimado ≠ calculado; zero não é ausência por definição |
| Fonte localizada | fonte_id controlado; arquivo_id/revisão ou hash; aba/célula ou página/campo; data da leitura | Modelo de planilha ≠ cópia individual ≠ versão efetivamente examinada |
| Indicador derivado | indicador_id DIC; fórmula_id/versão; entradas por resultado_id; arredondamento | Resultado calculado só é auditável com seu grafo de dependências |
| Auditoria | objeto + finalidade + estado(s); motivo; G0–G3; saídas afetadas; revisor/data/evidência | Qualidade ≠ impacto ≠ aprovação ≠ cor |
| Comparação | resultado anterior/atual; variável/pergunta; SIM/NAO/INDETERMINADA; justificativa | Dois resultados utilizáveis isoladamente não garantem evolução comparável |
| Decisão | decisao_id/versão; objetivo acordado; resultados válidos; regra/versão; alternativas/incertezas | Achado ≠ prioridade ≠ diagnóstico; associação ≠ causalidade |
| Proposta/aprovação/execução | proposta_id; versão; base revisada; aprovador/data; sessão realizada/adaptada/não realizada | Gerado ≠ verificado ≠ aprovado ≠ liberado ≠ executado |

Campos faltantes são registrados como PENDENTE com motivo e responsável a designar. Não preencher IDs reais, revisores, datas de aprovação ou protocolos por inferência. Alteração da entrada torna pendente a revisão de seus descendentes, sem apagar a versão anterior.

## 3. Mapeamento físico: registro obrigatório antes de conectar

Uma linha por campo e versão da fonte:

`mapa_id; versão_modelo; fonte_id_controlado; arquivo_id_restrito; revisão/hash; aba_exata; célula/intervalo_ou_página_campo; procedimento_id; DIC_id; tipo_dado; unidade_original; conversão_aprovada; protocolo_id_versão; fórmula_id_versão; dependências; regras_VAL; usos_permitidos; usos_bloqueados; evidência; revisor; data; estado`.

Abas e coordenadas precisam ser observadas na fonte, nunca adivinhadas. Mapeamentos nominais permanecem na camada operacional apropriada, não na biblioteca metodológica. A observação anterior de rótulos/abas em um exemplar não prova que outras versões sejam equivalentes.

**Posição v0.5:** cobertura e protocolos estão consolidados no §11; MET-003 registra o trajeto metabólico até o treino cíclico por versão. O mapeamento físico permanece parcial. O caso CAS-001 demonstra o raciocínio sem motor ou aprovação profissional; este contrato não autoriza escrita operacional.

## 4. Cobertura e lacunas de avaliação

AV-001 reúne 11 procedimentos; AV-002 esclarece a ultrassonografia. DIC-001 mantém 24 registros: 23 famílias de indicadores e DIC-23 de contexto/objetivos. Procedimento e família de indicador não são contagens intercambiáveis.

| Domínio | Ligação existente | Requisitos de completa especificação; consultar posição atual no §11 |
|---|---|---|
| Massa, estatura e antropometria | DIC-01–05, AV-001 | Origem por ocasião, unidades, método/equação, campos e dependências |
| Bioimpedância e composição | DIC-06/07, AV-001 | Dispositivo/equação, condições, população aplicável e comparabilidade |
| Ultrassonografia | DIC-08, AV-002 | Região/lado, espessura muscular/gordura, aquisição e repetibilidade; não inferir massa muscular total |
| Dinamometria MMSS/MMII | DIC-09–12, AV-001 | Gesto/postura/ângulos, seleção de tentativa, unidade, normalização, fórmula de assimetria/torque |
| Força máxima, supino/leg press | DIC-13, AV-001 | Teste direto versus estimado; exercício/aparelho; equação e condições; não converter dinamometria em carga de máquina |
| RML | DIC-14, AV-001 | Tarefa, cadência, término, contagem e relação com a decisão |
| Flexibilidade/Wells | DIC-24, AV-001 | Protocolo/equipamento, unidade, interpretação específica e repetibilidade |
| Cardiorrespiratório | DIC-15–18; fichas pertinentes | Protocolo, término, VO₂ medido/estimado, FC/limiar/recuperação e equações |
| Pressão/sintomas | DIC-19 | Protocolo, encaminhamento pertinente e limites de competência; nenhum corte novo aqui |
| Energia/macronutrientes | DIC-20 | Equações e responsabilidades; sem transformar estimativa em prescrição alimentar |
| Baropodometria/CoP e postura | DIC-21/22, AV-001 | Dispositivo/tarefa, escore, repetibilidade e pergunta funcional; sem diagnóstico automático |
| Objetivos e contexto | DIC-23 | Distinguir relato, confirmação, prioridade acordada, disponibilidade e revisão |
| TUG | Proposta em AV-001 | Entrada específica do dicionário, protocolo/versão, campos, unidade, população e finalidade ainda PENDENTES; não declarar teste implantado |

Não criar DIC-25 apenas para completar contagem. A extensão TUG permanece candidata, com identificação definitiva após especificação. Disponibilidade de um procedimento não o torna obrigatório para todos.

## 5. Matriz operacional de qualidade

A fonte canônica dos oito estados é VAL-001 §4.1; G0–G3 pertence a §4.2. A aplicação é sempre objeto + finalidade.

| Condição | Registro e consequência |
|---|---|
| Recebido e ainda não conferido | NAO_AUDITADO; não tratar como validado |
| Metadado necessário ausente após inspeção | CONTEXTO_INSUFICIENTE naquele uso; preservar estado de recebimento/histórico |
| Entrada não coletada ou zero padrão sem evidência de coleta | SEM_DADO; suspender apenas usos dependentes |
| Zero realmente medido ou calculado com entradas e equação válidas | Preservar zero; submeter às demais checagens, sem validá-lo apenas por ser numericamente possível |
| Fórmula/dependências desconhecidas | CONTEXTO_INSUFICIENTE no derivado; motivo DEPENDENCIA_NAO_MAPEADA |
| Fórmula conhecida diverge do resultado | INCONSISTENTE no derivado; motivo ERRO_DE_FORMULA; preservar entradas independentes |
| Divergência de massa ainda não reconciliada | INCONSISTENTE, G2; suspender usos dependentes; não escolher fonte por maioria |
| Entrada sabidamente incorreta usada em cálculo decisivo | INCONSISTENTE, G3 no uso; bloquear descendentes pertinentes |
| Identidade incerta | G3 para atribuição/fusão daquele anexo; não invalidar outras fontes confirmadas |

G3 não é diagnóstico, gravidade clínica ou sinônimo de toda divergência. Se a decisão de carga/zonas envolver risco ou aplicação indevida, documentar G3 pelo impacto, sem esperar que um erro numérico seja provado. Bloqueio e liberação exigem evidência e revisor; leitura pelo software não produz validação profissional.

## 6. Contrato da regra candidata: da prioridade à dose

Uma regra só pode orientar o motor após preencher e revisar:

- `regra_id/versão; pergunta; objetivo/capacidade; população/contexto; critérios de inclusão/exclusão; entradas mínimas; estados admissíveis por uso; prioridade e justificativa; conflitos entre objetivos; alternativas`.
- `origem`: AULA_VERIFICADA com URL/trecho/minutagem efetivamente conferidos; COMPLEMENTACAO_ACADEMICA com fonte e avaliação de aplicabilidade; PROPOSTA_CENTRAL com autoria explícita. Uma regra pode combinar fontes, mantendo a atribuição por afirmação.
- `dose`: frequência, volume por unidade declarada, intensidade/método, esforço, repetições, intervalo, velocidade/cadência quando pertinente, distribuição macro/meso/micro, recuperação, progressão/regressão e critérios de reavaliação.
- `validadores`: combinação incompatível com objetivo/método, falta de informação, duração inviável, equipamento indisponível, progressão sem critério, conflito entre sessões; justificativa, evidência e ação de cada alerta.
- `governança`: fontes/versões, incerteza, parâmetros aprovados, casos TEST, resultado observado, revisor e aprovação por escopo.

Campos de dose não recebem números padrão nesta correção. Exemplo “força máxima com descanso muito curto” é **pergunta de verificação contextual**, não corte universal de segundos nem prova automática de mudança total do estímulo. Classificação e intensidade do alerta dependem da regra aprovada e do contexto completo.

Estados de trabalho para o catálogo: RASCUNHO → FONTES_EM_REVISAO → PARAMETROS_EM_REVISAO → CASOS_EM_TESTE → APROVADA_NO_ESCOPO. São estados da regra operacional, não estados de qualidade de uma medida. Não substituem a maturidade das fichas didáticas.

## 7. Contrato de exercícios e viabilidade

Antes de gerar sessões, inventariar a biblioteca existente em leitura, sem substituir nomes/cargas nas planilhas. Para cada variante: exercício_id, nome original, padrão/tarefa/capacidade, equipamento/local, unidade de carga e sua interpretação, ajustes/execução, alternativas justificadas, pré-requisitos pertinentes, tempo de execução/transição/descanso e limites da fonte.

A unidade “kg” de duas máquinas não prova equivalência de estímulo. Preferências, equipamentos disponíveis, tempo por sessão e frequência entram no planejamento. Restrições individuais devem ter origem, escopo e data; não criar contraindicações universais pela presença de um achado postural. Sem catálogo e estimativa de duração revisados, a montagem executável permanece PENDENTE.

## 8. Backlog verificável e critérios de aprovação

| Entrega | Evidência de saída | Estado em 20/10/2026 |
|---|---|---|
| Mapa por versão de fonte e indicador | Localizador observado + unidade + protocolo + dependências + revisor | PARCIAL: inventário integrado no §11; fórmulas e protocolos completos pendentes |
| Fontes da primeira família de decisões | Trechos de aula conferidos e avaliação acadêmica específica por regra | PENDENTE |
| Regras prioridade→dose e conflitos | CAS-001 demonstra escolhas e alternativas; parâmetros e escopo aguardam revisão | DOCUMENTAL_PARCIAL; aprovação PENDENTE |
| Biblioteca de exercícios/viabilidade | Inventário observado e critérios de substituição/duração | PENDENTE |
| Fixtures e oráculos de decisão | CAS-001: percurso sintético e variações; parâmetros/oráculos aguardam auditoria profissional | DOCUMENTAL_PARCIAL; motor NAO_IMPLEMENTADO |
| Motor experimental em modo sombra | Plano técnico e testes após portas anteriores; sem publicar treino | NAO_IMPLEMENTADO |

Critérios: reconstruir a decisão até a fonte; preservar independentes; recusar inferências sem base; explicar propostas e alertas; distinguir falha técnica de discordância profissional; confirmar que ajustes manuais recebem as mesmas verificações; registrar revisão e escopo. Nenhum caso de exemplo torna-se regra universal.

## 9. Exemplos sintéticos e verificações documentais

1. Massa incorreta bloqueia força relativa dependente; força absoluta com coleta própria identificada continua sob auditoria própria.
2. Delta de 80 para 80 é zero; não marcar SEM_DADO por causa do resultado. Com equação percentual aprovada e denominador positivo, lados 30 e 30 podem produzir assimetria de 0%; ambos os lados zero exigem tratar denominador zero, não fabricar 0%.
3. Ausência de TUG sem pertinência não bloqueia proposta de capacidade independente; uma decisão especificamente dependente do TUG permanece pendente.
4. Mudança de condição fisiológica abre revisão da comparação pertinente; não apaga medições nem condena o programa de treino por um delta isolado.
5. Regra não verificada não gera dose definitiva. A saída explicita a lacuna e mantém o que pode ser proposto no escopo aprovado.

São expectativas documentais propostas, **não testes executados** de um motor. TC-57 em TEST-001 cobre os zeros calculados; demais contratos exigem casos próprios antes da implementação.

## 10. Versão e autoria

v0.1 — 20/10/2026: contrato documental criado como resposta às lacunas A06–A08 do AUD-005. Não foram revistos vídeos/artigos completos, mapeadas fórmulas reais ou geradas prescrições individuais. Nenhum arquivo operacional foi alterado.

v0.2 — 20/10/2026: consolidação inicial do mapa integrado solicitado pelo treinador, usando documentos existentes, campos de um exemplar de laudo completo e descrição direta do procedimento. Nenhuma prescrição ou integração foi implantada. O novo §11 complementa o contrato; DIC-001 continua responsável pelas definições dos indicadores.

## 11. Posição vigente por domínio — substitui as pendências cumulativas das versões anteriores

Esta matriz é a posição atual de leitura; os detalhes técnicos estão em §12 e MET-003. Resolvido como relato não significa validado academicamente ou aprovado para automação. Confirmações anteriores não devem voltar como perguntas não respondidas.

| Domínio | Já identificado | Ainda precisa de evidência para o uso dependente |
|---|---|---|
| Contexto e prioridades | Avaliação + objetivo/contexto; orientação relatada dor→assimetrias→objetivo→massa/força→flexibilidade/postural; capacidades amplas; ACESSO padrão | Justificativa individual por decisão; não converter prioridade relatada em ranking universal |
| SP-Tech joelho | Posições/ângulos, fixação variável, 3 esforços de 5 s e repouso de 10–15 s relatados; detalhes §12 | Seleção real de tentativa, braço de alavanca, repetibilidade, algoritmos de assimetria/torque/1RM e uso em cada coleta. Sem corte universal H/Q de 60% |
| Cardiorrespiratório | Estágios 60 s e +1 km/h; cinta FC; Borg 0–10; recuperação ativa 4,5 ou 5 km/h seguida de sentado; Fitcheck identificado | Velocidade inicial/inclinação/aquecimento/término e tempos reais por coleta; tabela/âncoras locais; modelo/app/algoritmos e vínculo ao relatório |
| Metabólica/Dados de Base | Bases percentuais, seleção manual por campo, reaproveitamento de anterior e ponte manual Exportar/Importar rastreados em MET-003 | Conferência por versão/ocasião; equações e interpolação; semântica dos totais; não presumir dados recentes ou sincronização automática |
| Wells e complementar | Wells de rotina; outros testes seletivos; instrumento Sanny citado; referência CSTF localizada | Zero/unidade/execução/tentativas/seleção; edição normativa e instrumento complementar exato |
| Postura | PSU citado, fotografias e adaptação local; fórmula ICP local distinta de total/75 | Rubricas gráficas, vista/adaptação, agregação aprovada e finalidade. Não inferir diagnóstico ou exercício corretivo |
| Equilíbrio/baropodometria | Domínio presente; exemplos e campos localizados | Dispositivo, tarefa, apoio/visão/tempo/repetição e interpretação. TUG permanece candidato, não obrigatório |
| Planejamento/renovação | Treinamento Combinado escolhido; cinco blocos operacionais; backup antes da limpeza e atualização manual confirmados | Campos exatos da renovação antes de reproduzi-la; catálogo real, dose e progressão por regra. Ler código de botão não é pré-requisito da rotina manual |
| Prova de raciocínio | CAS-001 elaborado: objetivo/avaliação→prioridades→macro/meso/micro→sessões→alertas→retorno simulado | Auditoria do treinador pendente; testes contra motor NAO_EXECUTADO; motor NAO_IMPLEMENTADO |

### 11.1 Regra de retomada

Consultar esta matriz antes dos detalhes. MET-001 interpreta a organização por aluno; MET-002 descreve estrutura de fórmulas; DEC-OP-001 resolve a rotina manual; MET-003 explicita o trajeto metabólico. CAS-001 é prova documental. DIC-001 §14 e TEST-001 §15 recebem as ligações desta versão. Fontes históricas não são promovidas por atualização editorial.

## 12. Dossiê técnico atual — observações, prática relatada e evidência

As seções abaixo sustentam a matriz vigente. O texto preserva limites e resultados originais; não declara que todas as lacunas se aplicam igualmente a toda finalidade.

### 12.1 Procedimento local de joelho

`PRATICA_TREINADOR; RELATADO; protocolo local ainda sem identificação/versão formal`. Substitui a suposição anterior de que haveria manual MedEOR específico. Aparelho informado: SP-Tech/MedEOR; isso não confirma todos os ajustes de cada avaliação histórica.

| Condição | Extensão | Flexão |
|---|---|---|
| Posição | Cadeira extensora, joelho aproximadamente a 90° de flexão | Decúbito ventral, aproximadamente 35° de flexão |
| Convenção angular | 0° corresponde à extensão completa | O relato original de 145°, com extensão completa em 180°, equivale a 35°; preservar relato e conversão |
| Contato | Região distal da tíbia, acima do pé; distância exata não medida/informada | Região do tendão calcâneo; distância exata ao eixo não informada |
| Fixação | Cinta presa à parte inferior da cadeira | Manual ou cinta conforme força da pessoa; registrar por coleta |
| Apoio | Conforme cadeira | Pequena bola de Pilates sob a parte anterior do pé |
| Coleta relatada | 3 tentativas de 5 s; 10–15 s entre tentativas | 3 tentativas de 5 s; 10–15 s entre tentativas |
| Resultado final | Média/pico/outra seleção DESCONHECIDA | Média/pico/outra seleção DESCONHECIDA |

O treinador relata manter o aparelho parado quando estabiliza manualmente; isso não substitui estudo de confiabilidade. A duração/descanso acima descreve a prática, não recomendação acadêmica aprovada. Não aplicá-la automaticamente a MMSS/outros gestos nem a coletas históricas sem confirmação.

Dor: guardar localização, característica, momento, irradiação relatada, interferência, tentativa/lado, adaptação e decisão profissional. Preservar medida e limitação; “concluído com dor” não equivale a esforço máximo sem restrições e não autoriza insistência automática. Uma limitação não invalida medições independentes.

O PDF mostra torque “0,0 Nm”, 1RM e cargas sugeridas sem explicitar dependências. Não inferir torque fisiológico zero, braço de momento zero ou fórmula de 1RM. Média/pico continua pendente, sem solicitar ao treinador que adivinhe.

### 12.2 Controle e planejamento

Proposta da Central: avaliação/objetivo → prioridade justificada → desfecho acompanhável → dose proposta → auditoria/aprovação → execução/ajuste → revisão de sessão e/ou macro/meso/micro. O treinador já considera válidos ambos os níveis de revisão.

| Área | Avaliação inicial | Controle durante o trabalho, a especificar | Evidência para revisar |
|---|---|---|---|
| Força/RML/potência | Teste pertinente e domínio da tarefa | Carga, séries/reps realizadas, esforço, execução, dor e resposta; intenção/velocidade quando pertinente | Desempenho e tolerância; manter, adaptar ou rever ênfase com justificativa |
| Cardiorrespiratório | Teste e base de intensidade identificados | Modalidade, tempo/distância, FC/PSE, recuperação, sintomas e condição real | Comparação com proposta e tendência; distinguir falha de zona, execução e resposta |
| Flexibilidade/mobilidade | Alcance/amplitude pertinente | Tarefa, método, dose e tolerância; controle de movimento | Mesma medida/tarefa quando comparável e significado funcional |
| Postura/movimento/equilíbrio | Observação/teste contextualizados | Execução, apoios, assistência, sintomas e tarefa | Mudança funcional, não apenas foto ou cor de escore |
| Objetivo/composição/contexto | Meta acordada e método/contexto | Adesão, rotina, medidas pertinentes e mudanças de contexto | Reavaliar prioridade e plano sem impor metas corporais pela classificação |

As listas de controle são propostas de campos, não coleta já implantada. Na ACESSO, a estrutura da academia é o padrão informado pelo treinador; levantamento de equipamentos é relevante fora dela ou perante indisponibilidade concreta. Não exigir novo inventário nominal de aparelhos em cada atendimento.

Prioridade relatada: dor → assimetrias → objetivo → massa muscular/força → flexibilidade/postural. Registrar como orientação profissional em revisão, não algoritmo universal que rebaixa cardiorrespiratório/equilíbrio ou ignora contexto de segurança. Base técnica e trabalho direcionado podem coexistir. Não há sequência obrigatória força máxima → RML → potência nem veto genérico à potência por rótulo “iniciante”.

A rotina manual de encerramento continua em DEC-OP-001: completar o período, realizar backup antes da limpeza, renovar registros e data inicial. Não confundir os cinco blocos de montagem com toda a duração do macrociclo ou iniciar automação de renovação.

### 12.3 Fontes iniciais e limites

Esta revisão é dirigida às lacunas do mapa, não revisão sistemática própria nem validação completa dos protocolos ACESSO.

| Fonte | Acesso nesta etapa / contribuição limitada | O que não autoriza |
|---|---|---|
| [López-Miñarro et al., estudo de sit-and-reach](https://pubmed.ncbi.nlm.nih.gov/24150564/) | Resumo de estudo primário com universitários; alcance e posições precisam ser interpretados no teste específico | Validar automaticamente a caixa, norma, unidade ou execução local |
| [Tanaka et al., 2001](https://pubmed.ncbi.nlm.nih.gov/11153730/) | Resumo: equação populacional de FC máxima com validação laboratorial | Tratar FC predita como máxima individual medida ou escolher esta equação sem auditar a planilha |
| [Cole et al., 1999](https://pubmed.ncbi.nlm.nih.gov/10536127/) | Resumo: recuperação definida entre pico e um minuto em população encaminhada a teste clínico | Transportar corte prognóstico para R1/R2 sem tempo/condição confirmados ou diagnosticar aluno |
| [MedEOR — relação I:Q, 2023](https://medeor.cc/2023/05/02/relacao-isquiotibiais-quadriceps-o-que-e-e-qual-a-importancia/) | Página do fabricante consultada na etapa anterior; destaca dependência de posição/ângulo e faixa geral, distinta de mínimo universal | Aplicar 60% ou 45–60% como corte validado do nosso procedimento |
| [ACSM, 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/) | Texto consultado na revisão anterior: individualização e adaptação específica em adultos saudáveis | Prescrever a partir de rótulo de teste, extrapolar automaticamente a situações clínicas ou impor ordem única de capacidades |
| Aulas [28](https://www.youtube.com/watch?v=U61TNqeUuHo), [29](https://www.youtube.com/watch?v=PcmwT2OVRSM), [30](https://www.youtube.com/watch?v=6F5T_qEHLoI), [32](https://www.youtube.com/watch?v=CAlcQmvwQkw) e [33](https://www.youtube.com/watch?v=_AmEut4pqCU) | Fontes localizadas; sínteses do acervo usadas para roteamento, sem transcrição nova recuperada nesta etapa | Declarar minutagem, protocolo ou regra fielmente verificados na gravação |

Rubrica postural, aparelho baropodométrico e equações locais exigem identificação antes de buscar evidência de aplicabilidade específica. Não substituir esse trabalho pela validação de outro equipamento/escore.

### 12.4 Cardiorrespiratório — prática relatada

- Esteira, estágios de **1 minuto**, incremento de **1 km/h a cada estágio**.
- FC medida com cinta de frequência cardíaca; fabricante/modelo, configuração e instante de leitura não informados.
- PSE consultada em tabela mantida pelo professor responsável. O treinador confirmou **Borg 0–10**; manter essa denominação como relatada. A correspondência da tabela efetiva às instruções/âncoras da CR10 original ou a uma adaptação ainda precisa ser conferida; não confundir com Borg 6–20, RIR ou PSE global da sessão.
- Recuperação habitual relatada: **1 minuto ativo na esteira**, seguido de **1 minuto sentado fora da esteira**, com FC observada a cada minuto. O treinador confirmou **4,5 e 5 km/h como variantes aceitas na sua prática**. Guardar a velocidade efetivamente utilizada e o motivo/variante quando conhecido, sem tratar uma delas como erro automático ou presumir equivalência.
- Guardar FC ao encerrar o esforço, FC ao fim da etapa ativa e FC após a etapa sentada; guardar tempo real desde a interrupção e desde o início de cada condição, incluindo transição. Não presumir que “um minuto sentado” equivale exatamente a 120 s após o esforço se houve tempo para sair e sentar.
- Separar queda acumulada desde o fim do teste de queda apenas entre etapas. Cada derivado deve nomear os valores usados, a janela e a condição.
- Faltam velocidade inicial, aquecimento, inclinação, critério de término, edição/âncoras da tabela Borg e detalhes de aquisição. A progressão descrita não prova teste máximo nem identifica sozinha VO₂máx ou limiar fisiológico.

Distinguir esse relato de um protocolo universal ou de uma coleta histórica específica. A recuperação caminhando e a sentada não são intercambiáveis para normas ou comparação. O estudo primário de [Garcia et al., 2017](https://doi.org/10.1590/1517-869220172301161201), texto consultado, comparou recuperação ativa e passiva em 24 homens fisicamente ativos e encontrou diferenças de modulação autonômica. A amostra, condições e desfechos não validam os tempos/velocidades da rotina ACESSO nem fornecem corte individual de risco.

### 12.5 Flexibilidade — rotina e complemento

O treinador confirmou **Banco de Wells como rotina**. Outros protocolos são usados em situações selecionadas; informou recurso Sanny para auxiliar, mas não identificou modelo, tarefa ou protocolo. Não cadastrar automaticamente como flexímetro, goniômetro ou bateria angular aplicada a todos.

Registrar, quando um teste adicional for efetivamente escolhido: articulação/movimento, lado, ativo/passivo, instrumento/modelo, posição, amplitude/unidade, dor, tentativas e finalidade. Permanecem pendentes protocolo exato do Wells (zero/equipamento, aquecimento, execução, tentativas e resultado escolhido) e detalhamento dos testes adicionais.

Na planilha consultada, a tabela de Wells remete ao **Canadian Standardized Teste of Fitness (CSTF)**, grafia original. A referência foi localizada, mas edição, página e correspondência integral da tabela não foram verificadas. Existência da referência não aprova cada faixa.

### 12.6 Postura e adaptação

O treinador identifica **PSU**, fotografias frontal e lateral, referências verticais e horizontais e baropodometria complementar. Preservar a expressão original “linha alba vertical e horizontal” como relato; a interpretação de que seja grade, linha desenhada ou fio de prumo depende de confirmação, sem alterar silenciosamente a nomenclatura.

Na versão examinada, a aba **Tabela de Referencia** identifica “PSU - PORTLAND STATE UNIVERSITY”, com rótulos frontal/lateral. A aba **Imagens** contém quinze entradas (sete frontais, oito laterais), regiões e ICP. Duas entradas são explicitamente “Calcanhares (Baropodometria)” e “Pés (Baropodometria)”. Isso documenta a adaptação local observada; não demonstra equivalência dos dados baropodométricos com a pontuação visual original.

Foi consultada a descrição metodológica de [Santos et al., Fisioterapia Brasil, 2005, DOI 10.33233/fb.v6i5.2029](https://convergenceseditorial.com.br/index.php/fisioterapiabrasil/article/view/2029), inclusive o PDF da editora. O texto descreve observação subjetiva, escores 1/3/5, simetrógrafo e fio de prumo, e aponta dependência da experiência do avaliador. Sua descrição de método não equivale a estudo de validade diagnóstica, causalidade da dor ou benefício de “corrigir” cada achado. A postura no original inclui vista dorsal/lateral; o exemplar chama a primeira vista de frontal. Verificar a adaptação antes de rotular fidelidade integral ao original.

### 12.7 Localizadores e dependências do exemplar

Identidade, URL nominal, revisão e valores individuais ficam no registro operacional restrito de proveniência. A biblioteca guarda apenas alias, versão e localização estrutural; não confere universalidade a outras versões. Inspeção de valores/fórmulas, sem alteração:

| Localizador exato | O que foi observado | Consequência para o mapa |
|---|---|---|
| Tabela de Referencia!P1:S73 | Identificação PSU, vistas e rótulos regionais | Fonte de nomenclatura localizada; imagens/rubricas gráficas não foram extraídas integralmente pelo conector |
| Tabela de Referencia!B54:N54 | Atribuição CSTF para Wells | Fonte bibliográfica localizada, edição e fidelidade pendentes |
| Tabela de Referencia!B63:N63 | Atribuição Herdy & Caixeta, 2016 | Classificação de aptidão separada da equação de VO₂ |
| Metabólica!A16:H38 | Estágios, velocidade/inclinação, FC/PSE, recuperação e estado completo/interrompido | Linhas previstas sem FC não comprovam estágio realizado |
| Metabólica!C35 | Recuperação configurada em **4,5 km/h**, enquanto o treinador relatou **5 km/h** | Registrar variante por ocasião; não escolher/corrigir uma delas automaticamente |
| Metabólica!A35:A37 | Rótulos R1, R1 e R2 | Relato esclarece a sequência habitual, mas não prova qual linha foi usada para cada fase nas avaliações anteriores |
| Metabólica!E7/G7 | VO₂ do ramo “Fórmula” calculado a partir da velocidade e inclinação; há constantes/conversões a conferir | É saída estimada desse ramo, não medição direta de gases nem equação validada por esta leitura |
| Metabólica!F7/H7 | Colunas nomeadas “Ventilometria” contêm entradas manuais | Rótulo/entrada manual não comprova aparelho, gases, calibração ou protocolo; manter origem a confirmar |
| Metabólica!E43/G43 e E49:G50 | FC por reserva: FC repouso + percentual × (FC máxima no teste − FC repouso); D49=0,80 e D50=0,85 | Preservar fórmula e base; não chamar esse cálculo simplesmente de %FCmáx ou medida de %VO₂ |
| Metabólica!E8/G8; E65:H65 | Ramo por fórmula de “Limiar anaeróbico” aponta para FC calculada a **85% da reserva** e interpola velocidade entre estágios | Não declarar limiar ventilatório/lactato medido. A alternativa manual continua com procedência a conferir |
| Dados de Base!C9:E20 | Cabeçalho %VO₂Máx, mas FC calculada por reserva; coluna FC(15”) = FC(min)/4 | Divergência de semântica a reconciliar; FC(15”) é conversão calculada aqui, não nova coleta |
| Imagens!B11:E26 | Quinze itens por ocasião, valores de pontuação | Preservar itens e origem; falta validação completa das escolhas/ausências |
| Imagens!B28:E31 | Percentuais regionais com denominadores 25,15,15,20 | Regiões têm números diferentes de itens |
| Imagens!B32:E32 | ICP = média simples dos quatro percentuais regionais | Variante de agregação em relação ao total/75 descrito no artigo; não declarar equivalência |

**Duas fórmulas de ICP distintas:** o artigo descreve soma dos quinze escores / 75 × 100. A planilha observada usa média dos quatro percentuais regionais. Com quantidades diferentes de itens por região, essas expressões não são equivalentes em geral. Exemplo puramente sintético: percentuais regionais de 60,100,100,100 produzem média simples de 90%; com máximos de 25,15,15,20 pontos, o total/75 é 86,67%. Isso é uma conferência algébrica documental, não resultado de aluno ou teste do motor.

Não “consertar” o histórico nem selecionar fórmula vencedora silenciosamente. Identificar como ICP da versão local até decisão metodológica; qualquer revisão futura deve preservar fórmula/versão de cada resultado. Postura descritiva, força e outros resultados independentes não são descartados por uma pendência na agregação.

A tabela de aptidão cita [Herdy & Caixeta, 2016](https://pubmed.ncbi.nlm.nih.gov/27305285/), estudo primário com testes cardiopulmonares e VO₂ medido. Fonte e resumo consultados para identificar escopo, sem auditoria completa da transcrição de todas as faixas. Não presumir que essa referência valide a equação estimativa da planilha ou a aplicação da classificação a qualquer população.

### 12.8 Literatura — recuperação, percentuais e PSE

Revisão dirigida, não revisão sistemática própria. Foram confrontadas as sínteses do Caderno (aulas 23, 26, 29, 30 e princípios de individualidade/monitoramento) com fontes originais. Nenhuma minutagem nova foi verificada. A literatura abaixo é COMPLEMENTACAO_ACADEMICA e não fala atribuída ao professor.

| Fonte e acesso | Evidência pertinente | Limite e tradução para a Central |
|---|---|---|
| [Barak et al., 2011, PMID 24149885](https://www.jssm.org/volume10/iss2/cap/jssm-10-369.pdf), texto integral localizado | Em 40 homens analisados, protocolos de recuperação após cicloergômetro alteraram a queda da FC; atividade sentada apresentou recuperação mais lenta que repouso na mesma posição | Não valida exatamente a sequência esteira→cadeira ACESSO nem decide 4,5 contra 5 km/h; documentar condição, esforço prévio e janela |
| Garcia et al., 2017, já descrito em §12.4 | Comparação experimental de recuperação ativa/passiva evidencia efeito da condição de recuperação | Não usar “FC caiu menos” como pior condicionamento sem controlar o protocolo |
| [The accuracy of fixed intensity anchors to estimate lactate thresholds in recreational runners, 2025, DOI 10.1007/s00421-025-05748-8](https://pmc.ncbi.nlm.nih.gov/articles/PMC12354492/), texto consultado | Estudo com 165 corredores, LT1/LT2 por lactato: média de LT2 em 87,0 ± 3,4% da reserva de FC, com variação individual e erro das estimativas fixas | Proximidade da média dá plausibilidade à referência de 85% nessa população, sem identificar o limiar do aluno. RPE do estudo é 6–20: não transferir números para Borg 0–10 |
| [Azevedo et al., 2011, PMID 21360401](https://pubmed.ncbi.nlm.nih.gov/21360401/), resumo consultado | Estudo de intensidade com 210 homens treinados; limiar ventilatório e compensação respiratória analisados em bases relativas distintas | Não generalizar população treinada a toda carteira nem equiparar automaticamente conceitos de limiar |
| [Borg, 1982, PMID 7154893](https://pubmed.ncbi.nlm.nih.gov/7154893/), resumo localizado | Fundamentação psicofísica da percepção de esforço como informação complementar | Não derivar FC, VO₂, diagnóstico ou limiar apenas de uma nota; não foi recuperada nova validação da tabela local |
| [BorgPerception — administração das escalas](https://borgperception.se/scale-administration/), orientação oficial consultada | Instrução e familiarização precedem a nota; importa qual sensação está sendo avaliada e o momento de coleta | Guardar escala/versão, pergunta e momento. CR10 original é contínua e admite decimais/valores excepcionais acima de 10; não impor arredondamento ou rejeição universal pelo rótulo coloquial 0–10 |

**Síntese de uso proposta:**
1. 4,5 e 5 km/h ficam como variantes reconhecidas pelo treinador. Nenhum “red flag” apenas por uma das velocidades. Uma comparação longitudinal que depende de recuperação exige revisar velocidade, inclinação, esforço anterior, tempos e posição. Mesma pessoa e mesmo equipamento não demonstram equivalência.
2. “85%” precisa declarar o denominador: FC máxima, reserva de FC, VO₂ ou outra base. A fórmula encontrada usa **reserva de FC**, com FC máxima observada no teste como entrada; ela não mede limiar.
3. Exemplo sintético: FC de repouso 60 e FC máxima 180 resultam em 162 bpm a 85% da reserva e 153 bpm a 85% da máxima. Não converter bases silenciosamente.
4. O treinador considera o limiar individual e usa os 85% como proximidade prática. Registrar isso como heurística profissional, não regra universal aprovada. Identificar qual fenômeno está sendo estimado: LT1, LT2, VT1, VT2 ou ponto definido pelo software; não assumir que todo rótulo “anaeróbico” é o mesmo.
5. Borg durante um estágio, Borg global da sessão e RIR de uma série são registros distintos. FC e PSE se complementam; não atribuir automaticamente um valor Borg a um percentual de FC ou confirmar limiar por uma única nota.
6. Não apagar leituras independentes devido a equação, escala ou norma ainda não reconciliada.

### 12.9 Fitcheck — fonte operacional específica

**Equipamento informado pelo treinador:** Fitcheck, Ímpeto. Essa confirmação identifica a prática atual; modelo, unidade, versão do aplicativo e associação de cada resultado histórico ainda devem acompanhar a ocasião.

**Manual do fabricante:** [Manual de uso Fitcheck](https://impeto.me/manual-de-uso/), revisão interna indicada 13/03/2024, consultado em 20/10/2026. Descreve ventilação e FC durante teste, registro de PSE por estágio, auxílio visual VE Power e sugestão algorítmica de um ponto de limiar revisável pelo avaliador. Orienta recuperação de dois minutos e cita retorno a 5 km/h na esteira; o trecho não especifica a sequência de um minuto caminhando e um sentado. São referência do equipamento e prática local a distinguir, sem alterar a rotina por inferência.

**Evidência do equipamento:** [Andrade et al., “Validação do analisador ventilométrico portátil Fitcheck”, anais de 2022, pp123–130](https://euacademic.org/UploadArticle/5565.pdf#page=123), texto consultado. Estudo de bancada com seringa automatizada, desenvolvido em parceria com o fabricante, avalia volumes/fluxos ventilatórios. Não é demonstração de exatidão do VO₂, de zonas ou do limiar em seres humanos. Não extrapolar a concordância de volume para todos os indicadores.

Foi localizado também o [desenho de estudo de comparação Fitcheck/TCPE, JCBS 2024](https://www.jcbs.periodikos.com.br/article/676486faa9539560344232c7/pdf/jcbs-9-2-43.pdf). O texto indexado descreve inclusão futura e resultados esperados, não resultados concluídos; o acesso direto ao PDF falhou. Não contabilizá-lo como validação clínica realizada. A busca dirigida não é exaustiva nem prova inexistência de outros estudos.

**VO₂:** usar máscara e medir ventilação não demonstra análise direta do consumo de oxigênio. As fontes técnicas consultadas descrevem aquisição ventilatória; não confirmam análise de frações de O₂/CO₂ ou a equação do VO₂ da unidade local. Preservar o rótulo original e classificar a natureza do VO₂ como **origem/estimativa a confirmar**, sem promovê-lo a MEDIDO_DIRETO. O ramo por fórmula da planilha continua estimativa independente. Não copiar marketing “padrão ouro” como classificação científica.

**Relatórios Fitcheck já fornecidos:** EX-FIT-01 e EX-FIT-02, localizadores de campos nas páginas 40–41 e 24–25 dos respectivos PDFs de origem; identidade/path/hash pertencem ao registro restrito. Não reproduzir nomes ou resultados na biblioteca.

| Campo encontrado | Registro e interpretação de origem | Limite antes do uso dependente |
|---|---|---|
| FC Limiar; Carga Limiar; instante “Ponto de limiar” | Ponto do relatório Fitcheck, associado a curva e instante | Guardar se sugestão do software ou seleção profissional e sua revisão; não rebatizar como 85% da reserva |
| Curvas de ventilação, FC e carga | Séries/leituras do relatório; unidades distintas | Preferir exportação tabular, verificar qualidade/tempos; imagem não fornece todas as amostras nem comprova máximos fisiológicos |
| VO₂ Máx., VE Máx., FC Máx., VAM e Carga Máx. | Saídas distintas do aparelho/software | Não equiparar ventilação, VO₂, VAM e última carga; dependências/algoritmos de cada saída a confirmar |
| Zonas de treino em BPM | Nos dois exemplos, a coluna 100% coincide com a FC Limiar | É observação dos exemplos, não auditoria do algoritmo. Base diverge da reserva de FC da planilha; guardar separadamente |
| Recuperação em 5–60 s e cores | Derivados do software com valores negativos nos exemplos | Preservar sinal; identificar FC de referência, relógio, condição ativa/passiva e norma de cores. Queda canônica positiva exige conversão explicitada |
| Velocidades e pace | Saídas para treinamento apresentadas em tabela própria | Conferir referência, fórmulas e arredondamento; não inferir equivalência de percentuais entre tabelas ou versões |
| Data e cabeçalho | Fonte e ocasião do relatório | Conferir separadamente coleta/exportação; exemplos não completam campos de outros alunos |

A evidência e os relatórios do Fitcheck entram como fonte específica da avaliação pertinente. O dado do aparelho, sua interpretação pelo professor e a fórmula da planilha precisam continuar distinguíveis. Não substituir resultado existente por nova estimativa de 85%, nem tratar a exportação como automaticamente validada.

### 12.10 Síntese e verificações candidatas

| Questão | Posição consolidada nesta rodada |
|---|---|
| Recuperação a 4,5 ou 5 km/h | Ambas aceitas na prática informada; registrar qual foi realizada e revisar comparabilidade |
| PSE | Borg 0–10 confirmada pelo treinador; tabela/âncoras e instrução local ainda a conferir |
| 85% da reserva de FC | Heurística/estimativa identificada; plausibilidade em populações estudadas não substitui limiar individual |
| Ponto de limiar Fitcheck | Fonte própria, revisável pelo profissional; não fundir com percentual fixo |
| VO₂ Fitcheck | Origem e algoritmo pendentes antes de declarar medição direta; manter valor original |
| PSU | Variante de agregação documentada; decisão técnica pendente, sem exigir resposta que o treinador não tem |
| Aula do professor | Acervo preliminar orienta a busca; trechos não conferidos continuam pendentes |
| Automação | Nenhuma instalada; critérios ainda são documentais |

Casos incorporados ao catálogo TEST-001 §15 como expectativas não executadas contra motor:
- Dois testes com velocidades de recuperação diferentes: preservar ambos e revisar a comparação, sem reprovação automática da medida.
- Mesmo valor percentual com base FCmáx/reserva: produzir alvos distintos e impedir troca silenciosa da base.
- Fitcheck com FC de limiar e planilha com estimativa discordante: mostrar duas fontes e solicitar decisão fundamentada, sem sobrescrita.
- Borg de estágio versus sessão versus RIR: campos distintos; ausência de uma modalidade não invalida outra.
- Relatório com valor negativo de recuperação: preservar sinal e reconstruir cálculo antes de harmonizar.
- Máscara/ventilação com VO₂ exibido: não concluir VO₂ diretamente medido sem evidência de método.
- ICP por média regional versus soma/75: manter fórmula/versão e não apresentar como mudança postural se mudou apenas o cálculo.

Registro histórico: v0.4 reuniu confirmação de prática, pesquisa dirigida e Fitcheck; não instalou automação.

## 13. Histórico de consolidação

v0.1–0.4: contrato, inventário integrado, prática local, fontes e Fitcheck. A versão 0.4 permanece no arquivo local e nas revisões do Drive.
v0.5 — 20/10/2026: reorganiza a posição atual sem perguntas já respondidas; integra MET-003, DEC-OP-001, DIC/TEST e CAS-001. Demonstração documental e aritmética, sem motor ou aprovação profissional. Nenhuma fonte operacional alterada.
