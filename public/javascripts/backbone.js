<!--<script type="text/javascript">
			var num = 0;
			var Router = Backbone.Router.extend({
				routes: {
					'gallerys/:num': 'append',
					'/action': 'default'
				},
				alertt: function() {
					alert("adf");
				},
				default: function() {
					$.ajax({
						type: "Get",
						url: "/gallerys/" + num,
						success: function(data) {
							console.log(data);
							var template = _.template($(".img_item").html());
							var html = [];
							console.log(data.length);
							for (var i = 1; i < data.length; i++) {
								var str = {
									imgs: data[i].imgs[0],
									name: data[i].name
								}
								html.push(template(str));
							}
							html.join('')
							$("#img_container").append(html);
							num++
						}
					})
				}
			});
			var rt = new Router();
			Backbone.history.start();
			var Model = Backbone.Model.extend({
				initialize: function() {
					//alert(this.get('name'))
				}
			});
			var Galleries = Backbone.Collection.extend({
				initialize: function() {},
				model: Model,
				url: function() {
					return "/gallerys/" + this.num
				},
				num: 0
			});
			var View = Backbone.View.extend({
				initialize: function() {
					this.listenTo(Galleries, "add", this.add)
				},
				el: "#img_container",
				render: function(context) {
					var template = _.template($(".img_item").html());
					console.log(template(context));
					$(this.el).html(template(context));
				},
				add: function(gallery) {
					console.log(gallery);
					var template = _.template($(".img_item").html());
					var g = _.clone(gallery.attributes);
					g.imgs=g.imgs[0];
					$(this.el).append(template(g));
				}
			});
			var Galleries = new Galleries();
			var galleryView = new View();
			Galleries.fetch()
		</script>
		<script type="text/javascript">
			$(function() {
				var imgload = imagesLoaded('.img_container');
				$('.img_container').masonry({
						columnWidth: '.item',
						itemSelector: '.item'
					});
				imgload.on('fail', function() {
					$('.img_container').masonry({
						columnWidth: '.item',
						itemSelector: '.item'
					});
				});
				$(window).scroll(function() {
					if ($(document).height() - $(window).height() - $(document).scrollTop() < 50) {
						rt.default()
					}
				});
			});
		</script>-->