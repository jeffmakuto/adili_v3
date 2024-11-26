'use client'

import { useState, ChangeEvent } from 'react'
import SearchBar from '@/ui/policies/search-bar'
import PolicyAccordion from '@/ui/policies/policy-accordion'
import { policies } from '@/data/policies'

/**
 * PoliciesView Component - Displays the Policies View.
 * 
 * @returns JSX.Element
 */
const PoliciesView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredPolicies = policies.filter((policy) =>
    policy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <PolicyAccordion policies={filteredPolicies} expandedIndex={expandedIndex} onToggle={handleToggle} />
    </div>
  );
};

export default PoliciesView;
