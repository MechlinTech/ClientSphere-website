import { MessageCircle, UserCog, FileStack, Eye, Table2, ShieldAlert } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      icon: MessageCircle,
      title: 'Scattered Communication',
      description: 'Messages lost across email, chat tools, and meetings without centralized tracking.'
    },
    {
      icon: UserCog,
      title: 'Unclear Role Ownership',
      description: 'No visibility into who has access to what, leading to security gaps and bottlenecks.'
    },
    {
      icon: FileStack,
      title: 'Uncontrolled File Sharing',
      description: 'Documents exchanged without approval workflows, versioning, or audit trails.'
    },
    {
      icon: Eye,
      title: 'Poor Milestone Visibility',
      description: 'Clients and teams lack real-time insight into project progress and deliverable status.'
    },
    {
      icon: Table2,
      title: 'Spreadsheet-Based Tracking',
      description: 'Budget and timeline management scattered across disconnected spreadsheets.'
    },
    {
      icon: ShieldAlert,
      title: 'Lack of Centralized Governance',
      description: 'No unified system for managing permissions, approvals, and cross-organizational collaboration.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Cost of Fragmented Collaboration
          </h2>
          <p className="text-lg text-gray-600">
            Without a unified platform, organizations struggle with scattered tools, unclear ownership, and uncontrolled workflows that compromise both security and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex rounded-xl bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-3 mb-4">
                <problem.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 border border-blue-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ClientSphere: The Structured Solution
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A unified platform that brings clarity, access control, and operational transparency to client collaboration. ClientSphere centralizes project governance, document workflows, and cross-organizational permissions into a single, enterprise-grade system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
