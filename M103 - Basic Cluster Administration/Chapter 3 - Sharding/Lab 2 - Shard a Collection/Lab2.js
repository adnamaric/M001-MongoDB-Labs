Lab: Shard a Collection
    Import and shard a collection of data on your cluster:
    Use mongoimport to import the data in /dataset/products.json:
    import this dataset onto m103.products
    use mongos as the target for mongoimport - you can find the configuration details for this process in mongos.conf
    authenticate to mongos as m103-admin (with password m103-pass)
    Enable sharding on the m103 database.
    Two shards have already been added to your cluster, shard1 and shard2. For more information, run sh.status() on mongos.
    Choose a shard key for the m103.products collection.
    Review the qualities of a good shard key in the docs and the following information about the products collection:
     -_id is a serial number for each product in this collection, rarely used in queries but important for internal MongoDB usage
     - sku (Stock Keeping Unit) is a randomly generated integer unique to each product - this is commonly used to refer to specific products when updating stock quantities
     -name is the name of the product as it appears in the store and on the website
     -type is the type of product, with the possible values "Bundle", "Movie", "Music" and "Software"
     -regularPrice is the regular price of the product, when there is no sale this price changes every season
     -salePrice is the price of a product during a sale - this price changes arbitrarily based on when sales occur
     -shippingWeight is the weight of the product in kilograms, ranging between 0.01 and 1.00 - this value is not known for every product in the collection
    Create an index on your shard key and shard the collection.
    Once you've run the proper commands, click "Run Tests" to run a suite of tests that will check the configuration of your sharded cluster. The results of these tests will let you know which steps you've yet to complete.
    If you chose the wrong shard key, clicking "Run Tests" will give you an error. However, if you already imported the dataset, you must drop the collection:

Solution:
    mongoimport /dataset/products.json --port 26000  --db "m103" --collection  "products" -u "m103-admin" -p "m103-pass" --authenticationDatabase admin
    mongo --port 26000 -u "m103-admin" -p "m103-pass"
    use m103
    sh.enableSharding("m103")
    db.products.createIndex( { "sku": 1 } )
    sh.shardCollection( "m103.products", { "sku": 1 } )

