import unittest
import numpy as np
from utils.model_utils import train_model, evaluate_model

class TestModel(unittest.TestCase):
    def test_train_model(self):
        # Create sample features and labels for testing
        X_train = np.array([[25, 1000], [30, 500], [35, 1000]])
        y_train = np.array([0, 1, 0])
        
        model = train_model(X_train, y_train)
        self.assertIsNotNone(model)
        # Add more specific assertions based on your model training logic

    def test_evaluate_model(self):
        # Create sample model and test data for testing
        model = None  # Replace with your model object
        X_test = np.array([[25, 1000], [30, 500], [35, 1000]])
        y_test = np.array([0, 1, 0])
        
        accuracy = evaluate_model(model, X_test, y_test)
        self.assertIsInstance(accuracy, float)
        # Add more specific assertions based on your evaluation logic

if __name__ == '__main__':
    unittest.main()
