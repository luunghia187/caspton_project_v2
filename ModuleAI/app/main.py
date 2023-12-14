from flask import Flask, request, render_template, jsonify
import yaml
from utils.model_utils import *

app = Flask(__name__, template_folder='views')

with open('../config/config.yaml', 'r') as config_file:
    config = yaml.safe_load(config_file)

model = load_model(config['model']['model_path'])

feature_names = ['age', 'policy_deductable', 'age_at_incident', 'incident_month', 'incident_year']

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    features = [float(request.json[name]) for name in feature_names]
    prediction = model.predict([features])
    response = {'prediction': prediction[0]}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=config['app']['debug'], port=config['app']['port'])