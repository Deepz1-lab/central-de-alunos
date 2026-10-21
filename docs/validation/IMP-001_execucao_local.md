---
id: IMP-001
titulo: "Plano Técnico do Primeiro Fluxo da Central de Alunos"
versao: "0.1"
data: "2026-10-19"
estado: "PROTOTIPO_LOCAL_VALIDADO_TECNICAMENTE"
privacidade: "Uso exclusivo de dados e contas sintéticos neste plano"
referencias: ["ACESSO-001 v0.2", "TEST-001 v0.4", "CENTRAL-001"]
---

# Primeiro Fluxo da Central de Alunos — Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans or superpowers:subagent-driven-development to implement this plan task by task. Each step has a checkable result.

**Goal:** Validar, com dados sintéticos, o primeiro fluxo treinador-aluno da Central: cadastro mínimo, envio de objetivo, revisão pelo treinador, liberação de resumo e pedido de correção, com autorização verificada no backend.

**Architecture:** Aplicação web pequena com Vite e TypeScript, sem framework de interface no primeiro recorte. Supabase local fornece autenticação e PostgreSQL; políticas RLS protegem cada linha. A aplicação não se conecta a um projeto Supabase hospedado e não recebe dados reais nesta etapa.

**Tech Stack:** Node.js 22.12 ou superior; Vite + TypeScript vanilla; Supabase CLI, supabase-js e Supabase local stack em Docker; PostgreSQL com RLS e testes pgTAP; Vitest para regras de domínio; Playwright para o fluxo de navegador. Fixar versões compatíveis e commitar pnpm-lock.yaml.

**Spec:** ACESSO-001 v0.2 e TEST-001 v0.4; a essência e os princípios de trabalho permanecem os definidos em CENTRAL-001 v0.3: https://drive.google.com/file/d/1yRUZRBgpXiwAd0XCvGusrJ1QCqJ8Z4h4/view

## Global Constraints

- Preservar o propósito da Central: conhecer melhor o aluno, avaliar com método, justificar o Plano de Ação, acompanhar o que foi executado e decidir a próxima etapa.
- O treinador mantém a decisão e a aprovação; sugestão de sistema não se transforma em prescrição.
- Usar somente contas e dados sintéticos. Não coletar dados de saúde neste fluxo inicial.
- Não ler nem escrever laudos, planilhas, prescrições, cadastros ou outros registros operacionais existentes.
- Não alterar Apps Script, gatilhos, automações, backups, compartilhamentos ou permissões atuais do Drive.
- Não criar nem conectar projeto Supabase hospedado; não publicar aplicação.
- Separar andamento do registro de aprovação/publicação. Aprovação não libera conteúdo automaticamente ao aluno.
- Negar acesso por padrão; verificar autorização na fonte de dados para cada consulta e mutação. Não depender de ocultar elementos na interface.
- Habilitar RLS em toda tabela exposta e conceder só as operações necessárias; nunca enviar chave service_role ou secret ao navegador.
- Manter versões originais e registrar correções como eventos ligados; correção pendente não muda valor ou resumo corrente.
- Não instalar regras metodológicas, cálculos de VAL/DIC ou prescrição neste recorte.

## Review Focus

1. **Acesso direto por ID de outro aluno:** TC-51 deve provar que consulta, busca e exportação não revelam conteúdo; cobrir a política no banco e a rota/API usada pela aplicação.
2. **Vínculo suspenso ou encerrado:** TC-52 deve negar novo acesso por sessão ou link salvo, preservando o histórico do treinador.
3. **Correção pendente:** TC-53 deve manter o resumo atual até revisão do treinador e registrar pedido, autor e data.
4. **Correção aceita com dependências:** TC-54 deve preservar versões e sinalizar somente os derivados afetados; nenhum selo antigo pode sobreviver a dado novo.
5. **Aprovação sem publicação:** TC-55 deve manter o conteúdo invisível ao aluno até liberação explícita; TC-56 percorre o fluxo com fixture sintética sem dados de saúde.

## File Structure

Repositório novo a criar somente após aprovação deste plano, chamado central-alunos-app:

- package.json, pnpm-lock.yaml — scripts e dependências fixadas.
- index.html, src/main.ts, src/styles.css — shell e interface do protótipo.
- src/lib/supabase.ts — cliente Supabase local e configuração sem segredos privilegiados.
- src/domain/types.ts, src/domain/flow.ts — tipos e transições permitidas.
- src/features/auth/ — login, sessão e saída.
- src/features/coach/ — criação/revisão/liberação pelo treinador.
- src/features/student/ — envio de objetivo, consulta de resumo e pedido de correção.
- supabase/config.toml, supabase/seed.sql — ambiente local e fixtures de contas/dados sintéticos.
- supabase/migrations/ — schema e políticas RLS versionadas.
- supabase/tests/first_flow_access.test.sql — testes pgTAP para permissões e invariantes.
- tests/unit/flow.test.ts — transições e validações de domínio.
- tests/e2e/first-flow.spec.ts — cenário treinador-aluno no navegador.
- playwright.config.ts, vite.config.ts, tsconfig.json — configuração e comandos reproduzíveis.

## Tasks

### Task 1: Criar a base reproduzível de desenvolvimento

**Interfaces:** Produz uma aplicação vanilla TypeScript que abre localmente e executa lint, testes e build.

- [ ] Verificar Node.js 22.12 ou superior e Docker Desktop; confirmar que não existe projeto remoto ligado.
- [ ] Criar o repositório central-alunos-app e iniciar o template Vite vanilla-ts.
- [ ] Fixar versões compatíveis de Node, Vite, TypeScript, Supabase CLI, Vitest e Playwright; salvar pnpm-lock.yaml.
- [ ] Criar scripts npm run dev, npm run test, npm run test:e2e e npm run build.
- [ ] Executar npm run test -- --run e npm run build; ambos devem passar com a tela inicial vazia.
- [ ] Inicializar Supabase local via CLI no repositório. Rodar npx supabase --help, npx supabase start --help e npx supabase test db --help antes de escolher flags; usar apenas instância local.

**Verificação:** Vite serve em localhost; supabase status lista somente a instância local; package-lock registra as versões usadas.

### Task 2: Definir e testar o domínio do fluxo

**Arquivos:** src/domain/types.ts, src/domain/flow.ts, tests/unit/flow.test.ts.

**Interfaces:**
- UserId e StudentId são aliases de string para UUID.
- Actor: userId: UserId e role: coach ou student.
- StudentProfile: id, coachUserId, studentUserId, displayName, linkStatus; linkStatus é active, suspended ou closed.
- IntakeSubmission: id, studentId, authorUserId, objectiveReported, availabilityReported, createdAt.
- CoachSummary: id, studentId, objectiveReported, objectiveConfirmed, recordStatus, publicationStatus, version, previousVersionId, approvedBy, approvedAt, releasedAt.
- CorrectionRequest: id, studentId, summaryId, requestedBy, fieldKey, proposedValue, reason, requestStatus, reviewedBy, reviewedAt; requestStatus é pending, accepted ou rejected.
- Funções puras: canStudentSeeSummary(actor: Actor, student: StudentProfile, summary: CoachSummary): boolean e transitionSummary(summary: CoachSummary, action: SummaryAction, actor: Actor): TransitionResult.

- [ ] Escrever testes que diferenciem objetivo relatado de objetivo confirmado.
- [ ] Testar objetivo ausente: manter pendente, pedir esclarecimento e não inventar ou confirmar objetivo automaticamente.
- [ ] Testar que aprovar não publica, que publicar exige treinador, e que aluno não aprova.
- [ ] Testar que solicitação de correção não altera o resumo atual.
- [ ] Testar que correção aceita gera versão nova e mantém vínculo com anterior.
- [ ] Executar npm run test -- --run e confirmar que os testes falham antes da implementação.
- [ ] Implementar os tipos/transições mínimos para passar os testes, sem estados ou campos fora do ACESSO-001 §6.1.
- [ ] Reexecutar os testes e confirmar aprovação.

### Task 3: Criar schema e autorização no banco local

**Arquivos:** migration criada pela CLI em supabase/migrations/, supabase/seed.sql, supabase/tests/first_flow_access.test.sql.

**Interfaces de dados mínimas:**
- student_records: id uuid PK, coach_user_id uuid, student_user_id uuid UNIQUE, display_name text, link_status text (active/suspended/closed), created_at timestamptz.
- intake_submissions: id uuid PK, student_id uuid FK, author_user_id uuid, objective_reported text, availability_reported text, created_at timestamptz; não inclui dados de saúde.
- coach_summaries: id uuid PK, student_id uuid FK, version_no integer, previous_version_id uuid nullable, objective_reported text, objective_confirmed text, record_status text (draft/approved/superseded), publication_status text (internal/released/suspended), approved_by uuid nullable, approved_at timestamptz nullable, released_at timestamptz nullable, created_at timestamptz.
- correction_requests: id uuid PK, student_id uuid FK, summary_id uuid FK, requested_by uuid, field_key text, proposed_value text, reason text, request_status text (pending/accepted/rejected), reviewed_by uuid nullable, reviewed_at timestamptz nullable, decision_reason text nullable, created_at timestamptz.
- audit_events: id uuid PK, actor_user_id uuid, student_id uuid FK, entity_type text, entity_id uuid, event_type text, occurred_at timestamptz, reason text nullable, previous_version_id uuid nullable, new_version_id uuid nullable.
- Cada audit_event registra actor_user_id, student_id, entity_type, entity_id, event_type, occurred_at, reason e referência às versões anterior/nova quando houver.

- [ ] Criar primeiro os testes pgTAP para treinador, aluno A, aluno B e usuário anônimo; dados são sintéticos.
- [ ] Testar A11/TC-51: aluno A não lê nem altera registros de B, inclusive com ID direto; anônimo não lê conteúdo.
- [ ] Testar A12/TC-52: vínculo suspenso/encerrado nega consulta do aluno, mas treinador ainda consegue consultar histórico.
- [ ] Testar TC-53/54/55: aluno pode apenas pedir correção; treinador revisa; aprovação e liberação são operações separadas; versões antigas permanecem.
- [ ] Executar supabase test db na instância local e verificar que os testes falham sem as políticas.
- [ ] Criar migration com grants mínimos e RLS por operação. Usar vínculo explícito entre usuário, treinador e aluno; não usar user_metadata editável como autoridade.
- [ ] Criar a migration pelo comando npx supabase migration new first_flow_access e editar o arquivo gerado pela CLI; não inventar o nome/timestamp do arquivo de migration.
- [ ] Habilitar RLS em todas as tabelas expostas; revisar SELECT, INSERT, UPDATE e DELETE separadamente e negar o que não for permitido.
- [ ] Confirmar que correção aceita afeta apenas o novo resumo e que não existem cálculos dependentes neste primeiro fluxo.
- [ ] Executar supabase test db novamente; todos os testes de política e fluxo devem passar.

**Verificação de segurança:** uma consulta como aluno A para o ID de B retorna zero linhas/negação, sem dados sensíveis em mensagem ou log; o treinador A não vê carteira de outro treinador; a role anon não tem acesso.

### Task 4: Implementar as telas do primeiro fluxo

**Arquivos:** src/lib/supabase.ts, src/features/auth/, src/features/coach/, src/features/student/, src/main.ts, src/styles.css.

- [ ] Criar cliente Supabase usando somente URL e publishable/anon key local no navegador; verificar que service_role/secret não aparece em src nem no bundle.
- [ ] Implementar login/logout para contas sintéticas locais e encaminhamento por vínculo autorizado.
- [ ] Implementar a visão do treinador: criar cadastro mínimo, revisar o objetivo, confirmar objetivo e liberar resumo com ação explícita.
- [ ] Implementar a fila do treinador para aceitar/rejeitar pedidos de correção com motivo; ao aceitar, criar nova versão do resumo e evento de auditoria; ao rejeitar, preservar o resumo e registrar a decisão.
- [ ] Implementar a visão do aluno: enviar objetivo/disponibilidade, ver somente resumo liberado próprio e abrir pedido de correção.
- [ ] Quando objetivo estiver ausente, mostrar ao treinador uma pendência de confirmação; não criar resumo aprovado sem decisão humana.
- [ ] Mostrar ao aluno status simples: enviado, em revisão, liberado ou pedido de correção pendente; não mostrar conteúdo interno.
- [ ] Testar manualmente cada papel e confirmar que os bloqueios vêm do banco, não só da interface.
- [ ] Manter texto claro e acolhedor; nenhuma tela deve rotular capacidade, condição de saúde ou prescrever treino.

### Task 5: Validar o fluxo completo e registrar limites

**Arquivos:** tests/e2e/first-flow.spec.ts, documentação do projeto.

- [ ] Criar fixture reprodutível com treinador, aluno A, aluno B e objetivos fictícios sem dados de saúde.
- [ ] Escrever teste Playwright do fluxo TC-56: cadastro → objetivo informado → confirmação do treinador → aprovação → liberação → consulta do aluno → pedido de correção.
- [ ] Tentar navegação direta e alteração de ID para acessar aluno B; a tela não deve revelar conteúdo.
- [ ] Testar que a aprovação sem liberação não aparece na sessão do aluno.
- [ ] Rodar npm run test -- --run, supabase test db e npm run test:e2e.
- [ ] Rodar npm run build e revisar o pacote final para chaves privilegiadas ou fixtures pessoais.
- [ ] Registrar resultados, falhas e limites; todos os casos do TEST-001 continuam não executados até rodar no protótipo. Marcar somente os casos efetivamente cobertos.
- [ ] Parar no ambiente local: sem publicação, integração, dados reais ou alteração nos sistemas da Central.

## Handoff e decisão técnica

A escolha Vite + TypeScript + Supabase local é uma proposta de implementação para este recorte, não uma escolha de produção. O ambiente local usa Docker; se o computador não atender essa dependência, parar antes de instalar produto e reavaliar a alternativa técnica.

Documentação oficial consultada para a proposta:
- Supabase local development: https://supabase.com/docs/guides/local-development
- Supabase RLS e testes por operação: https://supabase.com/docs/guides/database/postgres/row-level-security
- Supabase alteração de exposição padrão da Data API em 2026: https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically
- Supabase database testing com pgTAP: https://supabase.com/docs/guides/local-development/testing/overview
- Vite e requisitos de Node: https://vite.dev/guide/
- Changelog Supabase sobre exposição explícita de tabelas e alterações de Node: https://supabase.com/changelog?types=breaking-change

Este plano segue a essência documentada em CENTRAL-001: a tecnologia serve à qualidade da decisão, à individualização e à relação treinador-aluno. Nenhuma tarefa implementa análise de laudos, recomendação de treino, automatização das aulas ou produção.

## Registro de execução — 19/10/2026

Plano executado em ambiente local Windows; branch feat/first-student-flow, commit a8dbcc332e3f9d4e2426183f72ef6f706e3bb89a. Este registro substitui o status parcial anterior, interrompido para reinício do Windows. Os checklists acima são o plano original; o resultado e os limites atuais são os descritos abaixo.

Fluxo funcional: cadastro sintético, objetivo/disponibilidade relatados, confirmação pelo treinador, rascunho, aprovação, liberação explícita, consulta do aluno, pedido de correção e decisão com motivo. Correção aceita cria outro rascunho; versão anterior preservada. Vínculo suspenso/encerrado nega novas consultas/envios ao aluno e mantém o histórico para o treinador.

Task 1–5 concluídas para este recorte técnico local. Foram usadas dependências exatas com pnpm-lock.yaml (runtime disponível possui pnpm), login no shell principal, fixture de Auth por script local e coach_accounts para identidade do treinador sem metadados editáveis. Escritas diretas são negadas; RPCs atômicos verificam autor/vínculo/estado e registram auditoria. Implementações privilegiadas necessárias ficam em schema privado não exposto, com permissões explícitas. O vínculo intake_id e os relacionamentos entre pedidos/resumos guardam a rastreabilidade das versões.

Evidências finais: 11 testes unitários; 39 assertivas pgTAP; 3 testes integrados de navegador com Supabase local real; 1 teste sem configuração e 1 entrada configurada executados separadamente. Build TypeScript/Vite e lint do banco passaram; advisors locais de segurança/desempenho nível warn sem achados. Nenhuma chave administrativa efetiva encontrada em src, dist ou .env.local. Banco sintético reconstruído a partir das duas migrations e testes repetidos; capturas inspecionadas.

Revisão independente: nenhum Critical; um Important de associação a relato alterado durante revisão e ajustes menores de ações/mensagens/histórico. Correções aplicadas com regressões RED→GREEN: relato esperado obrigatório no salvamento; rejeição de base alterada; ações apenas na versão mais recente; pedido pendente sem duplicação de formulário; status da correção vinculado à versão liberada; estados anterior/novo do vínculo preservados. Revisor não executou segunda rodada; implementação e suíte final conferidas pelo implementador.

Cobertura TEST-001: TC-52, TC-53, TC-55 e TC-56 PASSOU neste protótipo; TC-51 BLOQUEADO para aprovação integral (isolamento passou; evento próprio de tentativa negada e exportação não implementados); TC-54 BLOQUEADO para aprovação integral (versionamento passou; não há fórmulas/derivados neste recorte). TC-01–50 NAO_EXECUTADO. Não há aprovação geral dos 56 casos, validação de metodologia, equipamentos ou produção.

Docker Desktop 4.95.0, WSL 2.7.13 e virtualização verificados após reinício pelo usuário; motor Docker 29.8.2 ativo. Stack em execução reduzida aos serviços necessários para o computador de 8GB. Instalações e ativação foram autorizadas anteriormente; nenhum reinício automático.

Próximo passo: homologação prática pelo treinador com contas fictícias, seguida de escolha de nova fatia pequena. Não avançar automaticamente para dados reais, hospedagem, integração ou prescrição. Não foram alterados laudos, planilhas, prescrições, cadastros operacionais, Apps Script, gatilhos, automações, backups, compartilhamentos ou sources/.

