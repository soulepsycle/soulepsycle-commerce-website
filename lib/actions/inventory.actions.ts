'use server';

import z from "zod";
import prisma from "../db";
import { Prisma } from "@prisma/client";

export async function createDummyProducts() {
	try {
		const productData = [
            {
                name: "Premium V-Neck Shirt",
                slug: "premium-v-neck-shirt",
                price: 79.99,
                sku: "PREMIUMVNECK-001",
                category_id: "9cf60350-8f59-4569-a20a-d85fd9b09564",
                description: 'test-desc',
                ProductVariantColor: [
                    {
                        color: "Blue",
                        images: ["blue-image-1.jpg", "blue-image-2.jpg"],
                        ProductVariantSize: [
                            {
                                size: "M",
                                stock: 50,
                                status: "Active",
                            },
                            {
                                size: "L",
                                stock: 30,
                                status: "Active",
                            },
                        ],
                    },
                    {
                        color: "Black",
                        images: ["black-image-1.jpg"],
                        ProductVariantSize: [
                            {
                                size: "S",
                                stock: 70,
                                status: "Active",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Tote Bag Darkening",
                slug: "tote-bag-darkening",
                price: 15.99,
                sku: "TOTEBAGLANG",
                category_id: "9cf60350-8f59-4569-a20a-d85fd9b09564",
                description: 'test-desc',
                ProductVariantColor: [
                    {
                        color: "Red",
                        images: ["image-1.jpg"],
                        ProductVariantSize: [
                            {
                                size: "XS",
                                stock: 123,
                                status: "Active",
                            },
                        ],
                    },
                ],
            },
        ] as Prisma.ProductGetPayload<{
            include: {
                ProductVariantColor: {
                    include: {
                        ProductVariantSize: true
                    }
                }
            }
        }>[];

        for (const product of productData) {
            await prisma.product.create({
                data: {
                    name: product.name,
                    slug: product.slug,
                    price: product.price,
                    sku: product.sku,
                    category_id: product.category_id,
                    ProductVariantColor: {
                        create: product.ProductVariantColor.map((variantColor) => ({
                            color: variantColor.color,
                            images: variantColor.images,
                            ProductVariantSize: {
                                create: variantColor.ProductVariantSize.map((variantSize) => ({
                                    size: variantSize.size,
                                    stock: variantSize.stock,
                                    status: variantSize.status,
                                }))
                            },
                        }))
                    },
                }
            })
        }

	} catch (error) {
		if (error instanceof z.ZodError) {
			console.log("Error creating dummy products [ZOD_ERROR]", error);
		}
		console.log("Error creating dummy products", error);
	}
}
