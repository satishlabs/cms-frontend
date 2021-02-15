CSM FrontEnd:
1. clone cms-frontend project in youe local repository:
		git clone https://github.com/spd61185/cms-frontend.git
2. Start the projet:
			->Change location as project directory and type 
				ng start
				
CSM Backend
1. clone cms-backend project in youe local repository:
		git clone https://github.com/spd61185/cms-backed.git
2. Start the projet:
			->Change location as project directory and type 
				npm run server		
		


Project Setup:

Java Setup and configuration Enviroment Variable:
step1: Download Jdk8 or higher version of java version
		https://www.oracle.com/in/java/technologies/javase/javase-jdk8-downloads.html
		
step2: Installed jdk
		C:\Program Files\Java\jdk1.8.0_112
step3: configure the env variable
		Rigt Click on This PC ->Propeties ->Advanced system settings ->Enviroment vairables ->
		A.)System variables
			Variable name: JAVA_HOME
			Variable value: C:\Program Files\Java\jdk1.8.0_112
		B. )Click on Path->Edit ->New and past 
			%JAVA_1_8_HOME%\bin
step4: Open cmd and type javac -> Java installed or not		


	
Donwload and install Cassandra on windows
1. Download python and set path
	C:\Python27
    https://www.python.org/downloads/release/python2716

2. Download cassandra and set path
	https://cassandra.apache.org/download/
	C:\apache-cassandra-3.11.9\bin
3. start cassandra
	->open cmd and type "cassandra -f"
4. Open CQL
	->open cmd and type "cqlsh"
	
	check database:
	->Describe keyspace
	
	create database:
	->CREATE KEYSPACE cmsdb WITH replication = {'class':'SimpleStrategy','replication_factor':'3'} AND durable_writes = 'true';
	
	change in database:
	->use cmsdb;
	
	create tables:
	->create table filer_details(filerid text primary key,hostname text,dataset text,filergroup text,type text,status text,userlocalcapacity text,tags text);
	
	Insert values on tables:
	->INSERT INTO filer_details (filerid,hostname, dataset,filergroup, type,status,userlocalcapacity,tags) VALUES('f-100','cc1-ca', 'DS1', 'Default', 'ActiveFiler','Active','10TB','Project1');
	
	->INSERT INTO filers (filerId, hostName, dataSet,filerGroup, type,status,userLocalCapacity,tages) VALUES('f-200','cc2-ca', 'DS2', 'FGroup2', 'ActiveFiler','Awaiting Deploumen','15TB','Project2');
	
    ->INSERT INTO filers (filerId, hostName, dataSet,filerGroup, type,status,userLocalCapacity,tages) VALUES('f-300','cc3-ca', 'DS3', 'FGroup3', 'ActiveFiler','Error','10TB','Guest');
			

Mock Data:

[
	{
	"filerid": "f-100",
	"dataset": "DS1",
	"filergroup": "Default",
	"hostname": "cc1-ca",
	"status": "Active",
	"tags": "Project1",
	"type": "ActiveFiler",
	"userlocalcapacity": "10TB"
	},
	{
	"filerid": "f-200",
	"dataset": "DS2",
	"filergroup": "FGroup2",
	"hostname": "cc2-ca",
	"status": "Error",
	"tags": "Tags",
	"type": "HA-Local",
	"userlocalcapacity": "20TB"
	},
	{
	"filerid": "f-300",
	"dataset": "DS3",
	"filergroup": "FGroup3",
	"hostname": "cc3-ca",
	"status": "Deployed",
	"tags": "Project1",
	"type": "ActiveFiler-h",
	"userlocalcapacity": "21TB"
	},
	{
	"filerid": "f-400",
	"dataset": "DS4",
	"filergroup": "FGroup4",
	"hostname": "cc4-ca",
	"status": "Awaiting Deploument",
	"tags": "Guest",
	"type": "ActiveFiler Not active",
	"userlocalcapacity": "15TB"
	}
]

API Details:

Get API: http://localhost:5500/filers
Get API: http://localhost:5500/filer/{filer_Id}
Post API :http://localhost:5500/addfiler
Put API: http://localhost:5500/editfiler/{filer_Id}
Delete API: http://localhost:5500/filer/{ filer_Id}


	


		
