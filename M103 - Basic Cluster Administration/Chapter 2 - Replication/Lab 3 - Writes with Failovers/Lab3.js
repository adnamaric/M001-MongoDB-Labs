Lab - Writes with Failovers
    Evaluate the effect of using a write concern with a replica set where one node has failed.
    Consider a 3-node replica set with only 2 healthy nodes, that receives the following insert() operation:
        use payroll
        db.employees.insert(
        { "name": "Aditya", "salary_USD": 50000 },
        { "writeConcern": { "w": 3, "wtimeout": 1000 } }
        )
    Which of the following is true about this write operation?

Answer:
    w: "majority" would also cause this write operation to return with an error. //incorrect 
    The write operation will always return with an error, even if wtimeout is not specified // incorrect
    The unhealthy node will receive the new document when it is brought back online. //correct
    If a writeConcernError occurs, the document is still written to the healthy nodes. // correct


