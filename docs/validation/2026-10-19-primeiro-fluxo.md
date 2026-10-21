# Validação técnica — primeiro fluxo local da Central

Data: 19/10/2026. Escopo: IMP-001, com pessoas e objetivos inteiramente fictícios. Execução técnica não substitui homologação profissional do treinador.

## Resultado

O primeiro fluxo funciona no Windows com autenticação e PostgreSQL locais: cadastro mínimo → relato do aluno → confirmação em conversa → rascunho → aprovação → liberação explícita → consulta do próprio resumo → pedido de correção → decisão com motivo → nova versão interna ou rejeição. Suspensão/encerramento negam novas consultas do aluno e preservam o histórico do treinador.

O aluno não aprova nem publica. O treinador não acessa outra carteira. Pedir uma alteração não muda o valor corrente. Aceitar uma correção cria versão ligada à anterior, sem aprovação/publicação automática. Quando liberada a versão nova, a anterior permanece no histórico.

Um relato novo enviado em outra sessão invalida a base de uma confirmação ainda não salva: o banco recusa o salvamento e a tela pede atualização e nova conferência. Nenhuma proposta de objetivo, avaliação ou treino é criada automaticamente.

## Evidências executadas

| Verificação | Resultado observado |
|---|---|
| Vitest — domínio e configuração | 11 testes passaram |
| pgTAP — autorização, versões, revisão e regressões | 39 assertivas passaram, em dois arquivos |
| Playwright com Supabase local real | 3 testes passaram: isolamento por API; percurso completo com duas sessões, publicação/correção/suspensão; ações apenas na versão atual |
| Playwright sem configuração | 1 teste passou; cenários de outros modos aparecem explicitamente ignorados |
| Entrada configurada | Verificada separadamente; nenhuma exceção de inicialização |
| Compilação TypeScript e build Vite | Passaram |
| Lint do banco, schemas public/private | Nenhum erro de schema encontrado |
| Advisors locais de segurança/desempenho, nível warn | Nenhum problema encontrado |
| Chaves do cliente | Nenhuma chave administrativa efetiva da instância local encontrada em src, dist ou .env.local |
| Reprodução do ambiente | Banco sintético reconstruído pelas duas migrations versionadas; suíte executada novamente |
| Inspeção visual | Telas do treinador/aluno inspecionadas; capturas sintéticas em evidence/ |

Falhas esperadas e regressões foram observadas antes das correções: tabelas inexistentes; edição da tela anterior durante troca de aluno; associação à base de relato alterada; mensagens genéricas; pedido pendente duplicável na tela; estado da correção após nova liberação; botões de aprovação em rascunho antigo. Uma colisão entre IDs das fixtures SQL e de navegador foi corrigida separando os conjuntos.

## Cobertura de TEST-001 v0.4

| Caso | Resultado no catálogo | Evidência e limite |
|---|---|---|
| TC-01–50 | NAO_EXECUTADO | Auditoria de medições, fórmulas e metodologia não implementada neste recorte |
| TC-51 | BLOQUEADO para aprovação integral | Isolamento por consulta/listagem/API e URL passou; tentativa relevante negada ainda não gera evento próprio de auditoria da aplicação, e exportação não foi implementada |
| TC-52 | PASSOU no protótipo local | Suspensão e encerramento negam consulta; histórico preservado para treinador; URL salva não contorna suspensão |
| TC-53 | PASSOU no protótipo local | Pedido guarda autor/data; resumo liberado não muda antes da decisão |
| TC-54 | BLOQUEADO para aprovação integral | Versionamento, rastreio e rascunho interno passaram; entrada com fórmula/derivados não existe, logo propagação seletiva não foi executada |
| TC-55 | PASSOU no protótipo local | Conteúdo aprovado e interno não aparece para aluno; liberação exige outra ação |
| TC-56 | PASSOU no protótipo local | Cadastro, relato, confirmação, aprovação/liberação e correção executados com contas sintéticas e autoria dos eventos |

Não promover os casos parcialmente cobertos a aprovação integral nem somar assertivas de código como casos metodológicos aprovados. Nenhum equipamento, equação, aula ou prescrição foi validado por estes resultados. As quatro aprovações técnicas acima limitam-se ao comportamento do protótipo; validação profissional do uso permanece com o treinador.

## Revisão independente

Um revisor com contexto independente examinou toda a branch, incluindo domínio e interface iniciais. Não encontrou defeito crítico de autorização; apontou um problema importante de vinculação da decisão ao relato efetivamente revisado e três grupos de problemas menores de interface/histórico.

Correções verificadas: identificação explícita do relato esperado; bloqueio quando ele muda; remoção da assinatura antiga sem base revisada; normalização de mensagens do banco; ações somente na versão atual; ocultação de novo pedido enquanto pendente; estado do pedido ligado à versão resultante; estados anterior/novo do vínculo gravados e apresentados. As regressões do banco e do navegador passaram após as correções. Não houve segunda revisão independente; a conferência das correções e testes foi feita pelo implementador.

## Ambiente e limites

Windows, PowerShell, Node 24.19.0, pnpm 11.25.0, Docker Desktop 4.95.0/motor 29.8.2 e WSL 2.7.13. Dependências fixadas em pnpm-lock.yaml. Só banco, Auth, PostgREST e gateway são necessários em execução; serviços auxiliares foram excluídos para reduzir memória. A inicialização pode baixar imagens auxiliares para instalar os schemas padrão.

Tabelas possuem RLS e acesso de leitura por vínculo; escritas diretas do cliente são negadas. Operações de negócio verificam identidade, titularidade e estado e gravam auditoria na mesma transação. Implementações privilegiadas necessárias permanecem em schema privado não exposto, com permissões explícitas e caminho de busca fixo. Locks por aluno serializam mutações. Isso não equivale a teste de carga ou prova de toda concorrência simultânea possível.

Sem projeto hospedado, publicação, dados reais, e-mails, integração com Drive/planilhas/agenda ou alteração de laudos, prescrições, cadastros operacionais, Apps Script, gatilhos, automações, backups e sources/. Apenas os MDs de acompanhamento técnico são reconciliados com esta execução. Nenhuma regra metodológica foi instalada.

Próxima etapa recomendada: o treinador experimentar o percurso com as contas fictícias e avaliar linguagem, ordem e utilidade das decisões; depois priorizar uma nova fatia pequena, preservando a essência de CENTRAL-001. Resolver as lacunas de TC-51/54 quando o escopo correspondente existir. Não ampliar automaticamente para alunos reais ou produção.
