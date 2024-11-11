"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

const ProductForm = ({ type }: { type: string }) => {
    const router = useRouter();

	const handleSubmit = async () => {
		try {
			if (type === "create") {
				await axios.post("/api/inventory");
				toast.success("Successfully create a product");

                setTimeout(() => {
                    router.refresh();
                    router.push('/admin/inventory');
                }, 2500)
			}
		} catch (error) {
			if (type === "create") {
				if (error instanceof z.ZodError) {
					console.log("Error creating a product [ZOD_ERROR]", error);
				}

				console.log(
					"Error creating a product [BUTTON_INVENTORY]",
					error
				);
			}
		}
	};

	return (
		<form>
			<Toaster />
			<Button formAction={handleSubmit}>Create new Product</Button>
		</form>
	);
};

export default ProductForm;
