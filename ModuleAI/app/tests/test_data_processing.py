import unittest
import pandas as pd
from utils.data_utils import preprocess_data

class TestDataPreprocessing(unittest.TestCase):
    def test_preprocess_data(self):
        # Create a sample dataframe for testing
        data = pd.DataFrame({
            'age': [25, 30, 35],
            'policy_deductable': [1000, 500, 1000],
            # ... other columns
        })
        
        preprocessed_data = preprocess_data(data)
        self.assertIsInstance(preprocessed_data, pd.DataFrame)
        # Add more specific assertions based on your preprocessing logic

if __name__ == '__main__':
    unittest.main()
