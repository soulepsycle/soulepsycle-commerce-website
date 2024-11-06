import ProductCard from "@/components/product-card";
import React from "react";

const FeaturedProducts = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{[1, 2, 3, 4].map((i) => (
				<ProductCard key={i} />
			))}
		</div>
	);
};

export default FeaturedProducts;
