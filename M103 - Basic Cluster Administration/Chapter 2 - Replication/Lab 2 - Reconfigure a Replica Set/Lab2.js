Lab: Reconfigure a Replica Set
Lab:
	A 4-node replica set has already been launched. You can find the configuration files used to start each server in the IDE.
	Reconfigure the replica set to make one node more suitable for analytics queries:
	Connect to the replica set m103-repl and retrieve the configuration of the node localhost:27004. This is the node you will reconfigure.
	Remember to authenticate as m103-admin with password m103-pass.
	Store this configuration in a variable and use this variable to update the following fields in the configuration document for localhost:27004:
	 -the number of votes should be 0
	 -the hidden field should be true
	 -the priority should be 0
	You should not need to update the configuration files or restart mongod.
	Reconfigure the replica set using your new configuration document.
	Once you've run the proper commands, click "Run Tests" to run a suite of tests that will check the configuration of m103-repl. The results of these tests will let you know which steps you've yet to complete.



Solution:

        Terminal 0:
	mongo --host "m103-repl/localhost:27001" -u "m103-admin" -password "m103-pass"
	cfg = rs.conf()
	cfg.members[3].votes = 0
	cfg.members[3].hidden = true
	cfg.members[3].priority = 0
	rs.reconfig(cfg)