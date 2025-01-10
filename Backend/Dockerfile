FROM python:3.11.3-slim

# Set the working directory
WORKDIR /app

# Copy the requirements.txt file
COPY requirements.txt ./

# Copy the wheel file for a custume package
COPY ENSAJ_MultiOutliersDetection-1.0-py3-none-any.whl ./

# Install the copied Python package
RUN pip install ENSAJ_MultiOutliersDetection-1.0-py3-none-any.whl

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the default Flask port
EXPOSE 5000


# Run the Flask application
CMD ["flask", "run", "--host=0.0.0.0"]
