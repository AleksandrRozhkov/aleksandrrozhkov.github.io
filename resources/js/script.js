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
items.first().focus();
if (combo.attr('aria-expanded') === 'true') {
	if (e.key === "ArrowUp" || e.keyCode === 38) { 
	current = combo.attr('aria-activedescendant');
	i = $('#' + current);
	
	i.attr('aria-selected', null);
	n = i.prev();
	n.attr('aria-selected', 'true');
	combo.attr('aria-activedescendant', n.attr('id'));
	n.focus();
		
	}
	if (e.key === "ArrowDown" || e.keyCode === 40) { 
	current = combo.attr('aria-activedescendant');
	i = $('#' + current);

	i.attr('aria-selected', null);
	n = i.next();
	n.attr('aria-selected', 'true');
	combo.attr('aria-activedescendant', n.attr('id'));
	n.focus();
	}
	if (e.key === "Enter" || e.keyCode === 13) { 
		
combo.attr('aria-expanded', 'false');
list.attr('class', 'display-none');	
	say = $('#sort-label');
	say.attr('aria-live', null);
	current = combo.attr('aria-activedescendant');
	i = $('#' + current);
say.attr('aria-live', 'assertive');
	msg = 'Сортировать по: ' + i.html();
	say.html(msg);

	}
}
else {
if (e.key === "ArrowUp" || e.keyCode === 38) { 
	combo.attr('aria-expanded', 'true');
list.attr('class', null);	

}
if (e.key === "ArrowDown" || e.keyCode === 40) { 
combo.attr('aria-expanded', 'true');
list.attr('class', null);	
}
if (e.key === "Enter" || e.keyCode === 13) { 
combo.attr('aria-expanded', 'true');
list.attr('class', null);	
	
}
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

emailSubscribe.attr('aria-invalid', null);
    		checkbox.attr('aria-invalid', null);
    if (emailSubscribe.val().length === 0) {
    		textSubscribe.attr('role', 'alert');
    		textSubscribe.attr('aria-live', 'assertive');   
    		emailSubscribe.attr('aria-invalid', 'true');
textSubscribe.html(er);
}	
else if (!checkbox.is(':checked')) {
	textSubscribe.attr('role', 'alert');
    		textSubscribe.attr('aria-live', 'assertive');    	    	
    		checkbox.attr('aria-invalid', 'true');
textSubscribe.html(erCheckbox);
}
else {
		textSubscribe.html(successSubscribe );
	emailSubscribe.attr('aria-invalid', null);	
	emailSubscribe.val('');
	}
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

    		tabinfo.attr('aria-live', 'assertive');    	
    	
return;
}

return;
});
//модальная форма
$('#modal-Form').on ('submit', function (e) {
	var name = $('#input-order-name');
var nameErr = $('#modal-error-name');
var email = $('#input-order-email');
var emailErr = $('#modal-error-email');
var address = $('#input-order-address');
var addressErr = $('#modal-error-address');
var error = $('#modal-error');
var ctn = 0;
error.attr('role', null);
    		error.attr('aria-live', null);

if (name.val().length === 0) {
			name.attr ('aria-invalid', 'true');
		
		nameErr.html('Вы не ввели имя.');
		
ctn = ctn + 1;
}
else 	if ((name.val().length >= 1) && (name.val().length <= 5)) {
    		name.attr ('aria-invalid', 'true');
    		nameErr.html('Вы ввели слишком короткое имя.');
ctn = ctn + 1;
}	
else {
			name.attr ('aria-invalid', 'false');
    			nameErr.html('');
	}
	if (email.val().length === 0) {
			email.attr ('aria-invalid', 'true');
					emailErr.html('Вы не ввели email.');
ctn = ctn + 1;
}
else 	if ((email.val().length >= 1) && (email.val().length <= 5)) {
    		email.attr ('aria-invalid', 'true');
    				emailErr.html('Вы ввели слишком короткий email.');
ctn = ctn + 1;
}	
else {
			email.attr ('aria-invalid', 'false');
    			emailErr.html('');
	}
if (address.val().length === 0) {
			address.attr ('aria-invalid', 'true');
					addressErr.html('Вы не ввели адрес!');
ctn = ctn + 1;
}
else 	if ((address.val().length >= 1) && (address.val().length <= 5)) {
    		address.attr ('aria-invalid', 'true');
    				addressErr.html('Вы ввели слишком короткий адрес!');
ctn = ctn + 1;
}	
else {
			address.attr ('aria-invalid', 'false');
    			addressErr.html('');
	}

	if (ctn > 0) {
error.attr('role', 'alert');
    		error.attr('aria-live', 'assertive');
    	error.html('Форма была заполнена некорректно! Исправте ошибки и повторите попытку.');
	}
	else
		return true;
return false;
});
});