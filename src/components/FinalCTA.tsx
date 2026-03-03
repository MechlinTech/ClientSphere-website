import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Bring Structure to Client Collaboration
        </h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Join organizations that have replaced scattered tools with a unified platform for governance, visibility, and control.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <button className="px-8 py-4 bg-white font-medium rounded-lg 
                   hover:bg-blue-50 transition-all transform 
                   hover:scale-105 flex items-center gap-2 shadow-lg">
  
  <Calendar className="w-5 h-5 text-blue-600" />

  <span className="bg-gradient-to-r from-blue-600 to-purple-600 
                   bg-clip-text text-transparent">
    Book a Demo
  </span>

</button>
          <button className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg border-2 border-blue-500 hover:bg-blue-700 transition-all flex items-center gap-2 bg-gray-900 text-gray-400">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <div>
            <div className="text-3xl font-bold mb-2">Enterprise</div>
            <div className="text-blue-200">Security & governance built-in</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Unified</div>
            <div className="text-blue-200">One platform for all collaboration</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">Structured</div>
            <div className="text-blue-200">Clear hierarchy and workflows</div>
          </div>
        </div>
      </div>
    </section>
  );
}
