import os
from dotenv import load_dotenv
from pymongo import MongoClient

# Load environment variables from the .env file
load_dotenv()

# MongoDB connection string from environment variable
mongo_uri = os.getenv("MONGO_URI")

# Initialize MongoDB client and connect to the database
client = MongoClient(mongo_uri)

# Select the database and collection
db = client['pfa']
users_collection = db['users']

# Define the users to be created
users = [
    {
        "username": "admin",
        "password": "scrypt:32768:8:1$YlFyU6No2PfnfS5M$b012e4e855996fb7c8aec1fbd003bb2e605e2a6ce406209e990496099b52298a6cb4b9476e5a45bab64d9c78cfd9496e427f0846a8a70276f2f759aea2261786",
        "firstName": "Admin",
        "lastName": "User",
        "phone": "1234567890",
        "email": "admin@example.com",
        "roles": ["admin"]
    },
    {
        "username": "ai_manager",
        "password": "scrypt:32768:8:1$cYpGEMMmBQhgvSL6$3a7cf7a344a6e1c6c7e64b4438d2552fb8bc9fcb922b74820ebb6c0f2a94d444d5cfd5e0e16b96723c38f9cc2e64db1b66c943ecb184d262d07953195c0a6d94",
        "firstName": "AI Manager",
        "lastName": "User",
        "phone": "0987654321",
        "email": "manager@example.com",
        "roles": ["responsableAi"]
    },
    {
        "username": "researcher",
        "password": "scrypt:32768:8:1$bpHP9G2TNgf0RauU$2042341162e59e4a8b93ca847903d9d3433f88ceb38ecb3d44767828a91562c8b1f3e1494a5d9b12ad39a52e95fa9b840152f37719399e8d66228fc3bf4bf634",
        "firstName": "Researcher",
        "lastName": "User",
        "phone": "1122334455",
        "email": "researcher@example.com",
        "roles": ["researcher"]
    }
]

# Check for existing users by username and insert only if the username does not exist
inserted_users = 0
for user in users:
    if not users_collection.find_one({"username": user["username"]}):
        users_collection.insert_one(user)
        inserted_users += 1
    else:
        print(f"User with username {user['username']} already exists.")

print(f"Inserted {inserted_users} new users into the database.")

# Close the MongoDB connection
client.close()