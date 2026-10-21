---
id: ACESSO-001
titulo: "Especificação Funcional da Central de Alunos"
versao: "0.3"
data: "2026-10-20"
estado: "PROPOSTA_DOCUMENTAL_PARA_REVISAO_DO_TREINADOR"
escopo: "Requisitos de produto e operação para uma futura ferramenta; não implementa mudanças"
fontes_base: ["CENTRAL-001 v0.2", "FLX-001 v0.3", "VAL-001 v0.2", "DIC-001 v0.2", "TEST-001 v0.3", "ACESSO-INDEX v0.1"]
---

# ACESSO-001 — Especificação Funcional da Central de Alunos v0.3

> **Posição após AUD-005 — 20/10/2026.** O algoritmo deverá propor interpretação, prioridades justificadas, Plano de Ação, macro/meso/micro e sessões dentro de regras aprovadas e dados suficientes; o treinador audita, ajusta e aprova/libera. Ajustes manuais passam pelas mesmas verificações. Gerar não equivale a aprovar ou executar. Exemplos anteriores não se tornam verdades universais. O fluxo restrito de cadastro/objetivos foi entregue como piloto técnico; requisitos abaixo para a jornada completa continuam como visão/proposta, sem representar implantação.


## 1. Objetivo e resultado esperado

Descrever como a futura Central deve apoiar o trabalho do treinador e a participação dos alunos, desde o primeiro contato até o acompanhamento dos resultados. A ferramenta deve reduzir retrabalho e organizar informações sem retirar do treinador o comando profissional, transformar hipóteses em fatos ou tratar exemplos anteriores como regras universais.

O resultado esperado é uma base que permita construir e testar um fluxo digital compreensível: cada informação tem origem, data e responsável; medidas e cálculos mantêm seus vínculos; decisões profissionais permanecem revisáveis; e o aluno entende o que foi combinado, realizado e qual é o próximo passo.

Este documento é uma especificação inicial para revisão. Não cria software, banco, formulários, automações, gatilhos, permissões ou alterações em registros existentes.

## 2. Entendimento confirmado e premissas

- **Confirmado pelo treinador:** o treinador será responsável por comandar a ferramenta.
- **Confirmado pelo treinador:** no futuro, alunos usarão a ferramenta.
- **Proposta da Central:** o treinador controla a operação e aprova avaliações, interpretações, planos e mudanças profissionais. O aluno consulta o que lhe foi disponibilizado e participa do próprio processo, sem editar silenciosamente registros profissionais.
- **Proposta da Central:** os dados de cada aluno devem estar associados ao aluno correto, e a interface futura deve mostrar ao aluno apenas o conteúdo destinado a ele. Esta é uma exigência para o desenho futuro; não modifica compartilhamentos ou sistemas atuais.
- **Premissa a validar:** a primeira versão atende um treinador e sua carteira de alunos. Outros profissionais, equipes e organizações ficam fora do escopo inicial, até necessidade confirmada.
- **Diretriz confirmada pelo treinador:** o algoritmo deverá propor periodização e montagem para auditoria, ajuste e aprovação do treinador; a viabilidade e as regras específicas ainda exigem validação.
- **Recorte técnico inicial entregue localmente com dados sintéticos:** cadastro contextual do aluno, confirmação do objetivo pelo treinador, compartilhamento do resumo aprovado com o próprio aluno e fluxo de pedido de correção. Avaliação física, análise automatizada, prescrição e integrações ficam para etapas posteriores. Esse recorte testa a relação treinador-aluno, identidade, histórico e utilidade da interface sem antecipar decisões técnicas de maior risco.

## 3. Princípios de produto

1. **A pessoa vem antes do indicador.** Um achado só ganha prioridade quando faz sentido à luz de objetivo, função, contexto e decisão profissional.
2. **O treinador mantém o comando.** A Central pode organizar, calcular e levantar perguntas aprovadas; não diagnostica, não libera esforço e não prescreve autonomamente.
3. **Fato, relato, cálculo e interpretação são distintos.** Uma medida original não pode ser substituída por uma conclusão.
4. **Toda informação importante tem proveniência.** Registrar fonte, data, método, responsável, versão e alterações relevantes.
5. **Uma pendência bloqueia só o que depende dela.** Uma inconsistência em campo ou fórmula não invalida medições independentes.
6. **O aluno participa sem assumir tarefas técnicas indevidas.** A interface explica pedidos e decisões em linguagem clara e permite relatar contexto, dúvidas e resposta ao treino.
7. **A metodologia ACESSO orienta o trabalho, mas não é inventada pela ferramenta.** Resumos, conteúdo conferido em aula, literatura e propostas do produto recebem identificação distinta.
8. **A ferramenta melhora o atendimento, não apenas a velocidade.** Ganho de tempo deve incluir conferência, correção, manutenção e comunicação com o aluno.

## 4. Perfis e responsabilidades

| Perfil | Pode fazer no produto futuro | Não deve fazer |
|---|---|---|
| Treinador | Criar e acompanhar registros; revisar dados; registrar decisões; auditar, ajustar e aprovar propostas de plano; liberar devolutiva; corrigir informação com histórico | Tratar sugestão automatizada como decisão já aprovada; apagar silenciosamente a origem ou decisão anterior |
| Aluno | Consultar registros e materiais liberados para si; informar objetivos, contexto, disponibilidade e feedback; sinalizar erro ou pedir correção; acompanhar próximos passos | Alterar medida original, protocolo, fórmula, interpretação ou prescrição profissional sem revisão do treinador |
| Sistema | Validar campos, manter relações e versões, calcular apenas regras aprovadas, mostrar pendências e registrar eventos técnicos | Inventar dados ausentes, corrigir original sem autorização, inferir consentimento, diagnóstico, objetivo ou realização de sessão |
| Outros profissionais | Fora do escopo inicial; eventual perfil futuro requer necessidade, limites e aprovação próprios | Herdar automaticamente permissões do treinador ou do aluno |

O treinador deve conseguir identificar claramente o que foi informado pelo aluno, o que foi observado ou medido, o que foi calculado pela ferramenta e o que foi decidido por ele.

### 4.1 Matriz inicial de ações

Esta matriz descreve o comportamento futuro do produto; não configura permissões atuais do Drive.

| Ação | Treinador | Aluno vinculado | Sistema |
|---|---|---|---|
| Consultar cadastro, histórico e itens internos do aluno | Sim, dentro da carteira | Não | Somente para a função solicitada e autorizada |
| Consultar conteúdo liberado ao aluno | Sim | Sim, apenas o próprio conteúdo | Somente para apresentar o conteúdo autorizado |
| Enviar relato, objetivo, disponibilidade ou feedback | Pode registrar ou corrigir com histórico | Pode enviar informação própria | Pode validar formato e registrar origem |
| Pedir correção de um registro profissional | Pode abrir e resolver a solicitação | Pode solicitar, sem alterar o original | Pode encaminhar e manter o histórico |
| Alterar medida original, protocolo ou decisão profissional | Sim, por correção versionada e justificada | Não; pode solicitar correção | Não |
| Criar ou revisar interpretação e Plano de Ação | Sim | Pode comentar ou confirmar entendimento | Pode preparar rascunho apenas se futuramente aprovado |
| Aprovar e liberar conteúdo profissional | Sim | Não | Não |
| Apagar histórico de decisão ou correção | Não; encerramento/arquivamento deve preservar trilha | Não | Não |

O vínculo entre aluno e carteira do treinador deve ser explícito e verificável. Autorização para consultar um registro deve ser checada no servidor e na fonte de dados em cada solicitação, inclusive quando o identificador do aluno ou do registro é alterado manualmente.

## 5. Domínios de informação

A implementação deverá manter entidades e relações claras, sem depender de cópias manuais da mesma informação:

- **Aluno:** identificador interno estável, dados mínimos de cadastro e estado do vínculo.
- **Contato e autorizações:** registro datado de finalidade, versão do termo e estado informado. Requisitos legais específicos devem ser revisados antes da implantação.
- **Anamnese e objetivos:** relato original, data, autor, objetivo expresso pelo aluno, objetivo ou prioridade confirmados em conjunto e respectivas revisões.
- **Avaliação:** ocasião, protocolo, instrumento/equipamento, versão, operador, condições, tentativas, unidade, observações e resultados brutos.
- **Auditoria e interpretação:** qualidade por dado e por finalidade, evidências, dependências, hipóteses, limites, pendências e decisão profissional.
- **Plano de Ação e prescrição:** versões distintas, autoria, aprovação, período de vigência, comunicação e relação com objetivos; rascunho não é prescrição vigente.
- **Sessão:** planejada, aprovada e executada como eventos distintos; incluir adaptação, não realização ou informação ainda não reconciliada.
- **Acompanhamento:** resposta, adesão, feedback, ocorrências pertinentes e reavaliações comparáveis.
- **Biblioteca metodológica e científica:** conteúdo não identificável, com fonte e maturidade próprias; não deve virar recipiente de prontuários ou dados individuais.
- **Histórico de alterações:** eventos append-only de criação, revisão, correção, aprovação, liberação, substituição e encerramento; registrar autor, data/hora, motivo, fonte e relação com a versão anterior.

Dados derivados devem manter referência às entradas, equação e versão. Se uma dependência for desconhecida, o produto dependente fica indisponível para o uso afetado, enquanto dados brutos independentes permanecem visíveis segundo o estado atribuído.

Uma correção não substitui o evento original: cria nova versão vinculada à anterior. A versão aceita passa a ser a corrente para os usos futuros; a anterior continua consultável no histórico. Produtos derivados afetados precisam ser marcados para recálculo/revisão, sem alterar silenciosamente relatórios ou decisões já liberados.

## 6. Fluxo funcional e recorte de primeira entrega

### 6.1 Recorte técnico inicial implementado localmente

Cadastro mínimo → relato do objetivo → revisão do treinador → aprovação/liberação explícita do resumo → consulta/pedido de correção versionado. Implementado somente com dados e contas sintéticos; evidências e limites estão em IMP-001 e TEST-001 §13. A homologação prática do treinador é etapa distinta.

Esse recorte não implementa avaliação física, fórmulas, prescrição ou sessões. A prioridade atual é consolidar o núcleo avaliação→prescrição pelo NUC-001 e [AV-003](https://drive.google.com/file/d/1U_ylnB-oOOoK89lCw5p3aSkYnaWWDbMJ/view?usp=drivesdk); não repetir a instalação do ambiente ou tratar a visão completa como já pronta.

### 6.2 Jornada completa futura

1. **Entrada e vínculo:** registrar contato e, quando aplicável, contratação e autorização. Não coletar dados de saúde antes de existir finalidade adequada.
2. **Conhecer o aluno:** registrar relatos, rotina, preferências e objetivos; destacar perguntas abertas sem completar lacunas por inferência.
3. **Triagem e prontidão:** apresentar informações pertinentes ao treinador. A Central não decide se a pessoa pode realizar esforço; registra a decisão e justificativa profissional.
4. **Avaliar:** o treinador escolhe e aplica procedimentos apropriados. O sistema registra valores originais e metadados antes de qualquer cálculo.
5. **Auditar:** verificar proveniência, identidade, unidade, consistência, protocolo, contexto, comparação e dependências. Mostrar estado e motivo de cada pendência.
6. **Interpretar e priorizar:** apresentar fatos, hipóteses alternativas, fontes, incertezas e perguntas. Não converter automaticamente todo desvio em problema ou meta.
7. **Planejar:** gerar, se aprovado no futuro, um rascunho de Plano de Ação ligado ao objetivo acordado. Só o treinador aprova o plano e a prescrição.
8. **Executar e registrar:** separar o que foi planejado do que ocorreu de fato; capturar adaptações e feedback sem presumir execução pela existência de agendamento.
9. **Devolver e acompanhar:** compartilhar explicação compreensível ao aluno; acompanhar resposta e reavaliar apenas quando pergunta e método permitirem comparação.
10. **Rever ou encerrar:** preservar histórico, registrar mudança de objetivo, pausa, encerramento ou continuidade e disponibilizar ao aluno o que foi aprovado para consulta.

## 7. Estados e comportamento da interface

Os estados são dimensões independentes. A implementação não deve combinar andamento do registro com quem pode vê-lo.

**Estado do registro — ciclo profissional:** RASCUNHO → EM_REVISAO ou EM_AUDITORIA → COM_PENDENCIAS ou PRONTO_PARA_DECISAO → APROVADO; um registro aprovado pode depois ser SUBSTITUIDO ou ENCERRADO, preservando sua versão.

**Estado de publicação — acesso ao aluno:** NAO_LIBERADO → LIBERADO; conteúdo liberado pode ser SUBSTITUIDO ou ter acesso SUSPENSO pelo treinador, com motivo e registro do evento.

**Estado de execução — sessão:** PLANEJADA → APROVADA → REALIZADA, ADAPTADA, NAO_REALIZADA ou INFORMACAO_NAO_RECONCILIADA. Este ciclo é separado do estado do plano.

Cada transição registra responsável e data/hora; decisões e suspensões também registram motivo. Aprovação profissional não implica publicação automática. A interface precisa distinguir estado do registro, estado de publicação, qualidade do dado, gravidade do achado e bloqueio de um uso específico, conforme VAL-001; esses conceitos não são intercambiáveis.

Estados de qualidade, gravidade e bloqueio devem seguir o vocabulário de VAL-001 e DIC-001 somente após aprovação. Esta especificação não cria regra matemática nem limiar clínico.

## 8. Requisitos funcionais verificáveis

- **RF-01 — Fonte:** um dado observado ou medido mantém referência à fonte original e não pode ser sobrescrito sem registro de correção.
- **RF-02 — Proveniência:** mostrar data, autoria, método, unidade e estado de revisão disponíveis para cada resultado relevante.
- **RF-03 — Escopo de bloqueio:** identificar quais cálculos, comparações ou decisões dependem de uma pendência; preservar usos independentes.
- **RF-04 — Objetivos:** guardar separadamente o objetivo relatado pelo aluno e o objetivo ou prioridade confirmados pelo treinador e aluno.
- **RF-05 — Aprovação:** interpretação, Plano de Ação e prescrição exibem autor e estado; rascunhos não aparecem como decisão vigente.
- **RF-06 — Execução:** separar evento planejado, aprovado e realizado; registrar adaptações e não realização.
- **RF-07 — Participação do aluno:** disponibilizar visão individual clara dos itens liberados, pedidos pendentes, feedback e próximos passos.
- **RF-08 — Histórico:** manter mudanças e decisões anteriores consultáveis para o treinador, com motivo e autoria.
- **RF-09 — Fontes metodológicas:** cada regra ou sugestão mostra origem, versão e maturidade; ficha preliminar não aparece como regra aprovada.
- **RF-10 — Erro e ausência:** diferenciar campo ausente, valor zero confirmado, erro de fórmula e dado incompatível.
- **RF-11 — Comunicação:** explicar pendências e resultados em linguagem apropriada ao destinatário, sem expor raciocínio técnico desnecessário ao aluno.
- **RF-12 — Portabilidade:** planejar exportação legível dos registros do aluno e decisões associadas, conforme política futura.
- **RF-13 — Correção versionada:** preservar o registro original e criar evento de correção com valor anterior/novo, unidade, fonte, autor, data/hora, motivo, revisor e estado da solicitação. Uma solicitação do aluno não altera o valor corrente até revisão do treinador.
- **RF-14 — Separação de estados:** modelar separadamente ciclo do registro, aprovação profissional, publicação ao aluno e execução; nenhuma mudança em uma dimensão pode ser inferida a partir de outra.
- **RF-15 — Vínculo de acesso:** antes de retornar qualquer registro, verificar que o usuário autenticado tem vínculo ativo com aquele aluno e ação permitida; não confiar somente em identificador enviado pela interface.

## 9. Requisitos técnicos e operacionais para etapa futura

- Identidade e relação de cada registro devem ser verificáveis; nenhum resultado deve depender apenas do nome digitado ou posição de uma linha/aba.
- A aplicação deverá prever acesso individual por papel e por aluno quando houver portal; a autorização será validada no servidor e nos dados, não apenas escondendo telas.
- Testes de autorização devem cobrir consulta permitida ao próprio registro e negação a registros de outro aluno por acesso direto, troca de identificador, listagem, pesquisa, exportação e links salvos; também devem cobrir suspensão/encerramento do vínculo.
- Cada endpoint ou operação deve declarar a ação e o recurso necessários; a ausência de regra explícita deve resultar em acesso negado. Registrar tentativas negadas relevantes sem copiar dados sensíveis para logs.
- Dados operacionais identificáveis devem ficar separados do acervo didático e de fixtures de teste.
- A solução deve registrar versões, alterações e falhas relevantes, prever cópia de segurança e demonstrar restauração em ambiente de teste.
- A interface deve funcionar em celular e desktop, apresentar pendências sem jargão e permitir localizar aluno, avaliação, plano e sessão sem duplicação.
- Cálculos devem ser determinísticos, testáveis e vinculados a equações aprovadas; regra não mapeada mostra indisponibilidade do derivado e explicação.
- A primeira prova técnica deve ser em ambiente isolado, com dados sintéticos, leitura controlada e sem escrita nos arquivos operacionais.
- Tecnologia, banco de dados, hospedagem e integração não são decididos por este documento.

## 10. Casos de aceitação do desenho

| Caso | Entrada ou situação | Resultado esperado |
|---|---|---|
| A01 — Pendência localizada | Peso de referência questionável e medição absoluta de força independente | Bloquear somente usos que dependem do peso; manter a medição independente identificada e disponível para revisão |
| A02 — Objetivo em branco | Cadastro não informa objetivo; treinador ainda não confirmou | Mostrar pendência; não inventar objetivo a partir de exemplo anterior |
| A03 — Contexto mudou | Comparação entre avaliações atravessa mudança importante relatada pela pessoa | Mostrar contexto e exigir análise de comparabilidade; não rotular automaticamente como progresso ou regressão |
| A04 — Origem conflitante | Duas fontes registram valores diferentes | Preservar ambas, apontar divergência e aguardar conferência; não sobrescrever uma fonte |
| A05 — Sessão agendada | Há evento no calendário, sem registro de execução | Manter como planejada/agendada; não contar como realizada |
| A06 — Zero versus ausente | Zero medido e confirmado em um campo; outro campo não preenchido | Tratar cada condição conforme seu significado; não converter ausência em zero |
| A07 — Revisão pelo aluno | Aluno pede correção de dado ou informa contexto novo | Registrar pedido/relato e encaminhar ao treinador; preservar original até conferência |
| A08 — Plano não aprovado | Rascunho existe sem aprovação do treinador | Não apresentar como prescrição vigente nem orientar execução como se aprovado |
| A09 — Consulta individual | Há vários alunos na carteira | A experiência futura limita a consulta ao registro próprio e aos conteúdos liberados, validando autorização fora da interface visual |
| A10 — Regra sem maturidade | Sugestão depende de ficha não revisada diretamente ou equação não confirmada | Identificar natureza da fonte e manter a regra fora de decisão automatizada |
| A11 — Acesso cruzado | Aluno A tenta abrir, pesquisar ou exportar registro do aluno B alterando o identificador | Negar a solicitação no servidor e não revelar conteúdo; registrar o resultado do teste |
| A12 — Vínculo encerrado | Aluno deixa de ter vínculo ativo com a carteira | Negar novas consultas conforme regra de retenção futura; histórico permanece sob controle do treinador |
| A13 — Correção solicitada | Aluno pede mudança de objetivo ou dado registrado | Manter o dado corrente; abrir solicitação com autor e data; treinador aceita ou rejeita com motivo e trilha preservada |
| A14 — Correção aceita | Treinador aceita correção de um dado usado por cálculo derivado | Criar versão corrente ligada à anterior, marcar derivados dependentes para revisão e preservar decisões/liberações históricas |
| A15 — Aprovação sem liberação | Treinador aprova um registro, mas não o publica ao aluno | Manter registro aprovado como interno até ação explícita de liberação |
| A16 — Fluxo mínimo | Cadastro sintético, objetivo informado, revisão do treinador e consulta do resumo pelo aluno | Concluir sem coletar dados de saúde, sem duplicação, com histórico e controle de acesso demonstráveis |

Estes casos são requisitos de desenho, não testes executados. Devem ser reconciliados com TEST-001 antes de virarem fixtures técnicas.

## 11. Método, evidência e propostas: atribuição correta

- **Metodologia das aulas:** ACESSO-INDEX e fichas ACESSO localizam assuntos e material didático. Atribuição direta ao professor exige revisão do vídeo, minutagem verificável e registro do revisor. Este documento não declara conteúdo como AULA_VERIFICADA.
- **Complementação acadêmica:** Caderno Técnico-Científico e EVID-INDEX apoiam a busca e o confronto científico. Referência listada não prova que protocolo específico do equipamento foi validado nem define regra universal.
- **Proposta nossa:** perfis, entidades, fluxos, estados, requisitos funcionais e casos A01–A10 são propostas de arquitetura e operação da Central. Exigem revisão do treinador e revisão técnica antes de implementação.
- **Exemplos anteriores:** casos analisados ajudaram a revelar classes de risco, mas não limitam os cenários possíveis nem servem como regra verdadeira para futuros alunos. Requisitos devem cobrir casos comuns, atípicos e desconhecidos, com expansão por evidência e revisão.
- **Confirmação do treinador:** o treinador comanda a ferramenta e alunos futuramente a utilizarão. Detalhes de jornada, conteúdo liberado, autorização, retenção e correção continuam a validar.

## 12. Fora do escopo e dependências

A proposta funcional original não constituiu aprovação automática de arquitetura tecnológica, provedor ou login; a implementação local posterior e seu escopo constam no IMP-001. Esta revisão não aprova mudança de permissões no Drive, migração de dados, telas finais, regras clínicas, limiares de triagem, equações de equipamentos, prescrição automática, execução de TEST-001, uso de dados identificáveis em protótipo ou integração com agendas, planilhas e scripts.

Dependências para passar à especificação técnica: revisão profissional do fluxo e estados; aprovação do escopo inicial de aluno/treinador; revisão de VAL-001 e DIC-001 para os usos pretendidos; aprovação dos casos pertinentes de TEST-001; inventário técnico das fontes canônicas e fórmulas; requisitos aplicáveis de autorização, acesso, retenção e exportação. O primeiro plano técnico deve se limitar ao fluxo descrito em 6.1 e usar dados sintéticos; avaliações e automações ficam fora dessa primeira entrega.

## 13. Critérios de revisão e próximas etapas

O treinador pode revisar este documento por quatro perguntas:

1. O fluxo corresponde ao atendimento real, sem etapas ou aprovações desnecessárias?
2. Os limites entre relato do aluno, dado medido, interpretação e decisão estão claros?
3. A participação do aluno é útil sem transferir a ele decisões profissionais?
4. Os critérios preservam a individualização e evitam que exemplos virem verdades universais?

**Sequência recomendada:** após aprovação do treinador desta versão, reconciliar A11–A16 com TEST-001; revisar DIC-001 e selecionar apenas dependências necessárias às próximas etapas; preparar então um plano técnico restrito ao fluxo mínimo da seção 6.1. A etapa posterior pode incorporar auditoria de avaliação do FLX-001 em modo sombra, depois de revisão e aprovação próprias.

## 14. Referências do projeto

- [CENTRAL-001 — Visão do Produto e Arquitetura Funcional v0.2](https://drive.google.com/file/d/1yRUZRBgpXiwAd0XCvGusrJ1QCqJ8Z4h4/view)
- [FLX-001 — Jornada do Aluno e Fluxo Operacional v0.3](https://drive.google.com/file/d/19LuNOtoK7wJ9h613X4ZzjepGrsoucHrl/view)
- [VAL-001 — Auditoria de Laudos v0.2](https://drive.google.com/file/d/1zx1tiqjgI56zwWXif82ZuCy1WdZrNHhx/view)
- [DIC-001 — Indicadores e Protocolos v0.2](https://drive.google.com/file/d/1Y9JXywjBewjfR-14Q4n6gkiCILun_88D/view)
- [TEST-001 — Casos de Validação v0.3](https://drive.google.com/file/d/1zUzIXK5lm4X09z6tNNCZvHo6AFfKMgLL/view)
- [ACESSO-INDEX — Gatilhos Metodológicos v0.1](https://drive.google.com/file/d/1WbAhRFbk5RtgVrkhzvX5s60gXnfKP9Z9/view)
- Caderno Técnico-Científico e EVID-INDEX do projeto; consultar versões vigentes no Drive antes de promover afirmações ou regras.

## 15. Registro de versão

| Versão | Data | Alteração | Estado |
|---|---|---|---|
| 0.1 | 2026-10-19 | Primeira especificação funcional proposta, com recorte treinador-aluno, ciclo operacional, proveniência, estados, requisitos e critérios de aceitação | Aguardando revisão do treinador |
| 0.2 | 2026-10-19 | Incorpora revisão de programador e treinador: delimita a primeira entrega, detalha ações por perfil e testes de acesso, separa ciclo do registro/publicação/execução e especifica correção versionada | Aguardando validação do treinador |


## Revisão de coerência — 20/10/2026

Revisão documental v0.3 em resposta ao AUD-005. Referências a versões anteriores nas fontes e no histórico descrevem a elaboração anterior; o LEIA-ME aponta a posição atual pelos mesmos IDs do Drive. Esta edição não executa testes nem aprova regras científicas ou prescrições.
