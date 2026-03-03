import { Building2, UserPlus, ShieldCheck, FolderKanban, ListTree, FileCheck, BarChart3, Receipt } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Building2,
      number: '01',
      title: 'Create Your Organization',
      description: 'Set up your organization with administrative controls and configure your organizational structure.'
    },
    {
      icon: UserPlus,
      number: '02',
      title: 'Invite Users & Assign Roles',
      description: 'Send email invitations to team members and clients, assigning them to appropriate organizational roles.'
    },
    {
      icon: ShieldCheck,
      number: '03',
      title: 'Configure Permissions',
      description: 'Define custom roles and granular permissions for both internal teams and client-side users.'
    },
    {
      icon: FolderKanban,
      number: '04',
      title: 'Create Projects',
      description: 'Initiate projects with complete profiles, settings, and integrate with Azure DevOps if needed.'
    },
    {
      icon: ListTree,
      number: '05',
      title: 'Structure Phases & Milestones',
      description: 'Organize work into phases, milestones, and sprints with budgets, timelines, and deliverables.'
    },
    {
      icon: FileCheck,
      number: '06',
      title: 'Manage Deliverables',
      description: 'Upload documents, send for approval, track comments, and maintain version history with audit logs.'
    },
    {
      icon: BarChart3,
      number: '07',
      title: 'Track Budgets & Timelines',
      description: 'Monitor project health through real-time dashboards showing budget utilization and timeline progress.'
    },
    {
      icon: Receipt,
      number: '08',
      title: 'Close Milestones & Invoice',
      description: 'Complete milestones, generate invoices, and track payment status through the integrated billing system.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            A structured workflow designed to bring clarity and control to every stage of client collaboration.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 hidden lg:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col lg:flex-row gap-6 lg:gap-12">
                <div className="lg:w-16 flex-shrink-0 flex items-start justify-center lg:justify-start">
                  <div className="relative z-10 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-200/60 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-lg p-3">
                      <step.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white font-medium rounded-lg hover:opacity-95 transition-all transform hover:scale-105 shadow-lg">
            See ClientSphere in Action
          </button>
        </div>
      </div>
    </section>
  );
}
