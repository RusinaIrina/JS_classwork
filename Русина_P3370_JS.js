var strP = document.getElementsByTagName('p')[0]; 
var str = strP.textContent; 

// разделяем на отдельные пары ключ-значение
var result = str.split(/;/g); 

// заносим в объект
var obj = {};
var cnt = 0;
for (var i = 0; i < result.length - 1; i++) { 
  // ключ
  var key = result[i].match(/^[^:]+/g); 
  
  // значение 
  var val = result[i].match(/:+[^;]*/g); 
  val[0] = val[0].substr(1); // убираем : в начале строки
  
  if (i == 0) { // element
    val[0].trim();
    val[0] = val[0].toLowerCase();
  } else if (i == 2) { // count
    val[0].trim();
    cnt = val[0];
  }
  
  obj[key[0]] = val[0];
}

// вывод информации на консоль
console.log(obj);

// удаление тега <p>
var par = strP.parentElement;
par.removeChild(strP);

// отрисовка страницы
for (var i = 0; i < obj.count; ++i) {
  var newT = document.createElement(obj.element);
  newT.textContent = obj.text;
  par.appendChild(newT);
}
