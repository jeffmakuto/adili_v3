import { heading } from '@/styles/values'
import { caseList } from '@/ui/case-studies/case-list'
import { CaseSelectorProps } from '@/types/cases'

/**
 * CaseSelector Component - Displays a list of case studies to choose from.
 * 
 * @param {CaseSelectorProps} props - Selected Case Index, Set Selected Case Index
 * @returns JSX.Element
 */
const CaseSelector: React.FC<CaseSelectorProps> = ({ selectedCaseIndex, setSelectedCaseIndex }) => (
  <div className="text-center p-6">
    <h2 className={heading}>Ethics & Integrity Case Studies</h2>
    <ul className="space-y-4 mt-4 shadow-lg rounded-lg">
      {caseList.map((caseItem, index) => (
        <li key={index}>
          <button
            className={`w-full text-left py-2 px-4 rounded-md transition-all duration-300 ${
              index === selectedCaseIndex
                ? 'bg-red-600 text-white font-bold'
                : 'text-black hover:text-white hover:bg-red-700'
            }`}
            onClick={() => setSelectedCaseIndex(index)}
          >
            {caseItem.title}
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default CaseSelector
