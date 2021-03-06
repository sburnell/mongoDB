db.widgetArchive.update(
	{
		"time.month":{$exists:true}
	},
	{
		$unset:{
			"time.month":1
		}
	},
	{
		multi:true
	}
);

db.widgetArchive.update(
	{
		"time.month":{$exists:false}
	},
	{
		$set:{
			"time.month":0
		}
	},
	{
		multi:true
	}
);

function convertTimeToMonthName(t){
	var mthNum = (t.getUTCMonth() + 1);// Needed because range is from 0 to 11 instead of 1 to 12.

	switch(mthNum){
		case 1:
			return "Jan";
		case 2:
			return "Feb";
		case 3:
			return "Mar";
		case 4:
			return "Apr";
		case 5:
			return "May";
		case 6:
			return "Jun";
		case 7:
			return "Jul";
		case 8:
			return "Aug";
		case 9:
			return "Sep";
		case 10:
			return "Oct";
		case 11:
			return "Nov";
		case 12:
			return "Dec";
	}
}
db.widgetArchive.find( { "time.start" : { $type : 9 }}).forEach( function (x) {   
  x.time.month = convertTimeToMonthName(x.time.start); 
  db.widgetArchive.save(x);
});
