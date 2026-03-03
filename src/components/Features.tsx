import { Lock, Users, FolderTree, BarChart3, FileCheck, Monitor, Receipt, Settings } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Lock,
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
      icon: Settings,
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
      icon: Users,
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
      icon: FolderTree,
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
      icon: BarChart3,
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
      icon: FileCheck,
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
      icon: Monitor,
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
      icon: Receipt,
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
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Capabilities
          </h2>
          <p className="text-lg text-gray-600">
            A comprehensive platform designed for organizations that require control, transparency, and structured collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <feature.icon className="w-6 h-6 text-blue-600" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
