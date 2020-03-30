const proposal_tahap_1 = require('./proposal-tahap/proposal-tahap-1')
const proposal_tahap_2 = require('./proposal-tahap/proposal-tahap-2')
const proposal_tahap_3 = require('./proposal-tahap/proposal-tahap-3')
const proposal_tahap_4 = require('./proposal-tahap/proposal-tahap-4')
const proposal_tahap_5 = require('./proposal-tahap/proposal-tahap-5')
const proposal_tahap_6 = require('./proposal-tahap/proposal-tahap-6')
const proposal_tahap = require('./proposal-tahap/proposal-tahap')

const analisa_proposal_tahap_1 = require('./analisa-proposal-tahap/analisa-proposal-tahap-1')
const analisa_proposal_tahap_2 = require('./analisa-proposal-tahap/analisa-proposal-tahap-2')
const analisa_proposal_tahap_3 = require('./analisa-proposal-tahap/analisa-proposal-tahap-3')
const analisa_proposal_tahap_4 = require('./analisa-proposal-tahap/analisa-proposal-tahap-4')
const analisa_proposal_tahap_5 = require('./analisa-proposal-tahap/analisa-proposal-tahap-5')
const analisa_proposal_tahap_6 = require('./analisa-proposal-tahap/analisa-proposal-tahap-6')

const surveyor = require('./register-surveyor')
const survey = require('./register-survey')
const pemohon = require('./master-pemohon')
const proposal = require('./proposal')
const analisa_proposal = require('./analisa-proposal')

module.exports = {
    proposal_tahap_1,
    proposal_tahap_2,
    proposal_tahap_3,
    proposal_tahap_4,
    proposal_tahap_5,
    proposal_tahap_6,
    proposal_tahap,

    analisa_proposal_tahap_1,
    analisa_proposal_tahap_2,
    analisa_proposal_tahap_3,
    analisa_proposal_tahap_4,
    analisa_proposal_tahap_5,
    analisa_proposal_tahap_6,

    surveyor,
    survey,
    pemohon,
    proposal,
    analisa_proposal,
}

// only works without param in getters
// inline access
// this.$store.getters['status/REQUEST_STATUS'] // GETTERS
// this.$store.commit('yourModuleName/doSomething', {payload: data}) // MUTATIONS
// this.$store.dispatch('yourModuleName/doSomething', {payload: data}) // ACTION
