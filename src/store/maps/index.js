import Vue from 'vue'

import proposal_tahap_1 from './proposal-tahap/proposal-tahap-1'
import proposal_tahap_2 from './proposal-tahap/proposal-tahap-2'
import proposal_tahap_3 from './proposal-tahap/proposal-tahap-3'
import proposal_tahap_4 from './proposal-tahap/proposal-tahap-4'
import proposal_tahap_5 from './proposal-tahap/proposal-tahap-5'
import proposal_tahap_6 from './proposal-tahap/proposal-tahap-6'
import proposal_tahap from './proposal-tahap/proposal-tahap'

import analisa_proposal_tahap_1 from './analisa-proposal-tahap/analisa-proposal-tahap-1'
import analisa_proposal_tahap_2 from './analisa-proposal-tahap/analisa-proposal-tahap-2'
import analisa_proposal_tahap_2_pendapatan_usaha_modal from './analisa-proposal-tahap/analisa-proposal-tahap-2-pendapatan-usaha-modal'
import analisa_proposal_tahap_2_rincian_kredit_modal from './analisa-proposal-tahap/analisa-proposal-tahap-2-rincian-kredit-modal'
import analisa_proposal_tahap_3 from './analisa-proposal-tahap/analisa-proposal-tahap-3'
import analisa_proposal_tahap_4 from './analisa-proposal-tahap/analisa-proposal-tahap-4'
import analisa_proposal_tahap_5 from './analisa-proposal-tahap/analisa-proposal-tahap-5'
import analisa_proposal_tahap_6 from './analisa-proposal-tahap/analisa-proposal-tahap-6'

import surveyor from './register-surveyor'
import survey from './register-survey'
import pemohon from './master-pemohon'
import proposal from './proposal'
import analisa_proposal from './analisa-proposal'
import monitoring_evaluasi from './monitoring-evaluasi'
import monitoring_evaluasi_remedial from './monitoring-evaluasi-remedial'
import utilitas from './utilitas'
import penagihan from './penagihan'
import penagihan_piutang from './penagihan-piutang'

Vue.mixin(proposal_tahap_1)
Vue.mixin(proposal_tahap_2)
Vue.mixin(proposal_tahap_3)
Vue.mixin(proposal_tahap_4)
Vue.mixin(proposal_tahap_5)
Vue.mixin(proposal_tahap_6)
Vue.mixin(proposal_tahap)

Vue.mixin(analisa_proposal_tahap_1)
Vue.mixin(analisa_proposal_tahap_2)
Vue.mixin(analisa_proposal_tahap_2_pendapatan_usaha_modal)
Vue.mixin(analisa_proposal_tahap_2_rincian_kredit_modal)
Vue.mixin(analisa_proposal_tahap_3)
Vue.mixin(analisa_proposal_tahap_4)
Vue.mixin(analisa_proposal_tahap_5)
Vue.mixin(analisa_proposal_tahap_6)

Vue.mixin(surveyor)
Vue.mixin(survey)
Vue.mixin(pemohon)
Vue.mixin(proposal)
Vue.mixin(analisa_proposal)
Vue.mixin(monitoring_evaluasi)
Vue.mixin(monitoring_evaluasi_remedial)
Vue.mixin(utilitas)
Vue.mixin(penagihan)
Vue.mixin(penagihan_piutang)
