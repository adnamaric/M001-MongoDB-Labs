Lab 4 - Logging to a Different Facility
	Create a new user for an application that has the readWrite role:
        Connect to a mongod instance that is already running in the background on port 27000. 
        You can find the options used to launch mongod in the configuration file in your file editor.
        The m103-admin user has also already been created for you with password m103-pass.
        Use the db.createUser() command to create a user for a CRUD application.
        The requirements for this new user are:
         -Role: readWrite on applicationData database
         -Authentication source: admin
         -Username: m103-application-user
         -Password: m103-application-pass
        Click "Run Tests" to run a suite of tests that will check the configuration of m103-application-user. 
        The results of these tests will let you know which steps you've yet to complete.

Solution:
        mongod --config mongod.conf
        mongo --port 27000
        use admin
        mongo admin --host localhost:27000 --eval '
        db.createUser({
        user: "m103-admin",
        pwd: "m103-pass",
        roles: [
        {role: "root", db: "admin"}
        ]
        })
        '

	