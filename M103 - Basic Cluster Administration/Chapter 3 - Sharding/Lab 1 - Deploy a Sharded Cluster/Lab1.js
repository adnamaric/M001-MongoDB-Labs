Lab: Deploy a Sharded Cluster
 
    Deploy a sharded cluster with 1 shard.
    Some components have already been configured for you:
    the Configuration Server Replica Set csrs is running on csrs/localhost:27004,localhost:27005,localhost:27006
    a replica set shard1 is running on shard1/localhost:27001,localhost:27002,localhost:27003
    the m103-admin user has been created on both replica sets with password m103-pass
    You will only need to edit the ``mongos`` configuration file.
    Start up a mongos process to provide an interface to your sharded cluster. You can find an unfinished configuration file for mongos in the IDE file browser.
    The configuration servers should already be running on the csrs replica set. Remember that mongos inherits database users from the CSRS.
    Add shard1 as the first shard in the cluster.
    Once you've run the proper commands, click "Run Tests" to run a suite of tests that will check the configuration of mongos. The results of these tests will let you know which steps you've yet to complete.


Solution:
  
    mongos -f mongos.conf
    mongo --port 26000  -u "m103-admin" -password "m103-pass"
    sh.addShard("shard1/localhost:27001")

    mongoimport /dataset/products.json --port 26000  --db "m103" --collection  "products" -u "m103-admin" -p "m103-pass" --authenticationDatabase admin
    mongo --port 26000 -u "m103-admin" -p "m103-pass"
    use m103
    sh.enableSharding("m103")
    db.products.createIndex( { "sku": 1 } )
    sh.shardCollection( "m103.products", { "sku": 1 } )