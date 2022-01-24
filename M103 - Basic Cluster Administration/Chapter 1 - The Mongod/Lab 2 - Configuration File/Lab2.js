Lab: Configuration File
	Launch a mongod instance in the IDE terminal with a configuration file:
	Write the configuration file. There should be an empty configuration file in your IDE File Editor, where you can specify options in YAML. 
	As a reminder, here are the requirements of your mongod instance:
	  -run on port 27000
	  -authentication is enabled
	Once mongod is running, open a new Terminal window and use the following command to create an admin user. You will need to create this user in order to validate your work.

Solution:
 
	Terminal 0: 
	mongod --config mongod.conf


        Terminal 1:
	mongo admin --host localhost:27000 --eval '
  	db.createUser({
    	               user: "m103-admin",
    		       pwd: "m103-pass",
    		       roles: [
     			 {role: "root", db: "admin"}
   			 ]
  			       })
		                 '
       