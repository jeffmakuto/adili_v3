import Case1 from '@/ui/case-studies/case1/case'
import Case2 from '@/ui/case-studies/case2/case'
import Case3 from '@/ui/case-studies/case3/case'
import Case4 from '@/ui/case-studies/case4/case'
import Dilemma from '@/ui/case-studies/dilemma'

export const caseList = [
  { title: "Ethical Dilemmas", component: <Dilemma /> },
  { title: "Case Study 1", component: <Case1 /> },
  { title: "Case Study 2", component: <Case2 /> },
  { title: "Case Study 3", component: <Case3 /> },
  { title: "Case Study 4", component: <Case4 /> },
]
