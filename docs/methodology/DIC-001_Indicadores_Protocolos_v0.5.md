---
id: DIC-001
titulo: "Dicionário de Indicadores e Protocolos — Central de Alunos"
versao: "0.5"
data: "2026-10-20"
estado: "PROPOSTA_DOCUMENTAL_PENDENTE_REVISAO_TECNICA"
implementacao: "Documental; não conectado a planilhas, laudos, Apps Script ou automações"
escopo: "Definições, metadados, unidades, dependências, comparabilidade e limites dos indicadores de avaliação"
privacidade: "Sem dados identificáveis de alunos"
---

# DIC-001 — Indicadores e Protocolos v0.5

> **Posição após AUD-005 — 20/10/2026.** Os oito estados de qualidade seguem VAL-001; ausência, zero medido/calculado, erro de fórmula e dependência não mapeada têm tratamentos distintos. O mapa físico completo e as equações dos equipamentos continuam pendentes. A atualização documental não declara indicadores validados.


## 1. Propósito e limites

Este dicionário define o que cada indicador pretende descrever, que informações são necessárias para interpretá-lo e que usos devem aguardar confirmação. Ele desenvolve o VAL-001 para que a Central possa, em uma etapa futura, distinguir dado medido, estimativa, cálculo e interpretação antes de comparar laudos.

O documento é uma proposta para revisão do treinador. A posição atual dos protocolos e das dependências examinadas está no §14; pendências gerais anteriores devem ser lidas por finalidade, sem repetir como ausente o que já foi identificado. **Não constitui protocolo ACESSO aprovado, laudo, diagnóstico, prescrição, validação dos equipamentos ou autorização de automação.** As fichas ACESSO-028 a ACESSO-033 são preliminares. Quando a fórmula, aparelho, população normativa ou procedimento específico da ACESSO não foi conferido, o registro abaixo declara a pendência e não supõe o método real.

O dicionário usa identidades matemáticas gerais para verificar coerência. Elas não substituem o manual do equipamento ou a fórmula das planilhas individuais. Não foram abertas nem modificadas planilhas operacionais para auditar suas fórmulas internas.

## 2. Fontes e níveis de afirmação

| Fonte | Papel neste DIC | Estado da informação |
|---|---|---|
| [CENTRAL-001 — Visão e arquitetura](https://drive.google.com/file/d/1yRUZRBgpXiwAd0XCvGusrJ1QCqJ8Z4h4/view) | Governança, proveniência, dados privados e dependências | Documento-base de visão |
| [Caderno Técnico-Científico](https://drive.google.com/file/d/1Gy1mj99k37Ook7gXiDjb48cUbT_uUW0E/view) | Visão das aulas, princípios, referências iniciais e limites | Base de estudo; não é validação de protocolo |
| [ACESSO-INDEX](https://drive.google.com/file/d/1WbAhRFbk5RtgVrkhzvX5s60gXnfKP9Z9/view) | Localização de aulas e verificações prévias | Roteador documental; regras não instaladas |
| ACESSO-028 a ACESSO-033 | Contexto didático por domínio | `FICHA_PRELIMINAR`; revisão integral dos vídeos e minutagens permanece pendente |
| [VAL-001 v0.2](https://drive.google.com/file/d/1zx1tiqjgI56zwWXif82ZuCy1WdZrNHhx/view) | Estados, gravidade, escopo de bloqueios e achados do corpus | Proposta documental pendente de aprovação |
| [EVID-INDEX — evidências 28–33](https://drive.google.com/file/d/1uiJyfdk4EWgcBfOl1V6dp0W-U-SAnik7/view) | Localizador de complementação acadêmica | Registro bibliográfico inicial; não equivale à revisão crítica completa |

Usar sempre as etiquetas:

- `AULA_SINTESE`: assunto atribuído à aula no Caderno/ficha, sem atribuir citação literal ou protocolo não conferido.
- `AULA_VERIFICADA`: reservado a conteúdo revisto diretamente na gravação, com URL, minutagem e revisor. Nenhuma regra deste documento recebe essa etiqueta.
- `ACADEMICA`: complemento de publicação científica identificado como tal; nunca atribuído ao professor.
- `PROPOSTA_CENTRAL`: definição, verificação ou salvaguarda criada para o sistema e sujeita à aprovação.
- `OBSERVADO_FONTE`: campo encontrado em laudo/PDF; sua presença não prova método ou exatidão.

## 3. Como usar os registros

Cada indicador tem um ID estável e deve ser registrado por ocasião e finalidade. O formulário mínimo de cada medida ou derivado é:

| Campo | Conteúdo requerido |
|---|---|
| `indicador_id` | Identificador deste dicionário e versão |
| `avaliacao_id` / `resultado_id` | Chaves internas da ocasião e do resultado; nomes não devem ir para biblioteca geral |
| `fonte_id` | Arquivo, revisão/hash, página/aba/célula ou equipamento/exportação |
| `coleta_em` | Data e hora da coleta; nunca substituir por data de emissão/consulta |
| `valor_bruto` / `unidade_bruta` | Valor como registrado, sem correção silenciosa |
| `tipo_dado` | `MEDIDO`, `ESTIMADO`, `CALCULADO`, `RELATADO`, `OBSERVADO` ou `CLASSIFICACAO_SOFTWARE` |
| `metodo_id` / `metodo_versao` | Equipamento, instrumento, modelo, algoritmo e versão quando conhecidos |
| `protocolo_id` / `condicoes` | Posição, tarefa, janela, tentativas e condições pertinentes |
| `operador` / `calibracao` | Responsável e situação do equipamento, quando disponíveis |
| `entradas` / `equacao` | Entradas, unidade, fórmula, arredondamento e dependências de cálculo |
| `comparacao_id` | Par de ocasiões, indicador e pergunta longitudinal específica |
| estado_qualidade / grau_impacto_VAL | Estado canônico VAL-001, escopado pela finalidade de uso |
| motivo_bloqueio | Código/razão do bloqueio e relação com o dado dependente; não é estado de qualidade |
| `uso_permitido` / `uso_bloqueado` | Descrição, comparação, classificação, derivação ou decisão que pode/não pode usar o valor |
| `revisor` / `decisao_em` | Pessoa, data, escopo da conferência e justificativa |

Se o valor for derivado, armazenar também as entradas originais e a versão da equação. Mudança em uma entrada ou equação exige rever cada descendente. Se a dependência for desconhecida, registrar motivo_bloqueio=DEPENDENCIA_NAO_MAPEADA e estado CONTEXTO_INSUFICIENTE no produto dependente; suspender esse uso mantendo o registro bruto.

Usar o vocabulário canônico de qualidade definido em VAL-001 v0.2: `NAO_AUDITADO`, `SEM_DADO`, `CONTEXTO_INSUFICIENTE`, `INCONSISTENTE`, `NAO_COMPARAVEL`, `NAO_APLICAVEL`, `PENDENTE_REVISAO_CLINICA` e `VALIDADO`. `VALIDADO` exige finalidade específica, revisor e evidência; registrar separadamente os usos bloqueados. `DEPENDENCIA_NAO_MAPEADA` e `ERRO_DE_MEDIDA_NAO_QUANTIFICADO` são motivos/observações, não estados de qualidade. Gravidade G0–G3 segue VAL-001 e não equivale à severidade de defeito de software em TEST-001.

## 4. Registro de indicadores

### DIC-01 — Massa corporal

- **Definição:** massa da pessoa observada na ocasião, expressa em quilogramas.
- **Tipo usual:** `MEDIDO`; verificar instrumento e fonte. Valor impresso em cabeçalho de relatório pode ser importado, copiado ou padrão e não deve ser presumido como uma nova pesagem.
- **Unidade canônica:** kg; preservar unidade original e registrar conversão se existir.
- **Metadados:** data/hora, balança e resolução, operador, condições relevantes e relação com a modalidade avaliada. Registrar separadamente massas provenientes de avaliação antropométrica, BIA, dinamometria ou formulário.
- **Dependências:** estatura para IMC; gordura percentual para massa gorda/massa livre de gordura no mesmo modelo; massa como denominador apenas quando uma força relativa foi definida assim; massa pode integrar VO₂ relativo ou equação de gasto, conforme método real.
- **Comparabilidade:** datas, instrumento e condições equivalentes ou diferenças documentadas. Gestação/pós-parto é contexto relevante, não uma correção numérica automática.
- **Bloqueios:** divergência entre ocasiões/fontes bloqueia descendentes dependentes; não invalida FC, força absoluta, perímetros ou pressões sem dependência comprovada.
- **Rótulo:** `PROPOSTA_CENTRAL`. Aulas 028/VAL-001 indicam o papel contextual do peso, não um protocolo de pesagem aprovado.

### DIC-02 — Estatura

- **Definição:** distância vertical em metros segundo técnica padronizada; registrar sem assumir estatura autorrelatada como medida instrumental.
- **Tipo usual:** `MEDIDO` ou `RELATADO`, identificando a origem.
- **Unidade canônica:** m; cm podem ser armazenados como valor bruto com conversão explícita.
- **Metadados:** estadiômetro, posição, calçado, horário/contexto quando relevante, operador e arredondamento.
- **Dependências:** IMC e quaisquer índices que usem altura.
- **Comparabilidade:** diferença entre laudo geral e anexo exige conferência de origem, data e técnica; não escolher valor por maioria de ocorrências.
- **Bloqueios:** não calcular IMC quando estatura é ausente, não confirmada ou unidade ambígua.
- **Rótulo:** `PROPOSTA_CENTRAL`; ficha ACESSO-028 é resumo didático, não protocolo literal validado.

### DIC-03 — IMC

- **Definição:** razão entre massa em kg e estatura em metros ao quadrado.
- **Tipo:** `CALCULADO`.
- **Equação geral de conferência:** `IMC_kg_m2 = massa_kg / (estatura_m ^ 2)`.
- **Unidade:** kg/m².
- **Entradas obrigatórias:** massa e estatura da mesma ocasião ou fontes cuja combinação esteja justificada; versões e precisão das entradas.
- **Limites:** não separa tecidos muscular e adiposo. Não é, isoladamente, diagnóstico ou meta de treino.
- **Comparabilidade:** ambas as entradas e técnicas precisam ser suficientemente consistentes para a pergunta longitudinal.
- **Bloqueio:** invalidar apenas o IMC derivado de entrada comprometida; manter massa e estatura brutas para revisão.
- **Rótulo:** equação geral (`PROPOSTA_CENTRAL`); contexto interpretativo `AULA_SINTESE` ACESSO-028.

### DIC-04 — Circunferências e perímetros

- **Definição:** distância ao redor de sítio anatômico nomeado, em centímetros. “Abdominal”, “cintura” e “quadril” são campos diferentes até definição do marco anatômico.
- **Tipo:** `MEDIDO`.
- **Metadados:** sítio/ponto anatômico, lado se aplicável, fita, tensão, postura, fase respiratória, operador, replicatas e critério de registro.
- **Unidade:** cm; não arredondar silenciosamente antes do cálculo.
- **Dependências:** diferenças e percentuais longitudinais; razões cintura-estatura só quando sítios e equação estejam definidos.
- **Comparabilidade:** mesmo ponto, técnica, condição e operador/protocolo comparável. A variação de sítio impede alegação direta de tendência.
- **Bloqueios:** sem ponto anatômico ou condição, manter descrição como `CONTEXTO_INSUFICIENTE`; não produzir classificação clínica automática.
- **Rótulo:** `AULA_SINTESE` para cintura/antropometria em 028; escolhas de metadados são `PROPOSTA_CENTRAL`. Evidência de cintura no EVID-INDEX é complemento.

### DIC-05 — Dobras cutâneas

- **Definição:** espessura comprimida de dobra cutânea em sítio definido, expressa em milímetros. Cada sítio é uma observação separada.
- **Tipo:** `MEDIDO`; soma de dobras é `CALCULADO`.
- **Metadados:** sítio, lado, técnica de identificação, adipômetro/modelo, pressão e resolução, operador, replicatas e equação que converte conjunto de sítios em densidade/% gordura.
- **Unidade:** mm para sítio e soma; percentuais são outra variável e devem apontar para equação e população.
- **Dependências:** soma de sítios não é massa gorda; percentual estimado depende da seleção de sítios, equação e entradas adicionais.
- **Comparabilidade:** mesmas regiões, lado, instrumento, operador treinado e equação compatível; método de dobra não é intercambiável com BIA ou ultrassom.
- **Bloqueios:** sem equação identificada, preservar dobras medidas e bloquear percentual derivado.
- **Rótulo:** `AULA_SINTESE` 028; protocolo ACESSO específico `PENDENTE_VALIDACAO_AULA`.

### DIC-06 — Bioimpedância e composição corporal estimada

- **Definição:** estimativas geradas por impedância elétrica e equações do aparelho. Registrar cada saída do fabricante separadamente: gordura percentual, massa gorda, massa livre de gordura, “massa muscular”, água, nível visceral etc.
- **Tipo:** sinais elétricos podem ser `MEDIDO`; compartimentos corporais mostrados pelo equipamento são usualmente `ESTIMADO` ou `CALCULADO`, conforme documentação do modelo.
- **Metadados:** fabricante/modelo, frequência/configuração, equação e versão, eletrodos/posição, condição pré-teste e dados pessoais usados pelo aparelho, quando disponíveis.
- **Unidades:** massa em kg; percentual em %; índices de fabricante podem ser unidades arbitrárias (`ua`). Não converter `ua` em kg ou diagnóstico.
- **Dependências:** equação pode incorporar massa, estatura, idade, sexo informado, hidratação e outras entradas. Relação exata é específica do equipamento; se desconhecida, registrar motivo de bloqueio DEPENDENCIA_NAO_MAPEADA e manter a saída dependente em CONTEXTO_INSUFICIENTE.
- **Comparabilidade:** mesmo aparelho/modelo/algoritmo e condições suficientemente consistentes. Mudança fisiológica, inclusive gestação/pós-parto, exige contexto. BIA e dobras não são permutáveis para formar uma única série sem avaliação explícita.
- **Bloqueios:** falha no peso usado pela equação pode comprometer saídas dependentes, sem invalidar automaticamente outros campos do laudo.
- **Rótulo:** `AULA_SINTESE` 028; equação/população/equipamento reais pendentes. A literatura de pós-parto no EVID-INDEX e referências candidatas do VAL são `ACADEMICA`, não fala da aula.

### DIC-07 — Massa gorda e massa livre de gordura

- **Definição:** compartimentos estimados/calculados dentro de um modelo corporal. “Massa magra”, “massa livre de gordura” e “massa muscular” não devem ser tratados como sinônimos sem definição do relatório.
- **Tipo:** `ESTIMADO` quando saído de método indireto; `CALCULADO` quando derivado de massa e percentual.
- **Equações gerais de conferência no mesmo modelo:** `massa_gorda_kg = massa_total_kg × percentual_gordura/100`; `massa_livre_gordura_kg = massa_total_kg − massa_gorda_kg`.
- **Unidade:** kg; registrar fonte/estimador.
- **Comparabilidade:** mesma modalidade e equação, contexto fisiológico e condições aceitáveis. Se métodos diferirem, reportar séries separadas.
- **Bloqueios:** não usar álgebra de uma saída estimada para alegar que a massa muscular foi medida; divergência pode refletir modelos diferentes ou erro e requer investigação.
- **Rótulo:** identidades matemáticas `PROPOSTA_CENTRAL`; tipos e limitações `AULA_SINTESE` 028.

### DIC-08 — Ultrassom de composição corporal

- **Definição:** espessura ou distância de tecido em sítio regional, geralmente milímetros, conforme imagem e protocolo. Não equivale diretamente à massa muscular de todo o corpo.
- **Tipo:** espessura `MEDIDO` por método de imagem; soma, razão ou predição subsequente `CALCULADO/ESTIMADO`.
- **Metadados:** equipamento/transdutor, frequência, sítio anatômico, plano, posição, pressão, gel, imagem, operador, tentativas e regra de leitura.
- **Dependências:** equações regionais devem declarar estrutura anatômica, unidades e população.
- **Comparabilidade:** mesmo sítio, operador ou confiabilidade conhecida, configuração e procedimento. Variação de compressão/transdutor pode alterar espessura.
- **Bloqueios:** sem sítio ou protocolo, não alegar hipertrofia longitudinal. Um valor regional não deve ser rotulado como músculo corporal total.
- **Rótulo:** `AULA_SINTESE` 028 e ficha AV-002; validade/repetibilidade ACESSO específica pendente.

### DIC-09 — Força absoluta em dinamometria

- **Definição:** resultado máximo ou resumo de força no gesto isométrico/isocinético especificado pelo instrumento e protocolo. O número só significa força naquele movimento, posição e unidade.
- **Tipo:** `MEDIDO` pelo sensor após confirmação do método; média, pico, correção ou classificação pode ser `CALCULADO`.
- **Unidades:** N para força; kgf pode aparecer em relatório. Não trocar `kg` de massa por `kgf` de força. Converter somente com transformação física explícita e sem chamar unidades diferentes de observação original.
- **Metadados:** segmento/articulação, ação (flexão/extensão/abdução/rotação), lado, posição e ângulo, estabilização, instrução, aquecimento, número de tentativas, repouso, resultado selecionado, tempo de contração, equipamento, sensor, calibração e sinais/sintomas.
- **Dependências:** valor pode ser pico, média, melhor tentativa ou combinação; confirmar regra do dispositivo. Massa corporal não deve ser presumida como dependência da força absoluta.
- **Comparabilidade:** gesto, ângulo, instrumento, instrução, posição, tentativas e regra de resumo compatíveis.
- **Bloqueios:** peso errado bloqueia massa-normalizações dependentes, não invalida em bloco a medida absoluta. Resultado sem unidades ou lados identificados não serve para assimetria.
- **Rótulo:** `AULA_SINTESE` 031 para avaliação contextualizada; protocolo literal ACESSO e equipamento pendentes.

### DIC-10 — Assimetria interlateral

- **Definição:** diferença descritiva entre resultados direito e esquerdo do mesmo teste e protocolo. Guardar ambos os valores e direção além do percentual.
- **Tipo:** `CALCULADO` a partir de duas medidas.
- **Unidades:** diferença absoluta conserva a unidade original; percentual é adimensional (%).
- **Fórmula candidata para conferência, não confirmada como fórmula ACESSO:** `100 × abs(D−E)/max(D,E)` quando ambos positivos. Registrar `lado_maior`; se D=E=0 forem leituras confirmadas, a assimetria percentual é `NAO_APLICAVEL` por denominador zero; se faltar lado, usar `SEM_DADO`; se fórmula/dependência não estiver mapeada, usar `CONTEXTO_INSUFICIENTE` no derivado.
- **Alternativas:** literatura usa diferentes índices/denominadores e convenções. O método escolhido deve ser identificado e mantido por série; não converter entre fórmulas sem recalcular e rotular versão.
- **Comparabilidade:** mesmo gesto, lado, equipamento, unidade, posição, tentativas e fórmula. Repetibilidade/erro do método devem ser conhecidos para interpretar mudança.
- **Limites/bloqueios:** assimetria não é diagnóstico, causalidade, risco de lesão comprovado, indicação automática de volume extra ou critério universal para simetria. Lado “maior” pode variar por movimento.
- **Rótulo:** conceito didático `AULA_SINTESE` 031; fórmula operacional `PROPOSTA_CENTRAL`; revisão de Parkinson et al. (2021) em [repositório institucional](https://irep.ntu.ac.uk/id/eprint/44007/) é complemento `ACADEMICA`.

### DIC-11 — Força relativa

- **Definição:** medida de força dividida por uma referência corporal, se o objetivo e protocolo justificarem normalização.
- **Tipo:** `CALCULADO`.
- **Fórmula candidata:** `forca_relativa = forca_absoluta / massa_corporal`; a unidade resultante deve ser explicitada (por exemplo, N/kg ou kgf/kg), não removida.
- **Dependências:** força, massa da ocasião definida, unidade/conversão e população de referência se classificar.
- **Comparabilidade:** mesma força/protocolo e base de massa. Mudança de massa altera o quociente mesmo se a força absoluta ficar estável.
- **Bloqueio:** massa incorreta bloqueia força relativa, não força absoluta. Não usar como prescrição ou norma sem referência compatível com população/teste.
- **Rótulo:** `PROPOSTA_CENTRAL`; método de normalização específico ACESSO pendente.

### DIC-12 — Torque

- **Definição:** momento de força em torno de um eixo, distinto de força. Unidade SI: N·m.
- **Tipo:** `MEDIDO` se dispositivo mede torque diretamente e assim estiver documentado; `CALCULADO` se deriva força e braço perpendicular.
- **Relação física geral:** `torque_Nm = força_N × braço_perpendicular_m`; ângulo e geometria importam. Não converter kgf diretamente para Nm sem conversão de força e braço definidos.
- **Metadados:** eixo, braço de alavanca, ponto de aplicação, ângulo articular, sensor, unidade, algoritmo e se o número representa leitura real ou campo do software.
- **Bloqueio:** torque zero impresso com braço/entrada ausente é `SEM_DADO` ou pendência do modelo, não prova que houve torque fisiológico zero.
- **Comparabilidade:** braço, ângulo, unidade, correção e instrumentação equivalentes.
- **Rótulo:** relação geral `PROPOSTA_CENTRAL`; saída dos dinamômetros anexos pendente de documentação.

### DIC-13 — 1RM medido, estimado e carga sugerida

- **Definição:** distinguir (a) maior carga completada dentro de um protocolo de 1RM, (b) 1RM previsto a partir de repetições/carga por uma equação e (c) carga sugerida por software para uma qualidade de treino.
- **Tipo:** (a) `MEDIDO`; (b/c) `ESTIMADO` ou `CALCULADO` conforme entrada/equação.
- **Unidade:** kg de carga no exercício/máquina específicos; informar se carga inclui implemento/carga externa conforme protocolo.
- **Metadados:** exercício/aparelho, amplitude, técnica, aquecimento, repetições, carga, falha/critério, assistência, equação e versão, intervalo/objetivo da carga sugerida.
- **Dependências:** equação de estimativa, reps, carga, desempenho, e talvez peso corporal; mapear explicitamente.
- **Comparabilidade:** mesmo exercício, equipamento, amplitude, critério e estado medido/estimado. 1RM em máquina não migra para dinamometria, nem o contrário.
- **Bloqueios:** não tratar 1RM estimado como diretamente testado; não prescrever cargas sugeridas sem validação do modelo, exercício e revisão do treinador.
- **Rótulo:** categorias `PROPOSTA_CENTRAL`; seleção de testes e progressão na ficha 031 é `AULA_SINTESE` preliminar.

### DIC-14 — Resistência muscular localizada (RML)

- **Definição:** número de repetições válidas em exercício/tarefa e protocolo identificados; não é intercambiável com força máxima nem com outro critério de repetição.
- **Tipo:** contagem `MEDIDO`/`OBSERVADO`; norma/categoria `CALCULADO` ou `CLASSIFICACAO_SOFTWARE`.
- **Metadados:** exercício, carga/resistência, amplitude válida, ritmo, intervalo, instruções, tentativas, critério de término e regra para repetições parciais.
- **Unidade:** repetições válidas conforme o critério registrado.
- **Dependências:** classificações exigem norma, população, versão do teste e regra identificadas.
- **Comparabilidade:** mesmo exercício, amplitude, ritmo, carga/resistência e critério de término; parcial e completa não são equivalentes por padrão.
- **Limites:** contagem isolada não demonstra causa, capacidade global ou prioridade de treino.
- **Rótulo:** tópicos `AULA_SINTESE` 029; regras de validade e campo são `PROPOSTA_CENTRAL`.

### DIC-24 — Flexibilidade e testes de alcance

- **Definição:** resultado de tarefa de alcance/extensibilidade, como sit-and-reach, sempre identificado pela versão do teste; não equivale a medida direta de toda a mobilidade ou de um músculo específico.
- **Tipo:** alcance/ângulo `MEDIDO` ou `OBSERVADO`; norma/categoria `CALCULADO` ou `CLASSIFICACAO_SOFTWARE`.
- **Metadados:** versão do instrumento, caixa e posição do zero, posição corporal, joelho, aquecimento, tentativa, instruções, amplitude e resultado selecionado.
- **Unidades:** registrar a unidade original, normalmente cm ou grau conforme o teste.
- **Dependências:** classificação exige norma, população, versão do teste e fórmula identificadas.
- **Comparabilidade:** mesma versão, equipamento, posição, instruções, aquecimento e regra de tentativa.
- **Limites:** resultado do sit-and-reach não isola cada músculo/coluna nem comprova encurtamento geral; consultar EVID-INDEX e estudo aplicável quando necessário.
- **Rótulo:** tópicos `AULA_SINTESE` 029; regras de validade e campo são `PROPOSTA_CENTRAL`.

### DIC-15 — VO₂ e capacidade aeróbica

- **Definição:** registrar VO₂ relativo e absoluto separadamente, identificando se foi medido por análise de gases ou estimado por equação/protocolo.
- **Tipo:** `MEDIDO` diretamente quando método de gases confirmado; caso contrário `ESTIMADO`; categoria é derivado.
- **Unidades:** L/min para absoluto; ml·kg⁻¹·min⁻¹ para relativo. Conversões requerem massa específica e não convertem um VO₂ estimado em medido.
- **Metadados:** modalidade, esteira/bicicleta, protocolo, estágio e duração, analisador/calibração quando direto, equação/versão quando indireto, critérios de término, sintomas/observações e massa da ocasião quando relativa.
- **Dependências:** saída relativa pode depender da massa; saída prevista de velocidade/FC depende do algoritmo e população. A fórmula real do relatório precisa ser obtida.
- **Comparabilidade:** método direto versus estimado deve permanecer série separada salvo equivalência validada; protocolo e critério de encerramento equivalentes.
- **Bloqueios:** interrupção ou limitação técnica não prova VO₂ máximo fisiológico. Não criar zonas/limiares a partir de ausência ou estimativa sem base identificada.
- **Rótulo:** `AULA_SINTESE` 029–030; ACSM 2026 no EVID-INDEX é `ACADEMICA` para exercício resistido, não valida este VO₂ específico.

### DIC-16 — Frequência cardíaca, limiar e zonas

- **Definição:** separar FC observada de repouso, durante estágio, máxima observada, máxima predita e FC de limiar. “Limiar” exige definição fisiológica e método próprio.
- **Tipo:** leitura do sensor `MEDIDO`; máxima por equação `ESTIMADO`; limiar/categoria pode ser `ESTIMADO`/`CALCULADO` conforme protocolo.
- **Unidade:** batimentos por minuto (bpm).
- **Metadados:** sensor, estágio, horário, repouso, medicação/contexto quando relevante, protocolo, critério do limiar, critério de máximo, recuperação e equação/versão.
- **Zonas:** registrar base sem ambiguidade: %FCmáx, %reserva FC, %FC de limiar ou %VO₂; indicar como limites foram arredondados. Bases não são intercambiáveis.
- **Bloqueios:** não aplicar zona oficial sem conhecer equação/base e teste; uma FC observada pode ser descrita mesmo se zona prevista estiver bloqueada.
- **Rótulo:** `AULA_SINTESE` 029–030; identificação operacional e salvaguarda `PROPOSTA_CENTRAL`.

### DIC-17 — Recuperação da frequência cardíaca

- **Definição:** diferença entre FC num ponto de referência após exercício e FC numa janela definida. Guardar valores absolutos e sinal da subtração.
- **Tipo:** `CALCULADO` a partir de leituras `MEDIDO`.
- **Fórmula candidata:** `queda_FC_t = FC_referencia − FC_t`, bpm, para valor positivo quando a FC caiu. Se software usa `FC_t − FC_referencia`, documentar convenção e sinal; não reinterpretar rótulos automaticamente.
- **Metadados:** FC inicial/final, tempo exato, recuperação ativa/passiva, postura, protocolo, duração/esforço e equipamento.
- **Comparabilidade:** mesma janela (por exemplo, 30 s com 30 s), atividade de recuperação e critério de teste.
- **Bloqueios:** não classificar como “boa/ruim” sem norma/protocolo/população e condições. Não confundir queda de FC com FC máxima.
- **Rótulo:** `AULA_SINTESE` 030; fórmula de sinal acima `PROPOSTA_CENTRAL` para harmonização, sujeita a conferir relatórios.

### DIC-18 — Velocidade, pace e limiar ventilatório

- **Definição:** velocidade do estágio, velocidade associada a um limiar, ou pace correspondente; registrar cada medida com origem observada/estimada.
- **Unidades:** km/h, m/s ou min/km, mantendo unidade de origem.
- **Conversão geral:** `pace_min_por_km = 60 / velocidade_km_h`; converter fração decimal de minuto em segundos (10 km/h = 6:00 min/km). Não confundir decimal de minuto com segundos.
- **Metadados:** modalidade/superfície, inclinação, equipamento, velocidade/estágio/duração, limiar e método, conversão, critério de término.
- **Comparabilidade:** equipamento, protocolo e limiar definidos iguais; velocidade de esteira não equivale automaticamente a velocidade externa.
- **Bloqueios:** não aplicar zonas derivadas a teste interrompido ou limiar não identificado; manter velocidades registradas.
- **Rótulo:** `AULA_SINTESE` 029/030; conversão `PROPOSTA_CENTRAL`.

### DIC-19 — Pressão arterial e sintomas durante teste

- **Definição:** valores sistólico/diastólico medidos em ocasião e posição definidas; sintomas e motivo de parada são campos separados.
- **Tipo:** pressão e relato são `MEDIDO`/`RELATADO`; rótulos de risco dependem de método e profissional habilitado.
- **Unidade:** mmHg; registrar ambos valores e momento da coleta.
- **Metadados:** manguito, equipamento, posição, repouso, horário/estágio, repetição, operador, sintomas e conduta tomada.
- **Bloqueios:** não inferir liberação clínica ou risco por ausência de flag/resposta no PDF; questão clínica requer revisão profissional apropriada.
- **Responsabilidade:** a Central pode preservar leituras, unidades, condições e pendências; o treinador segue o protocolo profissional aprovado e não converte este registro em diagnóstico ou liberação clínica. Decisões clínicas cabem ao profissional de saúde apropriado.
- **Comparabilidade:** posição, repouso e fase do teste equivalentes.
- **Rótulo:** conteúdo didático resumido em 029–030; regras de governança `PROPOSTA_CENTRAL`. Este DIC não estabelece ponto de corte clínico.

### DIC-20 — Energia, taxa metabólica e macronutrientes

- **Definição:** separar taxa metabólica basal estimada, gasto estimado com exercício, necessidade energética estimada, aporte sugerido, macronutrientes e projeções. Não chamar estimativa de gasto total medido.
- **Tipo:** tipicamente `ESTIMADO`/`CALCULADO` a partir de equações, entradas do software e plano. Confirmar a fonte e equação de cada item.
- **Unidades:** kcal/dia, gramas/dia, g/kg/dia e percentual do total, cada qual com base explícita.
- **Identidades de conferência, não prescrição:** `delta_kcal = aporte − necessidade`; `delta_% = 100×delta_kcal/necessidade`, se necessidade não for zero. Conversão contábil usual de energia: `4×g_proteína + 4×g_carboidrato + 9×g_lipídio`; confirmar se a ferramenta aplica fibra, álcool, arredondamento ou outro modelo.
- **Metadados:** equação/versão, sexo/idade/massa usados, atividade, exercícios e duração, fator de atividade, metas, entradas do plano, distribuição por refeição, regras de arredondamento e responsável.
- **Comparabilidade:** mesma equação, base e definição de treino. Mudança no objetivo ou entradas requer novo cálculo, preservando histórico.
- **Bloqueios:** total/percentual divergente suspende essa recomendação e seus gráficos; não invalida medidas antropométricas independentes. Este dicionário não recomenda dieta, déficit ou meta de emagrecimento.
- **Responsabilidade:** este registro organiza entradas e reconciliação aritmética; não autoriza a Central nem o treinador a prescrever dieta. Uso nutricional individual requer revisão pelo profissional competente e autorizado; outras pessoas da equipe só registram ou encaminham dentro do escopo de sua atuação.
- **Rótulo:** ligação à avaliação no Caderno; conferências matemáticas e bloqueios são `PROPOSTA_CENTRAL`.

### DIC-21 — Baropodometria e centro de pressão

- **Definição:** dados de contato/pressão sob condições de teste; distinguir distribuição de carga, pressão, superfície de contato e trajetória/área do centro de pressão (CoP). CoP não é o centro de massa corporal.
- **Tipo:** sensor pode fornecer dados `MEDIDO`; mapas, índices e classificações processadas são `CALCULADO`.
- **Unidades:** pressão, área, distância, porcentagem ou unidades do fabricante conforme campo; conservar a unidade do dispositivo. Não supor 50/50 como meta obrigatória.
- **Metadados:** dispositivo/modelo, calibração/processamento, pés juntos/separados, olhos, apoio/calçado, postura, duração, tentativas, velocidade/amostragem e operador.
- **Dependências:** cabeçalho com peso pode ser entrada à normalização, ou apenas metadado; confirmar algoritmo antes de bloquear resultados de sensores independentes.
- **Comparabilidade:** mesma configuração, condição, duração, equipamento e processamento.
- **Bloqueios:** peso zero ou ausente bloqueia apenas derivados que de fato o usam. CoP ou pressão isolados não diagnosticam causa, instabilidade individual ou risco de queda.
- **Rótulo:** `AULA_SINTESE` 032; epidemiologia/queda em EVID-INDEX é `ACADEMICA`; limites por indicador `PROPOSTA_CENTRAL`.

### DIC-22 — Postura e índices de correção

- **Definição:** observação descritiva em posição e plano identificados. Escore automatizado, classificação e causa clínica são variáveis distintas.
- **Tipo:** observação `OBSERVADO`; escore `CALCULADO/CLASSIFICACAO_SOFTWARE` conforme ferramenta.
- **Metadados:** posição, plano, pontos anatômicos, câmera/distância se imagem, protocolo, avaliador, escala, componentes e algoritmo.
- **Comparabilidade:** postura, posição, ferramenta, escala e avaliador/procedimento equivalentes; fotografia isolada não representa a função global.
- **Bloqueios:** achado estático não prova diagnóstico, causa de dor nem necessidade de “correção”. Relacionar hipótese a tarefa/relato e revisar com profissional.
- **Responsabilidade:** treinador pode registrar observação e relevância para tarefa de treino; diagnóstico e conduta clínica exigem profissional habilitado apropriado. A Central não recomenda correção automática.
- **Rótulo:** `AULA_SINTESE` 030–031; limites de causalidade `PROPOSTA_CENTRAL`.

## 4.1 Registros relacionados, não indicadores físicos

### DIC-23 — Objetivos, classificações e plano

- **Definição:** objetivo verbalizado, objetivo acordado, prioridade profissional e saída do software são campos diferentes de um indicador físico.
- **Tipo:** objetivo `RELATADO`; meta acordada `RELATADO`/decisão profissional datada; classificação `CLASSIFICACAO_SOFTWARE`.
- **Metadados:** autoria, data, texto de origem, confirmação do aluno, indicador relacionado, prioridade, horizonte de revisão e aprovador.
- **Dependências:** uma norma só é válida se variável, método, unidade, população, equação e versão estiverem identificados.
- **Bloqueios:** campo em branco não prova ausência de objetivo. Uma classificação isolada não cria automaticamente meta ou intervenção.
- **Rótulo:** `AULA_SINTESE` 033 orienta priorização; esquema de campos e confirmação é `PROPOSTA_CENTRAL`.

## 5. Delta longitudinal, erro e precisão

Para variável com anterior e atual:

- `delta_absoluto = atual − anterior` com unidade original.
- `delta_percentual = 100 × (atual − anterior)/anterior` se anterior for válido e diferente de zero.
- Para variável percentual, registrar também diferença em **pontos percentuais**. Exemplo sintético: 25% para 30% = +5 pontos percentuais e +20% relativo.
- Para medidas bilaterais, registrar cada lado, diferença assinada, fórmula e lado de referência antes de reduzir a um percentual.

Diferença observada não é automaticamente mudança verdadeira. Antes de classificar uma alteração como maior que o erro, identificar confiabilidade, erro típico/SEM ou mudança mínima detectável do protocolo, em população e contexto pertinentes. Se esses valores não forem conhecidos, marcar `ERRO_DE_MEDIDA_NAO_QUANTIFICADO`; reportar apenas a diferença observada e não afirmar que superou ruído.

Arredondamento de exibição não é tolerância clínica. Quando há apenas valores arredondados no PDF, registrar a resolução. Divergência compatível com arredondamento pode ser anotada; divergência maior requer retorno à fonte de cálculo. Nunca inferir célula, fórmula ou valor corrigido apenas pela imagem do gráfico.

## 6. Regras de comparabilidade

A resposta à pergunta “houve evolução?” é específica para um par de avaliações, uma variável e uma finalidade. Registrar `SIM`, `NAO` ou `INDETERMINADA`, justificativa e revisor. `INDETERMINADA` não vira `SIM` por padrão.

| Condição | Resposta operacional candidata |
|---|---|
| Mesma variável, método, unidade, protocolo e contexto suficientemente documentados | Pode avançar para revisão de erro/variação; não é aprovação automática |
| Método, equação, posição, ângulo, janela ou critério de término diferentes | Séries distintas ou `NAO_COMPARAVEL`; só combinar com equivalência demonstrada |
| Uma ocasião estimada e outra medida diretamente | Não formar tendência única sem estudo de equivalência |
| Falta data, unidade, lado ou denominador | `CONTEXTO_INSUFICIENTE`; bloquear derivado dependente |
| Mudança de contexto fisiológico (ex.: gestação/pós-parto) | Preservar valores, segmentar análise pela pergunta e consultar contexto; não aplicar correção automática |
| Dado relativo depende de massa confirmadamente errada | Bloquear derivado; força/medida absoluta segue avaliação independente |
| Gráfico mostra tendência, mas valores ou fórmula não estão disponíveis | `NAO_AUDITADO` para a tendência numérica; solicitar fonte tabular/fórmula |

Um método novo, instrumento diferente ou mudança de condição pode motivar uma linha de base nova para determinada pergunta, sem apagar séries antigas. A decisão de adotar nova referência é profissional e deve ter data e justificativa.

## 7. Mapa prioritário de dependências

| Entrada | Saída dependente potencial | O que confirmar | O que pode permanecer independente |
|---|---|---|---|
| Massa + estatura | IMC | Mesma ocasião, unidades e método | Medidas absolutas não ligadas a estas entradas |
| Massa + % gordura | Massa gorda/massa livre de gordura derivadas | Mesmo modelo, equação e datas | Dobras/espessuras brutas; massa muscular estimada por outra equação não se valida por esta conta |
| Massa corporal | Força relativa, VO₂ relativo, equação de energia | Método informa explicitamente uso da massa e data usada | Força absoluta, FC, protocolo observado |
| Força D/E | Assimetria | Mesmo teste/lado/unidade e equação | Peso corporal, salvo fórmula que o use |
| Força + braço de alavanca/ângulo | Torque | Modelo geométrico e medição do braço | Força registrada pode permanecer, com sua unidade |
| Carga + repetições + equação | 1RM estimado | Equação/versão e população | Carga/reps brutas |
| FC/VO₂ de referência | Zonas e categoria | Base percentual, equação, limiar e protocolo | FC observada por estágio |
| FC inicial + FC em janela | Recuperação cardíaca | Janela, sinal, postura/recuperação | FC de cada ponto bruto |
| Velocidade | Pace | Velocidade positiva, unidade e arredondamento | Valor original em km/h |
| TMB, exercício, atividade, aporte | Necessidade, saldo energético, macros e projeções | Fórmula, fator e totais conciliados | Medidas físicas observadas independentes |
| Pressões/sensores baropodométricos | Índices normalizados por peso/equilíbrio | Manual do aparelho e dados usados | Componentes brutos se independência confirmada |

Se não se sabe se uma saída depende de uma entrada, não declarar independência ou propagação como fato. Registrar motivo de bloqueio DEPENDENCIA_NAO_MAPEADA e estado CONTEXTO_INSUFICIENTE para o derivado; consultar manual/fórmula. Essa incerteza suspende a decisão que exige o derivado, não todo o laudo.

## 8. Pendências específicas para tornar o dicionário executável por pessoas

Esta lista é de validação documental para uma futura revisão; não é autorização para alterar arquivos operacionais.

- Identificar fabricantes, modelos, versões e manuais dos instrumentos usados em antropometria, dinamometria, BIA, ultrassom, baropodometria, ventilometria e análise postural.
- Recuperar a equação e a fonte de cada saída calculada no aplicativo de laudo, incluindo convenção de lado e arredondamento.
- Conferir nas planilhas originais as fórmulas reais e células de entrada para IMC, índices relativos, assimetria, torque, 1RM, VO₂/zonas e estimativas energéticas. Manter escopo de leitura até autorização própria para qualquer escrita.
- Rever diretamente os vídeos 28–33, capturar afirmações com minutagem e registrar o que é protocolo ensinado versus resumo do caderno.
- Para cada faixa normativa usada, documentar estudo/fonte, população, versão do teste e limitações; na ausência, retirar a classificação do uso decisório.
- Definir confiabilidade/erro de repetição para medições que serão usadas em tendência. Sem evidência suficiente, reportar diferença bruta sem “mudança verdadeira”.
- Especificar preparação e restrições de cada teste somente a partir de manual e/ou protocolo aprovado; este DIC não inventa regras de hidratação, jejum, medicação ou liberação.

## 9. Complementação acadêmica

As aulas e o Caderno formam a fonte didática ACESSO; referências científicas abaixo complementam limites e não são atribuídas ao professor.

| Fonte | Relação com o dicionário | Limites de uso |
|---|---|---|
| Parkinson et al. 2021, [DOI 10.52082/jssm.2021.594](https://irep.ntu.ac.uk/id/eprint/44007/) | Revisão sobre índices e limiares de assimetria; alerta contra cortes arbitrários sem origem robusta | Não define uma fórmula universal ou um limiar da ACESSO |
| EVID-INDEX EVID-001, Ross et al. 2020, PMID 32020062 | Complementa leitura de cintura junto ao IMC | Consenso; não transforma perímetro isolado em diagnóstico |
| EVID-INDEX EVID-002, Mayorga-Vega et al. 2014, PMID 24570599 | Validade do sit-and-reach para estimativas de extensibilidade | Resultados variam por versão/população; teste não diagnostica toda a cadeia posterior |
| EVID-INDEX EVID-005, Cruz-Jentoft et al. 2019, PMID 30312372 | Diferencia força, quantidade/qualidade muscular e desempenho em consenso geriátrico | Não autoriza diagnóstico automático por um laudo de treinador |
| EVID-INDEX EVID-006/007, PMIDs 36178003 e 31792067 | Contextualiza avaliação/intervenção de quedas | Não permite prever risco por CoP, TUG ou pressão plantar isolados |
| Referências candidatas em VAL-001 sobre composição gestacional/pós-parto, PMIDs 35623838 e 39974841 | Indicam que população, fase e método importam ao interpretar bioimpedância e gordura corporal | Revisão completa e aplicabilidade ao caso específico ainda pendentes; não recalcular o histórico individual |

EVID-INDEX informa que parte das fontes foi conferida por resumo. A citação nesta tabela não equivale à leitura integral, avaliação formal de viés ou prova de aplicabilidade ao protocolo ACESSO. Antes de uma regra crítica, documentar pergunta, população, desenho, instrumentos, resultado, limitações e revisor científico.

## 10. Casos demonstrativos sintéticos

Os exemplos são fictícios e não reproduzem medições de alunos.

**DIC-T01 — entrada errada e força absoluta.** Um anexo traz massa 60 kg, mas a massa válida da ocasião é 80 kg; dinamometria mostra D=30 e E=27 kgf em protocolo equivalente. O índice de força relativa usando 60 kg fica bloqueado. Valores absolutos ficam registrados para revisão independente. Assimetria candidata: 10%, se a equipe aprovar e versionar a fórmula descrita; não diagnostica problema nem prescreve carga.

**DIC-T02 — IMC não é composição.** Para massa 80 kg e estatura 2,00 m, IMC geral = 20 kg/m². Esse cálculo não define percentual de gordura nem valida massa muscular estimada.

**DIC-T03 — percentual e pontos percentuais.** Mudança de 25% para 30% equivale a +5 pontos percentuais e +20% relativo ao valor inicial. Indicar ambos para evitar rótulo ambíguo.

**DIC-T04 — zero de sistema.** Campo de peso 0,0 kg aparece em exportação sem evidência de pesagem. Marcar `SEM_DADO`; não calcular IMC nem declarar peso real zero. Se pressão baropodométrica for comprovadamente independente, avaliar esse canal separadamente.

**DIC-T05 — interrupção.** Uma pessoa para por desconforto de máscara no estágio 5; outra conclui protocolo. FCs observadas continuam sendo dados de suas ocasiões. Não afirmar que primeira mediu VO₂ máximo nem comparar como dois testes máximos equivalentes.

**DIC-T06 — conversão de pace.** Velocidade 10 km/h corresponde a 6:00 min/km pela identidade matemática. Isso não significa que 10 km/h foi velocidade de limiar; a origem da velocidade ainda importa.

## 11. Critérios de aprovação do DIC-001

- [ ] Treinador aprova definições, nomes e distinção entre massa magra, massa livre de gordura e massa muscular.
- [ ] RML (DIC-14), flexibilidade (DIC-24) e registro de objetivos/decisões (DIC-23) permanecem como conceitos separados, com finalidades e responsáveis definidos.
- [ ] Equipamentos, unidades, protocolos e fórmulas reais foram identificados para os indicadores que serão usados.
- [ ] Cada derivado aponta para entradas e versão; dependências desconhecidas permanecem explícitas.
- [ ] Estados e bloqueios por indicador são compatíveis com VAL-001 e preservam dados independentes.
- [ ] Séries longitudinais especificam método, protocolo, condição e pergunta antes de declarar comparabilidade.
- [ ] Normas/cortes só são registrados com fonte, população e versão do teste; nenhum corte improvisado entra por padrão.
- [ ] Aula, literatura e proposta Central aparecem separadas; alegações didáticas diretas têm minutagem verificada.
- [ ] Exemplos sintéticos DIC-T01–T06 produzem a saída documental esperada.
- [ ] Revisor responsável e data de aprovação ficam registrados, com versão e escopo.

Mesmo aprovado como dicionário, o DIC não implementa fórmula em Sheets/Apps Script e não autoriza escrita em registros individuais. Uma futura implantação requer especificação, casos TEST-001, revisão técnica e aprovação operacional separada.

## 12. Próxima etapa vigente

Consolidar com VAL-001, TEST-001 e [AV-003](https://drive.google.com/file/d/1U_ylnB-oOOoK89lCw5p3aSkYnaWWDbMJ/view?usp=drivesdk) o mapa por versão da fonte, protocolo, unidade, fórmula e dependências. Selecionar decisões coerentes e revisar suas fontes antes de parâmetros de prescrição. Não repetir como pendentes os testes de cadastro/objetivos já registrados em TEST-001 §13; testes de indicadores/fórmulas e o novo TC-57 continuam não executados.

O dicionário mantém os IDs DIC-01–24: 24 registros, 23 famílias de indicadores + DIC-23 de contexto/objetivos. TUG permanece candidato no AV-001, sem entrada completa no DIC e sem obrigatoriedade universal. O contrato AV-003 explicita essa lacuna, sem inventar protocolo ou medida.

## 13. Registro da versão

v0.1 — 19/10/2026: primeira proposta de dicionário orientada pelo CENTRAL-001, Caderno, ACESSO-INDEX, fichas 028–033, EVID-INDEX e VAL-001. Define 23 grupos de indicadores e as informações necessárias para auditá-los. Fórmulas reais do software/equipamentos, protocolos específicos, erros de medida e cortes normativos permanecem pendentes de documentação e aprovação do treinador.

v0.2 — 19/10/2026: harmoniza estados com VAL-001, separa RML de flexibilidade, reclassifica DIC-23 como registro de contexto/decisão e explicita responsáveis e limites profissionais para pressão/sintomas, energia/macronutrientes e postura. Nenhuma regra foi executada ou instalada.

## Revisão de coerência — 20/10/2026

Revisão documental v0.3 em resposta ao AUD-005. Referências a versões anteriores nas fontes e no histórico descrevem a elaboração anterior; o LEIA-ME aponta a posição atual pelos mesmos IDs do Drive. Esta edição não executa testes nem aprova regras científicas ou prescrições.



## 14. Consolidação operacional — v0.4, 20/10/2026

Preserva IDs DIC-01–24, definições, estados de qualidade e limites. Não cria DIC-25. AV-003 v0.5 contém a posição vigente por domínio; MET-003 localiza os campos e fórmulas observados; CAS-001 demonstra decisões sintéticas. Esta seção atualiza a situação de investigação, sem aprovar protocolos/doses ou sobrescrever resultados.

| Registro | Identificado nesta sequência de estudo | Obrigatório no consumo futuro |
|---|---|---|
| DIC-09/10/11/12/13 | Procedimento local de joelho relatado; torque e cargas sem equação confirmada | Seleção real de tentativa e protocolo por coleta; preservar kgf; não inventar Nm/1RM nem converter força em kg de máquina |
| DIC-15 | Ramo Fórmula da planilha e campo manual Ventilometria; Fitcheck como aparelho informado | Natureza por campo e ocasião; ventilação/máscara não prova VO₂ medido diretamente; equação estimativa pendente de homologação |
| DIC-16 | Reserva de FC e estimativa a 85% no ramo observado; FC predita 205,8−0,685×idade no exemplar | Base percentual explícita; FC de repouso/pico/predita distintas; limiar Fitcheck e heurística separados |
| DIC-17 | Recuperação habitual 1 min ativo a 4,5 ou 5 km/h + 1 min sentado | Velocidade, transições, relógio e FC basal do delta; preservar sinal original; não importar cortes de outra condição |
| DIC-18 | Seleção por campo, interpolação e extrapolação; ponte manual Exportar→Importar | Validar faixa/ordenação/modalidade; pace em min/km=60÷km/h, se velocidade>0 e unidade confirmada |
| DIC-22 | PSU/adaptação e ICP por média regional observados | Fórmula/versão e rubrica; comparação não mistura agregações; não diagnóstico |
| DIC-24 | Wells de rotina e referência CSTF localizada | Procedimento, zero, unidade e seleção; instrumento Sanny adicional não identificado |
| DIC-23 e todos os campos temporais | Dados atuais na tela podem vir de ocasião anterior | Data de coleta, transferência e origem por campo; objetivo relatado/confirmado/prioridade/proposta distintos |

PSE medida por estágio, referência textual esperada na tabela, PSE global de sessão e RIR são registros distintos, sem novo ID artificial. Borg 0–10 está confirmado como relato; âncoras/instrução locais continuam pendentes.

Dependências: guardar resultado_id de cada entrada e revisão da fórmula. Alteração de massa reabre normalizações dependentes; não descarta força absoluta por associação. Mudança de fórmula ICP reabre comparação, não cria evolução corporal. Troca de referência/ocasião reabre propostas dependentes, sem apagar planos anteriores. CAS-001 contém exemplos sintéticos e nenhuma implantação.

v0.4: atualização do estado de investigação e da linhagem; referências históricas do corpo mantidas como histórico, com esta seção e AV-003 v0.5 como posição atual. Aprovação metodológica pendente.


## 15. Campos complementares de auditoria — posição v0.5

AV-003 §14 contém R-OP-01–06; não duplicar sua lógica como fórmula independente. DIC-01–24 permanecem preservados.

| Objeto | Campos adicionais e unidade | Consequência de ausência/inconsistência |
|---|---|---|
| Recuperação/carga | variável/escala; valor bruto ou ausência; data; janela/fórmula/revisão; número de observações; critério de cobertura e finalidade | Não interpretar vazio como baixa recuperação, zero esforço ou treino não realizado. Zero legítimo exige proveniência. Sem suporte, bloquear só o derivado/alerta dependente |
| Capacidade e dose | capacidade_id; ênfase; desfecho; tarefa; método; séries/reps/lados; carga/unidade/aparelho; velocidade/intenção; esforço e intervalo | Funcional, ambiente, cor ou nome de aparelho não definem capacidade/intensidade. Nomenclatura legada mapeada sem reescrever a fonte |
| Volume agregado | tipo de contagem; unidade de análise; músculos/tarefas/lados incluídos; sobreposição e fórmula | Média por grupamento, séries de exercícios, séries por membro e total não são intercambiáveis; nenhuma contagem isolada prova estímulo |
| Tempo | ativo/bloco/total; min–max quando estimado; séries/lados; descanso; ajuste; transição; reserva já incluída ou não | Recalcular cenários e revisar viabilidade; orçamento manual não é tempo observado. Não multiplicar séries duas vezes |
| Progressão | plano_id/versão; alvo; execução observada; controle; assistência; esforço relatado/estimado; sintomas/resposta posterior; critério e parâmetro; decisão do treinador | Não preencher realizado a partir do planejado nem elevar carga pela data; preservar versão anterior |
| Dupla tarefa | tarefa motora; tarefa cognitiva; simultânea/consecutiva; janela; instrução/prioridade; apoio; medida de cada componente; comparador simples equivalente | Equipamento não define dupla tarefa; resultado cognitivo não substitui controle motor. Custo calculado exige denominador/fórmula conhecidos |
| DIC-24 — flexibilidade | região/movimento/lado; pergunta; protocolo/equipamento; ativo/passivo; posição/apoio; método; dose por lado; frequência; tolerância; momento; comparação | Wells não determina toda a prescrição. Decisão específica pendente preserva usos independentes; sem indicação, justificar ausência em vez de impor rotina universal |

As escalas de esforço e observações não são intercambiáveis: RIR-alvo, RIR estimado, PSE de estágio e PSE global recebem origem própria. Dor, assistência e execução são registros separados.

Fontes e limites: AV-003 §14.7. CAS-001 v0.2 é exemplo inteiramente fictício; os dados novos de sua variante de flexibilidade não pertencem a alunos reais. TC-70–89 seguem NAO_EXECUTADO contra motor. v0.5 — 20/10/2026: contratos complementares por uso, sem aprovação profissional presumida.
