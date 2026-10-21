# Central de Alunos

Base metodológica e protótipo de uma ferramenta para apoiar o treinador no acompanhamento individual dos alunos.

**Avaliação física + objetivo e contexto → interpretação e prioridades → Plano de Ação → macro, meso e microciclos → sessões propostas → verificação técnica → auditoria do treinador → execução → acompanhamento e reavaliação.**

O desenvolvimento parte da prática relatada pelo treinador na ACESSO, de referências didáticas e de complementação acadêmica. Este repositório é do projeto pessoal do treinador; não declara homologação institucional da academia nem aprovação dos professores citados.

## Comece por aqui

- **Para conhecer o projeto:** [visão do produto](docs/corrections/2026-10-20/CENTRAL-001_Visao_Produto_Arquitetura_Funcional_v0.5.md).
- **Para entender a base e suas fontes:** [guia dos documentos](docs/README.md).
- **Para acompanhar um exemplo completo:** [CAS-001 v0.2 — pessoa inteiramente fictícia](docs/validation/CAS-001_Cascata_Sintetica_Integrada_v0.2.md).
- **Para revisar como treinador e programador:** [revisão do caso e decisões pendentes](docs/reviews/REV-CAS-001_Revisao_Treinador_Programador_v0.1.md).
- **Para acompanhar os próximos passos:** [roteiro de evolução](ROADMAP.md).
- **Para executar o piloto no Windows:** [instruções locais](LEIA-ME.md).

## O que existe hoje

| Parte | Situação |
|---|---|
| Cadastro, objetivo relatado, confirmação pelo treinador, aprovação e liberação separadas, correção e histórico | Implementados no piloto local com contas fictícias |
| Regras de proveniência, qualidade e dependências dos dados | Documentadas; implantação e aprovação por escopo ainda pendentes |
| Demonstração avaliação → planejamento → revisão | Elaborada em Markdown com dados sintéticos; não foi gerada por um algoritmo |
| Catálogo de validação | 89 cenários especificados; execução parcial do recorte inicial, descrita no TEST-001 |
| Dashboard completo, leitura de avaliações e montagem automática da periodização | Ainda não implementados |
| Integração com as planilhas dos alunos e sincronização com Drive | Ainda não implementadas |

O projeto considera força muscular e suas manifestações, capacidade cardiorrespiratória, flexibilidade, equilíbrio e aspectos posturais/de movimento conforme a pergunta de avaliação e a necessidade individual. Hipertrofia é uma adaptação pretendida; exercícios, métodos e equipamentos precisam de identificação própria.

As prioridades relatadas pelo treinador — dor, assimetrias, objetivo e demais necessidades — devem ser interpretadas no contexto, com critérios de prontidão e pertinência. Um número isolado não escolhe a prescrição, comprova causa de dor ou autoriza progressão.

## O que as regras pretendem conferir

1. Cobertura suficiente antes de emitir um alerta; ausência de dado não vira zero.
2. Distinção entre capacidade física, adaptação, tarefa, método e unidade de volume.
3. Viabilidade do tempo total, incluindo lados, intervalos e transições.
4. Progressão apoiada no que foi observado, sem avanço automático pelo calendário.
5. Descrição dos componentes motores e cognitivos antes de classificar dupla tarefa.
6. Flexibilidade vinculada a uma pergunta pertinente, com método, dose e acompanhamento.

Essas famílias são propostas da Central. A falta de uma informação bloqueia o uso que depende dela, preservando dados e decisões realmente independentes. A ausência de alerta não significa aprovação profissional.

## Evidência e limites

- **Nova verificação em 21/10/2026:** 11 testes unitários passaram; TypeScript e build do Vite concluídos.
- **Evidência histórica do piloto:** 39 assertivas de banco e três testes integrados registrados em [validação local](docs/validation/2026-10-19-primeiro-fluxo.md). Não foram repetidos nesta publicação.
- **Conferência documental de 20/10/2026:** 21 contas sintéticas reproduzidas e estrutura de 20 novos cenários conferida. Isso não executa os cenários contra um motor de prescrição.
- **Metodologia dos vídeos:** fichas preliminares e sínteses não equivalem a revisão direta de cada aula. Falas, parâmetros e minutagens não verificados continuam pendentes.
- **Literatura acadêmica:** cada documento registra a fonte e o alcance consultado; não se presume validação universal de protocolos, aparelhos ou doses.

## Organização

| Caminho | Conteúdo |
|---|---|
| `src/` | Interface e lógica do primeiro fluxo |
| `supabase/` | Configuração local, migrações e testes do banco |
| `tests/` | Testes unitários e de navegador |
| `scripts/` | Preparação e verificação do ambiente sintético local |
| `docs/` | Metodologia, decisões, análises, casos, revisões e evidências |
| `central-de-aluno/index.html` | Arquivo inicial do repositório, preservado como histórico |

## GitHub e Drive

O GitHub reúne o código e uma cópia versionada da documentação para acompanhar e revisar o desenvolvimento. O Drive mantém os materiais de consulta e os arquivos operacionais. Não existe sincronização automática; uma edição em um dos locais precisa de reconciliação explícita, com versão e conferência.

A publicação inicial adiciona um retrato do projeto ao histórico já existente no GitHub. Os commits anteriores do desenvolvimento local continuam no repositório local; seus hashes citados em documentos históricos podem não estar disponíveis no GitHub.

O conteúdo público usa exemplos fictícios e documentação revisada. Laudos originais, cadastros individuais, planilhas reais, arquivos de ambiente e credenciais não fazem parte desta publicação. As contas e a senha descritas nas instruções são exclusivas dos testes locais.

## Próxima entrega

Auditar o CAS-001 com o treinador, registrar decisões e suas justificativas e escolher um primeiro conjunto de regras aprovadas para especificar um verificador experimental. A proposta de treino continua dependendo de aprovação antes de execução.
