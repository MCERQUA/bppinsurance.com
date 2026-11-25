'use client'
import { QuoteForm, type LegacyQuestion } from '@/components/quote/QuoteForm'

const BUSINESS_TYPES = [
  'Retail store',
  'Restaurant / food service',
  'Office / professional services',
  'Contractor / trades',
  'Service business',
  'Wholesale / distribution',
  'Manufacturing',
  'Other',
]

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  { name: 'business_q_property_coverage_requested', label: 'Also requesting Business Personal Property / Commercial Property coverage at this location?', type: 'select', options: ['Y', 'N'] },
  { name: 'business_q_property_coverage_requested_explanation', label: 'Describe the building/contents to be covered and estimated values', type: 'textarea' },
  { name: 'propertyProtectionDescription', label: 'Describe the protection at your location: alarm, sprinklers, extinguishers, deadbolts, cameras (if none, write None)', type: 'textarea' },
  { name: 'offPremisesOperationsDescription', label: 'Describe any work done away from your location (if none, write None)', type: 'textarea' },
  { name: 'publicCustomerExposureDescription', label: 'Describe customer or public access to your location and any events or hazards on site (if none, write None)', type: 'textarea' },
  { name: 'additionalInsuredName', label: 'Additional insured name', type: 'text' },
  { name: 'additionalInsuredAddress', label: 'Additional insured address', type: 'text' },
  { name: 'additionalInsuredCity', label: 'Additional insured city', type: 'text' },
  { name: 'additionalInsuredState', label: 'Additional insured state', type: 'text' },
  { name: 'additionalInsuredZip', label: 'Additional insured ZIP', type: 'text' },
  { name: 'certificateNeededBy', label: 'Certificate needed by', type: 'date' },
]

// business_q_<legacy> -> canonical yn key. The first group were tick-boxes (tick = on), the rest Y/N selects.
const CHECKBOX_Q: Record<string, string> = {
  subsidiary: 'applicantSubsidiary', has_subsidiaries: 'applicantHasSubsidiaries', safety_programs: 'safetyProgramsExist',
  exposure_flammables: 'exposureFlammables', other_insurance: 'otherInsurance', coverage_terminated: 'coverageTerminated',
  past_allegations: 'pastAllegations', indicted_convicted: 'indictedOrConvicted', safety_violations: 'safetyViolations',
  negative_financial_action: 'negativeFinancialAction', judgement_lien: 'judgementOrLien', trust: 'businessInTrust',
  foreign_operations: 'foreignOperations', other_ventures: 'otherVentures', possess_drones: 'possessDrones',
  hire_drones: 'hireDroneOperators',
}
const SELECT_Q: Record<string, string> = {
  leased_to_others: 'buildingLeasedToOthers', excluded_uninsured_prior: 'priorExclusionUninsured', tail_coverage: 'tailCoveragePurchased',
  draws_plans: 'drawsPlansForOthers', blasting: 'blastingOrExplosives', excavation: 'excavationOrEarthMoving',
  subs_lower_limits: 'subsRequireLowerLimits', subs_no_coi: 'subsWorkWithoutCOI', lease_equipment_to_others: 'leaseEquipmentToOthers',
  install_service_demo: 'installServiceDemoProducts', foreign_products: 'foreignProducts', rd_new_products: 'researchAndDevelopment',
  guarantees_warranties: 'guaranteesWarranties', aircraft_space_products: 'aircraftSpaceProducts', products_recalled: 'productsRecalled',
  products_of_others_repackaged: 'productsRepackagedUnderLabel', products_under_others_label: 'productsUnderOthersLabel',
  vendors_coverage: 'vendorsCoverageRequired', sell_to_other_insured: 'sellsToOtherNamedInsured', medical_facilities: 'medicalFacilities',
  radioactive_exposure: 'radioactiveExposure', hazardous_material_ops: 'hazardousMaterialOps', ops_sold_acquired: 'operationsSoldAcquired',
  rent_loan_equipment: 'rentOrLoanEquipment', watercraft: 'watercraftDocksFloats', parking_facilities: 'parkingFacilities',
  parking_fee: 'parkingFeeCharged', recreation_facilities: 'recreationFacilities', lodging_operations: 'lodgingOperations',
  swimming_pool: 'swimmingPool', social_events: 'socialEvents', athletic_teams: 'athleticTeams',
  structural_alterations: 'structuralAlterations', demolition_exposure: 'demolitionExposure', joint_ventures_active: 'activeJointVentures',
  lease_employees: 'leaseEmployees', labor_interchange: 'laborInterchange', daycare_facilities: 'dayCareFacilities',
  crimes_on_premises: 'crimesOnPremises', formal_safety_policy: 'formalSafetyPolicy', promo_literature_safety_claims: 'promotionalSafetyClaims',
}

// legacy field name -> canonical answer it mirrors (the shared form already asks it: derived, never asked twice).
const RENAME: Record<string, string> = {
  business_legal_name: 'businessName', street_address: 'address', business_county: 'physicalCounty',
  business_location_street: 'physicalAddress', business_location_city: 'physicalCity', business_location_state: 'physicalState',
  business_location_zip: 'physicalZip', business_location_description: 'locationDescription',
  business_employees_fulltime: 'fullTimeEmployees', business_employees_parttime: 'partTimeEmployees',
  business_entity_type: 'entityType', business_billing_plan: 'billingPlan', business_premises_interest: 'premisesInterest',
  business_location_city_limits: 'premisesCityLimits', business_fein: 'fein', business_date_started: 'businessStartDate',
  business_sic: 'sicCode', business_naics: 'naicsCode', business_description: 'businessDescription',
  business_gross_receipts: 'lastGrossSales', effective_date: 'desiredEffectiveDate',
  business_policy_expiration_date: 'desiredExpirationDate', business_gl_each_occurrence_limit: 'glEachOccurrence',
  business_gl_general_aggregate_limit: 'glGeneralAggregate', business_gl_products_completed_ops_limit: 'glProductsCompOpsAggregate',
  business_gl_personal_adv_injury_limit: 'glPersonalAdvertisingInjury', business_gl_fire_damage_rented_premises_limit: 'glDamageToRentedPremises',
  business_gl_medical_expense_limit: 'glMedicalExpense', business_gl_trigger: 'glTrigger', business_gl_aggregate_applies: 'glAggregateAppliesTo',
  business_subcontractors_paid_amount: 'lastSubcontractingCosts', business_subcontracted_work_percent: 'workSubcontractedPercent',
  business_prior_carrier: 'currentCarrier', business_limits_requested: 'requestedLimits', additional_notes: 'notes',
  business_loss_date: 'lossDate', business_loss_amount_paid: 'lossAmountPaid', business_loss_amount_reserved: 'lossAmountReserved',
  business_loss_description: 'lossDescription', business_num_employees: 'lastEmployeeCount', annualPayroll: 'lastEmployeePayroll',
  loss1Date: 'lossDate', loss1LineOfBusiness: 'lossLineOfBusiness', loss1Amount: 'lossAmountPaid',
}

const deriveLegacy = (d: Record<string, string>): Record<string, string> => {
  const out: Record<string, string> = {}
  for (const [legacy, canon] of Object.entries(RENAME)) out[legacy] = d[canon] ?? ''
  const yn = (key: string, yes: string, no: string) => (d[`yn_${key}`] === 'Yes' ? yes : d[`yn_${key}`] === 'No' ? no : '')
  for (const [q, key] of Object.entries(CHECKBOX_Q)) {
    out[`business_q_${q}`] = yn(key, 'on', 'N')
    out[`business_q_${q}_explanation`] = d[`ynExplain_${key}`] ?? ''
  }
  for (const [q, key] of Object.entries(SELECT_Q)) {
    out[`business_q_${q}`] = yn(key, 'Y', 'N')
    out[`business_q_${q}_explanation`] = d[`ynExplain_${key}`] ?? ''
  }
  out.business_q_has_losses = d.lossesLast3Years === 'Yes' ? 'Y' : d.lossesLast3Years === 'No' ? 'N' : ''
  out.business_gl_coverage_requested = 'Y'
  const y = parseInt((d.businessStartDate ?? '').slice(0, 4), 10)
  out.business_years_in_business = y ? String(Math.max(0, new Date().getFullYear() - y)) : ''
  return out
}

export default function BppBusinessQuoteForm() {
  return (
    <QuoteForm
      formName="quote"
      tradeName="Business"
      endpoint="/__forms.html"
      extraFields={{ insurance_type: 'Business' }}
      options={{ yn: true, feinRequired: false }}
      tradeTypeOptions={BUSINESS_TYPES}
      defaults={{ coverageTypes: 'General Liability' }}
      legacyQuestions={LEGACY}
      deriveLegacy={deriveLegacy}
      onSuccess={() => { window.location.href = '/contact-thanks.html' }}
      classes={{
        input: 'w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-2 focus:ring-0 focus:outline-none focus:border-gold text-navy-dark font-medium',
        label: 'block text-xs uppercase tracking-wider text-on-surface-variant mb-1',
        legend: 'block text-xs uppercase tracking-wider text-on-surface-variant mb-1',
        heading: 'text-xs font-bold uppercase tracking-widest text-navy-dark/70 border-b border-outline-variant/30 pb-2',
        grid: 'grid md:grid-cols-2 gap-8',
        button: 'bg-linear-to-r from-gold to-gold-dark text-[#241a00] px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:shadow-lg transition-all active:scale-95 disabled:opacity-60',
      }}
    />
  )
}
