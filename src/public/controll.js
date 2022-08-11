(() => {
	try {
		const start = async () => {
			try {
				const streamUrl = document.querySelector('#streamUrl').value;
				const wsPorts = document.querySelector('#wsPorts').value;

				const resp = await axios.post('http://44.202.237.3:5051/start/' + wsPorts, { streamUrl });

				const canvas = document.getElementById(`chanel1`);

				const websocket = new WebSocket(resp.data.info.url);

				new jsmpeg(websocket, { canvas, autoplay: true, loop: true });
			} catch (err) {
				console.log(err.response.data.message);
			}
		};

		document.querySelector('button#start').addEventListener('click', start);

		const stop = async () => {
			try {
				const wsPorts = document.querySelector('#wsPorts').value;

				await axios.delete('http://44.202.237.3:5051/stop/' + wsPorts);

				const conten = document.getElementById(`conten-canvas`);

				conten.innerHTML =
					/* html */
					`<canvas id="chanel1" width="auto" height="auto"></canvas>`;
			} catch (err) {
				console.error(err);
			}
		};

		document.querySelector('button#stop').addEventListener('click', stop);
	} catch (err) {
		console.error(err);
	}
})();
