import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeaturedProducts from "./components/featured-products";

export default function LandingPage() {
	return (
		<>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Welcome to SoulePsycle.com
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
									[soul•cycle]shouting your sighs. All our designs are copyright of our store. DO NOT REPRINT.
								</p>
							</div>
							<div className="space-x-4">
								<Button asChild>
									<Link href="/shop">Shop Now</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Featured Products
						</h2>
						<FeaturedProducts />
						<div className="mt-12 text-center">
							<Button asChild>
								<Link href="/products">View All Products</Link>
							</Button>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
