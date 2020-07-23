		var content = document.getElementsByClassName("content");
		var category = document.getElementsByClassName("category");
		var btn = document.getElementsByClassName("btn");
		var elem_header = document.getElementsByClassName('header');
		var wrapper = [];

		function create(i, j){
			wrapper[j] = createDiv('', 'wrapper');
			var link = createLink(character[j].guide);
			var border = createDiv('', 'border');
			if(character[j].rarity == 4)
				border.style.border = "5pt solid " + star4;
			else if(character[j].rarity == 3)
				border.style.border = "5pt solid " + star3;
			else if(character[j].rarity == 1)
				border.style.border = "5pt solid " + star1;
			var image = createImage(character[j].picture, 'ch_img');
			var box_opacity = createDiv('', 'box_opacity');
			box_opacity.style.opacity = character[j].appear;
			var info = createDiv('', 'info');
			var attr = createImage(character[j].attr, 'attr');
			var weapon = createImage(character[j].weapon, 'weapon');
			var tactic = createImage(character[j].tactic, 'tactic');
			var text = createDiv(character[j].class + "<br>" + character[j].name, 'text');
			
			content[i].appendChild(wrapper[j]);
			wrapper[j].appendChild(link);
				link.appendChild(border);
					border.appendChild(image);
					border.appendChild(box_opacity);
					border.appendChild(info);
						info.appendChild(attr);
						info.appendChild(weapon);
						info.appendChild(tactic);
			wrapper[j].appendChild(text);
		}

		function createBanner(){
			const banner = ['url(banner1.jpg)', 'url(banner2.jpg)', 'url(banner3.jpg)', 'url(banner4.jpg)', 'url(banner5.jpg)'];
			const text = ['SS랭크', 'S랭크', 'A랭크', 'B랭크', 'C랭크'];
			var banner_opacity = [];
			var banner_text = [];

			for(var i = 0; i < 5; i++){
				banner_text[i] = createDiv(text[i], 'banner_text');
				banner_opacity[i] = createDiv('', 'banner_opacity');

				elem_header[i].style.backgroundImage = banner[i];

				elem_header[i].appendChild(banner_text[i]);
				elem_header[i].appendChild(banner_opacity[i]);
			}
		}

		function createButton(i){
			var opt_image = [machine, life, spirit, quarantine, erode, opt_pic, pistol, assault, shotgun, sniper, heavy, opt_pic, power, onset,support, heal, defense, opt_pic, "https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/f127d8f997c5cf3ebf32e1aba58119a0.jpg", 
		"https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/e847aa4085e52536646c3e04b90fbd65.jpg", 
		opt_pic, opt_pic, opt_pic, opt_pic, opt_pic];
			var btn_image = [];

			btn[i].addEventListener("click", btn_listener);
			btn_image[i] = createImage(opt_image[i], 'btn_picture');
			btn[i].insertBefore(btn_image[i], btn[i].firstChild);
			
			var temp = createSpan('blob-btn__inner');
			btn[i].appendChild(temp);
			var temp1 = createSpan('blob-btn__blobs');
			temp.appendChild(temp1);
			for(var j = 0; j < 4; j++){
				var temp = createSpan('blob-btn__blob');
				temp1.appendChild(temp);
			}

			btn[5].style.backgroundColor = '#4CAF50';
			btn[5].style.color = 'black';
			btn[11].style.backgroundColor = '#4CAF50';
			btn[11].style.color = 'black';
			btn[17].style.backgroundColor = '#4CAF50';
			btn[17].style.color = 'black';
			btn[18].style.backgroundColor = '#4CAF50';
			btn[18].style.color = 'black';
			btn[24].style.backgroundColor = '#4CAF50';
			btn[24].style.color = 'black';
		}

		function createSpan(cname){
			var temp = document.createElement('span');
			temp.className = cname;
			return temp;
		}

		function createDiv(str, cname){
			var div = document.createElement('div');
			div.innerHTML = str;
			div.className = cname;
			return div;
		}

		function createLink(address){
			var temp = document.createElement('a');
			temp.href = address;
			return temp;
		}

		function createImage(address, cname){
			var temp = document.createElement('img');
			temp.src = address;
			temp.className = cname;
			return temp;
		}

		var opt_attr = 'all';
		var opt_weapon = 'all';
		var opt_appear = 'all';
		var opt_tactic = 'all';
		var opt_use = 'basic';
		var btn_attr = 5;
		var btn_weapon = 5;
		var btn_tactic = 5;
		var btn_use = 3;
		var old_attr = 5;
		var old_weapon = 5;
		var old_tactic = 5;
		var old_use = 3;

		function btn_listener(event){
			old_attr = btn_attr;
			old_weapon = btn_weapon;
			old_tactic = btn_tactic;
			old_use = btn_use;

			switch(event.target.id){ 
				case 'reset' : 
					opt_appear = 'all'; 
					opt_weapon = 'all'; 
					opt_attr = 'all'; 
					opt_tactic = 'all';
					opt_use = 'basic'; 
					btn_attr = 5; 
					btn_weapon = 5;
					btn_tactic = 5; 
					btn_use = 3;  
					if(old_use != 'basic')
						list_by_basic();
					break;			 
				case 'show_on' : 
					opt_appear = on;
					break; 
				case 'show_all' : 
					opt_appear = 'all';
					break; 
				case 'machine':
					opt_attr = machine; 
					btn_attr = 0; 
					break; 
				case 'life': 
					opt_attr = life; 
					btn_attr = 1;
					break; 
				case 'spirit': 
					opt_attr = spirit;
					btn_attr = 2; 
					break; 
				case 'quarantine': 
					opt_attr = quarantine; 
					btn_attr = 3; 
					break; 
				case 'erode':
					opt_attr = erode; 
					btn_attr = 4; 
					break; 
				case 'attr_all': 
					opt_attr = 'all';
					btn_attr = 5;
					break; 
				case 'pistol':
					opt_weapon = pistol; 
					btn_weapon = 0;
					break; 
				case 'assault':
					opt_weapon = assault; 
					btn_weapon = 1; 
					break; 
				case 'shotgun': 
					opt_weapon = shotgun; 
					btn_weapon = 2; 
					break; 
				case 'sniper':
					opt_weapon = sniper; 
					btn_weapon = 3; 
					break; 
				case 'heavy': 
					opt_weapon = heavy;
					btn_weapon = 4; 
					break; 
				case 'weapon_all': 
					opt_weapon = 'all'; 
					btn_weapon = 5;
					break; 
				case 'power': 
					opt_tactic = power; 
					btn_tactic = 0; 
					break; 
				case 'onset':
					opt_tactic = onset; 
					btn_tactic = 1; 
					break; 
				case 'support': 
					opt_tactic = support; 
					btn_tactic = 2; 
					break; 
				case 'heal': 
					opt_tactic = heal; 
					btn_tactic = 3; 
					break; 
				case 'defense': 
					opt_tactic = defense; 
					btn_tactic = 4; 
					break; 
				case 'tactic_all': 
					opt_tactic = 'all'; 
					btn_tactic = 5; 
					break; 
				case 'quick': 
					opt_use = 'quick';
					btn_use = 0; 
					list_by_quick();
					break; 
				case 'survival': 
					opt_use = 'survival';
					btn_use = 1;
					list_by_survival();
					break; 
				case 'damage': 
					opt_use = 'damage';
					btn_use = 2; 
					list_by_dmg();
					break; 
				case 'basic':
					opt_use = 'basic';
					btn_use = 3;
					list_by_basic();
					break; 
			}
			btn_view(opt_attr, opt_weapon, opt_tactic, opt_use); 
			btn_status(btn_attr, btn_weapon, btn_tactic, btn_use); 
		}


		function btn_view(attr, weapon, tactic, use){
			for(var i in character){
				if(opt_appear == 'all'){
					if((character[i].attr == attr || attr == 'all') && (character[i].weapon == weapon || weapon == 'all') && (character[i].tactic == tactic || tactic == 'all') && character[i].selected == 1){
						$(wrapper[i]).show();
					}
					else
						$(wrapper[i]).hide();
				}
				else if(opt_appear == on){
					if((character[i].attr == attr || attr == 'all') && (character[i].weapon == weapon || weapon == 'all') && (character[i].tactic == tactic || tactic == 'all') && character[i].appear == on && character[i].selected == 1){
						$(wrapper[i]).show();
					}
					else
						$(wrapper[i]).hide();
				}
			}

			if(use == 'quick' || use == 'basic')
				$(category[0]).show();
			else
				$(category[0]).hide();
		}

		function btn_status(attr, weapon, tactic, use){
			
			if(opt_appear == on){
				btn[18].style.removeProperty("background-color");
				btn[18].style.removeProperty("color");
				btn[19].style.backgroundColor = '#4CAF50';
				btn[19].style.color = 'black';
			}
			else{
				btn[18].style.backgroundColor = '#4CAF50';
				btn[18].style.color = 'black';
				btn[19].style.removeProperty("background-color");
				btn[19].style.removeProperty("color");
			}
			
			if(attr != old_attr){
				for(var i = 0; i < 6; i++){
					btn[i].style.removeProperty("background-color");
					btn[i].style.removeProperty("color");
				}
				btn[attr].style.backgroundColor = '#4CAF50';
				btn[attr].style.color = 'black';
			}

			if(weapon != old_weapon){
				for(var i = 6; i < 12; i++){
					btn[i].style.removeProperty("background-color");
					btn[i].style.removeProperty("color");
				}
				btn[weapon+6].style.backgroundColor = '#4CAF50';
				btn[weapon+6].style.color = 'black';
			}

			if(tactic != old_tactic){
				for(var i = 12; i < 18; i++){
					btn[i].style.removeProperty("background-color");
					btn[i].style.removeProperty("color");
				}
				btn[tactic+12].style.backgroundColor = '#4CAF50';
				btn[tactic+12].style.color = 'black';
			}

			if(use != old_use){
				for(var i = 21; i < 25; i++){
					btn[i].style.removeProperty("background-color");
					btn[i].style.removeProperty("color");
				}
				btn[use+21].style.backgroundColor = '#4CAF50';
				btn[use+21].style.color = 'black';
			}			
		}

		function list_by_quick(){
			for(var i in character){
				if(character[i].quick == 0 && character[i].quick_s == 0)
					character[i].selected = 0;
				else if((character[i].quick < character[i].quick_s) && character[i].quick != 0){
					content[character[i].quick - 1].appendChild(wrapper[i]);
					character[i].selected = 1;
				}
				else if((character[i].quick >= character[i].quick_s) && character[i].quick_s != 0){
					content[character[i].quick_s - 1].appendChild(wrapper[i]);
					character[i].selected = 1;
				}
			}	
		}

		function list_by_dmg(){
			for(let i = 0; i < 5; i++){
				for(let j in character){
					if(character[j].dmg == i+1){
						content[i].appendChild(wrapper[j]);
					}
					else if(character[j].dmg == null){
						content[4].appendChild(wrapper[j]);
					}
				}
			}			
			for(var i in character){
				if(character[i].dmg != 0){
					content[character[i].dmg - 1].appendChild(wrapper[i]);
					character[i].selected = 1;
				}
				else
					character[i].selected = 0;
			}
		}

		function list_by_survival(){			
			for(var i in character){
				if(character[i].survival != 0){
					content[character[i].survival - 1].appendChild(wrapper[i]);
					character[i].selected = 1;
				}
				else
					character[i].selected = 0;
			}
		}

		function list_by_basic(){
			for(var j = 0; j < 5; j++){
				for(var i in character){
					if(character[i].rank == j+1){
						content[j].appendChild(wrapper[i]);
						character[i].selected = 1;
					}
				}
			}
		}		