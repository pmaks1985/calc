<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("description", "Расчеты в области пожарной безопасности выполняются посредством бесплатных калькуляторов, представленных на сайте Фабрас");
$APPLICATION->SetPageProperty("keywords", "Калькулятор");
$APPLICATION->SetPageProperty("title", "Бесплатные калькуляторы — приложения для выполнения различных расчетов в области пожарной безопасности");
$APPLICATION->SetTitle("Калькулятор");?>
<script src="/calc/js/calc.js"></script>
<style>
.calc{
	margin-top: 50px;
      }
.tooltip-inner {
	max-width: 350px; /* максимальная ширина подсказки (по умолчанию 200px) */
	color: #fff; /* цвет шрифта */
	background-color: #000; /* цвет фона */
	border-radius: 0.25rem; /* радиус скругдения углов */
        }
</style>
<div class="container calc pr-4">    	
      <div class="col-lg-6">
        <div class="col">
          <div id="calcul">
            <div class="form-group">
              <label for="building-class">Выберите:</label>
              <select id="building-class" class="form-control"> 
                <option value="" hidden>Класс функциональной пожарной опасности объекта</option>               
                <option value="1">Ф 1.1 здания дошкольных образовательных организаций, образовательных организаций с наличием интерната и детских организаций</option>
                <option value="2">Ф 1.1 здания специализированных домов престарелых и инвалидов (неквартирные), больницы</option>
                <option value="3">Ф 1.2 гостиницы, общежития, спальные корпуса санаториев и домов отдыха общего типа, кемпингов, мотелей и пансионатов</option>
                <option value="4">Ф 1.3 многоквартирные жилые дома</option>
                <option value="5">Ф 1.4 одноквартирные жилые дома, в том числе блокированные</option>
                <option value="6">Ф 2.1 театры, кинотеатры, концертные залы, клубы, цирки, спортивные сооружения с трибунами, библиотеки и другие учреждения с расчетным числом посадочных мест для посетителей в закрытых помещениях</option>
                <option value="7">Ф 2.2 музеи, выставки, танцевальные залы и другие подобные учреждения в закрытых помещениях</option>
                <option value="8">Ф 3.1 здания организаций торговли</option>
                <option value="9">Ф 3.2 здания организаций общественного питания</option>
                <option value="10">Ф 3.3 вокзалы</option>
                <option value="11">Ф 3.4 поликлиники и амбулатории</option>
                <option value="12">Ф 3.5 помещения для посетителей организаций бытового и коммунального обслуживания с нерасчетным числом посадочных мест для посетителей</option>
                <option value="13">Ф 3.6 физкультурно-оздоровительные комплексы и спортивно-тренировочные учреждения с помещениями без трибун для зрителей, бытовые помещения, бани</option>
                <option value="14">Ф 4.1 здания общеобразовательных организаций, организаций дополнительного образования детей, профессиональных образовательных организаций</option>
                <option value="15">Ф 4.2 здания образовательных организаций высшего образования, организаций дополнительного профессионального образования</option>
                <option value="16">Ф 4.3 здания органов управления учреждений, проектно-конструкторских организаций, информационных и редакционно-издательских организаций, научных дополнительного профессионального образования;организаций, банков, контор, офисов</option>
                <option value="17">Ф 4.4 здания пожарных депо</option>
                <option value="18">Ф 5.1 производственное здание без помещений категории А и Б</option>
                <option value="19">Ф 5.1 производственное здание с помещениями категории А и Б</option>
                <option value="20">Ф 5.2 склад без помещений категории А и Б</option>
                <option value="21">Ф 5.2 склад с помещениями категории А и Б</option>
                <option value="22">производственная территория с наружными установками</option>
              </select>
            </div>
            <div class="form-group" id="1" style="display: none;">
              <label for="floor">Количество этажей</label>
              <span class="pl-2"><img src="info.png" alt="" id="info-floor" data-toggle="tooltip" data-html="true" tabindex="0">
              <select id="floor" class="form-control">
                <option value="" hidden>Выберите из списка</option>
                <option value="floor_1" id="floor_1">1</option>
                <option value="floor_2" id="floor_2">2</option>
                <option value="floor_3" id="floor_3">3</option>
                <option value="floor_4" id="floor_4">4</option>
                <option value="floor_5" style="display: none;" id="floor_5">5</option>
                <option value="floor_6" style="display: none;" id="floor_6">6</option>
                <option value="floor_7" style="display: none;" id="floor_7">7</option>
                <option value="floor_8" style="display: none;" id="floor_8">8</option>
                <option value="floor_9" style="display: none;" id="floor_9">9</option>
                <option value="floor_10" style="display: none;" id="floor_10">10</option>
                <option value="floor_11" style="display: none;" id="floor_11">11</option>
                <option value="floor_12" style="display: none;" id="floor_12">12</option>
                <option value="floor_13" style="display: none;" id="floor_13">13</option>
                <option value="floor_14" style="display: none;" id="floor_14">14</option>
                <option value="floor_15" style="display: none;" id="floor_15">15</option>
                <option value="floor_16" style="display: none;" id="floor_16">16</option>
              </select>
            </div>
            <div class="form-group" id="2" style="display: none;">
              <label for="alert">Тип оповещения</label>
              <span class="pl-2"><img src="info.png" alt="" id="info-alert" data-toggle="tooltip" data-html="true" tabindex="0"></span>
              <select id="alert" class="form-control">
                <option value="" hidden>Выберите из списка</option>
                <option value="alert_1">1-2</option>
                <option value="alert_2">3-4-5</option>
              </select>
            </div>
            <div class="form-group" id="21" style="display: none;">
              <label for="alertHouse">Тип оповещения</label>
              <select id="alertHouse" class="form-control">
                <option value="" hidden>Выберите из списка</option>
                <option value="alertHouse_1">Есть</option>
                <option value="alertHouse_2">Нет</option>
              </select>
            </div>
            <div class="form-group" id="3" style="display: none;">
              <label for="room">Количество помещений</label>
              <select id="room" class="form-control">
                <option value="" hidden>Выберите из списка</option>
                <option value="room_1" id="room_1">0-49</option>
                <option value="room_2" id="room_2">50-99</option>
                <option value="room_3" id="room_3">100-149</option>
                <option value="room_4" id="room_4">150-199</option>
                <option value="room_5" id="room_5">200-249</option>
                <option value="room_6" id="room_6">250-299</option>
                <option value="room_7" style="display: none;" id="room_7">300-349</option>
                <option value="room_8" style="display: none;" id="room_8">350-399</option>
                <option value="room_9" style="display: none;" id="room_9">400-449</option>
                <option value="room_10" style="display: none;" id="room_10">450-499</option>
                <option value="room_11" style="display: none;" id="room_11">500-549</option>
                <option value="room_12" style="display: none;" id="room_12">550-599</option>
                <option value="room_13" style="display: none;" id="room_13">600-649</option>
                <option value="room_14" style="display: none;" id="room_14">650-699</option>
                <option value="room_15" style="display: none;" id="room_15">700-749</option>
                <option value="room_16" style="display: none;" id="room_16">750-800</option>
              </select>
            </div>
            <div class="form-group" id="4" style="display: none;">
              <label for="mgn">Присутствие МГН</label>
              <span class="pl-2"><img src="info.png" alt="" id="info-mgn" data-toggle="tooltip" data-html="true" tabindex="0"></span>
              <select id="mgn" class="form-control">
                <option value="" hidden>Выберите из списка</option>
                <option value="mgn_1" id="mgn_1">Да</option>
                <option value="mgn_2" id="mgn_2">Нет</option>
              </select>
            </div>
            <div class="form-group" id="5" style="display: none;">
              <label for="stretcher">Присутствие больных на носилках</label>
              <select id="stretcher" class="form-control">
                <option value="" hidden>Выберите из списка</option>
                <option value="stretcher_1" id="stretcher_1">Да</option>
                <option value="stretcher_2" id="stretcher_2">Нет</option>
              </select>
            </div>
            <div class="form-group" id="6" style="display: none;">
              <label for="square">Площадь</label>
              <select id="square" class="form-control">
                <option value="" hidden>Выберите из списка</option>
                <option value="square_1" id="square_1">0-499</option>
                <option value="square_2" id="square_2">500-1249</option>
                <option value="square_3" id="square_3">1250-1999</option>
                <option value="square_4" id="square_4">2000-2490</option>
                <option value="square_5" id="square_5">2500-2999</option>
                <option value="square_6" id="square_6">3000-3490</option>
                <option value="square_7" id="square_7">3500-3999</option>
                <option value="square_8" id="square_8">4000-4490</option>
                <option value="square_9" id="square_9">4500-4999</option>
                <option value="square_10" id="square_10">5000-5490</option>
                <option value="square_11" id="square_11">5500-6000</option>
              </select>
            </div>
            <div class="form-group" id="8" style="display: none;">
              <label for="place">Количество посадочных мест</label>
              <select id="place" class="form-control">
                <option value="" hidden>Выберите из списка</option>
                <option value="place_1" id="place_1">0-199</option>
                <option value="place_2" id="place_2">200-399</option>
                <option value="place_3" id="place_3">400-599</option>
                <option value="place_4" id="place_4">600-799</option>
                <option value="place_5" id="place_5">800-999</option>
                <option value="place_6" id="place_6">1000-1199</option>
                <option value="place_7" id="place_7">1200-1399</option>
                <option value="place_8" id="place_8">1400-1599</option>
                <option value="place_9" id="place_9">1600-1799</option>
                <option value="place_10" id="place_10">1800-1999</option>
                <option value="place_11" id="place_11">2000-2200</option>
              </select>
            </div>
            <div class="form-group" id="9" style="display: none;">
              <label for="printOut">Распечатка/доставка отчета по расчету</label>
              <select id="printOut" class="form-control">
                <option value="" hidden>Выберите из списка</option>
                <option value="printOut_1" id="printOut_1">Да (отправка оригинала Почтой России, Курьер (оплачивается отдельно))</option>
                <option value="printOut_2" id="printOut_2">Нет (предоставление отчета по расчету в электронном виде с печатью и ЭЦП (электронноцифровой подписью)</option>
              </select>
            </div>
            <div class="form-group" id="10" style="display: none;">
              <label for="ipl">Заключение Испытательной пожарной лаборатории МЧС России</label>
              <select id="ipl" class="form-control">
                <option value="" hidden>Выберите из списка</option>
                <option value="ipl_1" id="ipl_1">Да</option>
                <option value="ipl_2" id="ipl_2">Нет</option>
              </select>
            </div>
            <div class="form-group" id="11" style="display: none;">
              <p><a href="/service1.php#forma">Стоимость по запросу</a></p>              
            </div>            
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-lg-2 col-sm-2"></div>
		  <div class="col-xl-4 col-lg-5 col-sm-5 col-12 mb-3 text-center">
			<a href="https://lk.centerpb.ru/login/?mode=reg" class="btn btn-primary">Заказать расчет</a> 
		  </div>
          <div class="col-xl-4 col-lg-4 col-sm-4 col-12 mb-3 text-center">
            <button type="button" id="calculate" class="btn btn-primary" disabled>Рассчитать</button>            
          </div>
      </div>
      </div>

      <div class="col">
        <div class="col-lg-6">
          <table class="table">
            <thead>
              <tr>
                <th>Программный комплекс, используемый для расчетов</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
				<td><img class="pr-1" style="width:40px;" src="/bitrix/templates/fabras_service1/img/programs/Greenline.png">
					<img class="pr-1" style="width:40px;" src="/bitrix/templates/fabras_service1/img/programs/Z-model.png">
					<strong>Greenline+Zmodel</strong> (упрощенно-аналитическая + зонная модель)</td>
                <td class="greenline-zmodel text-center">-</td>
              </tr>
              <tr>
				<td><img class="pr-1" style="width:30px;" src="/bitrix/templates/fabras_service1/img/programs/Fenix.png"><strong>Fenix</strong> (индивидуальная поточная + полевая)</td>
                <td class="fenix text-center">-</td>
              </tr>
              <tr>
				<td><img class="pr-1" style="width:30px;" src="/bitrix/templates/fabras_service1/img/programs/СигмаПБ.png"><strong>Сигма ПБ</strong> (индивидуальная поточная + полевая)</td>
                <td class="sigma text-center">-</td>
              </tr>
              <tr>
				<td><img class="pr-1" style="width:33px;" src="/bitrix/templates/fabras_service1/img/programs/Pathfinder.png">
					<img class="pr-1" style="width:33px;" src="/bitrix/templates/fabras_service1/img/programs/PyroSim.png">
					<strong>FireCat</strong> (индивидуальная поточная + полевая)</td>
                <td class="fire-cat text-center">-</td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
	</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>