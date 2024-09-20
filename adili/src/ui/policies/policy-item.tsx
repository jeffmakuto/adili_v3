import Image from 'next/image'
import Link from 'next/link'
import { PolicyItemProps } from '@/types/policies'
import { heading, paragraph } from '@/styles/values'

const SIGN_INTEGRITY_CODE = process.env.NEXT_PUBLIC_SIGN_INTEGRITY_CODE || "#";

const PolicyHeader: React.FC<{ policy: PolicyItemProps['policy']; isExpanded: boolean; onToggle: () => void }> = ({ policy, isExpanded, onToggle }) => (
    <div
        className="flex justify-between items-center cursor-pointer
        hover:bg-gray-200 p-4 rounded-lg transition ease-in-out duration-200"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`policy-content-${policy.id}`}
    >
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="flex-shrink-0">
                <Image
                    src={policy.icon}
                    alt={`${policy.title} Icon`}
                    width={200}
                    height={200}
                />
            </div>
            <h2 className={`${heading} mt-4 sm:mt-0 sm:ml-4 text-left`}>
                {policy.title}
            </h2>
        </div>
        <div className="ml-auto">
            {isExpanded ? (
                <span className="text-red-600 text-xl">−</span>
            ) : (
                <span className="text-red-600 text-xl">+</span>
            )}
        </div>
    </div>
);

const PolicyContent: React.FC<{ policy: PolicyItemProps['policy']; isExpanded: boolean; index: number }> = ({ policy, isExpanded, index }) => (
    isExpanded && (
        <div id={`policy-content-${index}`} className="mt-4 px-4">
            <p className={paragraph}>
                {policy.id === '1' ? (
                    <>
                        {policy.description} Integrity Code{' '}
                        <Link
                            href={SIGN_INTEGRITY_CODE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 underline"
                        >
                            here
                        </Link>.
                    </>
                ) : (
                    policy.description
                )}
            </p>
            <Link
                href={policy.embedSrc}
                target="_blank"
                rel="noopener noreferrer"
                className={`${paragraph} mt-4 inline-block px-6 py-2 bg-red-600
                text-white rounded-lg shadow-md hover:bg-red-700 transition-colors`}
            >
                View Document
            </Link>
        </div>
    )
);

const PolicyItem: React.FC<PolicyItemProps> = ({ policy, isExpanded, index, onToggle }) => {
    return (
        <div className="border-b py-4 border-[#0d0d0d]">
            <PolicyHeader
                policy={policy}
                isExpanded={isExpanded}
                onToggle={() => onToggle(index)}
            />
            <PolicyContent
                policy={policy}
                isExpanded={isExpanded}
                index={index}
            />
        </div>
    );
};

export default PolicyItem;
