	var weapon_guide_addr = 'https://papago.naver.net/website?locale=ko&source=ja&target=ko&url=https%3A%2F%2Fgirlcafegun.boom-app.wiki%2Fentry%2Fweapondata-';
	var weapon_pic_addr = 'https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/weapon/l/'

	var weapons = [
		{name: '', rarity: 0, cat: '', guide: 0, picture: ''}
	]

	function addWeapon(name, rarity, cat, guide, picture){
		weapons.push({name, rarity, cat, guide, picture});
	}
	

	
		//서버 오픈 아이템
		addWeapon('체이싱 스타', 4, pistol, 1, '001');
		addWeapon('에어리스', 4, pistol, 2, '002');
		addWeapon('파이어플라이', 4, assault, 3, '003');
		addWeapon('아쿠아리우스', 4, assault, 4, '004');
		addWeapon('퓨리 샷건', 4, shotgun, 5, '005');
		addWeapon('브레이버', 4, shotgun, 6, '006');
		addWeapon('애쉬 드래곤', 4, sniper, 7, '007');
		addWeapon('테슬라 오로라', 4, sniper, 8, '008');
		addWeapon('라디에이션 캐논', 4, heavy, 9, '009');
		addWeapon('그래비톤', 4, heavy, 10, '010');
		addWeapon('토르', 3, pistol, 11, '011');
		addWeapon('크리 인젝터', 3, pistol, 12, '012');
		addWeapon('아르테미스', 3, pistol, 13, '013');
		addWeapon('아스트라스', 3, pistol, 14, '014');
		addWeapon('와일드 울프', 3, pistol, 15, '015');
		addWeapon('', 0, '', 15, '016');
		addWeapon('카우드릴', 3, assault, 17, '017'); //사진 다름
		addWeapon('디제스터', 3, assault, 18, '018');
		addWeapon('레이저 라이플', 3, assault, 19, '019');
		addWeapon('커팅 라이플', 3, assault, 20, '020');
		addWeapon('매직 스톰', 3, assault, 21, '021');
		addWeapon('', 0, '', 22, '022');
		addWeapon('이레이저', 3, shotgun, 23, '023');
		addWeapon('닥터 콜드', 3, shotgun, 24, '024');
		addWeapon('닥터 리버스', 3, shotgun, 25, '025');
		addWeapon('뮤턴트 샷건', 3, shotgun, 26, '026');
		addWeapon('파이어 샷건', 3, shotgun, 27, '027');
		addWeapon('갤럭시 스타', 3, sniper, 28, '028');
		addWeapon('헬즈팽', 3, sniper, 29, '029');
		addWeapon('버닝 스론', 3, sniper, 30, '030');
		addWeapon('데스바인', 3, sniper, 31, '031');
		addWeapon('나이트오더', 3, sniper, 32, '032'); //이벤트
		addWeapon('하데스 스나이퍼', 3, sniper, 33, '033');
		addWeapon('블로우피쉬', 3, heavy, 34, '034');
		addWeapon('', 0, '', 35, '035');
		addWeapon('트래쉬 크러셔', 3, heavy, 36, '036');
		addWeapon('클라운 스틱', 3, heavy, 37, '037');
		addWeapon('어비스 시커', 3, heavy, 38, '038');
		addWeapon('크라임 퓨어', 3, heavy, 39, '039');
		addWeapon('스콜피온', 2, pistol, 40, '040');
		addWeapon('아이스버그', 2, pistol, 41, '041');
		addWeapon('데미갓 킬러', 2, pistol, 42, '042');
		addWeapon('99형 장교 권총', 2, pistol, 43, '043');
		addWeapon('가우스 펄스 라이플', 2, assault, 44, '044');
		addWeapon('정밀사격 라이플', 2, assault, 45, '045');
		addWeapon('프로토타입 원력건', 2, assault, 46, '046');
		addWeapon('공수부대 라이플', 2, assault, 47, '047');
		addWeapon('크롭 샷건', 2, shotgun, 48, '048');
		addWeapon('비스팅', 2, shotgun, 49, '049');
		addWeapon('포트나이트', 2, shotgun, 50, '050');
		addWeapon('더블 저스티스', 2, shotgun, 51, '051');
		addWeapon('워닝건', 2, sniper, 52, '052');
		addWeapon('보우 스나이퍼', 2, sniper, 53, '053');
		addWeapon('캐논 스나이퍼', 2, sniper, 54, '054');
		addWeapon('모던 스나이퍼', 2, sniper, 55, '055');
		addWeapon('루인 스타', 2, heavy, 56, '056');
		addWeapon('폴러 윈드', 2, heavy, 57, '057');
		addWeapon('고압 터드건', 2, heavy, 58, '058');
		addWeapon('콜드 나이트', 2, heavy, 59, '059');
		addWeapon('군용 권총', 1, pistol, 60, '060');
		addWeapon('전투 라이플', 1, assault, 61, '061');
		addWeapon('쇼트 샷건', 1, shotgun, 62, '062');
		addWeapon('서포트 스나이퍼', 1, sniper, 63, '063');
		addWeapon('화염방사기', 1, heavy, 64, '064');

		//이벤트 및 가차 아이템
		addWeapon('블러디로터스', 3, shotgun, 65, '065');
		addWeapon('핑크 퐁퐁', 3, shotgun, 66, '066');
		addWeapon('포세이돈의 창', 3, assault, 67, '067');
		addWeapon('할로윈 요정', 3, heavy, 68, '068');
		addWeapon('반격의 봉화', 3, pistol, 69, '069');
		addWeapon('자기 버스트포', 3, heavy, 70, '070');
		addWeapon('크리스마스 지팡이', 4, sniper, 71, '071');
		addWeapon('새해 이타', 4, pistol, 72, '072');
		addWeapon('실전용 물총', 3, pistol, 73, '073');
		addWeapon('로톤 거미', 4, assault, 74, '074');
		addWeapon('확산형 겨울신', 4, shotgun, 75, '075');
		addWeapon('프로페서', 3, assault, 76, '076');
		addWeapon('음파 진동포', 3, heavy, 77, '077');
		addWeapon('빅토르', 4, shotgun, 78, '078');
		addWeapon('슬라이더', 4, heavy, 79, '079');
		addWeapon('요리사 실격', 3, sniper, 80, '080');
		addWeapon('난다나가', 3, shotgun, 81, '081');
		addWeapon('인력 트리거', 4, pistol, 82, '082');
		addWeapon('L. I. 아이스티', 4, heavy, 83, '083');
		addWeapon('팝 일렉트릭', 4, sniper, 84, '084');
		addWeapon('표준 어쿠스틱', 4, assault, 85, '085');
		// addWeapon('', 3, , 86, '086');
		// addWeapon('', 3, , 87, '087');
		// addWeapon('', 3, , 88, '088');
		// addWeapon('', 3, , 89, '089');
	
