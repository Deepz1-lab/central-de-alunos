---
id: VAL-001
titulo: "Auditoria de Laudos — Central de Alunos"
versao: "0.3"
data: "2026-10-20"
estado: "PROPOSTA_DOCUMENTAL_PENDENTE_APROVACAO_TECNICA"
implementacao: "Nenhuma; regras documentais, sem integração ou execução automática"
origem_regras: "Operacionalização proposta pela Central, fundamentada nas referências discriminadas"
privacidade: "Casos desidentificados; números dos exemplos sintéticos não reproduzem medições pessoais"
---

# VAL-001 — Auditoria de Laudos v0.3

> **Revisão de coerência — 20/10/2026.** Recebimento (`NAO_AUDITADO`) e insuficiência identificada (`CONTEXTO_INSUFICIENTE`) não são intercambiáveis. Registrar objeto/finalidade: o histórico de recebimento pode coexistir com o achado de metadado ausente, sem produzir validação. Divergência desconhecida é G2; uso decisivo de entrada conhecida incorreta é G3, além dos demais critérios de risco/identidade da §4.2. TC-01/06 foram alinhados. Contrato integrado: [AV-003](https://drive.google.com/file/d/1U_ylnB-oOOoK89lCw5p3aSkYnaWWDbMJ/view?usp=drivesdk).


## 1. Finalidade e limites

Estabelecer a camada de qualidade que antecede interpretação, Plano de Ação e qualquer futura automação. A unidade de auditoria é **campo + avaliação + finalidade de uso**, e não o aluno inteiro. Um erro de peso pode bloquear índices normalizados sem invalidar força absoluta independente; condições diferentes podem impedir uma conclusão de evolução sem tornar a coleta inexistente.

Este documento é uma proposta operacional para revisão do treinador. Não aprova laudos, não emite diagnóstico, não prescreve treino ou alimentação, não corrige dados e não autoriza implantação. Foram consultadas referências documentais no Drive e os três PDFs completos fornecidos nesta sessão. Houve extração textual de todas as páginas e inspeção visual de páginas críticas. Não houve auditoria das fórmulas internas das planilhas, calibração dos instrumentos, observação da coleta nem revisão integral direta dos vídeos nesta etapa. Consistência aritmética não equivale a validade fisiológica.

**Escopo executado:** leitura das fontes e criação deste novo arquivo. Nenhum laudo, planilha, prescrição, cadastro, Apps Script, gatilho, automação ou backup existente é alterado. DIC-001 e TEST-001 são especificações documentais relacionadas; continuam sem execução ou instalação.

## 2. Fontes e separação de autoria

### 2.1 Referências do projeto efetivamente consultadas

| Referência | Versão / localização | Uso nesta auditoria |
|---|---|---|
| CENTRAL-001 | [Visão e arquitetura v0.2](https://drive.google.com/file/d/1yRUZRBgpXiwAd0XCvGusrJ1QCqJ8Z4h4/view), seções 4–7 e 9–12 | Auditoria antes da análise, proveniência, estados por variável, marcos de aprovação |
| Caderno Técnico-Científico | [v0.1](https://drive.google.com/file/d/1Gy1mj99k37Ook7gXiDjb48cUbT_uUW0E/view), princípios, aulas e evidências | Separar medida, estimativa, interpretação, decisão e requisito de software |
| ACESSO-INDEX | [v0.1](https://drive.google.com/file/d/1WbAhRFbk5RtgVrkhzvX5s60gXnfKP9Z9/view), seções 2–9 | Roteamento documental, dados ausentes, bloqueios e promoção de regras |
| ACESSO-028 | [Laudo 1 v0.1](https://drive.google.com/file/d/1FhWISXVVOQgnUP8jso5p7cRPgT8RfR0C/view) | Antropometria, métodos de composição, contexto e estimativas |
| ACESSO-029 | [Laudo 2 v0.1](https://drive.google.com/file/d/1Sjv1KmZlFTdRll8YpiSR4LeNTRCWlYQd/view) | Wells, VO₂, protocolo, medido versus estimado |
| ACESSO-030 | [Laudo 3 v0.1](https://drive.google.com/file/d/1YszVUQy3Vzt3uZugSkpTol8K_2IIKRK3/view) | Recuperação cardíaca, postura e limites de inferência |
| ACESSO-031 | [Laudo 4 v0.1](https://drive.google.com/file/d/1Myeo-96WhM93MR99Yljb5iAOaZAKaNDw/view) | Dinamometria por movimento/lado, assimetria e transferência de carga |
| ACESSO-032 | [Laudo 5 v0.1](https://drive.google.com/file/d/19VVOdf2iDOZOAeKTaUJGek_5T5ZH29UK/view) | Baropodometria, CoP, condições e função |
| ACESSO-033 | [Planejamento v0.1](https://drive.google.com/file/d/1tu0LZ5zOnw1D8g7ybJW-8fVeGeRKGnJ2/view) | Objetivo acordado, prioridades e revisão profissional |
| EVID-INDEX | [Registro bibliográfico v0.1](https://drive.google.com/file/d/1uiJyfdk4EWgcBfOl1V6dp0W-U-SAnik7/view) | Localizador de literatura; referências ali registradas não são revalidadas integralmente neste VAL |

As fichas 28–33 permanecem **FICHA_PRELIMINAR**. A leitura dos MDs não equivale a rever os vídeos. Atribuições à aula abaixo significam “segundo a ficha/Caderno”, sem inventar fala literal, minutagem ou protocolo aprovado.

### 2.2 Etiquetas obrigatórias para cada afirmação

| Etiqueta | Significado | Evidência exigida |
|---|---|---|
| `AULA_SINTESE` | Tema atribuído ao ensino ACESSO pelas fichas existentes | Aula, MD e versão; trecho direto ainda pendente |
| `AULA_VERIFICADA` | Afirmação conferida diretamente na gravação | URL, intervalo temporal, contexto e revisor; não preenchida nesta etapa |
| `ACADEMICA` | Complementação científica externa | Fonte, desenho/população, leitura realizada e limites; jamais atribuída ao professor |
| `PROPOSTA_CENTRAL` | Regra operacional aqui formulada | ID, entradas, exceções, bloqueio, teste e aprovação pendente |
| `OBSERVADO_PDF` | Informação efetivamente exibida no PDF | Corpus, página física e seção; não prova método de coleta |
| `CONFIRMADO_TREINADOR` | Informação fornecida diretamente pelo treinador em 19/10/2026 | Autor da confirmação, data e alcance; preservar divergência histórica |
| `HIPOTESE_A_CONFERIR` | Explicação ainda não comprovada | Evidência faltante e pergunta específica |

Todas as regras VAL-R abaixo são `PROPOSTA_CENTRAL`, alinhadas aos documentos, e não transcrições dos vídeos. Ciência informa limites de interpretação; não transforma uma regra nossa em método oficial ACESSO.

### 2.3 Corpus privado consultado e rastreabilidade

Os três arquivos foram identificados pelo conteúdo, não pelo nome genérico dos PDFs mesclados. As páginas indicadas são **páginas físicas do PDF completo, contadas desde 1**, pois anexos reiniciam a paginação impressa.

| Corpus | Escopo | SHA-256 do PDF recebido |
|---|---|---|
| C01 | Avaliação completa AV13, 34 páginas | `bf1aa794023ea03ea232c6286d716d5f0a3cbdef6c086261b07cdb284fb02945` |
| C02 | Avaliação completa AV2 e anexos, 44 páginas | `0a71ca975290684d23c586551cb2f033aad1ee3b78f908886c1b514085fbaf14` |
| C03 | Avaliação completa AV2 e anexos, 44 páginas | `99725996126779dd7fd0b9e0aef413bbde204e9ee2f334d9e0385c4236168a32` |

Nomes, documentos pessoais, nascimento, imagens corporais e caminhos locais não são reproduzidos. Os códigos e hashes permitem ao responsável reencontrar as fontes privadas; por isso este inventário é desidentificado, **não uma garantia de anonimização irreversível**, e não deve ser publicado automaticamente. A chave de identificação fica com o treinador nas fontes originais, sem novo cadastro criado aqui. Os exemplos numéricos da seção 10 são fictícios e independentes dos laudos.

Contexto confirmado pelo treinador: C02 e C03 possuem peso incorreto nos relatórios de dinamometria; C01 passou por gestação/pós-parto durante o histórico comparado; C02 busca hipertrofia e qualidade de vida apesar do campo que registra ausência de objetivos. Essas confirmações têm procedência distinta dos PDFs e não os reescrevem.

## 3. Modelo mínimo de registro de auditoria

Cada achado deve registrar:

estado_qualidade[], motivo_bloqueio[], grau_impacto_VAL, grau_evidencia

Tipos de dado separados: `MEDIDO`, `ESTIMADO`, `CALCULADO`, `RELATADO`, `OBSERVADO`, `CLASSIFICACAO_SOFTWARE`. Registrar valor e unidade originais antes de qualquer normalização. Uma extração de texto não pode escolher lado, marcar PAR-Q ou interpretar um gráfico sem conferir a apresentação original quando houver ambiguidade.

Um campo sem metadados suficientes não é promovido a VALIDADO apenas porque está impresso. Uma confirmação do treinador resolve o fato explicitamente confirmado, mas não aprova automaticamente fórmulas, calibração ou todos os descendentes.

## 4. Estados de qualidade, gravidade e liberação

### 4.1 Estados por campo e finalidade

| Estado | Condição | Uso permitido |
|---|---|---|
| `NAO_AUDITADO` | Fonte recebida, ainda sem checagem suficiente | Arquivar e exibir como não auditado |
| `SEM_DADO` | Campo ausente, ilegível ou zero sem evidência de medição | Registrar a ausência; impedir cálculo que dependa do campo |
| `CONTEXTO_INSUFICIENTE` | Falta protocolo, objetivo, condição ou equação | Descrição com ressalva; suspender a inferência que exige o dado |
| `INCONSISTENTE` | Fontes ou identidades aritméticas não reconciliadas | Preservar versões e apontar conflito |
| `NAO_COMPARAVEL` | Comparação específica não tem equivalência demonstrada | Descrever cada avaliação separadamente |
| `NAO_APLICAVEL` | Indicador não pertinente à finalidade/população | Não gerar meta ou classificação a partir dele |
| `PENDENTE_REVISAO_CLINICA` | Contexto de segurança requer avaliação apropriada | Registrar e encaminhar; bloquear progressão de risco relacionada |
| `VALIDADO` | Checagens necessárias ao uso declarado concluídas, com revisor e data | Somente o uso especificado, sem equivaler a liberação clínica |

Erro de fórmula não é sinônimo de dado ausente. Registrar `ERRO_DE_FORMULA` como motivo específico: se a equação ou dependência não estiver mapeada, o derivado fica `CONTEXTO_INSUFICIENTE`; se uma operação conhecida não reconciliar com suas entradas, fica `INCONSISTENTE`. Preservar entradas e indicadores independentes. Usar `SEM_DADO` somente quando a entrada estiver realmente ausente, ilegível ou sem evidência de medição.

Estados de qualidade podem coexistir quando descrevem aspectos diferentes do mesmo dado ou uso. `VALIDADO` sempre se limita à finalidade registrada; não significa aprovação para todas as comparações, classificações ou decisões. `DEPENDENCIA_NAO_MAPEADA` é um motivo de bloqueio, não um estado de qualidade: registrar o estado aplicável (geralmente `CONTEXTO_INSUFICIENTE`) e a relação entrada→derivado em `bloqueio_id/alcance`. Estados do fluxo (por exemplo, `EM_AUDITORIA`) e resultados de execução de testes (`PASSOU`, `FALHOU`, `BLOQUEADO`, `NAO_EXECUTADO`) pertencem a objetos diferentes e não substituem os estados de qualidade. Ausência de flag não significa aprovação.

### 4.2 Gravidade do achado, independente do estado

| Grau | Definição operacional | Resposta |
|---|---|---|
| G0 — informativa | Nota de contexto sem comprometimento do uso definido | Registrar |
| G1 — baixa | Apresentação/metadado secundário, sem alterar resultado demonstravelmente | Corrigir apenas em futura versão autorizada; manter rastreio |
| G2 — relevante | Interfere em comparação, classificação, prioridade ou comunicação | Suspender esse uso e obter revisão |
| G3 — alta | Entrada conhecida incorreta em cálculo decisivo; identidade não resolvida; risco ou aplicação indevida de carga/zonas | Bloquear produto dependente até resolução profissional |

Grau G0–G3 mede o impacto potencial do achado no uso declarado, não gravidade clínica. A severidade de um defeito de software, quando registrada em TEST-001, é outro eixo e não deve ser convertida automaticamente em G0–G3. Não atribuir doença a uma inconsistência. Achados de segurança recebem encaminhamento apropriado; VAL não estabelece limiares clínicos nem substitui atendimento urgente quando necessário.

### 4.3 Bloqueio é uma relação explícita

Todo bloqueio especifica **entrada comprometida → saídas dependentes → decisão impedida**. Não bloquear automaticamente todo o laudo. Se a identidade do anexo estiver realmente incerta, colocar o anexo em quarentena de atribuição; outros documentos com identidade confirmada continuam independentes.

`VALIDADO` exige responsável, data, escopo, evidência e versão. Um desbloqueio gera nova decisão documental que preserva o achado anterior, nunca apaga o conflito. Se a entrada muda, todos os descendentes precisam de nova revisão; não manter selo antigo de validação em resultado recalculado.

## 5. Regras operacionais candidatas

| ID | Verificação / disparador | Estado e gravidade inicial | Bloqueio específico e o que preservar | Evidência para desbloquear |
|---|---|---|---|---|
| VAL-R01 — proveniência | Recebimento e inspeção de fonte/metadados por finalidade | Recebido sem conferência: NAO_AUDITADO; metadados necessários ausentes após inspeção: CONTEXTO_INSUFICIENTE, G2; identidade incerta: G3 para atribuição | Suspender apenas atribuição, fusão ou usos que exigem metadados ausentes; preservar fontes independentes | Fonte original, versão/localização, vínculo e revisão por finalidade documentados |
| VAL-R02 — tempo | Distinguir coleta, emissão/exportação, consulta e próxima reavaliação | CONTEXTO_INSUFICIENTE, G2 | Não ordenar evolução pela emissão ou pela data futura de revisão | Datas de coleta por modalidade confirmadas |
| VAL-R03 — peso/estatura | Divergência entre módulos versus erro confirmado, sempre por uso | INCONSISTENTE, G2 para conflito ainda não esclarecido; G3 se entrada sabidamente incorreta sustenta cálculo decisivo ou há risco/aplicação indevida de carga/zonas | Suspender IMC, força relativa e outros descendentes pertinentes; preservar medidas absolutas independentes sob auditoria própria | Medida válida da ocasião ou reconciliação datada; auditar cada fórmula e justificar impacto |
| VAL-R04 — ausência/valor padrão | Campo vazio, traço ou zero sem evidência de medição; erro de fórmula é motivo específico, não ausência | SEM_DADO para entrada ausente/sem medição; CONTEXTO_INSUFICIENTE ou INCONSISTENTE para saída de fórmula, conforme mapeamento, G2 | Não interpretar zero como capacidade nula; bloquear apenas derivados dependentes; preservar entrada e canais independentes | Confirmar medição, fórmula, dependências e origem do valor |
| VAL-R05 — unidades | kg, kgf, N, Nm, cm/m, bpm, ml/kg/min, porcentagem e ua | INCONSISTENTE ou CONTEXTO_INSUFICIENTE, G2 | Impedir soma/conversão/classificação incompatível; preservar unidade original | Definição dimensional e conversão documentadas |
| VAL-R06 — protocolo | Falta postura, movimento, ângulo, tentativas, equipamento, seleção do resultado | CONTEXTO_INSUFICIENTE, G2 | Sem classificação ou tendência automática; resultado descritivo permanece | Protocolo versionado e condições verificadas |
| VAL-R07 — composição/contexto | Gestação/pós-parto, alteração fisiológica ou mudança de método entre ocasiões | NAO_COMPARAVEL para inferência direta não sustentada, G2 | Bloquear “piora do treino”, perda muscular ou meta automática baseada só no delta; conservar medidas datadas | Cronologia fisiológica e técnica, equação aplicável e julgamento contextual |
| VAL-R08 — objetivos | Objetivo ausente no formulário e existente em relato confirmado | INCONSISTENTE no campo; CONTEXTO_INSUFICIENTE nos detalhes, G2 | Bloquear conclusão “não tem objetivos” e prioridade automática de emagrecimento; preservar relato confirmado | Objetivo acordado, indicador, prioridade e revisão; sem alterar cadastro nesta etapa |
| VAL-R09 — dinamometria | Checar identidade, lados, gesto e forma de calcular assimetria | CONTEXTO_INSUFICIENTE até revisão, G2 | Não converter kgf em 1RM/carga de máquina; não diagnosticar pela assimetria; preservar medidas absolutas válidas | Técnica, equação, referência, repetibilidade e aprovação do uso |
| VAL-R10 — esforço/recuperação | Teste interrompido, encerramento diferente, estimativa de VO₂ ou janela de FC não documentada | CONTEXTO_INSUFICIENTE/NAO_COMPARAVEL, G2; uso arriscado G3 | Sem declarar máximo fisiológico ou criar zonas definitivas; preservar FC/estágio observados | Motivo de término, critérios, duração, método de VO₂ e recuperação confirmados |
| VAL-R11 — aritmética | Totais, percentuais, denominadores, sinal ou gráficos não reconciliados | INCONSISTENTE, G2/G3 conforme uso | Suspender derivado e recomendação dependente; não invalidar entradas medidas | Equação real, referências de células e valores não arredondados auditados em trabalho futuro autorizado |
| VAL-R12 — postura/equilíbrio | Escore/pressão/CoP isolado tratado como diagnóstico | CONTEXTO_INSUFICIENTE, G2 | Bloquear causalidade de dor/queda e meta obrigatória de simetria; manter descrição | Método, contexto funcional e avaliação profissional pertinente |
| VAL-R13 — referência | Corte ou categoria sem população, teste ou fonte identificados | CONTEXTO_INSUFICIENTE/NAO_APLICAVEL, G2 | Bloquear rótulo normativo e consequência automática | Referência adequada e limites revisados |
| VAL-R14 — execução | Plano, meta ou marca gráfica tomado como atividade realizada | CONTEXTO_INSUFICIENTE, G2 | Não presumir adesão, efeito ou dose executada | Registro de sessão reconciliado pelo treinador |

## 6. Protocolos e comparabilidade

Comparabilidade é registrada **por par de avaliações, variável e pergunta**, com resposta `SIM`, `NAO` ou `INDETERMINADA`, justificativa e revisor. `INDETERMINADA` suspende conclusão de evolução até obtenção de metadados; não equivale à prova de que toda comparação seja impossível.

| Domínio | Metadados mínimos a confirmar antes de comparar |
|---|---|
| Antropometria/dobras | Sítio anatômico, lado, instrumento, técnica, tentativas, operador, equação por população e condições de coleta |
| Bioimpedância | Modelo, equação/algoritmo, condições preparatórias, contexto fisiológico; não trocar massa livre de gordura por massa muscular |
| Ultrassom | Sítio, plano, pressão do transdutor, posição, aparelho, operador; espessura regional não é massa de todo o corpo |
| Dinamometria | Articulação/gesto/lado, ângulo, estabilização, posição, tipo de contração, braço de alavanca quando pertinente, unidade, calibração e resumo das tentativas |
| 1RM | Medido ou estimado, exercício e máquina, amplitude, técnica, carga, repetições e equação; não confundir com estimativa gerada por dinamômetro |
| Wells/RML | Versão, referência zero, aquecimento, tentativas, amplitude/critério de repetição válida e contagem; repetições parciais e completas não são equivalentes sem regra explícita |
| Cardiorrespiratório | Modalidade, velocidade/inclinação ou watts, estágio/duração, critério e motivo de término, medicação/contexto pertinente, VO₂ medido ou estimado e algoritmo |
| Recuperação de FC | FC de referência, segundos exatos, recuperação ativa/passiva, postura, protocolo e convenção de sinal |
| Postura/baropodometria | Condição estática/dinâmica, pés juntos/separados, base, calçado, olhos, duração, repetições, equipamento, processamento e unidade |

Mesmo aparelho não garante comparabilidade se técnica ou contexto mudou. Equipamentos diferentes só podem compor a mesma série se houver equivalência demonstrada, com limites. Não inventar tolerância de mudança verdadeira: erro típico, confiabilidade e eventual mudança mínima detectável dependem do método. Sem esses dados, reportar diferença observada sem afirmar adaptação real.

Para C01, registrar fases fisiológicas e datas confirmadas antes de segmentar séries. Não deduzir data do parto, lactação ou estágio gestacional pelos números. Gestação/pós-parto não torna automaticamente todas as medidas inválidas nem autoriza concluir ausência de mudança real: restringe a atribuição direta e exige método/contexto adequado. Novas linhas de base são candidatas para avaliação profissional, sem apagar o histórico.

## 7. Dependências de fórmulas e verificações reproduzíveis

### 7.1 Mapa mínimo de propagação

| Entrada | Descendentes conhecidos/conceituais | Limite da propagação |
|---|---|---|
| Massa corporal e estatura | IMC; indicadores relativos que efetivamente usem essas entradas | Peso errado na dinamometria não prova peso errado na ventilometria ou antropometria |
| Força absoluta + massa | Força relativa, se definida por divisão pela massa | Força absoluta e assimetria entre lados podem ser independentes da massa; confirmar software |
| Força + braço de alavanca + ângulo | Torque calculado quando o modelo os exige | Sem braço/modelo, torque zero impresso não é torque medido nulo |
| Lados D/E | Assimetria segundo equação declarada | Massa não entra no exemplo abaixo; erros de lado/protocolo entram |
| Carga + repetições + equação | 1RM estimado e classificações/cargas dele derivadas | Não equivale a 1RM diretamente testado nem se transfere para outra máquina |
| Massa + percentual de gordura | Massa gorda e massa livre de gordura no mesmo modelo | Massa muscular de bioimpedância pertence a outra definição; não exigir igualdade |
| VO₂ absoluto + massa, ou entradas do estimador | VO₂ relativo e eventualmente gasto estimado | Não reconstruir VO₂ absoluto multiplicando estimativa relativa por massa e chamar de medido |
| FC de referência/limiar + fórmula | Zonas e diferenças de recuperação | FC medida não se invalida por erro de peso sem dependência demonstrada |
| TMB + exercício + demais componentes explicitados | Necessidade energética, diferença, macronutrientes, gráficos/projeções | Não assumir que soma de TMB e exercício seja gasto total real |

**Dependência desconhecida:** registrar DEPENDENCIA_NAO_MAPEADA como motivo de bloqueio, usar CONTEXTO_INSUFICIENTE no produto cuja confiabilidade depende da entrada e solicitar fórmula/manual. Não inventar que a massa afeta todas as saídas, nem liberá-las por ausência de prova. O bloqueio preventivo do derivado não invalida o registro bruto.

### 7.2 Identidades para conferência (propostas nossas)

- `IMC = massa_kg / estatura_m²`.
- No mesmo modelo e ocasião: `massa_gorda = massa × gordura_percentual/100`; `massa_livre_gordura = massa − massa_gorda`.
- `delta_absoluto = atual − anterior`; `delta_relativo_% = 100 × (atual − anterior)/anterior` somente se denominador válido e diferente de zero. Para proporções, registrar também diferença em pontos percentuais.
- Exemplo de assimetria candidata: `100 × abs(D−E)/max(D,E)` para valores positivos válidos. Guardar D/E e direção por movimento. Não assumir que esta é a equação oficial do dispositivo; comparar com manual e valores antes de adotá-la. Ambos zero: resultado indefinido, não simetria validada.
- `pace_min_km = 60 / velocidade_km_h`, velocidade positiva. Converter parte decimal de minuto em segundos; 5,5 min = 5 min 30 s.
- Conferir zonas quanto à base: `%FCmax`, `%reserva_FC`, `%FC_limiar` e `%VO₂` não são intercambiáveis. Não chamar percentuais do limiar de percentuais da FC máxima.
- `diferenca_energetica = aporte − necessidade`; `diferenca_% = 100 × diferenca/necessidade`. A estratégia declarada deve reconciliar com a base e o aporte utilizado.
- Verificação contábil convencional: `kcal_macros = 4×g_proteina + 4×g_carboidrato + 9×g_lipidio`; definir exceções e modelo se houver. Conferir total, percentuais, referência de g/kg e distribuição das refeições.
- Projeção de peso/gordura não é previsão individual garantida. Não converter aritmética de déficit em prazo fisiológico certo.

Comparar usando precisão interna quando disponível. Com somente PDF, admitir arredondamento: para n valores arredondados à resolução r, considerar até `n×r/2` na soma, além do arredondamento do total. Essa tolerância é de representação, não erro clínico permitido. Divergência maior exige investigação; valor exibido arredondado não permite concluir qual célula ou código está errado.

## 8. Achados documentais do corpus

São **achados de auditoria, não aprovação das medições nem julgamento de evolução clínica**. Os dados originais permanecem nos PDFs. Página e seção permitem revisão sem reproduzir identificadores ou fotografias.

| Achado | Evidência / procedência | Estado e alcance | Próxima evidência necessária |
|---|---|---|---|
| A01 — C01: composição corporal entre contextos fisiológicos distintos | PDF p.3–6; gestação/pós-parto CONFIRMADO_TREINADOR | Comparação direta de composição para atribuir resultado ao treino: NAO_COMPARAVEL nesta auditoria, G2. Preservar medidas e separação entre dobras e bioimpedância | Cronologia das fases, condições de coleta e equação aplicável; revisar séries por pergunta |
| A02 — C02: peso da dinamometria incompatível com antropometria | PDF p.3 versus p.23–28; erro CONFIRMADO_TREINADOR | Peso do anexo INCONSISTENTE; IMC/normalizações dependentes bloqueados, G3. Forças em kgf exigem checagens próprias, sem invalidação em bloco | Massa válida da ocasião, origem do preenchimento e mapa de dependências |
| A03 — C03: divergências de peso e estatura no anexo de força | PDF p.3 versus p.29–34; erro de peso CONFIRMADO_TREINADOR; estatura divergente OBSERVADO_PDF | Peso INCONSISTENTE; estatura do anexo a conferir. Bloquear IMC/derivados; não escolher estatura correta só por frequência de ocorrência | Confirmar estatura/protocolo, identidade do anexo e cada entrada |
| A04 — C02: ausência de objetivos no formulário versus objetivo confirmado | PDF p.39, anamnese; hipertrofia e qualidade de vida CONFIRMADO_TREINADOR | Campo do formulário INCONSISTENTE, G2. Objetivo existe; detalhes de prioridade/indicador permanecem a acordar. Não tratar como aluno sem objetivo | Registro datado do acordo com o aluno; confrontar metas do Plano de Ação p.22 sem alterá-lo |
| A05 — C01 e C03: testes registrados como interrompidos | C01 p.11; C03 p.14, com observação relacionada à máscara | CONTEXTO_INSUFICIENTE para máximo fisiológico e NAO_COMPARAVEL quando término não equivalente, G2. Não inferir pior condicionamento apenas pela diferença | Critério, motivo, estágio/duração, sintomas e método de VO₂; não extrapolar a C02, cuja p.14 registra estágio completo |
| A06 — C02/C03: zonas/limiares e velocidades precisam reconciliação entre módulos | Resumos metabólicos p.13–15 versus ventilometria C02 p.40–41 / C03 p.24–25 | INCONSISTENTE ou CONTEXTO_INSUFICIENTE conforme variável, G2/G3 para aplicação. Métodos e bases podem diferir; não decidir que todo contraste é erro | Definição do limiar, base percentual, protocolo e equações. Preservar séries de FC observada |
| A07 — C02/C03: estratégia energética declarada diverge do percentual realizado pelos totais | p.17–18 de ambos, com inspeção visual p.18 | INCONSISTENTE, G2; G3 se usado para orientação individual. Não emitir dieta nem adotar o total como recomendação | Reconciliar estratégia, g/kg, necessidade, aporte, resumo e gráficos na fonte autorizada |
| A08 — C01: índices relativos de 1RM requerem auditoria do denominador | p.9 em confronto com p.3; quocientes atuais aparentam manter referência de massa anterior e delta relativo não acompanha todos os valores | HIPOTESE_A_CONFERIR sobre fórmula/célula; CONTEXTO_INSUFICIENTE/INCONSISTENTE para uso relativo, G2. Não atribuir causa interna comprovada pelo PDF | Massa usada em cada ocasião, equação e intervalos reais; cargas/repetições absolutas preservadas sob protocolo próprio |
| A09 — três casos: torque zero, 1RM estimado e cargas por capacidade no software de dinamometria | C01 p.21–24; C02 p.25–28; C03 p.31–34 | Torque: SEM_DADO/CONTEXTO_INSUFICIENTE até provar medição. 1RM/cargas: estimativas não validadas para transferência, G3 para prescrição direta | Manual, braço de alavanca, equação, validação do método e teste específico da tarefa |
| A10 — três casos: peso zero no cabeçalho baropodométrico | C01 p.25–34; C02 p.29–38; C03 p.35–44 | Peso do cabeçalho SEM_DADO; derivados que o usem bloqueados, G2. Não concluir que pressão/área/distribuição também são inválidas | Manual e processamento: estabelecer se sensores medem independentemente ou normalizam pela massa |
| A11 — C03: RML anterior mistura repetições parciais e completas | PDF p.11, observação do teste anterior | NAO_COMPARAVEL até equivalência de contagem/amplitude, G2. Não declarar redução de resistência só pelo total | Critério de repetição válida e protocolo de ambas as avaliações |
| A12 — datas e rótulos de coleta/exportação não são únicos | C01 p.3 e p.19; anexos dos demais PDFs exibem data do exame e data no rodapé | Não constitui erro automaticamente. CONTEXTO_INSUFICIENTE se usado como uma coleta única, G2 | Guardar datas por modalidade, emissão separada; não fundir avaliações pela data de exportação |

Não há massa corrigida implantada, recálculo oficial de resultados, diagnóstico ou modificação dos planos. Os achados não investigados visualmente em detalhe permanecem candidatos à conferência na fonte; não se declara que todo item de todas as páginas foi validado.

## 9. Complementação acadêmica e limites

As regras de proveniência, estados, gravidade, bloqueios e aprovação são propostas de governança da Central. O conteúdo didático que motivou a organização por domínios vem das fichas; as referências abaixo apenas complementam os limites interpretativos.

| Fonte externa consultada em 19/10/2026 | Leitura realizada / contribuição | O que não autoriza |
|---|---|---|
| [Parkinson et al., 2021 — revisão sobre cálculo e limiares de assimetria](https://irep.ntu.ac.uk/id/eprint/44007/), DOI 10.52082/jssm.2021.594 | Resumo no repositório institucional: fórmulas têm limitações e limiares frequentes não possuem sustentação uniforme; informa VAL-R09/R13 | Corte universal de lesão, meta obrigatória de simetria ou transferência para cargas de máquinas |
| [Exploring comparative assessment of adiposity measures during pregnancy and postpartum, 2022, PMID 35623838](https://pubmed.ncbi.nlm.nih.gov/35623838/) | Resumo recuperado: concordância entre BIA e dobras variou ao longo da gestação/pós-parto no estudo; informa a necessidade de contexto em VAL-R07 | Concluir que as medidas de C01 são falsas, identificar sua fase fisiológica ou aplicar correção numérica |
| [Westerheim et al., 2025, PMID 39974841](https://pubmed.ncbi.nlm.nih.gov/39974841/) | Registro e objetivo do estudo consultados: comparação BIA/DXA em mulheres com sobrepeso/obesidade em duas ocasiões pós-parto. Referência candidata para revisão aprofundada no DIC | Alegar validação universal de qualquer equipamento, população ou momento pós-parto; resultados não aplicados aqui |

Não se realizou revisão sistemática própria nem leitura crítica integral desses artigos. Demais referências do EVID-INDEX permanecem com o estado documentado na origem. Limiares de segurança, classificações normativas e magnitude de erro precisam de protocolo e evidência específica antes de virar regra aprovada.

## 10. Exemplos anonimizados com números inteiramente sintéticos

Estes exemplos demonstram lógica, sem reproduzir o perfil numérico de qualquer aluno. Não são prescrição.

**E01 — erro restrito de massa.** Antropometria válida registra 80 kg; anexo de dinamometria informa 60 kg; treinador confirma erro no anexo. Forças D=30 e E=27 kgf. Bloquear força relativa derivada dos 60 kg e o IMC daquele anexo. Manter as forças absolutas como registros sujeitos ao protocolo; a assimetria candidata pela fórmula da seção 7 é 10% e não depende da massa. Isso não diagnostica risco. Não recalcular oficialmente com 80 kg sem validar sua data e o modelo.

**E02 — composição entre fases diferentes.** Duas avaliações mostram massa e gordura estimada diferentes, com gestação/pós-parto confirmados entre ocasiões e método ainda não reconciliado. Manter valores datados, bloquear a frase “treino piorou a composição” e perguntar fases/técnica. Não inventar perda muscular, emagrecimento prioritário ou datas obstétricas.

**E03 — objetivo existe.** Formulário mostra ausência; treinador confirma hipertrofia e bem-estar. Saída: “objetivo confirmado pelo treinador; formulário divergente; indicador e prioridade a acordar”. Não gerar pergunta repetida como se nenhum objetivo existisse, nem trocar o registro original.

**E04 — energia não reconciliada.** Necessidade sintética 2.000 kcal e aporte 2.300 kcal implicam diferença de +300 kcal e +15%, não +5%. Marcar inconsistência e bloquear recomendação derivada; manter medidas antropométricas independentes. Não decidir qual campo é correto apenas pela conta.

**E05 — interrupção não é máximo validado.** Teste termina por desconforto com máscara; FC e estágio foram registrados. Esses dados podem ser descritos, mas não provam FCmáx fisiológica, queda de aptidão ou validade de zonas calculadas.

## 11. Casos de teste e contraexemplos

Resultados abaixo são **expectativas documentais**, não uma suíte executável instalada. A conferência lógica manual desta versão verificou a coerência dos exemplos; não mede sensibilidade/especificidade de software nem aprova os protocolos.

| Teste | Entrada / condição | Resultado esperado | Falha proibida |
|---|---|---|---|
| T01 | Massa errada no anexo, força absoluta independente | Bloquear relativos e preservar força sob auditoria própria | Invalidar todo o laudo |
| T02 | Mesma massa válida e protocolo completo | Nenhum alerta de peso; seguir demais verificações | Criar inconsistência por rotina |
| T03 | Divergência de massa entre datas diferentes | Conferir data/contexto, sem presumir erro | Substituir pelo peso mais recente |
| T04 | Gestação/pós-parto entre avaliações | Bloquear atribuição direta ao treino e solicitar contexto | Diagnosticar perda muscular ou falha do programa |
| T05 | Mesma fase e método, condições verificadas | Permitir análise da diferença com incerteza | Bloqueio permanente só pelo histórico gestacional |
| T06 | Objetivo confirmado diverge de campo vazio | Preservar confirmação e apontar formulário | Declarar ausência de objetivos |
| T07 | Vazio/traço/zero padrão em peso/torque | SEM_DADO; impedir descendente | Interpretar zero fisiológico |
| T08 | Zero comprovadamente medido em variável que admite zero | Manter com protocolo; investigar significado | Converter todo zero em ausência |
| T09 | Denominador zero/ausente | Não calcular razão/delta relativo | Divisão por zero, infinito ou percentual fictício |
| T10 | D=30/E=27, depois lados invertidos, mesma fórmula | Mesma magnitude 10%, direção invertida | Trocar direção ou alterar magnitude pela escolha do lado |
| T11 | Peso muda, mesmos D/E e fórmula independente | Assimetria aritmética permanece igual | Invalidá-la apenas por peso |
| T12 | Mesmos valores com gestos/ângulos diferentes | Não fundir em perfil comparável | Declarar lado globalmente fraco |
| T13 | kgf do dinamômetro e carga de máquina | Impedir conversão direta | Emitir carga de treino como validada |
| T14 | Teste interrompido versus encerramento completo | Comparabilidade indeterminada até revisão | Concluir piora de aptidão pelo delta |
| T15 | FC recuperação 30 s versus 60 s | Séries separadas/janela explícita | Comparar como mesmo indicador |
| T16 | Meta +5%, necessidade 2.000, aporte 2.300 | Detectar +15% nos totais e conflito | Aprovar ambos como coerentes |
| T17 | Soma arredondada 99,9% com erro compatível | Aceitar arredondamento documentado | Alerta G3 sem impacto |
| T18 | Percentual de gordura 25% → 30% | +5 pontos percentuais e +20% relativo | Chamar a diferença de 5% relativo |
| T19 | Velocidade 10 km/h | Pace 6 min/km | Confundir minuto decimal e segundos |
| T20 | Peso zero em baropodometria; pressão independente confirmada | Bloquear derivados de peso, preservar pressão conforme método | Invalidar todas as imagens por cabeçalho |
| T21 | Identidade do anexo não confirmada | Quarentena do anexo e revisão | Anexar pela semelhança do primeiro nome |
| T22 | Contagens com amplitudes diferentes | Sem tendência direta até equivalência | Equiparar parcial a completa |
| T23 | Alteração de entrada ou versão de fórmula | Reavaliar descendentes e preservar histórico | Reutilizar validação antiga |
| T24 | Planilha ou PDF contém plano/meta | Registrar como planejado | Tratar como sessão executada |
| T25 | Documento disponível sem metadados mínimos | NAO_AUDITADO/CONTEXTO_INSUFICIENTE | VALIDADO só porque foi lido |

## 12. Critérios de aprovação e encerramento de pendências

### 12.1 Aprovação documental do VAL-001 pelo treinador

- [ ] Confirmar que as regras preservam o raciocínio ACESSO e distinguem aula, literatura e proposta.
- [ ] Conferir A01–A12 nas páginas físicas indicadas e registrar concordância, ajuste ou rejeição.
- [ ] Confirmar limites dos bloqueios e usos independentes preservados, em especial nos três fatos informados pelo treinador.
- [ ] Revisar gravidade por finalidade e responsáveis de resolução.
- [ ] Aprovar ou ajustar estados, fluxo, exceções e resultados T01–T25.
- [ ] Registrar nome do aprovador em ambiente apropriado, data, versão e escopo. A aprovação não é presumida pelo pedido de criar o arquivo.

### 12.2 Porta de qualidade para qualquer uso futuro de regras

Critérios propostos: todos os casos obrigatórios com resultado esperado; nenhuma recomendação baseada em entrada bloqueada; nenhuma invalidação global indevida; nenhuma sobrescrita de histórico; proveniência de 100% das saídas usadas em decisão; documentação de falsos positivos e omissões. O conjunto deve conter casos reais desidentificados e casos sintéticos adversariais. Passar estes exemplos não demonstra confiabilidade universal.

Uma regra metodológica só pode ser promovida após trecho didático revisado, evidência aplicável quando necessária, protocolo/inputs definidos, teste e aprovação técnica explícita. Uma implantação exige ainda revisão técnica, ambiente de teste, autorização separada, controle de acesso e reversão. Nenhum desses estados é conferido automaticamente nesta v0.2.

### 12.3 Fluxo de resolução sem alterar originais nesta etapa

1. Registrar achado, fonte, evidência e uso bloqueado.
2. Direcionar pergunta ao responsável: qual dado, qual data, qual fórmula ou protocolo falta?
3. Receber evidência e registrar resolução datada, sem apagar o registro contraditório.
4. Em futura revisão autorizada, recalcular em cópia controlada os descendentes e conferir contra a fonte.
5. Revisor registra uso liberado, limitações e necessidade de reavaliação.
6. Escrita em arquivo operacional, se necessária, depende de trabalho expressamente autorizado; este documento não a executa.

## 13. Próximas etapas recomendadas — sem instalação automática

**DIC-001 v0.2:** revisar e aprovar as definições e usos por indicador; resolver dependências não mapeadas identificadas aqui e priorizar protocolos/equações que tenham uso autorizado. A versão continua documental e não instala regras.

**TEST-001 v0.3:** revisar os 50 cenários sintéticos e seu alinhamento com o vocabulário de estados; obter aprovação profissional das expectativas e só depois preparar execução em fixtures isoladas, com saída observada e regressão registradas.

DIC-001 e TEST-001 existem como documentos de proposta, mas não foram executados, instalados, agendados ou conectados. A revisão direta das aulas 28–33 com minutagem e o aprofundamento acadêmico seguem pendentes para promoção das regras.

## 14. Registro desta versão

v0.1 — 19/10/2026: proposta de auditoria baseada nos documentos do projeto, nos três PDFs completos recebidos e nas confirmações diretas do treinador. Inclui inventário por hash, regras operacionais, estados, gravidade, dependências, achados localizáveis, exemplos sintéticos, testes e portas de aprovação. Checagens de conteúdo não equivalem a aprovação técnica ou clínica. Somente este novo Markdown foi produzido para a pasta de documentação indicada.

v0.2 — 19/10/2026: esclarece o vocabulário canônico dos estados de qualidade, separa estado de qualidade, motivo de bloqueio, estado de fluxo e resultado de teste, e distingue o grau G0–G3 da severidade de defeito de software. Atualiza as próximas etapas para refletir DIC-001 e TEST-001 existentes, ainda não executados.


## Revisão de coerência — 20/10/2026

Revisão documental v0.3 em resposta ao AUD-005. IDs, organização e compartilhamentos do Drive preservados. Referências a versões anteriores no corpo e nos registros de elaboração são históricas; consultar o LEIA-ME para a posição atual. Nenhuma aprovação científica, profissional ou execução de teste é produzida por esta edição.
