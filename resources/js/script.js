$(document).ready(function () {
	
er = 'Ошибка! Вы не заполнили поле Email';
successSubscribe = 'Спасибо! Вы успешно подписались';
erCheckbox = 'Ошибка! Вы не согласились с обработкой персональных данных.';
form = $("#formSubscribe");
var combobox = $('#sortCombobox');

//обработка комбобокса сортировки
combobox.on('focus', function () {

//alert ('oki');

});
//модальное окно
modal = $('#modal');

//обработка формы подписки
$(form).on ('submit', function (event) {
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
$('.tab').focusin(function () {
var 	tab = $(this);
$(document).keyup(function(e) { 

if (e.key === "ArrowUp" || e.keyCode === 38) { 
	tabp = tab.prev();
	tabp.focus();
	if (e.key === "Enter" || e.keyCode === 13) { 
	tabp.attr('tabindex', '0');
	tab.attr('tabindex', '-1');
	tab.attr('aria-selected', null);	
tabp.attr('aria-selected', 'true');
return;
}
	return;	
}
if (e.key === "ArrowDown" || e.keyCode === 40) { 
	tabn = tab.next();
	tabn.focus();
	if (e.key === "Enter" || e.keyCode === 13) { 
	tabn.attr('tabindex', '0');
	tab.attr('tabindex', '-1');
	tab.attr('aria-selected', null);	
tabn.attr('aria-selected', 'true');
panelID = tabn.attr('aria-controls');
	panel = $('#'+panelID);	
panel.attr('style', 'display:block');
return;
}	
	return;
}
});

});
});