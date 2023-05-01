$(document).ready(function () {
//обработка комбобокса сортировки
$('#sortCombobox').on ('blur', function () {
$('#sortCombobox').attr('aria-expanded', 'false');
$('#listBox-1').attr('class', 'display-none');
});
$('#sortCombobox').keyup(function(e) { 
var list = $('#listBox-1');
var combo = $('#sortCombobox');
var items = list.children();
if (e.key === "ArrowUp" || e.keyCode === 38) { 
}
if (e.key === "ArrowDown" || e.keyCode === 40) { 
combo.attr('aria-expanded', 'true');
list.attr('class', null);	
items.first().focus();

}
});
//модальное окно
modal = $('#modal');

//обработка формы подписки
$("#formSubscribe").on ('submit', function (event) {
	var er = 'Ошибка! Вы не заполнили поле Email';
var successSubscribe = 'Спасибо! Вы успешно подписались';
var erCheckbox = 'Ошибка! Вы не согласились с обработкой персональных данных.';

emailSubscribe = $("#inputEmailSubscribe");
textSubscribe = $('#textSubscribe');
checkbox = $('#checkbox');


    if (emailSubscribe.val().length === 0) {
    		textSubscribe.attr('role', 'alert');
    		textSubscribe.attr('aria-live', 'assertive');   
textSubscribe.html(er);
}	
else if (!checkbox.is(':checked')) {
	textSubscribe.attr('role', 'alert');
    		textSubscribe.attr('aria-live', 'assertive');    	
textSubscribe.html(erCheckbox);
}
else
		textSubscribe.html(successSubscribe );
	return false;
});
//добавляем в избранное
$('.btn-favorit').on('click', function () {
	btn = $(this);
	cartQ = $('#cart-quontity');
	msg = $('#cart-link');
	if (msg.attr('aria-live') ) {
		msg.attr('aria-live', null);
		msg.attr('role', null);
	}	
	msg.attr('aria-live', 'assertive');
	msg.attr('role', 'alert');
	if (btn.attr('aria-pressed')) {	
		btn.attr('aria-pressed', null);
		q = cartQ.html();
q = Number (q);	
		cartQ.html(q-1);
			}
	else {
btn.attr('aria-pressed', 'true');
		q = cartQ.html();
		q = Number (q);	
		cartQ.html(q+1);	
	
		}
	});
//покупка
$('.btn-buy').on('click', function () {
modal = $('#modal');	
btn = $(this);
product = btn.siblings('h3').html();
head = $('#modal-header');
head.attr('tabindex', '-1');
head.html('Купить ' + product);
modal.attr('style', 'display:block;');
head.focus();
//закрываем модалку
$('#modal-close').on ('click', function () {
modal.attr ('style', 'display:none');
btn.focus();
});
//закрываем по esc
$(document).keyup(function(e) {
	if (e.key === "Escape" || e.keyCode === 27) {
		modal.attr ('style', 'display:none');
btn.focus();
	}
});

});
//вкладки

$('.tab').keyup(function(e) { 
 var tab = $(this);
if (e.key === "ArrowUp" || e.keyCode === 38) { 	
		$(this).prev().focus();
}
if (e.key === "ArrowDown" || e.keyCode === 40) { 
$(this).next().focus();
}
if (e.key === "Enter" || e.keyCode === 13) { 
	t = $('.tab[tabindex=0]');
	tid = t.attr('id');
	tc = $('#panel-content div[aria-labelledby="' + tid + '"]');
	tc.attr('class', 'display-none');
	t.attr ('tabindex', '-1');	
	t.attr('aria-selected', 'false');	
tab.attr ('tabindex', '0');
tab.attr('aria-selected', 'true');
tabid = tab.attr('id');
c = $('#panel-content div[aria-labelledby="' + tabid + '"]');
c.attr('class', null);
tabinfo = $('#panel-content');
tabinfo.attr('role', 'alert');
    		tabinfo.attr('aria-live', 'assertive');    	
    	
return;
}

return;
});
//модальная форма
$('#modal-Form').on ('submit', function (e) {
name = $('#input-order-name');
nameErr = $('#modal-error-name');
nameErr.html('Ошибка! Вы не ввели имя');
	if (name.length <= 5) {
    		nameErr.attr('role', 'alert');
    		nameErr.attr('aria-live', 'assertive');   
    		name.attr ('aria-invalid', 'true');
nameErr.html('Ошибка! Вы не ввели имя');
}	
return;
});
});