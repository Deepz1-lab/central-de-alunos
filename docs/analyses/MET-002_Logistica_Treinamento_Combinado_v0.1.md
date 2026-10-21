---
id: MET-002
titulo: "Logística do Treinamento Combinado — estudo de leitura"
versao: "0.1"
data: "2026-10-20"
estado: "FLUXOS_DE_FORMULAS_MAPEADOS; ROTINA_DOS_BOTOES_PENDENTE_DE_CODIGO"
diretriz_confirmada: "O treinador escolheu o Treinamento Combinado como planilha de trabalho"
implementacao: "Leitura de células, fórmulas, validações e interface; nenhum comando operacional executado"
---

# MET-002 — Como as partes do Treinamento Combinado se relacionam

## 1. Escopo e direção

O treinador solicitou estudo aprofundado da planilha da pasta do Leandro: Montagem, Macrociclo, Controle Cíclico e área de atualização. Reforçou que essa será a planilha utilizada no trabalho e proibiu alterações. A Central deve compreender e apoiar essa estrutura operacional, preservando capacidades físicas, avaliação, objetivos e auditoria do treinador.

Foi aprofundado um exemplar v3.13.11 com as quatro áreas, após o inventário de 11 treinamentos do MET-001. Referência nominal e ID ficam no mapa privado de leitura; este MD não reproduz contatos, medidas individuais nem links de alunos.

A aba existente chama-se **Atualizar mesociclo**. Não foi encontrada, nos metadados deste exemplar, uma aba denominada Atualizar macrociclo.

O estudo separa: entrada manual, fórmula, saída apresentada, marcação de registro e ação de botão/script. Nenhuma marcação, carga ou texto foi modificado. Nenhum botão de atualização foi acionado. Nenhuma função de Apps Script foi executada pelo assistente.

## 2. Fluxo geral observado

Dados de referência/importação → Macrociclo → painel de micros da Montagem → prescrição por sessão → aba Aluno → registros de carga/realização/observações → cálculos auxiliares e Biblioteca de Exercícios → referências para prescrições seguintes.

Controle Cíclico usa datas e o macro para identificar o ciclo; consulta Dados de Base para referências de intensidade; mantém campos próprios de execução e decisão. Não foi demonstrada sincronização automática completa e bidirecional de todas as suas linhas com a Montagem.

A área de atualização contém componentes que não estão no texto das células. A transição executada por seus botões continua parcialmente desconhecida até leitura do código vinculado.

## 3. Macrociclo: plano e parâmetros

### 3.1 Entradas e organização

Cabeçalho com mesociclos, objetivos, numeração de micro, carga do micro, duração/data estimada e sessões. Abaixo: metas de séries por grupamento; SGM; sessões TR; estímulo cíclico por método; flexibilidade por movimento; estimativa energética; observações e ênfases de capacidades.

A duração vem de parâmetro próprio. No inventário anterior, cabeçalhos de 14 dias e de 7 dias foram observados. Datas estimadas e datas associadas a micros da montagem podem diferir; não impor semana de sete dias ou progressão apenas por calendário.

### 3.2 Fórmulas conferidas

- Macrociclo E105:L105 organiza grupos de quatro posições com a mesma identificação de mesociclo, incrementando a identificação no grupo seguinte.
- A linha auxiliar 107 repete o objetivo do meso para consulta por coluna.
- A linha 108 produz fator 0,5 quando a carga selecionada é REG, e 1 nos demais casos observados.
- Séries dos micros seguintes consultam valor anterior, fator, incremento e limite de grupamento.
- Cíclico consulta volume anterior, fator de progressão e teto de modalidade.
- SGM na linha 31 calcula média dos grupamentos com valor maior que zero; a linha 33 divide essa síntese pelas sessões TR.
- Linhas 99–104 localizam datas associadas a números de micro; a data seguinte pode usar essa referência ou avançar pela duração parametrizada.

Esses são mecanismos do exemplar, não aprovação científica de coeficientes, limites ou equivalência das contagens com as usadas nos estudos.

### 3.3 Ligação com a Montagem

Montagem A45 contém a referência do micro inicial da janela. B46:E46 apresenta a sequência de quatro micros. B44/B45 buscam identificação e objetivo do meso; o painel recupera do macro data, carga, sessões, SGM, cíclico, flexibilidade e ênfases pela coluna correspondente.

A leitura detectou uma referência que merece conferência futura: o painel rotulado GET em B53 consulta a linha 51 do macro, enquanto a estimativa energética aparece na linha 53 desse exemplar. Não foi corrigido nem usado como resultado fisiológico validado.

## 4. Montagem: prescrição e cálculo

### 4.1 Anatomia de uma linha de exercício

| Área | Papel observado |
|---|---|
| Contexto da sessão | Micro, treino, data/dia, tipo, ambiente, carga do micro e tempo estimado |
| I/J/K | Séries, repetições/quantidade e intervalo, conforme os cabeçalhos e o tipo de atividade |
| L/M/N | Sistema, grupamento e exercício |
| O/P | RR e carga informada na montagem |
| Q/R | Sugestões derivadas de carga, identificadas no cabeçalho como UC/MC |
| S/T | Referências de quantidade/repetições do histórico |
| U/V | Observação apresentada e nova observação |
| Campos cíclicos | Percentuais, seletores de exibição e texto de orientação derivado |
| Colunas auxiliares | Localização na biblioteca, validação, carga considerada, registro, estimativas e apresentação |

RR é utilizado numericamente junto às repetições na fórmula de sugestão. A expansão conceitual do rótulo e sua relação com RIR devem permanecer documentadas pelo método; o uso aritmético por si não homologa a estimativa.

### 4.2 Exercícios e recursos disponíveis

A validação do exercício consulta uma lista gerada em DZ:FX. Na linha inspecionada, a lista filtra a Biblioteca pelo grupamento e por uma coluna de disponibilidade associada ao ambiente. A localização do exercício utiliza correspondência do nome na biblioteca.

Assim, ambiente e equipamento já participam da seleção de meios. Isso combina com DEC-CAP-001: a capacidade/objetivo orienta e os recursos adaptam a execução. Precisa ser preservada a relação entre identificador do ambiente, disponibilidade e exercício, sem assumir que dois aparelhos têm cargas equivalentes.

### 4.3 Sugestão de carga e prioridade de entrada

Na linha examinada, Q/R consultam referências da Biblioteca de Exercícios e usam um fator que depende de repetições + RR. Q arredonda o resultado; R mantém resultado não arredondado.

A coluna auxiliar CB prioriza, nesta ordem: carga positiva relatada pelo aluno; carga positiva preenchida na montagem; sugestão calculada. Portanto, sugestão, entrada manual e carga relatada são origens diferentes, que a Central deverá distinguir.

A estimativa auxiliar de 1RM e seus usos precisam de revisão própria. Não confundir o valor calculado ou a coluna chamada MC com uma medição direta de força máxima. Não substituir essa lógica por carga de dinamometria.

### 4.4 Registro de realização

A condição BY combina a marcação G da montagem com a marcação correspondente da aba Aluno. Outro indicador considera a existência de carga relatada pelo aluno. Essas condições participam de exibição, agregações e referências históricas.

Uma marcação é evidência de registro segundo a convenção da planilha. Não prova, isoladamente, que todas as séries, cargas e repetições ocorreram exatamente como prescritas.

### 4.5 Metas, saldo e janela de micros

Montagem AI:AP compara por grupamento o montado, a meta do macro, o contabilizado como realizado e o saldo. O somatório seleciona linhas por texto de sigla de grupamento; exercícios com múltiplas siglas participam de mais de um somatório.

A leitura dirigida da coluna F identificou janela com micros 9–13 no exemplar. Os quatro primeiros têm sete posições de sessão cada, espaçadas por 17 linhas. O quinto possui posições adicionais até o fim do modelo; a janela teve 36 marcadores de sessão. Esses marcadores representam espaços do modelo, não 36 sessões prescritas ou concluídas.

A presença de um quinto micro é observada. Sua promoção, cópia, arquivamento ou papel exato no script de atualização não foram demonstrados. Não importar automaticamente a regra de transição da antiga Central como se fosse comportamento comprovado desta planilha.

### 4.6 Tempo e unidades

Quantidade e tempo compartilham áreas conforme a modalidade. Fórmulas convertem minutos para segundos em certos estímulos contínuos; intervalados usam outras convenções. O tempo estimado combina tempo de atividade e pausas sob hipóteses do modelo, incluindo estimativa por repetição para exercícios resistidos.

Não tratar esse cálculo como duração executada, nem ler toda quantidade como repetições ou todo intervalo como descanso entre séries do mesmo exercício sem verificar o sistema.

## 5. Aba Aluno e Biblioteca: ida e retorno

Aluno F13:P13 e linhas seguintes demonstram vínculo direto com a Montagem: exercício, vídeo, sistema, séries, repetições, intervalo, carga sugerida e observação. Há campos de marcação e relato de carga.

Na Biblioteca, AY:BN reúne referências de quantidade, carga e observação, inclusive campos do mesociclo anterior. As fórmulas procuram a última ocorrência correspondente na montagem, máximos e observações; quando não encontram ocorrência, consultam a referência anterior pertinente.

Isso constitui continuidade de informação entre prescrições. O mecanismo que grava os valores no espaço de mesociclo anterior ou limpa/move sessões depende da rotina de atualização; não foi confirmado por observar o fallback.

Para a Central: manter fonte, ocasião, exercício, tipo de carga e versão da fórmula. Evitar misturar carga sugerida, máxima estimada e relatada.

## 6. Controle Cíclico

### 6.1 Prescrição e enquadramento no plano

Campos observados: capacidade, registro, treino, data, meso/micro, modalidade, carga do micro, objetivo do dia, carga do dia, decisão anterior, método principal/complementar, recuperação, local, séries/blocos, tempo/distância e intensidade.

AP localiza a data na sequência do Macrociclo. F/G/I recuperam meso, micro e carga pela coluna encontrada. A correspondência de data é aproximada e exige revisar ordenação e janela para uso automatizado. Identificar o micro pela data não comprova que a sessão foi concluída.

As faixas de intensidade consultam Dados de Base para referências de PSE, FC, velocidade e pace. O contrato precisa preservar o significado do percentual e a origem/protocolo desses dados; os nomes dos cabeçalhos não substituem essa definição.

### 6.2 Planejado versus executado

Há campos de data/local previstos e executados, tempo/distância executados e previstos, PSE relatado e observações. Alguns campos previstos são fórmulas; relatos e decisões podem estar vazios.

No trecho conferido, o campo X de tempo combina duração do bloco e intervalo; ele não multiplica automaticamente a soma pelo número de séries S. Não usar o rótulo “Total” como garantia do tempo completo da sessão antes de reconciliar a convenção. Esse ponto foi registrado, sem correção.

### 6.3 Interpretação e decisão

Existem cabeçalhos CIT, monotonia, strain, interpretação técnica, decisão para próxima sessão, justificativa, momento de uso e data de impacto. No trecho inspecionado, esses cabeçalhos não equivalem a cálculos/decisões preenchidos.

As validações de BQ incluem progredir, manter, regredir, reduzir volume/intensidade, trocar método e ajustar por desconforto. BS permite momentos como próxima sessão, sessão de mesmo estímulo, próximo micro, próximo meso e data específica.

Essa estrutura é compatível com a resposta do treinador de que tanto ajuste de sessão quanto revisão de planejamento são válidos. Continua pendente a especificação dos critérios profissionais e a comprovação de qualquer aplicação automática desses campos.

## 7. Atualizar mesociclo: o que ficou comprovado e o que não

### Observado em células e interface

- Metadados confirmam a aba Atualizar mesociclo.
- A5 conta registros de exercícios novos.
- I:L contém histórico de versões e mudanças do modelo.
- A interface contém desenhos; foi lido visualmente um comando “Adicionar exercícios novos”, sem acionamento.
- As referências da Biblioteca incluem campos de mesociclo anterior e fallback de histórico.

### Não demonstrado

Não foi obtido o código vinculado aos desenhos/botões. O caminho Extensões→Apps Script foi consultado para leitura, mas não abriu editor disponível na sessão. Nenhuma autenticação adicional ou autorização de escopos foi realizada.

Portanto, não declarar como confirmados: quais intervalos são copiados/limpos, em que ordem; preservação de histórico e backup; avanço de quatro ou outro número de micros; tratamento do quinto micro; redefinição de datas; comportamento com sessão parcial; atualização de exercícios; recuperação em falha; idempotência.

Para concluir essa parte do estudo, é necessário ler o código efetivamente associado aos comandos e distinguir a rotina de novo mesociclo da rotina de atualização de versão. Não é necessário executá-lo na fonte do professor para estudar suas instruções.

## 8. Como a Central deve apoiar esta planilha

1. Ler o plano individual e declarar sua versão/finalidade, duração e sessões.
2. Relacionar avaliação e objetivos às capacidades/ênfases, sem tratar estrelas como resultado fisiológico.
3. Propor montagem que respeite metas e recursos, usando o preset apenas como apoio.
4. Distinguir prescrito, sugerido, relatado, registrado e inferido.
5. Auditar fórmulas e dependências antes de usar estimativas para decisão.
6. Explicar ajustes de sessão e propostas de revisão do micro/meso/macro para aprovação do treinador.
7. Preservar a continuidade de histórico ao desenhar qualquer integração futura.
8. Não executar atualizações até a rotina real estar compreendida e houver autorização específica para operação.

A escolha do Treinamento Combinado como planilha de trabalho é confirmada pelo treinador. Isso não autoriza, por si, escrita na pasta do Leandro nem execução dos comandos existentes.

## 9. Evidência, limites e preservação

Leituras da API: metadados/formatos condicionais; Macrociclo C1:F12, A99:BD110 e E105:L110; Montagem cabeçalhos A1:FX1, coluna F1:F627 para marcos, A1:F80, I4:AF6, AQ1:CR6, A44:E66, F121:F137, CG2:CR6, BQ122:CR122; Controle Cíclico A1:BT3, A4:R8, S4:BT6, BF4:BT12 e AK4:BT16; Atualizar mesociclo A1:Z30, A1:H200 e A201:H240; Aluno A1:AL13 e F11:P17; Biblioteca A1:BN5 e AY180:BN181. Trechos anteriores do MET-001 complementam a leitura.

Interface: observação de Montagem, Macrociclo e Atualizar mesociclo; rolagem e navegação, sem editar célula ou acionar desenho operacional. Navegação ao menu de código não tornou o projeto legível.

Resultado: logística principal de fórmulas e registros compreendida e documentada; rotina dos botões ainda não integralmente compreendida. Não houve ensaio operacional, validação acadêmica nova ou auditoria completa de todas as fórmulas. Nenhuma mudança no Drive, em planilhas, scripts, gatilhos, automações, prescrições, cadastros ou backups foi feita nesta etapa. Este arquivo novo é uma nota local da Central.
