'use client'

import { useState } from 'react'
import MeetTheTeam from '@/ui/case-studies/meet-the-team'
import CaseSelector from '@/ui/case-studies/case-selector'
import { caseList } from '@/ui/case-studies/case-list'

const CaseController: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0) /* State to manage selected case */

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Left Column: Meet the Team + Case Selector */}
    <div className="shadow-lg flex flex-col space-y-8">
        <MeetTheTeam />
        
        {/* Case Selector below Meet The Team */}
        <div className="p-4 shadow-md">
        <CaseSelector
            selectedCaseIndex={selectedCaseIndex}
            setSelectedCaseIndex={setSelectedCaseIndex}
        />
        </div>
    </div>

    {/* Right Column: Display Selected Case */}
    <div className="shadow-lg p-4 flex-grow">
        {caseList[selectedCaseIndex].component}
    </div>
    </div>

  )
}

export default CaseController;
