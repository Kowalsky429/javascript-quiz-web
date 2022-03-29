const data = [
	[
		{
			index: '1',
			question: `Command echo 'Hello World' is used in which programming language?`,
			answers: {
				a: 'C++',
				b: 'PHP',
				c: 'JS',
				d: 'PYTHON',
			},
			correct: 'PHP',
		},
		{
			index: '2',
			question: `
					   What value return this statement? <br />
					   $number = 30; <br />
					   $sum = 100; <br />
					   $sum %= $number;
			`,
			answers: {
				a: '3000',
				b: '3.10',
				c: '0.3',
				d: '10',
			},
			correct: '10',
		},
		{
			index: '3',
			question: 'What is a current version of HTML',
			answers: {
				a: 'HTML3',
				b: 'HTML5',
				c: 'HTML7',
				d: 'HTML8',
			},
			correct: 'HTML5',
		},
		{
			index: '4',
			question: 'Range of headers in HTML',
			answers: {
				a: 'h1toh6',
				b: 'h1toh5',
				c: 'h1toh4',
				d: 'h1toh3',
			},
			correct: 'h1toh6',
		},
		{
			index: '5',
			question: `SELECT name, surname <br /> FROM Users <br /> WHERE surname LIKE('%a')`,
			answers: {
				a: 'Return all with surname ended by a',
				b: 'Return all with surname that contain a',
				c: 'Return all where second letter is a',
				d: 'Return only names with a',
			},
			correct: 'Return all with surname ended by a',
		},
		{
			index: '6',
			question: 'The biggest changes in JavaScript was in',
			answers: {
				a: 'ES2018',
				b: 'ES2016',
				c: 'ES2015',
				d: 'ES2020',
			},
			correct: 'ES2015',
		},
		{
			index: '7',
			question: `Logical operator or in javascript is`,
			answers: {
				a: 'OR',
				b: '&&',
				c: '||',
				d: '##',
			},
			correct: '||',
		},
		{
			index: '8',
			question: 'Which library u need to add to use rand() in c++',
			answers: {
				a: 'time.h',
				b: 'stdlib.h',
				c: 'math.h',
				d: 'rand.h',
			},
			correct: 'stdlib.h',
		},
		{
			index: '9',
			question: 'Language C++ was created in',
			answers: {
				a: '1976',
				b: '1978',
				c: '1979',
				d: '1980',
			},
			correct: '1979',
		},
	],
	[
		{
			index: '1',
			question: 'The smallest unit of an output device display is called a?',
			answers: {
				a: 'Pixel',
				b: 'VDT',
				c: 'Picture Unit',
				d: 'Monitor',
			},
			correct: 'Pixel',
		},
		{
			index: '2',
			question: 'A device that records images of text, or converts printed text into machine-readable form is called a?',
			answers: {
				a: 'Printer',
				b: 'Scanner',
				c: 'Plotter',
				d: 'Pointing Device',
			},
			correct: 'Scanner',
		},
		{
			index: '3',
			question: 'The type of output that is printed on permanent media?',
			answers: {
				a: 'Hard Copy',
				b: 'Modem',
				c: 'Soft Copy',
				d: 'Disk or Tape',
			},
			correct: 'Hard Copy',
		},
		{
			index: '4',
			question: 'What type of device is a CPU?',
			answers: {
				a: 'Storage',
				b: 'Input',
				c: 'Output',
				d: 'All of the above',
			},
			correct: 'Storage',
		},
		{
			index: '5',
			question: 'What is a logic gate?',
			answers: {
				a: 'A type of programming language',
				b: 'A digital electronic device that allows an electronic system to make decisions based on inputs',
				c: 'A storage device',
				d: 'A logical operator',
			},
			correct: 'A digital electronic device that allows an electronic system to make decisions based on inputs',
		},
		{
			index: '6',
			question: 'For an AND gate, how many of the inputs have to be 1 for the output to be 1?',
			answers: {
				a: '0',
				b: '1',
				c: 'both',
				d: 'all of the above',
			},
			correct: 'both',
		},
		{
			index: '7',
			question: 'What is an example of a storage device?',
			answers: {
				a: 'GPU',
				b: 'Hard drive',
				c: 'Printer',
				d: 'Software',
			},
			correct: '110',
		},
		{
			index: '8',
			question: 'What is the latest version of DDR?',
			answers: {
				a: 'DDR3',
				b: 'DDR4',
				c: 'DDR5',
				d: 'DDR6',
			},
			correct: 'DDR5',
		},
		{
			index: '9',
			question: 'What mean char K next to CPU',
			answers: {
				a: 'Able overclocking',
				b: 'Not able overclocking',
				c: 'double threads',
				d: 'less power-hungry',
			},
			correct: 'Able overclocking',
		},
	],
	[
		{
			index: '1',
			question: 'Which port number is used by HTTP ?',
			answers: {
				a: '53',
				b: '80',
				c: '110',
				d: '23',
			},
			correct: '80',
		},
		{
			index: '2',
			question: 'Which protocol is used by FTP to transfer files over the Internet?',
			answers: {
				a: 'TCP',
				b: 'SMTP',
				c: 'UDP',
				d: 'SNMP',
			},
			correct: 'TCP',
		},
		{
			index: '3',
			question: 'Which of the following services is used to translate a web address into an IP address?',
			answers: {
				a: 'WINS',
				b: 'DNS',
				c: 'DHCP',
				d: 'Telnet',
			},
			correct: 'DNS',
		},
		{
			index: '4',
			question:
				'End system use port numbers to select the proper applications. What is the lowest port number that can be dynamically assigned by the host system ?',
			answers: {
				a: '1',
				b: '128',
				c: '256',
				d: '1024',
			},
			correct: '1',
		},
		{
			index: '5',
			question: 'Which protocol can be used to load or retrieve Cisco IOS images to or from a router?',
			answers: {
				a: 'UDP',
				b: 'SNMP',
				c: 'TFTP',
				d: 'TCP',
			},
			correct: 'TFTP',
		},
		{
			index: '6',
			question: 'Which one has the widest coverage?',
			answers: {
				a: 'PAN',
				b: 'MAN',
				c: 'LAN',
				d: 'WAN',
			},
			correct: 'WAN',
		},
		{
			index: '7',
			question: 'A LAN allows users to share resources such as:',
			answers: {
				a: 'Files, application programs, printers, andor other software hardware',
				b: 'Transfer of money via electronic funds transfer',
				c: 'Public transportation',
				d: 'All of the above',
			},
			correct: 'Files, application programs, printers, andor other software hardware',
		},
		{
			index: '8',
			question: 'What is the physical address of a network interface card?',
			answers: {
				a: 'NIC',
				b: 'MAC',
				c: 'IP',
				d: 'ARP',
			},
			correct: 'MAC',
		},
		{
			index: '9',
			question:
				'What name is given to a network with a small number of computers that share their files and printers, but has no main server?',
			answers: {
				a: 'A dedicated network.',
				b: 'A peer-to-peer network.',
				c: 'A ring network',
				d: 'A Home Network',
			},
			correct: 'A home network',
		},
	],
	[
		{
			index: '1',
			question: 'What is 5 + 5 * 5',
			answers: {
				a: '25',
				b: '50',
				c: '30',
				d: '125',
			},
			correct: '30',
		},
		{
			index: '2',
			question: 'What is a result of -3^4',
			answers: {
				a: '-81',
				b: '81',
				c: '-12',
				d: '12',
			},
			correct: '25',
		},
		{
			index: '3',
			question: 'What is the next number in this sequence: 2, 4, 8, 16, 32 ...',
			answers: {
				a: '64',
				b: '128',
				c: '60',
				d: '58',
			},
			correct: '64',
		},
		{
			index: '4',
			question:
				'A direct flight from NYC to LA is 2,500 miles. If a plane travels 500 miles per hour, how long does the flight take?',
			answers: {
				a: '10 hours',
				b: '5 hours',
				c: '3 hours',
				d: '6 hours',
			},
			correct: '5 hours',
		},
		{
			index: '5',
			question: 'If an hour-long TV show has 16 minutes of commercials, what is the actual duration of the show?',
			answers: {
				a: '44 minutes',
				b: '36 minutes',
				c: '46 minutes',
				d: '38 minutes',
			},
			correct: '44 minutes',
		},
		{
			index: '6',
			question: 'There are only 22 chocolate bars in the 36-pack you bought yesterday. How many chocolate bars are missing?',
			answers: {
				a: '14',
				b: '16',
				c: '12',
				d: '18',
			},
			correct: '14',
		},
		{
			index: '7',
			question: 'If your cellphone battery burns 7% of power per hour, how long will a 35% battery level last?',
			answers: {
				a: '3 hours',
				b: '10 hours',
				c: '5 hours',
				d: '7 hours',
			},
			correct: '5 hours',
		},
		{
			index: '8',
			question:
				'If you make $10 an hour and you work three days a week for four hours each day, how much money will you make after 10 weeks?',
			answers: {
				a: '$1400',
				b: '$800',
				c: '$1600',
				d: '$1200',
			},
			correct: '$1200',
		},
		{
			index: '9',
			question: 'If you make $60 000 per year and 25% goes to taxes, how much do you pay in taxes each year?',
			answers: {
				a: '$6000',
				b: '$3000',
				c: '$12000',
				d: '$15000',
			},
			correct: '$15000',
		},
	],
	[
		{
			index: '1',
			question: 'What does SAAS stand for?',
			answers: {
				a: 'System Aerosurface Actuator Simulation',
				b: 'Systems as a Service',
				c: 'Software acting as Service',
				d: 'Software as a Service',
			},
			correct: 'Software as a Service',
		},
		{
			index: '2',
			question: 'Which of the following is/are correct types of data?',
			answers: {
				a: 'Semi-structured Data',
				b: 'Unstructured Data',
				c: 'Semi Data',
				d: 'Both a&b',
			},
			correct: 'Both a&b',
		},
		{
			index: '3',
			question:
				'A method of storing data within a system that facilitates the collocation of data in various schemata and structural forms.',
			answers: {
				a: 'Data Visualisation',
				b: 'Data Lake',
				c: 'Big Data Management',
				d: 'Deep Analytics',
			},
			correct: 'Data Lake',
		},
		{
			index: '4',
			question:
				'A free, Java-based programming framework that supports the processing of large data sets in a distributed computing environment.',
			answers: {
				a: 'Hadoop',
				b: 'Python',
				c: 'R',
				d: 'Apache Groovy',
			},
			correct: 'Hadoop',
		},
		{
			index: '5',
			question:
				'A voluminous amount of structured, semi-structured, and unstructured data that has the potential to be mined for information.',
			answers: {
				a: 'Small data',
				b: 'Meta data',
				c: 'Statisctical data',
				d: 'Big data',
			},
			correct: 'Big data',
		},
		{
			index: '6',
			question: 'Why build analytical models in an organization?',
			answers: {
				a: 'To find reason to gather more data',
				b: 'To turn data into information',
				c: 'To address areas with new problems',
				d: 'To improve the performance of big data tools',
			},
			correct: 'To turn data into information',
		},
		{
			index: '7',
			question: 'Which best describes the requirements-gathering process?',
			answers: {
				a: 'Collect data, analyze, decide which problem to solve',
				b: 'Find a business nee dand collect data',
				c: 'Find a bussiness need, then analyze data to support',
				d: 'Find a business need, ask clear questions, define the data, analyze, look for other connection',
			},
			correct: 'Find a business need, ask clear questions, <br /> define the data, analyze, look for other connection',
		},
		{
			index: '8',
			question: 'Identifying the condition of the data is part of which task?',
			answers: {
				a: 'Performing a data audit',
				b: 'Performing extract, transform and load (ETL)',
				c: 'Performing data analysis',
				d: 'Conducting a data assessment',
			},
			correct: 'Conducting a data assessment',
		},
		{
			index: '9',
			question: 'You are putting procedures in place at your organization to pre-clean your data. You are implementing a:',
			answers: {
				a: 'Process to identify sub-data sets',
				b: 'Method of prevention',
				c: 'Process to predict quality',
				d: 'Method to model data quality',
			},
			correct: 'Method of prevention',
		},
	],
	[
		{
			index: '1',
			question: 'The angle α is 30 °. Then:',
			answers: {
				a: 'sinα=½',
				b: 'sinα=√3/2',
				c: 'sinα=√3/3',
				d: 'sinα=1',
			},
			correct: 'sinα=½',
		},
		{
			index: '2',
			question: 'The ratio of the length of the hypotenuse opposite the acute angle α to the hypotenuse is:',
			answers: {
				a: 'ctg',
				b: 'cos',
				c: 'sin',
				d: 'tg',
			},
			correct: 'sin',
		},
		{
			index: '3',
			question: 'The point P = (- 6; 4) belongs to the end leg of the angle. The leg length of this angle is:',
			answers: {
				a: '52',
				b: '20',
				c: '√20',
				d: '√52',
			},
			correct: '63',
		},
		{
			index: '4',
			question: 'If sinα = 1 then cosα = ....?',
			answers: {
				a: '0',
				b: '1',
				c: '1/2',
				d: '√3',
			},
			correct: '0',
		},
		{
			index: '5',
			question: 'cos 120° degrees is different ..',
			answers: {
				a: 'cos(180 - 60)',
				b: 'cos(180 - 120)',
				c: 'sin(180 - 60)',
				d: 'cos(180 - 30)',
			},
			correct: 'cos(180 - 60)',
		},
		{
			index: '6',
			question: 'cos135° is equal: ',
			answers: {
				a: '-√2/2',
				b: '1/2',
				c: '-√3/w',
				d: '√2/2',
			},
			correct: '-V2/2',
		},
		{
			index: '7',
			question: 'In a right-angled triangle with 2 and 5 leg lengths, the cosine of the greater of the acute angles is:',
			answers: {
				a: '5/2',
				b: '2/5',
				c: '2/√29',
				d: '5/√29',
			},
			correct: '2/√29',
		},
		{
			index: '8',
			question: 'The angle α is 60 °. Then sin:',
			answers: {
				a: '√4/2',
				b: '√3/2',
				c: '√3/3',
				d: '1/2',
			},
			correct: '√3/3',
		},
		{
			index: '9',
			question: 'The angle α is 60 °. Then ctg:',
			answers: {
				a: '√3',
				b: '1',
				c: '√3/3',
				d: '9',
			},
			correct: '√3/3',
		},
	],
	[
		{
			index: '1',
			question: 'James Watt builds a steam engine',
			answers: {
				a: '1769',
				b: '1768',
				c: '1765',
				d: '1763',
			},
			correct: '1765',
		},
		{
			index: '2',
			question: 'The invention of the telegraph',
			answers: {
				a: '1832',
				b: '1833',
				c: '1840',
				d: '1837',
			},
			correct: '1832',
		},
		{
			index: '3',
			question: 'The first atomic bomb test, codenamed Trinity.',
			answers: {
				a: '1943',
				b: '1940',
				c: '1945',
				d: '1939',
			},
			correct: '1945',
		},
		{
			index: '4',
			question: 'On the Revolutions of Heavenly Bodies" by Nicolaus Copernicus is written',
			answers: {
				a: '1544',
				b: '1543',
				c: '1455',
				d: '1453',
			},
			correct: '1543',
		},
		{
			index: '5',
			question: 'First landing on the moon',
			answers: {
				a: '20 July 1968',
				b: '20 July 1969',
				c: '20 July 1970',
				d: '20 July 1964',
			},
			correct: '20 July 1969',
		},
		{
			index: '6',
			question: 'Fall of the western roman empire and the end of antiquity',
			answers: {
				a: '475',
				b: '466',
				c: '467',
				d: '476',
			},
			correct: '476',
		},
		{
			index: '7',
			question: 'Gutenbergs Bible',
			answers: {
				a: '1455',
				b: '1454',
				c: '1452',
				d: '1450',
			},
			correct: '1455',
		},
		{
			index: '8',
			question: 'The Wright brothers make their first flight in a heavier-than-air machine',
			answers: {
				a: '1902',
				b: '1900',
				c: '1904',
				d: '1903',
			},
			correct: '1903',
		},
		{
			index: '9',
			question: 'The outbreak of the French Revolution and the entry into force of the American constitution',
			answers: {
				a: '1789',
				b: '1788',
				c: '1787',
				d: '1786',
			},
			correct: '1789',
		},
	],
	[
		{
			index: '1',
			question: `What is Luigi's favourite food?`,
			answers: {
				a: 'Sausages and mash',
				b: 'Pizza',
				c: 'Cheese toasties',
				d: 'Roast beef',
			},
			correct: 'Pizza',
		},
		{
			index: '2',
			question: 'When was the Playstation 5 released?',
			answers: {
				a: 'January 2020',
				b: 'June 2020',
				c: 'November 2020',
				d: 'January 2021',
			},
			correct: 'November 2020',
		},
		{
			index: '3',
			question: 'What was the first commercially successful video game?',
			answers: {
				a: 'Pong',
				b: 'Donkey Kong Country',
				c: 'Super Mario Bros',
				d: 'Shaq Fu',
			},
			correct: 'Pong',
		},
		{
			index: '4',
			question: 'What is the best-selling video game of all time? ',
			answers: {
				a: 'Red Dead Redemption 2',
				b: 'FIFA18',
				c: 'Minecraft',
				d: 'Call of Duty: Modern Warframe 3',
			},
			correct: 'Minecraft',
		},
		{
			index: '5',
			question: 'What inspired games maker Satoshi Tajiri to create Pokémon?',
			answers: {
				a: 'A dream',
				b: 'Butterflies',
				c: 'An old TV show',
				d: 'His mum',
			},
			correct: 'Butterflies',
		},
		{
			index: '6',
			question: 'What is a ‘frag’?',
			answers: {
				a: 'The number of things you have killed in a game',
				b: 'A cheat code',
				c: 'A french bag',
				d: 'Eward for the best game of year',
			},
			correct: 'The number of things you have killed in a game',
		},
		{
			index: '7',
			question: 'What is the biggest selling video games of all time?',
			answers: {
				a: 'Minecraft',
				b: 'Roblox',
				c: 'FIFA',
				d: 'The Sims',
			},
			correct: 'Minecraft',
		},
		{
			index: '8',
			question: 'How many Playstation 4 consoles have been sold?',
			answers: {
				a: '5 milion',
				b: '56 milion',
				c: '62.5 milion',
				d: 'Over 102 milion',
			},
			correct: 'Over 102 milion',
		},
		{
			index: '9',
			question: 'What is the fictional language in The Sims?  ',
			answers: {
				a: 'Simian',
				b: 'Simlish',
				c: 'Simali',
				d: 'Simento',
			},
			correct: 'Simlish',
		},
	],
	[
		{
			index: '1',
			question: 'How many teams play in EU LCS in League of Legends?',
			answers: {
				a: '5',
				b: '10',
				c: '8',
				d: '12',
			},
			correct: '10',
		},
		{
			index: '2',
			question: 'Which of these Korean players has never played in the Brazilian CBLOL?',
			answers: {
				a: 'Kim Olleh Joo-sung',
				b: 'Kim Emperor Jin-hyun',
				c: 'Lee Crown Min-ho',
				d: 'Kang GorillA Beom-hyeon',
			},
			correct: 'Kang GorillA Beom-hyeon',
		},
		{
			index: '3',
			question: 'Which of these teams has played EVERY World Cup tournament?',
			answers: {
				a: 'Fnatic',
				b: 'SKT1',
				c: 'Counter Logic Gaming',
				d: 'Team SoloMid',
			},
			correct: 'Team SoloMid',
		},
		{
			index: '4',
			question: 'Who was the first Western player to move to another region??',
			answers: {
				a: 'Shan Chaox Huang',
				b: 'Henrik Froggen Hansen',
				c: 'Edward Edward Abgaryan',
				d: 'Soren Bjergsen Bjerg',
			},
			correct: 'Edward Edward Abgaryan',
		},
		{
			index: '5',
			question: 'Which of the Polish players has played the most splits in the EU Challenger Series?',
			answers: {
				a: 'Marcin SELFIE Wolski',
				b: 'Pawel Woolite Pruski',
				c: 'Wojciech Tabasko Kruza',
				d: 'Sebastian Sebekx Smejkal',
			},
			correct: 'Pawel Woolite Pruski',
		},
		{
			index: '6',
			question: 'Which of these teams has Marcin "Jankos" Jankowski never played in?',
			answers: {
				a: 'KMT',
				b: 'Misfits',
				c: 'H2K',
				d: 'ROCCAT',
			},
			correct: 'Misfits',
		},
		{
			index: '7',
			question: 'The famous Korean skirmishes called Telecom Wars are fought between',
			answers: {
				a: 'Samsung Galaxy and KT Rolster',
				b: 'Samsung Galaxy and Jin Air Greenwings',
				c: 'SKT1 and ROX Tigers',
				d: 'SKT1 and KT Rolster',
			},
			correct: 'SKT1 and KT Rolster',
		},
		{
			index: '8',
			question: 'Nicolaj "Jensen" Jensen, before choosing his current stage name, appeared in Cloud9 under the nickname:',
			answers: {
				a: 'Veigodx',
				b: 'Incarnati0n',
				c: 'SneakySneaky',
				d: 'Rebellious',
			},
			correct: 'Incarnati0n',
		},
		{
			index: '9',
			question: 'Which of these players was NOT on the star team of the 2017 Summer Split in the EU LCS?',
			answers: {
				a: 'Paul sOAZ Boyer',
				b: 'Martin Rekkles Larsson',
				c: 'Alfonso Mithy Aguirre',
				d: 'Tamas Vizicsacsi Kiss',
			},
			correct: 'Tamas Vizicsacsi Kiss',
		},
	],
];

export default data;
