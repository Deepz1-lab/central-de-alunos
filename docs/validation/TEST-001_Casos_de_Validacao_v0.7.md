---
id: TEST-001
titulo: "Casos de Validação da Auditoria e do Dicionário — Central de Alunos"
versao: "0.7"
data: "2026-10-20"
estado: "EXECUCAO_PARCIAL_EM_PROTOTIPO_LOCAL"
implementacao: "Protótipo local sintético; sem integração ou alteração de arquivos operacionais"
privacidade: "Fixtures e valores sintéticos; nenhum registro individual reproduzido"
fontes_base: ["VAL-001 v0.3", "DIC-001 v0.5", "AV-003 v0.6", "CAS-001 v0.2", "FLX-001 v0.4", "CENTRAL-001 v0.5", "ACESSO-001 v0.3"]
---

# TEST-001 — Casos de Validação v0.7

## 1. Finalidade e limites

Este documento converte regras e definições preliminares de [VAL-001 — Auditoria de Laudos](https://drive.google.com/file/d/1zx1tiqjgI56zwWXif82ZuCy1WdZrNHhx/view) e [DIC-001 — Indicadores e Protocolos](https://drive.google.com/file/d/1Y9JXywjBewjfR-14Q4n6gkiCILun_88D/view) em cenários reproduzíveis para revisão metodológica. Os casos definem **o comportamento esperado** de uma conferência humana e de uma futura ferramenta em modo de teste.

Os casos abaixo são especificações, não resultados de execução, e não pretendem cobrir todos os erros possíveis. Três avaliações de referência ajudaram a identificar classes de falha; não são casos canônicos nem verdade universal. As regras devem valer pelo critério verificável e pela proveniência, não pela semelhança com aquelas pessoas. Todos os valores deste catálogo são sintéticos e não reproduzem resultados individuais. Na elaboração inicial do catálogo nenhum aplicativo ou código havia sido testado; a execução seletiva posterior está registrada na seção 13; nenhum laudo, planilha, Apps Script, prescrição, cadastro, gatilho, automação ou backup existente foi alterado. Concluir estes testes não valida equipamentos, equações reais das planilhas, protocolos ainda não identificados, diagnóstico nem intervenção.

As fichas ACESSO-028 a ACESSO-033 continuam preliminares. A expectativa de cada caso é marcada como `PROPOSTA_CENTRAL`; a coluna de proveniência também identifica quando uma aula ou fonte acadêmica é contexto, sem atribuir a elas uma regra que não foi verificada. Nenhuma regra deste catálogo está marcada `AULA_VERIFICADA`, pois a conferência direta dos vídeos está pendente.

## 2. Convenções de execução futura

### 2.1 Resultado por caso

| Resultado | Significado |
|---|---|
| `PASSOU` | Saída observada corresponde à expectativa e nenhuma falha proibida ocorreu |
| `FALHOU` | Saída diverge ou há uma falha proibida |
| `BLOQUEADO` | Dependência, protocolo ou critério de aprovação ainda não existe; não conta como aprovação |
| `NAO_EXECUTADO` | Documento especifica o caso; nenhum ambiente executável testou a regra |
| `NAO_APLICAVEL` | Caso fora do escopo da implementação avaliada, com justificativa e aprovador |

### 2.2 Registro obrigatório ao executar

Para cada execução registrar `test_id`, versão do TEST, versão do VAL/DIC e regra testada, ambiente e versão do código (se houver), fixture/hash, operador, data, resultado, saída literal, evidência, desvio, defeito relacionado, severidade_defeito prevista e observada; grau_impacto_VAL quando aplicável, responsável, ação corretiva, regressão e revisor independente. Valores de pessoas reais não entram na biblioteca pública de casos; se um caso real desidentificado for necessário, sua chave fica fora deste arquivo e a autorização de uso é verificada pelo responsável.

Cada rodada deve armazenar entradas e saídas esperadas sem modificar a fonte original. O teste de alteração posterior usa cópia/fixture isolada. Resultado `BLOQUEADO` deve explicitar o material em falta e não pode ser contado como `PASSOU`.

### 2.3 Escala de consequência

- **Crítica:** decisão calculada com identidade/unidade errada, uso de derivado sabidamente inválido, sugestão de risco/prescrição automática ou gravação/sobrescrita não autorizada.
- **Alta:** invalidar o laudo inteiro por erro pontual, confundir estimado/medido, comparar testes incomparáveis ou marcar dado ausente como válido.
- **Moderada:** classificação ou tendência indevida, erro de arredondamento/unidade, omissão de contexto que mude a interpretação.
- **Baixa:** metadado ou apresentação incompleta sem consequência analítica demonstrada.

Essa escala é a severidade máxima de defeito de software (`CRITICA`, `ALTA`, `MODERADA`, `BAIXA`), não é o grau de impacto VAL (`G0`–`G3`) nem gravidade clínica. Registrar ambos separadamente quando aplicáveis: `severidade_defeito` descreve o risco do defeito; `grau_impacto_VAL` descreve o impacto do achado no uso declarado.
Na tabela de casos, `Severidade máxima do defeito` corresponde a `severidade_defeito`. Os estados do dado seguem VAL-001 v0.2. `DEPENDENCIA_NAO_MAPEADA` é motivo de bloqueio, não estado de qualidade: usar o estado adequado (por exemplo, `CONTEXTO_INSUFICIENTE`) e registrar o motivo e a relação de dependência. `PASSOU`, `FALHOU`, `BLOQUEADO`, `NAO_EXECUTADO` e `NAO_APLICAVEL` descrevem execução de teste, não o dado.

## 3. Casos de integridade, proveniência e bloqueio localizado

| ID | Fixture sintética e disparador | Saída obrigatória | Falha proibida | Base | Natureza da expectativa | Severidade máxima do defeito |
|---|---|---|---|---|---|---|
| TC-01 — proveniência ausente | Campo “força 30” sem arquivo, avaliação, data ou unidade | Registrar recebimento sem conferência como `NAO_AUDITADO`; após constatar metadados necessários ausentes, registrar `CONTEXTO_INSUFICIENTE` no objeto/finalidade e derivados pertinentes, G2; identidade incerta recebe G3 para atribuição; pedir fonte e metadados | Marcar o dado ou derivado `VALIDADO` porque o número está visível | VAL-R01; VAL T25; DIC seção 3 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-02 — identidade ambígua | Dois anexos com mesmo nome abreviado e IDs distintos, vínculo não confirmado | Colocar só os anexos em revisão/quarentena; manter os demais registros vinculados com evidência | Combinar anexos por semelhança do nome ou bloquear a carteira inteira | VAL-R01; VAL T21 | `PROPOSTA_CENTRAL` | `CRITICA` |
| TC-03 — datas distintas | Massa 80 kg coletada em 01/05; exportação em 01/06; próxima revisão marcada 15/06 | Separar coleta, emissão e revisão; ordenar evolução por coleta confirmada | Tratar emissão ou próxima revisão como data de coleta | VAL-R02; DIC seção 3 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-04 — massa errada afeta dependentes | Massa confiável 80 kg; dinamometria mostra 60 kg por erro confirmado; D=30 kgf e E=27 kgf, protocolo idêntico | Bloquear IMC/força relativa derivados de 60 kg; manter força absoluta para revisão própria; assimetria candidata continua calculável se fórmula aprovada | Descartar todo o laudo ou recalcular em fonte operacional sem autorização | VAL-R03; VAL-E01; DIC-T01 | `PROPOSTA_CENTRAL` | `CRITICA` |
| TC-05 — massa divergente sem confirmação | Avaliações separadas registram 80 e 78 kg em datas diferentes | Pedir contexto/data; não classificar automaticamente como erro nem trocar pelo mais recente | Sobrepor uma ocasião à outra | VAL-R03; VAL T03 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-06 — peso em relatório de força difere do peso geral | Cabeçalho de dinamometria 60 kg; anamnese da mesma avaliação 80 kg; origem do conflito ainda não confirmada | Estado `INCONSISTENTE`, G2; suspender apenas derivados que usam a massa; manter força absoluta sob revisão própria; elevar para G3 somente se o uso decisório de entrada sabidamente errada for confirmado | Escolher uma fonte por padrão, invalidar a força absoluta sem dependência demonstrada ou liberar força relativa | VAL-R03; DIC-01/09/11 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-07 — zero sem proveniência | Campo peso 0,0 kg sem registro de pesagem | `SEM_DADO`; bloquear IMC, razões e projeções dependentes | Interpretar massa real igual a zero | VAL-R04; VAL T07; DIC-T04 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-08 — zero legítimo | Zero em variável que admite zero, com protocolo e resultado bruto confirmados (ex.: contagem de evento ausente em janela completa) | Manter zero medido e interpretar apenas conforme a definição | Converter todo zero do sistema em ausência | VAL-R04; VAL T08 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-09 — unidade incompatível | Estatura informada como 175 sem unidade; uma rotina supõe metros, outra centímetros | `CONTEXTO_INSUFICIENTE`; não calcular IMC até resolver unidade | Calcular valor extremo ou converter silenciosamente | VAL-R05; DIC-02/03 | `PROPOSTA_CENTRAL` | `CRITICA` |
| TC-10 — força e massa não são a mesma unidade | Resultado 30 kgf de dinamômetro chega a campo nomeado “kg” | Preservar rótulo bruto e sinalizar semântica ambígua; requer confirmar definição do campo | Tratar kgf como massa kg sem conversão/rotulagem | VAL-R05; DIC-09 | `PROPOSTA_CENTRAL` | `CRITICA` |
| TC-11 — protocolo incompleto | Dois valores D/E sem gesto, ângulo, posição ou tentativa | Manter descritivos com `CONTEXTO_INSUFICIENTE`; bloquear assimetria interpretativa/norma | Afirmar “lado fraco” ou tendência | VAL-R06; DIC-09/10 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-12 — método estimado confundido com medido | VO₂ gerado por equação é importado como medido diretamente | Preservar tipo `ESTIMADO`, equação e fonte; corrigir apenas classificação na fixture/saída de teste | Etiquetar como VO₂ direto | DIC-15; VAL-R10 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-45 — controle positivo de massa coerente | Massa da ocasião 80 kg aparece igual no registro antropométrico e no cabeçalho de dinamometria; unidade e identidade confirmadas | Não gerar alerta de divergência de massa; avaliar força absoluta pelos próprios requisitos de protocolo | Criar conflito por rotina ou tratar repetição do mesmo valor como prova de nova pesagem independente | VAL-R03; VAL T02; DIC-01/09 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-48 — gestos diferentes | Duas medidas D/E com posições/ângulos conhecidos, mas gestos ou protocolos diferentes | Guardar em séries distintas; comparação de delta `NAO_COMPARAVEL` até equivalência demonstrada | Fundir os valores porque têm mesmo nome de campo ou unidade | VAL-R06; VAL T12; DIC-09/10 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-49 — flexibilidade em versões diferentes | Duas medidas de alcance com nome semelhante, mas versão do teste, posição do zero ou protocolo diferentes | Preservar os brutos em séries distintas; comparação `NAO_COMPARAVEL` até equivalência justificada; classificação normativa permanece bloqueada sem população/referência | Combinar como evolução direta ou inferir encurtamento global | DIC-24; VAL-R06/R13 | `PROPOSTA_CENTRAL` | `ALTA` |

## 4. Casos de comparabilidade, contexto e objetivo

| ID | Fixture sintética e disparador | Saída obrigatória | Falha proibida | Base | Natureza da expectativa | Severidade máxima do defeito |
|---|---|---|---|---|---|---|
| TC-13 — contexto fisiológico entre ocasiões | Duas avaliações de composição corporal separadas por mudança fisiológica relevante, cronologia ou técnica incompleta | Preservar ambas as medidas; marcar a inferência longitudinal como `CONTEXTO_INSUFICIENTE` enquanto faltam dados e `NAO_COMPARAVEL` se a equivalência for julgada inadequada; não atribuir causa | Apagar medidas, inferir mudança causada pelo treino ou presumir que toda comparação é impossível | VAL-R07; VAL T04; DIC-06/07 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-14 — mesmo contexto após confirmação | Duas ocasiões com mesmo método/protocolo e contexto fisiológico documentado; revisor determina pergunta comparável | Permitir analisar diferença com incerteza/erro conhecidos; revisão profissional registrada | Bloquear permanentemente só por histórico anterior de gestação | VAL-R07; VAL T05 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-15 — objetivo em branco mas confirmado | Formulário vazio; objetivo informado pelo treinador na fixture: hipertrofia e qualidade de vida | Campo-fonte fica divergente; saída reconhece objetivo confirmado e solicita indicador/prioridade acordados | Dizer “sem objetivos” ou inferir emagrecimento como prioridade | VAL-R08; VAL A04; DIC-23 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-16 — objetivo não confirmado | Campo vazio; nenhum relato confirmado | `CONTEXTO_INSUFICIENTE`; pergunta neutra para definir demanda/objetivo; não inventar deficiência | Fabricar meta pelo laudo | VAL-R08; ACESSO-033 `AULA_SINTESE` | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-17 — método de composição mudou | Ocasião 1 por dobras, ocasião 2 por BIA | Manter séries separadas ou exigir equivalência demonstrada para pergunta específica | Plotar mudança como uma série comparável sem ressalva | VAL-R07; DIC-05/06 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-18 — teste interrompido | Teste sintético interrompido no estágio 5 por limitação técnica; FC por estágio disponível | Descrever dados observados e motivo; bloquear alegação de máximo/zonas definitivas dependentes | Declarar VO₂máx medido, piora ou aptidão clínica | VAL-R10; VAL A05; DIC-15/16 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-19 — teste completado | Protocolo completo e critérios preenchidos, método/saída ainda estimados | Status de conclusão pode ser registrado; tipo estimado continua explícito | Confundir conclusão completa com medição direta ou liberação clínica | VAL-R10; DIC-15 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-20 — data de exame versus exportação | Anexo emitido em data diferente da coleta; cabeçalho de outro módulo mostra terceira data | Guardar três datas e vínculo por modalidade; pedir reconciliação se ocasião incerta | Fundir dados por proximidade de data | VAL-R02; VAL A12 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-21 — repetição parcial versus completa | Avaliação anterior conta 7 repetições parciais + 23 completas; atual soma 30 sem critérios equivalentes | `NAO_COMPARAVEL` para delta até critério de amplitude ser reconciliado; preservar registros | Equiparar automaticamente 30 com 30 válidas ou inferir queda | VAL-R06; VAL A11; DIC-14 | `PROPOSTA_CENTRAL` | `ALTA` |

## 5. Casos de fórmulas e propagação

Os cálculos desta seção conferem identidades aritméticas com unidades sintéticas. Não provam a equação usada por equipamento ou planilha.

| ID | Entradas sintéticas | Resultado esperado | Falha proibida | Base | Natureza da expectativa | Severidade máxima do defeito |
|---|---|---|---|---|---|---|
| TC-22 — IMC válido | Massa 80 kg; estatura 2,00 m, mesma ocasião | IMC de conferência = 20 kg/m²; marcar como cálculo e manter componentes de origem | Usar peso de outra data sem indicação ou usar IMC isolado como medida de composição corporal | DIC-03; DIC-T02 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-23 — denominador zero ou dado ausente | Medida anterior igual a zero ou ausente em mudança relativa | Se anterior = 0, preservar as medidas e marcar a mudança relativa `NAO_APLICAVEL`/indefinida; se a medida anterior estiver ausente, marcar o derivado `SEM_DADO`. A diferença absoluta permanece disponível se ambas as medições existirem | Dividir por zero, publicar infinito ou fabricar 0% | VAL-R11; VAL T09 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-24 — pontos percentuais | Gordura 25% → 30% | Reportar +5 pontos percentuais e +20% relativo, com fórmula e contexto | Chamar 5 pontos de “5% relativo” | DIC-07; DIC T03 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-25 — assimetria candidata | D=30 kgf, E=27 kgf, fórmula `100×abs(D−E)/max(D,E)` aprovada na fixture | 10%; lado maior D; inverter lados mantém 10% e troca direção | Mudar magnitude com a ordem dos lados | VAL T10; DIC-10 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-26 — ambos os lados medidos como zero | D=0 e E=0, ambos confirmados como leituras válidas, fórmula candidata com denominador `max(D,E)` | Manter as duas leituras brutas como medidas; assimetria percentual indefinida por denominador zero; não classificar como simetria validada | Converter os zeros em ausência ou publicar assimetria de 0% | DIC-10 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-27 — independência de massa | Alterar massa 80→85 kg, mantendo D/E e fórmula de assimetria independente | Assimetria aritmética permanece idêntica; força relativa muda se usar a massa | Invalidar força absoluta/assimetria por massa sem dependência | VAL T11; DIC-11 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-28 — torque sem braço de alavanca | Campo de força presente, braço de alavanca ausente; torque exportado 0,0 Nm | Torque `CONTEXTO_INSUFICIENTE` com motivo de bloqueio `DEPENDENCIA_NAO_MAPEADA` (ou `SEM_DADO` se a origem confirmar placeholder/ausência); força permanece sob revisão | Interpretar torque fisiológico igual a zero | VAL-R04/R09; DIC-12 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-29 — 1RM previsto e medido | Uma saída estimada por repetições e outra medida no exercício específico | Guardar como tipos diferentes; sem comparação direta sem equivalência justificada | Chamar estimativa de teste direto ou transferir para outro aparelho | VAL-R09; DIC-13 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-30 — carga de máquina não transfere | Dinamômetro registra kgf; rotina tenta gravar o mesmo número como carga de leg press | Bloquear transferência e solicitar teste/carga do exercício específico | Emitir prescrição validada pela conversão direta | VAL-R09; DIC-09/13 | `PROPOSTA_CENTRAL` | `CRITICA` |
| TC-31 — pace | Velocidade 10 km/h | Conversão matemática 6:00 min/km | Confundir minutos decimais com segundos em outras velocidades (ex.: 10,5 km/h ≈ 5:43 min/km), ou aplicar à velocidade de limiar sem fonte | DIC-18 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-32 — recuperação FC janela | FC pico pós-protocolo=160 bpm; FC aos 30 s=132 bpm; aos 60 s=120 bpm; mesma ocasião, recuperação passiva sentada; regra `FC pico − FC na janela` | Quedas de 28 bpm aos 30 s e 40 bpm aos 60 s; registrar postura, protocolo e janelas separadas | Comparar 30 s contra 60 s, misturar posturas/ocasiões ou inverter sinal sem declarar convenção | VAL-R10; DIC-17 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-33 — base de zonas | Limiar FC 160 bpm e porcentagens indicadas em relação ao limiar | Identificar base como `%FC_limiar`, conservar equação/versão e rótulos | Apresentar percentuais como `%FCmax` | VAL A06; DIC-16 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-34 — totais energéticos incompatíveis | Necessidade 2.000 kcal; aporte 2.300; campo de diferença marca +5% | Conferência aponta +300 kcal e +15%; marcar conflito e suspender saídas dependentes | Aprovar percentual e total simultaneamente ou gerar prescrição | VAL A07; DIC-20 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-35 — macroenergia | Proteína 100 g, carboidrato 200 g, lipídio 50 g; identidade convencional 4/4/9 | Conferência contábil = 1.650 kcal antes de regras adicionais; exigir o modelo do sistema para aceitar total divergente | Tratar aproximação de macros como gasto individual comprovado | DIC-20 | `PROPOSTA_CENTRAL` | `MODERADA` |
| TC-36 — arredondamento exibido | Percentuais de refeições 33,3%, 33,3%, 33,3% | Registrar soma 99,9% como compatível com arredondamento de exibição, se precisão e regra confirmarem | Criar alerta crítico sem efeito ou alterar percentuais para 100% silenciosamente | VAL-R11; VAL T17 | `PROPOSTA_CENTRAL` | `BAIXA` |
| TC-46 — IMC não é composição corporal | IMC calculado de 20 kg/m², sem medidas independentes de adiposidade/composição | Exibir apenas como índice calculado, com limites de interpretação; marcar composição corporal como não avaliada se não houver outra medida | Classificar gordura/músculo ou definir meta de treino usando IMC como substituto da composição corporal | DIC-03; DIC-T02 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-47 — um lado ausente | D medido=30 kgf; E ausente/ilegível; protocolo do lado D identificado | Preservar D como leitura individual sob revisão; assimetria `SEM_DADO` por falta do par | Substituir lado ausente por zero ou publicar assimetria | VAL-R04/R06; DIC-10 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-57 — zeros calculados e domínio da fórmula | Fixtures sintéticas: delta entre massas 80 e 80; assimetria de lados 30 e 30 com equação explicitamente aprovada e denominador positivo; mesma equação com denominador zero; zero padrão sem coleta | Preservar delta 0 e assimetria 0% nos dois primeiros cenários sem concluir ausência; conferir demais requisitos antes de VALIDADO; denominador zero não produz 0%, bloqueia somente o derivado com motivo explícito; zero padrão sem coleta é SEM_DADO | Apagar zeros legítimos, gerar 0% por divisão por zero, validar só por plausibilidade ou invalidar entradas independentes | VAL-R04/R11; AV-003 §§5 e 9; DIC dependências | PROPOSTA_CENTRAL | ALTA |

## 6. Casos de baropodometria, postura e saídas compostas

| ID | Fixture sintética e disparador | Saída obrigatória | Falha proibida | Base | Natureza da expectativa | Severidade máxima do defeito |
|---|---|---|---|---|---|---|
| TC-37 — peso zero em cabeçalho baropodométrico | Campo peso 0,0 kg; mapa de pressão presente; dependência do algoritmo desconhecida | Campo de peso `SEM_DADO`; manter mapa bruto como `NAO_AUDITADO`; métricas normalizadas por peso ficam `CONTEXTO_INSUFICIENTE`, com motivo `DEPENDENCIA_NAO_MAPEADA`, e bloqueadas | Invalidar mapa bruto inteiro sem verificar ou liberar métrica normalizada sem conhecer o processamento | VAL-R03/R04; VAL T20; DIC-21 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-38 — independência do sensor demonstrada | Manual da fixture confirma pressão medida independentemente do campo de massa | Preservar canal bruto de pressão; bloquear somente métricas que usem peso | Propagar erro da massa a toda medição sem evidência | VAL-R03; DIC-21 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-39 — assimetria plantar isolada | Distribuição sintética 60/40 em condição estática | Descrever a condição de coleta; perguntar relevância funcional/contexto | Diagnosticar causa, queda ou exigir meta universal 50/50 | VAL-R12; ACESSO-032 `AULA_SINTESE` | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-40 — postura observada | Escore sintético muda 70→60; sem protocolo, queixa ou tarefa associados | `CONTEXTO_INSUFICIENTE`; manter escore por ocasião e pedir método | Concluir causa de dor, diagnóstico ou correção necessária | VAL-R12; DIC-22 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-41 — plano versus execução | PDF contém meta/treino planejado sem registro de sessão | Estado permanece planejamento; pedir reconciliação de execução | Declarar sessão realizada, adesão ou resposta | VAL-R14; VAL T24; DIC-23 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-42 — classificação sem referência | Rótulo “fraco” aparece sem norma, população ou versão de teste | Preservar como rótulo da fonte (`CLASSIFICACAO_SOFTWARE`), marcar pendente e não usar como diagnóstico | Reproduzir rótulo como verdade universal | VAL-R13; DIC-23 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-43 — entrada alterada após validação | Massa foi alterada na fixture; IMC e força relativa tinham aprovação anterior | Invalidar/revisar apenas descendentes; preservar histórico e validação da versão antiga | Manter selo antigo em resultados recalculados | VAL-R11; VAL T23; DIC seção 7 | `PROPOSTA_CENTRAL` | `ALTA` |
| TC-44 — ausência de evidência clínica | Questionário sem resposta legível para um fator, nenhum documento adicional | Marcar ausência/pendência e encaminhar conforme protocolo profissional; não inferir “não” | Converter célula vazia em resposta negativa ou liberação clínica | VAL-R04; DIC-19 | `PROPOSTA_CENTRAL` | `CRITICA` |
| TC-50 — barreira humana de segurança no fluxo | No fluxo FLX, triagem não respondida/pendente ou decisão profissional ausente; há documentos históricos independentes para auditoria | Não avançar para teste ou esforço que dependa da prontidão; preservar auditoria documental independente; exigir decisão registrada pelo treinador conforme protocolo aprovado. Adaptação só se aplica à tarefa explicitamente aprovada pelo treinador | Sistema declarar “liberado”, aplicar limiar próprio, inferir resposta negativa do campo vazio ou bloquear todo dado independente | FLX-001 seção 8; VAL-R04/R10 | `PROPOSTA_CENTRAL` | `CRITICA` |

### 6.1 Casos do fluxo inicial, acesso e correção

Os casos abaixo derivam dos requisitos ACESSO-001 v0.2. São expectativas sintéticas de especificação. A execução seletiva com autenticação, armazenamento e autorização locais está registrada na seção 13; os demais cenários permanecem não executados.

| ID | Fixture sintética e disparador | Saída obrigatória | Falha proibida | Base | Natureza da expectativa | Severidade máxima do defeito |
|---|---|---|---|---|---|---|
| TC-51 — acesso cruzado por identificador | Aluno A autenticado tenta consultar, pesquisar ou exportar registro sintético do aluno B por rota direta ou troca de ID | Servidor nega; resposta não revela conteúdo nem metadados sensíveis; tentativa relevante fica registrada sem dados desnecessários | Confiar na tela/ocultação visual ou retornar qualquer campo de B | ACESSO-001 v0.2 §§4.1, 9, 10 A11 | PROPOSTA_CENTRAL | CRITICA |
| TC-52 — vínculo encerrado | Conta/aluno sintético teve vínculo com a carteira suspenso ou encerrado e tenta abrir link anterior | Negar novas consultas conforme regra de retenção definida; preservar histórico sob controle do treinador e registrar a decisão | Usar URL salva como autorização ou apagar histórico automaticamente | ACESSO-001 v0.2 §§4.1, 9, 10 A12 | PROPOSTA_CENTRAL | CRITICA |
| TC-53 — correção pendente | Aluno solicita alteração de objetivo ou dado; treinador ainda não revisou | Criar solicitação com autor/data; conservar valor corrente e apresentação já aprovada até decisão | Substituir campo original ou atualizar derivados antes da revisão | ACESSO-001 v0.2 §§5, 8 RF-13, 10 A13 | PROPOSTA_CENTRAL | ALTA |
| TC-54 — correção aprovada com dependentes | Treinador aceita correção sintética de entrada que alimenta um cálculo | Criar versão nova ligada à antiga; marcar somente dependentes para recálculo/revisão; manter histórico de decisão e publicação anterior | Sobrescrever entrada, preservar validação obsoleta em derivado ou alterar a decisão histórica silenciosamente | ACESSO-001 v0.2 §§5, 8 RF-13, 10 A14; VAL-R11 | PROPOSTA_CENTRAL | ALTA |
| TC-55 — aprovado sem publicação | Treinador aprova um resumo sintético, mas não executa a ação de liberar | Aluno não vê o conteúdo; treinador vê estado aprovado e não liberado | Inferir publicação a partir da aprovação | ACESSO-001 v0.2 §§4.1, 7, 10 A15 | PROPOSTA_CENTRAL | ALTA |
| TC-56 — fluxo mínimo treinador-aluno | Fixture sintética percorre cadastro mínimo, objetivo do aluno, revisão do treinador, liberação do resumo e pedido de correção | Concluir sem dado de saúde, duplicação ou prescrição; registrar cada responsável e mudança; só aluno vinculado consulta o resumo liberado | Misturar objetivo relatado com objetivo confirmado, coletar dado fora do escopo ou permitir acesso cruzado | ACESSO-001 v0.2 §§6.1, 8 RF-04/RF-07/RF-15, 10 A16 | PROPOSTA_CENTRAL | ALTA |

## 7. Cobertura e relação com VAL/DIC

| Área | Casos | Regras/fontes cobertas |
|---|---|---|
| Origem, identidade, tempo e estados | TC-01–03, TC-20 | VAL-R01/R02; esquema de registro DIC |
| Massa, unidades, ausência e propagação | TC-04–10, TC-22–23, TC-26–28, TC-45–47 | VAL-R03/R04/R05/R11; DIC-01–03/09–11 |
| Protocolos e comparação | TC-11–21, TC-29, TC-32–33, TC-48–49 | VAL-R06/R07/R08/R09/R10; DIC-04–19, DIC-24 |
| Fórmulas/estimativas | TC-22–36, TC-46–47 | VAL-R09/R11; DIC-03/07/10–20 |
| Pressão, postura e execução | TC-37–44 | VAL-R12/R13/R14; DIC-19–23 |
| Segurança e prontidão do fluxo | TC-50 | FLX-001 v0.3; VAL-R04/R10 |
| Acesso, vínculo e exposição cruzada | TC-51–52 | ACESSO-001 v0.2 §§4.1, 9–10 |
| Correção versionada e publicação | TC-53–55 | ACESSO-001 v0.2 §§5, 7–8, 10 |
| Fluxo inicial treinador-aluno | TC-56 | ACESSO-001 v0.2 §6.1 |

O rastreio abaixo liga cada teste de origem a pelo menos um caso deste catálogo; a cobertura semântica pode ser ampliada e não prova exaustividade.

| Fonte | Caso(s) TEST-001 |
|---|---|
| VAL T01–T05 | TC-04; TC-45; TC-05; TC-13; TC-14 |
| VAL T06–T10 | TC-15; TC-07; TC-08; TC-23; TC-25 |
| VAL T11–T15 | TC-27; TC-48; TC-30; TC-18/19; TC-32 |
| VAL T16–T20 | TC-34; TC-36; TC-24; TC-31; TC-37/38 |
| VAL T21–T25 | TC-02; TC-21; TC-43; TC-41; TC-01 |
| DIC-T01–T06 | TC-04; TC-22/46; TC-24; TC-07; TC-18/19; TC-31 |
| DIC-24 — flexibilidade | TC-49 |

**Total especificado atual:** 57 casos. O estado inicial era `NAO_EXECUTADO` para todos; os resultados atuais e limites da execução seletiva estão na seção 13. Cada expectativa está etiquetada `PROPOSTA_CENTRAL`; menções a aulas e literatura são contexto, salvo quando a origem é explicitamente marcada. Não há regra `AULA_VERIFICADA` neste documento.

## 8. Critérios de aceitação propostos

Antes de considerar os casos aprovados para um protótipo em modo sombra:

- [ ] O treinador aprova finalidade, nomes de estado, gravidade, alcance dos bloqueios e saída esperada dos casos.
- [ ] Severidade máxima do defeito está definida por caso; nenhum caso crítico/alto obrigatório permanece `BLOQUEADO` ao aprovar a versão para o escopo declarado. Casos excluídos exigem justificativa de escopo e aprovador.
- [ ] Todo caso dentro do escopo declarado é executado; `NAO_APLICAVEL` exige justificativa, responsável e aprovação, e não conta como aprovação automática.
- [ ] As equações do equipamento/planilha a testar foram identificadas e versionadas; candidatos matemáticos deste TEST não são tratados como fórmula ACESSO sem evidência.
- [ ] Fixtures são sintéticas ou adequadamente autorizadas/desidentificadas; sem chaves, documentos, links de arquivos individuais ou dados pessoais em resultados públicos.
- [ ] Cada caso obrigatório é executado pelo menos uma vez em fixture isolada, com versão, entrada, saída e revisor registrados.
- [ ] Todos os casos críticos/altos passam; caso bloqueado recebe dependência concreta, responsável e critério de desbloqueio, sem contar como aprovado.
- [ ] Casos negativos demonstram que dado bloqueado não chega a recomendação/derivado sem ressalva e aprovação necessárias.
- [ ] Controles positivos demonstram que dados coerentes não geram alerta falso; zeros medidos, dados ausentes e protocolos diferentes são tratados como condições distintas.
- [ ] Casos confirmam que inconsistência pontual não invalida canais realmente independentes e que dependência desconhecida não é suposta.
- [ ] Diferença entre ocasiões não é descrita como adaptação real sem confiabilidade/erro do método e contexto suficientes; resultado de auditoria não equivale a diagnóstico, liberação clínica ou prescrição de treino.
- [ ] Regressão é executada após cada mudança de regra, fórmula, protocolo ou mapeamento de campo.
- [ ] Falsos positivos, omissões e limitações são documentados; o treinador aprova a interpretação profissional separadamente da execução técnica.
- [ ] TC-51 e TC-52 são verificados no servidor/fonte de dados, inclusive por acesso direto e alteração de identificador; teste apenas visual não atende.
- [ ] TC-53 e TC-54 comprovam histórico de correção e invalidação seletiva de dependentes; TC-55 comprova que aprovação não publica por si só.
- [ ] TC-56 percorre somente o recorte da seção 6.1 do ACESSO-001, com fixture sintética e sem coleta de saúde ou prescrição.

Cobertura de 57 casos não demonstra validade universal ou segurança clínica. O catálogo é uma amostra de riscos conhecidos e deve receber novos casos quando surgirem classes de falha, formatos, equipamentos ou protocolos diferentes. Regras que não estão maduras, fórmulas não mapeadas ou conteúdo de aula ainda não verificado permanecem fora de produção.

## 9. Ficha de execução para cada caso

Duplicar este bloco numa cópia de trabalho por rodada; não registrar execução dentro da versão de especificação aprovada sem controle de versão.

```text
test_id:
TEST-001 versao:
VAL-001 versao / regra_id:
DIC-001 versao / indicador_id:
ambiente / build:
fixture_id / hash:
executor / data:
entrada observada:
saida esperada:
saida observada:
resultado: NAO_EXECUTADO | PASSOU | FALHOU | BLOQUEADO | NAO_APLICAVEL
falha proibida ocorreu?:
evidencia / link controlado:
se FALHOU ou BLOQUEADO: defeito/dependencia, severidade_defeito, grau_impacto_VAL quando aplicavel, responsavel, criterio de resolucao:
revisor independente / data:
regressao relacionada:
```

## 10. Separação metodológica e decisões pendentes

- **Metodologia das aulas:** fichas 028–033 situam temas como composição corporal, flexibilidade, cardiorrespiratório, força, baropodometria e planejamento. Revisão dos vídeos e minutagem verificável continuam pendentes para qualquer afirmação direta `AULA_VERIFICADA`.
- **Complementação acadêmica:** referências do EVID-INDEX e revisões citadas no DIC ajudam a questionar generalizações; não estabelecem fórmula de equipamento nem regra universal para os casos sintéticos.
- **Proposta nossa:** fixtures, estados esperados, bloqueios localizados e critérios de aceitação foram redigidos pela Central para tornar a qualidade auditável. Dependem de revisão/aprovação do treinador antes de promover qualquer regra.

Questões ainda sem resposta que podem bloquear execução técnica: fórmula de assimetria efetiva do dispositivo; como massa é usada em resultados específicos; origem do torque zero e dos 1RM sugeridos; algoritmo de composição; critério do VO₂/limiar e zonas; fórmula de energia e arredondamentos; se o peso no cabeçalho baropodométrico entra no processamento. Nos casos correspondentes, o resultado esperado é identificar a dependência como desconhecida e bloquear o uso dependente, sem inventar uma resposta.

## 11. Próximo passo — registro histórico, superado pela posição do §15

Os casos TC-51–56 alinham o fluxo inicial e os requisitos de acesso/correção do ACESSO-001 v0.2. A próxima etapa documental é preparar um plano técnico restrito a TC-51–56 e ao fluxo ACESSO-001 §6.1, usando fixtures sintéticas. O plano não autoriza dados reais, escrita nos arquivos operacionais, implantação, integrações, gatilhos, agendas ou automações. O ambiente técnico local foi criado e a execução seletiva autorizada ocorreu conforme seção 13. Os casos fora desse recorte continuam `NAO_EXECUTADO`.

## 12. Registro de versão

v0.1 — 19/10/2026: catálogo documental inicial de 44 casos sintéticos derivados de VAL-001 e DIC-001. Nenhum caso foi executado contra software.

v0.2 — 19/10/2026: revisão com rastreabilidade VAL/DIC explícita, gravidade e origem da expectativa por caso, resultados mais determinados, controles positivos, distinção entre zero medido e dado ausente e salvaguardas de interpretação para treinamento. Inclui 48 cenários sintéticos não exaustivos; nenhum caso foi executado contra software e todos permanecem `NAO_EXECUTADO`.

v0.3 — 19/10/2026: alinha estados de qualidade e motivos de bloqueio ao VAL-001, separa grau de impacto VAL da severidade de defeito, corrige referência TC-04, inclui cobertura da flexibilidade separada (DIC-24) e testa a barreira humana de segurança/prontidão do FLX. Inclui 50 casos; todos continuam `NAO_EXECUTADO`.

v0.4 — 19/10/2026: incorpora os requisitos do ACESSO-001 v0.2 para vínculo treinador-aluno, negação de acesso cruzado, suspensão de vínculo, correções versionadas, aprovação separada de publicação e fluxo inicial com dados sintéticos. Total de 56 casos; todos continuam `NAO_EXECUTADO`.

## 13. Execução seletiva — protótipo local de 19/10/2026

Referência técnica: IMP-001; branch feat/first-student-flow, commit a8dbcc332e3f9d4e2426183f72ef6f706e3bb89a. Somente contas/objetivos fictícios, sem dados de saúde. Execução não é homologação profissional nem validação de produção. As afirmações de não execução nas versões históricas acima descrevem aquele momento.

| Caso | Resultado | Evidência e alcance |
|---|---|---|
| TC-01–50 | NAO_EXECUTADO | Auditoria de medições/fórmulas/metodologia não implementada |
| TC-51 | BLOQUEADO para aprovação integral | Consulta/listagem/API e URL de outro aluno negadas; evento próprio de tentativa negada e exportação ainda não implementados |
| TC-52 | PASSOU no protótipo | pgTAP confirma suspensão e encerramento; navegador confirma URL e suspensão; histórico do treinador preservado |
| TC-53 | PASSOU no protótipo | Pedido com autoria/data sem alterar resumo liberado; duplicação pendente negada |
| TC-54 | BLOQUEADO para aprovação integral | Nova versão interna e histórica passaram; fórmula e propagação seletiva de derivados não existem neste recorte |
| TC-55 | PASSOU no protótipo | Aprovado/interno permanece oculto até liberação explícita |
| TC-56 | PASSOU no protótipo | Fluxo cadastro→relato→confirmação→aprovação/liberação→correção, com autoria/eventos e sem dados de saúde |

Evidências: 11 testes unitários, 39 assertivas pgTAP e 3 testes integrados passaram; testes de configuração sem banco e entrada configurada passaram em execuções próprias. Build, lint do banco e advisors locais sem achados no nível consultado. Nenhuma chave administrativa efetiva em cliente/bundle/configuração pública.

Revisão independente identificou associação indevida a relato alterado em outra sessão; foi corrigida exigindo a base efetivamente revisada e recusando gravação se ela mudar. Regressões também verificam motivo de decisão, versão antiga, repetição, estado de correção e histórico dos estados do vínculo. Não houve segunda revisão independente após as correções; suíte final conferida pelo implementador.

Limites: não há aprovação geral dos 56 casos, prescrição, instalação de regras VAL/DIC, integração ou implantação. Concorrência de relato foi reproduzida com duas sessões; carga e todas as intercalações simultâneas não foram testadas. A homologação prática do fluxo com fixtures fictícias permanece distinta da consolidação atual do núcleo avaliação→prescrição pelo AV-003.



## 14. Posição atual dos testes após correção documental

TC-57: **NAO_EXECUTADO**. A inclusão do caso não executa fórmula, motor ou avaliação profissional. TC-01 e TC-06 tiveram suas expectativas harmonizadas com VAL-001; permanecem NAO_EXECUTADO. A seção 13 preserva o registro de 19/10/2026: TC-01–50 NAO_EXECUTADO; TC-51/54 BLOQUEADO para aprovação integral; TC-52/53/55/56 PASSOU apenas no recorte local. Os 19 cenários NUC também continuam não executados. Não houve nova execução de testes de aplicação nesta edição.

Cobertura adicional necessária: decisão→dose, conflitos entre objetivos, intervalos/repetições/esforço condicionais, progressão, duração/equipamento, substituições, contexto fisiológico e revalidação dos descendentes. Cada regra futura deve ligar fixture, oráculo revisado, execução observada e versão; quantidade de testes de cadastro não valida prescrição.


## Revisão de coerência — 20/10/2026

Revisão documental v0.5 em resposta ao AUD-005. IDs, organização e compartilhamentos do Drive preservados. Referências a versões anteriores no corpo e nos registros de elaboração são históricas; consultar o LEIA-ME para a posição atual. Nenhuma aprovação científica, profissional ou execução de teste é produzida por esta edição.



## 15. Casos integrados — v0.6, 20/10/2026

Catálogo atual: **69 casos**, TC-01–69. Os novos TC-58–69 são PROPOSTA_CENTRAL e permanecem NAO_EXECUTADO contra motor. A prova CAS-001 foi elaborada documentalmente; sua conferência numérica isolada não altera esses estados. Critérios de auditoria profissional ainda pendentes. Os 19 cenários NUC continuam não executados. TC-01–50 e TC-57 também continuam NAO_EXECUTADO; TC-51/54 BLOQUEADO para aprovação integral; TC-52/53/55/56 preservam apenas o resultado histórico do piloto.

| ID | Fixture e disparador | Saída esperada | Falha proibida | Rastreabilidade | Resultado contra motor |
|---|---|---|---|---|---|
| TC-58 | FC repouso 60, pico 180; 60% reserva vs 60% pico | Identificar 132 vs 108 bpm e bases distintas | Troca silenciosa ou chamar ambos %VO₂ medido | DIC-16; MET-003; CAS A2 | NAO_EXECUTADO |
| TC-59 | Avaliação geral nova reutiliza resultado metabólico anterior | Manter ocasião/data originais e revisar pertinência | Renovar data ou presumir nova medição | DIC-23; MET-003; CAS A7 | NAO_EXECUTADO |
| TC-60 | VO₂ manual vazio, limiar manual preenchido | Guardar origem por campo e ambas as rotas | Rotular todo bloco como fonte única | DIC-15/16; MET-003 | NAO_EXECUTADO |
| TC-61 | PSE esperada=5; PSE medida ausente; RIR=3 | Campos separados; medida SEM_DADO | Converter referência/RIR em PSE medida | DIC §14; AV-003 | NAO_EXECUTADO |
| TC-62 | Relatório com máscara e VO₂, método de gases ausente | Preservar saída e origem a confirmar | Declarar VO₂ diretamente medido pela máscara | DIC-15; AV-003 Fitcheck | NAO_EXECUTADO |
| TC-63 | FC estágios 100,130,120; alvo 125 | Identificar hipótese de ordenação violada antes de interpolar | Velocidade exata silenciosa | DIC-18; MET-003 | NAO_EXECUTADO |
| TC-64 | Flexão ausente, extensão 30/25 kgf | Não calcular H/Q; preservar extensão e revisão da assimetria | Preencher flexão ou aplicar corte 60% | DIC-09/10; CAS A4 | NAO_EXECUTADO |
| TC-65 | ICP regional 60/100/100/100; máximos 25/15/15/20 | Média simples 90%; soma/75=86,67%; fórmulas distintas | Misturar como mesma série de evolução | DIC-22; AV-003 | NAO_EXECUTADO |
| TC-66 | Recuperação 5 s: delta −8 no relatório; base ausente | Preservar sinal e pedir referência/relógio | Converter para queda canônica sem saber a base | DIC-17; AV-003 Fitcheck | NAO_EXECUTADO |
| TC-67 | Descanso proposto 120 s alterado para 20 s | Mostrar alteração e solicitar nova verificação da dose | Declarar transformação total automática em RML ou liberar sem revisar | AV-003 §6; CAS A5 | NAO_EXECUTADO |
| TC-68 | Sessão orçada 68 min, limite 60 | Apontar inviabilidade e revisão com autoria | Ocultar tempo ou encurtar descanso sem revisão | AV-003 §7; CAS A6/E1 | NAO_EXECUTADO |
| TC-69 | Disponibilidade passa de 3 para 2 sessões por 3 semanas | Preservar v1 e propor revisão de sessão e/ou meso/macro, sem compactação cega | Manter dose inviável ou publicar nova versão automaticamente | NUC; CAS E2 | NAO_EXECUTADO |

Severidade máxima de defeito candidata: ALTA para TC-58–66; ALTA para TC-67/68; MODERADA para TC-69, elevável conforme consequência concreta. O grau de impacto VAL é registrado separadamente por uso e evidência. Não são classificações clínicas.

Execução futura deve guardar fixture completa, oráculo revisado pelo treinador, versão do motor/regra, saída observada e evidência. Até existir essa execução, a conferência aritmética do CAS-001 é somente conferência aritmética. Próxima etapa vigente: auditar o caso, resolver parâmetros/fontes pertinentes e preparar o motor experimental apenas após essa definição.


## 16. Auditoria da sessão — catálogo vigente v0.7

Total: **89 casos**, TC-01–89. TC-70–89 são PROPOSTA_CENTRAL, com fixtures inteiramente sintéticas; os parâmetros numéricos desses testes não são normas profissionais. Todos permanecem NAO_EXECUTADO contra motor. As execuções históricas do piloto em §13 não mudaram. A contagem de 69 em §15 registra a versão anterior. TC-01–50 e TC-57–89 não executados; TC-51/54 bloqueados integralmente; TC-52/53/55/56 com resultado histórico somente do piloto. Os 19 cenários NUC não foram promovidos.

A tabela abaixo contém entradas suficientes e saídas esperadas para revisão; o arquivo local de fixtures registra os mesmos dados de forma estruturada. Não confundir leitura/conferência de um oráculo com observação da saída de software. Critérios de aprovação profissional estão pendentes.

| ID / regra | Entrada sintética | Saída esperada | Falha proibida | Motor |
|---|---|---|---|---|
| TC-70 / R-OP-01 | Nenhuma observação para indicador de recuperação. Entradas: {"records":[],"requiredRecordsForFixture":2,"thresholdForFixtureOnly":3} | {"quality":"CONTEXTO_INSUFICIENTE","rawAbsent":"SEM_DADO","clinicalLowRecoveryAlert":false,"verified":false} | Vazio convertido em zero, vermelho de baixa recuperação ou verde de aprovação | NAO_EXECUTADO |
| TC-71 / R-OP-01 | Controle positivo: zero com significado e origem. Entradas: {"variable":"desconforto_relato","scale":"0–10, zero admitido nesta fixture","value":0,"source":"relato sintético identificado","date":"2026-10-20"} | {"preserveValue":0,"treatAsMissing":false,"automaticProfessionalValidation":false} | Apagar o zero legítimo ou promovê-lo a aprovação geral | NAO_EXECUTADO |
| TC-72 / R-OP-01 | Controle positivo de comparação numérica com critério explicitamente fictício. Entradas: {"records":[{"value":2,"date":"2026-10-19"},{"value":2,"date":"2026-10-20"}],"requiredRecordsForFixture":2,"formulaForFixture":"média simples","thresholdForFixtureOnly":3,"windowComplete":true} | {"comparisonToFixtureParameter":"ABAIXO","clinicalDiagnosis":false,"showCoverage":"2/2"} | Diagnosticar risco ou transportar o corte de demonstração para a operação | NAO_EXECUTADO |
| TC-73 / R-OP-01 | Cobertura parcial e fórmula não aprovada. Entradas: {"recordsInRequiredWindow":2,"requiredRecordsForFixture":4,"olderRecordsOutsideWindow":8,"formulaApproved":false} | {"quality":"CONTEXTO_INSUFICIENTE","fillMissingWithZero":false,"interpretWorkload":false} | Completar janela com zeros ou registros de outra ocasião | NAO_EXECUTADO |
| TC-74 / R-OP-02 | Objetivo/tarefa sem capacidade e dose identificadas. Entradas: {"label":"funcional","goal":"levantar da cadeira","capacity":null,"method":null} | {"require":["capacidade","método","dose"],"inferMaxStrength":false} | Classificar força máxima ou intensidade pelo rótulo funcional | NAO_EXECUTADO |
| TC-75 / R-OP-02 | Incompatibilidade de representação entre sessão e macro. Entradas: {"sessionTasks":[{"capacity":"FORCA_MUSCULAR","exercise":"tarefa resistida","sets":2}],"macroStrengthFields":[0,0,0],"legacyFunctionalLabel":true,"legacyMapping":null} | {"reconcileMapping":true,"eraseSession":false,"autoFillMaxStrength":false} | Tratar todas as linhas zeradas como prova de ausência de força ou preenchê-las automaticamente | NAO_EXECUTADO |
| TC-76 / R-OP-03 | Controle positivo: limite superior cabe exatamente. Entradas: {"blockMin":[4,30,8,3,2,2],"blockMax":[5,33,10,4,2,2],"extraReserve":4,"limitMinutes":60,"reserveAlreadyIncluded":false} | {"minMinutes":53,"maxMinutes":60,"budgetFits":true,"actualDurationKnown":false} | Chamar orçamento de tempo realizado ou aprovação profissional | NAO_EXECUTADO |
| TC-77 / R-OP-03 | Intervalo de tempos excede o teto disponível. Entradas: {"blockMin":[5,4,4,6,4,3,3,3,2,3,3,2],"blockMax":[6,5,5,8,5,4,4,4,3,4,5,3],"extraReserve":10,"limitMinutes":60,"reserveAlreadyIncluded":false} | {"minMinutes":52,"maxMinutes":66,"budgetFits":false,"reviseDependentPlan":true} | Fixar célula em 60 ou reduzir descanso para esconder excesso | NAO_EXECUTADO |
| TC-78 / R-OP-03 | Contagem explícita por lado e intervalos. Entradas: {"setsPerSide":2,"sides":2,"reps":10,"secondsPerRepForBudgetOnly":3,"performedSimultaneously":false,"restSeconds":60,"restIntervalsPerSide":1,"extraTransitionsSeconds":0} | {"workSeconds":120,"restSeconds":120,"totalSeconds":240} | Contar o trabalho unilateral como se os dois lados fossem simultâneos | NAO_EXECUTADO |
| TC-79 / R-OP-03 | Tempo observado diverge do orçamento. Entradas: {"plannedMinutes":60,"observedMinutes":64,"source":"cronometro fictício"} | {"preserveObservedMinutes":64,"reviewNextPlan":true} | Registrar 60 como realizado ou apagar a diferença | NAO_EXECUTADO |
| TC-80 / R-OP-04 | Alvo de esforço não é registro de execução. Entradas: {"rirTarget":3,"rirObserved":null,"validObservedExposures":0,"completedReps":null} | {"doNotInventObservedRir":true,"loadIncreaseApproved":false} | Copiar RIR-alvo para esforço observado ou assumir execução | NAO_EXECUTADO |
| TC-81 / R-OP-04 | Controle positivo: evidência suficiente para propor, não aprovar. Entradas: {"requiredExposuresForFixture":2,"observedExposures":[{"repsAtTarget":true,"control":true,"responseAcceptable":true},{"repsAtTarget":true,"control":true,"responseAcceptable":true}],"contextUnchanged":true} | {"proposeSingleVariableChange":true,"trainerDecisionRequired":true,"automaticallyPublish":false} | Aprovar/publicar aumento sem treinador | NAO_EXECUTADO |
| TC-82 / R-OP-04 | Critério numérico atingido com piora de execução. Entradas: {"repsAtTarget":true,"executionCompromised":true,"newSymptomDuringTask":true} | {"progressionProposalHeld":true,"reviewAffectedTask":true,"eraseIndependentData":false} | Aumentar carga porque o alvo de reps foi atingido | NAO_EXECUTADO |
| TC-83 / R-OP-04 | Mudança de etapa sem dados de resposta. Entradas: {"calendarWeek":5,"plannedPhase":"M2","observedExposures":[],"availabilityChanged":true} | {"automaticProgression":false,"reopenDependentDecisions":true,"preservePreviousPlan":true} | Declarar adaptação ou dose executada pela passagem do calendário | NAO_EXECUTADO |
| TC-84 / R-OP-05 | Familiarização visual–motora não basta para classificação automática. Entradas: {"equipment":"luzes de reação","description":"tocar o alvo aceso","independentMotorDemand":null,"cognitiveDemand":null,"simultaneitySpecified":false} | {"dualTaskAutomaticallyConfirmed":false,"requireTaskDescription":true} | Usar o nome do aparelho como confirmação de dupla tarefa | NAO_EXECUTADO |
| TC-85 / R-OP-05 | Duas demandas descritas, sem comparador equivalente. Entradas: {"motor":"transferência apoiada de peso","cognitive":"nomear animais","simultaneous":true,"windowSeconds":30,"priorityInstruction":"preservar controle motor","supportUnchanged":true,"motorCycles":8,"cognitiveCorrect":5,"cognitiveErrors":1,"singleTaskComparator":null} | {"recordBothPerformances":true,"dualTaskCost":null,"automaticImprovementClaim":false} | Calcular custo sem comparador ou juntar desempenho motor e cognitivo num único sucesso | NAO_EXECUTADO |
| TC-86 / R-OP-05 | Resposta cognitiva melhora e tarefa motora deteriora. Entradas: {"cognitiveResponsesFaster":true,"lossOfBalance":true,"motorCriterionForFixture":"sem perda de equilíbrio com apoio previsto"} | {"doNotDeclareOverallSuccess":true,"proposeSimplificationAndReview":true} | Progredir por velocidade/acertos ignorando perda de controle motor | NAO_EXECUTADO |
| TC-87 / R-OP-06 | Wells isolado sem pergunta/movimento específico. Entradas: {"wellsCm":28,"specificMovementTest":null,"functionalQuestion":null,"requestedRegion":"isquiotibiais por padrão"} | {"specificFlexibilityDecision":"EM_REVISAO","inferGeneralizedShortening":false,"preserveWellsForOwnPurpose":true} | Diagnosticar encurtamento generalizado ou prescrever região automaticamente | NAO_EXECUTADO |
| TC-88 / R-OP-06 | Controle de uso independente sem indicação de alongamento. Entradas: {"specificFlexibilityIndication":false,"reasonRecorded":"nenhuma pergunta de amplitude identificada neste recorte","independentStrengthDecisionSupported":true} | {"blockWholeSession":false,"requireUniversalStretching":false} | Exigir alongamento de todos para liberar qualquer treino | NAO_EXECUTADO |
| TC-89 / R-OP-06 | Controle positivo de completude e tempo, sem aprovação da dose. Entradas: {"entirelySynthetic":true,"indication":"pergunta e teste específico da variante CAS","movement":"extensão do joelho com quadril apoiado","method":"estático ativo-assistido","position":"decúbito dorsal apoiado","setsPerSide":2,"sides":2,"holdSeconds":30,"restIntervals":4,"restSeconds":15,"setupSeconds":60,"frequencyPerWeek":3,"blockBudgetMinutes":4,"toleranceInstruction":"tensão confortável; rever se sintomas","followUp":"mesmo teste ativo e tarefa pertinente"} | {"totalSeconds":240,"withinBlockBudget":true,"professionalApproval":"PENDENTE"} | Omitir lado/posição/tempo ou atribuir a dose a protocolo ACESSO não conferido | NAO_EXECUTADO |

Severidade máxima de defeito candidata: ALTA para TC-70–75 e TC-80–86; MODERADA para TC-76–79 e TC-87–89, elevável conforme consequência concreta. Grau VAL é avaliado separadamente por objeto/finalidade e evidência; não equivale a gravidade clínica.

Critérios de revisão: entradas explícitas, regra e fonte versionadas, controles positivos/negativos, consequência localizada, ausência de preenchimento fictício da execução e distinção entre cálculo e aprovação. A próxima fase de software deverá guardar implementação, entradas, saída observada e resultado, sem transformar estes oráculos em verdades universais. Referências e limites em AV-003 §14.7.

v0.7 — 20/10/2026: vinte expectativas adicionais e revisão CAS-001 v0.2; sem execução do motor ou alteração de sistemas operacionais.
