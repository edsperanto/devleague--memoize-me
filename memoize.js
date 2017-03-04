window.memoize = (function() {

	var cache = {
		id: {},
		query: {}
	};

	function getQuery(query) {
		let memory = cache.query[query];
		if(!!memory) {
			return memory;
		} else {
			memory = document.querySelector(query);
			return memory;
		}
	}

	function getId(id) {
		let memory = cache.id[id];
		if(memory) {
			return memory;
		} else {
			memory = document.getElementById(id);
			return memory;
		}
	}

	return {
		query: getQuery,
		id: getId
	}

})();
