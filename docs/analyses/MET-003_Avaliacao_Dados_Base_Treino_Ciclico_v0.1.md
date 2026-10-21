---
id: MET-003
versao: "0.1"
data: "2026-10-20"
estado: "MAPEAMENTO_DE_LEITURA_PARCIAL_POR_VERSAO"
origem: "OBSERVACAO_FONTE + INTERPRETACAO_CENTRAL"
implementacao: "Nenhuma integração ou escrita operacional"
---

# MET-003 — Da avaliação metabólica ao controle do treinamento cíclico

## 1. Escopo e fontes

Consolida a leitura já realizada dos exemplares de avaliação física v4.10.13 (REF-AV-02) e Treinamento Combinado v3.13.11 (REF-TC-01). Identidades nominais e arquivos ficam no mapa privado de leitura; as coordenadas abaixo identificam estruturas observadas, sem reproduzir resultados pessoais. Não presume equivalência de outras versões ou alunos. A rotina manual foi explicada pelo treinador; fórmulas foram inspecionadas, sem executar botões ou scripts.

**Fluxo observado:** Metabólica → Avaliação → BD/BD tratado → Laudo/Dados de Base → Exportar → cópia manual para Importar do treinamento → Dados de Base do treinamento → Controle Cíclico e orientações de intensidade. O planejamento escolhe método, frequência, duração, intervalos e progressão; o teste oferece referências individualizadas para essas escolhas.

O trajeto acima contém ramificações. Não é uma única tabela sincronizada: Laudo pode buscar ocasiões por modalidade e Dados de Base pode aproveitar um resultado anterior. Cada campo precisa de linhagem própria.

## 2. Mapa físico observado

| Fonte/localizador | Comportamento observado | Interpretação e verificação necessária |
|---|---|---|
| Metabólica!E7:H14 | Pares Fórmula/Ventilometria por ocasião | Coluna manual não prova medição direta nem origem Fitcheck sem vínculo ao relatório |
| Metabólica!A16:H38 | Estágios, velocidade, inclinação/potência, FC, PSE e recuperação | Linha prevista não significa estágio executado; registrar término e condições |
| Metabólica!E11/G11 | Última velocidade/carga com FC; ajuste de estágio quando marcado Interrompido | É regra da planilha, não confirmação de máximo fisiológico |
| Metabólica!E12:E14 e equivalentes G | Repouso, FC predita e máximo encontrado no intervalo do teste/recuperação | MAX inclui E17:E37; valor máximo numérico não comprova FCmáx fisiológica |
| Metabólica!E7/G7 | Estimativa de VO₂ por velocidade/inclinação | Constantes e conversão da inclinação ainda não homologadas |
| Metabólica!D43:H55 | Percentuais de 50 a 120; FC até 100 calculada por reserva | Base = repouso + p × (pico no teste − repouso); não equivale automaticamente ao cabeçalho %VO₂Máx |
| Metabólica!E58:H70 | FC de referência e velocidade interpolada; extrapolação nas linhas 69/70 | MATCH aproximado exige ordenação e abrangência; passo de 1 km/h é implícito no cálculo observado. Ramo bicicleta não homologado |
| Metabólica!E8/G8 e E65:H65 | Estimativa chamada limiar usa 85% da reserva e velocidade correspondente | Heurística identificada; não substituir limiar individual por esse valor |
| Metabólica!E73:H80 | Seleção campo a campo: usa entrada manual quando preenchida, senão fórmula | VO₂, FC e velocidade podem ter origens diferentes na mesma ocasião; preservar cada origem |
| Metabólica!D83:H95 | FC do ramo de reserva e velocidades finais selecionadas | Uma linha apresentada pode combinar referências distintas |
| Metabólica!C97:C99 | Seleção da última avaliação geral/esteira/bicicleta por número da avaliação | Não necessariamente maior data de coleta; modalidade pode selecionar ocasião distinta |
| Avaliação!linhas 139:148 | Recebe protocolo e resultados por ocasião; linha 147 usa 205,8 − 0,685 × idade | FC predita é estimativa; equação observada não é Tanaka. Não mudar fórmula nem atribuir validação |
| BD!linhas 136:145; BD tratado!C137:C145 | Espelhamento e seleção de referências atuais, com aproveitamento de anterior em alguns vazios/zeros/“-” | Atual na tela pode ser medido anteriormente; guardar avaliação e data originais |
| Laudo!C564/H564 e linhas 612:624 | Busca ocasião metabólica e apresenta zonas; fontes de velocidade por modalidade podem divergir | Conferir por campo, modalidade e data, não só pela data geral do laudo |
| Dados de Base!C5:J22 | Síntese individual; FC por reserva, FC/15 s, velocidade, pace, watts e esforço textual | Pace = 60/velocidade em km/h; FC/15 s = FC/min÷4. PSE textual é referência planejada, não PSE medida |
| Exportar!I2:K14 | I contém identificação/resumo; J velocidades; K watts | I2:I14 e J2:J14 não representam a mesma variável por linha |
| Importar!I2:K14 no treinamento | Valores literais; orientação Ctrl+Shift+V no cabeçalho | Evidência de ponte manual nesse caminho; não demonstrada sincronização automática |
| Dados de Base do treinamento | Recupera Importar e recalcula FC/pace; PSE de referência textual | Reconciliação precisa comparar valores e linhagem, não exigir igualdade textual irrestrita entre versões |
| Controle Cíclico!AA4:AL7 | Percentuais → consultas de PSE, FC, velocidade e pace em Dados de Base | Percentuais exigem nome da base; consulta não mede resposta real |
| Controle Cíclico!S4:Y7 | Séries, tempos/distâncias de trabalho e intervalo, totais | Fórmulas amostradas X=T+V e Y=U+W não multiplicam séries. Confirmar unidade e significado antes de chamar total da sessão |

As coordenadas registram a amostra efetivamente examinada. Não são autorização de conexão/escrita nem auditoria integral das abas.

## 3. Contrato de origem por campo

Para cada referência consumida pelo plano: campo_id, valor/unidade originais, ocasião/data de coleta, modalidade, fonte/revisão, localizador, tipo MEDIDO/ESTIMADO/CALCULADO/RELATADO, algoritmo e entradas quando conhecidos, data de transferência, origem manual ou fórmula, qualidade por finalidade, revisor e usos permitidos.

Registrar separadamente: data da avaliação geral; data do teste que produziu a variável; data da exportação; data da importação. Se uma referência foi reaproveitada, declarar isso. Ausência de prazo universal não autoriza presumir atualidade: mudança de contexto reabre a pertinência.

## 4. Regras candidatas de integração — PROPOSTA_CENTRAL

1. Percentual deve informar base e fonte: FCmáx, reserva, velocidade, limiar ou outra. Não converter silenciosamente entre elas.
2. Estimativa por equação e resultado do Fitcheck coexistem com procedência própria. Discordância pede revisão; preenchimento manual não vence cientificamente por prioridade de fórmula.
3. FC pico do teste, FC máxima predita e FC máxima fisiológica demonstrada não são intercambiáveis.
4. PSE medida por estágio, PSE esperada, PSE de sessão e RIR são campos distintos.
5. Interpolação fora da faixa observada, FC não ordenada ou referências de modalidades diferentes exigem revisão; não devolver velocidade aparentemente exata como fato.
6. Resultado de VO₂ pendente não descarta automaticamente FC observada, tempo ou velocidade. Cada uso exige sua própria verificação.
7. Importação sem vínculo à avaliação não é referência validada. Não substituir registros operacionais para “corrigir” a integração nesta etapa.
8. Tempo total deve explicitar séries, trabalho, intervalos, intervalos entre blocos e aquecimento/recuperação. Contagem de linhas não representa dose realizada.

## 5. Relação com planejamento e renovação

O macrociclo organiza objetivos, ênfases, volumes e checkpoints. O cíclico escolhe método e dose compatíveis com esse plano e com a referência individual pertinente. A Montagem apresenta o trabalho; a execução informa resposta. A Central poderá sugerir ajuste da sessão ou revisão do ciclo com justificativa, para auditoria do treinador.

DEC-OP-001 rege a rotina relatada: concluir o último dos cinco blocos, preservar backup antes da limpeza, renovar registros pertinentes e data inicial. Quantidade de blocos na interface, duração do micro e duração total do macro são parâmetros distintos. Código dos botões continua não examinado; isso não impede compreender a rotina manual.

## 6. Estado de aprovação

Mapeamento de leitura consolidado. Fórmulas, normas, interpolação em todos os modos, transcrição de todas as tabelas, atualização de cada aluno e restauração de backup não foram homologadas. Fontes didáticas permanecem preliminares onde não há trecho verificado. Não atribuir a esta leitura validação acadêmica das fórmulas.

Casos de verificação e primeira demonstração documental: CAS-001 e TEST-001, seção 15. Nenhuma fonte operacional foi alterada.
