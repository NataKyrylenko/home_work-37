function initMap() {
  let element = document.getElementById('map');
  let options = {
    zoom: 9,
    center: {lat:49.5815121, lng:34.5694965}
  };
  let myMap = new google.maps.Map(element,options);
  let markers = [
    {coordinates: {lat:49.5873192 , lng:34.5514771 },
      info: '<h3>Корпусний сад</h3><div class="pop-ap"><p>Корпусний сад – це розкішний парк у центрі Полтави, улюблене місце відпочинку мешканців та гостей міста. Є пам`яткою садово-паркового мистецтва.</p><img src=https://stezhkamu.com/img/po/415.jpg></div>'},
    {
      coordinates: {lat:49.5815121, lng:34.5694965},
      info: '<h3>Біла альтанка</h3><div class="pop-ap"><p>На сьогодні серед більшості полтавців споруда згадується під своєю колишньою історичною назвою «Біла Альтанка». Це один з найвідоміших полтавських символів, розташований неподалік від новітньої візитівки міста — пам"ятника галушкам. У містян існує стала традиція робити зупинку біля обох пам"яток на весілля, на свята або й просто під час прогулянок. Вона на 2-му місці в списку «Семи чудес Полтави», рейтингу туристичних об"єктів Полтави.</p><img src=https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/5696_800x600_000091-t.jpg></div>'},
    {
      coordinates: {lat:49.9738194, lng:34.6113973},
      info: '<h3>Національний музей-заповідник українського гончарства в Опішному</h3><div class="pop-ap"><p>Найбільший центр і неформальна столиця українського гончарства. Село Опішня розташоване в 45 км від Полтави.У стінах зібрано величезну колекцію кращих виробів із глини, яких нараховується більше 40 тисяч. При музеї працює Національна галерея української монументальної кераміки, де представлено шедеври українських художників-керамістів і скульпторів.</p><img src=https://rest.guru.ua/img/place_photo/832/1854.jpg></div>'
    },
    {
      coordinates: {lat:50.0192192, lng:33.9239768},
      info: '<h3>Сорочинський ярмарок</h3><div class="pop-ap"><p>Національний Сорочинський ярмарок – це найбільший в Україні і найвідоміший за її межами ярмарково-виставковий захід. Його унікальність полягає у тому, що він зберігся з XVIII століття до наших днів. Проводиться традиційно один раз на рік в передостанній тиждень серпня на ярмарковій площі в 16,2 га просто неба в центрі села Великі Сорочинці Миргородського району</p><img src=https://yarmarok.in.ua/images/2020/07/03/press-anons.jpg></div>'
    }
  ];
  for (let i=0; i < markers.length; i++){
    addMarkers(markers[i]);
  }

  function addMarkers(properties){
    let marker = new google.maps.Marker({
      position: properties.coordinates,
      map: myMap,
      
    });
    if(properties.info){
      let InfoWindow = new google.maps.InfoWindow({
        content: properties.info
      });
      marker.addListener('click', function(){
        InfoWindow.open(myMap, marker);
      })
    }
  }
}