'use client';

interface Specialty {
  name: string;
}

interface TeamMember {
  name: string;
  role: string;
  specialties: Specialty[];
  avatarColor: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'SAM',
    role: 'Maps & Geospatial Architect',
    specialties: [
      { name: 'Map SDKs' },
      { name: 'Spatial DBs' },
      { name: 'GeoVis' }
    ],
    avatarColor: '#007bff'
  },
  {
    name: 'Jenkins',
    role: 'Search Infrastructure Lead',
    specialties: [
      { name: 'Elasticsearch' },
      { name: 'Vector Search' },
      { name: 'Query Optimization' }
    ],
    avatarColor: '#ffc107'
  },
  {
    name: 'Rick',
    role: 'Full-Stack Explorer',
    specialties: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'API Design' }
    ],
    avatarColor: '#10b981'
  },
  {
    name: 'DOC OC',
    role: 'AI & Maps Researcher',
    specialties: [
      { name: 'Computer Vision' },
      { name: 'LLM Integration' },
      { name: 'Geospatial AI' }
    ],
    avatarColor: '#f97316'
  }
];

export default function TeamTabs() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4 fade-enter">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Team Synergy Showcase
        </h1>
        <p className="text-lg text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto">
          Explore the combined expertise of our Maps & Search specialists in a sleek glassmorphic interface.
        </p>
      </div>

      <nav className="grid grid-cols-1 md:grid-cols-2 gap-4 fade-enter" style={{ animationDelay: '100ms' }}>
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.name} member={member} delay={index * 100} />
        ))}
      </nav>
    </section>
  );
}

function TeamMemberCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <div 
      className="glass-hover glass rounded-2xl p-6 hover-lift fade-enter"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-center space-y-4">
        <div className="relative mx-auto w-28 h-28 md:w-32 md:h-32 flex items-center justify-center hover-lift">
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse"
            style={{ backgroundColor: member.avatarColor }}
          />
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-primary/20 glass overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full p-4">
              <circle cx="50" cy="50" r="45" fill={`url(#avatar-${member.name})`} />
              <defs>
                <radialGradient id={`avatar-${member.name}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={member.avatarColor} stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1a1d29" stopOpacity="0.3" />
                </radialGradient>
              </defs>
            </svg>
            <div className="absolute text-3xl">
              {member.name === 'SAM' && '🗺️'}
              {member.name === 'Jenkins' && '🔍'}
              {member.name === 'Rick' && '⚡'}
              {member.name === 'DOC OC' && '🧠'}
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center">{member.name}</h2>
        <p className="text-center text-sm text-[rgba(255,255,255,0.7)]">{member.role}</p>
        
        <div className="flex flex-wrap justify-center gap-2">
          {member.specialties.map((specialty, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 rounded-full text-xs glass hover-lift"
              style={{ animationDelay: `${delay + idx * 50}ms` }}
            >
              {specialty.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
