import Case1 from '@/ui/case-studies/case1/case'
import Case2 from '@/ui/case-studies/case2/case'
import Case3 from '@/ui/case-studies/case3/case'
import Case4 from '@/ui/case-studies/case4/case'
import Dilemma from '@/ui/case-studies/dilemma'

export const caseList = [
  { title: "Introduction to Ethical Dilemmas", component: <Dilemma /> },
  { title: "Accepting Hospitality from a Business partner in return for a favor", component: <Case1 /> },
  { title: "Accepting a gift/bribe in return for a favour", component: <Case2 /> },
  { title: "Acceptance of Unwelcomed Gifts", component: <Case3 /> },
  { title: "Receiving Inappropriate Gifts", component: <Case4 /> },
]
