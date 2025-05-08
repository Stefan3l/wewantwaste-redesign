import { Outlet } from "react-router-dom";

//import components
import Container from "../components/Container";

export default function DefaultLayout() {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
}
