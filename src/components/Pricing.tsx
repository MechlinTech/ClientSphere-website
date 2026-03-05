import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'For small teams getting started with client collaboration.',
    price: 'Custom',
    period: 'Contact us',
    features: [
      'Up to 2 organizations',
      '5 active projects',
      'Role-based access control',
      'Document workflows',
      'Email support'
    ],
    cta: 'Contact Sales',
    href: '/',
    featured: false
  },
  {
    name: 'Professional',
    description: 'For growing teams that need full project governance.',
    price: 'Custom',
    period: 'Tailored to your needs',
    features: [
      'Unlimited organizations',
      'Unlimited projects',
      'Azure DevOps integration',
      'Budget & timeline dashboards',
      'Client workspace portal',
      'Invoice management',
      'Priority support'
    ],
    cta: 'Get a Demo',
    href: '/',
    featured: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with compliance and scale requirements.',
    price: 'Custom',
    period: 'Dedicated success',
    features: [
      'Everything in Professional',
      'SSO & advanced security',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom integrations',
      'On-premise deployment option'
    ],
    cta: 'Contact Sales',
    href: '/',
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-600">
            Plans that scale with your organization. All include the core platform; we tailor capacity and support to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`relative flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                plan.featured
                  ? 'border-blue-900/20 shadow-xl shadow-blue-900/5 bg-white'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900" />
              )}
              <div className="p-8 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h2>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-gray-900/10 via-blue-900/20 to-gray-900/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-blue-900" strokeWidth={2.5} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.href}
                  className={`mt-8 w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg font-medium text-sm transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white hover:opacity-95 shadow-lg shadow-blue-900/20'
                      : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-gray-300'
                  }`}
                >
                  {plan.cta}
                  {plan.featured && <ArrowRight className="w-4 h-4" />}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Need a different scope? We offer custom plans for unique requirements.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
              No long-term lock-in
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
              Volume discounts available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
