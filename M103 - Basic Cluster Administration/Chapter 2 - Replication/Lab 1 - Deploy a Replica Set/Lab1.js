Lab: Deploy a Replica Set
	Launch a replica set with three members:
	There are three configuration files in your IDE workspace, but they are incomplete.
	Update these configuration files so that all three mongod processes:
	 -authenticate internally using the keyfile /var/mongodb/pki/m103-keyfile
	 -belong to the replica set m103-repl
	Once your configuration files are complete, start a mongod process using one of them.
	When this node is running, use the mongo shell to connect and initiate your replica set with rs.initiate(). The shell prompt will read PRIMARY when the election is complete.
	Because the replica set uses a keyfile for internal authentication, clients must authenticate before performing any actions.
	While still connected to the primary node, create the admin user for your replica set
        Once m103-admin is created, exit the mongo shell and start the other two mongod processes with their respective configuration files.
        Reconnect to your primary node as m103-admin and add the other two nodes to your replica set using rs.add().
        Once your other two members have been successfully added, run rs.status() to check that the members array has three nodes - one labeled PRIMARY and two labeled SECONDARY.
        Click "Run Tests" to run a suite of tests that will check the configuration of your replica set. The results of these tests will let you know which steps you've yet to complete.




Solution:

	Terminal 0:
	mongod --port 27001 --config mongod_1.conf
	mongod --port 27002 --config mongod_2.conf
	mongod --port 27003 --config mongod_3.conf
	mongo --port 27001
	rs.initate()
	use admin
	db.createUser({
  			user: "m103-admin",
  			pwd: "m103-pass",
  			roles: [
    				{role: "root", db: "admin"}
  			       ]
		      })
	exit
        mongo --host "m103-repl/localhost:27001" -u "m103-admin" -password "m103-pass"
	rs.add("localhost:27002")
	rs.add("localhost:27003")