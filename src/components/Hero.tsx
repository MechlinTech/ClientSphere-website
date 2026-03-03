import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Where Clients and Organizations Work as One
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Enterprise-grade collaboration, access control, structured project governance, and secure document workflows in one unified platform. Built for companies that demand control, clarity, and transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-600/30 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
              Get a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all flex items-center gap-2">
              <Play className="w-5 h-5" />
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 mb-3">PROJECT HIERARCHY</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="font-medium text-gray-900">Phase 1: Foundation</span>
                    </div>
                    <div className="ml-4 space-y-1.5">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                        <span className="text-gray-700">Milestone: API Development</span>
                      </div>
                      <div className="ml-4 space-y-1">
                        <div className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                          Sprint 1: Authentication
                        </div>
                        <div className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                          Sprint 2: User Management
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 mb-3">ROLE CONFIGURATION</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Project Manager</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Full Access</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Developer</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Limited</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Client Viewer</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Read Only</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 mb-3">BUDGET OVERVIEW</div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">Utilized</span>
                        <span className="font-medium text-gray-900">$45,000 / $60,000</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-white p-2 rounded border border-gray-200">
                        <div className="text-gray-500">Allocated</div>
                        <div className="font-semibold text-gray-900">$60K</div>
                      </div>
                      <div className="bg-white p-2 rounded border border-gray-200">
                        <div className="text-gray-500">Spent</div>
                        <div className="font-semibold text-gray-900">$45K</div>
                      </div>
                      <div className="bg-white p-2 rounded border border-gray-200">
                        <div className="text-gray-500">Remaining</div>
                        <div className="font-semibold text-gray-900">$15K</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 mb-3">CLIENT WORKSPACE</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">Project Health</span>
                      <span className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-green-700 font-medium">On Track</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">Next Milestone</span>
                      <span className="text-gray-900 font-medium">12 days</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">Pending Approvals</span>
                      <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-medium">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
