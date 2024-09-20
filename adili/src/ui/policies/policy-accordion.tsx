import PolicyItem from '@/ui/policies/policy-item'
import PaginationControls from '@/ui/policies/pagination-controls'
import NoPolicies from '@/ui/policies/no-policies'
import { PolicyAccordionProps } from '@/types/policies'
import usePagination from '@/hooks/use-pagination'

const PolicyAccordion: React.FC<PolicyAccordionProps> = ({
  policies,
  expandedIndex,
  onToggle }) => {
  const policiesPerPage = 5;
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    handleNextPage,
    handlePreviousPage,
  } = usePagination(policies.length, policiesPerPage);

  const paginatedPolicies = policies.slice(startIndex, endIndex);

  return (
    <section className="px-4 py-8">
      {paginatedPolicies.length > 0 ? (
        <>
          {paginatedPolicies.map((policy, index) => (
            <PolicyItem
              key={policy.id}
              policy={policy}
              isExpanded={expandedIndex === index}
              index={index}
              onToggle={onToggle}
            />
          ))}
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevious={handlePreviousPage}
            onNext={handleNextPage}
          />
        </>
      ) : (
        <NoPolicies />
      )}
    </section>
  );
};

export default PolicyAccordion;
