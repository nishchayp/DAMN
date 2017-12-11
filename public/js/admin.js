$(document).ready(function(){

	dispData('accesses');

	$('#nav-accesses').click(function(e) {
		dispData('accesses');
	});

	$('#nav-access-requests').click(function(e) {
		dispData('accessrequests');
	});

	$('#nav-admins').click(function(e) {
		dispData('admins');
	});

	$('#nav-admin-requests').click(function(e) {
		dispData('adminrequests');
	});	

	$('.close-modal').click(function(e) {
		$('#user-modal-background').css('display', 'none');
	});

	$(window).click(function(e) {
		if(e.target === document.getElementById('user-modal-background'))
			$('#user-modal-background').css('display', 'none');
	});

	$('#burger-container').on('click', function() {
		$(this).toggleClass('open');
		$('.nav').slideToggle();
		$('.heading').slideToggle();
	});

	$('.nav-links').click(function(){
		$(this).addClass('active');
		$('.heading').text($(this).text());
		$(this).parent().children('.nav-links').not(this).removeClass('active');
		if($('#burger-container').hasClass('open')) {
			$('#burger-container').toggleClass('open');
			$('.nav').slideToggle();
			$('.heading').slideToggle();
		}
	});

});

var items = [];
var item;

function view(id) {

	item = items.filter(function(item){
		if(
			item.access_id === id || 
			item.access_request_id === id || 
			item.admin_id === id || 
			item.admin_request_id === id
			) return true;
	})[0];
	$('#user-modal-background').css('display', 'flex');
	$('#modal-name').text(item.name);
	$('#modal-email').text(item.email);
	$('#modal-ssh-key').html(`
		<div id="ssh-key">${item.ssh_key}</div>
		<button data-clipboard-action="copy" data-clipboard-target="#ssh-key" class="copy-btn">Copy key</button> for ${item.ssh_key.split(' ')[2]}
		`);
	var clipboard = new Clipboard('.copy-btn');
	if(!!item['ip']) {
		$('#modal-ip-message-title').text('IP');
		$('#modal-ip-message').text(item.ip);
		$('.modal-buttons').html(`
			<button class="modal-btn" onclick="revokeAccess(${item.access_id})" id="btn-revoke">Revoke</button>
			`);
	} else if(!!item['message']) {
		$('#modal-ip-message-title').text('Message');
		$('#modal-ip-message').text(item.message);
		$('.modal-buttons').html(`
			<input class="modal-input" onkeyup="testInputIP()" id="input-ip" placeholder="IP Address">
			<button class="modal-btn" onclick="acceptAccessRequest(${item.access_request_id})" id="btn-accept">Accept</button>
			<button class="modal-btn" onclick="rejectAccessRequest(${item.access_request_id})" id="btn-reject">Reject</button>
			`);
	}

}

function copyKey() {
	document.getElementById('ssh-key').select();
	console.log(document.getElementById('ssh-key').value)
	document.execCommand('copy');
}

function dispData(type) {
	$.ajax({
		url: `/${type}`,
		type: 'GET',
		success: function(result) {
			if(result.success) {			
				items = JSON.parse(result.message);
				var fragment = '';
				if(items.length > 0)
					items.forEach(function(item) {
						fragment += makeRecordDiv(item, type);
					});
				else
					fragment = `<div class="no-content">Nothing to show</div>`
				$('#users').html(fragment);
			} else {
				$('#user-modal-background').html('<div style="padding: 20px">This page requires admins privileges. Login to an admin account to continue.</div>');
				$('#user-modal-background').css({'display': 'flex', 'color': '#eee', 'font-weight': 'bolder'});
			}
		}
	});
}

function makeRecordDiv(item, type) {

	switch(type) {
		case 'accesses':
			return `
				<div class="user">
					<div class="detail">${$('<div/>').text(item.name).html()}</div>
					<div class="detail">${$('<div/>').text(item.ip).html()}</div>
					<div class="items-right">
						<button class="view" onclick="view(${item.access_id})">View</button>
					</div>
				</div>
			`;
		case 'accessrequests':
			return `
				<div class="user">
					<div class="detail">${$('<div/>').text(item.name).html()}</div>
					<div class="detail">${$('<div/>').text(item.message).html()}</div>
					<div class="items-right">
						<button class="view" onclick="view(${item.access_request_id})">View</button>
					</div>
				</div>
			`;
		case 'admins':
			return `
				<div class="user">
					<div class="detail">${$('<div/>').text(item.name).html()}</div>
					<div class="detail">${$('<div/>').text(item.email).html()}</div>
					<div class="items-right">
						<div class="download">
                        	<button onclick="revokeAdmin(${item.admin_id})">Revoke</button>
                        </div>
					</div>
				</div>
			`;
		case 'adminrequests':
			return `
				<div class="user">
					<div class="detail">${$('<div/>').text(item.name).html()}</div>
					<div class="detail">${$('<div/>').text(item.email).html()}</div>
					<div class="items-right">
						<div class="download">
                        	<button onclick="acceptAdminRequest(${item.admin_request_id})">Accept</button>
                        	<button onclick="rejectAdminRequest(${item.admin_request_id})">Reject</button>
                        </div>
					</div>
				</div>
			`;
	}

}

function acceptAccessRequest(id) {
	var ip = $('#input-ip').val();
	if(validateIPAddress(ip) || validateDomain(ip)) {
		$.ajax({
			url: '/admin/acceptAccessRequest/' + id,
			type: 'POST',
			data: `{ "ip": "${ip}"  }`,
			dataType: 'text',
			success: function(result) {
				result = JSON.parse(result);
				if(result.success === false)
					snackbarAlertDanger(result.message);
				else {
					$('.close-modal').click();
					dispData('accessrequests');
					snackbarAlert(result.message);
				}
			}
		});
	} else {
		snackbarAlertDanger('Enter a valid IP or domain');
	}
}

function rejectAccessRequest(id) {
	$.ajax({
		url: '/admin/rejectAccessRequest/' + id,
		type: 'GET',
		success: function(result) {
			if(result.success === false)
				snackbarAlertDanger(result.message);
			else {
				$('.close-modal').click();
				dispData('accessrequests');
				snackbarAlert(result.message);
			}
		}
	});
}

function revokeAccess(id) {
	$.ajax({
		url: '/admin/revokeAccessPrivilege/' + id,
		type: 'GET',
		success: function(result) {
			if(result.success === false)
				snackbarAlertDanger(result.message);
			else {
				$('.close-modal').click();
				dispData('accesses');
				snackbarAlert(result.message);
			}
		}
	});
}

function revokeAdmin(id) {
	$.ajax({
		url: '/admin/revokeAdminPrivilege/' + id,
		type: 'GET',
		success: function(result) {
			if(result.success === false)
				snackbarAlertDanger(result.message);
			else {
				dispData('admins');
				snackbarAlert(result.message);
			}
		}
	});
}

function acceptAdminRequest(id) {
	$.ajax({
		url: '/admin/acceptAdminRequest/' + id,
		type: 'GET',
		success: function(result) {
			if(result.success === false)
				snackbarAlertDanger(result.message);
			else {
				dispData('adminrequests');
				snackbarAlert(result.message);
			}
		}
	});
}

function rejectAdminRequest(id) {
	$.ajax({
		url: '/admin/rejectAdminRequest/' + id,
		type: 'GET',
		success: function(result) {
			if(result.success === false)
				snackbarAlertDanger(result.message);
			else {
				dispData('adminrequests');
				snackbarAlert(result.message);
			}
		}
	});
}

function testInputIP() {
	var input = document.getElementById('input-ip');
	var ip = input.value;
	if(validateIPAddress(ip) || validateDomain(ip)) {
		input.classList.remove('wrong-input');
		input.classList.add('right-input');
	} else {
		input.classList.remove('right-input');
		input.classList.add('wrong-input');
	}

}

function validateIPAddress(ipaddress) {
	if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
		return true;
	}
	return false;
}

function validateDomain(domain) {
	if (/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain)) {
		return true;
	}
	return false;
}

function snackbarAlert(msg) {
	$('#snackbar').text(msg);
	$('#snackbar').toggleClass('show');
	setTimeout(function() {
		$('#snackbar').toggleClass('show');
	}, 3000);
}

function snackbarAlertDanger(msg) {
		$('#snackbar').css({
		'background-color': '#C9302C',
		'font-weight': 'bolder',
		'color': '#eee'
		});
	$('#snackbar').text(msg);
	$('#snackbar').toggleClass('show');
	setTimeout(function() {
		$('#snackbar').toggleClass('show');
		$('#snackbar').css({
			'background-color': '#AAAAAA',
			'font-weight': 'normal',
			'color': '#333333'
		});
	}, 3000);
}