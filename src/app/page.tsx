import TeamTabs from '@/components/TeamTabs';
import ProjectProposals from '@/components/ProjectProposals';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-16 fade-enter">
        <TeamTabs />
        <ProjectProposals />
      </div>
    </main>
  );
}
