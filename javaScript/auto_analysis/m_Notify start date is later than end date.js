

db.widgetTest.find({$where:"this.time.start > this.time.end"},{_id:0,"widgetID":1,"time.start":1,"time.end":1,"name":1,"frequency":1}).pretty();
