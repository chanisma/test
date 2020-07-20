		var content = document.getElementsByClassName("content");
		var btn = document.getElementsByClassName("btn");
		var wrapper = [];
		var link = [];
		var border = [];
		var image = [];
		var box_opacity = [];
		var info = [];
		var attr = [];
		var weapon = [];
		var tactic = [];
		var text = [];

		var opt_image = [machine, life, spirit, quarantine, erode, opt_pic, pistol, assault, shotgun, sniper, heavy, opt_pic, power, onset,support, heal, defense, opt_pic, "https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/f127d8f997c5cf3ebf32e1aba58119a0.jpg", 
		"https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/e847aa4085e52536646c3e04b90fbd65.jpg", 
		opt_pic,];


		function create(j){
			wrapper[j] = createDiv('', 'wrapper');
			link[j] = createLink(character[j].guide);
			border[j] = createDiv('', 'border');
			if(character[j].rarity == 4)
				border[j].style.border = "5pt solid " + star4;
			else if(character[j].rarity == 3)
				border[j].style.border = "5pt solid " + star3;
			image[j] = createImage(character[j].picture, 'ch_img');
			box_opacity[j] = createDiv('', 'box_opacity');
			box_opacity[j].style.opacity = character[j].appear;
			info[j] = createDiv('', 'info');
			attr[j] = createImage(character[j].attr, 'attr');
			weapon[j] = createImage(character[j].weapon, 'weapon');
			tactic[j] = createImage(character[j].tactic, 'tactic');
			text[j] = createDiv(character[j].class + "<br>" + character[j].name, 'text');
			
			content[i].appendChild(wrapper[j]);
			wrapper[j].appendChild(link[j]);
				link[j].appendChild(border[j]);
					border[j].appendChild(image[j]);
					border[j].appendChild(box_opacity[j]);
					border[j].appendChild(info[j]);
						info[j].appendChild(attr[j]);
						info[j].appendChild(weapon[j]);
						info[j].appendChild(tactic[j]);
			wrapper[j].appendChild(text[j]);
		}

		function createButton(i){
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
		};

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
		var btn_attr = 5;
		var btn_weapon = 5;
		var btn_tactic = 5;
		var old_attr = 5;
		var old_weapon = 5;
		var old_tactic = 5;


		function btn_listener(event){
			old_attr = btn_attr;
			old_weapon = btn_weapon;
			old_tactic = btn_tactic;

			switch(event.target.id){
				case 'reset' :
					opt_appear = 'all';
					opt_weapon = 'all';
					opt_attr = 'all';
					opt_tactic = 'all';
					btn_attr = 5;
					btn_weapon = 5;
					btn_tactic = 5;
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
			}
			btn_control(opt_attr, opt_weapon, opt_tactic);
			btn_status(btn_attr, btn_weapon, btn_tactic);
		}

		function btn_control(attr, weapon, tactic){
			for(var i in character){
				if(opt_appear == 'all'){
					if((character[i].attr == attr || attr == 'all') && (character[i].weapon == weapon || weapon == 'all') && (character[i].tactic == tactic || tactic == 'all')){
						$(wrapper[i]).show("normal");
					}
					else
						$(wrapper[i]).hide("normal");
				}
				else if(opt_appear == on){
					if((character[i].attr == attr || attr == 'all') && (character[i].weapon == weapon || weapon == 'all') && (character[i].tactic == tactic || tactic == 'all') && character[i].appear == on){
						$(wrapper[i]).show("normal");
					}
					else
						$(wrapper[i]).hide("normal");
				}
			}
		}

		function btn_status(attr, weapon, tactic){
			
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
		}