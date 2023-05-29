/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
$(document).ready(() => {
  $('#run-python-btn').click(() => {
    const loadingOverlay = $('#loading-overlay');

    // 로딩 화면 표시
    loadingOverlay.show();

    // 여기에 실행할 Python 코드 또는 기타 작업을 추가
    // 예시로 3초 후에 로딩 화면을 숨기는 작업을 수행합니다.
    $.get('/run-python', (data) => {
      $('#python-result').text(data);
      if (data.includes('nature')) {
        window.location.href = '/nature.html'; //페이지를 이동합니다.
      }
      if (data.includes('cherryblossom')) {
        window.location.href = '/cherryblossom.html';
      }
      if (data.includes('city_river')) {
        window.location.href = '/city_river.html';
      }
      if (data.includes('maple')) {
        window.location.href = '/maple.html';
      }
      if (data.includes('picnic')) {
        window.location.href = '/picnic.html';
      }
      if (data.includes('stone_wall')) {
        window.location.href = '/stone_wall.html';
      }
      if (data.includes('tower')) {
        window.location.href = '/tower.html';
      }
      if (data.includes('amusement_park')) {
        window.location.href = '/amusement_park.html';
      }
      if (data.includes('aquarium')) {
        window.location.href = '/aquarium.html';
      }
      if (data.includes('building')) {
        window.location.href = '/building.html';
      }
      if (data.includes('busy_street')) {
        window.location.href = '/busy_street.html';
      }
      if (data.includes('cable_car')) {
        window.location.href = '/cable_car.html';
      }
      if (data.includes('castle')) {
        window.location.href = '/castle.html';
      }
      if (data.includes('cruise_ship')) {
        window.location.href = '/cruise_ship.html';
      }
      if (data.includes('ice_rink')) {
        window.location.href = '/ice_rink.html';
      }
      if (data.includes('night_view')) {
        window.location.href = '/night_view.html';
      }
      if (data.includes('railway')) {
        window.location.href = '/railway.html';
      }
      if (data.includes('sunset')) {
        window.location.href = '/sunset.html';
      }
      if (data.includes('theater')) {
        window.location.href = '/cherryblossom.html';
      }
      if (data.includes('traditional_culture')) {
        window.location.href = '/traditional_culture.html';
      }
      if (data.includes('waterpark')) {
        window.location.href = '/waterpark.html';
      }
    });
  });
});
