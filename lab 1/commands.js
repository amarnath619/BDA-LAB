use collegedb
db.createCollection("student")
db.Student.insert({_id:1,Name:"Amarnath",USN="1BM17CS013",Dept:"CSE",Sem:7})
db.Student.insert({_id:2,Name:"Shashank",USN="1BM17CS093",Dept:"CSE",Sem:7})
db.Student.insert({_id:3,Name:"Akash",USN="1BM17CS012",Dept:"CSE",Sem:7})
db.Student.insert({_id:4,Name:"hdbsah",USN="1BM17CS032",Dept:"ISE",Sem:7})
db.Student.insert({_id:5,Name:"hcd",USN="1BM17CS035",Dept:"ISE",Sem:7})
db.createCollection("Faculty")
db.Faculty.insert({_id:1,Name:"abc",Dept:"CSE",Fid:"001",Ph:1234567890})
db.Faculty.insert({_id:2,Name:"sdfd",Dept:"ISE",Fid:"123",Ph:1248867890})
db.Faculty.insert({_id:3,Name:"dfsdf",Dept:"ME",Fid:"041",Ph:1232147890})
db.Faculty.insert({_id:4,Name:"abdfs",Dept:"EEE",Fid:"201",Ph:1234567784})
db.Faculty.insert({_id:5,Name:"asgd",Dept:"CSE",Fid:"331",Ph:123445290})
db.createCollection("COE")
db.COE.insert({_id:1,StudentName:"Amarnath",Sub:"BDA",CIE:40,SEE:80,Grade:'A',Result:"PASS"})
db.COE.insert({_id:2,StudentName:"Shashank",Sub:"BDA",CIE:45,SEE:90,Grade:'S',Result:"PASS"})
db.COE.insert({_id:3,StudentName:"Akash",Sub:"BDA",CIE:41,SEE:82,Grade:'A',Result:"PASS"})
db.COE.insert({_id:4,StudentName:"hdbsah",Sub:"BDA",CIE:43,SEE:80,Grade:'A',Result:"PASS"})
db.COE.insert({_id:5,StudentName:"hcd",Sub:"BDA",CIE:40,SEE:90,Grade:'A',Result:"PASS"})
db.createCollection("Library")
db.Library.insert({_id:1,bookName:"abc",Bookid:"1234",In:"22/1/2020",Out:"27/1/2020"})
db.Library.insert({_id:2,bookName:"abcsd",Bookid:"1544",In:"15/1/2020",Out:"27/1/2020"})
db.Library.insert({_id:3,bookName:"absd",Bookid:"1212",In:"14/1/2020",Out:"27/1/2020"})
db.Library.insert({_id:4,bookName:"asdsd",Bookid:"2534",In:"22/1/2020",Out:"27/1/2020"})
db.Library.insert({_id:5,bookName:"dfs",Bookid:"8454",In:"20/1/2020",Out:"27/1/2020"})
db.createCollection("Admission")
db.Admission.insert({_id:1,AddNo:1,Name:"Amarnath",Date:"1/1/2020",Dept:"CSE",Fee:50000})
db.Admission.insert({_id:2,AddNo:2,Name:"sdasd",Date:"1/1/2020",Dept:"ISE",Fee:50000})
db.Admission.insert({_id:3,AddNo:3,Name:"Amsda",Date:"1/1/2020",Dept:"ME",Fee:50000})
db.Admission.insert({_id:4,AddNo:4,Name:"sdsdaath",Date:"1/1/2020",Dept:"EEE",Fee:50000})
db.Admission.insert({_id:5,AddNo:5,Name:"sdbsd",Date:"1/1/2020",Dept:"CSE",Fee:50000})
db.createCollection("CollegeFestival")
db.CollegeFestival.insert({_id:1, FestName:'TechFest', Month:'January', Attendance:'2k', Location:'TechFest Ground', Org:'Nokia'});
db.CollegeFestival.insert({_id:2, FestName:'CultFest', Month:'February', Attendance:'3k', Location:'CultFest Ground', Org:'Hadoop'});
db.CollegeFestival.insert({_id:3, FestName:'SportsFest', Month:'March', Attendance:'4k', Location:'SportsFest Ground', Org:'Nike'});
db.CollegeFestival.insert({_id:4, FestName:'HackFest', Month:'April', Attendance:'5k', Location:'HackFest Ground', Org:'Hacker1'});



db.Student.find({Name:'Amarnath'})
db.Faculty.find({Name:'abc'})
db.COE.find({StudentName:"Shashank"})
db.Admission.find({AddNo:1})
db.Library.find({Bookid:"1234"})
db.CollegeFestival.find({Month:'April'})