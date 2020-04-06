import Vue from 'vue'

Vue.directive("middle", {
		inserted(el, binding, vnode) {
				// console.log(binding.value)
				el.style.display = "contents";
		},
		update(el, binding, vnode) {
				// console.log(binding.value)
				el.style.display = "contents";
		}
});

Vue.directive("status-proposal", {
		inserted(el, binding, vnode) {
				// console.log(binding.value)
				el.style.background = "#E76060";
				el.style.borderRadius = '20px';
				el.style.color = '#fff';
				el.style.padding = '5px 10px';
		},
		update(el, binding, vnode) {
				// console.log(binding.value)
				el.style.background = "#E76060";
				el.style.borderRadius = '20px';
				el.style.color = '#fff';
				el.style.padding = '5px 10px';
		}
});

Vue.directive("analisa-proposal", {
		inserted(el, binding, vnode) {
				// console.log(binding.value)
				el.style.background = "#58C0E7";
				el.style.borderRadius = '20px';
				el.style.color = '#fff';
				el.style.padding = '5px 10px';
		},
		update(el, binding, vnode) {
				// console.log(binding.value)
				el.style.background = "#58C0E7";
				el.style.borderRadius = '20px';
				el.style.color = '#fff';
				el.style.padding = '5px 10px';
		}
});

Vue.directive("remedial-master", {
		inserted(el, binding, vnode) {
				// console.log(binding.value)
				el.style.background = "#dc3545";
				el.style.borderRadius = '20px';
				el.style.color = '#fff';
				el.style.padding = '5px 10px';
		},
		update(el, binding, vnode) {
				// console.log(binding.value)
				el.style.background = "#dc3545";
				el.style.borderRadius = '20px';
				el.style.color = '#fff';
				el.style.padding = '5px 10px';
		}
});

Vue.directive("required", {
		/*
		inserted(el, binding, vnode) {
				console.log('inserted', binding.value)
				el.style.borderColor = "red";
		},
		*/
		update(el, binding, vnode) {
				console.log('update', binding.value)
				el.style.borderColor = "red";
		}
});

Vue.directive("proposal-review", {
		inserted(el, binding, vnode) {
				// console.log('inserted', binding.value, binding.value.name == "proposal-tahap-7")
				if(binding.value.name == "proposal-tahap-7") {
					el.style.backgroundColor = "#fff"
				} else {
					el.style.backgroundColor = "#ECF0F1"
				}
		},
		update(el, binding, vnode) {
			if(binding.value.name == "proposal-tahap-7") {
				el.style.backgroundColor = "#fff"
			} else {
				el.style.backgroundColor = "#ECF0F1"
			}
		}
});


Vue.directive("pointer", {
		inserted(el, binding, vnode) {
				// console.log(binding.value)
				el.style.cursor = "default";
		},
		update(el, binding, vnode) {
				// console.log(binding.value)
				el.style.cursor = "default";
		}
});


Vue.directive("hand", {
		inserted(el, binding, vnode) {
				// console.log(binding.value)
				el.style.cursor = "pointer";
		},
		update(el, binding, vnode) {
				// console.log(binding.value)
				el.style.cursor = "pointer";
		}
});


Vue.directive("pointer-proposal", {
		inserted(el, binding, vnode) {
				console.log(binding.value.status)
				if(binding.value.status !== "after") {
					el.style.cursor = "default";
				}
		},
		// update(el, binding, vnode) {
		// 		// console.log(binding.value)
		// 		el.style.cursor = "default";
		// }
});


Vue.directive("vmiddle", {
		inserted(el, binding, vnode) {
				// console.log(binding.value)
				el.style.verticalAlign = "middle";
		},
		update(el, binding, vnode) {
				// console.log(binding.value)
				el.style.verticalAlign = "middle";
		}
});

Vue.directive("mons-bold", {
		inserted(el, binding, vnode) {
				// console.log(binding.value)
				el.style.fontFamily = "Montserrat_Bold";
		},
		update(el, binding, vnode) {
				// console.log(binding.value)
				el.style.fontFamily = "Montserrat_Bold";
		}
});
