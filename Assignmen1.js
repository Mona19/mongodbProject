// The file Mongo_1_Document.txt contains a few documents. Create a MongoDB database (and a corresponding collection) with these documents. You can choose your own preferred way to create the database with these document information (e.g., directly using JS commands, changing the file format and using Mongoimport, or any other ways…) 
//create connection to test db
mongo = new Mongo("localhost");
myDB = mongo.getDB("test");
//create collection
newDB.createCollection("newCollectionB");
print("After Collection Creation:");
collections = newDB.getCollectionNames();
printjson(collections);
//inserting documents
document10={Type: "Book",
	Title: "Definitive Guide to MongoDB 2nd ed.",
	Page: 210,
	Year: 2014,
	ISBN: "100-1-213422-56-8",
	Publisher: "Apress",
	Author: ["David Hows", "Eelco Plugge", "Peter, Membrey", "Tim, Hawkins"]};

document9={Type: "Book",
	Title: "MongoDB Basics",
	Page: 330,
	Year: 2015,
	ISBN: "978-1-484210-53-6",
	Publisher: "Apress",
	Author: ["Varghese, Shiju"]};

document8={Type: "Book",
	Title: "Web Development with Go",
	Page: 319,
	Year: 2014,
	ISBN: "978-1-484208-96-0",
	Publisher: "Apress",
	Author: ["David Hows", "Peter Membrey", "Eelco Plugge"]};

document7={Type: "Book",
	Title: "MongoDB: The Definitive Guide",
	Page: 220,
	Year: 2014,
	ISBN: "978-1-449344-68-9",
	Publisher: "O'Reilly Media",
	Author: ["Kristina Chodorow"]};

document6={Type: "Book",
	Title: "MongoDB in Action: Covers MongoDB version 3.0",
	Page: 135,
	Year: 2016,
	ISBN: "978-1-617291-60-9",
	Publisher: "Manning Publications",
	Author: ["Kyle Banker", "Peter Bakkum", "Shaun Verch", "Doug Garrett"]};

document5={Type: "Book",
	Title: "Learning Web App Development",
	Page: 430,
	Year: 2015,
	ISBN: "978-1-449370-19-0",
	Publisher: "O'Reilly Media",
	Author: ["Semmy Purewal"]};

document4={Type: "CD",
	Title: "Classic Rock: Gold",
	Artist: "VARIOUS ARTISTS", 
	Year: 2006,
	Tracklist: [
		{Track: "1",
		Title: "Born To Be Wild - Steppenwolf",
		Length: "3:45"},
		{Track: "2",
		Title: "Evil Ways - Santana",
		Length: "4:15"},
		{Track: "3",
		Title: "American Woman - Guess Who",
		Length: "3:55"}
	],
	Price: {New: 16, Used: 14}};

document3={Type: "CD",
	Title: "Now That's What I Call Classic Rock",
	Artist: "Now Music", 
	Year: 2004,
	Tracklist: [
		{Track: "1",
		Title: "We Will Rock You",
		Length: "4:35"},
		{Track: "2",
		Title: "Barracuda",
		Length: "4:23"},
		{Track: "3",
		Title: "The Spirit Of Radio",
		Length: "3:51"},
		{Track: "4",
		Title: "My Generation",
		Length: "4:51"},
	],
	Price: {New: 16, Used: 14}};

document2={Type: "CD",
	Title: "Casey Kasem: 80s Rocks Greatest Hits",
	Artist: "VARIOUS ARTISTS", 
	Year: 2008,
	Tracklist: [
		{Track: "1",
		Title: "Here I Go Again -- Whitesnake",
		Length: "4:42"},
		{Track: "2",
		Title: "Cum On Feel that Noize -- Quiet Riot",
		Length: "4:25"},
		{Track: "3",
		Title: "Every Rose Has Its Thorn -- Poison",
		Length: "5:01"}
	],
	Price: {New: 15, Used: 13}};

document1={Type: "CD",
	Title: "Pure 80's",
	Artist: "Pure 80's",
	Year: 2010, 
	Tracklist: [
		{Track: "1",
		Title: "Video Killed The Radio Star - The Buggles",
		Length: "4:45"},
		{Track: "2",
		Title: "Sweet Dreams (Are Made Of This) - Eurythmics",
		Length: "5:15"}
	],
	Price: {New: 13, Used: 12}};

document={Type: "CD",
	Title: "Off The Wall",
	Artist: "Michael Jackson", 
	Year: 2016,
	Tracklist: [
		{Track: "1",
		Title: "Don't Stop 'Til You Get Enough",
		Length: "4:35"},
		{Track: "2",
		Title: "Rock With You",
		Length: "3:15"},
		{Track: "3",
		Title: "Workin' Day And Night",
		Length: "4:55"}
	],
	Price: {New: 15, Used: 13}};
// Inserting Documents to the collection book
mongo = new Mongo('localhost');
bookDB = mongo.getDB('test');
booksColl = bookDB.getCollection('book');
booksColl.insert([document,document1,document2,document3,document4,document5,document6,document7,document8,document9,document10]);
//1 .Find all the “CD” documents. And use a count( ) to show the total number of “CD”documents;
db.getCollection('book').find({"Type":"CD"})
db.getCollection('book').find({"Type":"CD"}).count()
//Query 2: Find all the books with more than 300 pages. Only return the first 5 results.  
db.getCollection('book').find({"Page":{$gt:300}})
db.getCollection('book').find({"Page":{$gt:300}}).limit(5)
//Query 3: Find all the books published by either “Apress” or “O'Reilly Media”; 
db.getCollection('book').find({"Publisher":{$in:["Apress","O'Reilly Media"]}})
//Query 4: Find all the CDs with exactly 3 tracks;
db.getCollection('book').find({"Tracklist":{$size:3}})
//Query 5: Find all the books published by “Apress” in 2014. Use projection parameter to only return the //fields of “Title”, “Publisher”, and “Year”;
db.getCollection('book').find({"Publisher":"Apress"},{"Title":1,"Publisher":1,"Year":1,_id:0})
//Query 6: Find all the CDs with the New Price of $16; 
db.getCollection('book').find({"Price.New":16})
//Query 7: Find all the books with "David Hows" and "Peter Membrey" as the authors (or some of //authors); 
db.getCollection('book').find({Type:"Book", $and:[{Author:"David Hows"},{$or:[{Author:"Peter Membrey"},{Author:"Peter, Membrey"}]}]})
//Query 8: Find all the media documents with the “Price” field; 
db.getCollection('media').find({Price: {$exists : true}})
//Query 9: Find the CD with a Track 1 of Title “Don't Stop 'Til You Get Enough”. 
db.getCollection('media').find({Type : "CD", Tracklist: {$elemMatch : {$and: [{Track : "1"}, {Title: "Don't Stop 'Til You Get Enough"}]}}})
//Query 10: Increase the Year values of all the CDs by 2.  	
db.getCollection('book').updateMany({Type : "CD"}, {$inc: {Year:2}})
