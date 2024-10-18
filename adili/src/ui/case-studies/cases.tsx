import Carousel from '@/ui/case-studies/carousel'
import Case1 from '@/ui/case-studies/case1/case'
import Case2 from '@/ui/case-studies/case2/case'
import Case3 from '@/ui/case-studies/case3/case'
import Case4 from '@/ui/case-studies/case4/case'

const Cases: React.FC = () => {
	return (
		<div className="text-center pt-8 md:pt-16 lg:pt-8">
			<h1 className="text-xl md:text-2xl lg:text-4xl text-red-600 font-black">
				Ethics and Integrity Case Studies
			</h1>
			<div className="flex justify-center items-center mt-6">
				<div className="w-full max-w-4xl">
					<Carousel>
						<Case1 />
						<Case2 />
						<Case3 />
						<Case4 />
					</Carousel>
				</div>
			</div>
		</div>
	)
}

export default Cases;
