		var contents = document.getElementsByClassName("contents");
		var category = document.getElementsByClassName("category");
		var btn = document.getElementsByClassName("btn");
		var elem_header = document.getElementsByClassName('header');

		var wrapper = [];
		var border = [];
		var wrapper_text = [];
		var textbox_class;
		var textbox_name;

		var cookie = [];

		function initChart(){ 	//init
			if(localStorage.getItem('chartCookie') != null){
				cookie = JSON.parse(localStorage.getItem('chartCookie')||"[]");
				for(let i in character){
					character[i].cookie = cookie[i];
				}
			}
			else{
				for(let i in character){
					cookie.push(0);
				}
			}

			createBanner();
			
			for(let i = 0; i < character.length; i++){
				createCharacter(i);		
			}

			for(let i = 0; i < btn.length; i++){
				createButton(i);
			}

			btn_status_init('attr_all');
			btn_status_init('weapon_all');
			btn_status_init('tactic_all');
			btn_status_init('show_all');
			btn_status_init('basic');

			createSearch();
		}

		function device_ctrl(){
			var pc_device = "win16|win32|win64|mac|macintel";
		    var this_device = navigator.platform;

			if ( this_device ) {
	 	        if ( pc_device.indexOf(navigator.platform.toLowerCase()) < 0 ) {
	 	        	// console.log('Mobile');
					document.getElementById("sidebar").style.width = '920px';

		            var temp = document.getElementsByClassName("optcat");
		            for(let i = 0; i < temp.length; i++){
						temp[i].style.float = 'left';
						temp[i].style.width = '900px';
						temp[i].style.marginBottom = '0px';
						temp[i].style.marginTop = '10px';
					}

					var erase_target = document.getElementsByClassName('lightbox-link');
					for (let i in erase_target){
						erase_target[i].removeAttribute("class");
					}

		        } else {
		            // console.log('PC');
		            document.body.style.width = '1170px';
		        }
	   		}
	   	}

		//나중에 4성, 3성 순으로 정리 하고 싶으면 contents[character[i].rank -1].appendChild(wrapper[i]);를 활용하여 배치하는 함수를 만들면 됨.
		function createCharacter(i){
			wrapper[i] = createDivId('', 'wrapper', character[i].class + ' ' +character[i].name);				
				border[i] = createDiv('', 'border');
				if(character[i].rarity == 4)
					border[i].style.border = "5pt solid " + star4;
				else if(character[i].rarity == 3)
					border[i].style.border = "5pt solid " + star3;
				else if(character[i].rarity == 1)
					border[i].style.border = "5pt solid " + star1;
					var image = createImage(character[i].picture, 'ch_img');
					var box_opacity = createDivId('', 'box_opacity', 'ch'+ String(i));
						box_opacity.style.opacity = character[i].appear;
						box_opacity.addEventListener("click", ch_btn_listener);
					var info = createDiv('', 'info');
						var attr = createImage(character[i].attr, 'attr');
						var weapon = createImage(character[i].weapon, 'weapon');
						var tactic = createImage(character[i].tactic, 'tactic');
			var link = createLink(character[i].guide, 'lightbox-link');
				wrapper_text[i] = createDiv(character[i].class + "<br>" + character[i].name, 'text');
			
			contents[character[i].rank - 1].appendChild(wrapper[i]);
			wrapper[i].appendChild(border[i]);
				border[i].appendChild(image);
				border[i].appendChild(info);
					info.appendChild(attr);
					info.appendChild(weapon);
					info.appendChild(tactic);
				border[i].appendChild(box_opacity);
			wrapper[i].appendChild(link);
				link.appendChild(wrapper_text[i]);

			if(character[i].cookie == 1){
				wrapper[i].style.border = '5px dashed #4CAF50';
				wrapper[i].style.marginRight = '6px';
				wrapper[i].style.marginBottom = '10px';
				wrapper[i].style.marginLeft = '-5px';
				wrapper[i].style.marginTop = '-5px';
			}
		}

		function createBanner(){
			var banner = ['url(resource/banner1.jpg)', 'url(resource/banner2.jpg)', 'url(resource/banner3.jpg)', 'url(resource/banner4.jpg)', 'url(resource/banner5.jpg)', 'url(resource/banner1.jpg)'];
			var text_temp = ['SS랭크', 'S랭크', 'A랭크', 'B랭크', 'C랭크', '신규'];
			var banner_opacity = [];
			var banner_text = [];

			for(let i = 0; i < text_temp.length; i++){
				banner_text[i] = createDiv(text_temp[i], 'banner_text');
				banner_opacity[i] = createDiv('', 'banner_opacity');

				elem_header[i].style.backgroundImage = banner[i];

				elem_header[i].appendChild(banner_text[i]);
				elem_header[i].appendChild(banner_opacity[i]);
			}
		}

		function createButton(i){
			var opt_image = [machine, life, spirit, quarantine, erode, opt_pic, pistol, assault, shotgun, sniper, heavy, opt_pic, power, onset,support, heal, defense, opt_pic, "https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/f127d8f997c5cf3ebf32e1aba58119a0.jpg", 
		"https://image.boom-app.wiki/wiki/5cebb950b1b4b83bc835b7e8/e847aa4085e52536646c3e04b90fbd65.jpg", 
		opt_pic, opt_pic, opt_pic, opt_pic, opt_pic, opt_pic, opt_pic];
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

		function createDivId(str, cname, idname){
			var div = document.createElement('div');
			div.innerHTML = str;
			div.className = cname;
			div.id = idname;
			return div;
		}

		function createLink(address, cname){
			var temp = document.createElement('a');
			temp.href = address;
			temp.className = cname;
			temp.setAttribute('data-scrolling', 'true');
			// temp.setAttribute('data-padding-bottom', '700px');
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
		var opt_tactic = 'all';
		var opt_use = 'basic';
		var opt_show = 'all';

		var btn_attr = 'attr_all'
		var btn_weapon = 'weapon_all'
		var btn_tactic = 'tactic_all'
		var btn_use = 'basic';
		var btn_show = 'show_all';

		var old_attr = 'attr_all'
		var old_weapon = 'weapon_all'
		var old_tactic = 'tactic_all'
		var old_use = 'basic';
		var old_show = 'show_all';

		var txt_class = '';
		var txt_name = '';
		var cur_index;
		var old_index = [];

		function btn_listener(event){
			old_show = btn_show;
			old_attr = btn_attr;
			old_weapon = btn_weapon;
			old_tactic = btn_tactic;
			old_use = btn_use;

			switch(event.target.id){ 
				case 'reset' : 
					opt_show = 'all'; 
					opt_weapon = 'all'; 
					opt_attr = 'all'; 
					opt_tactic = 'all';
					opt_use = 'basic'; 

					btn_attr = 'attr_all'
					btn_weapon = 'weapon_all'
					btn_tactic = 'tactic_all'
					btn_use = 'basic';
					btn_show = 'show_all';

					textbox_class.value = '';
					textbox_name.value = '';
					txt_name = '';
					txt_class = '';
					eventSearch();
					// localStorage.clear();
					// console.log('localStorage clear');
					break;			 
				case 'show_on' : opt_show = on;  btn_show = event.target.id; break; 
				case 'show_all' : opt_show = 'all';  btn_show = event.target.id; break; 
				case 'machine': opt_attr = machine;  btn_attr = event.target.id; break; 
				case 'life': opt_attr = life;  btn_attr = event.target.id; break; 
				case 'spirit': opt_attr = spirit;  btn_attr = event.target.id; break; 
				case 'quarantine': opt_attr = quarantine;  btn_attr = event.target.id; break; 
				case 'erode': opt_attr = erode;  btn_attr = event.target.id; break; 
				case 'attr_all': opt_attr = 'all';  btn_attr = event.target.id; break; 
				case 'pistol': opt_weapon = pistol;  btn_weapon = event.target.id; break; 
				case 'assault': opt_weapon = assault;  btn_weapon = event.target.id; break; 
				case 'shotgun': opt_weapon = shotgun;  btn_weapon = event.target.id; break; 
				case 'sniper': opt_weapon = sniper;  btn_weapon = event.target.id; break; 
				case 'heavy': opt_weapon = heavy;  btn_weapon = event.target.id; break; 
				case 'weapon_all': opt_weapon = 'all';  btn_weapon = event.target.id; break; 
				case 'power': opt_tactic = power;  btn_tactic = event.target.id; break; 
				case 'onset': opt_tactic = onset;  btn_tactic = event.target.id; break; 
				case 'support': opt_tactic = support;  btn_tactic = event.target.id; break; 
				case 'heal': opt_tactic = heal;  btn_tactic = event.target.id; break; 
				case 'defense': opt_tactic = defense;  btn_tactic = event.target.id; break; 
				case 'tactic_all': opt_tactic = 'all';  btn_tactic = event.target.id; break; 
				case 'quick': opt_use = 'quick';  btn_use = event.target.id; break; 
				case 'survival': opt_use = 'survival';  btn_use = event.target.id; break; 
				case 'damage': opt_use = 'damage';  btn_use = event.target.id; break; 
				case 'basic': opt_use = 'basic';  btn_use = event.target.id; break;
				case 'save': localStorage.setItem('chartCookie', JSON.stringify(cookie)); break;
			}
			character_view(opt_attr, opt_weapon, opt_tactic, opt_use, opt_show); 
			btn_view(btn_attr, btn_weapon, btn_tactic, btn_use, btn_show); 
		}

		function character_view(attr, weapon, tactic, use, show){
			for(let i in character){
				switch(use){
					case 'quick': list_by_quick(i); $(category[0]).show(); $(category[5]).hide(); break;
					case 'survival': list_by_survival(i); $(category[0]).hide(); $(category[5]).hide(); break;
					case 'damage': list_by_dmg(i); $(category[0]).hide(); $(category[5]).hide(); break;
					case 'basic': list_by_basic(i); $(category[0]).show(); $(category[5]).show(); break;
				}

				if(show == 'all'){
					if((character[i].attr == attr || attr == 'all') && (character[i].weapon == weapon || weapon == 'all') && (character[i].tactic == tactic || tactic == 'all') && character[i].selected == 1){
						$(wrapper[i]).show();
					}
					else
						$(wrapper[i]).hide();
				}
				else if(show == on){
					if((character[i].attr == attr || attr == 'all') && (character[i].weapon == weapon || weapon == 'all') && (character[i].tactic == tactic || tactic == 'all') && character[i].appear == on && character[i].selected == 1){
						$(wrapper[i]).show();
					}
					else
						$(wrapper[i]).hide();
				}
			}
		}

		function btn_view(attr, weapon, tactic, use, show){			
			btn_status_remove(old_show);
			btn_status_remove(old_attr);
			btn_status_remove(old_weapon);
			btn_status_remove(old_tactic);
			btn_status_remove(old_use);
			btn_status_init(show);
			btn_status_init(attr);
			btn_status_init(weapon);
			btn_status_init(tactic);
			btn_status_init(use);	
		}

		function btn_status_init(btn_id){
			var temp = document.getElementById(btn_id);
			temp.style.backgroundColor = '#4CAF50';
			temp.style.color = 'black';
		}

		function btn_status_remove(btn_id){
			var temp = document.getElementById(btn_id);
			temp.style.removeProperty("background-color");
			temp.style.removeProperty("color");
		}

		function list_by_quick(i){
			if(character[i].quick == 0 && character[i].quick_s == 0)
				character[i].selected = 0;
			else if((character[i].quick < character[i].quick_s) && character[i].quick != 0){
				contents[character[i].quick - 1].appendChild(wrapper[i]);
				character[i].selected = 1;
			}
			else if((character[i].quick >= character[i].quick_s) && character[i].quick_s != 0){
				contents[character[i].quick_s - 1].appendChild(wrapper[i]);
				character[i].selected = 1;
			}
		}

		function list_by_dmg(i){ 		
			if(character[i].dmg != 0){
				contents[character[i].dmg-1].appendChild(wrapper[i]);	
				character[i].selected = 1;
			}
			else
				character[i].selected = 0;	
		}

		function list_by_survival(i){			
			if(character[i].survival != 0){
				contents[character[i].survival-1].appendChild(wrapper[i]);
				character[i].selected = 1;
			}
			else
				character[i].selected = 0;	
		}

		function list_by_basic(i){
			contents[character[i].rank - 1].appendChild(wrapper[i]);
			character[i].selected = 1;
		}


		function createSearch(){
			var par_elem = document.getElementById('search');

			textbox_class = document.createElement("INPUT");
			textbox_name = document.createElement("INPUT");

			textbox_class.setAttribute("type", "text");
			textbox_name.setAttribute("type", "text");
			textbox_class.className = 'textbox';
			textbox_name.className = 'textbox';

			textbox_class.placeholder = '종류(예: 전술장비)';
			textbox_name.placeholder = '이름(예: 유키)';
			textbox_class.size = 15;
			textbox_name.size = 15;

			textbox_class.addEventListener('input', (event) => {
				txt_class = textbox_class.value;
				eventSearch();
			});

			textbox_name.addEventListener('input', (event) => {
				txt_name = textbox_name.value;
				eventSearch();
			});

			par_elem.appendChild(textbox_class);
			par_elem.appendChild(textbox_name);
		}

		function eventSearch(){
			old_index = cur_index;

			cur_index = 
				txt_class != '' && txt_name != '' ? character.map((elm, idx) => elm.class == txt_class && elm.name == txt_name ? idx : '').filter(String) : 
				txt_class == '' ? character.map((elm, idx) => elm.name == txt_name ? idx : '').filter(String) :
				txt_name == '' ? character.map((elm, idx) => elm.class == txt_class ? idx : '').filter(String) : '';

			if(cur_index.length == 0){
				for(let i in old_index){
					wrapper_text[old_index[i]].style.removeProperty('background-color');
				}
			}
			else{
				for(let i in cur_index){
					wrapper_text[cur_index[i]].style.backgroundColor = 'yellow';
				}
			}
		}

		function ch_btn_listener(event){
			let temp = Number(event.target.id.replace('ch', ''));
			character[temp].cookie = character[temp].cookie == 0 ? 1 : 0; 
			cookie[temp] = character[temp].cookie;

			if(cookie[temp] == 0){
				wrapper[temp].style.removeProperty('border');
				wrapper[temp].style.removeProperty('margin-right');
				wrapper[temp].style.removeProperty('margin-bottom');
				wrapper[temp].style.removeProperty('margin-top');
				wrapper[temp].style.removeProperty('margin-left');
			}
			else{
				wrapper[temp].style.border = '5px dashed #4CAF50';
				wrapper[temp].style.marginRight = '6px';
				wrapper[temp].style.marginBottom = '10px';
				wrapper[temp].style.marginLeft = '-5px';
				wrapper[temp].style.marginTop = '-5px';
			}
		}