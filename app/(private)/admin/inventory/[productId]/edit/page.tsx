import React from "react";

const ProductEditPage = ({
    params
}: {
    params: {
        productId: string;
    }
}) => {
	return (
		<section className="container mx-auto px-6 py-8">
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-3xl font-semibold text-gray-800">
					Product Edit Page
				</h1>
			</div>

			<div>
                <p className="text-lg">{params.productId}</p>
            </div>
		</section>
	);
};

export default ProductEditPage;
