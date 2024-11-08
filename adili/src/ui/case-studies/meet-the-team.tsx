import TeamVideo from '@/ui/case-studies/team-video'

const MeetTheTeam: React.FC = () => {
  return (
    <div className="shadow-lg text-center pt-8 md:pt-16 lg:pt-8">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-black mb-6">
        Meet The Team
      </h1>
      <div className="flex justify-center items-center p-4 md:mt-12">
        <div className="w-full max-w-4xl p-4"> 
          <TeamVideo />
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
