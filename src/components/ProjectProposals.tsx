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
    title: 'Geo-Search Hub',
    description: 'Integrate vector search with geospatial data for real-time map annotations.',
    overlaps: [
      { name: 'Jenkins' },
      { name: 'DOC OC' },
      { name: 'Rick' }
    ],
    icon: '🔗'
  },
  {
    title: 'Knowledge Graph',
    description: 'Map entity relationships across locations, organizations, and events.',
    overlaps: [
      { name: 'SAM' },
      { name: 'Jenkins' },
      { name: 'DOC OC' }
    ],
    icon: '🕸️'
  },
  {
    title: 'Route Optimizer',
    description: 'ML-powered route planning with traffic & terrain data.',
    overlaps: [
      { name: 'DOC OC' },
      { name: 'SAM' },
      { name: 'Rick' }
    ],
    icon: '🚀'
  },
  {
    title: 'Map Explorer',
    description: 'Natural language interface for map exploration and location insights.',
    overlaps: [
      { name: 'Jenkins' },
      { name: 'SAM' },
      { name: 'Rick' }
    ],
    icon: '🗺️💬'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time geospatial visualization and trend tracking.',
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
    <article className="glass rounded-2xl p-5 relative overflow-hidden hover-lift fade-enter h-full flex flex-col" style={{ animationDelay: '150ms' }}>
      {/* Main content visible always */}
      <div className="flex-1 space-y-3 flex flex-col">
        <div className="flex items-start gap-2">
          <span className="text-xl flex-shrink-0">{project.icon}</span>
          <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
        </div>
        
        <p className="text-xs text-[rgba(255,255,255,0.7)] leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 pt-1">
          {project.overlaps.slice(0, 2).map((overlap, idx) => (
            <span 
              key={idx}
              className="px-2 py-0.5 rounded-full text-xs glass"
            >
              {overlap.name}
            </span>
          ))}
          {project.overlaps.length > 2 && (
            <span className="text-xs text-[rgba(255,255,255,0.5)]">+{project.overlaps.length - 2}</span>
          )}
        </div>
      </div>
    </article>
  );
}
