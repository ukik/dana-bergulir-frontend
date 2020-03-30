<template lang="html">
<fragment>

	<label class="container-radio">
		<input type="radio" checked="checked" name="radio">
	  <span class="checkmark"></span>
	</label>
</fragment>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
/* The container-radio */
.container-radio {
  display: block;
  position: relative;
  padding-left: 0px;
  margin-bottom: 0px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container-radio:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container-radio input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container-radio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container-radio .checkmark:after {
 	top: 5px;
	left: 5px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
</style>
