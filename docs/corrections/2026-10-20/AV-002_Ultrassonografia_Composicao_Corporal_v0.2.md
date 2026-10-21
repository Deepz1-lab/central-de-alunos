# AV-002 — Ultrassonografia de composição corporal na avaliação ACESSO

> **Revisão de coerência — 20/10/2026.** Referência individual substituída por alias controlado. Conteúdo metodológico preservado; não houve nova leitura de medidas ou modificação na planilha. **Versão documental atual: 0.2; data de revisão: 20/10/2026.**



**Data:** 20/10/2026  
**Tipo:** complemento técnico do AV-001, preservando sua versão anterior.  
**Estado:** conferência da estrutura e classificação; **nenhuma alteração** feita às fichas individuais ou automações.  
**Origem (1):** informação do professor responsável: ultrassonografia destinada a avaliar espessuras de gordura e músculo; imagens de ultrassom ficam na aba `Imagens`, medidas na aba `Avaliação`.  
**Origem (2):** fonte operacional controlada FONTE-AV-US-001, exemplar versão 4.10.13; leitura anterior da estrutura e dos rótulos de campos. Identidade e localização nominal permanecem somente na origem operacional sob responsabilidade do treinador.
**Privacidade:** não foram copiados valores, imagens ou identificadores nominais da pessoa. Este MD não contém link individual; a referência controlada não cria novo cadastro nem altera acesso à fonte.


## 1. Finalidade confirmada


A ultrassonografia integra a **avaliação de composição corporal** da ACESSO e é usada para obter medidas regionais de **espessura muscular e espessura de gordura subcutânea**, em milímetros. Não classificar este procedimento como ultrassonografia diagnóstica de lesão na arquitetura da Central, a menos que exista outro protocolo específico documentado.


### Estrutura observada na planilha examinada


| Localização | Rótulo observado na ficha |
|---|---|
| `Avaliação!A43` | `Ultrassom` — início da seção |
| `Avaliação!A48` | `Músculos Anteriores do Braço(mm)` |
| `Avaliação!A52` | `Músculos Posteriores do Braço(mm)` |
| `Avaliação!A56` | `Músculo Reto Femoral (mm)` |
| `Avaliação!A60` | `Músculo Vasto Intermédio (mm)` |
| `Avaliação!A61` | `Músculos Anteriores da Coxa(mm)` |
| `Avaliação!A66` | `Gordura Abdominal Subcutânea Superficial(mm)` |
| `Avaliação!A70` | `Gordura Abdominal Subcutânea Profunda(mm)` |
| `Avaliação!A71` | `Gordura Abdominal Supra muscular total(mm)` |
| `Avaliação!A92:A100` | `G. C. Ant. da Coxa(mm) - p1` até `p9`; abreviação original mantida, definição exata depende da documentação do protocolo |
| `Avaliação!A101` | `Compartimento Anterior da Coxa(mm)` |
| `Imagens!A4` | `Espessura de tecido - Ultrassom` |
| `Imagens!A5` | `Abdominal` |
| `Imagens!A6` | `Anterior da Coxa` |
| `Imagens!A8` | `Anterior do Braço (Bíceps)` |


**Limitação da verificação:** a API de leitura de valores recuperou os rótulos das regiões e medidas, mas não permite, por si só, validar as imagens inseridas como objetos na folha, seu enquadramento, qualidade técnica ou correspondência com cada resultado. A existência/uso de imagens é informada pelo responsável e corroborada pela seção intitulada `Espessura de tecido - Ultrassom`; não foi feita auditoria visual completa.


## 2. Correção conceitual em relação ao AV-001


O AV-001 registrou o propósito da ultrassonografia como `A definir conforme finalidade e protocolo utilizados`. Com base nas informações do responsável e na ficha inspecionada, a definição correta para a Central é:


**Ultrassonografia de composição corporal — espessuras musculares e adiposas regionais, em milímetros, com imagens de referência e identificação do local de medida.**


Tratar como modalidade de avaliação distinta de:
- **Bioimpedância:** estimativas globais/segmentares segundo equipamento e modelo;
- **Adipometria:** espessuras de dobras cutâneas e estimativas conforme equação;
- **Ultrassonografia:** espessuras anatômicas regionais, conforme posicionamento, técnica, equipamento e ponto de medição.


Não somar nem intercambiar valores das técnicas como se representassem a mesma variável. **Espessura muscular local não equivale automaticamente a massa muscular total; espessura de tecido adiposo local não equivale a percentual de gordura corporal.**


## 3. Proposta de registro estruturado da ultrassonografia (não implantada)


Para cada observação, preservar:
- `aluno_id`, `avaliacao_id`, `data_avaliacao` e `origem_arquivo`;
- `metodo=ultrassonografia`;
- `regiao_anatomica`, `lado` (quando aplicável), `estrutura` (músculo / gordura), `camada` (quando pertinente) e `ponto_anatomico`;
- `espessura_mm`, `unidade_original`, `protocolo`, `equipamento` (se disponível), `avaliador` e `observacoes_medicao`;
- `referencia_imagem`: endereço do arquivo e célula, ou ID/link próprio, sem duplicar os dados clínicos no acervo técnico;
- `comparabilidade`: registrar se a próxima medida foi obtida com método, local e condições semelhantes.


O sistema futuro poderá exibir a evolução das espessuras de regiões comparáveis e sinalizar mudanças para análise do profissional, **sem diagnosticar hipertrofia ou perda de gordura a partir de diferenças pontuais não verificadas**.


## 4. Relação com os demais procedimentos


Manter **três fontes separadas** na dimensão `Composição corporal`:
1. Bioimpedância;
2. Adipometria;
3. Ultrassonografia regional.


Cada fonte apresenta métodos, unidades, limitações e valor longitudinal próprios. A escolha do indicador central dependerá da pergunta do acompanhamento, qualidade da medição e objetivos do aluno.


## 5. Pendências técnicas para uma etapa posterior


- Confirmar o protocolo de pontos anatômicos e posicionamento do transdutor usado pela equipe ACESSO;
- Confirmar a terminologia das medidas abreviadas `G. C. Ant. da Coxa - p1...p9`;
- Conferir versão e calibração/controle do equipamento, se registrados;
- Definir critérios de mudança interpretável, respeitando erro técnico de medição e condições comparáveis;
- Localizar estudos no PubMed especificamente pertinentes ao equipamento, protocolo e finalidade da ACESSO; a presente nota **não afirma ter concluído essa validação de evidência**.


## 6. Estado da implantação


**Este documento é apenas uma nota técnica no acervo científico/arquitetural.** Não foram alteradas planilhas, fórmulas, procedimentos de avaliação, dados pessoais ou acionadores. A automação antiga da Central permanece pausada.


**Próximo passo lógico:** mapear as demais dimensões da aba `Avaliação` e a conexão com `Plano de Ação` e `Exportar`, para criar o primeiro esquema de dados integrado de avaliação e planejamento, mantendo os originais intactos.

## Revisão de coerência — 20/10/2026

Revisão documental v0.2 em resposta ao AUD-005. IDs, organização e compartilhamentos do Drive preservados. Referências a versões anteriores no corpo e nos registros de elaboração são históricas; consultar o LEIA-ME para a posição atual. Nenhuma aprovação científica, profissional ou execução de teste é produzida por esta edição.
