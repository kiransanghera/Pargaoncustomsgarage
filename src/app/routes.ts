import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { VinylWrapping } from "./pages/services/VinylWrapping";
import { CeramicCoating } from "./pages/services/CeramicCoating";
import { WindowTinting } from "./pages/services/WindowTinting";
import { PaintProtection } from "./pages/services/PaintProtection";
import { Gallery } from "./pages/Gallery";
import { Booking } from "./pages/Booking";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/vinyl-wrapping", Component: VinylWrapping },
      { path: "services/ceramic-coating", Component: CeramicCoating },
      { path: "services/window-tinting", Component: WindowTinting },
      { path: "services/paint-protection", Component: PaintProtection },
      { path: "gallery", Component: Gallery },
      { path: "booking", Component: Booking },
    ],
  },
]);
