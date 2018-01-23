window.onload = function () {
	
	var tasks = [];

	document.querySelector('.btn-add-task').onclick = function () {

		if (document.getElementById('newTask').value) {
			document.querySelector('.error').innerHTML = '';
			var text = document.getElementById('newTask').value.substr(0, 140);
			var task = {};
			task.text = text;

			document.getElementById('newTask').value = '';

			var i = tasks.length;
			tasks[i] = task;

			render();
		} else {
			document.querySelector('.error').innerHTML = 'Please, type enter task';
		}

	}

	function render() {

		for (var key in tasks) {
			var addedTask = document.createElement('li');
			var finishBtn = document.createElement('button');
			var deleteBtn = document.createElement('button');
			addedTask.innerHTML = tasks[key].text;
		}

		document.querySelector('.taskRender').insertBefore(addedTask, document.querySelector('.taskRender').firstChild);
		addedTask.classList.add('task');
		addedTask.appendChild(deleteBtn);
		deleteBtn.classList.add('btn', 'btn-delete-task');
		addedTask.appendChild(finishBtn);
		finishBtn.classList.add('btn', 'btn-finish-task');

		deleteBtn.onclick=deleteTask;
		finishBtn.onclick=finishTask;

	}

	document.querySelector('.btn-remove-text').onclick = function() {
 		document.getElementById('newTask').value = '';
	}

	var finishTask = function() {
		var task = this.parentNode;
		var list = task.parentNode;

 		while (task.childNodes.length != 1) {
  		task.removeChild(task.lastChild);
		}

		task.style.textDecoration = 'line-through';

		list.removeChild(task);
		list.appendChild(task);

	}

	var deleteTask = function() {
 		var task = this.parentNode;
 		var list = task.parentNode;

 		list.removeChild(task);
	}

}
