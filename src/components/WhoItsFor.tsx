import { useId } from 'react';

export default function WhoItsFor() {
  const id = useId();
  const audiences = [
    {
      label: '01',
      title: 'Software Development Companies',
      description: 'Manage client projects with structured sprints, Azure DevOps integration, deliverable tracking, and technical documentation workflows.'
    },
    {
      label: '02',
      title: 'IT Service Providers',
      description: 'Coordinate infrastructure projects, manage SLAs, track implementation milestones, and maintain client communication in one platform.'
    },
    {
      label: '03',
      title: 'Consulting Firms',
      description: 'Deliver client engagements with clear phase structures, budget oversight, document approval processes, and professional invoicing.'
    },
    {
      label: '04',
      title: 'Product Agencies',
      description: 'Manage design and development cycles, client feedback loops, asset approvals, and project timelines with full transparency.'
    },
    {
      label: '05',
      title: 'Enterprise Teams',
      description: 'Coordinate cross-organizational initiatives with strict access control, compliance requirements, and multi-stakeholder governance.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Organizations That Deliver
          </h2>
          <p className="text-lg text-gray-600">
            ClientSphere is designed for companies that develop software or deliver services for external clients and need structured collaboration with governance at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.slice(0, 3).map((audience, index) => (
            <article
              key={`${id}-${index}`}
              className="group relative bg-white rounded-xl p-8 border border-gray-200/80 hover:border-transparent hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="inline-block text-3xl font-bold tracking-tight bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4">
                {audience.label}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">{audience.description}</p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {audiences.slice(3).map((audience, index) => (
            <article
              key={`${id}-${index + 3}`}
              className="group relative bg-white rounded-xl p-8 border border-gray-200/80 hover:border-transparent hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="inline-block text-3xl font-bold tracking-tight bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4">
                {audience.label}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">{audience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
