import { Code, Server, Briefcase, Palette, Building } from 'lucide-react';

export default function WhoItsFor() {
  const audiences = [
    {
      icon: Code,
      title: 'Software Development Companies',
      description: 'Manage client projects with structured sprints, Azure DevOps integration, deliverable tracking, and technical documentation workflows.'
    },
    {
      icon: Server,
      title: 'IT Service Providers',
      description: 'Coordinate infrastructure projects, manage SLAs, track implementation milestones, and maintain client communication in one platform.'
    },
    {
      icon: Briefcase,
      title: 'Consulting Firms',
      description: 'Deliver client engagements with clear phase structures, budget oversight, document approval processes, and professional invoicing.'
    },
    {
      icon: Palette,
      title: 'Product Agencies',
      description: 'Manage design and development cycles, client feedback loops, asset approvals, and project timelines with full transparency.'
    },
    {
      icon: Building,
      title: 'Enterprise Teams',
      description: 'Coordinate cross-organizational initiatives with strict access control, compliance requirements, and multi-stakeholder governance.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Organizations That Deliver
          </h2>
          <p className="text-lg text-gray-600">
            ClientSphere is designed for companies that develop software or deliver services for external clients and need structured collaboration with governance at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.slice(0, 3).map((audience, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <audience.icon className="w-6 h-6 text-blue-600" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600 leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {audiences.slice(3).map((audience, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <audience.icon className="w-6 h-6 text-blue-600" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600 leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
