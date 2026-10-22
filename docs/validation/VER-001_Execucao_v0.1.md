# VER-001 — Execução do verificador v0.1

Data: 22/10/2026. Estado: componente experimental local, revisão independente realizada e correções verificadas.

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

## Fechamento da revisão independente

Revisão do conjunto realizada em contexto separado sobre `a03aa2b6ed7dab1e83c78e4213902af27a6f7f79`: nenhum achado crítico, nove importantes e quatro menores. Dois menores foram reclassificados como importantes por produzirem soma incorreta ou aplicabilidade inferida. Os onze pontos importantes foram corrigidos em uma rodada, com **19 testes de regressão que falharam antes das correções e passaram depois**. Não houve segunda revisão; a evidência das correções é a reprodução automatizada, seguida da suíte completa e build.

**Código verificado: `509bfe58eb4a5ae35d400fe597819940a8027a3a`. Resultado final: 128/128 testes unitários, onze arquivos, 24/24 oráculos e build aprovado.** Isso não significa aprovação dos treinos.

Correções: identidade Unicode que podia interromper pedidos independentes; linhas inválidas removidas indevidamente das dependências; total semanal parcial exibido como completo; conflito observado afetando dados previstos; unidade inválida em conta por tarefa; componente maior que o bloco que o inclui; perda da duração explícita quando a distribuição era inválida; lacunas de arrays ignoradas na cobertura; caminhos de origem pouco específicos; cancelamento numérico na soma temporal; agrupamento inferido sem declaração.

A reserva contida de 70 min num bloco de 10 min agora impede classificar o orçamento como cabível. Sessões ou tempos ausentes continuam desconhecidos, enquanto parcelas independentes permanecem disponíveis. Mensagens apontam campos concretos; nenhuma correção reescreve a origem.

### Decisões adicionais

- Segmentos de IDs conservam a codificação URI habitual; unidades UTF-16 isoladas usam escape `%uXXXX`, sem substituir identidades ou interromper pedidos independentes. Custo: consumidores devem tratar IDs de resultado como opacos ou reconhecer esse escape.
- `known-task-subtotal:<id>` explicita a parcela semanal conhecida; `task:<id>` permanece desconhecido se a cobertura daquela natureza estiver incompleta. Custo: consumidores precisam distinguir esse sufixo adicional.
- As duas adaptações de execução já registradas acima continuam válidas: checkout por Git após falha do recurso nativo e controle equivalente em PowerShell para títulos em português.

### Melhorias menores adiadas

1. Reforçar as projeções de ausência de capacidades com mais testes de invariância entre rótulos de métodos. As contas dos oráculos continuam comparadas integralmente; a invariância da trajetória já possui teste próprio. Algumas afirmações estruturais de ausência de aprovação são mais estreitas que testes de comportamento gerais.
2. Melhorar a formatação dos módulos/testes compactos para facilitar auditorias futuras.

A versão está preservada na branch local `feat/ver-001-organizacao`, em checkout separado. Nenhuma publicação, merge, deploy ou integração automática com o aplicativo foi realizada. Próximo passo recomendado: disponibilizar a proposta de código para revisão no GitHub e, depois, preparar uma integração de leitura que exiba conferências sem aprovar treino.

## Preparação da proposta no GitHub

Por escolha do treinador, a entrega foi preparada para envio e proposta de revisão. Como o histórico local original era independente do histórico remoto, os dez commits foram reaplicados em `feat/ver-001-revisao`, a partir de `main` remoto `5889e75c58f6201ed8f1969cae8e1f736b4b4e8b`, sem reescrever main. O conteúdo do domínio e dos testes é idêntico ao revisado localmente. A correção de código corresponde agora ao commit `a9f8a4e`; `509bfe58` identifica sua versão no histórico local preservado. A evidência inicial continua registrada acima.

A proposta contém somente o novo domínio, seus testes e este relatório. Continua sem ligação com tela/banco, sem publicação de aplicação e sem mudança nos arquivos operacionais. As duas melhorias menores adiadas permanecem explícitas.
