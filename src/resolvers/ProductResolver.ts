import {Resolver, Query ,Mutation, Arg} from 'type-graphql';
import { Product } from "../entity/Products";
import { CreateProductInput } from "../inputs/CreateProductInput";

@Resolver()
export class ProductResolver {

    @Mutation(() => Product)
    async createProduct(@Arg("data") data: CreateProductInput){
        let producto = await Product.create({name: data.name, quantity: data.quantity})
        producto = await producto.save();
        if (!producto) throw new Error("Product not created!");
        return producto;
    }

    @Query(() => [Product])
    getProducts() {
        return Product.find();
    }

    @Query(() => Product)
    getProductsById(@Arg("id") id: number) {
        return Product.findOne({
        where: { id },
    });
  }

}