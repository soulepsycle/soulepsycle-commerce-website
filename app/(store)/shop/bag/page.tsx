"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type BagItem = {
	id: string;
	productName: string;
	color: string;
	size: string;
	price: number;
	quantity: number;
	image: string;
};

export default function BagPage() {
	const [bagItems, setBagItems] = useState<BagItem[]>([
		{
			id: "1",
			productName: "Classic T-Shirt",
			color: "White",
			size: "M",
			price: 29.99,
			quantity: 2,
			image: "/placeholder-dark-image.png",
		},
		{
			id: "2",
			productName: "Slim Fit Jeans",
			color: "Blue",
			size: "32",
			price: 59.99,
			quantity: 1,
			image: "/placeholder-dark-image.png",
		},
	]);

	const updateQuantity = (id: string, newQuantity: number) => {
		setBagItems(
			bagItems.map((item) =>
				item.id === id
					? { ...item, quantity: Math.max(1, newQuantity) }
					: item
			)
		);
	};

	const removeItem = (id: string) => {
		setBagItems(bagItems.filter((item) => item.id !== id));
	};

	const subtotal = bagItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const shipping = 5.99;
	const total = subtotal + shipping;

	return (
		<main className="flex-1">
			<section className="w-full py-8 md:py-14 lg:py-16 bg-gray-100">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl sm:text-5xl mb-12 font-bold tracking-tighter">
						Your Bag
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="md:col-span-2 space-y-4">
							{bagItems.map((item) => (
								<div
									key={item.id}
									className="flex items-center space-x-4 border-b pb-4"
								>
									<Image
										src={item.image}
										alt={item.productName}
										width={100}
										height={100}
										className="rounded-md"
									/>
									<div className="flex-grow grid gap-4 grid-cols-1 md:flex">
										<div className="flex-grow">
											<h3 className="font-semibold">
												{item.productName}
											</h3>
											<p className="text-sm text-gray-600">
												Color: {item.color}
											</p>
											<p className="text-sm text-gray-600">
												Size: {item.size}
											</p>
											<p className="font-semibold mt-2">
												${item.price.toFixed(2)}
											</p>
										</div>
										<div className="flex items-center space-x-2">
											<Button
												variant="outline"
												size="icon"
												onClick={() =>
													updateQuantity(
														item.id,
														item.quantity - 1
													)
												}
											>
												<Minus className="h-4 w-4" />
											</Button>
											<Input
												type="number"
												value={item.quantity}
												onChange={(e) =>
													updateQuantity(
														item.id,
														parseInt(e.target.value)
													)
												}
												className="w-16 text-center"
											/>
											<Button
												variant="outline"
												size="icon"
												onClick={() =>
													updateQuantity(
														item.id,
														item.quantity + 1
													)
												}
											>
												<Plus className="h-4 w-4" />
											</Button>
										</div>
									</div>
									<Button
										variant="destructive"
										size="icon"
										onClick={() => removeItem(item.id)}
									>
										<Trash2 className="h-4 w-4" />
									</Button>
								</div>
							))}
						</div>
						<div className="bg-gray-50 p-6 rounded-lg">
							<h2 className="text-xl font-semibold mb-4">
								Order Summary
							</h2>
							<div className="space-y-2">
								<div className="flex justify-between">
									<span>Subtotal</span>
									<span>${subtotal.toFixed(2)}</span>
								</div>
								<div className="flex justify-between">
									<span>Shipping</span>
									<span>${shipping.toFixed(2)}</span>
								</div>
								<Separator />
								<div className="flex justify-between font-semibold">
									<span>Total</span>
									<span>${total.toFixed(2)}</span>
								</div>
							</div>
							<Button className="w-full mt-6" size="lg">
								<Truck className="mr-2 h-4 w-4" /> Proceed to
								Checkout
							</Button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
