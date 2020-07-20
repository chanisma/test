		var content = document.getElementsByClassName("content");
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
			var image = ["https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/f127d8f997c5cf3ebf32e1aba58119a0.jpg", "https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/e847aa4085e52536646c3e04b90fbd65.jpg", machine, life, spirit, quarantine, erode, opt_pic, pistol, assault, shotgun, sniper, heavy, opt_pic];
			var btn_image = [];

			btn[i].addEventListener("click", btn_listener);
			btn_image[i] = createImage(image[i], 'btn_picture');
			btn[i].insertBefore(btn_image[i], btn[i].firstChild);
			
			var temp = createSpan('blob-btn__inner');
			btn[i].appendChild(temp);
			var temp1 = createSpan('blob-btn__blobs');
			temp.appendChild(temp1);
			for(var j = 0; j < 4; j++){
				var temp = createSpan('blob-btn__blob');
				temp1.appendChild(temp);
			}
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

		function btn_listener(event){
			switch(event.target.id){
				case 'show_only_on' :
					opt_appear = on;
					for(var i in character){
						if (character[i].appear == off){
							$(wrapper[i]).hide("normal");
						}
					}
					break;
				case 'show_all' :
					opt_appear = 'all';
					opt_weapon = 'all';
					opt_attr = 'all'
					for(var i in character){
						$(wrapper[i]).show("normal");
					}
					break;
				case 'machine_only':
					opt_attr = machine;
					break;
				case 'life_only':
					opt_attr = life;
					break;
				case 'spirit_only':
					opt_attr = spirit;
					break;
				case 'quarantine_only':
					opt_attr = quarantine;
					break;
				case 'erode_only':
					opt_attr = erode;
					break;
				case 'attr_all':
					opt_attr = 'all';
					break;
				case 'pistol_only':
					opt_weapon = pistol;
					break;
				case 'assault_only':
					opt_weapon = assault;
					break;
				case 'shotgun_only':
					opt_weapon = shotgun;
					break;
				case 'sniper_only':
					opt_weapon = sniper;
					break;
				case 'heavy_only':
					opt_weapon = heavy;
					break;
				case 'weapon_all':
					opt_weapon = 'all';
					break;
			}
			btn_control(opt_attr, opt_weapon);
		}

		function btn_control(attr, weapon){
			for(var i in character){
				if(opt_appear == 'all'){
					if((character[i].attr == attr || attr == 'all') && (character[i].weapon == weapon || weapon == 'all')){
						$(wrapper[i]).show("normal");
					}
					else
						$(wrapper[i]).hide("normal");
				}
				else if(opt_appear == on){
					if((character[i].attr == attr || attr == 'all') && (character[i].weapon == weapon || weapon == 'all') && character[i].appear == on){
						$(wrapper[i]).show("normal");
					}
					else
						$(wrapper[i]).hide("normal");
				}
			}
		}