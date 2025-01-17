from app.upload import bp
from flask import request, jsonify, send_file, make_response
from app.db import MongoDB
import pandas as pd
import io


db = MongoDB.client['pfa']
files_collection = db['files']


@bp.route('/files', methods=['POST'])
def get_files():
    # Get the username from the request data
    data = request.get_json()
    username = data.get('username')
    
    # Retrieve data from MongoDB
    cursor = files_collection.find({'username': username}, {'_id' : 0, 'username' : 0 })
    files_data = list(cursor)  # Convert cursor to a list of dictionaries

    # Convert list of dictionaries to DataFrame
    df = pd.DataFrame(files_data)
    
    # Replace NaN values with 0
    df.fillna(0, inplace=True)
    
    # Convert DataFrame back to list of dictionaries
    files_data = df.to_dict(orient='records')

    # Return the data in JSON format
    return jsonify(files_data)



@bp.route('/delete', methods=['GET'])
def delete_files():
    files_collection.delete_many({})
    return jsonify({'message': 'Data deleted in MongoDB'})



@bp.route('/upload', methods=['POST'])
def upload_test():
    # Get the uploaded file
    uploaded_file = request.files['file']
    
    # Get the username from the request data
    username = request.form['username']
    
    # Read the uploaded CSV file into a pandas DataFrame
    df = pd.read_csv(uploaded_file)

    # Drop the first column (Unnamed column)
    # df = df.iloc[:, 1:]

    # Add the username column to the DataFrame
    df['username'] = username

    # Convert DataFrame to list of dictionaries
    data = df.to_dict(orient='records')

    # Insert data into MongoDB
    files_collection.insert_many(data)

    return jsonify({'message': 'Data stored in MongoDB'})


@bp.route('/columns', methods=['GET'])
def get_columns():
    # Retrieve a document from the collection
    document = files_collection.find_one({}, {'_id' : 0, 'username' : 0})

    if document:
        # Extract the keys (column names) from the document
        columns = list(document.keys())
        return jsonify({'columns': columns}), 200
    else:
        return jsonify({'error': 'No documents found in the collection'}), 404
    
@bp.route('/numeric/columns', methods=['GET'])
def get_numerical_columns():
    # Retrieve a document from the collection
    document = files_collection.find_one({}, {'_id': 0, 'username': 0})

    if document:
        # Filter numerical columns using list comprehension
        numerical_columns = [col for col, value in document.items() 
                              if isinstance(value, (int, float))]
        return jsonify({'columns': numerical_columns}), 200
    else:
        return jsonify({'error': 'No documents found in the collection'}), 404
    
@bp.route('/categorical/columns', methods=['GET'])
def get_categorical_columns():
    # Retrieve a document from the collection
    document = files_collection.find_one({}, {'_id': 0, 'username': 0})

    if document:
        # Filter categorical columns using list comprehension
        categorical_columns = [col for col, value in document.items() 
                              if not isinstance(value, (int, float))]
        return jsonify({'columns': categorical_columns}), 200
    else:
        return jsonify({'error': 'No documents found in the collection'}), 404
    

@bp.route('/download/csv', methods=['GET'])
def download_csv():
    try:
        # Retrieve data from MongoDB
        cursor = files_collection.find({}, {'_id': 0})
        df = pd.DataFrame(list(cursor))

        # Convert DataFrame to CSV
        csv_data = df.to_csv(index=False)

        # Create a bytes IO buffer
        buffer = io.BytesIO()
        buffer.write(csv_data.encode())
        buffer.seek(0)

        # Create a Flask response object
        response = make_response(send_file(buffer, mimetype='text/csv'))
        response.headers['Content-Disposition'] = 'attachment; filename=data.csv'
        return response
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
    
@bp.route("/getUniqueValues/<column>")
def get_unique_values(column):
    unique_values = files_collection.distinct(column)
    return jsonify({"uniqueValues": unique_values})