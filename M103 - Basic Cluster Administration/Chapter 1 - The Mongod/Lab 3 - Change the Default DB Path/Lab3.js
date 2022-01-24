Lab: Change the Default DB Path
	Use a configuration file to store database files in a new directory:
 	  -Create a new folder /var/mongodb/db/
	Edit your config file to use this new directory as the dbpath.
	Here are the updated requirements for your mongod instance:
          -runs on port 27000
 	  -stores its data files in /var/mongodb/db/
 	  -listens to connections from localhost
 	  -uses authentication
	 Launch mongod with the new configuration

Solution:

	Terminal 0:
	mkdir -p /var/mongodb/db
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