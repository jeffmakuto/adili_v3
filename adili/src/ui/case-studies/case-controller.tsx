'use client'

import { useState } from 'react'
import MeetTheTeam from '@/ui/case-studies/meet-the-team'
import CaseSelector from '@/ui/case-studies/case-selector'
import { caseList } from '@/ui/case-studies/case-list'

/**
 * CaseController Component - Manages the display and selection of various case studies.
 * Allows the user to select a case and view its content dynamically.
 * 
 * @returns JSX.Element
 */
const CaseController: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0) /* State to manage selected case */

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Left Column: Meet the Team + Case Selector */}
    <div className="flex flex-col space-y-4 md:space-y-16">
        <MeetTheTeam />
        
        {/* Case Selector below Meet The Team */}
        <div className="p-4">
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
