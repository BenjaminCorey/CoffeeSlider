class Slider
	constructor: (@id) ->
		unless id
			return false
		@index = 0
		@slider = $(@id)
		@length = @slider.children().length
		@width = $(@id).outerWidth()
		@totalWidth = @length * @width
		$(id).addClass('slideWrapper')
			.wrap('<div class="slideViewport">')
			.after('<a href="#" class="prev">Previous</a><a href="#" class="next">Next</a>')
			.css({'width': @totalWidth})
			.children()
			.addClass('slide')
			.css({'width': @width})
		$('.slideViewport a.next').click (e) =>
			e.preventDefault()
			@next()
		$('.slideViewport a.prev').click (e) =>
			e.preventDefault()
			@prev()

	next: ->
		@index++
		if @index >= @length
			@index = 0
			margin = 0
		margin = @index * @width
		@slider.animate({'marginLeft': -margin})
	prev: ->
		@index--
		if @index < 0
			@index = @length - 1
		margin = @index * @width
		@slider.animate({'marginLeft': -margin})