"use client";

import { useState } from "react";

type LOB = "Home" | "Auto" | "Life" | "Business";

const LOBS: LOB[] = ["Home", "Auto", "Life", "Business"];

const fieldWrap =
  "border-b border-outline-variant/40 focus-within:border-b-2 focus-within:border-gold transition-all";
const label = "block text-xs uppercase tracking-wider text-on-surface-variant mb-1";
const input =
  "w-full border-none bg-transparent px-0 py-2 focus:ring-0 text-navy-dark placeholder:text-outline-variant/50 font-medium";

// --- ACORD 125/126/140 General Underwriting Questions (checkbox-type: tick = Yes, clear = No) ---
// Each maps to an ACORD_General_* field (FIELDS.md "Yes/No questions", page 3, items #2-17).
// `explain` = true means FIELDS.md's "Conditional (70)" section lists unnamed follow-up field(s)
// for a Yes answer; since those sub-fields are not individually named in FIELDS.md, a single
// generic "please explain" catch-all is collected instead of inventing specific field names.
const CHECKBOX_YN: { name: string; question: string; explain?: boolean }[] = [
  { name: "business_q_subsidiary", question: "Is Applicant a Subsidiary?", explain: true },
  { name: "business_q_has_subsidiaries", question: "Does Applicant Have Subsidiaries?", explain: true },
  { name: "business_q_safety_programs", question: "Do Safety Programs Exist?" },
  { name: "business_q_exposure_flammables", question: "Any Exposure to Flammables, Explosives, or Chemicals?", explain: true },
  { name: "business_q_other_insurance", question: "Any Other Insurance with This Company?", explain: true },
  { name: "business_q_coverage_terminated", question: "Has Policy Coverage Ever Been Terminated?", explain: true },
  { name: "business_q_past_allegations", question: "Past Allegations of Abuse, Molestation, or Discrimination?", explain: true },
  { name: "business_q_indicted_convicted", question: "Any Indictments or Convictions?", explain: true },
  { name: "business_q_safety_violations", question: "Any Uncorrected Fire and/or Safety Violations?", explain: true },
  { name: "business_q_negative_financial_action", question: "Any Past Negative Financial Action?", explain: true },
  { name: "business_q_judgement_lien", question: "Any Judgement or Lien?", explain: true },
  { name: "business_q_trust", question: "Has Business Been Placed in a Trust?", explain: true },
  { name: "business_q_foreign_operations", question: "Any Foreign Operations or Products?", explain: true },
  { name: "business_q_other_ventures", question: "Do Other Ventures Exist?", explain: true },
  { name: "business_q_possess_drones", question: "Does Applicant Possess Drones?", explain: true },
  { name: "business_q_hire_drones", question: "Does Applicant Hire Drone Operators?", explain: true },
];

// --- ACORD 125/126/140 Line-of-Business Questions (text Y/N: a blank value is "unanswered",
// not "No" -- modeled as a required <select> with no default so it can't be silently skipped).
// `explainMax` = the "Max chars" from FIELDS.md's Follow-ups table where a named explanation
// field exists for a Yes answer.
const TEXT_YN: { name: string; question: string; explainMax?: number }[] = [
  { name: "business_q_leased_to_others", question: "Is Building Leased to Others?" },
  { name: "business_q_excluded_uninsured_prior", question: "Has any product, work, accident or location been excluded, uninsured or self-insured from any previous coverage?", explainMax: 136 },
  { name: "business_q_tail_coverage", question: "Was tail coverage purchased under any previous policy?", explainMax: 136 },
  { name: "business_q_draws_plans", question: "Does applicant draw plans, designs or specifications for others?", explainMax: 136 },
  { name: "business_q_blasting", question: "Do any operations include blasting or utilize, or store explosive material?", explainMax: 136 },
  { name: "business_q_excavation", question: "Does any operation involve excavation, tunneling, underground work or earth moving?", explainMax: 136 },
  { name: "business_q_subs_lower_limits", question: "Do subcontractors carry coverages or limits less than applicant?", explainMax: 136 },
  { name: "business_q_subs_no_coi", question: "Are subcontractors allowed to work without providing you with a certificate of insurance?", explainMax: 136 },
  { name: "business_q_lease_equipment_to_others", question: "Does applicant lease equipment to others with or without operators?", explainMax: 136 },
  { name: "business_q_install_service_demo", question: "Does applicant install, service or demonstrate products?", explainMax: 136 },
  { name: "business_q_foreign_products", question: "Foreign products, sold, distributed, used as components?" },
  { name: "business_q_rd_new_products", question: "Research and development conducted or new products planned?", explainMax: 136 },
  { name: "business_q_guarantees_warranties", question: "Guarantees, warrantees, hold harmless agreements?", explainMax: 136 },
  { name: "business_q_aircraft_space_products", question: "Products related to aircraft/space industry?", explainMax: 136 },
  { name: "business_q_products_recalled", question: "Products recalled, discontinued, changed?", explainMax: 136 },
  { name: "business_q_products_of_others_repackaged", question: "Products of others sold or repackaged under applicant label?", explainMax: 136 },
  { name: "business_q_products_under_others_label", question: "Products under label of others?", explainMax: 136 },
  { name: "business_q_vendors_coverage", question: "Vendors coverage required?", explainMax: 136 },
  { name: "business_q_sell_to_other_insured", question: "Does any named insured sell to other named insured?", explainMax: 136 },
  { name: "business_q_medical_facilities", question: "Any medical facilities provided or medical professionals employed or contracted?", explainMax: 136 },
  { name: "business_q_radioactive_exposure", question: "Any exposure to radioactive/nuclear materials?", explainMax: 136 },
  { name: "business_q_hazardous_material_ops", question: "Do/have past, present or discontinued operations involve(d) storing, treating, discharging, applying, disposing, or transporting of hazardous material?", explainMax: 136 },
  { name: "business_q_ops_sold_acquired", question: "Any operations sold, acquired or discontinued in the last specified number of years?", explainMax: 136 },
  { name: "business_q_rent_loan_equipment", question: "Do you rent or loan equipment to others?", explainMax: 72 },
  { name: "business_q_watercraft", question: "Any watercraft, docks, floats owned, hired or leased?", explainMax: 136 },
  { name: "business_q_parking_facilities", question: "Any parking facilities owned/rented?", explainMax: 136 },
  { name: "business_q_parking_fee", question: "Is a fee charged for parking?", explainMax: 136 },
  { name: "business_q_recreation_facilities", question: "Recreation facilities provided?", explainMax: 136 },
  { name: "business_q_lodging_operations", question: "Are there any lodging operations including apartments?" },
  { name: "business_q_swimming_pool", question: "Is there a swimming pool on the premises?" },
  { name: "business_q_social_events", question: "Are social events sponsored?", explainMax: 136 },
  { name: "business_q_athletic_teams", question: "Are athletic teams sponsored?" },
  { name: "business_q_structural_alterations", question: "Any structural alterations contemplated?", explainMax: 136 },
  { name: "business_q_demolition_exposure", question: "Any demolition exposure contemplated?", explainMax: 136 },
  { name: "business_q_joint_ventures_active", question: "Has applicant been active in or is currently active in joint ventures?", explainMax: 136 },
  { name: "business_q_lease_employees", question: "Do you lease employees to or from other employers?", explainMax: 136 },
  { name: "business_q_labor_interchange", question: "Is there a labor interchange with any other business or subsidiaries?", explainMax: 136 },
  { name: "business_q_daycare_facilities", question: "Are day care facilities operated or controlled?", explainMax: 136 },
  { name: "business_q_crimes_on_premises", question: "Have any crimes occurred or been attempted on your premises within the last specified number of years?", explainMax: 136 },
  { name: "business_q_formal_safety_policy", question: "Is there a formal, written safety and security policy in effect?", explainMax: 136 },
  { name: "business_q_promo_literature_safety_claims", question: "Does the business' promotional literature make any representation about the safety or security of the premises?", explainMax: 136 },
];

function RadioPair({
  name,
  defaultValue,
  onAnswer,
}: {
  name: string;
  defaultValue?: "Y" | "N";
  onAnswer?: (name: string, isYes: boolean) => void;
}) {
  return (
    <span className="flex items-center gap-6 text-sm text-navy-dark">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name={name}
          value="Y"
          defaultChecked={defaultValue === "Y"}
          onChange={() => onAnswer?.(name, true)}
        />
        Yes
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name={name}
          value="N"
          defaultChecked={defaultValue === "N"}
          onChange={() => onAnswer?.(name, false)}
        />
        No
      </label>
    </span>
  );
}

// Y/N question as a radio pair (replaces the old lone checkbox: tick = Yes, clear = No).
function CheckboxYNField({
  name,
  question,
  onAnswer,
}: {
  name: string;
  question: string;
  onAnswer: (name: string, checked: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-2 py-2 text-sm text-navy-dark">
      <span>{question}</span>
      <RadioPair name={name} onAnswer={onAnswer} />
    </div>
  );
}

function TextYNField({
  name,
  question,
  onAnswer,
}: {
  name: string;
  question: string;
  onAnswer: (name: string, isYes: boolean) => void;
}) {
  return (
    <div className={fieldWrap}>
      <label className={label}>{question}</label>
      <select
        name={name}
        required
        defaultValue=""
        className={`${input} appearance-none`}
        onChange={(e) => onAnswer(name, e.target.value === "Y")}
      >
        <option value="" disabled>
          Select one
        </option>
        <option value="Y">Yes</option>
        <option value="N">No</option>
      </select>
    </div>
  );
}

function ExplainIfYes({
  show,
  name,
  maxLength = 136,
}: {
  show: boolean;
  name: string;
  maxLength?: number;
}) {
  if (!show) return null;
  return (
    <div className={`${fieldWrap} mb-2`}>
      <label className={label}>Please explain (required to complete the application)</label>
      <textarea name={name} className={`${input} resize-none`} rows={2} maxLength={maxLength} />
    </div>
  );
}

export default function QuoteForm() {
  const [lob, setLob] = useState<LOB>("Home");
  const [bizAnswers, setBizAnswers] = useState<Record<string, boolean>>({});
  const [locationDifferent, setLocationDifferent] = useState(false);

  const onBizAnswer = (name: string, value: boolean) =>
    setBizAnswers((a) => ({ ...a, [name]: value }));

  return (
    <form
      name="quote"
      method="POST"
      action="/contact-thanks.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-8"
    >
      <input type="hidden" name="form-name" value="quote" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {/* Shared base */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={fieldWrap}>
          <label className={label}>Full Name</label>
          <input name="name" className={input} placeholder="John Doe" type="text" required />
        </div>
        <div className={fieldWrap}>
          <label className={label}>Email Address</label>
          <input name="email" className={input} placeholder="john@example.com" type="email" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={fieldWrap}>
          <label className={label}>Phone Number</label>
          <input name="phone" className={input} placeholder="(555) 000-0000" type="tel" />
        </div>
        <div className={fieldWrap}>
          <label className={label}>Insurance Type</label>
          <select
            name="insurance_type"
            className={`${input} appearance-none`}
            required
            value={lob}
            onChange={(e) => setLob(e.target.value as LOB)}
          >
            {LOBS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={fieldWrap}>
          <label className={label}>Street Address</label>
          <input name="street_address" className={input} placeholder="123 Main St" type="text" />
        </div>
        <div className={fieldWrap}>
          <label className={label}>City</label>
          <input name="city" className={input} placeholder="Chandler" type="text" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={fieldWrap}>
          <label className={label}>State</label>
          <input name="state" className={input} placeholder="AZ" type="text" />
        </div>
        <div className={fieldWrap}>
          <label className={label}>ZIP Code</label>
          <input name="zip" className={input} placeholder="85249" type="text" />
        </div>
      </div>
      <div className={fieldWrap}>
        <label className={label}>Desired Effective Date</label>
        <input name="effective_date" className={input} type="date" />
      </div>

      {/* Per-line section */}
      {lob === "Home" && (
        <div className="space-y-8 pt-4 border-t border-outline-variant/30">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold">
            Home Insurance Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Year Built</label>
              <input name="home_year_built" className={input} type="number" placeholder="2015" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Square Footage</label>
              <input name="home_square_footage" className={input} type="number" placeholder="2200" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Construction Type</label>
              <select name="home_construction_type" className={`${input} appearance-none`} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>Frame</option>
                <option>Masonry</option>
                <option>Brick</option>
                <option>Other</option>
              </select>
            </div>
            <div className={fieldWrap}>
              <label className={label}>Roof Age (years)</label>
              <input name="home_roof_age_years" className={input} type="number" placeholder="5" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Number of Stories</label>
              <input name="home_num_stories" className={input} type="number" placeholder="1" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Desired Dwelling Coverage Amount</label>
              <input name="home_dwelling_coverage_requested" className={input} type="text" placeholder="$350,000" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Prior/Current Carrier</label>
              <input name="home_prior_carrier" className={input} type="text" placeholder="e.g. State Farm" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Claims in Last 3 Years (count)</label>
              <input name="home_claims_count_3yr" className={input} type="number" placeholder="0" />
            </div>
          </div>
        </div>
      )}

      {lob === "Auto" && (
        <div className="space-y-8 pt-4 border-t border-outline-variant/30">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold">
            Auto Insurance Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Vehicle Year</label>
              <input name="auto_vehicle_year" className={input} type="number" placeholder="2022" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Vehicle Make</label>
              <input name="auto_vehicle_make" className={input} type="text" placeholder="Toyota" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Vehicle Model</label>
              <input name="auto_vehicle_model" className={input} type="text" placeholder="Camry" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>VIN</label>
              <input name="auto_vehicle_vin" className={input} type="text" placeholder="17-character VIN" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Vehicle Value</label>
              <input name="auto_vehicle_value" className={input} type="text" placeholder="$25,000" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Desired Coverage Limits</label>
              <input name="auto_limits_requested" className={input} type="text" placeholder="100/300/100" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Years Licensed</label>
              <input name="auto_years_licensed" className={input} type="number" placeholder="10" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Violations/Accidents (Last 3 Years, count)</label>
              <input name="auto_violations_accidents_3yr" className={input} type="number" placeholder="0" />
            </div>
          </div>
          <div className={fieldWrap}>
            <label className={label}>Prior/Current Carrier</label>
            <input name="auto_prior_carrier" className={input} type="text" placeholder="e.g. Progressive" />
          </div>
        </div>
      )}

      {lob === "Life" && (
        <div className="space-y-8 pt-4 border-t border-outline-variant/30">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold">
            Life Insurance Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Desired Coverage Amount</label>
              <input name="life_coverage_amount_requested" className={input} type="text" placeholder="$250,000" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Term Length (years)</label>
              <input name="life_term_length_years" className={input} type="number" placeholder="20" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Tobacco Use</label>
              <select name="life_tobacco_use" className={`${input} appearance-none`} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className={fieldWrap}>
              <label className={label}>General Health (self-rating)</label>
              <select name="life_general_health" className={`${input} appearance-none`} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Poor</option>
              </select>
            </div>
          </div>
          <div className={fieldWrap}>
            <label className={label}>Beneficiary Name</label>
            <input name="life_beneficiary_name" className={input} type="text" placeholder="Jane Doe" />
          </div>
        </div>
      )}

      {lob === "Business" && (
        <div className="space-y-10 pt-4 border-t border-outline-variant/30">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold">
            Business Insurance Details
          </h3>
          <p className="text-xs text-on-surface-variant -mt-6">
            This covers a commercial General Liability + Property (BPP) application. The more of
            this you complete now, the fewer follow-up calls it takes to bind your policy.
          </p>

          {/* Named Insured / policy identity -- ACORD 125 required values */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-dark/70">
              Business / Named Insured Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>Legal Business Name (Named Insured)</label>
                <input name="business_legal_name" className={input} type="text" placeholder="Acme Contracting LLC" required />
              </div>
              <div className={fieldWrap}>
                <label className={label}>SIC Code</label>
                <input name="business_sic" className={input} type="text" placeholder="1731" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>NAICS Code</label>
                <input name="business_naics" className={input} type="text" placeholder="238210" />
              </div>
              <div className={fieldWrap}>
                <label className={label}>Policy Expiration Date</label>
                <input name="business_policy_expiration_date" className={input} type="date" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>Date Business Started</label>
                <input name="business_date_started" className={input} type="date" required />
              </div>
              <div className={fieldWrap}>
                <label className={label}>County (of business location)</label>
                <input name="business_county" className={input} type="text" maxLength={19} placeholder="Maricopa" required />
              </div>
            </div>
            <div className={fieldWrap}>
              <label className={label}>Short Description of Operations at This Location (max 54 characters)</label>
              <input name="business_location_description" className={input} type="text" maxLength={54} placeholder="Retail storefront, no on-site manufacturing" />
            </div>

            <div className="flex flex-col gap-2 py-2 text-sm text-navy-dark">
              <span>Is the business location different from the mailing address entered above?</span>
              <RadioPair
                name="business_location_different_from_mailing"
                onAnswer={(_n, isYes) => setLocationDifferent(isYes)}
              />
            </div>
            {locationDifferent && (
              <div className="space-y-8 pl-4 border-l-2 border-gold/40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className={fieldWrap}>
                    <label className={label}>Location Street</label>
                    <input name="business_location_street" className={input} type="text" maxLength={35} />
                  </div>
                  <div className={fieldWrap}>
                    <label className={label}>Location City</label>
                    <input name="business_location_city" className={input} type="text" maxLength={21} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className={fieldWrap}>
                    <label className={label}>Location State</label>
                    <input name="business_location_state" className={input} type="text" maxLength={6} />
                  </div>
                  <div className={fieldWrap}>
                    <label className={label}>Location ZIP</label>
                    <input name="business_location_zip" className={input} type="text" maxLength={6} />
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>Full-Time Employees</label>
                <input name="business_employees_fulltime" className={input} type="number" placeholder="3" required />
              </div>
              <div className={fieldWrap}>
                <label className={label}>Part-Time Employees</label>
                <input name="business_employees_parttime" className={input} type="number" placeholder="0" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>Entity Type</label>
                <select name="business_entity_type" className={`${input} appearance-none`} required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="Corporation">Corporation</option>
                  <option value="Individual">Individual</option>
                  <option value="JointVenture">Joint Venture</option>
                  <option value="LLC">LLC</option>
                  <option value="NotForProfit">Not For Profit</option>
                  <option value="Partnership">Partnership</option>
                  <option value="SCorp">S Corporation</option>
                  <option value="Trust">Trust</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={label}>Billing Plan</label>
                <select name="business_billing_plan" className={`${input} appearance-none`} required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="Direct">Direct Bill</option>
                  <option value="Agency">Agency Bill</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>Premises: Owner or Tenant?</label>
                <select name="business_premises_interest" className={`${input} appearance-none`} required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="Owner">Owner</option>
                  <option value="Tenant">Tenant</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={label}>Premises Inside or Outside City Limits?</label>
                <select name="business_location_city_limits" className={`${input} appearance-none`} required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="Inside">Inside City Limits</option>
                  <option value="Outside">Outside City Limits</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>FEIN</label>
              <input name="business_fein" className={input} type="text" placeholder="12-3456789" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Years in Business</label>
              <input name="business_years_in_business" className={input} type="number" placeholder="5" />
            </div>
          </div>
          <div className={fieldWrap}>
            <label className={label}>Description of Business (Primary Operations)</label>
            <textarea
              name="business_description"
              className={`${input} resize-none`}
              rows={3}
              placeholder="What does the business do?"
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Annual Gross Receipts / Revenue</label>
              <input name="business_gross_receipts" className={input} type="text" placeholder="$500,000" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Number of Employees (total)</label>
              <input name="business_num_employees" className={input} type="number" placeholder="3" />
            </div>
          </div>
          <div className={fieldWrap}>
            <label className={label}>Annual Payroll ($)</label>
            <input name="annualPayroll" className={input} type="text" inputMode="numeric" placeholder="$150,000" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={fieldWrap}>
              <label className={label}>Desired Coverage Limits (overall)</label>
              <input name="business_limits_requested" className={input} type="text" placeholder="$1,000,000" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Prior/Current Carrier</label>
              <input name="business_prior_carrier" className={input} type="text" placeholder="e.g. Hartford" />
            </div>
          </div>

          {/* General Liability coverage specifics -- ACORD 126 required values + selections */}
          <div className="space-y-8 pt-6 border-t border-outline-variant/20">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-dark/70">
              General Liability Coverage
            </h4>
            <div className="flex flex-col gap-2 py-2 text-sm text-navy-dark">
              <span>Are you requesting General Liability coverage for this business?</span>
              <RadioPair name="business_gl_coverage_requested" defaultValue="Y" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>GL Coverage Trigger</label>
                <select name="business_gl_trigger" className={`${input} appearance-none`} required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="Occurrence">Occurrence</option>
                  <option value="ClaimsMade">Claims Made</option>
                </select>
              </div>
              <div className={fieldWrap}>
                <label className={label}>General Aggregate Limit Applies Per</label>
                <select name="business_gl_aggregate_applies" className={`${input} appearance-none`} required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="Policy">Policy</option>
                  <option value="Project">Project</option>
                  <option value="Location">Location</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>General Aggregate Limit ($)</label>
                <input name="business_gl_general_aggregate_limit" className={input} type="text" maxLength={20} placeholder="$2,000,000" />
              </div>
              <div className={fieldWrap}>
                <label className={label}>Products/Completed Operations Aggregate Limit ($)</label>
                <input name="business_gl_products_completed_ops_limit" className={input} type="text" maxLength={20} placeholder="$2,000,000" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>Personal &amp; Advertising Injury Limit ($)</label>
                <input name="business_gl_personal_adv_injury_limit" className={input} type="text" maxLength={20} placeholder="$1,000,000" />
              </div>
              <div className={fieldWrap}>
                <label className={label}>Each Occurrence Limit ($)</label>
                <input name="business_gl_each_occurrence_limit" className={input} type="text" maxLength={20} placeholder="$1,000,000" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>Damage to Rented Premises, Each Occurrence Limit ($)</label>
                <input name="business_gl_fire_damage_rented_premises_limit" className={input} type="text" maxLength={20} placeholder="$100,000" />
              </div>
              <div className={fieldWrap}>
                <label className={label}>Medical Expense, Each Person Limit ($)</label>
                <input name="business_gl_medical_expense_limit" className={input} type="text" maxLength={20} placeholder="$5,000" />
              </div>
            </div>
          </div>

          {/* Contractor / subcontractor specifics -- ACORD 126 required values */}
          <div className="space-y-8 pt-6 border-t border-outline-variant/20">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-dark/70">
              Contractor / Subcontractor Detail
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={fieldWrap}>
                <label className={label}>Total $ Paid to Subcontractors (annually)</label>
                <input name="business_subcontractors_paid_amount" className={input} type="text" maxLength={16} placeholder="$50,000" />
              </div>
              <div className={fieldWrap}>
                <label className={label}>% of Work Subcontracted Out</label>
                <input name="business_subcontracted_work_percent" className={input} type="text" maxLength={7} placeholder="25%" />
              </div>
            </div>
          </div>

          {/* Property / BPP coverage -- ACORD 140 is conditional on property coverage being
              requested, and its 19 conditional fields are not individually named in FIELDS.md,
              so a single toggle + generic explanation captures the need without inventing field
              names; an agent completes the ACORD 140 detail from this at application time. */}
          <div className="space-y-4 pt-6 border-t border-outline-variant/20">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-dark/70">
              Property (Business Personal Property)
            </h4>
            <TextYNField
              name="business_q_property_coverage_requested"
              question="Are you also requesting Business Personal Property / Commercial Property coverage at this location?"
              onAnswer={onBizAnswer}
            />
            {bizAnswers["business_q_property_coverage_requested"] && (
              <div className={fieldWrap}>
                <label className={label}>Describe the building/contents to be covered and estimated values</label>
                <textarea
                  name="business_q_property_coverage_requested_explanation"
                  className={`${input} resize-none`}
                  rows={2}
                  placeholder="e.g. owned building, 4,500 sq ft, est. $600,000; contents/equipment est. $120,000"
                />
              </div>
            )}
          </div>

          {/* General underwriting Yes/No questions (checkbox-type) -- ACORD General, page 3 */}
          <div className="space-y-1 pt-6 border-t border-outline-variant/20">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-dark/70">
              General Underwriting Questions
            </h4>
            {CHECKBOX_YN.map((q) => (
              <div key={q.name}>
                <CheckboxYNField name={q.name} question={q.question} onAnswer={onBizAnswer} />
                {q.name === "business_q_safety_programs" && bizAnswers[q.name] && (
                  <div className="pl-8 space-y-2 pb-3">
                    <p className={label}>Safety program includes (check all that apply):</p>
                    <label className="flex items-center gap-2 text-sm text-navy-dark">
                      <input type="checkbox" name="business_safety_manual" /> Written Safety Manual
                    </label>
                    <label className="flex items-center gap-2 text-sm text-navy-dark">
                      <input type="checkbox" name="business_safety_dedicated_position" /> Dedicated Safety Position
                    </label>
                    <label className="flex items-center gap-2 text-sm text-navy-dark">
                      <input type="checkbox" name="business_safety_monthly_meetings" /> Monthly Safety Meetings
                    </label>
                    <label className="flex items-center gap-2 text-sm text-navy-dark">
                      <input type="checkbox" name="business_safety_osha" /> OSHA Compliance Program
                    </label>
                    <label className="flex items-center gap-2 text-sm text-navy-dark">
                      <input type="checkbox" name="business_safety_other" /> Other
                    </label>
                    <input
                      name="business_safety_other_description"
                      className={input}
                      type="text"
                      placeholder="If Other, describe"
                    />
                  </div>
                )}
                {q.explain && <ExplainIfYes show={!!bizAnswers[q.name]} name={`${q.name}_explanation`} />}
              </div>
            ))}
          </div>

          {/* Operations / line-of-business Yes/No questions (text-type) -- ACORD GL/Contractors, pages 2 & 5-8 */}
          <div className="space-y-1 pt-6 border-t border-outline-variant/20">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-dark/70">
              Operations Questions
            </h4>
            {TEXT_YN.map((q) => (
              <div key={q.name} className="space-y-2 pb-1">
                <TextYNField name={q.name} question={q.question} onAnswer={onBizAnswer} />

                {q.name === "business_q_athletic_teams" && bizAnswers[q.name] && (
                  <div className={fieldWrap}>
                    <label className={label}>Athletic Team Age Group</label>
                    <select name="business_athletic_team_age_group" className={`${input} appearance-none`} required defaultValue="">
                      <option value="" disabled>Select one</option>
                      <option value="TwelveAndUnder">12 and Under</option>
                      <option value="ThirteenThroughEighteen">13 through 18</option>
                      <option value="OverEighteen">Over 18</option>
                    </select>
                  </div>
                )}

                {q.name === "business_q_swimming_pool" && bizAnswers[q.name] && (
                  <div className="space-y-4">
                    <div className={fieldWrap}>
                      <label className={label}>Pool Construction</label>
                      <select name="business_pool_construction" className={`${input} appearance-none`} required defaultValue="">
                        <option value="" disabled>Select one</option>
                        <option value="AboveGround">Above Ground</option>
                        <option value="InGround">In Ground</option>
                      </select>
                    </div>
                    <p className={label}>Pool safety features (check all that apply):</p>
                    <label className="flex items-center gap-2 text-sm text-navy-dark">
                      <input type="checkbox" name="business_pool_fence" /> Approved Fence
                    </label>
                    <label className="flex items-center gap-2 text-sm text-navy-dark">
                      <input type="checkbox" name="business_pool_limited_access" /> Limited Access
                    </label>
                    <label className="flex items-center gap-2 text-sm text-navy-dark">
                      <input type="checkbox" name="business_pool_diving_board" /> Diving Board
                    </label>
                    <label className="flex items-center gap-2 text-sm text-navy-dark">
                      <input type="checkbox" name="business_pool_slide" /> Slide
                    </label>
                    <label className="flex items-center gap-2 text-sm text-navy-dark">
                      <input type="checkbox" name="business_pool_lifeguard" /> Lifeguard
                    </label>
                  </div>
                )}

                {q.explainMax && (
                  <ExplainIfYes show={!!bizAnswers[q.name]} name={`${q.name}_explanation`} maxLength={q.explainMax} />
                )}
              </div>
            ))}
          </div>

          {/* Loss history -- always one of "none" or a loss row, never both blank */}
          <div className="space-y-4 pt-6 border-t border-outline-variant/20">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-dark/70">Loss History</h4>
            <TextYNField
              name="business_q_has_losses"
              question="Any prior liability or property losses/claims to report?"
              onAnswer={onBizAnswer}
            />
            {bizAnswers["business_q_has_losses"] && (
              <div className="space-y-8 pl-4 border-l-2 border-gold/40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className={fieldWrap}>
                    <label className={label}>Date of Occurrence</label>
                    <input name="business_loss_date" className={input} type="date" />
                  </div>
                  <div className={fieldWrap}>
                    <label className={label}>Amount Paid</label>
                    <input name="business_loss_amount_paid" className={input} type="text" placeholder="$0" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className={fieldWrap}>
                    <label className={label}>Amount Reserved</label>
                    <input name="business_loss_amount_reserved" className={input} type="text" placeholder="$0" />
                  </div>
                  <div className={fieldWrap}>
                    <label className={label}>Description</label>
                    <input name="business_loss_description" className={input} type="text" placeholder="Brief description of loss" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Loss history rows (CCA canonical loss1..3) */}
          <div className="space-y-6 pt-6 border-t border-outline-variant/20">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-dark/70">
              Loss History (list each loss, up to 3)
            </h4>
            {[1, 2, 3].map((n) => (
              <div key={n} className="space-y-4">
                <p className={label}>Loss {n}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className={fieldWrap}>
                    <label className={label}>Date of Loss</label>
                    <input name={`loss${n}Date`} className={input} type="date" />
                  </div>
                  <div className={fieldWrap}>
                    <label className={label}>Line of Business</label>
                    <input name={`loss${n}LineOfBusiness`} className={input} type="text" placeholder="General Liability" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className={fieldWrap}>
                    <label className={label}>Amount ($)</label>
                    <input name={`loss${n}Amount`} className={input} type="text" placeholder="$0" />
                  </div>
                  <div className={fieldWrap}>
                    <label className={label}>Status</label>
                    <select name={`loss${n}Status`} className={`${input} appearance-none`} defaultValue="">
                      <option value="">Select one</option>
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional insured / certificate holder (CCA canonical) */}
          <div className="space-y-8 pt-6 border-t border-outline-variant/20">
            <h4 className="text-xs font-bold uppercase tracking-widest text-navy-dark/70">
              Additional Insured / Certificate Holder
            </h4>
            <div className={fieldWrap}>
              <label className={label}>Additional Insured Name</label>
              <input name="additionalInsuredName" className={input} type="text" />
            </div>
            <div className={fieldWrap}>
              <label className={label}>Additional Insured Address</label>
              <input name="additionalInsuredAddress" className={input} type="text" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={fieldWrap}>
                <label className={label}>City</label>
                <input name="additionalInsuredCity" className={input} type="text" />
              </div>
              <div className={fieldWrap}>
                <label className={label}>State</label>
                <input name="additionalInsuredState" className={input} type="text" />
              </div>
              <div className={fieldWrap}>
                <label className={label}>ZIP</label>
                <input name="additionalInsuredZip" className={input} type="text" />
              </div>
            </div>
            <div className={fieldWrap}>
              <label className={label}>Certificate Needed By</label>
              <input name="certificateNeededBy" className={input} type="date" />
            </div>
          </div>
        </div>
      )}

      <div className={fieldWrap}>
        <label className={label}>Additional Notes</label>
        <textarea
          name="additional_notes"
          className={`${input} resize-none`}
          rows={3}
          placeholder="Anything else we should know?"
        ></textarea>
      </div>

      <div className="pt-6">
        <button
          className="bg-linear-to-r from-gold to-gold-dark text-[#241a00] px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:shadow-lg transition-all active:scale-95"
          type="submit"
        >
          Get My Quote
        </button>
      </div>
    </form>
  );
}
