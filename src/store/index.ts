import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import proposal_tahap_1 from './modules/proposal-tahap/proposal-tahap-1';
import proposal_tahap_2 from './modules/proposal-tahap/proposal-tahap-2';
import proposal_tahap_3 from './modules/proposal-tahap/proposal-tahap-3';
import proposal_tahap_4 from './modules/proposal-tahap/proposal-tahap-4';
import proposal_tahap_5 from './modules/proposal-tahap/proposal-tahap-5';
import proposal_tahap_6 from './modules/proposal-tahap/proposal-tahap-6';
import proposal_tahap from './modules/proposal-tahap/proposal-tahap';

import analisa_proposal_tahap_1 from './modules/analisa-proposal-tahap/analisa-proposal-tahap-1'
import analisa_proposal_tahap_2 from './modules/analisa-proposal-tahap/analisa-proposal-tahap-2'
import analisa_proposal_tahap_2_pendapatan_usaha_modal from './modules/analisa-proposal-tahap/analisa-proposal-tahap-2-pendapatan-usaha-modal'
import analisa_proposal_tahap_2_rincian_kredit_modal from './modules/analisa-proposal-tahap/analisa-proposal-tahap-2-rincian-kredit-modal'
import analisa_proposal_tahap_3 from './modules/analisa-proposal-tahap/analisa-proposal-tahap-3'
import analisa_proposal_tahap_4 from './modules/analisa-proposal-tahap/analisa-proposal-tahap-4'
import analisa_proposal_tahap_5 from './modules/analisa-proposal-tahap/analisa-proposal-tahap-5'
import analisa_proposal_tahap_6 from './modules/analisa-proposal-tahap/analisa-proposal-tahap-6'


import surveyor from './modules/register-surveyor';
import survey from './modules/register-survey';
import pemohon from './modules/master-pemohon';
import proposal from './modules/proposal';
import analisa_proposal from './modules/analisa-proposal'
import monitoring_evaluasi from './modules/monitoring-evaluasi'
import monitoring_evaluasi_remedial from './modules/monitoring-evaluasi-remedial'
import utilitas from './modules/utilitas'
import penagihan from './modules/penagihan'
import penagihan_piutang from './modules/penagihan-piutang'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    surveyor,
    survey,
    pemohon,
    proposal,
    analisa_proposal,
    monitoring_evaluasi,
    monitoring_evaluasi_remedial,
    utilitas,
    penagihan,
    penagihan_piutang,

    proposal_tahap_1,
    proposal_tahap_2,
    proposal_tahap_3,
    proposal_tahap_4,
    proposal_tahap_5,
    proposal_tahap_6,
    proposal_tahap,

    analisa_proposal_tahap_1,
    analisa_proposal_tahap_2,
    analisa_proposal_tahap_2_pendapatan_usaha_modal,
    analisa_proposal_tahap_2_rincian_kredit_modal,
    analisa_proposal_tahap_3,
    analisa_proposal_tahap_4,
    analisa_proposal_tahap_5,
    analisa_proposal_tahap_6,
  }
})
