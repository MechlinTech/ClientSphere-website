import { useId } from 'react';

export default function Features() {
  const id = useId();
  const features = [
    {
      title: 'Secure Authentication',
      description: 'Enterprise-grade security with email login, OAuth integrations, session management, and secure email invitations.',
      details: [
        'Multi-factor authentication support',
        'OAuth 2.0 integration',
        'Session timeout controls',
        'Secure email invitations'
      ]
    },
    {
      title: 'Configurable Role-Based Access Control',
      description: 'Fully customizable permission system for both client-side and internal organization roles without default presets.',
      details: [
        'Custom role creation',
        'Granular permission management',
        'No default permissions',
        'Client and internal role separation'
      ]
    },
    {
      title: 'Organization Management',
      description: 'Complete control over organization structure, user lifecycle, and administrative oversight.',
      details: [
        'Organization creation and configuration',
        'User invitation and removal',
        'Role assignments',
        'Active/inactive status control'
      ]
    },
    {
      title: 'Structured Project Management',
      description: 'Hierarchical project organization with Phase → Milestone → Sprint structure, Azure DevOps integration, and comprehensive tracking.',
      details: [
        'Project creation and settings',
        'Phase, milestone, and sprint hierarchy',
        'Azure DevOps integration',
        'Notification systems',
        'Deliverables and demo dates'
      ]
    },
    {
      title: 'Real-Time Dashboards',
      description: 'Visual insights into project health, budget utilization, timeline progress, and performance metrics.',
      details: [
        'Budget tracking and graphs',
        'Timeline progress visualization',
        'Hours logging and reporting',
        'Status tracking (green/yellow/red)',
        'Performance insights'
      ]
    },
    {
      title: 'Document Governance & Approval Workflows',
      description: 'Controlled document management with approval workflows, version history, and audit trails.',
      details: [
        'Upload and preview files',
        'Send files for review',
        'Comment and request changes',
        'Approval logs and history',
        'Version control (optional)',
        'Project and milestone-level management'
      ]
    },
    {
      title: 'Client Workspace',
      description: 'Dedicated client portal for monitoring project health, tracking milestones, and managing escalations.',
      details: [
        'Project health status indicators',
        'Milestone ETA tracking',
        'PM updates and communications',
        'Assigned contact access',
        'Issue escalation capabilities'
      ]
    },
    {
      title: 'Invoice Management',
      description: 'Project-level invoicing with complete tracking, status management, and downloadable invoices.',
      details: [
        'Invoice creation and tracking',
        'Sent/paid/overdue statuses',
        'Downloadable invoice PDFs',
        'Payment history',
        'Project-level billing'
      ]
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50/80 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Capabilities
          </h2>
          <p className="text-lg text-gray-600">
            A comprehensive platform designed for organizations that require control, transparency, and structured collaboration.
          </p>
          <div className="mt-6 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <article
              key={`${id}-${index}`}
              className="group relative bg-white rounded-xl p-8 border border-gray-200/80 hover:border-transparent hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="inline-block text-2xl font-bold tracking-tight bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 opacity-70" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
