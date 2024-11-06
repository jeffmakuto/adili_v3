import { heading } from '@/styles/values'
import { caseList } from '@/ui/case-studies/case-list'

interface CaseSelectorProps {
  selectedCaseIndex: number
  setSelectedCaseIndex: (index: number) => void
}

const CaseSelector: React.FC<CaseSelectorProps> = ({ selectedCaseIndex, setSelectedCaseIndex }) => (
  <div className="text-center p-6 rounded-lg shadow-lg">
    <h2 className={heading}>Ethics & Integrity Case Studies</h2>
    <ul className="space-y-4">
      {caseList.map((caseItem, index) => (
        <li key={index}>
          <button
            className={`w-full text-left py-2 px-4 rounded-md transition-all duration-300 ${
              index === selectedCaseIndex
                ? 'bg-red-600 text-white font-bold'
                : 'text-red-600 hover:bg-red-100'
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
