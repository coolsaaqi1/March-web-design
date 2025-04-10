import { title } from "@/components/primitives";

export default function recipePage() {
  return (
    <div>
      <div className="flex flex-wrap text-2xl m-2 border-2 border-white justify-center">
        <p className="m-6 border-2 border-white">Child #1</p>
        <p className="m-6 border-2 border-white">Child #2</p>
        <p className="m-6 border-2 border-white">Child #3</p>
      </div>
      <h1 className={title()}>Recipes</h1>
      <>
        <p className="text-3xl">
          <b>How to make a delicious chocolate cake</b>
        </p>
        <h1 className="text-2xl">Ingredients needed:</h1>
        <h2>2 cups white sugar</h2>
        <h3>1 ¾ cup all-purpose flour</h3>
        <h4>¾ cup unsweetened cocoa powder</h4>
        <h5>1 ½ teaspoons baking powder</h5>
        <h6>1 ½ teaspoons baking soda</h6>
        <h1>1 teaspoon salt</h1>
        <h1>2 eggs</h1>
        <h1>1 cup milk</h1>
        <h1>1/2 cup vegetable oil</h1>
        <h1> 2 teaspoons vanilla extract</h1>
        <h1> 1 cup boiling water</h1>
        <img
          alt="random cake"
          height={1000}
          src="/downloads/chc_cake.jpg"
          width={500}
        />
      </>
    </div>
  );
}
