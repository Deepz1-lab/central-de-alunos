---
id: ACESSO-INDEX
titulo: "Índice de gatilhos metodológicos — Central de Alunos"
versao: "0.2"
atualizado: "2026-10-20"
estado: "ESPECIFICACAO_DE_CONSULTA"
modo_execucao: "SOMENTE_LEITURA"
regras_automatizadas_ativas: false
origem: "Caderno Técnico-Científico + fichas ACESSO-028 a ACESSO-033"
---


# ACESSO-INDEX — Gatilhos metodológicos v0.2

> **Revisão de coerência — 20/10/2026.** A consulta às aulas alimentará propostas completas de planejamento dentro do escopo aprovado; o treinador audita, ajusta e aprova. O índice continua documental, sem regras instaladas.

## 1. Propósito
Roteador *documental* que indica quais fichas consultar diante de achados de uma avaliação física e quais validações fazer antes de propor um Plano de Ação. **Markdown não executa um algoritmo, e esta versão não está integrada a Apps Script, à planilha nem a rotinas automáticas.** As fichas são preliminares e não constituem autorização de prescrição.


## 2. Ordem das fontes
1. Dados originais do aluno: ficha de avaliação, laudos e observações *datadas*; sessões aprovadas e executadas identificadas separadamente.
2. Metodologia ACESSO: aulas documentadas, conferindo nível de revisão da fonte.
3. Estudos PubMed: verificação externa, com aplicabilidade e limitações explícitas.
4. Síntese assistida: hipótese e proposta, sujeitas ao julgamento do treinador.


Se houver divergência, expor as versões em vez de esconder diferenças. Conteúdo não verificado nos vídeos permanece `PENDENTE_VALIDACAO_AULA`.


## 3. Diretório das aulas
| Aula | Tema do caderno | Arquivo e link |
|---|---|---|
| 028 | Antropometria/composição corporal | [ACESSO-028](https://drive.google.com/file/d/1FhWISXVVOQgnUP8jso5p7cRPgT8RfR0C/view) |
| 029 | Flexibilidade/cardiorrespiratório | [ACESSO-029](https://drive.google.com/file/d/1Sjv1KmZlFTdRll8YpiSR4LeNTRCWlYQd/view) |
| 030 | Recuperação/testes e avaliação postural | [ACESSO-030](https://drive.google.com/file/d/1YszVUQy3Vzt3uZugSkpTol8K_2IIKRK3/view) |
| 031 | Força/dinamometria/assimetrias | [ACESSO-031](https://drive.google.com/file/d/1Myeo-96WhM93MR99Yljb5iAOaZAKaNDw/view) |
| 032 | Baropodometria/equilíbrio | [ACESSO-032](https://drive.google.com/file/d/19VVOdf2iDOZOAeKTaUJGek_5T5ZH29UK/view) |
| 033 | Prioridades, Plano de Ação e periodização | [ACESSO-033](https://drive.google.com/file/d/1tu0LZ5zOnw1D8g7ybJW-8fVeGeRKGnJ2/view) |


**Aulas estruturantes anteriores no Caderno:** 021 (controle cíclico), 022 (bases neuromusculares), 023 (sobrecarga/PSE/RIR), 024 (monitoramento), 026 (princípios). Devem ganhar fichas próprias antes de serem utilizadas como regras aprovadas.


## 4. Vocabulário de gatilhos (normalização proposta)
| Grupo | Palavras/variáveis indicativas | Aulas consultadas |
|---|---|---|
| Composição corporal | %G, massa gorda, circunferência, cintura, massa magra, bioimpedância, adipometria, ultrassom | 028 → 033 |
| Flexibilidade | Banco de Wells, flexibilidade, alcance, amplitude, mobilidade específica | 029 → 030 se houver observação postural → 033 |
| Cardiorrespiratório | VO₂, FC, FC recuperação, LAn, teste, esteira, cardiorrespiratório | 029 + 030 → 033 |
| Postura | análise postural, alinhamento, assimetria visual, compensação em movimento | 030 → 033 |
| Força | dinamometria, força, preensão, isométrica, carga, assimetria D/E, 1RM, sentar-levantar | 031 → 033 |
| Equilíbrio/marcha | baropodometria, CoP, estabilometria, quedas, TUG, bengala, arrasto, distribuição de carga | 032 + 031 (se força) → 033 |
| Planejamento | objetivo pouco claro, demanda, prioridade, frequência, mesociclo, execução, reavaliação | 033 + aulas relevantes + 023/026 quando aprofundadas |


O gatilho **localiza conhecimento**; não presume problema ou recomenda automaticamente intervenção.


## 5. Fluxo do motor de consulta (pseudológica)
```text
receber dados_autorizados_do_aluno
validar origem, data, protocolo, unidade, tipo_de_dado, status_de_execucao
identificar relato, medida, observacao, interpretacao, lacuna
se sinal_clinico_relevante_ou_fator_de_risco_nao_avaliado:
    marcar REVISAO_PROFISSIONAL_PRIORITARIA
    impedir sugestao de progressao de risco
selecionar aulas relevantes pelo vocabulario (pode ser mais de uma)
consultar o MD da aula + Caderno + evidencia cientifica vinculada
se metodo nao confirmado / valor ausente / comparabilidade insuficiente:
    marcar PENDENTE_VALIDACAO
formular hipoteses concorrentes e perguntas de investigacao
perguntar objetivo pessoal + prioridade funcional + disponibilidade
criar matriz achado -> hipotese -> prioridade -> intervencao_candidata -> indicador
se proposta de plano:
    exige aprovacao humana; NAO escrever em treino/calendario
manter registro de fonte, versao, incerteza e motivos
```


## 6. Regras de bloqueio
- Ausência de data, protocolo ou unidade impede comparação automática de testes.
- Campo vazio, classificação sem medida ou zero padrão sem evidência de coleta: `SEM_DADO` para a entrada ausente. Zero realmente medido e zero calculado com entradas/equação válidas devem ser preservados; não equivalem à ausência.
- `#VALUE!` ou falha de cálculo não apagam as entradas: derivado com fórmula/dependências desconhecidas fica `CONTEXTO_INSUFICIENTE`, motivo `DEPENDENCIA_NAO_MAPEADA`; divergência demonstrada em fórmula conhecida fica `INCONSISTENTE`, motivo `ERRO_DE_FORMULA`. Bloquear apenas usos dependentes.
- Exemplo sintético: delta 80→80 = 0; assimetria de lados iguais e positivos pode ser 0% conforme equação aprovada; denominador zero exige tratamento de domínio, nunca 0% fabricado. Ver TC-57.
- Relato de quedas, sintomas neurológicos, piora funcional ou outra informação de risco não autoriza progressão automática; sinalizar avaliação apropriada.
- Diferença entre lados não é diagnóstico nem indicação obrigatória de volume extra.
- Posicionamento postural/baropodometria isolados não permitem diagnóstico etiológico.
- `PLANEJADA` não pode ser convertida em `REALIZADA` sem evidência de execução.
- Regras só deixam o estado de candidata com revisão explícita da aula, referência e aprovação do profissional.


## 7. Estrutura de saída
| Campo | Exigência |
|---|---|
| `aluno_id` | ID interno, evitar nome em logs de biblioteca |
| `achado_id` | Dado original + data + instrumento |
| `aulas_ids` | IDs relevantes e estado de revisão |
| `referencias_ids` | PMIDs com aplicabilidade/limites |
| `interpretacao` | O que é observado x inferido |
| `perguntas_pendentes` | O que falta validar |
| `prioridades` | Justificativa e nível de certeza |
| `indicadores` | Medidas comparáveis e tarefas |
| `decisao_proposta` | Ação candidate para análise do treinador |
| `aprovador` | Nenhuma aprovação automática |


## 8. Casos de teste documentais
| Entrada | Roteamento esperado | Saída segura |
|---|---|---|
| `Banco de Wells` baixo isolado | 029 + 033 | Verificar teste e relevância; NÃO inferir encurtamento generalizado |
| Dinamometria D/E diferente | 031 + 033 | Exibir lado por movimento e limitações; não diagnosticar |
| Distribuição plantar assimétrica | 032 + 033 | Descrever condição de coleta e hipóteses, não causalidade |
| Histórico de quedas + arrasto unilateral | 032 + 031 + 033 | Revisão clínica prioritária; sem progressão de risco |
| Aluno sem objetivo | 033 + entrevista | Objetivo provisório acordado; não inventar doença |
| VO₂ ausente e FC calculada zero | 029 + 030 | Marcar SEM_DADO, não criar zonas |
| Treino marcado planejado apesar de ocorrido | 033 + 023 futura | Divergência de registro; solicitar atualização validada |


## 9. Checklist de promoção de regra
[ ] Trecho didático da aula revisado e marcado com minutagem.
[ ] Variável e protocolo confirmados no arquivo de avaliação.
[ ] Evidência externa e aplicabilidade registradas quando pertinente.
[ ] Exceções e sinais de alerta contemplados.
[ ] Exemplo de caso e contraexemplo testados.
[ ] Profissional aprovou texto, alcance e indicador.
[ ] Em ambiente de teste, nunca na Central original sem nova autorização.


**Estado: especificação de roteamento — não instalada como código.**

## Revisão de coerência — 20/10/2026

Revisão documental v0.2 em resposta ao AUD-005. IDs, organização e compartilhamentos do Drive preservados. Referências a versões anteriores no corpo e nos registros de elaboração são históricas; consultar o LEIA-ME para a posição atual. Nenhuma aprovação científica, profissional ou execução de teste é produzida por esta edição.
