	var schedule = document.getElementById('schedule');
	var info = document.getElementById('info');
	var contents = document.getElementsByClassName('contents');
	var events = [];
	var sides = document.getElementsByClassName('sides');
	var sidesText = document.getElementsByClassName('sideText');

	info.innerHTML = '보라색 테두리: 이벤트<br>빨강색 테두리: 캐릭터 뽑기<br>파랑색 테두리: 무기 뽑기<br>초록색 테두리: 업데이트'

	//마지막 주차
	function init_schedule(){
		for(let i = 0; i < last_week; i++){
			createTable(i);
		}
		createetcTable('기타');
	
		for(let i = 0; i < schedules.length; i++){
			createContent(i);
		}

		for(let i = 0; i < last_week + 1; i++){
			let temp = Number(sides[i].style.height.replace('px', ''));

			if(temp >= 1500){
				sidesText[i].style.marginTop = (temp/2-14)+'px';
			}
			else if(temp >= 1200){
				sides[i].style.backgroundImage = 'url("resource/schedule4.jpg")';
				sidesText[i].style.marginTop = (temp/2-14)+'px';
			}
			else if(temp >= 900){
				sides[i].style.backgroundImage = 'url("resource/schedule3.jpg")';
				sidesText[i].style.marginTop = (temp/2-14)+'px';
			}
			else if(temp >= 600){
				sides[i].style.backgroundImage = 'url("resource/schedule2.jpg")';
				sidesText[i].style.marginTop = (temp/2-14)+'px';
			}
			else if(temp >= 300){
				sides[i].style.backgroundImage = 'url("resource/schedule1.jpg")';
				sidesText[i].style.marginTop = (temp/2-14)+'px';
			}
			else{
				sidesText[i].style.marginTop = '33px';
			}
			
		}

	}

	function createTable(i){
		var week = createDiv('', 'weeks');
		var side = createDiv('', 'sides');
		var contents = createDiv('', 'contents');
		var text = i+1 + '주';
		var sideText = createDiv('', 'sideText');
		var side_opacity = createDiv('', 'sideOpacity');
		sideText.innerHTML = text;

		schedule.appendChild(week);
		week.appendChild(side);
			side.appendChild(sideText);
			side.appendChild(side_opacity);
		week.appendChild(contents);
	}

	function createetcTable(i){
		var week = createDiv('', 'weeks');
		var side = createDiv('', 'sides');
		var contents = createDiv('', 'contents');
		var sideText = createDiv('', 'sideText');
		sideText.innerHTML = i;

		schedule.appendChild(week);
		week.appendChild(side);
			side.appendChild(sideText);
		week.appendChild(contents);
	}

	function getEPic(i){
		if(schedules[i].week == 0)
			var temp = "url(\"resource/bd"+schedules[i].epic+".jpg\")";
		else
			var temp = "url(\"resource/ev"+schedules[i].epic+".jpg\")";

		return temp;
	}

	function createContent(i){
		var event = createDiv('', 'event');
			var link = createLink(get_guide_addr(i));		
				var evpic = createDiv('', 'evpic');
					var evname = createDiv(schedules[i].ename, 'evname');
					var pic_opac = createDiv('', 'pic_opac');
				var evdet = createDiv('', 'evdet');
			// var evetc = createDiv('', 'evetc');

		evpic.style.backgroundImage = getEPic(i);
		evpic.style.backgroundSize = '500px';

		if(schedules[i].cat == 'birthday'){
			contents[last_week].appendChild(event);
			height_s = sides[last_week].style.height.replace('px', "");
			height_s = Number(height_s)+307;
			sides[last_week].style.height = height_s + 'px';
		}
		else{
			contents[schedules[i].week-1].appendChild(event);
			height_s = sides[schedules[i].week-1].style.height.replace('px', "");
			height_s = Number(height_s)+307;
			sides[schedules[i].week-1].style.height = height_s + 'px';
		}
				event.appendChild(link);
					link.appendChild(evpic);
						evpic.appendChild(evname);
						evpic.appendChild(pic_opac);
				event.appendChild(evdet);
				// event.appendChild(evetc);
		

		for(let j = 0; j < schedules[i].echar.length; j++){
			evdet.appendChild(createEChar(schedules[i].echar[j])); //character의 index를 parsing
		}

		for(let j = 0; j < schedules[i].eweapon.length; j++){
			evdet.appendChild(createEWeapon(schedules[i].eweapon[j])); //weapon의 index를 parsing
		}

		switch(schedules[i].cat){
			case 'event':
				event.style.border = '5px solid purple';
				break;
			case 'weapongacha':
				event.style.border = '5px solid blue';
				break;
			case 'gacha':
				event.style.border = '5px solid red';
				break;
		}

		// height_s = sides[schedules[i].week-1].style.height.replace('px', "");
		// height_s = Number(height_s)+307;
		// sides[schedules[i].week-1].style.height = height_s + 'px';
	}

	function createEChar(i){
		var wrapper = createDiv('', 'wrapper');
			var link = createLink(character[i].guide);
				var border = createDiv('', 'border');
				if(character[i].rarity == 4)
					border.style.border = "5pt solid " + star4;
				else if(character[i].rarity == 3)
					border.style.border = "5pt solid " + star3;
				else if(character[i].rarity == 1)
					border.style.border = "5pt solid " + star1;   //es6 식으로 바꾸기 
					var image = createImage(character[i].picture, 'ch_img');
					var info = createDiv('', 'info');
						var attr = createImage(character[i].attr, 'attr');
						var weapon = createImage(character[i].weapon, 'weapon');
						var tactic = createImage(character[i].tactic, 'tactic');
			var wrapper_text = createDiv(character[i].class + "<br>" + character[i].name, 'text');

		wrapper.appendChild(link);
			link.appendChild(border);
				border.appendChild(image);
				border.appendChild(info);
					info.appendChild(attr);
					info.appendChild(weapon);
					info.appendChild(tactic);
		wrapper.appendChild(wrapper_text);

		return wrapper;
	}

	function createEWeapon(i){
		var wrapper = createDiv('', 'wrapper');
			var link = createLink(getAddr(i)); //weapon db만들어야
				var border = createDiv('', 'border');
				if(weapons[i].rarity == 4)
					border.style.border = "5pt solid " + star4;
				else if(weapons[i].rarity == 3)
					border.style.border = "5pt solid " + star3;  //es6 식으로 바꾸기 
				else if(weapons[i].rarity == 2)
					border.style.border = "5pt solid " + star2;
				else
					border.style.border = "5pt solid gray";
					var image_border = createDiv('', 'weapon_img_border');					
					var image = createImage(getItemPicture(i), 'weapon_img');
					var info = createDiv('', 'weapon_info');
						var weapon = createImage(weapons[i].cat, 'weapon_cat');
			var wrapper_text = createDiv(weapons[i].name, 'text');

		wrapper.appendChild(link);
			link.appendChild(border);
				border.appendChild(image_border);
					image_border.appendChild(image);
				border.appendChild(info);
					info.appendChild(weapon);
		wrapper.appendChild(wrapper_text);


		if(i == 69)
			image.style.marginLeft = '-32px';
		else if(i == 82)
			image.style.marginLeft = '-34px';
		
		return wrapper;
	}

	function getItemPicture(i){
		var temp = weapon_pic_addr + weapons[i].picture + '.jpg';
		return temp;
	}

	function getAddr(i){
		var temp = weapon_guide_addr + weapons[i].guide;

		return temp;
	}

	function createDiv(str, cname){
		var div = document.createElement('div');
		div.innerHTML = str;
		div.className = cname;
		return div;
	}

	function createImage(address, cname){
		var temp = document.createElement('img');
		temp.src = address;
		temp.className = cname;
		return temp;
	}

	function createLink(address){
		var temp = document.createElement('a');

		if(address != ''){
			temp.href = address;
			temp.className = 'lightbox-link';
			temp.setAttribute('data-scrolling', 'true');
		}

		return temp;
	}
