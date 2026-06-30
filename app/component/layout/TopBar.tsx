import Container from "../ui/Container";

export default function TopBar() {
  return (
    <div className="bg-[#3D5E1D] text-white text-sm">
      <Container>
        <div className="flex justify-between py-3">

          <p>🚚 Free Shipping on Orders Above $999</p>

          <p>Cash on Delivery Available</p>

          <p>💚 100% Keto • 100% You</p>

        </div>
      </Container>
    </div>
  );
}