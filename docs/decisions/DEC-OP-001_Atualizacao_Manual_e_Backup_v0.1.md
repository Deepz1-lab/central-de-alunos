---
id: DEC-OP-001
titulo: "Atualização manual do período e preservação por backup"
versao: "0.1"
data: "2026-10-20"
estado: "ROTINA_CONFIRMADA_PELO_TREINADOR"
origem: "Explicação direta do treinador + conferência de arquivos em leitura"
implementacao: "Nenhuma operação executada; registro local"
---

# DEC-OP-001 — Backup antes de renovar a planilha de trabalho

## 1. Rotina confirmada pelo treinador

A atualização é conduzida manualmente. O treinador trabalha com os cinco blocos/semanas da Montagem. Quando o aluno completa o último bloco, a equipe preserva o período em backup antes de limpar o que foi feito na planilha de trabalho e atualizar a data de início do primeiro bloco para o novo período.

Sequência confirmada:

1. Acompanhar o preenchimento e a execução do período em trabalho.
2. Confirmar profissionalmente a conclusão do último dos cinco blocos.
3. Fazer o backup do treino antigo na pasta correspondente do aluno.
4. Atualizar manualmente a planilha de trabalho, limpando os registros pertinentes ao período concluído.
5. Atualizar a nova data no primeiro bloco e preparar o período seguinte conforme o plano.

A fala do treinador confirma a ordem operacional. Não foi confirmada uma lista exata de intervalos a limpar, nem se toda etapa manual consiste em edição direta ou envolve algum comando auxiliar. Isso só precisará ser mapeado antes de reproduzir ou automatizar as operações.

Não inferir que a quinta semana é copiada/promovida para a primeira. Não inferir avanço automático por calendário ou quantidade fixa de micros no script.

## 2. O que foi conferido nas fontes

Foram lidos os filhos diretos de 11 diretórios de backup localizados nas pastas de alunos do levantamento anterior. Todos apresentaram arquivos históricos de treinamento. As pastas também podem reunir avaliações e outros documentos; o nome Backup não significa conteúdo exclusivamente de treino.

Foi aberto em leitura um treinamento arquivado. Seus metadados preservam a estrutura de abas do modelo, e Montagem A44:E49 mostra uma janela de planejamento anterior à observada na planilha de trabalho. Isso é consistente com a preservação do período em uma planilha histórica própria.

Não foram auditadas todas as células dos backups, testada restauração ou comprovada a completude de cada ciclo. Nomes/datas de arquivos não provam por si a ordem em que uma pessoa realizou a atualização.

## 3. Consequência para o entendimento do MET-002

Esta explicação resolve a pendência principal sobre a rotina de trabalho: **o processo é manual, com preservação do histórico antes da renovação do período**.

O MET-002 registra a posição anterior, quando se procurava inferir o comportamento dos botões. Ler o código desses botões não é pré-requisito para compreender a sequência manual agora explicada. Seu código permanece não examinado e só será necessário se houver intenção de inspecionar ou reproduzir aquelas funções específicas.

A organização em cinco blocos usada pelo treinador deve ser preservada. A duração de microciclo continua sendo parâmetro do plano: blocos chamados semanas na rotina não autorizam converter automaticamente todos os micros em sete dias.

## 4. Papel da futura Central

Apoiar a revisão do período, a rastreabilidade e as propostas para o ciclo seguinte, preservando decisões do treinador. Relacionar a versão histórica ao período encerrado e a planilha de trabalho ao novo período.

A Central poderá propor ajustes de sessão ou revisão de planejamento, conforme confirmação anterior do treinador; não executará automaticamente backup, limpeza, mudança de data ou avanço de período por consequência deste registro.

Antes de qualquer futura implementação de escrita, especificar os campos que se preservam/renovam, como verificar o arquivo histórico e como manter rastreabilidade. Não inventar uma ordem de cópia ou política de limpeza com base no layout.

## 5. Preservação

Nenhum backup foi criado, substituído, movido ou restaurado. Nenhum arquivo da pasta do Leandro, célula, data, fórmula, prescrição, cadastro, script, gatilho ou automação foi alterado. Esta etapa gerou somente esta nota local.
