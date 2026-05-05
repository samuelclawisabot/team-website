'use client';

interface TeamOverlap {
  name: string;
}

interface ProjectProposal {
  title: string;
  description: string;
  overlaps: TeamOverlap[];
  icon: string;
}

const projects: ProjectProposal[] = [
  {
    title: 'Geo-Search Integration Hub',
    description: 'Seamlessly integrate vector search capabilities with geospatial data pipelines. Real-time map annotations powered by semantic understanding.',
    overlaps: [
      { name: 'Jenkins' },
      { name: 'DOC OC' },
      { name: 'Rick' }
    ],
    icon: '🔗'
  },
  {
    title: 'Spatial Knowledge Graph',
    description: 'Map entity relationships across geospatial dimensions. Visualize connections between locations, organizations, and events.',
    overlaps: [
      { name: 'SAM' },
      { name: 'Jenkins' },
      { name: 'DOC OC' }
    ],
    icon: '🕸️'
  },
  {
    title: 'AI Route Optimizer',
    description: 'ML-powered intelligent route planning considering traffic patterns, terrain data, and real-time conditions.',
    overlaps: [
      { name: 'DOC OC' },
      { name: 'SAM' },
      { name: 'Rick' }
    ],
    icon: '🚀'
  },
  {
    title: 'Semantic Map Explorer',
    description: 'Natural language interface for map exploration. Ask questions about maps and get location-based insights.',
    overlaps: [
      { name: 'Jenkins' },
      { name: 'SAM' },
      { name: 'Rick' }
    ],
    icon: '🗺️💬'
  },
  {
    title: 'GeoVis Analytics Dashboard',
    description: 'Real-time geospatial visualization and analytics. Track patterns, hotspots, and trends across your map data.',
    overlaps: [
      { name: 'SAM' },
      { name: 'Rick' },
      { name: 'DOC OC' }
    ],
    icon: '📊'
  }
];

export default function ProjectProposals() {
  return (
    <section className="space-y-8 fade-enter" style={{ animationDelay: '200ms' }}>
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          What&apos;s Next
        </h2>
        <p className="text-lg text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto">
          Explore forward-thinking projects that combine maps and search technologies across our team&apos;s expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectNode key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectNode({ project }: { project: ProjectProposal }) {
  return (
    <article className="hex-node glass rounded-2xl p-6 relative overflow-hidden hover-lift fade-enter" style={{ animationDelay: '150ms' }}>
      {/* Main content visible always */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{project.icon}</span>
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>
        
        <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 pt-2">
          {project.overlaps.map((overlap, idx) => (
            <span 
              key={idx}
              className="px-2 py-1 rounded-full text-xs glass"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {overlap.name}
            </span>
          ))}
        </div>
      </div>

      {/* Hidden content revealed on hover */}
      <div className="hex-content glass rounded-lg p-4 space-y-2">
        <h4 className="text-sm font-semibold text-primary">Deliverables</h4>
        <ul className="text-xs text-[rgba(255,255,255,0.7)] space-y-1">
          <li>• Interactive prototype with live map integration</li>
          <li>• API documentation and open source library</li>
          <li>• Demo presentation for team review</li>
        </ul>
      </div>
    </article>
  );
}
