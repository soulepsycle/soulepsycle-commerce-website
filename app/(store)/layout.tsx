import Link from "next/link";
import StoreNavbar from "./components/store-navbar";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function StoreLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<StoreNavbar />
			<div className="flex flex-col min-h-screen">{children}</div>
			<footer className="w-full border-t bg-gray-100 py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="space-y-4">
							<h3 className="font-bold">Shop</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/products"
										className="hover:underline"
									>
										All Products
									</Link>
								</li>
								<li>
									<Link
										href="/new-arrivals"
										className="hover:underline"
									>
										New Arrivals
									</Link>
								</li>
								<li>
									<Link
										href="/sale"
										className="hover:underline"
									>
										Sale
									</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-4">
							<h3 className="font-bold">Company</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/about"
										className="hover:underline"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="hover:underline"
									>
										Contact
									</Link>
								</li>
								<li>
									<Link
										href="/careers"
										className="hover:underline"
									>
										Careers
									</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-4">
							<h3 className="font-bold">Support</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/faq"
										className="hover:underline"
									>
										FAQ
									</Link>
								</li>
								<li>
									<Link
										href="/shipping"
										className="hover:underline"
									>
										Shipping
									</Link>
								</li>
								<li>
									<Link
										href="/returns"
										className="hover:underline"
									>
										Returns
									</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-4">
							<h3 className="font-bold">Connect</h3>
							<div className="flex space-x-4">
								<Link href="#" className="hover:text-primary">
									<Facebook className="h-6 w-6" />
									<span className="sr-only">Facebook</span>
								</Link>
								<Link href="#" className="hover:text-primary">
									<Twitter className="h-6 w-6" />
									<span className="sr-only">Twitter</span>
								</Link>
								<Link href="#" className="hover:text-primary">
									<Instagram className="h-6 w-6" />
									<span className="sr-only">Instagram</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="mt-12 text-center text-gray-600">
						<p>© 2024 SoulePsycle. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</>
	);
}
