mongoimport /dataset/products.json --port 26000  --db "m103" --collection  "products" -u "m103-admin" -p "m103-pass" --authenticationDatabase admin
mongo --port 26000 -u "m103-admin" -p "m103-pass"
use m103
sh.enableSharding("m103")
db.products.createIndex( { "sku": 1 } )
sh.shardCollection( "m103.products", { "sku": 1 } )