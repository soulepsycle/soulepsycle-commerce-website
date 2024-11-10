import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const ProductCard = () => {
	return (
		<div
			className="group relative overflow-hidden rounded-lg shadow-lg"
		>
			<div className="relative w-full h-[300px]">
			<Image
				src={`/placeholder-dark-image.png`}
				alt={`Product`}
				fill
				sizes="(min-width: 208px)"
				className="object-cover w-full transition-transform group-hover:scale-105"
			/>
			</div>
			<div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
				<Button>Quick View</Button>
			</div>
			<div className="p-4 bg-white">
				<h3 className="font-semibold text-lg mb-2">Product Name</h3>
				<p className="text-gray-600">$99.99</p>
			</div>
		</div>
	);
};

export default ProductCard;
