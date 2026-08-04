# Importando as bibliotecas que usaremos em todo o código
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
# Dados dos alunos (Features): X = [Horas de Estudo, Faltas]
X = [
 [2, 1], [4, 0], [1, 3], [3, 1], [5, 0], [2, 2]
]
# Resultados (Target): y = 0 (Reprovado), 1 (Aprovado)
y = [0, 1, 0, 1, 1, 0]
# Separando dados: 67% para treino e 33% para teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)
# Criando o nosso modelo matemático
modelo = LogisticRegression()
# Executando o treinamento com os dados de estudo
modelo.fit(X_train, y_train)
# Gerando previsões com os dados que o modelo nunca viu
previsoes = modelo.predict(X_test)
# Comparando as previsões com a realidade (y_test) para gerar a acurácia
acuracia = accuracy_score(y_test, previsoes)
# Exibindo os resultados do teste no terminal
print("=== RESULTADOS DO TESTE ===")
print(f"Previsões do modelo: {previsoes}")
print(f"Resultados reais: {y_test}")
print(f"Acurácia do modelo: {acuracia * 100}%")