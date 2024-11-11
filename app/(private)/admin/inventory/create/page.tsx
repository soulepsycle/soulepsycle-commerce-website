import React from "react";
import ProductForm from "../components/product-form";
import { Toaster } from "react-hot-toast";

const CreateProductPage = () => {
	return (
		<>
			<Toaster />
			<section className="container mx-auto px-6 py-8">
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-3xl font-semibold text-gray-800">
						Create Product Page
					</h1>
				</div>

				{/* Create Product Form */}
				<ProductForm type="create" />
			</section>
		</>
	);
};

export default CreateProductPage;
