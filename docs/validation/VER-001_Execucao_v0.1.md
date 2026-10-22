# VER-001 — Execução do verificador v0.1

Data: 22/10/2026. Estado: componente experimental local, revisão independente pendente.

## Resultado observado

Entrada pública implementada: `verifyOrganization(input, limits?)`, esquema `ver-001/1`, motor `ver-001/0.1`. Conferências puras de organização: integridade, contagem, comparação, unidades, trajetória, cronologia/recuperação, orçamento, semana e observação. As 11 relações V-R01–V-R11 são distribuídas nessas nove operações.

Na execução inicial completa: **109/109 testes unitários passaram**, em dez arquivos; `pnpm run build` passou (TypeScript e Vite). Os 11 testes existentes continuam incluídos. Os 24 oráculos documentais foram executados pela entrada pública, usando adaptador exclusivamente de teste. Nenhum expected histórico foi modificado. Os 89 cenários de TEST-001 conservam seus estados; não foram promovidos por estes resultados.

| Oráculos | Resultado real |
|---|---|
| V-01, V-02, V-03, V-04, V-05, V-06 | PASSOU cada caso |
| V-07, V-08, V-09, V-10, V-11, V-12 | PASSOU cada caso |
| V-13, V-14, V-15, V-16, V-17, V-18 | PASSOU cada caso |
| V-19, V-20, V-21, V-22, V-23, V-24 | PASSOU cada caso |

V-08 contém duas variantes inválidas; V-20 contém três faixas. Uma mutação temporária somando 1 ao total derivado provocou falha em V-01; restaurada a conta, os 109 testes passaram. V-08 revelou falta de preservação do número de voltas declarado no relatório; corrigida a origem do campo, sem modificar a expectativa.

## Alcance e limites

Os cálculos não prescrevem, não aprovam sessões ou progressões, não atribuem gravidade clínica e não certificam adequação científica. As projeções dos oráculos selecionam contas reais; indicadores de capacidades proibidas verificam sua ausência no contrato e são complementados por testes de comportamento. O adaptador não recebe expected. Traduz fragmentos sintéticos em relações explícitas, incluindo expansão declarada de padrões, e não faz parte do produto.

O componente ainda não está conectado a tela, cadastro ou banco. O build confirma compilação e preservação do aplicativo, não uma integração que ainda não existe. Não foram executados testes de banco, autenticação ou navegador. Sem consulta nova à literatura nesta etapa aritmética; as fontes e seus limites continuam nos MD metodológicos.

Limites técnicos padrão: texto JSON 1 MiB, 1000 pedidos, 20000 ocorrências expandidas, profundidade 50. Esses números são capacidade de processamento, não limites de treinamento. Não há truncamento autorizado.

Os arquivos operacionais, fontes sincronizadas, laudos, prescrições, planilhas, scripts, gatilhos, automações, backups e cadastros não foram alterados. Mudanças restritas ao novo domínio, seus testes e este registro.

## Rastreio

Plano: `docs/superpowers/plans/2026-10-22-verificador-organizacao.md`.
Base de desenvolvimento: `2b563910773efdd4479d8c05335cc0de47faa41a`.
Commits por tarefa precedem este registro; a revisão e o commit final verificado serão acrescentados após a avaliação independente.

Ferramentas observadas: Node v24.19.0, pnpm 11.25.0, Vitest 5.0.5. Nenhuma dependência adicionada; instalação reproduziu o lockfile existente.

Decisões de execução: checkout isolado criado pelo Git após o recurso do aplicativo retornar Not a git repository; extração de tarefas e registro equivalentes em PowerShell porque o extrator da habilidade reconhece apenas títulos Task, enquanto o plano usa Tarefa. Custo: registro do checkout no aplicativo indisponível e adaptação de controle de execução; histórico e saídas reais preservados.
