"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function AdminPanel() {
	const { isLoaded, isSignedIn, user } = useUser();

	const isAdmin =
		user?.emailAddresses[0].emailAddress === "soulepsycle1201@gmail.com";

	if (!isAdmin) {
		return (
			<main className="h-screen flex items-center justify-center">
				<div className="flex flex-col gap-4">
					<p>You are not authorized to access this page.</p>
					<Button variant={"default"} asChild>
						<Link
							href={"/"}
							className="underline underline-offset-4"
						>
							Go back to home page
						</Link>
					</Button>
				</div>
			</main>
		);
	}

	if (!isLoaded || !isSignedIn) {
		return null;
	}

	return (
		<section className="container mx-auto px-6 py-8">
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-3xl font-semibold text-gray-800">
					Dashboard
				</h1>
			</div>

			{/* Dashboard Content */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-semibold mb-2">Total Orders</h2>
					<p className="text-3xl font-bold">1,234</p>
				</div>
				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-semibold mb-2">
						Total Revenue
					</h2>
					<p className="text-3xl font-bold">$45,678</p>
				</div>
				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-semibold mb-2">
						Total Customers
					</h2>
					<p className="text-3xl font-bold">5,678</p>
				</div>
				<div className="bg-white rounded-lg shadow-md p-6">
					<h2 className="text-xl font-semibold mb-2">
						Total Products
					</h2>
					<p className="text-3xl font-bold">890</p>
				</div>
			</div>

			{/* Recent Orders Table */}
			<div className="mt-8">
				<h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
				<div className="bg-white rounded-lg shadow-md overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="bg-gray-100">
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Order ID
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Customer
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Date
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Total
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Status
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{[
								{
									id: "1234",
									customer: "John Doe",
									date: "2023-05-20",
									total: "$123.45",
									status: "Completed",
								},
								{
									id: "1235",
									customer: "Jane Smith",
									date: "2023-05-19",
									total: "$234.56",
									status: "Processing",
								},
								{
									id: "1236",
									customer: "Bob Johnson",
									date: "2023-05-18",
									total: "$345.67",
									status: "Shipped",
								},
							].map((order) => (
								<tr key={order.id}>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{order.id}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
										{order.customer}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{order.date}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
										{order.total}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{order.status}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}
