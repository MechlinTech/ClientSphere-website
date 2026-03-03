import { Shield, Lock, FileSearch, UserCheck, Activity, Database } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Access Control',
      description: 'Configurable role-based permissions ensure only authorized users can access sensitive data and operations.'
    },
    {
      icon: Lock,
      title: 'Secure Authentication',
      description: 'Multi-layered authentication with OAuth support, session management, and secure email invitations.'
    },
    {
      icon: FileSearch,
      title: 'Document Audit Trails',
      description: 'Complete visibility into document access, modifications, and approval workflows with timestamped logs.'
    },
    {
      icon: UserCheck,
      title: 'Approval Logs',
      description: 'Track every approval, rejection, and change request with full attribution and timestamp records.'
    },
    {
      icon: Activity,
      title: 'Administrative Control',
      description: 'Organization admins maintain complete oversight with user management, role assignments, and access revocation.'
    },
    {
      icon: Database,
      title: 'Data Governance',
      description: 'Structured data management with version control, backup capabilities, and compliance-ready architecture.'
    }
  ];

  return (
    <section id="security" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Security & Governance
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Enterprise Security
          </h2>
          <p className="text-lg text-gray-600">
            ClientSphere provides the security controls and governance frameworks that enterprise organizations require for compliant, auditable collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Compliance-Ready Architecture</h3>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              ClientSphere's architecture is designed to meet enterprise compliance requirements with configurable permissions, comprehensive audit trails, and administrative controls that provide visibility into every action across your organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm text-blue-50">Configurable Permissions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold mb-1">Full</div>
                <div className="text-sm text-blue-50">Audit Trail Coverage</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold mb-1">Zero</div>
                <div className="text-sm text-blue-50">Default Permissions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
