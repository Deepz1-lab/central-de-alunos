# Central de Alunos — primeiro fluxo local

A Central apoia o trabalho do treinador: conhecer a pessoa, registrar o relato, confirmar objetivos em conversa e manter decisões rastreáveis. Este recorte usa somente pessoas e objetivos fictícios.

## O que funciona

Login de treinador/aluno; cadastro mínimo vinculado a conta sintética; objetivo e disponibilidade relatados; confirmação do treinador; rascunho, aprovação e liberação separados; consulta do próprio resumo liberado; pedido de correção; aceitação como nova versão interna ou rejeição com motivo; situação do vínculo; histórico.

As regras são aplicadas no PostgreSQL, inclusive pela API direta. Aprovar não publica. Pedido não altera o resumo. Aceitar cria outro rascunho e preserva a versão liberada. Suspensão impede novas consultas/envios do aluno e preserva o histórico para o treinador. Conteúdo já visto ou copiado não pode ser recolhido retroativamente.

## Windows e Visual Studio Code

Abra esta pasta central-alunos-app em Arquivo → Abrir Pasta no Visual Studio Code. Use um terminal PowerShell.

Verificados neste computador: Node 24.19.0, pnpm 11.25.0, Docker Desktop 4.95.0 (motor 29.8.2), WSL 2.7.13 e virtualização após reinício. Edge é usado nos testes.

Se Node/pnpm não estiverem no terminal, os executáveis disponíveis são:

- Node: C:\Users\pires\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe
- pnpm: C:\Users\pires\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd
- Docker: C:\Users\pires\AppData\Local\Programs\DockerDesktop\resources\bin\docker.exe

Com Docker Desktop aberto, na pasta do projeto:

```powershell
$env:PATH="$env:LOCALAPPDATA\Programs\DockerDesktop\resources\bin;$env:PATH"
pnpm install --frozen-lockfile
pnpm exec supabase start --exclude realtime,storage-api,imgproxy,mailpit,postgres-meta,studio,edge-runtime,logflare,vector,supavisor
pnpm seed:auth
pnpm dev
```

Abra http://127.0.0.1:5173. Contas fictícias: treinador@central.test e aluno-a@central.test; senha de ambas: CentralLocal!2026. O aluno A começa sem resumo: entre como aluno para relatar um objetivo e como treinador para confirmá-lo e liberar o resumo.

seed:auth cria as contas se não existirem e escreve somente URL/chave pública local em .env.local, ignorado pelo Git. Não muda senhas de contas existentes. Cada execução também prepara nova conta C para teste independente; não apaga históricos. A chave administrativa permanece somente no processo de preparação; não é salva no projeto nem enviada ao navegador. Não usar dados reais ou essas senhas fora do ambiente local.

## Validação

```powershell
pnpm test --run
pnpm test:db
pnpm test:e2e
pnpm test:live
pnpm build
pnpm exec supabase db lint --local --schema public,private --level warning
pnpm exec supabase db advisors --local --type security --level warn
```

O teste simples de navegador verifica a preparação sem configuração. test:live prepara contas e executa três testes integrados com banco real local; os cenários de configuração ficam ignorados nesse modo. Cada modo ignora explicitamente testes do outro. Qualquer teste selecionado que falhar retorna erro.

Evidências de 19/10/2026: 11 testes de domínio/configuração, 39 assertivas pgTAP e três testes integrados passaram, incluindo isolamento por API, percurso completo pelas telas, link direto de outro aluno e suspensão. Build e verificação do schema passaram; o verificador de segurança local não apontou problemas. A falha esperada por ausência de tabelas e a falha de troca rápida de aluno foram corrigidas e verificadas novamente. A revisão independente encontrou um problema de base de relato e ajustes de interface/histórico; as correções passaram nas regressões. Consulte docs/validation/2026-10-19-primeiro-fluxo.md.

## Limites

Vite/TypeScript e Supabase Auth/Postgres/RLS são a escolha deste protótipo local. Não são decisão definitiva de produção. Não há integração, envio de e-mail, prescrição, cálculo corporal, análise de laudos, decisão automática ou publicação. Este fluxo não valida medições ou fórmulas futuras.

TC-51–56 têm cobertura neste recorte; isso não aprova os 56 casos de TEST-001. Não houve teste de carga, homologação com alunos reais ou validação de produção. Decisão repetida e versão antiga foram testadas; concorrência simultânea entre sessões ainda merece teste próprio antes da ampliação.

Este repositório não lê nem modifica laudos, planilhas, prescrições, Apps Script, gatilhos, automações, backups, cadastros existentes ou sources/. Não tem projeto remoto Supabase vinculado. O trabalho permanece na branch local feat/first-student-flow.

## Conferências de organização — 22/10/2026

VER-001 já está no main do GitHub: componente puro para contagens, unidades, trajetórias, tempo, semana e observações. Foram verificados 128 testes unitários, incluindo 24 oráculos, e build. Ainda não gera prescrição, não aprova treino e não está ligado à tela/banco.

- [Execução e revisão do VER-001](docs/validation/VER-001_Execucao_v0.1.md).
- [Percurso sintético CAS-002 → verificador → auditoria](docs/validation/FLX-VER-001_CAS-002_v0.1.md).
- [Casos contrastantes e justificativa individual](docs/decisions/DEC-IND-001_Casos_Contrastantes_e_Justificativa_Individual_v0.1.md).
- [Aula 33: conferência da transcrição, minutagens e ressalvas](docs/decisions/DEC-IND-001_Casos_Contrastantes_e_Justificativa_Individual_v0.1.md#71-aula-33--conferência-direta-e-alcance).
- [Governança atual v0.23](docs/decisions/00-LEIA-ME_Governanca_da_Documentacao_v0.23.md).

O recorte inicial descrito acima pertence ao piloto de cadastro; os resultados do verificador e da sondagem têm evidências e limites próprios. Não confundir integração do código ao repositório com integração do fluxo completo de prescrição ao aplicativo. Drive e GitHub não têm sincronização automática.
