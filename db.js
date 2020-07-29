	//attr
	const life = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/element/001.jpg';    	// 1
	const machine = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/element/002.jpg';	// 2
	const spirit = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/element/003.jpg';		// 3
	const erode = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/element/005.jpg';		// 4
	const quarantine = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/element/004.jpg';	// 5

	//weapon
	const pistol = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/weapon/001.jpg';		// 6
	const assault = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/weapon/002.jpg';		// 7
	const shotgun = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/weapon/003.jpg';		// 8
	const sniper = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/weapon/004.jpg';		// 9
	const heavy = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/weapon/005.jpg';		// 10

	//tactic
	const power = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/type/001.jpg';			// 11
	const support = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/type/004.jpg';		// 12
	const onset = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/type/002.jpg';			// 13
	const heal = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/type/005.jpg';			// 14
	const defense = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/type/003.jpg';		// 15

	const guide_dir = 'https://papago.naver.net/website?locale=ko&source=ja&target=ko&url=https%3A%2F%2Fgirlcafegun.boom-app.wiki%2Fentry%2F';

	const on = 0;
	const off = 0.6;

	const star4 = 'rgb(255, 212, 0)';
	const star3 = 'rgb(255, 0, 255)';
	const star1 = 'rgb(140, 140, 140)';

	const picture_dir = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/chara/s/';

	const header_title = ['', 'SS랭크', 'S랭크', 'A랭크', 'B랭크', 'C랭크'];

	const opt_pic = 'https://static.thenounproject.com/png/773549-200.png';




var character = [
		//4성
		{class: '전술장비', name: '유키', attr: machine, weapon: shotgun, tactic: onset, guide: guide_dir + 'chara-1', appear: on, rarity: 4, picture: picture_dir + '001.jpg', rank: 1, selected : 1, cookie : 0,		quick: 2, quick_s: 4, dmg: 3, survival: 0},
		{class: '서약', name: '코넬리아', attr: machine, weapon: shotgun, tactic: power, guide: guide_dir + 'chara-74', appear: on, rarity: 4, picture: picture_dir + '074.jpg', rank: 1, selected : 1, cookie : 0,		quick: 2, quick_s: 2, dmg: 2, survival: 0},
		{class: '전술장비', name: '아이린', attr: machine, weapon: pistol, tactic: power, guide: guide_dir + 'chara-2', appear: on, rarity: 4, picture: picture_dir + '002.jpg', rank: 2, selected : 1, cookie : 0,		quick: 0, quick_s: 2, dmg: 0, survival: 0},
		{class: '메이드복', name: '지무카', attr: spirit, weapon: assault, tactic: support, guide: guide_dir + 'chara-3', appear: on, rarity: 4, picture: picture_dir + '003.jpg', rank: 2, selected : 1, cookie : 0,		quick: 4, quick_s: 5, dmg: 3, survival: 3},
		{class: '메이드복', name: '지무유', attr: spirit, weapon: pistol, tactic: power, guide: guide_dir + 'chara-6', appear: on, rarity: 4, picture: picture_dir + '006.jpg', rank: 4, selected : 1, cookie : 0,		quick: 0, quick_s: 3, dmg: 4, survival: 0},
		{class: '메이드복', name: '소쇼우신', attr: machine, weapon: shotgun, tactic: support, guide: guide_dir + 'chara-5', appear: on, rarity: 4, picture: picture_dir + '005.jpg', rank: 4, selected : 1, cookie : 0,	quick: 0, quick_s: 0, dmg: 3, survival: 0},
		{class: '메이드복', name: '문', attr: life, weapon: heavy, tactic: power, guide: guide_dir + 'chara-4', appear: on, rarity: 4, picture: picture_dir + '004.jpg', rank: 2, selected : 1, cookie : 0,				quick: 4, quick_s: 3, dmg: 4, survival: 0},
		{class: '원력오염', name: '지무카', attr: spirit, weapon: assault, tactic: power, guide: guide_dir + 'chara-66', appear: on, rarity: 4, picture: picture_dir + '066.jpg', rank: 4, selected : 1, cookie : 0,		quick: 4, quick_s: 0, dmg: 3, survival: 0},
		{class: '서약', name: '그루니에', attr: life, weapon: heavy, tactic: defense, guide: guide_dir + 'chara-72', appear: on, rarity: 4, picture: picture_dir + '072.jpg', rank: 4, selected : 1, cookie : 0,			quick: 0, quick_s: 0, dmg: 0, survival: 3},
		// {class: '', name: '', attr: , weapon: , tactic: , guide: guide_dir + 'chara-', appear: , rarity: , picture: picture_dir + '000.jpg', rank: , selected : 1, cookie : 0,			quick: 0, quick_s: 0, dmg: 0, survival: 0},
		// {class: '', name: '', attr: , weapon: , tactic: , guide: guide_dir + 'chara-', appear: , rarity: , picture: picture_dir + '000.jpg', rank: , selected : 1, cookie : 0,			quick: 0, quick_s: 0, dmg: 0, survival: 0},

		//3성
		{class: '전술장비', name: '지무카', attr: machine, weapon: assault, tactic: power, guide: guide_dir + 'chara-7', appear: on, rarity: 3, picture: picture_dir + '007.jpg', rank: 3, selected : 1, cookie : 0,		quick: 3, quick_s: 0, dmg: 3, survival: 0},
		{class: '메이드복', name: '이코스', attr: quarantine, weapon: pistol, tactic: onset, guide: guide_dir + 'chara-21', appear: on, rarity: 3, picture: picture_dir + '021.jpg', rank: 3, selected : 1, cookie : 0,	quick: 4, quick_s: 5, dmg: 4, survival: 5},
		{class: '사복', name: '지무유', attr: erode, weapon: assault, tactic: onset, guide: guide_dir + 'chara-14', appear: on, rarity: 3, picture: picture_dir + '014.jpg', rank: 2, selected : 1, cookie : 0,			quick: 2, quick_s: 0, dmg: 3, survival: 0},
		{class: '사복', name: '문', attr: erode, weapon: shotgun, tactic: power, guide: guide_dir + 'chara-26', appear: on, rarity: 3, picture: picture_dir + '026.jpg', rank: 1, selected : 1, cookie : 0,				quick: 1, quick_s: 4, dmg: 2, survival: 0},
		{class: '메이드복', name: '아이린', attr: quarantine, weapon: heavy, tactic: onset, guide: guide_dir + 'chara-18', appear: on, rarity: 3, picture: picture_dir + '018.jpg', rank: 3, selected : 1, cookie : 0,	quick: 4, quick_s: 3, dmg: 4, survival: 0},
		{class: '메이드복', name: '로코코', attr: machine, weapon: sniper, tactic: power, guide: guide_dir + 'chara-23', appear: on, rarity: 3, picture: picture_dir + '023.jpg', rank: 5, selected : 1, cookie : 0,		quick: 0, quick_s: 5, dmg: 5, survival: 0},
		{class: '메이드복', name: '유키', attr: quarantine, weapon: shotgun, tactic: support, guide: guide_dir + 'chara-17', appear: on, rarity: 3, picture: picture_dir + '017.jpg', rank: 3, selected : 1, cookie : 0,	quick: 4, quick_s: 3, dmg: 4, survival: 0},
		{class: '메이드복', name: '코넬리아', attr: machine, weapon: assault, tactic: power, guide: guide_dir + 'chara-8', appear: on, rarity: 3, picture: picture_dir + '008.jpg', rank: 3, selected : 1, cookie : 0,	quick: 4, quick_s: 0, dmg: 3, survival: 0},
		{class: '메이드복', name: '리타', attr: life, weapon: sniper, tactic: support, guide: guide_dir + 'chara-20', appear: on, rarity: 3, picture: picture_dir + '020.jpg', rank: 3, selected : 1, cookie : 0,			quick: 5, quick_s: 0, dmg: 0, survival: 0},
		{class: '메이드복', name: '주노', attr: life, weapon: pistol, tactic: power, guide: guide_dir + 'chara-25', appear: on, rarity:3 , picture: picture_dir + '025.jpg', rank: 3, selected : 1, cookie : 0,			quick: 3, quick_s: 3, dmg: 0, survival: 0},
		{class: '사복', name: '이코스', attr: machine, weapon: heavy, tactic: power, guide: guide_dir + 'chara-16', appear: on, rarity: 3, picture: picture_dir + '016.jpg', rank: 3, selected : 1, cookie : 0,			quick: 3, quick_s: 4, dmg: 3, survival: 0},
		{class: '사복', name: '코넬리아', attr: erode, weapon: heavy, tactic: onset, guide: guide_dir + 'chara-9', appear: on, rarity: 3, picture: picture_dir + '009.jpg', rank: 3, selected : 1, cookie : 0,			quick: 0, quick_s: 3, dmg: 4, survival: 0},
		{class: '사복', name: '리타', attr: spirit, weapon: shotgun, tactic: heal, guide: guide_dir + 'chara-15', appear: on, rarity: 3, picture: picture_dir + '015.jpg', rank: 2, selected : 1, cookie : 0,			quick: 3, quick_s: 3, dmg: 3, survival: 4},
		{class: '사복', name: '주노', attr: quarantine, weapon: sniper, tactic: onset, guide: guide_dir + 'chara-24', appear: on, rarity: 3, picture: picture_dir + '024.jpg', rank: 4, selected : 1, cookie : 0,		quick: 0, quick_s: 5, dmg: 5, survival: 0},
		{class: '사복', name: '그루니에', attr: spirit, weapon: assault, tactic: heal, guide: guide_dir + 'chara-12', appear: on, rarity: 3, picture: picture_dir + '012.jpg', rank: 5, selected : 1, cookie : 0,			quick: 0, quick_s: 0, dmg: 0, survival: 4},
		{class: '전술장비', name: '리타', attr: machine, weapon: shotgun, tactic: onset, guide: guide_dir + 'chara-64', appear: on, rarity: 3, picture: picture_dir + '064.jpg', rank: 4, selected : 1, cookie : 0,		quick: 4, quick_s: 0, dmg: 4, survival: 0},
		{class: '메이드복', name: '그루니에', attr: machine, weapon: pistol, tactic: support, guide: guide_dir + 'chara-19', appear: on, rarity: 3, picture: picture_dir + '019.jpg', rank: 2, selected : 1, cookie : 0,	quick: 0, quick_s: 3, dmg: 3, survival: 3},
		{class: '사복', name: '지무카', attr: life, weapon: shotgun, tactic: heal, guide: guide_dir + 'chara-13', appear: on, rarity: 3, picture: picture_dir + '013.jpg', rank: 5, selected : 1, cookie : 0,			quick: 0, quick_s: 5, dmg: 0, survival: 5},
		{class: '사복', name: '아이린', attr: life, weapon: assault, tactic: support, guide: guide_dir + 'chara-11', appear: on, rarity: 3, picture: picture_dir + '011.jpg', rank: 5, selected : 1, cookie : 0,			quick: 0, quick_s: 0, dmg: 0, survival: 0},
		{class: '사복', name: '로코코', attr: erode, weapon: pistol, tactic: support, guide: guide_dir + 'chara-22', appear: on, rarity: 3, picture: picture_dir + '022.jpg', rank: 5, selected : 1, cookie : 0,			quick: 0, quick_s: 0, dmg: 0, survival: 5},
		{class: '사복', name: '유키', attr: spirit, weapon: sniper, tactic: defense, guide: guide_dir + 'chara-10', appear: on, rarity: 3, picture: picture_dir + '010.jpg', rank: 4, selected : 1, cookie : 0,			quick: 0, quick_s: 0, dmg: 0, survival: 4},
		{class: '사복', name: '소쇼우신', attr: life, weapon: assault, tactic: support, guide: guide_dir + 'chara-27', appear: on, rarity: 3, picture: picture_dir + '027.jpg', rank: 5, selected : 1, cookie : 0,		quick: 0, quick_s: 0, dmg: 0, survival: 0},
		{class: '수영복', name: '지무유', attr: quarantine, weapon: pistol, tactic: onset, guide: guide_dir + 'chara-67', appear: on, rarity: 3, picture: picture_dir + '067.jpg', rank: 3, selected : 1, cookie : 0,		quick: 3, quick_s: 0, dmg: 3, survival: 0},
		{class: '서약', name: '코넬리아', attr: machine, weapon: shotgun, tactic: power, guide: guide_dir + 'chara-75', appear: on, rarity: 3, picture: picture_dir + '075.jpg', rank: 3, selected : 1, cookie : 0,		quick: 0, quick_s: 0, dmg: 0, survival: 0},
		{class: '서약', name: '그루니에', attr: life, weapon: heavy, tactic: defense, guide: guide_dir + 'chara-73', appear: on, rarity: 3, picture: picture_dir + '073.jpg', rank: 5, selected : 1, cookie : 0,			quick: 0, quick_s: 0, dmg: 0, survival: 0},
		
		{class: '평상복', name: '코넬리아', attr: spirit, weapon: pistol, tactic: support, guide: guide_dir + 'chara-52', appear: on, rarity: 1, picture: picture_dir + '052.jpg', rank: 4, selected : 1, cookie : 0,		quick: 4, quick_s: 0, dmg: 0, survival: 0},
		{class: '평상복', name: '지무유', attr: spirit, weapon: sniper, tactic: support, guide: guide_dir + 'chara-57', appear: on, rarity: 1, picture: picture_dir + '057.jpg', rank: 4, selected : 1, cookie : 0,		quick: 0, quick_s: 0, dmg: 0, survival: 3},
		{class: '평상복', name: '아이린', attr: machine , weapon: assault, tactic: power, guide: guide_dir + 'chara-54', appear: on, rarity: 1, picture: picture_dir + '054.jpg', rank: 5, selected : 1, cookie : 0,		quick: 0, quick_s: 0, dmg: 0, survival: 5},
	
		//미등장
		{class: '서약', name: '리타', attr: quarantine, weapon: shotgun, tactic: support, guide: guide_dir + 'chara-94', appear: off, rarity: 4, picture: picture_dir + '094.jpg', rank: 1, selected : 1, cookie : 0,	quick: 1, quick_s: 2, dmg: 2, survival: 0},
		{class: '데이트', name: '지무유', attr: machine, weapon: sniper, tactic: power, guide: guide_dir + 'chara-134', appear: off, rarity: 4, picture: picture_dir + '134.jpg', rank: 2, selected : 1, cookie : 0,		quick: 2, quick_s: 0, dmg: 2, survival: 0},
		{class: '체스', name: '코넬리아', attr: spirit, weapon: heavy, tactic: onset, guide: guide_dir + 'chara-84', appear: off, rarity: 4, picture: picture_dir + '084.jpg', rank: 3, selected : 1, cookie : 0,			quick: 2, quick_s: 0, dmg: 3, survival: 0},

	];


	function add_character(classN, name, attr, weapon, tactic, guide, appear, rarity, picture, rank, selected, cookie, quick, quick_s, dmg, survival){
		character.push({classN, name, attr, weapon, tactic, guide, appear, rarity, picture, rank, selected, cookie, quick, quick_s, dmg, survival});
		character[character.length-1].class = classN;
	}


	add_character('크리스마스', '소쇼우신', spirit, pistol, power, guide_dir + 'chara-88', off, 4, picture_dir + '088.jpg', 1, 1, 0,		1, 3, 2, 0);
	add_character('신년', '지무카', quarantine, heavy, onset, guide_dir + 'chara-89', off, 4, picture_dir + '089.jpg', 1, 1, 0,			1, 4, 2, 0);
	add_character('춘절', '지무유', quarantine, shotgun, onset, guide_dir + 'chara-103', off, 4, picture_dir + '103.jpg', 2, 1, 0,		3, 1, 3, 5);
	add_character('데이트', '아이린', spirit, shotgun, support, guide_dir + 'chara-135', off, 4, picture_dir + '135.jpg', 2, 1, 0,		2, 0, 2, 5);
	add_character('서약', '유키', spirit, sniper, onset, guide_dir + 'chara-92', off, 4, picture_dir + '092.jpg', 2, 1, 0,				3, 2, 3, 0);
	add_character('전술장비', '지무유', life, sniper, support, guide_dir + 'chara-76', off, 4, picture_dir + '076.jpg', 3, 1, 0,			4, 3, 3, 5);
	add_character('춘절', '문', spirit, assault, support, guide_dir + 'chara-100', off, 4, picture_dir + '100.jpg', 3, 1, 0,				4, 3, 3, 0);
	add_character('사무관', '아이린', life, assault, power, guide_dir + 'chara-112', off, 4, picture_dir + '112.jpg', 3, 1, 0,			2, 0, 3, 0);
	add_character('기갑공격', '아니야', machine, sniper, support, guide_dir + 'chara-119', off, 4, picture_dir + '119.jpg', 3, 1, 0,		0, 4, 3, 0);
	add_character('수영복', '유키', erode, assault, power, guide_dir + 'chara-121', off, 4, picture_dir + '121.jpg', 3, 1, 0,			3, 0, 3, 0);
	add_character('춘절', '지무카', erode, pistol, defense, guide_dir + 'chara-102', off, 4, picture_dir + '102.jpg', 3, 1, 0,			4, 0, 4, 5);
	add_character('전술장비', '그루니에', life, pistol, power, guide_dir + 'chara-77', off, 4, picture_dir + '077.jpg', 3, 1, 0,			4, 2, 4, 5);
	add_character('수영복', '리타', machine, assault, heal, guide_dir + 'chara-96', off, 4, picture_dir + '096.jpg', 3, 1, 0,			0, 5, 4, 3);
	add_character('VD', '이코스', erode, assault, support, guide_dir + 'chara-105', off, 4, picture_dir + '105.jpg', 3, 1, 0,			3, 0, 3, 0);
	add_character('생일', '소쇼우신', erode, sniper, heal, guide_dir + 'chara-104', off, 4, picture_dir + '104.jpg', 3, 1, 0,				0, 0, 0, 2);
	add_character('기갑공격', '시쥬', life, shotgun, power, guide_dir + 'chara-116', off, 4, picture_dir + '116.jpg', 3, 1, 0,			0, 5, 3, 0);
	add_character('수영복', '그루니에', erode, sniper, support, guide_dir + 'chara-122', off, 4, picture_dir + '122.jpg', 3, 1, 0,		0, 2, 4, 0);
	add_character('서약', '지무유', erode, heavy, support, guide_dir + 'chara-130', off, 4, picture_dir + '130.jpg', 3, 1, 0,			0, 0, 0, 0);
	add_character('생일', '아이린', erode, sniper, onset, guide_dir + 'chara-101', off, 4, picture_dir + '101.jpg', 4, 1, 0,				5, 5, 4, 0);
	add_character('전술장비', '주노', quarantine, sniper, onset, guide_dir + 'chara-107', off, 4, picture_dir + '107.jpg', 4, 1, 0,		0, 4, 5, 0);
	add_character('생일', '주노', machine, assault, support, guide_dir + 'chara-120', off, 4, picture_dir + '120.jpg', 4, 1, 0,			0, 0, 4, 0);
	add_character('서약', '주노', spirit, pistol, power, guide_dir + 'chara-132', off, 4, picture_dir + '132.jpg', 4, 1, 0,				5, 4, 5, 0);
	add_character('잠옷', '문', erode, sniper, power, guide_dir + 'chara-80', off, 4, picture_dir + '080.jpg', 4, 1, 0,					5, 5, 4, 0);
	add_character('잠옷', '유키', erode, pistol, support, guide_dir + 'chara-81', off, 4, picture_dir + '081.jpg', 4, 1, 0,				5, 0, 4, 0);
	add_character('수영복', '주노', quarantine, assault, power, guide_dir + 'chara-69', off, 4, picture_dir + '069.jpg', 3, 1, 0,		5, 0, 4, 0);
	add_character('체스', '그루니에', spirit, shotgun, heal, guide_dir + 'chara-85', off, 4, picture_dir + '085.jpg', 4, 1, 0,			0, 0, 0, 3);
	add_character('수영복', '로코코', machine, pistol, power, guide_dir + 'chara-97', off, 4, picture_dir + '097.jpg', 4, 1, 0,			0, 4, 4, 0);
	add_character('사무관', '로코코', life, heavy, onset, guide_dir + 'chara-110', off, 4, picture_dir + '110.jpg', 4, 1, 0,				4, 0, 0, 0);
	add_character('데이트', '시쥬', life, pistol, support, guide_dir + 'chara-138', off, 4, picture_dir + '138.jpg', 5, 1, 0,			0, 0, 0, 0);
	add_character('생일', '지무카', life, pistol, power, guide_dir + 'chara-133', off, 4, picture_dir + '133.jpg', 5, 1, 0,				0, 0, 0, 0);
	add_character('생일', '로코코', quarantine, shotgun, power, guide_dir + 'chara-136', off, 4, picture_dir + '136.jpg', 5, 1, 0,		0, 0, 0, 0);
	add_character('수영복', '이코스', quarantine, heavy, support, guide_dir + 'chara-68', off, 4, picture_dir + '068.jpg', 5, 1, 0,		0, 4, 0, 0);
	add_character('전술장비', '소쇼우신', quarantine, heavy, support, guide_dir + 'chara-106', off, 4, picture_dir + '106.jpg', 5, 1, 0,	0, 4, 0, 0);
	add_character('동화', '이코스', spirit, sniper, onset, guide_dir + 'chara-125', off, 4, picture_dir + '125.jpg', 5, 1, 0,			0, 0, 0, 0);
	add_character('동화', '주노', spirit, shotgun, support, guide_dir + 'chara-126', off, 4, picture_dir + '126.jpg', 5, 1, 0,			0, 0, 0, 0);
	add_character('데이트', '리타', erode, heavy, power, guide_dir + 'chara-137', off, 4, picture_dir + '137.jpg', 5, 1, 0,				0, 0, 0, 0);

	add_character('체스', '이코스', spirit, pistol, power, guide_dir + 'chara-86', off, 3, picture_dir + '086.jpg', 2, 1, 0,				3, 2, 3, 0);
	add_character('수영복', '아이린', machine, heavy, support, guide_dir + 'chara-98', off, 3, picture_dir + '098.jpg', 2, 1, 0,			1, 3, 4, 0);
	add_character('수영복', '문', quarantine, pistol, defense, guide_dir + 'chara-71', off, 3, picture_dir + '071.jpg', 3, 1, 0,			0, 0, 0, 2);
	add_character('전술장비', '로코코', life, heavy, defense, guide_dir + 'chara-78', off, 3, picture_dir + '078.jpg', 3, 1, 0,			0, 0, 0, 2);
	add_character('체스', '지무유', spirit, assault, support, guide_dir + 'chara-87', off, 3, picture_dir + '087.jpg', 2, 1, 0,			3, 4, 4, 4);
	add_character('사무관', '리타', life, shotgun, support, guide_dir + 'chara-113', off, 3, picture_dir + '113.jpg', 3, 1, 0,			5, 5, 0, 0);
	add_character('수영복', '코넬리아', erode, pistol, power, guide_dir + 'chara-123', off, 3, picture_dir + '123.jpg', 3, 1, 0,			4, 4, 3, 0);
	add_character('수영복', '시쥬', erode, heavy, support, guide_dir + 'chara-124', off, 3, picture_dir + '124.jpg', 3, 1, 0,			0, 0, 0, 2);	
	add_character('잠옷', '소쇼우신', erode, assault, power, guide_dir + 'chara-82', off, 3, picture_dir + '082.jpg', 4, 1, 0,			5, 0, 5, 0);
	add_character('크리스마스', '이코스', life, sniper, onset, guide_dir + 'chara-90', off, 3, picture_dir + '090.jpg', 4, 1, 0,			5, 5, 0, 0);
	add_character('전술장비', '이코스', quarantine, shotgun, heal, guide_dir + 'chara-108', off, 3, picture_dir + '108.jpg', 4, 1, 0,		0, 0, 0, 5);
	add_character('사복', '아니야', spirit, assault, onset, guide_dir + 'chara-118', off, 3, picture_dir + '118.jpg', 4, 1, 0,			0, 3, 0, 0);
	add_character('수영복', '소쇼우신', quarantine, shotgun, support, guide_dir + 'chara-70', off, 3, picture_dir + '070.jpg', 4, 1, 0,	5, 4, 5, 0);
	add_character('전술장비', '코넬리아', life, sniper, power, guide_dir + 'chara-79', off, 3, picture_dir + '079.jpg', 4, 1, 0,			0, 4, 5, 0);
	add_character('신년', '유키', life, assault, heal, guide_dir + 'chara-95', off, 3, picture_dir + '095.jpg', 4, 1, 0,					0, 5, 0, 4);
	add_character('수영복', '지무카', machine, sniper, defense, guide_dir + 'chara-99', off, 3, picture_dir + '099.jpg', 4, 1, 0,			0, 0, 0, 3);
	add_character('잠옷', '주노', erode, heavy, defense, guide_dir + 'chara-83', off, 3, picture_dir + '083.jpg', 5, 1, 0,				0, 0, 0, 0);
	add_character('동화', '로코코', spirit, assault, heal, guide_dir + 'chara-127', off, 3, picture_dir + '127.jpg', 5, 1, 0,			0, 0, 0, 0);
	add_character('동화', '그루니에', spirit, heavy, support, guide_dir + 'chara-128', off, 3, picture_dir + '128.jpg', 5, 1, 0,			0, 0, 0, 0);
	add_character('서약', '지무유', erode, heavy, support, guide_dir + 'chara-129', off, 3, picture_dir + '129.jpg', 5, 1, 0,			3, 3, 3, 0);
	add_character('서약', '주노', spirit, pistol, power, guide_dir + 'chara-131', off, 3, picture_dir + '131.jpg', 5, 1, 0,				0, 0, 0, 0);
	add_character('전술장비', '문', quarantine, assault, power, guide_dir + 'chara-109', off, 3, picture_dir + '109.jpg', 5, 1, 0,		0, 0, 5, 0);
	add_character('사무관', '지무카', life, pistol, support, guide_dir + 'chara-111', off, 3, picture_dir + '111.jpg', 5, 1, 0,			0, 0, 0, 0);
	add_character('사복', '시쥬', erode, sniper, defense, guide_dir + 'chara-115', off, 3, picture_dir + '115.jpg', 5, 1, 0,				0, 0, 0, 0);
	
	add_character('평상복', '시쥬', spirit, assault, support, guide_dir + 'chara-114', off, 1, picture_dir + '114.jpg', 4, 1, 0,			0, 0, 4, 0);


	add_character('생일', '그루니에', machine, assault, support, guide_dir + 'chara-139', off, 4, picture_dir + '139.jpg', 6, 1, 0,		0, 0, 0, 0);
	add_character('군청날개', '로코코', machine, shotgun, defense, guide_dir + 'chara-143', off, 3, picture_dir + '143.jpg', 6, 1, 0,		0, 0, 0, 0);
	add_character('군청날개', '지무카', machine, heavy, support, guide_dir + 'chara-142', off, 3, picture_dir + '142.jpg', 6, 1, 0,		0, 0, 0, 0);
	add_character('군청날개', '문', machine, pistol, support, guide_dir + 'chara-141', off, 4, picture_dir + '141.jpg', 6, 1, 0,			0, 0, 0, 0);
	add_character('군청날개', '지무유', machine, assault, power, guide_dir + 'chara-140', off, 4, picture_dir + '140.jpg', 6, 1, 0,		0, 0, 0, 0);
	// add_character('', '', , , , guide_dir + 'chara-', off, 3, picture_dir + '.jpg', 4, 1, 0,				0, 0, 0, 0);
	// add_character('', '', , , , guide_dir + 'chara-', off, 3, picture_dir + '.jpg', 4, 1, 0,				0, 0, 0, 0);
	// add_character('', '', , , , guide_dir + 'chara-', off, 3, picture_dir + '.jpg', 4, 1, 0,				0, 0, 0, 0);


