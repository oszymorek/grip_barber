function BoxPrice({ price }) {
  return (
    <div className="flex justify-end items-center gap-4 text-lg lg:text-2xl mt-6">
      <p>Cena: </p>
      <p className="text-white bg-gold px-2 py-2 text-2xl lg:text-4xl">
        {price}
      </p>
    </div>
  );
}
export default BoxPrice;
