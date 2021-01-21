$(document).ready(function () {
	$("#info-alert").tooltip({
		placement: "auto",
		trigger: "focus",
		title: "Типы оповещения <br>1 тип: Звуковой (сирена, тонированный сигнал и др.);<br>2 тип: Звуковой (сирена, тонированный сигнал и др.) + световые оповещатели 'Выход' <br>3 тип: Речевой (передача специальных текстов) + световые оповещатели 'Выход' <br>4 тип:  Речевой (передача специальных текстов) + световые оповещатели 'Выход'+ эвакуационные знаки пожарной безопасности, указывающие направление движения+ Разделение здания на зоны пожарного оповещения + Обратная связь зон пожарного оповещения с помещением пожарного поста-диспетчерской <br>5 тип: Речевой (передача специальных текстов) + световые оповещатели 'Выход'+ световые оповещатели, указывающие направление движения людей, с изменяющимся смысловым значением + Разделение здания на зоны пожарного оповещения + Обратная связь зон пожарного оповещения с помещением пожарного поста-диспетчерской + Возможность реализации нескольких вариантов эвакуации из каждой зоны пожарного оповещения + Координированное управление из одного пожарного поста-диспетчерской всеми системами здания, связанными с обеспечением безопасности людей при пожаре. Если вы хотите определить какой тип должен быть у ВАС на объекте воспользуйтесь <a href='/free/soye/' target =_blank>сервисом</a>"
	});
	$("#info-mgn").tooltip({
		placement: "auto",
		trigger: "focus",
		title: "маломобильные группы населения (МГН): <!--<img class='d-block m-1 mx-auto' src='123.png'>--> Люди, испытывающие затруднения при самостоятельном передвижении, получении услуги, необходимой информации или при ориентировании в пространстве. К маломобильным группам населения здесь отнесены: инвалиды, люди с временным нарушением здоровья, беременные женщины, люди преклонного возраста, люди с детскими колясками и т.п."
	});
	$("#info-floor").tooltip({
		placement: "right",
		trigger: "focus",
		title: "включая подвальный этаж, при условии если там имеются рабочие места"
	});
	$('#building-class').change(function () {
		var label = $("#building-class").val();
		if (label == 1) {
			$('#1').css('display', 'block');
			$('#2').css('display', 'block');
			$('#3').css('display', 'block');
			$('#4').css('display', 'block');
			$('#5').css('display', 'none');
			$('#6').css('display', 'none');
			$('#7').css('display', 'none');
			$('#8').css('display', 'none');
			$('#9').css('display', 'block');
			$('#10').css('display', 'block');
			$('#21').css('display', 'none');
			$('#11').removeClass("d-block");
			$('#floor_5').css('display', 'none');
			$('#floor_6').css('display', 'none');
			$('#floor_7').css('display', 'none');
			$('#floor_8').css('display', 'none');
			$('#floor_9').css('display', 'none');
			$('#floor_10').css('display', 'none');
			$('#floor_11').css('display', 'none');
			$('#floor_12').css('display', 'none');
			$('#floor_13').css('display', 'none');
			$('#floor_14').css('display', 'none');
			$('#floor_15').css('display', 'none');
			$('#floor_16').css('display', 'none');
			$('#room_7').css('display', 'none');
			$('#room_8').css('display', 'none');
			$('#room_9').css('display', 'none');
			$('#room_10').css('display', 'none');
			$('#room_11').css('display', 'none');
			$('#room_12').css('display', 'none');
			$('#room_13').css('display', 'none');
			$('#room_14').css('display', 'none');
			$('#room_15').css('display', 'none');
			$('#room_16').css('display', 'none');
		} else if (label == 2) {
			$('#1').css('display', 'block');
			$('#2').css('display', 'block');
			$('#3').css('display', 'block');
			$('#4').css('display', 'none');
			$('#5').css('display', 'block');
			$('#6').css('display', 'none');
			$('#7').css('display', 'none');
			$('#8').css('display', 'none');
			$('#9').css('display', 'block');
			$('#10').css('display', 'block');
			$('#21').css('display', 'none');
			$('#11').removeClass("d-block");
			$('#floor_5').css('display', 'block');
			$('#floor_6').css('display', 'block');
			$('#floor_7').css('display', 'block');
			$('#floor_8').css('display', 'block');
			$('#floor_9').css('display', 'block');
			$('#floor_10').css('display', 'block');
			$('#floor_11').css('display', 'block');
			$('#floor_12').css('display', 'none');
			$('#floor_13').css('display', 'none');
			$('#floor_14').css('display', 'none');
			$('#floor_15').css('display', 'none');
			$('floor_16').css('display', 'none');
			$('#room_7').css('display', 'block');
			$('#room_8').css('display', 'block');
			$('#room_9').css('display', 'block');
			$('#room_10').css('display', 'block');
			$('#room_11').css('display', 'block');
			$('#room_12').css('display', 'none');
			$('#room_13').css('display', 'none');
			$('#room_14').css('display', 'none');
			$('#room_15').css('display', 'none');
			$('#room_16').css('display', 'none');
		} else if (label == 3 || label == 7 || label == 10 || label == 11 || label == 12 || label == 13 || label == 15 || label == 16 || label == 17 || label == 18 || label == 20) {
			$('#1').css('display', 'block');
			$('#2').css('display', 'block');
			$('#3').css('display', 'block');
			$('#4').css('display', 'block');
			$('#5').css('display', 'none');
			$('#6').css('display', 'none');
			$('#7').css('display', 'none');
			$('#8').css('display', 'none');
			$('#9').css('display', 'block');
			$('#10').css('display', 'block');
			$('#21').css('display', 'none');
			$('#11').removeClass("d-block");
			$('#floor_5').css('display', 'block');
			$('#floor_6').css('display', 'block');
			$('#floor_7').css('display', 'block');
			$('#floor_8').css('display', 'block');
			$('#floor_9').css('display', 'block');
			$('#floor_10').css('display', 'block');
			$('#floor_11').css('display', 'block');
			$('#floor_12').css('display', 'block');
			$('#floor_13').css('display', 'block');
			$('#floor_14').css('display', 'block');
			$('#floor_15').css('display', 'block');
			$('#floor_16').css('display', 'block');
			$('#room_7').css('display', 'block');
			$('#room_8').css('display', 'block');
			$('#room_9').css('display', 'block');
			$('#room_10').css('display', 'block');
			$('#room_11').css('display', 'block');
			$('#room_12').css('display', 'block');
			$('#room_13').css('display', 'block');
			$('#room_14').css('display', 'block');
			$('#room_15').css('display', 'block');
			$('#room_16').css('display', 'block');
		} else if (label == 4 || label == 5) {
			$('#1').css('display', 'block');
			$('#2').css('display', 'none');
			$('#3').css('display', 'block');
			$('#4').css('display', 'none');
			$('#5').css('display', 'none');
			$('#6').css('display', 'none');
			$('#7').css('display', 'none');
			$('#8').css('display', 'none');
			$('#9').css('display', 'block');
			$('#10').css('display', 'block');
			$('#21').css('display', 'block');
			$('#11').removeClass("d-block");
			$('#floor_5').css('display', 'block');
			$('#floor_6').css('display', 'block');
			$('#floor_7').css('display', 'block');
			$('#floor_8').css('display', 'block');
			$('#floor_9').css('display', 'block');
			$('#floor_10').css('display', 'block');
			$('#floor_11').css('display', 'block');
			$('#floor_12').css('display', 'block');
			$('#floor_13').css('display', 'block');
			$('#floor_14').css('display', 'block');
			$('#floor_15').css('display', 'block');
			$('#floor_16').css('display', 'block');
			$('#room_7').css('display', 'block');
			$('#room_8').css('display', 'block');
			$('#room_9').css('display', 'block');
			$('#room_10').css('display', 'block');
			$('#room_11').css('display', 'block');
			$('#room_12').css('display', 'block');
			$('#room_13').css('display', 'block');
			$('#room_14').css('display', 'block');
			$('#room_15').css('display', 'block');
			$('#room_16').css('display', 'block');
		} else if (label == 6 || label == 9) {
			$('#1').css('display', 'block');
			$('#2').css('display', 'block');
			$('#3').css('display', 'block');
			$('#4').css('display', 'block');
			$('#5').css('display', 'none');
			$('#6').css('display', 'none');
			$('#7').css('display', 'none');
			$('#8').css('display', 'block');
			$('#9').css('display', 'block');
			$('#10').css('display', 'block');
			$('#21').css('display', 'none');
			$('#11').removeClass("d-block");
			$('#floor_5').css('display', 'block');
			$('#floor_6').css('display', 'block');
			$('#floor_7').css('display', 'block');
			$('#floor_8').css('display', 'block');
			$('#floor_9').css('display', 'block');
			$('#floor_10').css('display', 'block');
			$('#floor_11').css('display', 'block');
			$('#room_7').css('display', 'block');
			$('#room_8').css('display', 'block');
			$('#room_9').css('display', 'block');
			$('#room_10').css('display', 'block');
			$('#room_11').css('display', 'block');
			$('#room_12').css('display', 'block');
			$('#room_13').css('display', 'block');
			$('#room_14').css('display', 'block');
			$('#room_15').css('display', 'block');
			$('#room_16').css('display', 'block');
		} else if (label == 14) {
			$('#1').css('display', 'block');
			$('#2').css('display', 'block');
			$('#3').css('display', 'block');
			$('#4').css('display', 'block');
			$('#5').css('display', 'none');
			$('#6').css('display', 'none');
			$('#7').css('display', 'none');
			$('#8').css('display', 'none');
			$('#9').css('display', 'block');
			$('#10').css('display', 'block');
			$('#21').css('display', 'none');
			$('#11').removeClass("d-block");
			$('#floor_5').css('display', 'block');
			$('#floor_6').css('display', 'block');
			$('#floor_7').css('display', 'none');
			$('#floor_8').css('display', 'none');
			$('#floor_9').css('display', 'none');
			$('#floor_10').css('display', 'none');
			$('#floor_11').css('display', 'none');
			$('#floor_12').css('display', 'none');
			$('#floor_13').css('display', 'none');
			$('#floor_14').css('display', 'none');
			$('#floor_15').css('display', 'none');
			$('#floor_16').css('display', 'none');
		} else if (label == 8) {
			$('#1').css('display', 'block');
			$('#2').css('display', 'block');
			$('#3').css('display', 'block');
			$('#4').css('display', 'block');
			$('#5').css('display', 'none');
			$('#6').css('display', 'block');
			$('#7').css('display', 'none');
			$('#8').css('display', 'none');
			$('#9').css('display', 'block');
			$('#10').css('display', 'block');
			$('#21').css('display', 'none');
			$('#11').removeClass("d-block");
			$('#floor_5').css('display', 'block');
			$('#floor_6').css('display', 'block');
			$('#floor_7').css('display', 'block');
			$('#floor_8').css('display', 'block');
			$('#floor_9').css('display', 'block');
			$('#floor_10').css('display', 'block');
			$('#floor_11').css('display', 'block');
			$('#floor_12').css('display', 'block');
			$('#floor_13').css('display', 'block');
			$('#floor_14').css('display', 'block');
			$('#floor_15').css('display', 'block');
			$('#floor_16').css('display', 'block');
			$('#room_7').css('display', 'block');
			$('#room_8').css('display', 'block');
			$('#room_9').css('display', 'block');
			$('#room_10').css('display', 'block');
			$('#room_11').css('display', 'block');
			$('#room_12').css('display', 'block');
			$('#room_13').css('display', 'block');
			$('#room_14').css('display', 'block');
			$('#room_15').css('display', 'block');
			$('#room_16').css('display', 'block');
		} else if (label == 19 || label == 21 || label == 22) {
			$('#1').css('display', 'none');
			$('#2').css('display', 'none');
			$('#3').css('display', 'none');
			$('#4').css('display', 'none');
			$('#5').css('display', 'none');
			$('#6').css('display', 'none');
			$('#7').css('display', 'none');
			$('#8').css('display', 'none');
			$('#9').css('display', 'none');
			$('#10').css('display', 'none');
			$('#21').css('display', 'none');
			$('#11').addClass("d-block");
		}
	});

	$('select').change(function () {
		if ($('#calcul select:visible').length == $('#calcul select:visible option[value!=""]:selected').length) {
			$('#calculate').prop("disabled", false);
		} else {
			$('#calculate').prop("disabled", true);
		}
		if ($("#11").hasClass("d-block")) {
			$('#calculate').prop("disabled", true);
			$('.greenline-zmodel').text("-");
			$('.fenix').text("-");
			$('.sigma').text("-");
			$('.fire-cat').text("-");
		}
	});

	var expertSalary = 1500, //з-п эксперта
		zonka = 2,
		greenLine = 3,
		obcherchivanie = 5,
		costOfOneHour, //Стоимость одного часа
		alert, //Тип оповещения
		alertHouse, //Тип оповещения для Ф1.3 и Ф1.4
		roomRatio, //Количество помещений 
		numberOfPremises, //Количество помещений коэффициент 
		baseReport, //Базовый отчет(час)           
		expertPart, //Стоимость экспертной части 
		print, //Распечатка договора 
		primaryWork, //Стоимость первичной работы
		ipl, //ИПЛ
		floor, //Количество этажей
		room, //Количество помещений
		place, //Количество посадочных мест
		seatRatio, //Количество посадочных мест коэффициент
		square, //Площадь помещений
		squareRatio, //Площадь помещений коэффициент
		f, //Выбор Ф
		mgn, //Наличие МГН 
		stretcher, //Присутствие больных на носилках
		calculationСost, //Итого общая стоимость расчета (зонная модель)
		reportCost, //Стоимость оформления отчета
		sum, //Итоговая з-п, промежуточное значение Greenline+Zmodel
		fenix, //Итоговая з-п, промежуточное значение Fenix
		sigma, //Итоговая з-п, промежуточное значение Sigma 
		fireCat, //Итоговая з-п, промежуточное значение FireCat 
		finalSum, //Финальные значения в таблицу Greenline+Zmodel
		finalFenix, //Финальные значения в таблицу Fenix
		finalSigma, //Финальные значения в таблицу Sigma
		finalFireCat; //Финальные значения в таблицу FireCat       


	function calculate() {
		floor = $('#floor').val();
		f = $('#building-class').val();
		room = $('#room').val();
		mgn = $('#mgn').val();
		alert = $('#alert').val();
		print = $('#printOut').val();
		ipl = $('#ipl').val();
		stretcher = $('#stretcher').val();
		alertHouse = $('#alertHouse').val();
		place = $('#place').val();
		square = $('#square').val();

		if (f == '1' || f == '2') costOfOneHour = 400;
		else costOfOneHour = 300;
		if (print == 'printOut_1') print = 1500;
		else if (print == 'printOut_2') print = 0;
		if (f == '18' || f == '20') {
			if (ipl == 'ipl_1') ipl = 20000;
			else if (ipl == 'ipl_2') ipl = 0;
			reportCost = 450;
		} else {
			if (ipl == 'ipl_1') ipl = 15000;
			else if (ipl == 'ipl_2') ipl = 0;
			reportCost = 300;
		}
		if (f == '1') {
			if (alert == 'alert_1') {
				alert = 1.15;
			} else alert = 1;
			if (mgn == 'mgn_1') {
				mgn = 1.1
			} else mgn = 1;
			if (room == 'room_1') {
				roomRatio = 49;
			} else if (room == 'room_2') {
				roomRatio = 99;
			} else if (room == 'room_3') {
				roomRatio = 149;
			} else if (room == 'room_4') {
				roomRatio = 199;
			} else if (room == 'room_5') {
				roomRatio = 249;
			} else {
				roomRatio = 299;
			}
			if (floor == 'floor_1') {
				baseReport = 3;
				if (room == 'room_1') {
					numberOfPremises = 1;
				} else if (room == 'room_2') {
					numberOfPremises = 1.1;
				} else if (room == 'room_3') {
					numberOfPremises = 1.2;
				} else if (room == 'room_4') {
					numberOfPremises = 1.3;
				} else if (room == 'room_5') {
					numberOfPremises = 1.4;
				} else {
					numberOfPremises = 1.5;
				}
			} else if (floor == 'floor_2') {
				baseReport = 6;
				if (room == 'room_1') {
					numberOfPremises = 0.9;
				} else if (room == 'room_2') {
					numberOfPremises = 1;
				} else if (room == 'room_3') {
					numberOfPremises = 1.1;
				} else if (room == 'room_4') {
					numberOfPremises = 1.2;
				} else if (room == 'room_5') {
					numberOfPremises = 1.3;
				} else {
					numberOfPremises = 1.4;
				}
			} else if (floor == 'floor_3') {
				baseReport = 10;
				if (room == 'room_1') {
					numberOfPremises = 0.7;
				} else if (room == 'room_2') {
					numberOfPremises = 0.8;
				} else if (room == 'room_3') {
					numberOfPremises = 1;
				} else if (room == 'room_4') {
					numberOfPremises = 1.1;
				} else if (room == 'room_5') {
					numberOfPremises = 1.2;
				} else {
					numberOfPremises = 1.3;
				}
			} else {
				baseReport = 11;
				if (room == 'room_1') {
					numberOfPremises = 0.7;
				} else if (room == 'room_2') {
					numberOfPremises = 0.8;
				} else if (room == 'room_3') {
					numberOfPremises = 0.9;
				} else if (room == 'room_4') {
					numberOfPremises = 1;
				} else if (room == 'room_5') {
					numberOfPremises = 1.1;
				} else {
					numberOfPremises = 1.2;
				}
			}
			expertPart = baseReport * costOfOneHour * (alert + numberOfPremises + mgn - 2);
		}

		if (f == '2') {
			if (alert == 'alert_1') {
				alert = 1.15;
			} else alert = 1;
			if (stretcher == 'stretcher_1') {
				stretcher = 1.2
			} else stretcher = 1;
			if (room == 'room_1') {
				roomRatio = 49;
			} else if (room == 'room_2') {
				roomRatio = 99;
			} else if (room == 'room_3') {
				roomRatio = 149;
			} else if (room == 'room_4') {
				roomRatio = 199;
			} else if (room == 'room_5') {
				roomRatio = 249;
			} else if (room == 'room_6') {
				roomRatio = 299;
			} else if (room == 'room_7') {
				roomRatio = 349;
			} else if (room == 'room_8') {
				roomRatio = 399;
			} else if (room == 'room_9') {
				roomRatio = 449;
			} else if (room == 'room_10') {
				roomRatio = 499;
			} else if (room == 'room_11') {
				roomRatio = 549;
			}
			if (floor == 'floor_1') {
				baseReport = 2;
				if (room == 'room_1') {
					numberOfPremises = 1;
				} else if (room == 'room_2') {
					numberOfPremises = 1.1;
				} else if (room == 'room_3') {
					numberOfPremises = 1.2;
				} else if (room == 'room_4') {
					numberOfPremises = 1.3;
				} else if (room == 'room_5') {
					numberOfPremises = 1.4;
				} else if (room == 'room_6') {
					numberOfPremises = 1.5;
				} else if (room == 'room_7') {
					numberOfPremises = 1.6;
				} else if (room == 'room_8' || room == 'room_9' || room == 'room_10' || room == 'room_11') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_2') {
				baseReport = 4;
				if (room == 'room_1') {
					numberOfPremises = 0.9;
				} else if (room == 'room_2') {
					numberOfPremises = 1;
				} else if (room == 'room_3') {
					numberOfPremises = 1.1;
				} else if (room == 'room_4') {
					numberOfPremises = 1.2;
				} else if (room == 'room_5') {
					numberOfPremises = 1.3;
				} else if (room == 'room_6') {
					numberOfPremises = 1.4;
				} else if (room == 'room_7') {
					numberOfPremises = 1.5;
				} else if (room == 'room_8') {
					numberOfPremises = 1.6;
				} else if (room == 'room_9' || room == 'room_10' || room == 'room_11') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_3') {
				baseReport = 8;
				if (room == 'room_1') {
					numberOfPremises = 0.8;
				} else if (room == 'room_2') {
					numberOfPremises = 0.7;
				} else if (room == 'room_3') {
					numberOfPremises = 1;
				} else if (room == 'room_4') {
					numberOfPremises = 1.1;
				} else if (room == 'room_5') {
					numberOfPremises = 1.2;
				} else if (room == 'room_6') {
					numberOfPremises = 1.3;
				} else if (room == 'room_7') {
					numberOfPremises = 1.4;
				} else if (room == 'room_8') {
					numberOfPremises = 1.5;
				} else if (room == 'room_9') {
					numberOfPremises = 1.6;
				} else if (room == 'room_10' || room == 'room_11') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_4') {
				baseReport = 10;
				if (room == 'room_1') {
					numberOfPremises = 0.7;
				} else if (room == 'room_2') {
					numberOfPremises = 0.8;
				} else if (room == 'room_3') {
					numberOfPremises = 0.9;
				} else if (room == 'room_4') {
					numberOfPremises = 1;
				} else if (room == 'room_5') {
					numberOfPremises = 1.1;
				} else if (room == 'room_6') {
					numberOfPremises = 1.2;
				} else if (room == 'room_7') {
					numberOfPremises = 1.3;
				} else if (room == 'room_8') {
					numberOfPremises = 1.4;
				} else if (room == 'room_9') {
					numberOfPremises = 1.5;
				} else if (room == 'room_10') {
					numberOfPremises = 1.6;
				} else if (room == 'room_11') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_5') {
				baseReport = 10.5;
				if (room == 'room_1' || room == 'room_2') {
					numberOfPremises = 0.7;
				} else if (room == 'room_3') {
					numberOfPremises = 0.8;
				} else if (room == 'room_4') {
					numberOfPremises = 0.9;
				} else if (room == 'room_5') {
					numberOfPremises = 1;
				} else if (room == 'room_6') {
					numberOfPremises = 1.1;
				} else if (room == 'room_7') {
					numberOfPremises = 1.2;
				} else if (room == 'room_8') {
					numberOfPremises = 1.3;
				} else if (room == 'room_9') {
					numberOfPremises = 1.4;
				} else if (room == 'room_10') {
					numberOfPremises = 1.5;
				} else if (room == 'room_11') {
					numberOfPremises = 1.6;
				}
			} else if (floor == 'floor_6') {
				baseReport = 11;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3') {
					numberOfPremises = 0.7;
				} else if (room == 'room_4') {
					numberOfPremises = 0.8;
				} else if (room == 'room_5') {
					numberOfPremises = 0.9;
				} else if (room == 'room_6') {
					numberOfPremises = 1;
				} else if (room == 'room_7') {
					numberOfPremises = 1.1;
				} else if (room == 'room_8') {
					numberOfPremises = 1.2;
				} else if (room == 'room_9') {
					numberOfPremises = 1.3;
				} else if (room == 'room_10') {
					numberOfPremises = 1.4;
				} else if (room == 'room_11') {
					numberOfPremises = 1.5;
				}
			} else if (floor == 'floor_7') {
				baseReport = 11.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4') {
					numberOfPremises = 0.7;
				} else if (room == 'room_5') {
					numberOfPremises = 0.8;
				} else if (room == 'room_6') {
					numberOfPremises = 0.9;
				} else if (room == 'room_7') {
					numberOfPremises = 1;
				} else if (room == 'room_8') {
					numberOfPremises = 1.1;
				} else if (room == 'room_9') {
					numberOfPremises = 1.2;
				} else if (room == 'room_10') {
					numberOfPremises = 1.3;
				} else if (room == 'room_11') {
					numberOfPremises = 1.4;
				}
			} else if (floor == 'floor_8') {
				baseReport = 12;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5') {
					numberOfPremises = 0.7;
				} else if (room == 'room_6') {
					numberOfPremises = 0.8;
				} else if (room == 'room_7') {
					numberOfPremises = 0.9;
				} else if (room == 'room_8') {
					numberOfPremises = 1;
				} else if (room == 'room_9') {
					numberOfPremises = 1.1;
				} else if (room == 'room_10') {
					numberOfPremises = 1.2;
				} else if (room == 'room_11') {
					numberOfPremises = 1.3;
				}
			} else if (floor == 'floor_9') {
				baseReport = 12.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6') {
					numberOfPremises = 0.7;
				} else if (room == 'room_7') {
					numberOfPremises = 0.8;
				} else if (room == 'room_8') {
					numberOfPremises = 0.9;
				} else if (room == 'room_9') {
					numberOfPremises = 1;
				} else if (room == 'room_10') {
					numberOfPremises = 1.1;
				} else if (room == 'room_11') {
					numberOfPremises = 1.2;
				}
			} else if (floor == 'floor_10') {
				baseReport = 13;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7') {
					numberOfPremises = 0.7;
				} else if (room == 'room_8') {
					numberOfPremises = 0.8;
				} else if (room == 'room_9') {
					numberOfPremises = 0.9;
				} else if (room == 'room_10') {
					numberOfPremises = 1;
				} else if (room == 'room_11') {
					numberOfPremises = 1.1;
				}
			} else if (floor == 'floor_11') {
				baseReport = 13.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8') {
					numberOfPremises = 0.7;
				} else if (room == 'room_9') {
					numberOfPremises = 0.8;
				} else if (room == 'room_10') {
					numberOfPremises = 0.8;
				} else if (room == 'room_11') {
					numberOfPremises = 1;
				}
			}
			expertPart = baseReport * costOfOneHour * (alert + numberOfPremises + stretcher - 2);
			console.log(expertPart);
		}

		if (f == '3') {
			if (floor == 'floor_1') {
				baseReport = 1.5;
				if (room == 'room_1') {
					numberOfPremises = 1;
				} else if (room == 'room_2') {
					numberOfPremises = 1.1;
				} else if (room == 'room_3') {
					numberOfPremises = 1.2;
				} else if (room == 'room_4') {
					numberOfPremises = 1.3;
				} else if (room == 'room_5') {
					numberOfPremises = 1.4;
				} else if (room == 'room_6') {
					numberOfPremises = 1.5;
				} else if (room == 'room_7') {
					numberOfPremises = 1.6;
				} else if (room == 'room_8' || room == 'room_9' || room == 'room_10' || room == 'room_11' || room == 'room_12' || room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_2') {
				baseReport = 2;
				if (room == 'room_1') {
					numberOfPremises = 0.9;
				} else if (room == 'room_2') {
					numberOfPremises = 1;
				} else if (room == 'room_3') {
					numberOfPremises = 1.1;
				} else if (room == 'room_4') {
					numberOfPremises = 1.2;
				} else if (room == 'room_5') {
					numberOfPremises = 1.3;
				} else if (room == 'room_6') {
					numberOfPremises = 1.4;
				} else if (room == 'room_7') {
					numberOfPremises = 1.5;
				} else if (room == 'room_8') {
					numberOfPremises = 1.6;
				} else if (room == 'room_9' || room == 'room_10' || room == 'room_11' || room == 'room_12' || room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_3') {
				baseReport = 4;
				if (room == 'room_1') {
					numberOfPremises = 0.8;
				} else if (room == 'room_2') {
					numberOfPremises = 0.9;
				} else if (room == 'room_3') {
					numberOfPremises = 1;
				} else if (room == 'room_4') {
					numberOfPremises = 1.1;
				} else if (room == 'room_5') {
					numberOfPremises = 1.2;
				} else if (room == 'room_6') {
					numberOfPremises = 1.3;
				} else if (room == 'room_7') {
					numberOfPremises = 1.4;
				} else if (room == 'room_8') {
					numberOfPremises = 1.5;
				} else if (room == 'room_9') {
					numberOfPremises = 1.6;
				} else if (room == 'room_10' || room == 'room_11' || room == 'room_12' || room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_4') {
				baseReport = 5.5;
				if (room == 'room_1') {
					numberOfPremises = 0.7;
				} else if (room == 'room_2') {
					numberOfPremises = 0.8;
				} else if (room == 'room_3') {
					numberOfPremises = 0.9;
				} else if (room == 'room_4') {
					numberOfPremises = 1;
				} else if (room == 'room_5') {
					numberOfPremises = 1.1;
				} else if (room == 'room_6') {
					numberOfPremises = 1.2;
				} else if (room == 'room_7') {
					numberOfPremises = 1.3;
				} else if (room == 'room_8') {
					numberOfPremises = 1.4;
				} else if (room == 'room_9') {
					numberOfPremises = 1.5;
				} else if (room == 'room_10') {
					numberOfPremises = 1.6;
				} else if (room == 'room_11' || room == 'room_12' || room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_5') {
				baseReport = 6.5;
				if (room == 'room_1' || room == 'room_2') {
					numberOfPremises = 0.7;
				} else if (room == 'room_3') {
					numberOfPremises = 0.8;
				} else if (room == 'room_4') {
					numberOfPremises = 0.9;
				} else if (room == 'room_5') {
					numberOfPremises = 1;
				} else if (room == 'room_6') {
					numberOfPremises = 1.1;
				} else if (room == 'room_7') {
					numberOfPremises = 1.2;
				} else if (room == 'room_8') {
					numberOfPremises = 1.3;
				} else if (room == 'room_9') {
					numberOfPremises = 1.4;
				} else if (room == 'room_10') {
					numberOfPremises = 1.5;
				} else if (room == 'room_11') {
					numberOfPremises = 1.6;
				} else if (room == 'room_12' || room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_6') {
				baseReport = 7.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3') {
					numberOfPremises = 0.7;
				} else if (room == 'room_4') {
					numberOfPremises = 0.8;
				} else if (room == 'room_5') {
					numberOfPremises = 0.9;
				} else if (room == 'room_6') {
					numberOfPremises = 1;
				} else if (room == 'room_7') {
					numberOfPremises = 1.1;
				} else if (room == 'room_8') {
					numberOfPremises = 1.2;
				} else if (room == 'room_9') {
					numberOfPremises = 1.3;
				} else if (room == 'room_10') {
					numberOfPremises = 1.4;
				} else if (room == 'room_11') {
					numberOfPremises = 1.5;
				} else if (room == 'room_12') {
					numberOfPremises = 1.6;
				} else if (room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_7') {
				baseReport = 8;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4') {
					numberOfPremises = 0.7;
				} else if (room == 'room_5') {
					numberOfPremises = 0.8;
				} else if (room == 'room_6') {
					numberOfPremises = 0.9;
				} else if (room == 'room_7') {
					numberOfPremises = 1;
				} else if (room == 'room_8') {
					numberOfPremises = 1.1;
				} else if (room == 'room_9') {
					numberOfPremises = 1.2;
				} else if (room == 'room_10') {
					numberOfPremises = 1.3;
				} else if (room == 'room_11') {
					numberOfPremises = 1.4;
				} else if (room == 'room_12') {
					numberOfPremises = 1.5;
				} else if (room == 'room_13') {
					numberOfPremises = 1.6;
				} else if (room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_8') {
				baseReport = 8.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5') {
					numberOfPremises = 0.7;
				} else if (room == 'room_6') {
					numberOfPremises = 0.8;
				} else if (room == 'room_7') {
					numberOfPremises = 0.9;
				} else if (room == 'room_8') {
					numberOfPremises = 1;
				} else if (room == 'room_9') {
					numberOfPremises = 1.1;
				} else if (room == 'room_10') {
					numberOfPremises = 1.2;
				} else if (room == 'room_11') {
					numberOfPremises = 1.3;
				} else if (room == 'room_12') {
					numberOfPremises = 1.4;
				} else if (room == 'room_13') {
					numberOfPremises = 1.5;
				} else if (room == 'room_14') {
					numberOfPremises = 1.6;
				} else if (room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_9') {
				baseReport = 9;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6') {
					numberOfPremises = 0.7;
				} else if (room == 'room_7') {
					numberOfPremises = 0.8;
				} else if (room == 'room_8') {
					numberOfPremises = 0.9;
				} else if (room == 'room_9') {
					numberOfPremises = 1;
				} else if (room == 'room_10') {
					numberOfPremises = 1.1;
				} else if (room == 'room_11') {
					numberOfPremises = 1.2;
				} else if (room == 'room_12') {
					numberOfPremises = 1.3;
				} else if (room == 'room_13') {
					numberOfPremises = 1.4;
				} else if (room == 'room_14') {
					numberOfPremises = 1.5;
				} else if (room == 'room_15') {
					numberOfPremises = 1.6;
				} else if (room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_10') {
				baseReport = 9.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7') {
					numberOfPremises = 0.7;
				} else if (room == 'room_8') {
					numberOfPremises = 0.8;
				} else if (room == 'room_9') {
					numberOfPremises = 0.9;
				} else if (room == 'room_10') {
					numberOfPremises = 1;
				} else if (room == 'room_11') {
					numberOfPremises = 1.1;
				} else if (room == 'room_12') {
					numberOfPremises = 1.2;
				} else if (room == 'room_13') {
					numberOfPremises = 1.3;
				} else if (room == 'room_14') {
					numberOfPremises = 1.4;
				} else if (room == 'room_15') {
					numberOfPremises = 1.5;
				} else if (room == 'room_16') {
					numberOfPremises = 1.6;
				}
			} else if (floor == 'floor_11') {
				baseReport = 10;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8') {
					numberOfPremises = 0.7;
				} else if (room == 'room_9') {
					numberOfPremises = 0.8;
				} else if (room == 'room_10') {
					numberOfPremises = 0.9;
				} else if (room == 'room_11') {
					numberOfPremises = 1;
				} else if (room == 'room_12') {
					numberOfPremises = 1.1;
				} else if (room == 'room_13') {
					numberOfPremises = 1.2;
				} else if (room == 'room_14') {
					numberOfPremises = 1.3;
				} else if (room == 'room_15') {
					numberOfPremises = 1.4;
				} else if (room == 'room_16') {
					numberOfPremises = 1.5;
				}
			} else if (floor == 'floor_12') {
				baseReport = 10.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8' || room == 'room_9') {
					numberOfPremises = 0.7;
				} else if (room == 'room_10') {
					numberOfPremises = 0.8;
				} else if (room == 'room_11') {
					numberOfPremises = 0.9;
				} else if (room == 'room_12') {
					numberOfPremises = 1;
				} else if (room == 'room_13') {
					numberOfPremises = 1.1;
				} else if (room == 'room_14') {
					numberOfPremises = 1.2;
				} else if (room == 'room_15') {
					numberOfPremises = 1.3;
				} else if (room == 'room_16') {
					numberOfPremises = 1.4;
				}
			} else if (floor == 'floor_13') {
				baseReport = 11;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8' || room == 'room_9' || room == 'room_10') {
					numberOfPremises = 0.7;
				} else if (room == 'room_11') {
					numberOfPremises = 0.8;
				} else if (room == 'room_12') {
					numberOfPremises = 0.9;
				} else if (room == 'room_13') {
					numberOfPremises = 1;
				} else if (room == 'room_14') {
					numberOfPremises = 1.1;
				} else if (room == 'room_15') {
					numberOfPremises = 1.2;
				} else if (room == 'room_16') {
					numberOfPremises = 1.3;
				}
			} else if (floor == 'floor_14') {
				baseReport = 11.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8' || room == 'room_9' || room == 'room_10' || room == 'room_11') {
					numberOfPremises = 0.7;
				} else if (room == 'room_12') {
					numberOfPremises = 0.8;
				} else if (room == 'room_13') {
					numberOfPremises = 0.9;
				} else if (room == 'room_14') {
					numberOfPremises = 1;
				} else if (room == 'room_15') {
					numberOfPremises = 1.1;
				} else if (room == 'room_16') {
					numberOfPremises = 1.2;
				}
			} else if (floor == 'floor_15') {
				baseReport = 11.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8' || room == 'room_9' || room == 'room_10' || room == 'room_11' || room == 'room_12') {
					numberOfPremises = 0.7;
				} else if (room == 'room_13') {
					numberOfPremises = 0.8;
				} else if (room == 'room_14') {
					numberOfPremises = 0.9;
				} else if (room == 'room_15') {
					numberOfPremises = 1;
				} else if (room == 'room_16') {
					numberOfPremises = 1.1;
				}
			} else if (floor == 'floor_16') {
				baseReport = 11.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8' || room == 'room_9' || room == 'room_10' || room == 'room_11' || room == 'room_12' || room == 'room_13') {
					numberOfPremises = 0.7;
				} else if (room == 'room_14') {
					numberOfPremises = 0.8;
				} else if (room == 'room_15') {
					numberOfPremises = 0.9;
				} else if (room == 'room_16') {
					numberOfPremises = 1;
				}
			}
		}

		if (f == '7' || f == '10' || f == '11' || f == '12' || f == '13') {
			if (floor == 'floor_1') {
				baseReport = 2;
			} else if (floor == 'floor_2') {
				baseReport = 3;
			} else if (floor == 'floor_3') {
				baseReport = 5;
			} else if (floor == 'floor_4') {
				baseReport = 6.5;
			} else if (floor == 'floor_5') {
				baseReport = 7.5;
			} else if (floor == 'floor_6') {
				baseReport = 8.8;
			} else if (floor == 'floor_7') {
				baseReport = 9;
			} else if (floor == 'floor_8') {
				baseReport = 10;
			} else if (floor == 'floor_9') {
				baseReport = 10.5;
			} else if (floor == 'floor_10') {
				baseReport = 11;
			} else if (floor == 'floor_11') {
				baseReport = 11.5;
			} else if (floor == 'floor_12') {
				baseReport = 12;
			} else if (floor == 'floor_13') {
				baseReport = 12.5;
			} else if (floor == 'floor_14') {
				baseReport = 13;
			} else if (floor == 'floor_15') {
				baseReport = 13.5;
			} else if (floor == 'floor_16') {
				baseReport = 14;
			}
		}

		if (f == '15') {
			if (floor == 'floor_1') {
				baseReport = 2;
			} else if (floor == 'floor_2') {
				baseReport = 4;
			} else if (floor == 'floor_3') {
				baseReport = 8;
			} else if (floor == 'floor_4') {
				baseReport = 8.5;
			} else if (floor == 'floor_5') {
				baseReport = 9;
			} else if (floor == 'floor_6') {
				baseReport = 9.5;
			} else if (floor == 'floor_7') {
				baseReport = 10;
			} else if (floor == 'floor_8') {
				baseReport = 10.5;
			} else if (floor == 'floor_9') {
				baseReport = 11;
			} else if (floor == 'floor_10') {
				baseReport = 11.5;
			} else if (floor == 'floor_11') {
				baseReport = 12;
			} else if (floor == 'floor_12') {
				baseReport = 12.5;
			} else if (floor == 'floor_13') {
				baseReport = 13;
			} else if (floor == 'floor_14') {
				baseReport = 13.5;
			} else if (floor == 'floor_15') {
				baseReport = 14;
			} else if (floor == 'floor_16') {
				baseReport = 14.5;
			}
		}

		if (f == '16' || f == '17') {
			if (floor == 'floor_1') {
				baseReport = 1.5;
			} else if (floor == 'floor_2') {
				baseReport = 5;
			} else if (floor == 'floor_3') {
				baseReport = 10;
			} else if (floor == 'floor_4') {
				baseReport = 10.5;
			} else if (floor == 'floor_5') {
				baseReport = 11;
			} else if (floor == 'floor_6') {
				baseReport = 11.5;
			} else if (floor == 'floor_7') {
				baseReport = 12;
			} else if (floor == 'floor_8') {
				baseReport = 12.5;
			} else if (floor == 'floor_9') {
				baseReport = 13;
			} else if (floor == 'floor_10') {
				baseReport = 13.5;
			} else if (floor == 'floor_11') {
				baseReport = 14;
			} else if (floor == 'floor_12') {
				baseReport = 14.5;
			} else if (floor == 'floor_13') {
				baseReport = 15;
			} else if (floor == 'floor_14') {
				baseReport = 15.5;
			} else if (floor == 'floor_15') {
				baseReport = 16;
			} else if (floor == 'floor_16') {
				baseReport = 16.5;
			}
		}

		if (f == '3' || f == '7' || f == '10' || f == '11' || f == '12' || f == '13' || f == '15' || f == '16' || f == '17' || f == '18' || f == '20') {
			if (alert == 'alert_1') {
				alert = 1.1;
			} else alert = 1;
			if (mgn == 'mgn_1') {
				mgn = 1.1
			} else mgn = 1;
			if (room == 'room_1') {
				roomRatio = 49;
			} else if (room == 'room_2') {
				roomRatio = 99;
			} else if (room == 'room_3') {
				roomRatio = 149;
			} else if (room == 'room_4') {
				roomRatio = 199;
			} else if (room == 'room_5') {
				roomRatio = 249;
			} else if (room == 'room_6') {
				roomRatio = 299;
			} else if (room == 'room_7') {
				roomRatio = 349;
			} else if (room == 'room_8') {
				roomRatio = 399;
			} else if (room == 'room_9') {
				roomRatio = 449;
			} else if (room == 'room_10') {
				roomRatio = 499;
			} else if (room == 'room_11') {
				roomRatio = 549;
			} else if (room == 'room_12') {
				roomRatio = 599;
			} else if (room == 'room_13') {
				roomRatio = 649;
			} else if (room == 'room_14') {
				roomRatio = 699;
			} else if (room == 'room_15') {
				roomRatio = 749;
			} else if (room == 'room_16') {
				roomRatio = 800;
			}
			if (floor == 'floor_1') {
				if (room == 'room_1') {
					numberOfPremises = 1;
				} else if (room == 'room_2') {
					numberOfPremises = 1.1;
				} else if (room == 'room_3') {
					numberOfPremises = 1.2;
				} else if (room == 'room_4') {
					numberOfPremises = 1.3;
				} else if (room == 'room_5') {
					numberOfPremises = 1.4;
				} else if (room == 'room_6') {
					numberOfPremises = 1.5;
				} else if (room == 'room_7') {
					numberOfPremises = 1.6;
				} else if (room == 'room_8' || room == 'room_9' || room == 'room_10' || room == 'room_11' || room == 'room_12' || room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_2') {
				if (room == 'room_1') {
					numberOfPremises = 0.9;
				} else if (room == 'room_2') {
					numberOfPremises = 1;
				} else if (room == 'room_3') {
					numberOfPremises = 1.1;
				} else if (room == 'room_4') {
					numberOfPremises = 1.2;
				} else if (room == 'room_5') {
					numberOfPremises = 1.3;
				} else if (room == 'room_6') {
					numberOfPremises = 1.4;
				} else if (room == 'room_7') {
					numberOfPremises = 1.5;
				} else if (room == 'room_8') {
					numberOfPremises = 1.6;
				} else if (room == 'room_9' || room == 'room_10' || room == 'room_11' || room == 'room_12' || room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_3') {
				if (room == 'room_1') {
					numberOfPremises = 0.8;
				} else if (room == 'room_2') {
					numberOfPremises = 0.9;
				} else if (room == 'room_3') {
					numberOfPremises = 1;
				} else if (room == 'room_4') {
					numberOfPremises = 1.1;
				} else if (room == 'room_5') {
					numberOfPremises = 1.2;
				} else if (room == 'room_6') {
					numberOfPremises = 1.3;
				} else if (room == 'room_7') {
					numberOfPremises = 1.4;
				} else if (room == 'room_8') {
					numberOfPremises = 1.5;
				} else if (room == 'room_9') {
					numberOfPremises = 1.6;
				} else if (room == 'room_10' || room == 'room_11' || room == 'room_12' || room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_4') {
				if (room == 'room_1') {
					numberOfPremises = 0.7;
				} else if (room == 'room_2') {
					numberOfPremises = 0.8;
				} else if (room == 'room_3') {
					numberOfPremises = 0.9;
				} else if (room == 'room_4') {
					numberOfPremises = 1;
				} else if (room == 'room_5') {
					numberOfPremises = 1.1;
				} else if (room == 'room_6') {
					numberOfPremises = 1.2;
				} else if (room == 'room_7') {
					numberOfPremises = 1.3;
				} else if (room == 'room_8') {
					numberOfPremises = 1.4;
				} else if (room == 'room_9') {
					numberOfPremises = 1.5;
				} else if (room == 'room_10') {
					numberOfPremises = 1.6;
				} else if (room == 'room_11' || room == 'room_12' || room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_5') {
				if (room == 'room_1' || room == 'room_2') {
					numberOfPremises = 0.7;
				} else if (room == 'room_3') {
					numberOfPremises = 0.8;
				} else if (room == 'room_4') {
					numberOfPremises = 0.9;
				} else if (room == 'room_5') {
					numberOfPremises = 1;
				} else if (room == 'room_6') {
					numberOfPremises = 1.1;
				} else if (room == 'room_7') {
					numberOfPremises = 1.2;
				} else if (room == 'room_8') {
					numberOfPremises = 1.3;
				} else if (room == 'room_9') {
					numberOfPremises = 1.4;
				} else if (room == 'room_10') {
					numberOfPremises = 1.5;
				} else if (room == 'room_11') {
					numberOfPremises = 1.6;
				} else if (room == 'room_12' || room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_6') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3') {
					numberOfPremises = 0.7;
				} else if (room == 'room_4') {
					numberOfPremises = 0.8;
				} else if (room == 'room_5') {
					numberOfPremises = 0.9;
				} else if (room == 'room_6') {
					numberOfPremises = 1;
				} else if (room == 'room_7') {
					numberOfPremises = 1.1;
				} else if (room == 'room_8') {
					numberOfPremises = 1.2;
				} else if (room == 'room_9') {
					numberOfPremises = 1.3;
				} else if (room == 'room_10') {
					numberOfPremises = 1.4;
				} else if (room == 'room_11') {
					numberOfPremises = 1.5;
				} else if (room == 'room_12') {
					numberOfPremises = 1.6;
				} else if (room == 'room_13' || room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_7') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4') {
					numberOfPremises = 0.7;
				} else if (room == 'room_5') {
					numberOfPremises = 0.8;
				} else if (room == 'room_6') {
					numberOfPremises = 0.9;
				} else if (room == 'room_7') {
					numberOfPremises = 1;
				} else if (room == 'room_8') {
					numberOfPremises = 1.1;
				} else if (room == 'room_9') {
					numberOfPremises = 1.2;
				} else if (room == 'room_10') {
					numberOfPremises = 1.3;
				} else if (room == 'room_11') {
					numberOfPremises = 1.4;
				} else if (room == 'room_12') {
					numberOfPremises = 1.5;
				} else if (room == 'room_13') {
					numberOfPremises = 1.6;
				} else if (room == 'room_14' || room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_8') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5') {
					numberOfPremises = 0.7;
				} else if (room == 'room_6') {
					numberOfPremises = 0.8;
				} else if (room == 'room_7') {
					numberOfPremises = 0.9;
				} else if (room == 'room_8') {
					numberOfPremises = 1;
				} else if (room == 'room_9') {
					numberOfPremises = 1.1;
				} else if (room == 'room_10') {
					numberOfPremises = 1.2;
				} else if (room == 'room_11') {
					numberOfPremises = 1.3;
				} else if (room == 'room_12') {
					numberOfPremises = 1.4;
				} else if (room == 'room_13') {
					numberOfPremises = 1.5;
				} else if (room == 'room_14') {
					numberOfPremises = 1.6;
				} else if (room == 'room_15' || room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_9') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6') {
					numberOfPremises = 0.7;
				} else if (room == 'room_7') {
					numberOfPremises = 0.8;
				} else if (room == 'room_8') {
					numberOfPremises = 0.9;
				} else if (room == 'room_9') {
					numberOfPremises = 1;
				} else if (room == 'room_10') {
					numberOfPremises = 1.1;
				} else if (room == 'room_11') {
					numberOfPremises = 1.2;
				} else if (room == 'room_12') {
					numberOfPremises = 1.3;
				} else if (room == 'room_13') {
					numberOfPremises = 1.4;
				} else if (room == 'room_14') {
					numberOfPremises = 1.5;
				} else if (room == 'room_15') {
					numberOfPremises = 1.6;
				} else if (room == 'room_16') {
					numberOfPremises = 1.7;
				}
			} else if (floor == 'floor_10') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7') {
					numberOfPremises = 0.7;
				} else if (room == 'room_8') {
					numberOfPremises = 0.8;
				} else if (room == 'room_9') {
					numberOfPremises = 0.9;
				} else if (room == 'room_10') {
					numberOfPremises = 1;
				} else if (room == 'room_11') {
					numberOfPremises = 1.1;
				} else if (room == 'room_12') {
					numberOfPremises = 1.2;
				} else if (room == 'room_13') {
					numberOfPremises = 1.3;
				} else if (room == 'room_14') {
					numberOfPremises = 1.4;
				} else if (room == 'room_15') {
					numberOfPremises = 1.5;
				} else if (room == 'room_16') {
					numberOfPremises = 1.6;
				}
			} else if (floor == 'floor_11') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8') {
					numberOfPremises = 0.7;
				} else if (room == 'room_9') {
					numberOfPremises = 0.8;
				} else if (room == 'room_10') {
					numberOfPremises = 0.9;
				} else if (room == 'room_11') {
					numberOfPremises = 1;
				} else if (room == 'room_12') {
					numberOfPremises = 1.1;
				} else if (room == 'room_13') {
					numberOfPremises = 1.2;
				} else if (room == 'room_14') {
					numberOfPremises = 1.3;
				} else if (room == 'room_15') {
					numberOfPremises = 1.4;
				} else if (room == 'room_16') {
					numberOfPremises = 1.5;
				}
			} else if (floor == 'floor_12') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8' || room == 'room_9') {
					numberOfPremises = 0.7;
				} else if (room == 'room_10') {
					numberOfPremises = 0.8;
				} else if (room == 'room_11') {
					numberOfPremises = 0.9;
				} else if (room == 'room_12') {
					numberOfPremises = 1;
				} else if (room == 'room_13') {
					numberOfPremises = 1.1;
				} else if (room == 'room_14') {
					numberOfPremises = 1.2;
				} else if (room == 'room_15') {
					numberOfPremises = 1.3;
				} else if (room == 'room_16') {
					numberOfPremises = 1.4;
				}
			} else if (floor == 'floor_13') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8' || room == 'room_9' || room == 'room_10') {
					numberOfPremises = 0.7;
				} else if (room == 'room_11') {
					numberOfPremises = 0.8;
				} else if (room == 'room_12') {
					numberOfPremises = 0.9;
				} else if (room == 'room_13') {
					numberOfPremises = 1;
				} else if (room == 'room_14') {
					numberOfPremises = 1.1;
				} else if (room == 'room_15') {
					numberOfPremises = 1.2;
				} else if (room == 'room_16') {
					numberOfPremises = 1.3;
				}
			} else if (floor == 'floor_14') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8' || room == 'room_9' || room == 'room_10' || room == 'room_11') {
					numberOfPremises = 0.7;
				} else if (room == 'room_12') {
					numberOfPremises = 0.8;
				} else if (room == 'room_13') {
					numberOfPremises = 0.9;
				} else if (room == 'room_14') {
					numberOfPremises = 1;
				} else if (room == 'room_15') {
					numberOfPremises = 1.1;
				} else if (room == 'room_16') {
					numberOfPremises = 1.2;
				}
			} else if (floor == 'floor_15') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8' || room == 'room_9' || room == 'room_10' || room == 'room_11' || room == 'room_12') {
					numberOfPremises = 0.7;
				} else if (room == 'room_13') {
					numberOfPremises = 0.8;
				} else if (room == 'room_14') {
					numberOfPremises = 0.9;
				} else if (room == 'room_15') {
					numberOfPremises = 1;
				} else if (room == 'room_16') {
					numberOfPremises = 1.1;
				}
			} else if (floor == 'floor_16') {
				if (room == 'room_1' || room == 'room_2' || room == 'room_3' || room == 'room_4' || room == 'room_5' || room == 'room_6' || room == 'room_7' || room == 'room_8' || room == 'room_9' || room == 'room_10' || room == 'room_11' || room == 'room_12' || room == 'room_13') {
					numberOfPremises = 0.7;
				} else if (room == 'room_14') {
					numberOfPremises = 0.8;
				} else if (room == 'room_15') {
					numberOfPremises = 0.9;
				} else if (room == 'room_16') {
					numberOfPremises = 1;
				}
			}

			expertPart = baseReport * costOfOneHour * alert * numberOfPremises * mgn;
		}

		if (f == '18' || f == '20') {
			if (floor == 'floor_1') {
				baseReport = 1.5;
			} else if (floor == 'floor_2') {
				baseReport = 2.5;
			} else if (floor == 'floor_3') {
				baseReport = 4.5;
			} else if (floor == 'floor_4') {
				baseReport = 6;
			} else if (floor == 'floor_5') {
				baseReport = 7;
			} else if (floor == 'floor_6') {
				baseReport = 8;
			} else if (floor == 'floor_7') {
				baseReport = 8.5;
			} else if (floor == 'floor_8') {
				baseReport = 9;
			} else if (floor == 'floor_9') {
				baseReport = 9.5;
			} else if (floor == 'floor_10') {
				baseReport = 10;
			} else if (floor == 'floor_11') {
				baseReport = 10.5;
			} else if (floor == 'floor_12') {
				baseReport = 11;
			} else if (floor == 'floor_13') {
				baseReport = 11.5;
			} else if (floor == 'floor_14') {
				baseReport = 12;
			} else if (floor == 'floor_15') {
				baseReport = 12.5;
			} else if (floor == 'floor_16') {
				baseReport = 13;
			}
			expertPart = baseReport * costOfOneHour * alert * numberOfPremises * mgn * 1.5;
		} else if (f == '3' || f == '7' || f == '10' || f == '11' || f == '12' || f == '13' || f == '15' || f == '16' || f == '17') {
			expertPart = baseReport * costOfOneHour * alert * numberOfPremises * mgn;
		}

		if (f == '4' || f == '5') {
			if (alertHouse == 'alertHouse_1') {
				alertHouse = 1;
			} else alertHouse = 1.1;
			if (floor == 'floor_1') {
				baseReport = 1.5;
			} else if (floor == 'floor_2') {
				baseReport = 2;
			} else if (floor == 'floor_3') {
				baseReport = 2.5;
			} else if (floor == 'floor_4') {
				baseReport = 2.6;
			} else if (floor == 'floor_5') {
				baseReport = 2.7;
			} else if (floor == 'floor_6') {
				baseReport = 2.8;
			} else if (floor == 'floor_7') {
				baseReport = 2.9;
			} else if (floor == 'floor_8') {
				baseReport = 3;
			} else if (floor == 'floor_9') {
				baseReport = 3.1;
			} else if (floor == 'floor_10') {
				baseReport = 3.2;
			} else if (floor == 'floor_11') {
				baseReport = 3.3;
			} else if (floor == 'floor_12') {
				baseReport = 3.4;
			} else if (floor == 'floor_13') {
				baseReport = 3.5;
			} else if (floor == 'floor_14') {
				baseReport = 3.6;
			} else if (floor == 'floor_15') {
				baseReport = 3.7;
			} else if (floor == 'floor_16') {
				baseReport = 3.8;
			}
			if (room == 'room_1') {
				roomRatio = 49;
			} else if (room == 'room_2') {
				roomRatio = 99;
			} else if (room == 'room_3') {
				roomRatio = 149;
			} else if (room == 'room_4') {
				roomRatio = 199;
			} else if (room == 'room_5') {
				roomRatio = 249;
			} else if (room == 'room_6') {
				roomRatio = 299;
			} else if (room == 'room_7') {
				roomRatio = 349;
			} else if (room == 'room_8') {
				roomRatio = 399;
			} else if (room == 'room_9') {
				roomRatio = 449;
			} else if (room == 'room_10') {
				roomRatio = 499;
			} else if (room == 'room_11') {
				roomRatio = 549;
			} else if (room == 'room_12') {
				roomRatio = 599;
			} else if (room == 'room_13') {
				roomRatio = 649;
			} else if (room == 'room_14') {
				roomRatio = 699;
			} else if (room == 'room_15') {
				roomRatio = 749;
			} else if (room == 'room_16') {
				roomRatio = 800;
			}

			expertPart = baseReport * costOfOneHour * alertHouse;
		}

		if (f == '6' || f == '9') {
			if (alert == 'alert_1') {
				alert = 1.1;
			} else alert = 1;
			if (mgn == 'mgn_1') {
				mgn = 1.1
			} else mgn = 1;
			if (room == 'room_1') {
				roomRatio = 49;
			} else if (room == 'room_2') {
				roomRatio = 99;
			} else if (room == 'room_3') {
				roomRatio = 149;
			} else if (room == 'room_4') {
				roomRatio = 199;
			} else if (room == 'room_5') {
				roomRatio = 249;
			} else if (room == 'room_6') {
				roomRatio = 299;
			} else if (room == 'room_7') {
				roomRatio = 349;
			} else if (room == 'room_8') {
				roomRatio = 399;
			} else if (room == 'room_9') {
				roomRatio = 449;
			} else if (room == 'room_10') {
				roomRatio = 499;
			} else if (room == 'room_11') {
				roomRatio = 549;
			} else if (room == 'room_12') {
				roomRatio = 599;
			} else if (room == 'room_13') {
				roomRatio = 649;
			} else if (room == 'room_14') {
				roomRatio = 699;
			} else if (room == 'room_15') {
				roomRatio = 749;
			} else if (room == 'room_16') {
				roomRatio = 800;
			}
			if (floor == 'floor_1') {
				baseReport = 4;
			} else if (floor == 'floor_2') {
				baseReport = 8;
			} else if (floor == 'floor_3') {
				baseReport = 12;
			} else if (floor == 'floor_4') {
				baseReport = 12.5;
			} else if (floor == 'floor_5') {
				baseReport = 13;
			} else if (floor == 'floor_6') {
				baseReport = 13.5;
			} else if (floor == 'floor_7') {
				baseReport = 14;
			} else if (floor == 'floor_8') {
				baseReport = 14.5;
			} else if (floor == 'floor_9') {
				baseReport = 15;
			} else if (floor == 'floor_10') {
				baseReport = 15.5;
			} else if (floor == 'floor_11') {
				baseReport = 16;
			}
			if (place == 'place_1') {
				seatRatio = 1;
			} else if (place == 'place_2') {
				seatRatio = 1.05;
			} else if (place == 'place_3') {
				seatRatio = 1.1;
			} else if (place == 'place_4') {
				seatRatio = 1.15;
			} else if (place == 'place_5') {
				seatRatio = 1.2;
			} else if (place == 'place_6') {
				seatRatio = 1.25;
			} else if (place == 'place_7') {
				seatRatio = 1.3;
			} else if (place == 'place_8') {
				seatRatio = 1.35;
			} else if (place == 'place_9') {
				seatRatio = 1.4;
			} else if (place == 'place_10') {
				seatRatio = 1.45;
			} else if (place == 'place_11') {
				seatRatio = 1.5;
			}
			expertPart = baseReport * costOfOneHour * (alert + seatRatio + mgn - 2);
		}

		if (f == '8') {
			if (alert == 'alert_1') {
				alert = 1.2;
			} else alert = 1;
			if (mgn == 'mgn_1') {
				mgn = 1.2
			} else mgn = 1;
			if (room == 'room_1') {
				roomRatio = 49;
			} else if (room == 'room_2') {
				roomRatio = 99;
			} else if (room == 'room_3') {
				roomRatio = 149;
			} else if (room == 'room_4') {
				roomRatio = 199;
			} else if (room == 'room_5') {
				roomRatio = 249;
			} else if (room == 'room_6') {
				roomRatio = 299;
			} else if (room == 'room_7') {
				roomRatio = 349;
			} else if (room == 'room_8') {
				roomRatio = 399;
			} else if (room == 'room_9') {
				roomRatio = 449;
			} else if (room == 'room_10') {
				roomRatio = 499;
			} else if (room == 'room_11') {
				roomRatio = 549;
			} else if (room == 'room_12') {
				roomRatio = 599;
			} else if (room == 'room_13') {
				roomRatio = 649;
			} else if (room == 'room_14') {
				roomRatio = 699;
			} else if (room == 'room_15') {
				roomRatio = 749;
			} else if (room == 'room_16') {
				roomRatio = 800;
			}
			if (floor == 'floor_1') {
				baseReport = 4;
				if (square == 'square_1') {
					squareRatio = 1;
				} else if (square == 'square_2') {
					squareRatio = 1.1;
				} else if (square == 'square_3') {
					squareRatio = 1.2;
				} else if (square == 'square_4') {
					squareRatio = 1.3;
				} else if (square == 'square_5') {
					squareRatio = 1.4;
				} else if (square == 'square_6') {
					squareRatio = 1.5;
				} else if (square == 'square_7') {
					squareRatio = 1.6;
				} else if (square == 'square_8' || square == 'square_9' || square == 'square_10' || square == 'square_11') {
					squareRatio = 1.7;
				}
			} else if (floor == 'floor_2') {
				baseReport = 7;
				if (square == 'square_1') {
					squareRatio = 0.9;
				} else if (square == 'square_2') {
					squareRatio = 1;
				} else if (square == 'square_3') {
					squareRatio = 1.1;
				} else if (square == 'square_4') {
					squareRatio = 1.2;
				} else if (square == 'square_5') {
					squareRatio = 1.3;
				} else if (square == 'square_6') {
					squareRatio = 1.4;
				} else if (square == 'square_7') {
					squareRatio = 1.5;
				} else if (square == 'square_8') {
					squareRatio = 1.6;
				} else if (square == 'square_9' || square == 'square_10' || square == 'square_11') {
					squareRatio = 1.7;
				}
			} else if (floor == 'floor_3') {
				baseReport = 9;
				if (square == 'square_1') {
					squareRatio = 0.8;
				} else if (square == 'square_2') {
					squareRatio = 0.9;
				} else if (square == 'square_3') {
					squareRatio = 1;
				} else if (square == 'square_4') {
					squareRatio = 1.1;
				} else if (square == 'square_5') {
					squareRatio = 1.2;
				} else if (square == 'square_6') {
					squareRatio = 1.3;
				} else if (square == 'square_7') {
					squareRatio = 1.4;
				} else if (square == 'square_8') {
					squareRatio = 1.5;
				} else if (square == 'square_9') {
					squareRatio = 1.6;
				} else if (square == 'square_10' || square == 'square_11') {
					squareRatio = 1.7;
				}
			} else if (floor == 'floor_4') {
				baseReport = 12;
				if (square == 'square_1') {
					squareRatio = 0.7;
				} else if (square == 'square_2') {
					squareRatio = 0.8;
				} else if (square == 'square_3') {
					squareRatio = 0.9;
				} else if (square == 'square_4') {
					squareRatio = 1;
				} else if (square == 'square_5') {
					squareRatio = 1.1;
				} else if (square == 'square_6') {
					squareRatio = 1.2;
				} else if (square == 'square_7') {
					squareRatio = 1.3;
				} else if (square == 'square_8') {
					squareRatio = 1.4;
				} else if (square == 'square_9') {
					squareRatio = 1.5;
				} else if (square == 'square_10') {
					squareRatio = 1.6;
				} else if (square == 'square_11') {
					squareRatio = 1.7;
				}
			} else if (floor == 'floor_5') {
				baseReport = 12.5;
				if (square == 'square_1' || square == 'square_2') {
					squareRatio = 0.7;
				} else if (square == 'square_3') {
					squareRatio = 0.8;
				} else if (square == 'square_4') {
					squareRatio = 0.9;
				} else if (square == 'square_5') {
					squareRatio = 1;
				} else if (square == 'square_6') {
					squareRatio = 1.1;
				} else if (square == 'square_7') {
					squareRatio = 1.2;
				} else if (square == 'square_8') {
					squareRatio = 1.3;
				} else if (square == 'square_9') {
					squareRatio = 1.4;
				} else if (square == 'square_10') {
					squareRatio = 1.5;
				} else if (square == 'square_11') {
					squareRatio = 1.6;
				}
			} else if (floor == 'floor_6') {
				baseReport = 13;
				if (square == 'square_1' || square == 'square_2' || square == 'square_3') {
					squareRatio = 0.7;
				} else if (square == 'square_4') {
					squareRatio = 0.8;
				} else if (square == 'square_5') {
					squareRatio = 0.9;
				} else if (square == 'square_6') {
					squareRatio = 1;
				} else if (square == 'square_7') {
					squareRatio = 1.1;
				} else if (square == 'square_8') {
					squareRatio = 1.2;
				} else if (square == 'square_9') {
					squareRatio = 1.3;
				} else if (square == 'square_10') {
					squareRatio = 1.4;
				} else if (square == 'square_11') {
					squareRatio = 1.5;
				}
			} else if (floor == 'floor_7') {
				baseReport = 13.5;
				if (square == 'square_1' || square == 'square_2' || square == 'square_3' || square == 'square_4') {
					squareRatio = 0.7;
				} else if (square == 'square_5') {
					squareRatio = 0.8;
				} else if (square == 'square_6') {
					squareRatio = 0.9;
				} else if (square == 'square_7') {
					squareRatio = 1;
				} else if (square == 'square_8') {
					squareRatio = 1.1;
				} else if (square == 'square_9') {
					squareRatio = 1.2;
				} else if (square == 'square_10') {
					squareRatio = 1.3;
				} else if (square == 'square_11') {
					squareRatio = 1.4;
				}
			} else if (floor == 'floor_8') {
				baseReport = 14;
				if (square == 'square_1' || square == 'square_2' || square == 'square_3' || square == 'square_4' || square == 'square_5') {
					squareRatio = 0.7;
				} else if (square == 'square_6') {
					squareRatio = 0.8;
				} else if (square == 'square_7') {
					squareRatio = 0.9;
				} else if (square == 'square_8') {
					squareRatio = 1;
				} else if (square == 'square_9') {
					squareRatio = 1.1;
				} else if (square == 'square_10') {
					squareRatio = 1.2;
				} else if (square == 'square_11') {
					squareRatio = 1.3;
				}
			} else if (floor == 'floor_9') {
				baseReport = 14.5;
				if (square == 'square_1' || square == 'square_2' || square == 'square_3' || square == 'square_4' || square == 'square_5' || square == 'square_6') {
					squareRatio = 0.7;
				} else if (square == 'square_7') {
					squareRatio = 0.8;
				} else if (square == 'square_8') {
					squareRatio = 0.9;
				} else if (square == 'square_9') {
					squareRatio = 1;
				} else if (square == 'square_10') {
					squareRatio = 1.1;
				} else if (square == 'square_11') {
					squareRatio = 1.2;
				}
			} else if (floor == 'floor_10') {
				baseReport = 15;
				if (square == 'square_1' || square == 'square_2' || square == 'square_3' || square == 'square_4' || square == 'square_5' || square == 'square_6' || square == 'square_7') {
					squareRatio = 0.7;
				} else if (square == 'square_8') {
					squareRatio = 0.8;
				} else if (square == 'square_9') {
					squareRatio = 0.9;
				} else if (square == 'square_10') {
					squareRatio = 1;
				} else if (square == 'square_11') {
					squareRatio = 1.1;
				}
			} else if (floor == 'floor_11') {
				baseReport = 15.5;
				if (square == 'square_1' || square == 'square_2' || square == 'square_3' || square == 'square_4' || square == 'square_5' || square == 'square_6' || square == 'square_7' || square == 'square_8') {
					squareRatio = 0.7;
				} else if (square == 'square_9') {
					squareRatio = 0.8;
				} else if (square == 'square_10') {
					squareRatio = 0.8;
				} else if (square == 'square_11') {
					squareRatio = 1;
				}
			}

			expertPart = baseReport * costOfOneHour * (alert + squareRatio + mgn - 2);
		}

		if (f == '14') {
			if (alert == 'alert_1') {
				alert = 1.1;
			} else alert = 1;
			if (mgn == 'mgn_1') {
				mgn = 1.1
			} else mgn = 1;
			if (room == 'room_1') {
				roomRatio = 49;
			} else if (room == 'room_2') {
				roomRatio = 99;
			} else if (room == 'room_3') {
				roomRatio = 149;
			} else if (room == 'room_4') {
				roomRatio = 199;
			} else if (room == 'room_5') {
				roomRatio = 249;
			} else {
				roomRatio = 299;
			}
			if (floor == 'floor_1') {
				baseReport = 1.5;
				if (room == 'room_1') {
					numberOfPremises = 1;
				} else if (room == 'room_2') {
					numberOfPremises = 1.1;
				} else if (room == 'room_3') {
					numberOfPremises = 1.2;
				} else if (room == 'room_4') {
					numberOfPremises = 1.3;
				} else if (room == 'room_5') {
					numberOfPremises = 1.4;
				} else {
					numberOfPremises = 1.5;
				}
			} else if (floor == 'floor_2') {
				baseReport = 4;
				if (room == 'room_1') {
					numberOfPremises = 0.9;
				} else if (room == 'room_2') {
					numberOfPremises = 1;
				} else if (room == 'room_3') {
					numberOfPremises = 1.1;
				} else if (room == 'room_4') {
					numberOfPremises = 1.2;
				} else if (room == 'room_5') {
					numberOfPremises = 1.3;
				} else {
					numberOfPremises = 1.4;
				}
			} else if (floor == 'floor_3') {
				baseReport = 8;
				if (room == 'room_1') {
					numberOfPremises = 0.7;
				} else if (room == 'room_2') {
					numberOfPremises = 0.8;
				} else if (room == 'room_3') {
					numberOfPremises = 1;
				} else if (room == 'room_4') {
					numberOfPremises = 1.1;
				} else if (room == 'room_5') {
					numberOfPremises = 1.2;
				} else {
					numberOfPremises = 1.3;
				}
			} else if (floor == 'floor_4') {
				baseReport = 8;
				if (room == 'room_1') {
					numberOfPremises = 0.7;
				} else if (room == 'room_2') {
					numberOfPremises = 0.8;
				} else if (room == 'room_3') {
					numberOfPremises = 0.9;
				} else if (room == 'room_4') {
					numberOfPremises = 1;
				} else if (room == 'room_5') {
					numberOfPremises = 1.1;
				} else {
					numberOfPremises = 1.2;
				}
			} else if (floor == 'floor_5') {
				baseReport = 8.5;
				if (room == 'room_1' || room == 'room_2') {
					numberOfPremises = 0.7;
				} else if (room == 'room_3') {
					numberOfPremises = 0.8;
				} else if (room == 'room_4') {
					numberOfPremises = 0.9;
				} else if (room == 'room_5') {
					numberOfPremises = 1;
				} else {
					numberOfPremises = 1.1;
				}
			} else if (floor == 'floor_6') {
				baseReport = 8.5;
				if (room == 'room_1' || room == 'room_2' || room == 'room_3') {
					numberOfPremises = 0.7;
				} else if (room == 'room_4') {
					numberOfPremises = 0.8;
				} else if (room == 'room_5') {
					numberOfPremises = 0.9;
				} else {
					numberOfPremises = 1;
				}
			}
			expertPart = baseReport * costOfOneHour * (alert + numberOfPremises + mgn - 2);
		};
		primaryWork = roomRatio * (zonka + greenLine + obcherchivanie);
		calculationСost = reportCost + expertPart + primaryWork;
		sum = reportCost + expertPart + primaryWork + expertSalary;
		fenix = calculationСost * 1.8 + expertSalary;
		sigma = calculationСost * 1.8 * 1.3 + expertSalary;
		fireCat = calculationСost * 1.8 * 1.2 + expertSalary;
		finalSum = (sum * 2.5 * 1.302 + 1.05 * print + 1.05 * ipl) * 1.06; //добавляю 6%, в екселе не добавляется
		finalSum = finalSum.toFixed(2);
		finalFenix = (fenix * 2.5 * 1.302 + 1.05 * print + 1.05 * ipl) * 1.06; //добавляю 6%, в екселе не добавляется
		finalFenix = finalFenix.toFixed(2);
		finalSigma = (sigma * 2.5 * 1.302 + 1.05 * print + 1.05 * ipl) * 1.06; //добавляю 6%, в екселе не добавляется
		finalSigma = finalSigma.toFixed(2);
		finalFireCat = (fireCat * 2.5 * 1.302 + 1.05 * print + 1.05 * ipl) * 1.06; //добавляю 6%, в екселе не добавляется
		finalFireCat = finalFireCat.toFixed(2);
		changeTable();
	};
	$('#calculate').on('click', calculate);

	function changeTable() {
		$('.greenline-zmodel').text(finalSum);
		$('.fenix').text(finalFenix);
		$('.sigma').text(finalSigma);
		$('.fire-cat').text(finalFireCat);
	};

});