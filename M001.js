MongoDB University Course- Labs & Solutions [ M001: MongoDB Basics ]


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Chapter 1: Data Explorer
 In the sample_training.trips collection a person with birth year 1961 took a trip that started at "Howard St & Centre St". What was the end station name for that trip?

 Mongo shell:
        use sample_training
        db.trips.find({"start station name" : "Howard St & Centre St", "birth year" : 1961}, {"end station name":1,"_id":0}).pretty()

 Answer: South End Ave & Liberty St
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Chapter 4: Advanced CRUD Operations

Lab 1 
 How many documents in the sample_training.zips collection have fewer than 1000 people listed in the pop field?

 Mongo shell:
	use sample_training
	db.zips.find({ "pop": { "$lt" : 1000} }).count()

 Answer: 8065

Lab 2 
 What is the difference between the number of people born in 1998 and the number of people born after 1998 in the sample_training.trips collection?

 Mongo shell:
        use sample_training
        db.trips.find({ "birth year": { "$gt": 1998 } }).count() - db.trips.find({ "birth year": 1998 }).count() 
        
 Answer: 6

Lab 3 
 How many businesses in the sample_training.inspections dataset have the inspection result "Out of Business" and belong to the "Home Improvement Contractor - 100" sector?

 Mongo shell:
       use sample_training
       db.inspections.find({ "result": "Out of Business","sector": "Home Improvement Contractor - 100" }).count()
 
 Answer: 4

Lab 4 
 How many zips in the sample_training.zips dataset are neither over-populated nor under-populated?
 In this case, we consider population of more than 1,000,000 to be over- populated and less than 5,000 to be under-populated.

 Mongo shell:
        use sample_training
        db.zips.find( { $and: [ { pop: { $gte: 5000 } }, { pop: { $lte: 1000000 } } ] } ).count()

 Answer: 11193

Lab 5
 How many companies in the sample_training.companies dataset were either founded in 2004 
 [and] either have the social category_code [or] web category_code, [or] were founded in the month of October
 [and] also either have the social category_code [or] web category_code?
 Copy/paste the exact numeric value (without double quotes) of the result that you get into the response field.

 Mongo shell:
       use sample_training
       db.companies.find({ "$or": [ { founded_year: 2004, "$or": [{category_code:"social"},{category_code:"web" }]} ,
                                    { founded_month: 10 , "$or": [{category_code:"social"},{category_code:"web" }]} ]}).count()

 Answer: 149

Lab 6 ($expr)
 How many companies in the sample_training.companies collection have the same permalink as their twitter_username?
 
 Mongo shell:
 	use sample_training
        db.companies.find({ "$expr":  { "$eq": [ "$twitter_username", "$permalink"] }}).count()
 
 Answer: 1299

Lab 7 
 What is the name of the listing in the sample_airbnb.listingsAndReviews dataset that accommodates more than 6 people and has exactly 50 reviews?
 
 Mongo shell:
        use sample_airbnb
        db.listingsAndReviews.find({ "reviews": { "$size":50 },"accommodates": { "$gt":6 }},{"name":1,"_id":0}).pretty()
 
 Answer: Sunset Beach Lodge Retreat

Lab 8
 Using the sample_airbnb.listingsAndReviews collection find out how many documents have the "property_type" "House", and include "Changing table" as one of the "amenities"?

 Mongo shell:
        use sample:airbnb
        db.listingsAndReviews.find({ "amenities": { "$all": ["Changing table"]},"property_type":"House"}).count()
 Answer: 11

Lab 9
 How many companies in the sample_training.companies collection have offices in the city of Seattle?

 Mongo shell:
       use sample_training
       db.companies.find( { "offices": { "$elemMatch": { "city": "Seattle" } } }).count()
 Answer: 117

Lab 10
 How many trips in the sample_training.trips collection started at stations that are to the west of the -74 longitude coordinate? 
 Longitude decreases in value as you move west. We always list the longitude first and then latitude in the coordinate pairs; i.e. 
 <field_name>: [ <longitude>, <latitude> ]

 Mongo shell:
	use sample_training
        db.trips.find({ "start station location.coordinates.0": { "$lt": -74 }}).count()
 Answer: 1928

Lab 11
 How many inspections from the sample_training.inspections collection were conducted in the city of NEW YORK?

 Mongo shell:
 	use sample_training
        db.inspections.find({ "address.city": "NEW YORK" }).count()
 Answer: 18279

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Chapter 5

Quiz 2: sort() & limit()
 In what year was the youngest bike rider from the sample_training.trips collection born?

 Mongo shell:
          use sample_training
          db.trips.find({ "birth year": { "$ne":"" } }, { "birth year": 1 }).sort({ "birth year": -1 }).limit(1)
 Answer:1999
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


 

 