"use client";

export type LOB = "Home" | "Auto" | "Life" | "Business";

export const LOBS: LOB[] = ["Home", "Auto", "Life", "Business"];

const fieldWrap =
  "border-b border-outline-variant/40 focus-within:border-b-2 focus-within:border-gold transition-all";
const label = "block text-xs uppercase tracking-wider text-on-surface-variant mb-1";
const input =
  "w-full border-none bg-transparent px-0 py-2 focus:ring-0 text-navy-dark placeholder:text-outline-variant/50 font-medium";

// Home / Auto / Life request form. The Business line (commercial GL + property) is the shared
// ACORD form in BppBusinessQuoteForm.tsx; QuoteSwitcher.tsx picks between the two.
export default function QuoteForm({ lob }: { lob: LOB }) {
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
        <input type="hidden" name="insurance_type" value={lob} />
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
