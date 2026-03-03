import { Sparkles } from 'lucide-react';

function GradientCheck({ className, idSuffix = '0' }: { className?: string; idSuffix?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id={`checkGradient-${idSuffix}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="50%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>
      <path d="M20 6 9 17l-5-5" stroke={`url(#checkGradient-${idSuffix})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Comparison() {
  const comparisons = [
    {
      category: 'Traditional Project Management',
      benefits: [
        'Dedicated client workspace with health monitoring',
        'Fully configurable RBAC for all user types',
        'Integrated approval workflows with audit logs',
        'Built-in invoicing tied to project milestones'
      ]
    },
    {
      category: 'CRM Systems',
      benefits: [
        'Built for end-to-end project delivery',
        'Three-tier project hierarchy (Phase → Milestone → Sprint)',
        'Native Azure DevOps integration',
        'Document management with version control'
      ]
    },
    {
      category: 'File Sharing Platforms',
      benefits: [
        'Approval workflows with change requests',
        'Granular, configurable permissions per role',
        'Files tied to projects, milestones, and timelines',
        'Integrated budget tracking and resource oversight'
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Not Just Use Existing Tools?
          </h2>
          <p className="text-lg text-gray-600">
            Traditional tools address individual needs but lack the unified governance, collaboration, and visibility required for client-facing project delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200/60 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="px-6 pt-6 pb-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 px-4 py-1.5 text-base font-semibold text-white">
                    <Sparkles className="w-4 h-4" strokeWidth={2} />
                    {comparison.category}
                  </div>
                </div>
                <ul className="relative px-6 pb-6 space-y-3">
                  {comparison.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <GradientCheck className="mt-1.5 h-5 w-5 flex-shrink-0" idSuffix={`${index}-${idx}`} />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">One Platform, Complete Control</h3>
          <p className="text-lg text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed">
            ClientSphere combines governance, collaboration, and visibility into a single, enterprise-grade system designed specifically for organizations that deliver services to external clients.
          </p>
        </div>
      </div>
    </section>
  );
}
