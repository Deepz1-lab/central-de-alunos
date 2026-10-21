---
id: AV-003
titulo: "Contrato entre avaliação, decisão e prescrição"
versao: "0.1"
data: "2026-10-20"
estado: "CONTRATO_DOCUMENTAL_COM_MAPEAMENTOS_PENDENTES"
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

**Estado neste documento:** nenhum endereço de célula, fórmula real ou protocolo de equipamento foi conferido novamente; mapeamento físico completo PENDENTE. Este contrato não autoriza escrita na fonte.

## 4. Cobertura e lacunas de avaliação

AV-001 reúne 11 procedimentos; AV-002 esclarece a ultrassonografia. DIC-001 mantém 24 registros: 23 famílias de indicadores e DIC-23 de contexto/objetivos. Procedimento e família de indicador não são contagens intercambiáveis.

| Domínio | Ligação existente | Pendente antes de habilitar decisão automática dependente |
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
| Mapa por versão de fonte e indicador | Localizador observado + unidade + protocolo + dependências + revisor | PENDENTE |
| Fontes da primeira família de decisões | Trechos de aula conferidos e avaliação acadêmica específica por regra | PENDENTE |
| Regras prioridade→dose e conflitos | Parâmetros justificados, alternativas e escopo de aprovação | PENDENTE |
| Biblioteca de exercícios/viabilidade | Inventário observado e critérios de substituição/duração | PENDENTE |
| Fixtures e oráculos de decisão | Cenários típicos, atípicos, limítrofes, ausentes e mudança de contexto | PENDENTE |
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
