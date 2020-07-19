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

	const guide_dir = 'https://girlcafegun.boom-app.wiki/entry/';

	const on = 0;
	const off = 0.8;

	const star4 = 'rgb(255, 212, 0)';
	const star3 = 'rgb(255, 0, 255)';

	const picture_dir = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/chara/s/';

	const header_title = ['', 'SS랭크', 'S랭크', 'A랭크', 'B랭크'];

var character = [
		//4성
		{class: '전술장비', name: '유키', attr: machine, weapon: shotgun, tactic: onset, guide: guide_dir + 'chara-1', appear: on, rarity: star4, picture: picture_dir + '001.jpg', rank: 1, selected : 1},
		{class: '체스', name: '코넬리아', attr: spirit, weapon: heavy, tactic: onset, guide: guide_dir + 'chara-84', appear: off, rarity: star4, picture: picture_dir + '084.jpg', rank: 1, selected : 1},
		{class: '서약', name: '리타', attr: quarantine, weapon: shotgun, tactic: support, guide: guide_dir + 'chara-94', appear: off, rarity: star4, picture: picture_dir + '094.jpg', rank: 1, selected : 1},
		{class: '서약', name: '코넬리아', attr: machine, weapon: shotgun, tactic: power, guide: guide_dir + 'chara-74', appear: on, rarity: star4, picture: picture_dir + '074.jpg', rank: 1, selected : 1},
		{class: '데이트', name: '지무유', attr: machine, weapon: sniper, tactic: power, guide: guide_dir + 'chara-134', appear: off, rarity: star4, picture: picture_dir + '134.jpg', rank: 1, selected : 1},
		{class: '전술장비', name: '아이린', attr: machine, weapon: pistol, tactic: power, guide: guide_dir + 'chara-2', appear: on, rarity: star4, picture: picture_dir + '002.jpg', rank: 2, selected : 1},
		{class: '메이드복', name: '지무카', attr: spirit, weapon: assault, tactic: support, guide: guide_dir + 'chara-3', appear: on, rarity: star4, picture: picture_dir + '003.jpg', rank: 3, selected : 1},
		{class: '메이드복', name: '지무유', attr: spirit, weapon: pistol, tactic: power, guide: guide_dir + 'chara-6', appear: on, rarity: star4, picture: picture_dir + '006.jpg', rank: 2, selected : 1},
		{class: '메이드복', name: '소쇼우신', attr: machine, weapon: shotgun, tactic: support, guide: guide_dir + 'chara-5', appear: on, rarity: star4, picture: picture_dir + '005.jpg', rank: 2, selected : 1},
		{class: '메이드복', name: '문', attr: life, weapon: heavy, tactic: power, guide: guide_dir + 'chara-4', appear: on, rarity: star4, picture: picture_dir + '004.jpg', rank: 3, selected : 1},
		{class: '원력오염', name: '지무카', attr: spirit, weapon: assault, tactic: power, guide: guide_dir + 'chara-66', appear: on, rarity: star4, picture: picture_dir + '066.jpg', rank: 3, selected : 1},
		{class: '서약', name: '그루니에', attr: life, weapon: heavy, tactic: defense, guide: guide_dir + 'chara-72', appear: on, rarity: star4, picture: picture_dir + '072.jpg', rank: 3, selected : 1},
		// {class: '', name: '', attr: , weapon: , tactic: , guide: guide_dir + 'chara-', appear: , rarity: , picture: picture_dir + '000.jpg', rank: , selected : 1},
		// {class: '', name: '', attr: , weapon: , tactic: , guide: guide_dir + 'chara-', appear: , rarity: , picture: picture_dir + '000.jpg', rank: , selected : 1},

		//3성
		{class: '전술장비', name: '지무카', attr: machine, weapon: assault, tactic: power, guide: guide_dir + 'chara-7', appear: on, rarity: star3, picture: picture_dir + '007.jpg', rank: 2, selected : 1},
		{class: '메이드복', name: '이코스', attr: quarantine, weapon: pistol, tactic: onset, guide: guide_dir + 'chara-21', appear: on, rarity: star3, picture: picture_dir + '021.jpg', rank: 2, selected : 1},
		{class: '사복', name: '지무유', attr: erode, weapon: assault, tactic: onset, guide: guide_dir + 'chara-14', appear: on, rarity: star3, picture: picture_dir + '014.jpg', rank: 2, selected : 1},
		{class: '사복', name: '문', attr: erode, weapon: shotgun, tactic: power, guide: guide_dir + 'chara-26', appear: on, rarity: star3, picture: picture_dir + '026.jpg', rank: 2, selected : 1},
		{class: '메이드복', name: '아이린', attr: quarantine, weapon: heavy, tactic: onset, guide: guide_dir + 'chara-18', appear: on, rarity: star3, picture: picture_dir + '018.jpg', rank: 2, selected : 1},
		{class: '메이드복', name: '로코코', attr: machine, weapon: sniper, tactic: power, guide: guide_dir + 'chara-23', appear: on, rarity: star3, picture: picture_dir + '023.jpg', rank: 3, selected : 1},
		{class: '메이드복', name: '유키', attr: quarantine, weapon: shotgun, tactic: support, guide: guide_dir + 'chara-17', appear: on, rarity: star3, picture: picture_dir + '017.jpg', rank: 2, selected : 1},
		{class: '메이드복', name: '코넬리아', attr: machine, weapon: assault, tactic: power, guide: guide_dir + 'chara-8', appear: on, rarity: star3, picture: picture_dir + '008.jpg', rank: 2, selected : 1},
		{class: '메이드복', name: '리타', attr: life, weapon: sniper, tactic: support, guide: guide_dir + 'chara-20', appear: on, rarity: star3, picture: picture_dir + '020.jpg', rank: 2, selected : 1},
		{class: '메이드복', name: '주노', attr: life, weapon: pistol, tactic: power, guide: guide_dir + 'chara-25', appear: on, rarity:star3 , picture: picture_dir + '025.jpg', rank: 3, selected : 1},
		{class: '사복', name: '이코스', attr: machine, weapon: heavy, tactic: power, guide: guide_dir + 'chara-16', appear: on, rarity: star3, picture: picture_dir + '016.jpg', rank: 2, selected : 1},
		{class: '사복', name: '코넬리아', attr: erode, weapon: heavy, tactic: onset, guide: guide_dir + 'chara-9', appear: on, rarity: star3, picture: picture_dir + '009.jpg', rank: 3, selected : 1},
		{class: '사복', name: '리타', attr: spirit, weapon: shotgun, tactic: heal, guide: guide_dir + 'chara-15', appear: on, rarity: star3, picture: picture_dir + '015.jpg', rank: 3, selected : 1},
		{class: '사복', name: '주노', attr: quarantine, weapon: sniper, tactic: onset, guide: guide_dir + 'chara-24', appear: on, rarity: star3, picture: picture_dir + '024.jpg', rank: 2, selected : 1},
		{class: '사복', name: '그루니에', attr: spirit, weapon: assault, tactic: heal, guide: guide_dir + 'chara-12', appear: on, rarity: star3, picture: picture_dir + '012.jpg', rank: 3, selected : 1},
		{class: '전술장비', name: '리타', attr: machine, weapon: shotgun, tactic: onset, guide: guide_dir + 'chara-64', appear: on, rarity: star3, picture: picture_dir + '064.jpg', rank: 2, selected : 1},
		{class: '메이드복', name: '그루니에', attr: machine, weapon: pistol, tactic: support, guide: guide_dir + 'chara-19', appear: on, rarity: star3, picture: picture_dir + '019.jpg', rank: 4, selected : 1},
		{class: '사복', name: '지무카', attr: life, weapon: shotgun, tactic: heal, guide: guide_dir + 'chara-13', appear: on, rarity: star3, picture: picture_dir + '013.jpg', rank: 4, selected : 1},
		{class: '사복', name: '아이린', attr: life, weapon: assault, tactic: support, guide: guide_dir + 'chara-11', appear: on, rarity: star3, picture: picture_dir + '011.jpg', rank: 4, selected : 1},
		{class: '사복', name: '로코코', attr: erode, weapon: pistol, tactic: support, guide: guide_dir + 'chara-22', appear: on, rarity: star3, picture: picture_dir + '022.jpg', rank: 4, selected : 1},
		{class: '사복', name: '유키', attr: spirit, weapon: sniper, tactic: defense, guide: guide_dir + 'chara-10', appear: on, rarity: star3, picture: picture_dir + '010.jpg', rank: 4, selected : 1},
		{class: '사복', name: '소쇼우신', attr: life, weapon: assault, tactic: support, guide: guide_dir + 'chara-27', appear: on, rarity: star3, picture: picture_dir + '027.jpg', rank: 4, selected : 1},
		{class: '수영복', name: '지무유', attr: quarantine, weapon: pistol, tactic: onset, guide: guide_dir + 'chara-67', appear: on, rarity: star3, picture: picture_dir + '067.jpg', rank: 4, selected : 1},
		{class: '서약', name: '코넬리아', attr: machine, weapon: shotgun, tactic: power, guide: guide_dir + 'chara-75', appear: on, rarity: star3, picture: picture_dir + '075.jpg', rank: 3, selected : 1},
		{class: '서약', name: '그루니에', attr: life, weapon: heavy, tactic: defense, guide: guide_dir + 'chara-73', appear: on, rarity: star3, picture: picture_dir + '073.jpg', rank: 4, selected : 1},
		// {class: '', name: '', attr: , weapon: , tactic: , guide: guide_dir + 'chara-', appear: , rarity: , picture: picture_dir + '000.jpg', rank: , selected : 1},
		// {class: '', name: '', attr: , weapon: , tactic: , guide: guide_dir + 'chara-', appear: , rarity: , picture: picture_dir + '000.jpg', rank: , selected : 1},
	];


	function add_character(classN, name, attr, weapon, tactic, guide, appear, rarity, picture, rank, selected){
		if(rarity == star4){
			character.unshift({classN, name, attr, weapon, tactic, guide, appear, rarity, picture, rank, selected});
			character[0].class = classN;
		}
		else if(rarity == star3)
			character.push({classN, name, attr, weapon, tactic, guide, appear, rarity, picture, rank, selected});
			character[character.length-1].class = classN;

	}

	add_character('수영복', '주노', quarantine, assault, power, guide_dir + 'chara-69', off, star4, picture_dir + '069.jpg', 2, 1);
	add_character('전술장비', '그루니에', life, pistol, power, guide_dir + 'chara-77', off, star4, picture_dir + '077.jpg', 2, 1);
	add_character('체스', '그루니에', spirit, shotgun, heal, guide_dir + 'chara-85', off, star4, picture_dir + '085.jpg', 2, 1);
	add_character('크리스마스', '소쇼우신', spirit, pistol, power, guide_dir + 'chara-88', off, star4, picture_dir + '088.jpg', 2, 1);
	add_character('설날', '지무카', quarantine, heavy, onset, guide_dir + 'chara-89', off, star4, picture_dir + '089.jpg', 2, 1);
	add_character('수영복', '리타', machine, assault, heal, guide_dir + 'chara-96', off, star4, picture_dir + '096.jpg', 2, 1);
	add_character('수영복', '로코코', machine, pistol, power, guide_dir + 'chara-97', off, star4, picture_dir + '097.jpg', 2, 1);
	add_character('차이나', '지무유', quarantine, shotgun, onset, guide_dir + 'chara-103', off, star4, picture_dir + '103.jpg', 2, 1);
	add_character('VD', '이코스', erode, assault, support, guide_dir + 'chara-105', off, star4, picture_dir + '105.jpg', 2, 1);
	add_character('사무관', '로코코', life, heavy, onset, guide_dir + 'chara-110', off, star4, picture_dir + '110.jpg', 2, 1);
	add_character('생일', '소쇼우신', erode, sniper, heal, guide_dir + 'chara-104', off, star4, picture_dir + '104.jpg', 2, 1);
