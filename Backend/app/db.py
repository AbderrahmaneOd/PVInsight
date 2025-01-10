from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Create a global MongoDB client instance
class MongoDB:
    client = None

    @classmethod
    def init_db(cls):
        if cls.client is None:
            mongo_uri = os.getenv("MONGO_URI")
            cls.client = MongoClient(mongo_uri)
        return cls.client