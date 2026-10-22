# Guia da documentação

**Posição em 22/10/2026.** Os documentos abaixo orientam a leitura da versão publicada. Arquivos com versões anteriores permanecem como histórico; não somar suas propostas como se fossem regras atuais.

## Percurso recomendado

| Pergunta | Documento vigente nesta publicação |
|---|---|
| Qual é a proposta da Central? | [CENTRAL-001 v0.5](corrections/2026-10-20/CENTRAL-001_Visao_Produto_Arquitetura_Funcional_v0.5.md) |
| Como está a logística e qual é o próximo passo vigente? | [AUD-007 — revisão de gestor, treinador e programador](audits/AUD-007_Revisao_Logistica_Gestor_Treinador_Programador_v0.1.md); [AUD-006](audits/AUD-006_Diagnostico_Alinhamento_Projeto_v0.1.md) preserva o diagnóstico anterior |
| Quais fontes compõem a base de estudo? | [REF-BASE-001 — vídeos, artigos e três livros; estado de leitura e uso](methodology/REF-BASE-001_Fontes_Didaticas_Academicas_v0.4.md) |
| Uma demanda funcional pode coexistir com hipertrofia? | [DEC-SES-001 — demandas, ênfase e adaptações](decisions/DEC-SES-001_Demandas_Funcionais_e_Adaptacoes_v0.1.md) |
| Como a avaliação leva ao planejamento? | [NUC-001 v0.2](corrections/2026-10-20/NUC-001_Nucleo_Avaliacao_Prescricao_v0.2.md) e [AV-003 v0.6](methodology/AV-003_Contrato_Avaliacao_Prescricao_v0.6.md) |
| Que dados já existem antes da readaptação? | [MAP-CTX-001 v0.1](methodology/MAP-CTX-001_Mapa_Entradas_Readaptacao_v0.1.md) e [mapa estruturado](methodology/MAP-CTX-001_Mapa_Entradas_Readaptacao_v0.1.json) |
| Como tratar qualidade e bloqueios? | [VAL-001 v0.3](corrections/2026-10-20/VAL-001_Auditoria_de_Laudos_v0.3.md) |
| Como descrever indicadores, unidades e protocolos? | [DIC-001 v0.5](methodology/DIC-001_Indicadores_Protocolos_v0.5.md) |
| Como aproveitar métodos variados sem fixar a receita do exemplo? | [MET-005 — oito fichas e dez exemplos](methodology/MET-005_Fichas_Metodos_Organizacao_v0.1.md), [exemplos estruturados](methodology/MET-005_Exemplos_Representacao_v0.1.json) e [MET-004 — inventário da planilha](analyses/MET-004_Repertorio_Metodos_Organizacao_v0.1.md) |
| Como as planilhas orientam o trabalho? | [MET-002 — montagem e macrociclo](analyses/MET-002_Logistica_Treinamento_Combinado_v0.1.md), [MET-003 — metabólica e dados de base](analyses/MET-003_Avaliacao_Dados_Base_Treino_Ciclico_v0.1.md) e [DEC-OP-001 — atualização manual e backup](decisions/DEC-OP-001_Atualizacao_Manual_e_Backup_v0.1.md) |
| Como resumir contexto sem duplicar a coleta? | [RES-CTX-001 v0.1](validation/RES-CTX-001_Resumo_Contexto_Readaptacao_v0.1.md) e [registro sintético](validation/fixtures/RES-CTX-001_CAS-001_v0.1.json) |
| Como auditar a proposta integrada, com lacunas explícitas? | [CAS-002 v0.6](validation/CAS-002_Readaptacao_Contextualizada_v0.6.md), [parâmetros da proposta integrada](validation/fixtures/CAS-002_v0.6.json), [conferência histórica v0.1 de 33 contas](validation/CAS-002_Conferencia_v0.1.md) e [registro numérico histórico v0.1](validation/CAS-002_Conferencia_v0.1.json) |
| Como evoluiu o primeiro percurso, com lacunas preservadas? | [CAS-001 v0.4](validation/CAS-001_Cascata_Sintetica_Integrada_v0.4.md) |
| O que foi conferido nesse exemplo? | [Conferência v0.4](validation/CAS-001_Conferencia_v0.4.md) e [registro estruturado](validation/CAS-001_Conferencia_v0.4.json) |
| Como foram registradas as decisões anteriores do CAS-001? | [Revisão do treinador e programador](reviews/REV-CAS-001_Revisao_Treinador_Programador_v0.3.md) |
| Como implementar o verificador e verificar cada etapa? | [Plano técnico — sete tarefas e autorrevisão](superpowers/plans/2026-10-22-verificador-organizacao.md), ainda sem implementação; a escolha de execução segue pendente |
| O que o primeiro verificador deverá conferir e quais seus limites? | [VER-001 — especificação](methodology/VER-001_Especificacao_Verificador_Organizacao_v0.1.md) e [24 oráculos documentais](methodology/VER-001_Oraculos_v0.1.json), ainda não executados contra motor |
| Como testar o comportamento esperado? | [TEST-001 v0.7](validation/TEST-001_Casos_de_Validacao_v0.7.md) e [fixtures R-OP](validation/fixtures/CAS-001_regras_v0.2.json) |
| Como ler fontes e governança? | [Governança v0.22](decisions/00-LEIA-ME_Governanca_da_Documentacao_v0.22.md) e [biblioteca metodológica](corrections/2026-10-20/README_Biblioteca_Metodologica_ACESSO_v0.2.md) |

## Três camadas de autoria

- **Metodologia ACESSO e aulas:** conservar estado de revisão e fonte específica. Síntese preliminar não deve aparecer como fala verificada do professor.
- **Complementação acadêmica:** identificar estudo, população, método, resultado e limite de aplicação.
- **Proposta da Central:** identificar parâmetros candidatos, justificativas, alternativas, revisão e aprovação do treinador.

Esta publicação não promove nenhuma dessas camadas pelo simples fato de o documento estar no GitHub.

## Histórico e fontes operacionais

A pasta `corrections/2026-10-20/` guarda uma rodada documental; algumas de suas versões já têm sucessoras nas pastas `methodology/`, `decisions/` e `validation/`. Os relatórios de auditoria datados descrevem o estado observado à época, sem confirmar a situação atual de gatilhos ou planilhas.

Links do Drive podem exigir acesso. Os arquivos originais de professores e alunos não estão incorporados aqui, e nenhuma permissão do Drive foi alterada. A publicação não implementa importação de laudos, atualização de macrociclo, backup automático ou prescrição.
