fetch('http://54.uz/rang.php')
.then(response => response.json())
	.then(data => {
		const color = data.status
		const status = document.querySelector(".status")
		status.textContent = color

		if ( color === 'sariq') {
			document.body.style.backgroundColor = 'yellow'
		}
	
		else if ( color === 'qora') {
			document.body.style.backgroundColor = 'black';
			status.style.color = 'white'
		}
	
		else if ( color === 'qizil') {
			document.body.style.backgroundColor = 'red'
		}
	
		else if ( color === 'yaxshil') {
			document.body.style.backgroundColor = 'green'
		}
	
		else if ( color === 'ko\'k') {
			document.body.style.backgroundColor = 'blue'
		}

		else if ( color === 'oq') {
			status.style.color = 'black'
		}

	})



