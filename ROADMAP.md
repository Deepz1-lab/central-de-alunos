# Evolução da Central de Alunos

Posição consolidada: 22/10/2026. Este é o roteiro vigente, sem agenda automática. O histórico das rodadas anteriores permanece nos documentos versionados e nos commits.

## Objetivo permanente

Avaliação e contexto → interpretação e prioridades → Plano de Ação → macro/meso/micro e sessões propostas → verificação → auditoria do treinador → execução e resposta → revisão. A Central deve apoiar planejamento e periodização e, progressivamente, integrar carteira e planilhas.

## Situação atual

- Piloto de cadastro, objetivo e revisão implementado; avaliação/prescrição ainda não implementadas no aplicativo.
- CAS-002 v0.6 registra distribuição de séries MANTIDA pelo treinador no caso, com contagem de voltas/séries esclarecida; demais parâmetros pendentes, sem execução.
- DEC-SES-001 registra coexistência de demandas funcionais e adaptações, sem transformar exemplos em regras.
- Fontes com profundidade de leitura explícita; VER-001 especifica o verificador, ainda não implementado; gerador também não implementado. Os 89 cenários não são 89 testes aprovados do motor.
- Logística de planilhas estudada parcialmente, com ponte manual e backup antes da renovação; nenhuma integração automática instalada.

## Diretriz vigente e próxima entrega

O treinador esclareceu que seriado, bi-set, tri-set, supersérie, circuito, HIIRT e pirâmides são exemplos de um repertório aberto. A distribuição mantida no CAS-002 é específica daquele caso; não define receitas universais ou método-base obrigatório. MET-004 registra a consulta somente leitura às referências da planilha antiga, com fontes e pendências.

Entregue: MET-005 contém oito fichas preliminares e dez exemplos documentais de representação, com fontes, variantes, ausência e conflito. Organização, relação entre tarefas e variação da dose permanecem dimensões combináveis; sem normalização universal por nome.

Entregue em 22/10: VER-001 especifica entradas, relações, saídas, mensagens e 24 oráculos documentais. Diferencia resultado computacional, qualidade VAL, gravidade, aprovação e execução. Os casos ainda não foram executados contra motor.

Entregue em 22/10: revisão do desenho e plano técnico em sete tarefas. Define entrada/saída, isolamento de erros, fronteiras de contagem, limites de processamento e ligação de testes ao componente público, sem dose padrão. O piloto existente passou novamente em 11 testes unitários e build; isso não é teste do verificador futuro.

Próxima passagem: revisar o plano e escolher execução aqui na conversa ou com subagentes por tarefa. A implementação ainda não começou. Após essa escolha, executar e testar o plano em checkout isolado, preservando arquivos operacionais e sem integração com planilhas.

## Sequência após essa entrega

| Etapa | Resultado | Evidência de passagem |
|---|---|---|
| Fichas iniciais e exemplos disponíveis | MET-005, com repertório aberto e variantes pendentes quando necessário | Contas documentais conferidas; não são testes do motor ou doses aprovadas |
| Revisar o plano e escolher execução | Sete tarefas prontas, com contrato e testes | Escolha registrada; depois execução com resultados reais e cobertura declarada |
| Propor planejamento assistido | Dados pertinentes ligados a prioridades e proposta explicável | Revisão profissional; distinção entre gerado, aprovado e realizado |
| Fechar acompanhamento | Execução e resposta relacionadas à proposta | Revisão de sessão/ciclo rastreável |
| Ampliar carteira e apoio às planilhas | Pendências, avaliação, plano e evolução por pessoa | Caminho de dados por versão conferido e utilidade prática observada |

Não é necessário fechar todas as capacidades para experimentar um recorte. Não iniciar escrita/renovação em planilhas com base apenas neste roteiro.

[Revisão atual da logística — AUD-007](docs/audits/AUD-007_Revisao_Logistica_Gestor_Treinador_Programador_v0.1.md) · [Caso atual](docs/validation/CAS-002_Readaptacao_Contextualizada_v0.6.md) · [Guia](docs/README.md)

[Repertório e diretriz vigente — MET-004](docs/analyses/MET-004_Repertorio_Metodos_Organizacao_v0.1.md)

[Fichas e exemplos — MET-005](docs/methodology/MET-005_Fichas_Metodos_Organizacao_v0.1.md)

[Especificação do verificador — VER-001](docs/methodology/VER-001_Especificacao_Verificador_Organizacao_v0.1.md)

[Plano técnico do verificador](docs/superpowers/plans/2026-10-22-verificador-organizacao.md)
