import joblib
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

def load_model(model_path):
    return joblib.load(model_path)

def train_model(X_train, y_train):
    model = LogisticRegression()
    model.fit(X_train, y_train)
    return model

def evaluate_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    return accuracy
