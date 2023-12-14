import pandas as pd

def load_processed_data(data_path):
    """
    Load the preprocessed data from a CSV file.
    
    Parameters:
        data_path (str): Path to the CSV file containing the preprocessed data.
        
    Returns:
        pd.DataFrame: Loaded preprocessed data.
    """
    return pd.read_csv(data_path)

def preprocess_data(data):
    """
    Perform any necessary data preprocessing.
    
    Parameters:
        data (pd.DataFrame): Raw data to be preprocessed.
        
    Returns:
        pd.DataFrame: Preprocessed data.
    """
    # Perform preprocessing steps here
    preprocessed_data = data.copy()
    # Example: Convert incident_date to datetime
    preprocessed_data['incident_date'] = pd.to_datetime(preprocessed_data['incident_date'])
    # ...
    return preprocessed_data

def extract_features(data, feature_names):
    """
    Extract specific features from the data.
    
    Parameters:
        data (pd.DataFrame): Data containing various features.
        feature_names (list): List of feature names to extract.
        
    Returns:
        pd.DataFrame: Data containing only the selected features.
    """
    return data[feature_names]

def normalize_numeric_features(data, numeric_features):
    """
    Normalize numeric features in the data to have a mean of 0 and a standard deviation of 1.
    
    Parameters:
        data (pd.DataFrame): Data containing numeric features to normalize.
        numeric_features (list): List of numeric feature names to normalize.
        
    Returns:
        pd.DataFrame: Data with normalized numeric features.
    """
    data_normalized = data.copy()
    data_normalized[numeric_features] = (data[numeric_features] - data[numeric_features].mean()) / data[numeric_features].std()
    return data_normalized
