import { InputType, Field, Int } from "type-graphql";

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name!: string;

  @Field(() => Int)
  quantity!: number;

}
