Lab: Documents in Chunks
Consider the following document:
    {
    "_id" : ObjectId("573f7197f29313caab89b3a4"),
    "sku" : 20005012,
    "name" : "Complete Hit Singles A's & B's - CD",
    "type" : "Music",
    "regularPrice" : 14.99,
    "salePrice" : 14.99,
    "shippingWeight" : "0.25"
     }
  
  Which of the following chunks would contain this document?
    {
        "_id" : "m103.products-sku_MinKey",
        "shard" : "shard1",
        "min" : {
        "sku" : 0
        },
        "max" : {
        "sku" : 5000000
        }
    }
    {
        "_id" : "m103.products-sku_5000000",
        "shard" : "shard1",
        "min" : {
        "sku" : 5000000
        },
        "max" : {
        "sku" : 10000000
        }
    }
    
    "_id" : "m103.products-sku_10000000",
    "shard" : "shard1",
    "min" : {
        "sku" : 10000000
    },
    "max" : {
        "sku" : 15000000
    }
    }
    {
        "_id" : "m103.products-sku_15000000",
        "shard" : "shard2",
        "min" : {
        "sku" : 15000000
        },
        "max" : {
        "sku" : 20000000
        }
    }
    {
        "_id" : "m103.products-sku_20000000",
        "shard" : "shard2",
        "min" : {
        "sku" : 20000000 // minimal is smaller than 20005012
        },
        "max" : {
        "sku" : 25000000 // maximal is bigger than 20005012
        }
    }
  
Answer: The only document that falls into chunk's range is: 
        {
        "_id" : "m103.products-sku_20000000",
        "shard" : "shard2",
        "min" : {
        "sku" : 20000000    
        },
        "max" : {
        "sku" : 25000000
        }
        }