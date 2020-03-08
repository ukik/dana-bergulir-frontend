import Vue from 'vue'

// FontAwesomeIcon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faSpinner, faHeart, faTachometerAlt, faUser, faUserFriends, faSearch, faPencilAlt, faTrashAlt, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret, faSpinner, faHeart, faTachometerAlt, faUser, faUserFriends, faSearch, faPencilAlt, faTrashAlt, faPlus, faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);
