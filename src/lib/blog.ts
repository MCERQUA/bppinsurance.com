export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  featuredImage: string;
  featuredImageAlt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-essential-insurance-policies-every-business-owner-needs",
    title: "5 Essential Insurance Policies Every Business Owner Needs",
    excerpt:
      "Protecting your business requires more than just intuition. Discover the five critical insurance coverages that every business owner should have in place to safeguard their investment.",
    content: `
<p>Running a business is inherently risky. One unexpected event—theft, a lawsuit, a natural disaster—can wipe out years of hard work in a matter of hours. That's where insurance comes in. But with so many coverage options available, how do you know what's truly essential?</p>

<h2>1. General Liability Insurance</h2>
<p>Every business needs general liability insurance, regardless of size or industry. This coverage protects you against third-party claims for bodily injury, property damage, and personal injury. If a customer slips in your store or your product causes harm, general liability has you covered.</p>
<p><strong>Why you need it:</strong> It's often the first line of defense and is typically required by landlords and clients before signing contracts.</p>

<h2>2. Commercial Property Insurance</h2>
<p>Your business assets—from the building you own to the equipment inside—represent significant investment. Commercial property insurance covers damage to these assets due to fire, theft, vandalism, or natural disasters.</p>
<p><strong>What it covers:</strong> Buildings, inventory, equipment, furniture, and landscaping. Some policies also cover business interruption losses.</p>

<h2>3. Workers' Compensation Insurance</h2>
<p>If you have employees, workers' compensation isn't optional—it's legally required in most states. This coverage pays for medical expenses and lost wages when an employee is injured or becomes ill due to work-related activities.</p>
<p><strong>The benefit:</strong> It protects both your employees and your business from costly lawsuits stemming from workplace injuries.</p>

<h2>4. Professional Liability Insurance</h2>
<p>Also known as errors and omissions (E&O) insurance, professional liability protects businesses that provide services or advice. If a client claims your professional advice caused them financial harm, this coverage pays for your legal defense and any settlements.</p>
<p><strong>Who needs it:</strong> Consultants, accountants, lawyers, healthcare providers, and any business that offers specialized expertise.</p>

<h2>5. Cyber Liability Insurance</h2>
<p>In today's digital world, no business is immune to cyber threats. Cyber liability insurance covers costs associated with data breaches, including notification expenses, credit monitoring for affected customers, and legal fees.</p>
<p><strong>Real talk:</strong> The average cost of a data breach for small businesses exceeds $200,000. Can your business absorb that hit?</p>

<h2>Conclusion</h2>
<p>While this list covers the essentials, every business has unique risks. A comprehensive risk assessment with an experienced insurance professional will help identify coverages specific to your industry and operations.</p>
<p>Don't wait until disaster strikes to review your coverage. Take action today and ensure your business has the protection it deserves.</p>
    `,
    author: "Marcus Sterling",
    authorRole: "Founder & CEO",
    date: "March 15, 2026",
    readTime: "6 min read",
    category: "Business Insurance",
    featuredImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop",
    featuredImageAlt: "Business owner reviewing insurance documents",
  },
  {
    slug: "how-to-file-a-claim-without-the-headache",
    title: "How to File a Claim Without the Headache",
    excerpt:
      "Filing an insurance claim doesn't have to be stressful. Follow this step-by-step guide to navigate the process smoothly and get your claim processed faster.",
    content: `
<p>When the unexpected happens, the last thing you need is a complicated claims process. Whether it's storm damage to your home, a car accident, or a business interruption, knowing how to file a claim correctly can make all the difference.</p>

<h2>Step 1: Review Your Policy First</h2>
<p>Before filing, understand what's covered. Your policy documents specify coverage limits, deductibles, and exclusions. Knowing this upfront prevents surprises and helps you set realistic expectations.</p>
<p><strong>Pro tip:</strong> Keep digital copies of all policy documents in a secure cloud storage folder for quick access when you need them.</p>

<h2>Step 2: Document Everything</h2>
<p>Thorough documentation is the foundation of a successful claim. As soon as it's safe to do so:</p>
<ul>
  <li>Take photos and videos of all damage</li>
  <li>Preserve evidence of affected items with purchase receipts if available</li>
  <li>Write down detailed notes about what happened, when, and who was involved</li>
  <li>Gather witness contact information if applicable</li>
</ul>

<h2>Step 3: Contact Your Insurance Company Promptly</h2>
<p>Report the incident to your insurer as soon as possible. Most policies require timely reporting. When you call:</p>
<ul>
  <li>Have your policy number ready</li>
  <li>Provide a clear, factual account of the incident</li>
  <li>Ask for your claim number and the name of your claims adjuster</li>
  <li>Confirm what's needed to proceed</li>
</ul>

<h2>Step 4: Mitigate Further Damage</h2>
<p>Your policy requires you to take reasonable steps to prevent additional damage. This might include:</p>
<ul>
  <li>Covering broken windows or roofs with tarps</li>
  <li>Moving undamaged items to safety</li>
  <li>Shutting off utilities if there's water damage</li>
</ul>
<p>Keep receipts for any emergency repairs—these may be reimbursable.</p>

<h2>Step 5: Work Cooperatively with Your Adjuster</h2>
<p>Your claims adjuster is there to assess the damage and determine the settlement. Make their job easier by:</p>
<ul>
  <li>Being available for inspections at mutually convenient times</li>
  <li>Providing requested documents promptly</li>
  <li>Asking questions when you don't understand something</li>
  <li>Keeping detailed records of all communications</li>
</ul>

<h2>Step 6: Review Your Settlement Offer</h2>
<p>Once your claim is processed, you'll receive a settlement offer. Before accepting:</p>
<ul>
  <li>Review it against your documented losses</li>
  <li>Verify that all damaged items are accounted for</li>
  <li>Check that the depreciation calculations are reasonable</li>
  <li>Don't hesitate to negotiate if something seems off</li>
</ul>

<h2>Conclusion</h2>
<p>A successful claims experience starts before the incident occurs. Maintain good records, understand your coverage, and communicate proactively with your insurer. When disaster strikes, you'll be prepared to navigate the process with confidence.</p>
<p>Need help understanding your coverage or filing a claim? Our team is available 24/7 to guide you through every step.</p>
    `,
    author: "Sarah Mitchell",
    authorRole: "Claims Director",
    date: "March 8, 2026",
    readTime: "5 min read",
    category: "Claims Guide",
    featuredImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
    featuredImageAlt: "Person organizing insurance paperwork",
  },
  {
    slug: "understanding-workers-compensation-complete-guide",
    title: "Understanding Workers' Compensation: A Complete Guide",
    excerpt:
      "Workers' compensation can be confusing. This comprehensive guide breaks down everything employers need to know about protecting their team and complying with the law.",
    content: `
<p>Workers' compensation is one of the most important—and most misunderstood—aspects of running a business with employees. This guide breaks down everything you need to know to protect your workers and your business.</p>

<h2>What Is Workers' Compensation?</h2>
<p>Workers' compensation is a form of insurance providing wage replacement and medical benefits to employees injured or ill in the course of employment. In exchange for these benefits, employees typically give up their right to sue the employer for negligence.</p>
<p><strong>The trade-off:</strong> Employees get fast, guaranteed benefits. Employers get protection from lawsuits.</p>

<h2>Is Workers' Comp Required?</h2>
<p>In almost every state, employers with employees are required to carry workers' compensation insurance. Requirements vary by:</p>
<ul>
  <li>Number of employees</li>
  <li>Type of business</li>
  <li>State regulations</li>
  <li>Contractor vs. employee classification</li>
</ul>
<p>Failure to carry required coverage can result in heavy fines, criminal penalties, and personal liability for workplace injuries.</p>

<h2>What Does Workers' Comp Cover?</h2>
<p>A typical workers' compensation policy covers:</p>
<ul>
  <li><strong>Medical expenses:</strong> Doctor visits, hospital stays, surgery, medication, physical therapy</li>
  <li><strong>Lost wages:</strong> A percentage of regular pay while recovering</li>
  <li><strong>Disability benefits:</strong> Temporary or permanent disability payments</li>
  <li><strong>Death benefits:</strong> Funeral costs and benefits to dependents</li>
  <li><strong>Rehabilitation:</strong> Vocational retraining when an employee can't return to their previous role</li>
</ul>

<h2>Common Workplace Injuries</h2>
<p>Workers' comp claims span a wide range of incidents:</p>
<ul>
  <li>Slips, trips, and falls</li>
  <li>Overexertion and repetitive strain injuries</li>
  <li>Struck-by objects</li>
  <li>Machinery-related injuries</li>
  <li>Vehicle accidents</li>
  <li>Workplace violence</li>
  <li>Occupational illnesses (hearing loss, respiratory conditions)</li>
</ul>

<h2>How Premiums Are Calculated</h2>
<p>Workers' comp premiums are based on several factors:</p>
<ul>
  <li><strong>Payroll:</strong> Higher payroll = higher potential exposure</li>
  <li><strong>Industry classification:</strong> Some industries (construction, manufacturing) have higher risk and thus higher rates</li>
  <li><strong>Claims history:</strong> Businesses with past claims pay higher premiums (experience modification factor)</li>
  <li><strong>Safety programs:</strong> Strong safety records can earn discounts</li>
</ul>

<h2>What To Do When An Injury Occurs</h2>
<p><strong>Immediate steps:</strong></p>
<ol>
  <li>Ensure the employee receives medical attention</li>
  <li>Report the injury to your insurance carrier promptly</li>
  <li>Investigate the incident to prevent recurrence</li>
  <li>Maintain communication with the injured worker</li>
</ol>
<p><strong>Remember:</strong> Most states have strict reporting deadlines. Failure to report promptly can result in penalties and potential loss of coverage.</p>

<h2>Return to Work Programs</h2>
<p>Effective return-to-work programs benefit everyone:</p>
<ul>
  <li>Injured workers recover faster with purposeful activity</li>
  <li>Employers reduce costs associated with lost productivity</li>
  <li>Light-duty assignments help bridge the gap during recovery</li>
</ul>

<h2>Conclusion</h2>
<p>Workers' compensation isn't just about compliance—it's about protecting your most valuable asset: your people. A well-managed workers' comp program demonstrates your commitment to employee wellbeing while safeguarding your business from significant financial risk.</p>
<p>Ready to review your coverage or explore options? Our specialists can help you find the right policy for your business.</p>
    `,
    author: "David Chen",
    authorRole: "Commercial Insurance Specialist",
    date: "February 28, 2026",
    readTime: "7 min read",
    category: "Workers Compensation",
    featuredImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=630&fit=crop",
    featuredImageAlt: "Safety meeting in a warehouse",
  },
];

export const categories = [
  "All Categories",
  "Business Insurance",
  "Claims Guide",
  "Workers Compensation",
  "Home Insurance",
  "Auto Insurance",
  "Life Insurance",
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

export function getRecentPosts(limit = 4): BlogPost[] {
  return blogPosts.slice(0, limit);
}
