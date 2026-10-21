---
id: AUD-006
versao: "0.1"
data: "2026-10-21"
estado: "DIAGNOSTICO_DOCUMENTAL_E_TECNICO"
escopo: "Alinhamento global; não homologa prescrições nem altera operações"
---

# Diagnóstico da Central de Alunos frente ao objetivo principal

## 1. Veredito

O projeto faz sentido e preserva o objetivo principal: conhecer a pessoa, qualificar a avaliação, interpretar prioridades e propor planejamento fundamentado para auditoria do treinador. A avaliação permanece central, junto de objetivos, contexto e resposta individual. Vídeos, artigos e livros são fontes complementares, com autoria e alcance distintos.

A base documental é mais desenvolvida que a capacidade do aplicativo. Hoje existe um piloto de cadastro/objetivo/revisão; o núcleo de avaliação→proposta de treino ainda não existe em software. A continuidade exige transformar uma pequena parte do conhecimento em decisões profissionais revisáveis e exemplos testáveis, em vez de ampliar indefinidamente documentos ou antecipar o dashboard completo.

O resultado desejado continua sendo um planejador assistido, capaz de propor e explicar plano e periodização, verificar incoerências e acompanhar respostas. Um verificador inicial será etapa de construção desse resultado, não substituição definitiva do objetivo por um sistema que apenas emite alertas.

## 2. Escopo e evidência desta auditoria

- Contexto: conversa fornecida nesta tarefa, incluindo as correções recentes do treinador sobre experiência, análise mecânica, dose inicial e progressão. Não foi recuperado novo histórico integral de outras conversas.
- Repositório: inventário de 122 arquivos rastreados, sendo 74 Markdown e dez arquivos em src/, antes desta entrega; inspeção do código do fluxo, API, interface do treinador, testes e estrutura das duas migrações. Três versões AV-003 não rastreadas e preexistentes foram preservadas.
- Documentos centrais: CENTRAL-001 v0.5, NUC-001 v0.2, AV-003 v0.6, MAP-CTX-001, RES-CTX-001, CAS-002, conferência e fixture, REV-CAS-001 v0.3, TEST-001 v0.7, REF-BASE-001, MET-002/003, DEC-OP-001, AUD-005, guias e governança v0.10. A leitura foi dirigida à arquitetura, decisões e pendências; não se declara releitura integral dos 74 MDs.
- Drive: conteúdo e identificação recuperados para sete referências centrais: índice, visão CENTRAL, AV-003, DIC-001, TEST-001, CAS-002 e REF-BASE-001. Os títulos/versionamentos consultados correspondem aos usados na navegação local. Não foi inventariada novamente toda a árvore do Drive nem auditada a carteira atual de alunos.
- Integridade: 75 links relativos para arquivos existentes no conjunto Markdown rastreado antes desta edição; nenhum destino ausente. Não verifica âncoras, acesso a links externos ou vigência científica.
- CAS-002: os três hashes do manifesto coincidem com os arquivos locais. Recalculados total de 12 séries/sessão, 24 séries/semana, teto de 58 min e custo adicional de 960 s no cenário de três séries em todos os seis exercícios mantendo as demais hipóteses.
- Verificação atual: 11 testes unitários passaram; TypeScript e build Vite concluídos. Não foram repetidos testes de banco ou navegador com backend, nem executados treinos ou casos contra motor de prescrição.
- Os livros tiveram somente a leitura parcial registrada em REF-BASE-001; esta auditoria não acrescenta revisão integral dos livros, revisão sistemática de artigos ou nova verificação direta dos vídeos.

Esta análise foi realizada por um mesmo agente, com perspectivas de programação e planejamento do treinamento; não representa dois revisores independentes ou homologação institucional da ACESSO.

## 3. Objetivo versus situação real

| Necessidade do treinador | O que já sustenta o projeto | Distância até a entrega operacional |
|---|---|---|
| Conhecer o aluno antes de montar treino | Anamnese descrita, MAP-CTX com 34 itens, RES-CTX e contexto sintético | App coleta objetivo e disponibilidade em texto; não reúne toda a avaliação/contexto |
| Avaliação confiável como norte | VAL, DIC, AV e MET distinguem medição, estimativa, protocolo, dependências e comparação | Mapeamento real ainda parcial; não existe importação/auditoria automática de laudos |
| Interpretar prioridades individuais | NUC, matrizes e casos demonstram raciocínio e limites | Não há conjunto executável de decisões com aplicabilidade e revisão profissional completas |
| Propor macro/meso/micro e sessões | CAS-001/002 e contrato AV-003; direção do treinador preservada | São demonstrações redigidas, sem gerador, dose aprovada ou plano real implementado |
| Alertar sobre incoerência técnica | Seis famílias R-OP, critérios e 89 cenários documentados | Verificador de sessão não implementado; ausência de alerta não é aprovação |
| Treinador auditar, ajustar e aprovar | Piloto separa rascunho, aprovação, liberação e correção do objetivo | Aprovação do piloto é de resumo do objetivo; não cobre aprovação de prescrição |
| Acompanhar resposta e rever plano | MET e contratos distinguem previsto/executado e revisão de sessão/ciclo | App não registra séries realizadas, resposta posterior ou progressão do treino |
| Dashboard de todos os alunos | Interface contém lista de carteira e escolha de pessoa | Não apresenta avaliação, plano, evolução e pendências de treino integrados |
| Apoiar Treinamento Combinado existente | Logística e ponte manual dos dados foram estudadas | Sem adaptador, reconciliação automática ou escrita aprovada nas planilhas |

Conclusão de maturidade: há coerência conceitual, rastreabilidade documental parcial e um piloto técnico. Não há evidência de prescrição automatizada, benefício prático mensurado ou prontidão para substituir o trabalho operacional.

## 4. O que está bem direcionado

1. A cascata começa pela pessoa e pela avaliação; não gera dose apenas a partir do rótulo do objetivo.
2. Achado, hipótese, prioridade e decisão são distintos; a presença de uma assimetria não obriga intervenção unilateral ou impede trabalhar o objetivo.
3. Falta/erro de dado atinge o uso dependente; uma fórmula problemática não invalida automaticamente medições independentes.
4. A base contempla força e suas manifestações, cardiorrespiratório, flexibilidade, equilíbrio e aspectos posturais pertinentes. Hipertrofia não foi confundida com uma capacidade física.
5. Tempo, volume e esforço possuem unidades e hipóteses declaradas. Medido, proposto, aprovado e realizado permanecem separados.
6. O Treinamento Combinado e o backup antes da renovação manual foram preservados como realidade operacional; não há necessidade de reconstruir toda a rotina do professor antes de testar um recorte.
7. Exemplos sintéticos e registros de fontes reduzem a dependência da conversa. Nenhum exemplo deve virar regra universal.

## 5. Achados e prioridades

As prioridades abaixo são de evolução do projeto, não gravidade clínica nem estados de qualidade VAL.

| ID / prioridade | Achado e evidência | Consequência | Próxima ação verificável |
|---|---|---|---|
| A6-01 / alta | CAS-002 v0.1 conserva duas séries e organização inicial; a orientação posterior do treinador está em REF-BASE, sem nova proposta auditada | Ler apenas o caso pode perder a direção mais recente; não há aprovação de duas ou três séries | Revisar o caso com alternativas justificadas, sem apagar v0.1 ou presumir aprovação |
| A6-02 / alta | O caso reúne objetivos, mas não acorda explicitamente principal/secundários; motivo específico do retorno e consistência do treino anterior não estão detalhados | Dizer contexto completo excede o que está definido para essas decisões | Explicitar conhecido, hipótese e pendente; completar apenas na nova ficção identificada, ou perguntar se for aluno real |
| A6-03 / alta para parametrizar | Fontes registradas não constituem ficha de adoção completa por decisão; aulas continuam parcialmente preliminares; Powers identificado, capítulos ainda não revisados | Uma dose pode parecer fundamentada por bibliografia sem apoio específico suficiente | Conferir trechos relevantes e artigos aplicáveis para as poucas decisões selecionadas, incluindo divergências e limites |
| A6-04 / alta para gerar | AV-003 define contratos, mas não há catálogo real de variantes/cargas e regras preenchidas/aprovadas | Gerador não consegue selecionar meios e dose com rastreabilidade suficiente | Mapear um pequeno conjunto de variantes do ambiente padrão, só o necessário para o recorte; cargas exigem contexto próprio |
| A6-05 / alta para implementação | Seis tabelas do piloto tratam de contas, alunos, relatos, resumos, correções e eventos; nenhuma representa avaliação, exercícios, sessões, dose ou regras | Persistir um MD não disponibiliza seu conhecimento ao aplicativo nem cria motor | Definir primeiro entradas/saídas estruturadas de um único percurso; banco ampliado somente após esse contrato |
| A6-06 / moderada | Os testes unitários do fluxo exercitam funções auxiliares; a interface chama RPCs. Não foi localizada importação de domain/flow pela interface | Testes unitários verdes não comprovam comportamento atual do banco/interface completos | Preservar testes integrados do piloto e executá-los no momento de mudanças pertinentes; criar futuros testes do núcleo sobre o código efetivamente usado |
| A6-07 / moderada | Índice Drive v0.10 não inclui REF-BASE; browser está numa revisão CAS-001 v0.2, enquanto há v0.3 e CAS-002; guias acumulam próximos passos históricos | Confusão de retomada e sensação de recomeçar o mesmo estudo | Atualizar navegação vigente; preservar versões como histórico e usar um ponto de retomada claro |
| A6-08 / alta antes de integração | MET-002/003 registram endereços/fórmulas amostrados, divergência de versão da avaliação, bases percentuais distintas e campos reaproveitados | Importar por coordenadas ou escolher a última avaliação geral pode misturar origens | Validar uma versão e um caminho de campos em leitura, antes de qualquer adaptador de escrita |
| A6-09 / moderada de produto | Muitos avanços são documentais; ainda não há tempo economizado, retrabalho ou utilidade do planejamento medidos | Volume documental pode ser confundido com evolução funcional | Medir um pequeno fluxo de ponta a ponta depois de fechar o caso e implementar seu recorte |

Os achados A04–A08/A10 do AUD-005 avançaram em documentação e exemplos, mas não estão encerrados operacionalmente. Não é correto reiniciar as antigas correções de zeros/estados como se nada tivesse sido feito; também não é correto tratar uma correção textual como teste do motor passado.

## 6. Consequência prática da conversa sobre volume

Experiência atual, experiência passada, consistência e interrupção são informações diferentes. A direção do treinador é analisar mecânica e condição atual nas primeiras sessões e oferecer dose pertinente, sem readaptação automaticamente pouco desafiadora. A semana seguinte é oportunidade de revisão, não gatilho obrigatório.

Comparação aritmética para auditoria, não nova prescrição: mantendo os seis exercícios e duas sessões do CAS-002, duas séries produzem 24 séries de exercícios/semana; três em todos produzem 36, aumento de 50%. Na convenção do caso, cada categoria principal vai de quatro para seis séries dirigidas. Participações secundárias e controle de tronco não se tornam equivalências automáticas.

Mantendo também a hipótese de até 40 s de execução por série e 120 s de intervalo, uma terceira série em cada um dos seis exercícios acrescenta 16 min por sessão. O orçamento 50–58 min iria a 66–74 min, acima de 60. É um cenário de cálculo, não previsão observada nem condenação de três séries. Alternar segmentos, emparelhar exercícios ou mudar seleção/dose exige novo cálculo, considerando transições, descanso entre exposições à mesma tarefa e esforço global. Não encurtar pausas silenciosamente para fazer caber.

Full body descreve distribuição; alternado por segmento descreve ordem; pares/bi-set descrevem organização das séries. Podem coexistir e não definem, sozinhos, a capacidade ou adaptação pretendida. Nenhuma dessas opções foi universalmente aprovada pela conversa.

## 7. Próximo passo recomendado: fechar uma decisão de ponta a ponta

**Entrega imediata recomendada: revisão do CAS-002 e de seu registro estruturado, com uma ficha curta de decisão apoiada nas três famílias de fontes. Não criar outro caso ou ampliar o aplicativo neste passo.**

1. Mostrar perfil antes do treino: prática atual/anterior e sua consistência, motivo do retorno, objetivos hierarquizados, queixas, rotina e avaliação pertinente. Explicitar lacunas e autoria fictícia.
2. Comparar alternativas reais para o caso: duas séries, três, ou dose diferente por tarefa; formato tradicional, alternado ou pares quando pertinente. Explicar objetivos e custo de cada opção. Não exigir que todas as alternativas sejam implementadas.
3. Relacionar cada decisão importante a capítulo/páginas consultadas dos livros, artigo com alcance revisado e trecho de vídeo quando verificável. Uma lacuna na aula fica identificada; não impede conferir matemática nem exige ler três livros inteiros antes de qualquer avanço.
4. Descrever o que será observado: mecânica, reps/carga/esforço reais, sintomas, duração e resposta posterior. Definir alternativas manter/ajustar/progredir sem fabricar execução.
5. Recalcular volume/tempo e pedir ao treinador decisões sobre uma proposta concreta, registrando justificativa e escopo. A direção já confirmada não precisa ser perguntada novamente.

**Critério de saída:** proposta compreensível, contexto suficiente para suas decisões, fontes e limites localizados, unidades claras, orçamento coerente, observações definidas e escolhas profissionais registradas. Não exige preencher toda a bateria ou aprovar doses universais.

### Etapas seguintes, com limites de escopo

| Etapa | Entrega | Critério de passagem |
|---|---|---|
| Primeiro verificador experimental | Conferir informação necessária, previsto versus realizado, contagem/tempo e progressão sem evidência no recorte escolhido | Testes sobre o código real, com controle positivo, negativo e ausência de dados; saídas explicáveis e revisão do treinador |
| Primeira proposta assistida | Ligar avaliação/contexto suficiente a prioridades e uma proposta simples de plano, usando alternativas aprovadas no escopo | Distinguir escolha calculável de julgamento profissional; registrar fontes, alternativas e limites; não publicar treino automaticamente |
| Fechar acompanhamento | Registrar execução e resposta, comparar com proposta e permitir revisão de sessão/ciclo | Alteração rastreável; dado ausente não vira resposta favorável; preservação do histórico |
| Ampliar carteira e planilhas | Mostrar pendências, avaliação, plano e resposta por aluno; adaptar ao Treinamento Combinado | Caminho de dados validado e ganho prático observado; escrita e renovação exigem contrato próprio |

O primeiro recorte não precisa resolver todos os 89 cenários ou todas as capacidades. Deve declarar exatamente o que cobre e o que permanece fora; o objetivo amplo de planejamento continua no roteiro.

## 8. Métricas para verificar utilidade, sem promessa de resultado

- Tempo do treinador para entender o caso e revisar uma proposta, comparado ao próprio processo manual.
- Quantidade de propostas ajustadas/rejeitadas e motivos; clareza da justificativa apresentada.
- Coerência e viabilidade de tempo entre proposta e execução quando houver uso aprovado.
- Alertas pertinentes, falsos alertas e informações faltantes percebidas pelo treinador.
- Capacidade de reconstruir decisão até avaliação, contexto, fonte, versão e responsável.

Nenhuma dessas métricas foi medida nesta auditoria. Mais arquivos, referências ou testes de cadastro não demonstram eficácia do treinamento nem produtividade.

## 9. O que esta entrega altera

Somente diagnóstico e navegação documental. Não corrige laudos, planilhas, doses do CAS-002, banco operacional, prescrições, catálogo de testes, scripts, gatilhos, backups ou cadastros. Não implanta motor, integração, automação ou novo dashboard. O próximo trabalho recomendado permanece pendente de execução.

Fontes de retomada: [guia](../README.md), [visão CENTRAL](../corrections/2026-10-20/CENTRAL-001_Visao_Produto_Arquitetura_Funcional_v0.5.md), [AV-003](../methodology/AV-003_Contrato_Avaliacao_Prescricao_v0.6.md), [REF-BASE](../methodology/REF-BASE-001_Fontes_Didaticas_Academicas_v0.1.md), [CAS-002](../validation/CAS-002_Readaptacao_Contextualizada_v0.1.md), [TEST-001](../validation/TEST-001_Casos_de_Validacao_v0.7.md), [MET-002](../analyses/MET-002_Logistica_Treinamento_Combinado_v0.1.md), [MET-003](../analyses/MET-003_Avaliacao_Dados_Base_Treino_Ciclico_v0.1.md) e [roteiro](../../ROADMAP.md).
