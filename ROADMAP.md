# Evolução da Central de Alunos

Posição consolidada: 21/10/2026. Este é o roteiro vigente, sem agenda automática. O histórico das rodadas anteriores permanece nos documentos versionados e nos commits.

## Objetivo permanente

Avaliação e contexto → interpretação e prioridades → Plano de Ação → macro/meso/micro e sessões propostas → verificação → auditoria do treinador → execução e resposta → revisão. A Central deve apoiar planejamento e periodização e, progressivamente, integrar carteira e planilhas.

## Situação atual

- Piloto de cadastro, objetivo e revisão implementado; avaliação/prescrição ainda não implementadas no aplicativo.
- CAS-002 v0.6 registra distribuição de séries MANTIDA pelo treinador no caso, com contagem de voltas/séries esclarecida; demais parâmetros pendentes, sem execução.
- DEC-SES-001 registra coexistência de demandas funcionais e adaptações, sem transformar exemplos em regras.
- Fontes com profundidade de leitura explícita; verificador e gerador não implementados. Os 89 cenários não são 89 testes aprovados do motor.
- Logística de planilhas estudada parcialmente, com ponte manual e backup antes da renovação; nenhuma integração automática instalada.

## Diretriz vigente e próxima entrega

O treinador esclareceu que seriado, bi-set, tri-set, supersérie, circuito, HIIRT e pirâmides são exemplos de um repertório aberto. A distribuição mantida no CAS-002 é específica daquele caso; não define receitas universais ou método-base obrigatório. MET-004 registra a consulta somente leitura às referências da planilha antiga, com fontes e pendências.

Próxima entrega: fichas dos métodos e sua organização, variáveis, combinações, fontes e limites; demonstrar representação de formatos diferentes antes de especificar o verificador. Depois, verificar contagem, unidades, sequência, recuperação e tempo conforme a proposta individual, sem exigir bi-set ou valores do CAS-002. DIC-001/TEST-001 permanecem referências, sem implantação automática.

## Sequência após essa entrega

| Etapa | Resultado | Evidência de passagem |
|---|---|---|
| Mapear repertório e auditar semântica | Métodos/combinações descritos sem dose obrigatória | Fonte, significado e limites por item; caso não vira regra |
| Especificar e implementar o primeiro verificador | Informações necessárias, unidades, volume/tempo e relações conforme organizações descritas | Testes sobre o código efetivamente usado; positivos, negativos e ausências; cobertura declarada |
| Propor planejamento assistido | Dados pertinentes ligados a prioridades e proposta explicável | Revisão profissional; distinção entre gerado, aprovado e realizado |
| Fechar acompanhamento | Execução e resposta relacionadas à proposta | Revisão de sessão/ciclo rastreável |
| Ampliar carteira e apoio às planilhas | Pendências, avaliação, plano e evolução por pessoa | Caminho de dados por versão conferido e utilidade prática observada |

Não é necessário fechar todas as capacidades para experimentar um recorte. Não iniciar escrita/renovação em planilhas com base apenas neste roteiro.

[Revisão atual da logística — AUD-007](docs/audits/AUD-007_Revisao_Logistica_Gestor_Treinador_Programador_v0.1.md) · [Caso atual](docs/validation/CAS-002_Readaptacao_Contextualizada_v0.6.md) · [Guia](docs/README.md)

[Repertório e diretriz vigente — MET-004](docs/analyses/MET-004_Repertorio_Metodos_Organizacao_v0.1.md)
