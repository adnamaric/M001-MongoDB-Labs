Lab 6 - Importing a Dataset

Lab:
	Import a dataset into MongoDB using mongoimport:
	Run a mongoimport command on a MongoDB instance running in the background.
	The requirements for this command are:
	 -connect to a mongod process running on port 27000
	 -import the data from /dataset/products.json
	 -import the data to applicationData.products
	 -use m103-application-user to authenticate to the database - this user has already been created for you on the admin database with password m103-application-pass
	Click "Run Tests" to run a test that will check applicationData.products for the new data. The results of these tests will let you know which steps you've yet to complete.

Solution:

	Terminal 0:
	mongoimport --port 27000 /dataset/products.json --db applicationData --collection products -u m103-application-user -p m103-application-pass --authenticationDatabase admin