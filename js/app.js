$( document ).ready(function() {
		 // jQuery project demo
		var playHadouken = false;

		$('#my-div').append('<img src="img/90Mmdcm.png">')

		$('#my-div img').hover( function() {
				this.src = 'img/nTj3Fxx.gif'
		}, function() {
				this.src = 'img/90Mmdcm.png'
		})

		$('#my-div img').mousedown( function() {
				this.src = 'img/Rfj0a80.png'
		})

		$('#my-div img').mousedown(function() {
				$('.demo-hadouken').remove();
		})

		$('#my-div img').mousedown(function() {
				$('#my-div').append(
				'<img class="demo-hadouken" src="img/oTyQRvX.gif">'
				);
		})

		$('#my-div img').mousedown(function() {
			if (playHadouken) {
				$('#hadouken-sound')[0].load();
				$('#hadouken-sound')[0].play();
			}
				$('.demo-hadouken').animate( {
						"margin-left": "600px"
				}, 1000, 'swing', function() {
						this.remove();
				})
		})


		$('#my-div img').mouseup(function() {
				this.src = 'img/90Mmdcm.png'
		})

		$('#main-example').on('mouseup', function() {
				this.src = '/learn/static/guides/intro-to-jquery/images/ryu_animated.gif';
			});

			$('#main-example-add-sound').on('click', function() {
				playHadouken = !playHadouken;

				if (playHadouken)
					$(this).html('Sound added, click on Ryu');

				if (!playHadouken)
					$(this).html('Sound removed, click to add it back');
		});

});
