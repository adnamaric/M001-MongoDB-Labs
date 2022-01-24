mongos -f mongos.conf
mongo --port 26004  -u "m103-admin" -password "m103-pass"
sh.addShard("shard1/localhost:27001")